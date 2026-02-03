import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const metadata= {
  title: "Projects - My Portfolio",
  description:
    "Explore a curated selection of projects showcasing my skills in modern web development technologies and frameworks.",
};

function page() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio showcasing projects, skills, and experience.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      stack: ["React", "Tailwind CSS", "Next.js"],
      type: "Personal Project",
      featured: true,
    },
    {
      title: "E-commerce App",
      description:
        "Full-stack MERN e-commerce application with authentication, cart, and payments.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.com",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      type: "Full Stack Project",
      featured: false,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with WebSocket communication and user presence.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      github: "https://github.com/yourusername/chat-app",
      demo: "https://chat-demo.com",
      stack: ["Node.js", "Socket.io", "React"],
      type: "Realtime App",
      featured: false,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900">
            Projects
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of projects where I applied modern technologies
            to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden
              bg-white shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1
                text-xs font-semibold rounded-full
                bg-indigo-600 text-white">
                  Featured
                </span>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                  group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60
                opacity-0 group-hover:opacity-100
                transition duration-500 flex items-center justify-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-4 rounded-full bg-white text-gray-900
                    hover:scale-110 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="p-4 rounded-full bg-indigo-600 text-white
                    hover:scale-110 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-xs font-semibold text-indigo-600">
                  {project.type}
                </span>

                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                      bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default page;
