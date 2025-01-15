import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

    return (
        <nav className="fixed flex top-0 left-0 right-0 justify-between items-center  px-10 md:px-40 py-5 z-50 bg-[#03141D]">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-400 hover:text-[#FFFFFF]"><a href="#home">&lt;/HesHan&gt;</a></h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-lg">
                <li>
                    <a href="#home" className="text-blue-400 hover:text-[#FFFFFF]">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-blue-400 hover:text-[#FFFFFF]">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#skills" className="text-blue-400 hover:text-[#FFFFFF]">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className="text-blue-400 hover:text-[#FFFFFF]">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-blue-400 hover:text-[#FFFFFF]">
                        Contact Me
                    </a>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-blue-400 text-2xl focus:outline-none"
            >
                {isOpen ? "✕" : "☰"} {/* Toggle between "☰" and "✕" */}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-[#03141D] flex flex-col gap-6 text-center text-lg p-6 md:hidden z-50">
                    <li>
                        <a
                            href="#home"
                            className="text-[#97BCC7] hover:text-[#FFFFFF]"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-[#97BCC7] hover:text-[#FFFFFF]"
                            onClick={() => setIsOpen(false)}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-[#97BCC7] hover:text-[#FFFFFF]"
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-[#97BCC7] hover:text-[#FFFFFF]"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-[#97BCC7] hover:text-[#FFFFFF]"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
