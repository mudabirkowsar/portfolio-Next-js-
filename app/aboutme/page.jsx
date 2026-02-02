import React from "react";

function page() {
    return (
        <section className="min-h-screen bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900">
                        About Me
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Get to know more about who I am, what I do, and what I love building.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Hi, I’m Mudabir 👋
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            I’m a passionate Full Stack Developer specializing in building
                            modern, responsive, and scalable web applications. I enjoy
                            turning complex problems into simple, beautiful solutions.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            I work primarily with technologies like React, Next.js, Node.js,
                            MongoDB, and Tailwind CSS. I’m always learning and exploring new
                            tools to improve performance and user experience.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            When I’m not coding, I enjoy learning new tech, improving my
                            design sense, and working on side projects that challenge me.
                        </p>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h3 className="text-2xl font-bold text-indigo-600">2+</h3>
                                <p className="text-sm text-gray-500">Years Experience</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h3 className="text-2xl font-bold text-indigo-600">10+</h3>
                                <p className="text-sm text-gray-500">Projects</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h3 className="text-2xl font-bold text-indigo-600">5+</h3>
                                <p className="text-sm text-gray-500">Technologies</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://www.citypng.com/public/uploads/preview/mickey-mouse-cartoon-character-png-701751694870917llwgrbfvv1.png"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default page;
