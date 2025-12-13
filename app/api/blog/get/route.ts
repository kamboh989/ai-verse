import { NextResponse } from "next/server";
import { db } from "@/app/lib/mongodb";
import Blog from "@/app/model/blog";

export async function GET(req: Request) {
  await db;

  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error fetching blogs", err }, { status: 500 });
  }
}

