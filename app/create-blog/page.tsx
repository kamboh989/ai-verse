"use client";

import { useState, useEffect } from "react";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check cookie first
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("admin-auth="));

    if (cookie === "admin-auth=true") {
      setAuthenticated(true);
      return;
    }

    // Prompt for email & password
    const email = prompt("Enter Admin Email:");
    const password = prompt("Enter Admin Password:");

    if (email === "aiverse@gmail.com" && password === "abdullah9876@") {
      document.cookie = "admin-auth=true; path=/";
      setAuthenticated(true); // now page will render
    } else {
      alert("Incorrect Credentials. Redirecting...");
      setAuthenticated(false);
      window.location.href = "/"; // ya kisi login page pe redirect
    }
  }, []);

  if (authenticated === null) {
    return <div>Checking Authentication...</div>; // loading while prompt
  }

  if (!authenticated) {
    return <div>Unauthorized</div>; // fallback
  }

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", image);

    await fetch("/api/blog/add", {
      method: "POST",
      body: formData,
    });

    alert("Blog Added");

    setTitle("");
    setContent("");
    setCategory("");
    setImage(null);
    setPreview(null);
  }

  return (  <>
    <div className="flex justify-center mt-5 text-4xl ">
      <h1>Add new blog</h1>
    </div>
    <form
      onSubmit={submitHandler}
      className="max-w-xl mx-auto p-6 flex flex-col gap-4 mb-20"
    >
      {/* TITLE */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2"
      />

      {/* IMAGE FILE */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
          }
        }}
        className="border border-gray-400 rounded px-3 py-2"
      />

    

      {/* CATEGORY */}
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2"
      />

      {/* CONTENT */}
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2 h-32"
      />

        {/* IMAGE PREVIEW */}
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="h-40 w-full object-cover rounded border"
        />
      )}

      <button className="bg-blue-500 text-white py-2 rounded">
        Add Blog
      </button>
    </form>
    </>
  );
}
