import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profilePic from "../assets/heshan.png";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const Hero = () => {
    return (
        <div id="home"
            className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-16 min-h-screen pt-24">
            {/* Left Content */}
            <div className="text-center md:text-left">
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible" className="text-6xl font-extrabold leading-tight">
                    Hi, I'm <span className="text-blue-400">HesHan!</span>
                </motion.h1>
                <motion.h2
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl font-semibold text-white mt-5">
                    A{" "}
                    <TypeAnimation
                        sequence={[
                            "Software Engineer", // Text to display
                            2000, // Wait 2 seconds
                            "Full Stack Developer",
                            2000,
                            "Mobile App Developer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50} // Typing speed
                        repeat={Infinity} // Loop animation
                    />
                </motion.h2>
                <div className="mt-10 flex justify-center md:justify-start gap-4">
                    <motion.div
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center md:justify-start gap-4">
                        <a href="https://github.com/HeshanKavin" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-4xl hover:text-blue-400 transition" />
                        </a>
                        <a href="https://linkedin.com/in/heshan-kavinda-5b3217217" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-4xl hover:text-blue-400 transition" />
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    variants={container(1.5)}
                    initial="hidden"
                    animate="visible"
                    className="mt-8 flex justify-center md:justify-start gap-4">
                    <a href="#contact" className="px-6 py-2 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition">
                        Contact Me
                    </a>
                </motion.div>
            </div>
            {/* Right Image */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-112 md:h-112 mx-0 md:mx-0">
                <div className="absolute inset-0 bg-opacity-10 rounded-full"></div>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    src={profilePic} // Replace with your image URL
                    alt="HesHan"
                    className="w-full h-full rounded-full object-cover relative z-10"
                />
            </div>
        </div>
    )
}

export default Hero