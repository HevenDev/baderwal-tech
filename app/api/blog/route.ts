// app/api/example/route.ts
import { NextResponse } from 'next/server';
import { getDBPool } from '@/lib/db';

export async function GET() {
  const pool = getDBPool();
  const [rows] = await pool.query('SELECT * FROM blog');
  return NextResponse.json(rows);
}
