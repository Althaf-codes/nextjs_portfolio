import React from "react";
import { buttonVariants } from "@/components/ui/button";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import { Github, ExternalLink } from "lucide-react";
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

interface Project {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Al-Mutawa Pharmacy",
    subtitle: "Flutter",
    description:
      "Complete functional UI clone of Al-Mutawa Pharmacy developed just from their screenshots",
    imageUrl:
      "https://res.cloudinary.com/dstikpo7o/image/upload/v1754707285/Screenshot_2025-08-07_200951_cqezuy.png",
    githubUrl: "https://github.com/Althaf-codes/almutawa_pharmacy_clone",
    demoUrl: "https://althaf-codes.github.io/almutawa-pharmacy-web/",
  },
  {
    title: "The SNKR Store",
    subtitle: "Flutter",
    description:
      "The complete functional UI clone of The SNKR Store Kuwait app along with provider state management",
    imageUrl:
      "https://res.cloudinary.com/dstikpo7o/image/upload/v1754707285/Screenshot_2025-08-07_204052_eyduzx.png",
    githubUrl: "https://github.com/Althaf-codes/snkr_clone",
    demoUrl: "https://althaf-codes.github.io/snkr_clone_web/",
  },
  {
    title: "Real-Estate UI",
    subtitle: "Flutter",
    description: "I took this UI as a challenge and finished within 2 hours",
    imageUrl:
      "https://res.cloudinary.com/dstikpo7o/image/upload/v1754723790/Screenshot_2025-08-09_124420_zyaeku.png",
    githubUrl: "https://github.com/Althaf-codes/simple-real-estate-app-ui",
    demoUrl: "",
  },
  {
    title: "Custom Teeth Widget",
    subtitle: "Flutter",
    description:
      "Made customized interactive teeth widget using flutter and svg as a part of my student dental checkup app ",
    imageUrl:
      "https://res.cloudinary.com/dstikpo7o/image/upload/v1754707284/Screenshot_2024-07-16_105103_olzdz7.png",
    githubUrl: "https://github.com/Althaf-codes/student-dental-checkup-app",
    demoUrl: "",
  },
];

const dirContent = fs.readdirSync("content/projects", "utf-8");

console.log(dirContent);

const blogs: BlogModel[] = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/projects/${file}`, "utf-8");
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
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {blogs.map((blog: BlogModel, index: number) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden flex flex-col"
              style={{
                boxShadow: "8px 8px 15px #1a4726, -5px -5px 10px #2c2c2c",
                borderRadius: "16px",
              }}
            >
              {/* Image */}

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

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold mb-2 text-gray-200">
                  {blog.title}
                </h2>

                {/* Equal height description */}
                <p className="text-gray-400 mb-4 flex-1 line-clamp-3 min-h-[72px]">
                  {blog.description}
                </p>
                {/* 
                <Link
                  className={`${buttonVariants({
                    variant: "default",
                  })} bg-gray-500 hover:bg-green-800 hover:text-white transition duration-200 text-center`}
                  href={`/projectpost/${blog.slug}`}
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  Read More
                </Link> */}

                <Link
                  className={`${buttonVariants({
                    variant: "default",
                  })} text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300
    bg-gradient-to-r from-green-600 to-green-800
    hover:from-green-500 hover:to-green-700
    shadow-md hover:shadow-lg
    transform hover:scale-105`}
                  href={`/projectpost/${blog.slug}`}
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-gradient-to-br from-emerald-900 via-black to-black text-gray-300 body-font relative overflow-hidden">
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none"></div>

        <div className="container px-5 pt-16 pb-16 mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-white">
              UI Clones
            </h1>
          </div>

          {/* Project Cards */}
          <div className="flex flex-wrap -m-4">
            {projects.map((project, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div
                  className="bg-gray-900/70 backdrop-blur-md border border-white/10 p-6 rounded-xl 
                           flex flex-col h-full shadow-lg hover:shadow-emerald-500/20 
                           transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative w-full h-40 mb-6">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover object-center rounded-lg border border-white/10"
                    />
                  </div>
                  <h3 className="tracking-widest text-emerald-400 text-xs font-medium title-font">
                    {project.subtitle}
                  </h3>
                  <h2 className="text-lg text-white font-semibold title-font mb-2">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400 flex-1">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center mt-4 space-x-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-1" /> GitHub
                    </Link>
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" /> Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export const metadata: Metadata = {
  title:
    "Latest Projects on Flutter, Backend, Full-stack Apps, Web Development, and Cloud",
  description:
    "Discover my latest projects showcasing Flutter apps, backend systems, full-stack applications, web development, and cloud integrations. Get inspired by hands-on examples and insights into modern tech stacks.",
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
