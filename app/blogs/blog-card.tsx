import React from "react";
import { Blog } from "@/app/types/blog";

interface Props {
  blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-bold text-lg mb-2">{blog.title}</h2>
        <p className="text-gray-700 flex-1">{blog.content.slice(0, 120)}...</p>
      </div>
    </div>
  );
};

export default BlogCard;
