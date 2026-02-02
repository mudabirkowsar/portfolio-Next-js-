import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Mudabir</h2>
          <p className="mt-3 text-gray-400">
            Full Stack Developer crafting modern web experiences with
            clean code and great UI.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/aboutme" className="hover:text-white transition">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Let’s Connect
          </h3>
          <p className="text-gray-400 mb-4">
            Open to freelance, full-time roles, and collaborations.
          </p>
          <a
            href="mailto:yourmail@example.com"
            className="inline-block px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Email Me
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mudabir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
