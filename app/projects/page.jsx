import React from "react";

function page() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
    },
    {
      title: "E-commerce App",
      description: "Full-stack MERN e-commerce application.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.com",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using Socket.io and Node.js.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      github: "https://github.com/yourusername/chat-app",
      demo: "https://chat-demo.com",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            My Projects
          </h1>
          <p className="mt-4 text-gray-600">
            Some of the projects I’ve built using modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>
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
