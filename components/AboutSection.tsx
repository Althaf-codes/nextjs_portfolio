import React from "react";
import Link from "next/link";

const AboutSection: React.FC = () => {
  return (
    <section className="text-gray-400 bg-black body-font pb-10">
      <div className="flex flex-col text-center w-full pt-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          About Me
        </h1>
        <br />
        <br />
        <h2 className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Wanna know my Journey? How I improved,
        </h2>

        {/* <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">Have a look at some of my</h2> */}
      </div>
      <br />
      <br />
      {/* <div className="container px-5 pt-10 pb-10 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        <div className="sm:w-1/2 mb-10 px-4">
          <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">From This</h2>
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/>
          </div>
          <p className="leading-relaxed text-base px-5 pt-4">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">To This</h2>
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502"/>
          </div>
          <p className="leading-relaxed text-base px-5 pt-4">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        </div>
      </div>
    </div> */}

      <div className=" w-full">
        <Link href={"/about"}>
          <button className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
            Know Me
          </button>
        </Link>
      </div>
    </section>
    //  <section className="py-20 bg-gray-100 dark:bg-gray-800">
    //     <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
    //       <div className="md:w-1/2 mb-8 md:mb-0">
    //         <Image
    //           src="/about-me.jpg"
    //           alt="About Me"
    //           width={500}
    //           height={500}
    //           className="rounded-lg shadow-lg"
    //         />
    //       </div>
    //       <div className="md:w-1/2 md:pl-10">
    //         <h2 className="text-3xl font-bold mb-4">About Me</h2>
    //         <p className="mb-4">
    //           Hi, I'm Althaf, a passionate full-stack Flutter developer with a keen interest in creating
    //           seamless, cross-platform applications. With several years of experience in mobile and web
    //           development, I've honed my skills in Flutter, Dart, Node.js, and various database technologies.
    //         </p>
    //         <p className="mb-4">
    //           My journey in software development began with a fascination for creating user-friendly
    //           interfaces and has evolved into a deep appreciation for robust, scalable backend systems.
    //           I believe in writing clean, maintainable code and am always eager to learn new technologies
    //           and methodologies to improve my craft.
    //         </p>
    //         <p>
    //           When I'm not coding, you can find me exploring new tech trends, contributing to open-source
    //           projects, or sharing my knowledge through blog posts and community events. I'm always open
    //           to new challenges and collaborations, so feel free to reach out!
    //         </p>
    //       </div>
    //     </div>
    //   </section>
  );
};

export default AboutSection;
