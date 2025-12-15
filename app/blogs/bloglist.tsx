import { Blog } from "./fetchblog";
import Link from "next/link";

interface Props {
  blogs: Blog[];
}

export default function BlogList({ blogs }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 mb-15 mx-auto max-w-7xl">
      {blogs.map((blog) => (
        <div key={blog._id} className="bg-white/15 backdrop-blur-md rounded-xl rounded p-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-40 w-full object-cover rounded"
          />

          <h2 className="font-bold text-2xl mt-3 text-gray-100">{blog.title}</h2>

          <p className="text-[16px] mt-3 text-gray-300">{blog.content}...</p>
          
           <Link href={'/blog-detail'}>
  <button
    className=" cursor-pointer
      mt-5
      px-4 py-2
      rounded-lg
      bg-gradient-to-b from-gray-200 to-gray-400
      text-gray-800 font-semibold
      shadow-md shadow-gray-500
      active:translate-y-1 active:shadow-sm
      transition-all duration-150
      hover:from-gray-100 hover:to-gray-300
    "
  >
    Read More
  </button>
</Link>

          
        </div>
      ))}
    </div>
  );
}
