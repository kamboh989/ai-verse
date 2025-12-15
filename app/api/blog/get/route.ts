import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/mongodb";
import { Blog } from "@/app/model/blog";

export async function GET(req: Request) {
  try {
    // Connect to DB
    await dbConnect();

    const { searchParams } = new URL(req.url);
    let category = searchParams.get("category") || "";

    // Lowercase for consistency (assuming DB stores category in lowercase)
    category = category.toLowerCase();

    // Build query
    const query: any = {};
    if (category) {
      query.category = category;
    }

    // Fetch blogs, most recent first, use lean for fast read
    const blogs = await Blog.find(query).sort({ createdAt: -1 }).lean();

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
