import Link from "next/link";
import React from "react";
import {
    FaUsers,
    FaCode,
    FaTrophy,
    FaHandsHelping,
    FaMicrophone
} from "react-icons/fa";

function ExtraActivities() {
    const activities = [
        {
            title: "Hackathons & Coding Events",
            description:
                "Participated in multiple hackathons and coding competitions, collaborating with teams to build real-world solutions.",
            icon: <FaCode />,
        },
        {
            title: "Technical Workshops",
            description:
                "Attended and contributed to workshops on React, JavaScript, and modern web development practices.",
            icon: <FaUsers />,
        },
        {
            title: "Open Source Contributions",
            description:
                "Contributed to open-source projects by fixing bugs, improving UI, and writing clean, maintainable code.",
            icon: <FaHandsHelping />,
        },
        {
            title: "Public Speaking / Tech Talks",
            description:
                "Presented technical topics and project demos during college events and developer meetups.",
            icon: <FaMicrophone />,
        },
        {
            title: "Achievements & Recognition",
            description:
                "Received appreciation for teamwork, leadership, and technical problem-solving skills.",
            icon: <FaTrophy />,
        },
    ];

    return (
        <section
            id="extra-activities"
            className="py-24 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Extra Activities
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Activities that showcase my leadership, collaboration,
                        and passion for technology beyond academics.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 text-center
                            border border-gray-200 shadow-sm
                            hover:shadow-2xl hover:-translate-y-2
                            transition-all duration-300"
                        >
                            {/* Icon */}
                            <div
                                className="mx-auto w-16 h-16 rounded-2xl
                                bg-gray-900 text-white flex items-center
                                justify-center text-2xl mb-6
                                group-hover:scale-110 transition"
                            >
                                {activity.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                {activity.title}
                            </h3>

                            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                                {activity.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-20 text-center">
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 rounded-full
                        bg-gray-900 text-white font-semibold text-lg
                        hover:bg-gray-800 hover:scale-105
                        transition-all duration-300 shadow-lg"
                    >
                        Connect With Me
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default ExtraActivities;
