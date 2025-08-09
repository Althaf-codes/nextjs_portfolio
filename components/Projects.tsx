import Image from "next/image";
// import { Project } from '@/types'

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Flutter E-commerce App",
    description:
      "A feature-rich e-commerce mobile application built with Flutter. Includes user authentication, product catalog, shopping cart, and payment integration.",
    image:
      "https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg",
  },
  {
    title: "Task Management Web App",
    description:
      "A responsive web application for task management, built with Flutter web. Features include task creation, assignment, due dates, and real-time collaboration.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RwKxZTQRi-QwEocYK4jzY5CDbdKcbVGIkA&s",
  },
  {
    title: "Flutter Social Media App",
    description:
      "A cross-platform social media application built with Flutter. Features include user profiles, posts, comments, and real-time messaging.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RwKxZTQRi-QwEocYK4jzY5CDbdKcbVGIkA&s",
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`mb-12 ${
                index % 2 === 0 ? "md:ml-auto" : ""
              } md:w-1/2`}
            >
              <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover"
                />
                {/* <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  layout="responsive" 
                  className="object-cover"
                /> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-500 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
