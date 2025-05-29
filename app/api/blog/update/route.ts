import { getDBPool } from "@/lib/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title")?.toString();
    let slug = formData.get("slug")?.toString();
    const metaTitle = formData.get("meta_title")?.toString();
    const metaDescription = formData.get("meta_description")?.toString();
    const metaKeyword = formData.get("meta_keyword")?.toString();
    const content = formData.get("content")?.toString();
    const oldThumbnail = formData.get("oldThumbnail")?.toString();

    const file: File | null = formData.get("thumbnail") as File;
    let thumbnailUrl = oldThumbnail;

    // Clean and format slug
    slug = slug?.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

    if (file && file.size > 0) {
      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
        return NextResponse.json({ success: false, message: "Invalid file type" });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${uuidv4()}.${file.name.split(".").pop()}`;
      const filePath = path.join(process.cwd(), "public/blog", fileName);

      await writeFile(filePath, buffer);
      thumbnailUrl = `/blog/${fileName}`;
    }

    const pool = await getDBPool();
    await pool.query(
      `UPDATE blog SET title=?, slug=?, meta_title=?, meta_description=?, meta_keyword=?, image_url=?, description=? WHERE slug=?`,
      [title, slug, metaTitle, metaDescription, metaKeyword, thumbnailUrl, content, slug]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ success: false, message: "Update failed" });
  }
}
