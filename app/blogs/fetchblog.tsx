"use client";
import { useEffect, useState } from "react";

export interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
}

export function useBlogs(category: string) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      const res = await fetch(`/api/blog/get?category=${category}`);
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    }

    fetchBlogs();
  }, [category]); // ✅ correct dependency

  return { blogs, loading };
}
