import Link from "next/link";
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

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
    githubUrl:
      "https://res.cloudinary.com/dstikpo7o/image/upload/v1754723790/Screenshot_2025-08-09_124420_zyaeku.png",
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

const LatestUiCloneSection = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-900 via-black to-black text-gray-300 body-font relative overflow-hidden">
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none"></div>

      <div className="container px-5 pt-16 pb-16 mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-emerald-400 tracking-widest font-semibold uppercase mb-1">
            Have a look at some of my
          </h2>
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-white">
            UI Clones
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            A collection of my latest UI clones, crafted with performance,
            pixel-perfect design, and responsiveness in mind.
          </p>
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
                <Image
                  className="h-40 rounded-lg w-full object-cover object-center mb-6 border border-white/10"
                  fill
                  src={project.imageUrl}
                  alt={project.title}
                />
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

        {/* View All Button */}
        <div className="pt-20 w-full">
          <Link href={"/project"}>
            <button
              className="flex mx-auto text-white bg-emerald-600 bg-opacity-90 border-0 py-3 px-10 
                         rounded-full shadow-lg backdrop-blur-md border border-white/10
                         hover:bg-emerald-500 hover:shadow-emerald-500/20 hover:scale-105 
                         transition-all duration-300"
            >
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestUiCloneSection;

// const LatestUiCloneSection = () => {
//   return (
//     <section className="text-gray-600 bg-gray-950 body-font">
//       <div className="container px-5 pt-10 pb-10 mx-auto">
//         {/* Section Header */}
//         <div className="flex flex-col text-center w-full mb-20">
//           <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
//             Have a look at some of my
//           </h2>
//           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
//             UI Clones
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
//             A collection of my latest UI clones, built with performance and
//             responsive design in mind.
//           </p>
//         </div>

//         {/* Project Cards */}
//         <div className="flex flex-wrap -m-4">
//           {projects.map((project, index) => (
//             <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
//               <div className="bg-gray-800 p-6 rounded-lg flex flex-col h-full shadow-lg hover:shadow-green-900 transition-shadow duration-300">
//                 <img
//                   className="h-40 rounded w-full object-cover object-center mb-6"
//                   src={project.imageUrl}
//                   alt={project.title}
//                 />
//                 <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
//                   {project.subtitle}
//                 </h3>
//                 <h2 className="text-lg text-white font-medium title-font mb-2">
//                   {project.title}
//                 </h2>
//                 <p className="leading-relaxed text-base text-gray-400 flex-1">
//                   {project.description}
//                 </p>

//                 {/* Links */}
//                 <div className="flex items-center mt-4 space-x-4">
//                   <Link
//                     href={project.githubUrl}
//                     target="_blank"
//                     className="flex items-center text-gray-300 hover:text-white transition-colors"
//                   >
//                     <Github className="w-5 h-5 mr-1" /> GitHub
//                   </Link>
//                   <Link
//                     href={project.demoUrl}
//                     target="_blank"
//                     className="flex items-center text-gray-300 hover:text-white transition-colors"
//                   >
//                     <ExternalLink className="w-5 h-5 mr-1" /> Demo
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="pt-20 w-full">
//           <Link href={"/project"}>
//             <button className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all">
//               View All
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestUiCloneSection;
