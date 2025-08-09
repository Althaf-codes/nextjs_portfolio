"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "100xDevs",
    description:
      "An all-in-one learning and developer community platform built with Flutter and Node.js| Combines course streaming, AI assistance, blogs, quizzes, contests, bug bounties, and a product launchpad into a single smooth app| Features WhatsApp-like chat, X-style follow system, and persistent authentication with Firebase + JWT refresh tokens| Includes adaptive HLS video streaming, encrypted PDF delivery, offline caching for blogs, and advanced state management for smooth performance| Backend powered by Node.js, PostgreSQL, Redis, Docker, and AWS services| Gamification system with grind coins, quizlets,",
    // and leaderboard coming soon| Designed to scale, with secure APIs, efficient pagination, and caching techniques| Developed solo over months to replicate and expand on multiple real-world app concepts",
    image: "/100x_dev.png",
    techStack: [
      "Flutter",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Bloc",
      "Redis",
      "Hive",
      "AutoRoute",
      "Firebase",
      "Express.js",
      "Prisma",
      "Docker",
      "AWS S3",
      "AWS EC2",
      "Socket.IO",
    ],
  },
  {
    id: 2,
    title: "Netflix Clone with HLS Streaming",
    description:
      "A fully custom-built Netflix-like streaming platform consisting of a Flutter frontend and a Node.js backend. The system handles everything from video upload to playback with complete control over content, authentication, and streaming. | Developed a responsive and visually appealing Flutter app with Firebase Authentication for secure login and registration, ensuring a smooth onboarding experience. | Integrated BLoC for efficient state management, enabling smooth navigation and dynamic updates of movies, series, and streaming states. | Built custom video streaming functionality, supporting multiple resolutions and adaptive playback using HLS streaming.",
    // | Designed and implemented a Node.js + Express backend to handle user and admin functionalities with role-based permissions. | Created secure RESTful APIs for video uploads, management, transcoding status tracking, and streaming URL delivery. | Implemented AWS SDK for video storage, secure access, and HLS playlist generation. | Used MongoDB for efficient data storage, including user profiles, video metadata, and streaming statistics. | Implemented JWT-based authentication for secure API access and session management. | Achieved a fully functional Netflix-like ecosystem with self-managed data, ensuring zero dependency on external movie databases.",
    image: "/netflix_clone.png",
    techStack: [
      "Flutter",
      "Node.js",
      "Express",
      "AWS S3",
      "AWS Lambda",
      "AWS Elemental MediaConvert",
      "MongoDB",
      "HLS",
    ],
  },

  {
    id: 3,
    title: "Persistent Distributed Chat App",
    description:
      "Client: A persistent distributed chat app client built in Flutter. | Responsive UI optimized for mobile and web/desktop screens. | Real-time messaging via Socket.io with private and group chats. | Used Redis Pub/sub to scale it to multiple servers. | Notifications for incoming messages, even when the user is active. | Advanced messaging features like sent/read receipts, online/last seen status, and unread counts. | Managed state using Provider for scalable and maintainable state handling.",
    // | Future-ready for adding media sharing features like audio, photo, and video. | Server: Node.js backend with Express.js, Socket.io, MongoDB, and Redis Pub/Sub. | Real-time communication with persistent chat history across sessions. | Redis Pub/Sub for efficient message broadcasting. | Private and group chat support with read receipts and status indicators. | Planned integration with Kafka for high-performance database writes.",
    image: "/chat_app.png",
    techStack: [
      "Flutter",
      "Firebase Phone Auth",
      "Firebase Storage",
      "Socket.io Client",
      "Provider",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis Pub/Sub",
    ],
  },
  // Add more projects as needed
];

const ProjectStepper: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInProjectSection, setIsInProjectSection] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectRefs.current = new Array(projects.length).fill(null);
  }, [projects.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInProjectSection(true);
        } else {
          setIsInProjectSection(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isInProjectSection && containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const totalScroll = window.innerHeight + height;

        let progress = Math.min(
          Math.max((window.innerHeight - top) / totalScroll, 0),
          1
        );

        // Increase the progress by multiplying with a factor (e.g., 1.5 for faster animation)
        const speedFactor = 1.5; // Adjust this value to control speed
        progress = Math.min(progress * speedFactor, 1); // Ensure progress doesn't exceed 100%

        setScrollProgress(progress);

        const step = Math.floor(progress * projects.length);
        setActiveStep(step);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInProjectSection, projects.length]);

  useEffect(() => {
    // Initialize GSAP animations for each project card
    projectRefs.current.forEach((projectRef, index) => {
      if (projectRef) {
        const isLeft = index % 2 === 0;

        gsap.set(projectRef, {
          x: isLeft ? -200 : 200,
          opacity: 0,
        });

        gsap.to(projectRef, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectRef,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setProjectRef = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };

  return (
    <div ref={containerRef} className="relative items-start justify-center">
      <div className="absolute hidden lg:flex md:flex top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300">
        <div
          className="absolute top-0 left-0 w-1 bg-green-500 transition-all duration-100 ease-in-out"
          style={{ height: `${scrollProgress * 100}%` }} // Line height adjusted to faster scroll progress
        />
      </div>

      <div className="w-full flex flex-col">
        {projects.map((project, index) => {
          const stepPosition = (index + 1) / projects.length;
          const delayOffset = 0.15;
          const isStepActive = scrollProgress >= stepPosition - delayOffset;

          return (
            <div
              key={project.id}
              ref={(el) => setProjectRef(el, index)}
              className="relative flex items-center justify-center mb-5"
            >
              <div className={`w-full ${index % 2 === 0 ? "pr-10" : "pl-10 "}`}>
                <ProjectCard project={project} isLeft={index % 2 === 0} />
              </div>

              <div className="absolute hidden lg:flex md:flex left-1/2 transform -translate-x-1/2 items-center justify-center">
                <FaCheckCircle
                  className={`w-10 h-10 bg-white rounded-full p-1 shadow-lg transition-transform duration-500 ease-in-out ${
                    isStepActive
                      ? "text-green-500 scale-125"
                      : "text-gray-400 scale-100"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  useEffect(() => {
    // Animate the section title when it comes into view
    gsap.from(".project-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".project-title",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Giphy Background with Lower Opacity */}
      {/* <div className="absolute inset-0">
          <div style={{ width: "100%", height: 0, paddingBottom: "178%", position: "relative" }}>
            <iframe
              src="https://giphy.com/embed/V2ggmqUpfii6NpLrtl"
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0.3, // Adjust this value for opacity
              }}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
          </div>
        </div> */}

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16 title-font">
          Latest Projects
        </h2>

        {/* Render Stepper with Projects */}
        <ProjectStepper projects={projects} />
      </div>
      <div className="pt-10 w-full">
        <Link href={"/project"}>
          <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
