// app/api/blog/delete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDBPool } from '@/lib/db';
import type { ResultSetHeader } from 'mysql2/promise';

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug || typeof slug !== 'string') {
    return NextResponse.json({ message: 'Invalid or missing slug parameter' }, { status: 400 });
  }

  try {
    const pool = getDBPool();
    const [result] = await pool.execute<ResultSetHeader>(
      'DELETE FROM blog WHERE slug = ?',
      [slug]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
