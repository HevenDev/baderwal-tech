// /app/api/blog/update/route.ts
import { writeFile, unlink } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { getDBPool } from "@/lib/db";
import { RowDataPacket } from "mysql2";

export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();

    const id = formData.get("id")?.toString().trim();
    const title = formData.get("title")?.toString().trim();
    const slug = formData.get("slug")?.toString().trim();
    const metaTitle = formData.get("meta_title")?.toString().trim();
    const metaDescription = formData.get("meta_description")?.toString().trim();
    const metaKeyword = formData.get("meta_keyword")?.toString().trim();
    const description = formData.get("description")?.toString().trim();
    const blogImage = formData.get("thumbnail") as File | null;

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    const db = getDBPool();

    const [rows] = await db.execute<RowDataPacket[]>(
      "SELECT image_url FROM blog WHERE id = ?",
      [id]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const oldImage = rows[0].image_url;
    let finalImagePath = oldImage;

    if (blogImage && blogImage.size > 0) {
      const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
      if (!allowedTypes.includes(blogImage.type)) {
        return NextResponse.json({ error: "Invalid image type" }, { status: 400 });
      }

      const buffer = Buffer.from(await blogImage.arrayBuffer());
      const fileName = `blog/${Date.now()}_${blogImage.name}`;
      const filePath = path.join(process.cwd(), "public", fileName);

      await writeFile(filePath, buffer);
      finalImagePath = fileName;

      if (oldImage) {
        const oldImagePath = path.join(process.cwd(), "public", oldImage);
        try {
          await unlink(oldImagePath);
        } catch (err) {
          console.warn("Old image not found or already removed");
        }
      }
    }

    await db.execute(
  `UPDATE blog
   SET title = ?, slug = ?, meta_title = ?, meta_description = ?, meta_keyword = ?, description = ?, image_url = ?
   WHERE id = ?`,
  [
    title ?? null,
    slug ?? null,
    metaTitle ?? null,
    metaDescription ?? null,
    metaKeyword ?? null,
    description ?? null,
    finalImagePath ?? null,
    id ?? null
  ]
);

    return NextResponse.json({ success: true, message: "Blog updated successfully" });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
