import { getDBPool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();

    if (!slug) return NextResponse.json({ success: false, message: "Missing slug" });

    const pool = await getDBPool();
    const [rows]: any = await pool.query("SELECT * FROM blog WHERE slug = ?", [slug]);

    if (rows.length === 0) {
      return NextResponse.json({ success: false, message: "Blog not found" });
    }

    return NextResponse.json({ success: true, blog: rows[0] });
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return NextResponse.json({ success: false, message: "Server error" });
  }
}
