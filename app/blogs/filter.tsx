"use client";
import React from "react";

interface Props {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const BlogFilter: React.FC<Props> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex gap-4 mb-4 justify-center flex-wrap">
      <button
        className={`px-4 py-2 rounded ${selectedCategory === "" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setSelectedCategory("")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded ${selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default BlogFilter;
