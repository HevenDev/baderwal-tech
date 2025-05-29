"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/Pagination/Pagination";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader/CustomLoader"; // <- Import loader

interface Blog {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  created_at: string;
}

const ITEMS_PER_PAGE = 12;

const ManageBlog = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;
  const [isInitialLoadDone, setIsInitialLoadDone] = useState(false);
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [deleteSlug, setDeleteSlug] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/blog");
      setBlogs(res.data);
    } catch (err) {
      toast("Failed to load blogs", { type: "error" });
    } finally {
      setLoading(false);
      setIsInitialLoadDone(true);
    }
  };


  useEffect(() => {
    fetchBlogs();
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    router.replace(`?page=${page}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async () => {
    if (!deleteSlug) return;
    setIsDeleting(true);
    try {
      const res = await axios.delete(`/api/blog/delete?slug=${deleteSlug}`);
      if (res.status === 200) {
        toast("Blog deleted successfully");
        fetchBlogs();
      }
    } catch (error) {
      toast("Failed to delete blog", { type: "error" });
    } finally {
      setIsDeleting(false);
      setDeleteSlug(null);
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.slug.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      onPageChange(1);
    }
  }, [totalPages]);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Suspense>
      <div className="p-4 md:p-10 max-w-6xl mx-auto space-y-6 relative">
        {/* Delete confirmation overlay */}
        <AnimatePresence>
          {deleteSlug && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed m-0! inset-0 bg-black/30 z-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl space-y-4 text-center"
              >
                <h2 className="text-lg font-semibold">Confirm Deletion</h2>
                <p className="text-sm text-muted-foreground">
                  Are you sure you want to delete this blog? This action cannot be undone.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <Button
                    variant="destructive"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className={isDeleting ? "cursor-not-allowed opacity-70" : ""}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setDeleteSlug(null)}
                    disabled={isDeleting}
                  >
                    Cancel
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header & Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Manage Blogs</h1>
          <div className="flex items-center gap-2 w-full sm:w-80 border rounded-md px-3 py-1.5">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title or slug"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                onPageChange(1);
              }}
              className="w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        {/* Loader */}
        {loading ? (
          <Loader />
        ) : isInitialLoadDone && filteredBlogs.length === 0 ? (
          <p className="text-muted-foreground text-center">No blogs found.</p>

        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {paginatedBlogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden shadow-sm">
                <CardContent className="flex flex-col gap-3 p-4">
                  <div className="w-full h-40 relative">
                    <Image
                      src={blog.image_url}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold">{blog.title}</h2>
                    <p className="text-sm text-muted-foreground">{blog.slug}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(blog.created_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Link href={`/blog/${blog.slug}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" /> View
                      </Button>
                    </Link>
                    <Link href={`/admin/update-blog/${blog.slug}`}>
                      <Button variant="outline" size="sm">
                        <Pencil className="w-4 h-4 mr-1" /> Edit
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setDeleteSlug(blog.slug)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {totalPages > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}

      </div>
    </Suspense>
  );
};

export default ManageBlog;
