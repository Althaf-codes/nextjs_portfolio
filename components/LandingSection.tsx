"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const LandingSection = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const texts = ["Flutter", "Node.js", "Firebase", "Full-stack Development"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout: NodeJS.Timeout;

    const type = () => {
      if (!typingRef.current) return;

      const currentText = texts[textIndex];
      if (isDeleting) {
        typingRef.current.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingRef.current.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingTimeout = setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingTimeout = setTimeout(type, 500);
      } else {
        typingTimeout = setTimeout(type, isDeleting ? 50 : 100);
      }
    };

    type();

    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top, width, height } =
          cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const maxRotation = 5;
        cardRef.current.style.transform = `perspective(1000px) rotateY(${Math.min(
          Math.max(x * 10 - 5, -maxRotation),
          maxRotation
        )}deg) rotateX(${Math.min(
          Math.max(y * -10 + 5, -maxRotation),
          maxRotation
        )}deg)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(typingTimeout);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="min-h-screen grid grid-cols-1 lg:grid-cols-10 items-center relative overflow-hidden 
                 bg-gradient-to-br from-emerald-900 via-black to-black p-6 md:px-12 lg:px-20"
    >
      {/* Subtle glowing overlay for modern feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none"></div>

      {/* Social Links for Desktop */}
      <div className="hidden lg:flex flex-col items-center space-y-4 z-10 lg:pl-6">
        <a
          href="https://github.com/Althaf-codes/"
          className="text-white hover:text-emerald-400 transition"
        >
          <FaGithub size={24} />
        </a>
        <a href="#" className="text-white hover:text-emerald-400 transition">
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/Unsung_Coder"
          className="text-white hover:text-emerald-400 transition"
        >
          <FaXTwitter size={24} />
        </a>
      </div>

      {/* Main Text with Typing Effect */}
      <div className="lg:col-span-4 col-span-1 space-y-4 text-center lg:text-left z-10 lg:px-6 md:pt-12">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-300">
            Althaf
          </span>
        </h1>
        <p className="text-xl lg:text-2xl text-white mt-6">
          I have experience in{" "}
          <span
            ref={typingRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500"
          ></span>
        </p>

        <div className="flex items-center justify-center lg:justify-start md:justify-center mt-6 space-x-4 md:space-x-6">
          <a
            href="https://drive.google.com/file/d/1kSGY9zBaerE0K9D2VWC-Nja8qgsZFLhq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md text-white rounded-full shadow-lg 
                       border border-white border-opacity-20 hover:bg-opacity-20 hover:shadow-xl transition-all"
          >
            Download Resume
          </a>

          <div className="hidden lg:hidden md:flex space-x-4">
            <a
              href="https://github.com/Althaf-codes/"
              className="text-white hover:text-emerald-400 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-emerald-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/Unsung_Coder"
              className="text-white hover:text-emerald-400 transition"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Image with Animation */}
      <div
        className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0 z-10 lg:pr-6 md:w-3/4 md:mx-auto"
        ref={cardRef}
      >
        <div className="relative w-3/4 h-3/4 lg:w-[90%] lg:h-[90%] xl:w-[95%] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/project1.png"
            alt="Althaf"
            fill
            // layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* Social Links for Mobile */}
      <div className="flex justify-center space-x-4 mt-6 md:hidden z-10">
        <a href="https://github.com/Althaf-codes/" className="text-white hover:text-emerald-400 transition">
          <FaGithub size={24} />
        </a>
        <a href="#" className="text-white hover:text-emerald-400 transition">
          <FaLinkedin size={24} />
        </a>
        <a href="https://x.com/Unsung_Coder" className="text-white hover:text-emerald-400 transition">
          <FaXTwitter size={24} />
        </a>
      </div>
    </section>
  );
};

export default LandingSection;

// 'use client'

// import { useEffect, useRef } from 'react'
// import Image from 'next/image'
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

// const LandingSection = () => {
//   const typingRef = useRef<HTMLSpanElement>(null)
//   const cardRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const texts = ['Flutter', 'Node.js', 'Firebase', 'Full-stack Development']
//     let textIndex = 0
//     let charIndex = 0
//     let isDeleting = false
//     let typingTimeout: NodeJS.Timeout

//     const type = () => {
//       if (!typingRef.current) return // Check if typingRef is available

//       const currentText = texts[textIndex]
//       if (isDeleting) {
//         typingRef.current.textContent = currentText.substring(0, charIndex - 1)
//         charIndex--
//       } else {
//         typingRef.current.textContent = currentText.substring(0, charIndex + 1)
//         charIndex++
//       }

//       if (!isDeleting && charIndex === currentText.length) {
//         isDeleting = true
//         typingTimeout = setTimeout(type, 1000)
//       } else if (isDeleting && charIndex === 0) {
//         isDeleting = false
//         textIndex = (textIndex + 1) % texts.length
//         typingTimeout = setTimeout(type, 500)
//       } else {
//         typingTimeout = setTimeout(type, isDeleting ? 50 : 100)
//       }
//     }

//     type()

//     const handleMouseMove = (e: MouseEvent) => {
//       if (cardRef.current) {
//         const { left, top, width, height } = cardRef.current.getBoundingClientRect()
//         const x = (e.clientX - left) / width
//         const y = (e.clientY - top) / height

//         const maxRotation = 5
//         cardRef.current.style.transform = `perspective(1000px) rotateY(${Math.min(Math.max(x * 10 - 5, -maxRotation), maxRotation)}deg) rotateX(${Math.min(Math.max(y * -10 + 5, -maxRotation), maxRotation)}deg)`
//       }
//     }

//     document.addEventListener('mousemove', handleMouseMove)

//     // Cleanup function to clear timeouts and event listeners on unmount
//     return () => {
//       clearTimeout(typingTimeout) // Clear typing timeout on unmount
//       document.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])

//   return (
//     <section className="min-h-screen grid grid-cols-1 lg:grid-cols-10 items-center relative overflow-hidden bg-gradient-to-br from-green-800 to-black p-6 md:px-12 lg:px-20">
//       {/* Background */}
//       <div className="absolute inset-0 z-0 bg-grid-pattern animate-gridMove"></div>

//       {/* Social Links for Desktop */}
//       <div className="hidden lg:flex flex-col items-center space-y-4 z-10 lg:pl-6">
//         <a href="#" className="text-white hover:text-blue-500 transition"><FaGithub size={24} /></a>
//         <a href="#" className="text-white hover:text-blue-500 transition"><FaLinkedin size={24} /></a>
//         <a href="#" className="text-white hover:text-blue-500 transition"><FaTwitter size={24} /></a>
//       </div>

//       {/* Main Text with Typing Effect */}
//       <div className="lg:col-span-4 col-span-1 space-y-4 text-center lg:text-left z-10 lg:px-6 md:pt-12">
//         <h1 className="text-4xl lg:text-6xl font-bold text-white">
//           Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Althaf</span>
//         </h1>
//         <p className="text-xl lg:text-2xl text-white mt-6">
//           I have experience in <span ref={typingRef} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"></span>
//         </p>

//         {/* Button with Social Icons for Tablet */}
//         <div className="flex items-center justify-center lg:justify-start md:justify-center mt-6 space-x-4 md:space-x-6">
//           {/* <button className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-full shadow-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
//             Download Resume
//           </button> */}
//           <a
//             href="https://www.canva.com/design/DAGV5nFb1Uc/eNZd4E7OqFKOffDaxOEwZg/edit?utm_content=DAGV5nFb1Uc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md text-white rounded-full shadow-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-all"
//           >
//             Download Resume
//           </a>

//           <div className="hidden lg:hidden  md:flex space-x-4">
//             <a href="#" className="text-white hover:text-blue-500 transition"><FaGithub size={24} /></a>
//             <a href="#" className="text-white hover:text-blue-500 transition"><FaLinkedin size={24} /></a>
//             <a href="#" className="text-white hover:text-blue-500 transition"><FaTwitter size={24} /></a>
//           </div>
//         </div>
//       </div>

//       {/* Image with Animation */}
//       <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0 z-10 lg:pr-6 md:w-3/4 md:mx-auto" ref={cardRef}>
//         <div className="relative w-3/4 h-3/4 lg:w-[90%] lg:h-[90%] xl:w-[95%] aspect-square rounded-3xl overflow-hidden border-none">
//           <Image
//             src="/project1.png"
//             alt="Althaf"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>
//       </div>

//       {/* Social Links for Mobile */}
//       <div className="flex justify-center space-x-4 mt-6 md:hidden z-10">
//         <a href="#" className="text-white hover:text-blue-500 transition"><FaGithub size={24} /></a>
//         <a href="#" className="text-white hover:text-blue-500 transition"><FaLinkedin size={24} /></a>
//         <a href="#" className="text-white hover:text-blue-500 transition"><FaTwitter size={24} /></a>
//       </div>
//     </section>
//   )
// }

// export default LandingSection
