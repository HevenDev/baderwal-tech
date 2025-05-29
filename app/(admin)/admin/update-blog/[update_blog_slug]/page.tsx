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
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  thumbnail: string;
  content: string;
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

  const handleContentChange = (content: string) => {
    if (!form) return;
    setForm({ ...form, content });
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

    const { title, slug, meta_title, meta_description, meta_keyword, content } = form;
    const cleanSlug = slug.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    const cleanContent = content.replace(/<(.|\n)*?>/g, "").trim();

    if (!title || !cleanSlug || !meta_title || !meta_description || !meta_keyword || !cleanContent) {
      toast.error("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.set("title", title);
    formData.set("slug", cleanSlug);
    formData.set("meta_title", meta_title);
    formData.set("meta_description", meta_description);
    formData.set("meta_keyword", meta_keyword);
    formData.set("content", content);
    formData.set("oldThumbnail", form.thumbnail);
    if (newFile) formData.set("thumbnail", newFile);

    try {
      setLoading(true);
      const res = await axios.post("/api/blog/update", formData);
      if (res.data.success) {
        toast.success("Blog updated successfully!");
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

        {/* File Upload */}
        <div className="space-y-2">
          <Label htmlFor="thumbnail">Thumbnail Image</Label>
          <Input type="file" accept="image/*" onChange={handleFileChange} />
          {(newFile || form.thumbnail) && (
            <div className="relative w-full max-w-xs aspect-video mt-4 border rounded overflow-hidden">
              <Image
                src={newFile ? URL.createObjectURL(newFile) : form.thumbnail}
                alt="Preview"
                fill
                className="object-cover"
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-white/80 hover:bg-white text-black px-2 py-1 text-xs rounded"
                onClick={removeImage}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Editor */}
        <div className="space-y-2">
          <Label>Content</Label>
          <JoditEditor value={form.content} onChange={handleContentChange} />
        </div>

        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
          {loading ? "Updating..." : "Update Blog"}
        </Button>
      </form>
    </div>
  );
}

// Helper components
function InputWithLabel({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...props} />
    </div>
  );
}

function TextAreaWithLabel({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={props.name}>{label}</Label>
      <textarea className="w-full border rounded p-2" rows={3} {...props} />
    </div>
  );
}
