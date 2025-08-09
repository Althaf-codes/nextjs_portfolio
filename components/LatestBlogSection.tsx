import Link from "next/link";
import React from "react";
import Image from "next/image";

const LatestBlogSection = () => {
  return (
    <section className="bg-gray-900 text-gray-600 body-font">
      <div className="container px-5 pb-16 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden flex flex-row">
            <div className="w-1/3 h-full bg-gray-200"></div>
            <div className="w-1/3 h-full bg-green-500"></div>
            <div className="w-1/3 h-full bg-gray-200"></div>
          </div>
          <div className="flex flex-col text-center w-full my-16">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Latest Blogs
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos;t heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
        </div>

        <div className="container px-10 pt-10 pb-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/722x402"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 w-full">
          <Link href={"/blog"}>
            <button className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
              View All
            </button>
          </Link>
        </div>

        {/* <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-10">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div> */}
      </div>
    </section>
  );
};

export default LatestBlogSection;
