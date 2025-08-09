"use client";
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface LinkType {
  id: string;
  text: string;
  subtopics?: LinkType[];
}

const OnThisPage = ({ htmlContent, className }: { htmlContent: string; className: string }) => {
  const [links, setLinks] = useState<LinkType[] | null>(null);

  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;
    const headings = temp.querySelectorAll('h2');

    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;

      const subtopics: LinkType[] = [];
      let nextElement = heading.nextElementSibling;

      while (nextElement && nextElement.tagName !== 'H2') {
        if (nextElement.tagName === 'H3') {
          const subId = nextElement.id || `subheading-${index}-${subtopics.length}`;
          nextElement.id = subId;
          subtopics.push({
            id: subId,
            text: (nextElement as HTMLElement).innerText
          });
        }
        nextElement = nextElement.nextElementSibling;
      }

      generatedLinks.push({
        id: id,
        text: (heading as HTMLElement).innerText,
        subtopics: subtopics.length > 0 ? subtopics : undefined
      });
    });

    setLinks(generatedLinks);
  }, [htmlContent]);

  return (
    <div className={cn('hidden md:block lg:fixed top-20 right-0 pr-4', className)}>
      <div className='sticky top-20'>
        <h2>On this page</h2>
        <ul className='not-prose text-sm'>
          {links && links.map((link) => (
            <li key={link.id} className='pt-1'>
              <a className='font-bold  hover:text-green-500' href={`#${link.id}`}>{link.text.slice(0, 50)}{link.text.length > 50 ? "..." : ""}</a>
              {link.subtopics && (
                <ul className='ml-4 mt-1'>
                  {link.subtopics.map((sub) => (
                    <li key={sub.id} className='pt-1 hover:text-green-500'>
                      <a href={`#${sub.id}`}>{"- "}{sub.text.slice(0, 50)}{sub.text.length > 50 ? "..." : ""}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OnThisPage;



// "use client"
// import { cn } from '@/lib/utils'
// import React,{useEffect,useState} from 'react'



// interface LinkType{
//     id:string
//     text:string
// }

// const OnThisPage = ({htmlContent,className}:{htmlContent:string,className:string}) => {
//     const [links,setLinks] = useState<null|LinkType[]>(null)

//     useEffect(()=>{
//         const temp  = document.createElement("div");
//         temp.innerHTML = htmlContent
//         const headings  = temp.querySelectorAll('h2');

//         const generatedLinks:LinkType[] = [];
//         // console.log(`the generated links are ${headings.length}`);
        

//         headings.forEach((heading,index)=>{
//             const id  = heading.id|| `heading-${index}`;
//             heading.id = id;
//             generatedLinks.push({
//                 id:id,
//                 text:(heading as HTMLElement).innerText
//             })
//         })


//         setLinks(generatedLinks);


//     },[htmlContent])

//   return (
//     <div className={cn('hidden md:block',className)}>
//         <div className='sticky top-20'>
//             <h2>On this page</h2>
//             <ul className='not-prose text-sm'>
//                 {links && links.map((link)=>{
//                 return  <li key={link.id} className='pt-1'>
//                         <a href={`#${link.id}`}>{link.text.slice(0,50)}{link.text.length>50?"...":""}</a>
//                     </li>
//                 })}
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default OnThisPage