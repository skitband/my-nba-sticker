import { connectDB, sql } from "../../../../lib/connection";
import { NextResponse } from 'next/server'

export async function GET() {
    await connectDB();
    try {
        const results = await sql.query `SELECT * FROM dbo.products`;
        return NextResponse.json(results.recordset);
      } catch (err) {
        console.log(err);
    }
}