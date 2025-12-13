// app/api/blog/route.ts
import { NextResponse } from "next/server";
import { db } from "@/app/lib/mongodb";
import  Blog  from "@/app/model/blog";


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
