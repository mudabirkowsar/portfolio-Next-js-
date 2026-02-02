import React from "react";

function page() {
    return (
        <section className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Contact Me
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Have a project in mind or just want to say hi? Let’s talk.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left: Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg 
             placeholder-gray-700 
             focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-2 w-full px-4 py-3 border placeholder-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="mt-2 w-full px-4 py-3 border placeholder-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right: Text Info */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Let’s build something great together 🚀
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            I’m always open to discussing new projects, creative ideas,
                            or opportunities to be part of your vision. Whether you’re
                            a startup, business, or individual — feel free to reach out.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            You can contact me directly through this form, or connect with
                            me via email or social platforms. I usually respond within
                            24 hours.
                        </p>

                        <div className="mt-8 space-y-4">
                            <p className="text-gray-700">
                                📧 <span className="font-medium">Email:</span>{" "}
                                <a
                                    href="mailto:khandaymudabir@gmail.com"
                                    className="text-indigo-600 hover:underline"
                                >
                                    khandaymudabir@gmail.com
                                </a>
                            </p>

                            <p className="text-gray-700">
                                📍 <span className="font-medium">Location:</span> Kashmir
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default page;
