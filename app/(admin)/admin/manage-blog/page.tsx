"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/Pagination/Pagination";

interface Blog {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  created_at: string;
}

const sampleBlogs: Blog[] = Array(300).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Blog Title #${i + 1}`,
  slug: `blog-title-${i + 1}`,
  thumbnail: "https://images.unsplash.com/photo-1733506903133-9d65b66d299a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
  created_at: "2025-04-01",
}));

const ITEMS_PER_PAGE = 12;

const ManageBlog = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>(sampleBlogs);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    router.replace(`?page=${page}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      const updated = blogs.filter((blog) => blog.id !== id);
      setBlogs(updated);
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
    <div className="p-4 md:p-10 max-w-6xl mx-auto space-y-6">
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

      {paginatedBlogs.length === 0 ? (
        <p className="text-muted-foreground">No blogs found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {paginatedBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden shadow-sm">
              <CardContent className="flex flex-col gap-3 p-4">
                <div className="w-full h-40 relative">
                  <Image
                    src={blog.thumbnail}
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
                    onClick={() => handleDelete(blog.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ManageBlog;
