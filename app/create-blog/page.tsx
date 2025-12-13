"use client";
import React, { useState, useEffect } from "react";
import { Blog } from "@/app/types/blog";

const BlogForm: React.FC<{ onBlogAdded?: (blog: Blog) => void }> = ({ onBlogAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [category, setCategory] = useState("default"); // hidden category

  // Generate preview when imageFile changes
  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("category", category);
  // ignore image for now
  // formData.append("image", imageFile); 

  try {
    const res = await fetch("/api/blog/add", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      alert("Blog added successfully!");
      setTitle("");
      setContent("");
      setImageFile(null);
      setImagePreview(null);
      if (onBlogAdded) onBlogAdded(data.blog);
    } else {
      alert(data.message || "Error adding blog");
    }
  } catch (err) {
    console.error(err);
    alert("Error adding blog");
  }
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto my-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => e.target.files && setImageFile(e.target.files[0])}
        className="border p-2 rounded"
        required
      />

      {/* Image preview */}
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="h-48 w-full object-cover rounded border"
        />
      )}

      <input type="hidden" value={category} />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
