import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";

import fs from "fs";
import OnThisPage from "@/components/OnThisPage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { Metadata } from "next";
import path from "path";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string; title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProjectPost({
  params,
}: {
  params: { slug: string };
}) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "material-theme-ocean",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings);

  const filePath = path.join(
    process.cwd(),
    `content/projects/${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound(); // This will cause Next.js to show a 404 page
  }

  // const filePath = `content/projects/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <section className="bg-gray-950">
      <MaxWidthWrapper className="prose dark:prose-invert ">
        <div className="flex flex-col lg:flex-row py-16 ">
          <div className="w-full lg:w-2/3 px-4 lg:px-10">
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
          <OnThisPage
            className="text-sm w-full lg:w-96 mt-8 lg:mt-0 lg:ml-16"
            htmlContent={htmlContent}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

//Old code for safety
// export default async function BlogPost({ params }: { params: { slug: string } }) {

//     const processor = unified()
//       .use(remarkParse)
//       .use(remarkRehype)
//       .use(rehypeStringify)
//       .use(rehypeSlug)
//       .use(rehypePrettyCode,{
//         theme:"material-theme-ocean",
//         transformers: [
//             transformerCopyButton({
//               visibility: 'always',
//               feedbackDuration: 3_000,
//             }),
//           ],
//       })
//       .use(rehypeAutolinkHeadings)

//       const filePath = `content/${params.slug}.md`
//       const fileContent = fs.readFileSync(filePath,"utf-8");
//       const {data,content} = matter(fileContent)

//       const htmlContent = (await processor.process(content)).toString();

//       return (

//     <MaxWidthWrapper className='prose dark:prose-invert'>

//             <div className='flex'>
//             <div className='px-16'>
//                 <h1>{data.title}</h1>
//                 <div dangerouslySetInnerHTML={{__html:htmlContent}}>
//             </div>

//             </div>
//             <OnThisPage className='text-sm w-[50%]' htmlContent={htmlContent}/>
//             </div>

//     </MaxWidthWrapper>
//   )
// }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params

  const filePath = `content/projects/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: `${data.title}- Portfolio`,
    description: data.description,
  };
}
