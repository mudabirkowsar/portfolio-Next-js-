import React from "react";
import { FaGraduationCap, FaBriefcase, FaSchool } from "react-icons/fa";

function Education() {
    const education = [
        {
            title: "Bachelor’s Degree",
            institute: "GNA University",
            duration: "2022 – 2026",
            description:
                "Focused on computer science fundamentals, web technologies, and software development.",
            icon: <FaGraduationCap />,
            type: "degree",
        },
        {
            title: "Full Stack Internship",
            institute: "Omninos International",
            duration: "Jan 2026 – still",
            description:
                "Worked on Next.js applications, UI optimization, and API integrations.",
            icon: <FaBriefcase />,
            type: "internship",
        },
        {
            title: "React Native Developer",
            institute: "ClienZon",
            duration: "Aug 2025 – Dec 2025",
            description:
                "Worked on React Native based applications, UI optimization, and API integrations.",
            icon: <FaBriefcase />,
            type: "internship",
        },
        {
            title: "React Native Intern",
            institute: "Lady Bird Web Solution",
            duration: "June 2025 – Aug 2025",
            description:
                "Worked on React-Native  applications, UI optimization, and API integrations.",
            icon: <FaBriefcase />,
            type: "internship",
        },
        {
            title: "Full Stack Traning",
            institute: "A2IT",
            duration: "June 2024 – Aug 2024",
            description:
                "Worked on React-based applications, UI optimization, and API integrations.",
            icon: <FaBriefcase />,
            type: "internship",
        },
        {
            title: "12th Standard",
            institute: "Govt Higher Secondary School",
            duration: "2019 – 2021",
            description:
                "Completed higher secondary education with focus on Science and Mathematics.",
            icon: <FaSchool />,
            type: "school",
        },
    ];

    return (
        <section
            id="education"
            className="py-24 bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Education & Experience
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        My academic journey and hands-on industry experience.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-gray-200 pl-8 space-y-12">
                    {education.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Icon */}
                            <div className="absolute -left-[42px] top-0 w-12 h-12
                            rounded-full bg-gray-900 text-white
                            flex items-center justify-center text-xl">
                                {item.icon}
                            </div>

                            {/* Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-md
                            hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col sm:flex-row
                                sm:items-center sm:justify-between">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <span className="mt-2 sm:mt-0 text-sm font-medium text-indigo-600">
                                        {item.duration}
                                    </span>
                                </div>

                                <p className="mt-1 text-gray-600 font-medium">
                                    {item.institute}
                                </p>

                                <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Education;
