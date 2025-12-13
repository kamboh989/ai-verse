// app/api/blog/route.ts
import { NextResponse } from "next/server";
import { db } from "@/app/lib/mongodb";
import  Blog  from "@/app/model/blog";

interface BlogQuery {
  category?: string;
}

export async function GET(request: Request) {
  try {
    await db;

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "6");
    const skip = parseInt(searchParams.get("skip") || "0");

    const query: BlogQuery = {};
    if (category && category !== "all" && category !== "") query.category = category;

    const blogs = await Blog.find(query, "title content image category date")
      .skip(skip)
      .limit(limit)
      .sort({ date: -1 })
      .lean();

    return NextResponse.json(blogs, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
      },
    });
  } catch (err: unknown) {
    console.error("GET /api/blog error:", err);
    const message = err instanceof Error ? err.message : "Failed to fetch blogs";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await db;

    const { title, content, image, category } = await request.json();

    if (!title || !content || !image)
      return NextResponse.json(
        { error: "Missing required fields: title, content, image" },
        { status: 400 }
      );

    const newBlog = await Blog.create({
      title,
      content,
      image,
      category,
      date: new Date(),
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (err: unknown) {
    console.error("POST /api/blog error:", err);
    const message = err instanceof Error ? err.message : "Unknown error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
