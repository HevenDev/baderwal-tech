"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import JoditEditor from "@/components/Editor/Editor"; // your custom Jodit editor component

interface BlogForm {
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  thumbnail: string;
  content: string;
}

const initialBlog: BlogForm = {
  title: "How to Build a Fullstack App",
  slug: "build-fullstack-app",
  meta_title: "Build Fullstack App Meta Title",
  meta_description: "Meta description for fullstack app blog.",
  meta_keyword: "fullstack, app, tutorial",
  thumbnail:
    "https://images.unsplash.com/photo-1733506903133-9d65b66d299a?w=500&auto=format&fit=crop&q=60",
  content: "<p>This is your blog content.</p>",
};

export default function UpdateBlogForm() {
  const [form, setForm] = useState<BlogForm>(initialBlog);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleContentChange = (newContent: string) => {
    setForm((prev) => ({ ...prev, content: newContent }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated blog data:", form);
    // TODO: Send form data to API
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 space-y-6">
      <h1 className="text-2xl font-bold">Update Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Blog Title</Label>
          <Input
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter blog title"
          />
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <Label htmlFor="slug">Blog Slug</Label>
          <Input
            name="slug"
            id="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="blog-title-slug"
          />
        </div>

        {/* Meta Title */}
        <div className="space-y-2">
          <Label htmlFor="meta_title">Meta Title</Label>
          <Input
            name="meta_title"
            id="meta_title"
            value={form.meta_title}
            onChange={handleChange}
            placeholder="Meta title for SEO"
          />
        </div>

        {/* Meta Description */}
        <div className="space-y-2">
          <Label htmlFor="meta_description">Meta Description</Label>
          <textarea
            name="meta_description"
            id="meta_description"
            rows={3}
            value={form.meta_description}
            onChange={handleChange}
            className="w-full border rounded p-2 resize-y"
            placeholder="Meta description for SEO"
          />
        </div>

        {/* Meta Keyword */}
        <div className="space-y-2">
          <Label htmlFor="meta_keyword">Meta Keyword</Label>
          <Input
            name="meta_keyword"
            id="meta_keyword"
            value={form.meta_keyword}
            onChange={handleChange}
            placeholder="Comma separated keywords"
          />
        </div>

        {/* Thumbnail URL & Upload */}
        <div className="space-y-2">
          <Label htmlFor="thumbnail">Thumbnail Image URL</Label>
          <Input
            name="thumbnail"
            id="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            placeholder="https://..."
          />
          <label className="block mt-2">
            <span className="sr-only">Upload thumbnail image</span>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </label>

          {form.thumbnail && (
            <div className="mt-4 w-full max-w-xs aspect-video relative border rounded overflow-hidden">
              <Image
                src={form.thumbnail}
                alt="Thumbnail preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Content (Jodit Editor) */}
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <JoditEditor
            value={form.content}
            onChange={handleContentChange}
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full sm:w-auto">
          Update Blog
        </Button>
      </form>
    </div>
  );
}
