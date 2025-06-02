"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import axios from "axios";
import JoditEditor from "@/components/Editor/Editor";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface BlogForm {
  id: string;
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  thumbnail: string;
  description: string;
}

export default function UpdateBlogPage() {
  const { "update_blog_slug": slug } = useParams();
  const router = useRouter();
  const [form, setForm] = useState<BlogForm | null>(null);
  const [loading, setLoading] = useState(false);
  const [newFile, setNewFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.post("/api/blog/getBySlug", { slug });
      if (res.data.success) {
        setForm(res.data.blog);
      } else {
        toast.error("Blog not found");
      }
    };
    fetchBlog();
  }, [slug]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!form) return;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContentChange = (description: string) => {
    if (!form) return;
    setForm({ ...form, description });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && ["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setNewFile(file);
    } else {
      toast.error("Only image files allowed");
    }
  };

  const removeImage = () => setNewFile(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    const { id, title, slug, meta_title, meta_description, meta_keyword, description } = form;
    const cleanSlug = slug.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    const cleanContent = description.replace(/<(.|\n)*?>/g, "").trim();

    if (!title || !cleanSlug || !meta_title || !meta_description || !meta_keyword || !cleanContent) {
      toast.error("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.set("id", id);
    formData.set("title", title);
    formData.set("slug", cleanSlug);
    formData.set("meta_title", meta_title);
    formData.set("meta_description", meta_description);
    formData.set("meta_keyword", meta_keyword);
    formData.set("description", description);
    formData.set("oldThumbnail", form.thumbnail);
    if (newFile) formData.set("thumbnail", newFile);

    try {
      setLoading(true);
      const res = await axios.put("/api/blog/update", formData);
      if (res.data.success) {
        toast.success("Blog updated successfully!");
        router.push("/admin/manage-blog"); // redirect
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!form) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 space-y-6">
      <h1 className="text-2xl font-bold">Update Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inputs */}
        <InputWithLabel label="Title" name="title" value={form.title} onChange={handleChange} />
        <InputWithLabel label="Slug" name="slug" value={form.slug} onChange={handleChange} />
        <InputWithLabel label="Meta Title" name="meta_title" value={form.meta_title} onChange={handleChange} />
        <TextAreaWithLabel label="Meta Description" name="meta_description" value={form.meta_description} onChange={handleChange} />
        <InputWithLabel label="Meta Keyword" name="meta_keyword" value={form.meta_keyword} onChange={handleChange} />

        {/* File Upload Custom UI */}
        <div className="space-y-2">
          <Label>Thumbnail Image</Label>

          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            id="thumbnailUpload"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Preview with overlay */}
          <div className="relative w-full max-w-xs aspect-video mt-4 border rounded overflow-hidden cursor-pointer group">
            <Image
              src={newFile ? URL.createObjectURL(newFile) : form.thumbnail}
              alt="Preview"
              fill
              className="object-cover"
            />
            <label
              htmlFor="thumbnailUpload"
              className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 cursor-pointer"
            >
              <span className="text-xl">✏️</span>
              <span className="text-sm mt-1">Edit</span>
            </label>

            {/* Optional remove button */}
            {newFile && (
              <button
                type="button"
                className="absolute top-1 right-1 bg-white/80 hover:bg-white text-black px-2 py-1 text-xs rounded"
                onClick={removeImage}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Editor */}
        <div className="space-y-2">
          <Label>Content</Label>
          <JoditEditor value={form.description} onChange={handleContentChange} />
        </div>

        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
          {loading ? "Updating..." : "Update Blog"}
        </Button>
      </form>
    </div>
  );
}

// Reusable Input component
function InputWithLabel({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...props} />
    </div>
  );
}

// Reusable Textarea component
function TextAreaWithLabel({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={props.name}>{label}</Label>
      <textarea className="w-full border rounded p-2" rows={3} {...props} />
    </div>
  );
}
