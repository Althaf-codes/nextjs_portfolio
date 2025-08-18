import React from "react";
import { buttonVariants } from "@/components/ui/button";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

interface BlogModel {
  id: number;
  slug: string;
  content: string;
  title: string;
  description: string;
  imageUrl?: string;
  date: string;
}

const dirContent = fs.readdirSync("content/blogs", "utf-8");

// Filter to include only markdown files (e.g., .md)
const blogFiles = dirContent.filter((file) => file.endsWith(".md"));

const blogs: BlogModel[] = blogFiles.map((file) => {
  const fileContent = fs.readFileSync(`content/blogs/${file}`, "utf-8");
  const { data } = matter(fileContent);
  const value: BlogModel = {
    id: data.id,
    slug: data.slug,
    content: data.content,
    title: data.title,
    description: data.description,
    imageUrl: data.imageUrl,
    date: data.date,
  };
  return value;
});

console.log(blogs);

const ProjectList = () => {
  return (
    <section className="bg-gray-950">
      <div className="container mx-auto max-w-screen-xl px:4 xl:px-15 sm:px-4 py-24">
        <h1 className="text-3xl font-bold mb-6 text-center">My Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center pt-10">
          {blogs.map((blog: BlogModel, index: number) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden p-2"
              style={{
                // backgroundColor: '#1e1e1e', // Dark gray background
                boxShadow: "8px 8px 15px #1a4726, -5px -5px 10px #2c2c2c", // Dark and light shadows
                borderRadius: "16px",
              }}
            >
              <div className="relative w-full h-40">
                <Image
                  src={blog.imageUrl!}
                  alt={blog.title}
                  fill
                  className="object-cover object-top rounded-t-lg"
                  style={{
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)",
                  }}
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-200">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mb-4">{blog.description}</p>

                <Link
                  className={`${buttonVariants({
                    variant: "default",
                  })} text-green bg-gray-500 hover:bg-green-800 hover:text-white transition duration-200`}
                  href={`/blogpost/${blog.slug}`}
                  style={{
                    // boxShadow: '4px 4px 8px #111111, -4px -4px 8px #2c2c2c',
                    // padding: '8px 16px',
                    borderRadius: "8px",
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const metadata: Metadata = {
  title:
    "Latest Blogs on Web Development, Programming Tutorials, and Tech Insights",
  description:
    "Explore our blog page for the latest articles on web development, JavaScript tutorials, programming best practices, and tech insights. Stay updated with expert content to advance your coding skills",
};

export default ProjectList;

// <div key={index} className="shadow-sm shadow-white rounded-lg overflow-hidden">

//     <img className="w-full h-48 object-cover object-top" src={blog.imageUrl} alt={blog.title} />

//     <div className="p-4">

//         <h2 className="text-xl font-semibold mb-2">{blog.title} </h2>

//         <p className=" mb-4">{blog.description}</p>

//         <Link className= {buttonVariants({ variant: "default" })}// "hover:text-indigo-700 font-semibold"
//         href={`/projectpost/${blog.slug}`}>
//         Read More</Link>

//     </div>

// </div>
