import { connectDB, sql } from "../../../../../lib/connection";
import { NextResponse } from 'next/server'

await connectDB();

export async function GET (request, {params}){
    const slug = params.product;
    try {
      const results = await sql.query `SELECT * FROM dbo.products WHERE slug = ${slug} `;
      return NextResponse.json(results.recordset);
    } catch (err) {
      console.log(err);
    }
}