import React from 'react'
import { PROJECTS } from '../constants'
import { div } from 'framer-motion/client'
import { motion } from 'framer-motion';

const Projects = () => {
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
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded"
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
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects