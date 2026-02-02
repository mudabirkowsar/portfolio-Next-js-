"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-indigo-600"
                >
                    Mudabir
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
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
                        href="/aboutme"
                        className="text-gray-700 font-medium hover:text-indigo-600 transition"
                    >
                        About Me
                    </Link>

                    <Link
                        href="/contact"
                        className="ml-4 px-5 py-2 rounded-full
                        bg-indigo-600 text-white font-medium
                        hover:bg-indigo-700 transition shadow-md"
                    >
                        Connect
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-3xl text-gray-800"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <nav className="flex flex-col gap-6 px-6 py-8">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 font-medium hover:text-indigo-600"
                        >
                            Home
                        </Link>

                        <Link
                            href="/projects"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 font-medium hover:text-indigo-600"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/aboutme"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 font-medium hover:text-indigo-600"
                        >
                            About Me
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 inline-block px-5 py-3 text-center
                            rounded-full bg-indigo-600 text-white font-medium
                            hover:bg-indigo-700 transition shadow-md"
                        >
                            Connect
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;
