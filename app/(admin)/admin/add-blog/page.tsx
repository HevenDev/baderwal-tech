// app/admin/add-blog/page.tsx
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

const AddBlog = () => {
    const [content, setContent] = useState("");



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("description", content); // Include content from Editor

    try {
        const res = await axios.post("/api/blog/add", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        if (res.data.success) {
            toast.success("✅ Blog added successfully!");
            form.reset();
            setContent(""); // Reset the Editor content
        } else {
            toast.error("❌ Error adding blog. Please try again.");
        }
    } catch (error) {
        console.error("Blog submission error:", error);
        toast.error("🚫 Something went wrong while submitting.");
    }
};


    return (
        <div className="px-4 py-8 md:px-6 lg:px-8">
            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto space-y-6"
            >
                <h1 className="text-2xl font-bold">Add Blog</h1>

                <Card>
                    <CardContent className="p-6 space-y-4">
                        {/* Blog Title */}
                        <div>
                            <Label htmlFor="title">Blog Title</Label>
                            <Input id="title" name="title" placeholder="Enter blog title" />
                        </div>

                        {/* Slug */}
                        <div>
                            <Label htmlFor="slug">Blog Slug</Label>
                            <Input id="slug" name="slug" placeholder="blog-title-slug" />
                        </div>

                        {/* Thumbnail */}
                        <div>
                            <Label htmlFor="thumbnail">Thumbnail Image</Label>
                            <Input id="thumbnail" name="thumbnail" type="file" />
                        </div>

                        {/* Meta Title */}
                        <div>
                            <Label htmlFor="metaTitle">Meta Title</Label>
                            <Input id="metaTitle" name="metaTitle" placeholder="Meta title" />
                        </div>

                        {/* Meta Description */}
                        <div>
                            <Label htmlFor="metaDescription">Meta Description</Label>
                            <Textarea
                                id="metaDescription"
                                name="metaDescription"
                                placeholder="Meta description"
                            />
                        </div>

                        {/* Meta Keywords */}
                        <div>
                            <Label htmlFor="metaKeywords">Meta Keywords</Label>
                            <Input
                                id="metaKeywords"
                                name="metaKeywords"
                                placeholder="keyword1, keyword2"
                            />
                        </div>

                        {/* Blog Content */}
                        <div>
                            <Label htmlFor="description">Blog Description</Label>
                            <Editor value={content} onChange={setContent} />
                        </div>

                        {/* Submit */}
                        <div className="pt-4">
                            <Button type="submit">Publish Blog</Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
};

export default AddBlog;
