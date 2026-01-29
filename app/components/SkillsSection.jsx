import React from "react";

function SkillsSection() {
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "React Native", level: 75 },
    ];

    return (
        <section
            id="skills"
            className="py-0 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Skills & Expertise
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A snapshot of the technologies I use to build fast,
                        scalable, and user-friendly applications.
                    </p>
                </div>

                {/* Skills Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold text-gray-800">
                                    {skill.name}
                                </span>
                                <span className="text-sm font-medium text-indigo-600">
                                    {skill.level}%
                                </span>
                            </div>

                            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full transition-all duration-700 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default SkillsSection;
