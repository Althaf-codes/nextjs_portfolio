"use client";
import Link from "next/link";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, purpose, message });
    setName("");
    setEmail("");
    setPurpose("");
    setMessage("");
  };

  return (
    <section className="text-gray-300 bg-gradient-to-br from-emerald-900 via-black to-black body-font relative overflow-hidden">
      {/* Subtle overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none"></div>

      <div className="container px-5 py-24 mx-auto relative z-10">
        {/* Heading & Quote */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-white">
            Wanna get in touch?
          </h1>

          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-6 h-6 text-emerald-400 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6..."></path>
            </svg>

            <p className="leading-relaxed text-lg italic">
              "If you want to walk fast, walk alone. If you want to walk far,
              walk together."
            </p>

            <span className="inline-block h-1 w-10 rounded bg-emerald-500 mt-8 mb-6"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">
              Mr. Ratan Tata
            </h2>
          </div>
        </div>

        {/* Contact Button */}
        <div className="w-full">
          <Link href={"/contact"}>
            <button
              className="flex mx-auto text-white bg-emerald-600 bg-opacity-90 border-0 py-3 px-10 
                         rounded-full shadow-lg backdrop-blur-md border border-white/10
                         hover:bg-emerald-500 hover:shadow-emerald-500/20 transition-all duration-300"
            >
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// 'use client'
// import Link from 'next/link';
// import React, { useState } from 'react';

// const ContactSection: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [purpose, setPurpose] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log({ name, email, purpose, message });
//     // Reset form fields
//     setName('');
//     setEmail('');
//     setPurpose('');
//     setMessage('');
//   };

//   return (
//     <section className="text-gray-400 bg-gray-900 body-font">
//     <div className="container px-5 py-24 mx-auto">
//       <div className="flex flex-col text-center w-full mb-12">
//         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Wanna get in touch?</h1>
//     {/* <div className="container px-5 py-24 mx-auto"> */}
//       <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-4 h-4 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
//         <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
//       </svg>
//       <p className="leading-relaxed text-lg">If you want to walk fast, walk alone. If you want to walk far, walk together.</p>
//       <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
//       <h2 className="text-white font-medium title-font tracking-wider text-sm">Mr. Ratan Tata</h2>
//       {/* <p className="text-gray-500">Senior Product Designer</p> */}
//      </div>
//     {/* </div>       */}
//   </div>

//   <div className=" w-full">
//         <Link href={'/contact'}>
//           <button className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">Contact Me</button>
//         </Link>
//    </div>
//     </div>
//   </section>
//   );
// };

// export default ContactSection;
