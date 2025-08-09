"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CustomList from "./CustomList";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
}

const ProjectCard: React.FC<{ project: Project; isLeft: boolean }> = ({
  project,
  isLeft,
}) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // For navigation

  const handleReadMore = () => {
    router.push(`/projects/${project.id}`); // Navigate to the project details page
  };

  useEffect(() => {
    // Check if the content overflows
    if (contentRef.current) {
      setIsOverflowing(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [contentRef]);

  useEffect(() => {
    if (cardRef.current) {
      // Reset initial position
      gsap.set(cardRef.current, {
        x: isLeft ? -100 : 100,
        opacity: 0,
      });

      // Create animation
      gsap.to(cardRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
          // scrub:true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLeft]);

  return (
    <div
      ref={cardRef}
      className={`flex items-center ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } `}
    >
      {/* Image side */}
      <div className="w-80 flex justify-center ml-5">
        <div className="relative w-full">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <h2 className="flex lg:hidden justify-center">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mt-5 justify-center">
            {project.techStack.slice(0, 6).map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-black via-gray-900 to-green-900 hover:from-green-900 hover:via-black hover:to-gray-900 text-green-400 hover:text-green-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-green-500/25 border border-green-500/20 hover:border-green-400/40"

                // className="bg-green-500 text-black font-medium px-3 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span
                className="px-4 py-2 bg-gradient-to-r from-black via-gray-900 to-green-900 hover:from-green-900 hover:via-black hover:to-gray-900 text-green-400 hover:text-green-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-green-500/25 border border-green-500/20 hover:border-green-400/40"
                // className="bg-green-500 text-black font-medium px-3 py-1 border-white rounded-full text-xs"
              >
                More..
              </span>
            )}
          </div>
          <div className="flex flex-wrap justify-center">
            <Link
              href={`/projectpost/${project.id}`}
              //   className="px-4 py-2 bg-gradient-to-r from-black via-gray-900 to-green-900 hover:from-green-900 hover:via-black hover:to-gray-900 text-green-400 hover:text-green-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-green-500/25 border border-green-500/20 hover:border-green-400/40"

              className="mt-3 px-3 py-1 w-2/4 text-sm bg-gray-800 backdrop-blur-md text-white rounded-full shadow-box border border-white border-opacity-30 hover:bg-opacity-30 transition-all text-center rounded-full block"
            >
              View
            </Link>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className="w-1/4 h-96 hidden lg:flex">
        <div className="bg-gray-800 backdrop-blur-md rounded-xl shadow-white shadow-sm p-6  text-white h-full overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

          <div
            ref={contentRef}
            className={`relative overflow-hidden ${
              !showMore ? "h-64" : "h-auto"
            }`}
          >
            <CustomList description={project.description} />
          </div>

          {isOverflowing && (
            <div className="mt-2">
              <button
                onClick={handleReadMore}
                className="text-green-400 text-xs"
              >
                Read More..
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
