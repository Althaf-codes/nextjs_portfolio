"use client";

import React, { useState, useEffect } from "react";
import { Code, GitBranch } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  interface ScrollingSkillsProps {
    skills: string[];
    direction?: "left" | "right";
    delay?: number;
    extraPadding?: string;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Unified skill set
  const allSkills = [
    // Frontend
    "Next.js",
    "TypeScript",
    "JavaScript ES6+",
    "Tailwind CSS",
    "HTML5",
    "CSS3",

    // Backend
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "GraphQL",
    "Express.js",
    "Prisma",
    "Redis",
    "WebSocket",
    "Firebase",

    // Design
    "Figma",

    // DevOps & Tools
    "Docker",
    "AWS",
    "Git",

    // Flutter & Mobile
    "Flutter",
    "Dart",
    "Provider State Management",
    "MVVM Architecture",
    "Custom Widgets",
    "Firebase Authentication",
    "Firestore",
    "Firebase Remote Config",
    "Push Notifications",
    "Hive Local Storage",
    "Responsive UI",
    "Debounce Search",
    "WebView Integration",
    "Role-Based Authorization",
    "JWT Authentication",
    "HLS Streaming Integration",
    "Offline-First Handling",
  ];

  const ScrollingSkills: React.FC<ScrollingSkillsProps> = ({
    skills,
    direction = "left",
    delay = 0,
    extraPadding = "",
  }) => {
    return (
      <div className={`relative overflow-hidden py-2 ${extraPadding}`}>
        <div
          className={`flex gap-3 ${
            direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"
          }`}
          style={{
            animationDelay: `${delay}ms`,
            animationDuration: `${skills.length * 2}s`,
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="px-4 py-2 bg-gradient-to-r from-black via-gray-900 to-green-900 hover:from-green-900 hover:via-black hover:to-gray-900 text-green-400 hover:text-green-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-green-500/25 border border-green-500/20 hover:border-green-400/40"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(34,197,94,0.05)_50%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent mb-4 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Technical Expertise
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            A comprehensive showcase of technologies and tools I work with
            across different domains
          </p>
        </div>

        {/* Pyramid style scrolling rows */}
        <div className="space-y-8">
          <ScrollingSkills
            skills={allSkills.slice(0, Math.ceil(allSkills.length * 0.4))}
            direction="left"
          />
          <ScrollingSkills
            skills={allSkills.slice(
              Math.ceil(allSkills.length * 0.2),
              Math.ceil(allSkills.length * 0.8)
            )}
            direction="right"
            extraPadding="px-12"
          />
          <ScrollingSkills
            skills={allSkills.slice(Math.ceil(allSkills.length * 0.6))}
            direction="left"
            extraPadding="px-24"
          />
        </div>

        {/* Footer message */}
        <div
          className={`mt-20 text-center transform transition-all duration-1000 delay-1500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-900/50 to-black/50 border border-green-500/30">
            <GitBranch className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">
              Always learning, always growing
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;

// 'use client'

// import { useState, useEffect } from 'react';
// import { motion, useMotionValue, animate } from 'framer-motion';

// const skills = [
//   { name: 'Flutter', imageUrl: '/icons/flutter.svg' },
//   { name: 'JavaScript', imageUrl: '/icons/javascript.svg' },
//   { name: 'Node.js', imageUrl: '/icons/nodejs.svg' },
//   { name: 'MongoDB', imageUrl: '/icons/react.svg' },
//   { name: 'Firebase', imageUrl: '/icons/javascript.svg' },

//   { name: 'Flutter', imageUrl: '/icons/flutter.svg' },
//   { name: 'JavaScript', imageUrl: '/icons/javascript.svg' },
//   { name: 'Node.js', imageUrl: '/icons/nodejs.svg' },
//   { name: 'MongoDB', imageUrl: '/icons/react.svg' },
//   { name: 'Firebase', imageUrl: '/icons/javascript.svg' },

//   { name: 'Flutter', imageUrl: '/icons/flutter.svg' },
//   { name: 'JavaScript', imageUrl: '/icons/javascript.svg' },
//   { name: 'Node.js', imageUrl: '/icons/nodejs.svg' },
//   { name: 'MongoDB', imageUrl: '/icons/react.svg' },
//   { name: 'Firebase', imageUrl: '/icons/javascript.svg' },

//   { name: 'Flutter', imageUrl: '/icons/flutter.svg' },
//   { name: 'JavaScript', imageUrl: '/icons/javascript.svg' },
//   { name: 'Node.js', imageUrl: '/icons/nodejs.svg' },
//   { name: 'MongoDB', imageUrl: '/icons/react.svg' },
//   { name: 'Firebase', imageUrl: '/icons/javascript.svg' },
//   // Add more skills here
// ];
// const SkillsSection: React.FC = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Track mouse position
//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col justify-center items-center pb-20">
//     <div className="flex flex-col text-center w-full my-16">
//       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Skills</h1>
//       <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
//     </div>

//       <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-10">
//         {skills.map((skill, index) => {
//           const offsetX = useMotionValue(0);
//           const offsetY = useMotionValue(0);

//           const handleMouseEnter = (event: React.MouseEvent) => {
//             const iconRect = (event.target as HTMLDivElement).getBoundingClientRect();
//             const iconCenterX = iconRect.left + iconRect.width / 2;
//             const iconCenterY = iconRect.top + iconRect.height / 2;

//             // Calculate the direction away from cursor
//             const distanceX = mousePosition.x - iconCenterX;
//             const distanceY = mousePosition.y - iconCenterY;

//             const moveX = distanceX > 0 ? -10 : 10;
//             const moveY = distanceY > 0 ? -10 : 10;

//             // Animate to the opposite direction with faster speed
//             animate(offsetX, moveX, { duration: 0.1 });
//             animate(offsetY, moveY, { duration: 0.1 });
//           };

//           const handleMouseLeave = () => {
//             animate(offsetX, 0, { duration: 0.1 });
//             animate(offsetY, 0, { duration: 0.1 });
//           };

//           return (
//             <motion.div
//               key={index}
//               className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg bg-gray-800 transition-transform duration-200"
//               style={{
//                 x: offsetX,
//                 y: offsetY,
//               }}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <img
//                 src={skill.imageUrl}
//                 alt={skill.name}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;
