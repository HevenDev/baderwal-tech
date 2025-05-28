import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { getDBPool } from "@/lib/db";

export async function POST(req: Request) {
    const formData = await req.formData();

    const title = formData.get("title")?.toString() || "";
    const slug = formData.get("slug")?.toString() || "";
    const metaTitle = formData.get("metaTitle")?.toString() || "";
    const metaDescription = formData.get("metaDescription")?.toString() || "";
    const metaKeywords = formData.get("metaKeywords")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    const file = formData.get("thumbnail") as File;

    let imageURL = "";

    if(file && file.size> 0){
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName= `${Date.now()}-${file.name}`;
        const filePath = path.join(process.cwd(),"public", "blog", fileName);
        await writeFile(filePath, buffer);
        imageURL = `/blog/${fileName}`;
    }

    try {
    const pool = getDBPool();
    await pool.query(
      `INSERT INTO blog 
      (title, slug, image_url, meta_title, meta_description, meta_keyword, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, slug, imageURL, metaTitle, metaDescription, metaKeywords, description]
    );

    return NextResponse.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ success: false, error: "Failed to save blog" }, { status: 500 });
  }
}
