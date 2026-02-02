import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact
} from "react-icons/fa";

function SkillsSection() {
    const skills = [
        {
            name: "HTML",
            level: "Expert",
            icon: <FaHtml5 />,
            color: "text-orange-500"
        },
        {
            name: "CSS",
            level: "Expert",
            icon: <FaCss3Alt />,
            color: "text-blue-500"
        },
        {
            name: "JavaScript",
            level: "Advanced",
            icon: <FaJs />,
            color: "text-yellow-400"
        },
        {
            name: "React",
            level: "Advanced",
            icon: <FaReact />,
            color: "text-cyan-400"
        },
        {
            name: "React Native",
            level: "Intermediate",
            icon: <FaReact />,
            color: "text-cyan-500"
        },
    ];

    return (
        <section
            id="skills"
            className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Skills
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Tools and technologies I use to craft high-quality
                        digital experiences.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/70 backdrop-blur-md
                            rounded-3xl p-10 text-center border border-gray-200
                            shadow-sm hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div
                                className={`mx-auto w-20 h-20 flex items-center justify-center
                                rounded-2xl bg-gray-100 mb-6 text-5xl
                                ${skill.color}
                                group-hover:scale-110 transition`}
                            >
                                {skill.icon}
                            </div>

                            {/* Skill Name */}
                            <h3 className="text-xl font-semibold text-gray-900">
                                {skill.name}
                            </h3>

                            {/* Level */}
                            <span className="inline-block mt-3 px-4 py-1.5
                            rounded-full text-sm font-medium
                            bg-gray-900 text-white">
                                {skill.level}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default SkillsSection;
