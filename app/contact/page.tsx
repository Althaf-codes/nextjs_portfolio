import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 filter grayscale contrast-125 opacity-20"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15916206.405019812!2d72.41693387849266!3d13.112322687479386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf1c528a383965%3A0xed77f1a39696ccc7!2sSouth%20India!5e0!3m2!1sen!2sin!4v1730985767141!5m2!1sen!2sin"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Somewhere in the South of India 😅, nearby a beach 🏖️🌊</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a className="text-green-400 leading-relaxed">althafarali8@gmail.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">Github</h2>
              <Link href={'https://github.com/Althaf-codes'}>
                <p className="leading-relaxed">https://github.com/Althaf-codes</p>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Me</h2>
          <p className="leading-relaxed mb-5">Whether it's regarding a Job, Project or a General Inquiry, please feel free to write 😉.</p>
          
          {/* Contact form with FormSubmit integration */}
          <form action="https://formsubmit.co/67997a1452ff6c32c85bb617dd6daf1f" method="POST">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            </div>
            <button type="submit" className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
