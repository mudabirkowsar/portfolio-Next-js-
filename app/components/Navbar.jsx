import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
            <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
                    Mudabir
                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-gray-700 font-medium hover:text-indigo-600 transition"
                    >
                        Home
                    </Link>

                    <Link
                        href="/projects"
                        className="text-gray-700 font-medium hover:text-indigo-600 transition"
                    >
                        Projects
                    </Link>

                    <Link
                        href="#about"
                        className="text-gray-700 font-medium hover:text-indigo-600 transition"
                    >
                        About Me
                    </Link>

                    {/* Connect Button */}
                    <Link
                        href="#contact"
                        className="ml-4 px-5 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md"
                    >
                        Connect
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
