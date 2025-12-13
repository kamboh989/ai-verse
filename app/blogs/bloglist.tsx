"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./blog-card";

import BlogFilter from "./filter";
import { Blog } from "@/app/types/blog";

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredBlogs(blogs.filter((b) => b.category === selectedCategory));
    } else {
      setFilteredBlogs(blogs);
    }
  }, [blogs, selectedCategory]);

  const fetchBlogs = async () => {
  try {
    const res = await fetch("/api/blog/add");

    if (!res.ok) {
      console.error("Error fetching blogs", res.status);
      return;
    }

    const data = await res.json();
    setBlogs(data);

    const uniqueCategories: string[] = Array.from(
      new Set(
        data
          .filter((b: Blog) => b.category)
          .map((b: Blog) => b.category)
      )
    );
    setCategories(uniqueCategories);
  } catch (err) {
    console.error("Fetch blogs failed", err);
  }
};



  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Our Latest Blog Posts</h1>

    

      <BlogFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
