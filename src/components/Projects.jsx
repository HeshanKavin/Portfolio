import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div id="projects" className="border-y border-blue-400 pb-10">
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-16 text-center text-4xl underline decoration-blue-400 decoration-2 underline-offset-4">
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                width={250}
                                height={250}
                                alt={project.title}
                                className="mb-6 rounded cursor-pointer"
                                onClick={() => handleImageClick(project.image)} // Open image on click
                            />
                        </motion.div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-6 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-blue-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 rounded bg-blue-400 px-2 py-1 text-sm font-medium text-white"
                                >{tech}</span>
                            ))}
                            <div className="mt-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mr-4 text-blue-400 underline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Modal for full image view */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white p-4 rounded"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
                    >
                        <img
                            src={selectedImage}
                            alt="Full view"
                            className="w-full h-auto max-w-screen-md"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 p-2 text-white bg-blue-400 rounded-full"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
