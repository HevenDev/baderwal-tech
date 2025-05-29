"use client";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Editor from "@/components/Editor/Editor";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const sanitizeSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with -

const AddBlog = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  const title = formData.get("title")?.toString().trim();
  const slug = formData.get("slug")?.toString().trim();
  const metaTitle = formData.get("metaTitle")?.toString().trim();
  const metaDescription = formData.get("metaDescription")?.toString().trim();
  const metaKeywords = formData.get("metaKeywords")?.toString().trim();

  const thumbnailInput = form.elements.namedItem("thumbnail") as HTMLInputElement;
  const thumbnailFile = thumbnailInput?.files?.[0];

  // Clean editor content (removes HTML tags)
  const cleanContent = content.replace(/<(.|\n)*?>/g, "").trim();

  // Validate image type
  const validImageTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
  const isImage = thumbnailFile && validImageTypes.includes(thumbnailFile.type);

  // Field validations
  if (
    !title ||
    !slug ||
    !metaTitle ||
    !metaDescription ||
    !metaKeywords ||
    !thumbnailFile ||
    !isImage ||
    !cleanContent
  ) {
    toast.error("🚫 All fields are required. Only image files (jpg, jpeg, png, webp) allowed.");
    return;
  }

  setLoading(true);

  // Slug sanitization: remove special chars, convert spaces to dash
  const sanitizeSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // remove special characters
      .replace(/\s+/g, "-"); // replace spaces with -
  };

  const finalSlug = sanitizeSlug(slug);
  formData.set("slug", finalSlug);
  formData.set("description", content);

  try {
    const res = await axios.post("/api/blog/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      toast.success("✅ Blog added successfully!");
      form.reset();
      setContent("");
    } else {
      toast.error("❌ Failed to add blog.");
    }
  } catch (err) {
    console.error("Blog add error:", err);
    toast.error("🚨 Something went wrong.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="px-4 py-8 md:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-2xl font-semibold">Add Blog</h1>

        <Card>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <Label className="mb-2" htmlFor="title">Blog Title</Label>
              <Input required id="title" name="title" placeholder="Enter blog title" />
            </div>

            <div className="space-y-2">
              <Label className="mb-2" htmlFor="slug">Blog Slug</Label>
              <Input required id="slug" name="slug" placeholder="blog-title-slug" />
            </div>

            <div className="space-y-2">
              <Label className="mb-2" htmlFor="thumbnail">Thumbnail Image</Label>
              <Input required id="thumbnail" name="thumbnail" type="file" accept="image/*"/>
            </div>

            <div className="space-y-2">
              <Label className="mb-2" htmlFor="metaTitle">Meta Title</Label>
              <Input required id="metaTitle" name="metaTitle" placeholder="Meta title" />
            </div>

            <div className="space-y-2">
              <Label className="mb-2" htmlFor="metaDescription">Meta Description</Label>
              <Textarea
                id="metaDescription"
                name="metaDescription"
                placeholder="Meta description"
              />
            </div>

            <div className="space-y-2">
              <Label className="mb-2" htmlFor="metaKeywords">Meta Keywords</Label>
              <Input required
                id="metaKeywords"
                name="metaKeywords"
                placeholder="keyword1, keyword2"
              />
            </div>

            <div className="space-y-2">
              <Label className="mb-2" htmlFor="description">Blog Description</Label>
              <Editor value={content} onChange={setContent} />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className={`transition-all ${
                  loading
                    ? "cursor-wait bg-muted text-muted-foreground"
                    : ""
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Publishing...
                  </>
                ) : (
                  "Publish Blog"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default AddBlog;
