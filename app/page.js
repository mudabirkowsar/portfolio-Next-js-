import Image from "next/image";
import SkillsSection from "./components/SkillsSection";
import Education from "./components/Education";
import ExtraActivities from "./components/ExtraActivities";

export const metadata = {
  title: "Home - Mudabir's Portfolio",
  description: "Welcome to Mudabir's personal portfolio website.",
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I’m <span className="text-indigo-600">Mudabir</span>
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl text-gray-600">
              Full Stack Developer | MERN & Next.js
            </h2>

            <p className="mt-6 text-gray-500 max-w-xl">
              I build modern, scalable, and user-friendly web applications.
              Passionate about clean code, performance, and beautiful UI/UX.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/projects"
                className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
              <img
                src="https://www.citypng.com/public/uploads/preview/mickey-mouse-cartoon-character-png-701751694870917llwgrbfvv1.png" // put your image in public folder
                alt="Mudabir Profile"
                // fill
                className="object-cover"
              // priority
              />
            </div>
          </div>

        </div>
      </main>

      <SkillsSection />
      <Education />
      <ExtraActivities />
    </>
  );
}
