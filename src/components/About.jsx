import React from 'react'
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id="about" className="border-y border-blue-400 pb-10">
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-16 text-center text-5xl underline decoration-blue-400 decoration-2 underline-offset-4">
                About <span className="text-blue-400">me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <div className="w-full2">
                    <div className="mx-5 flex text-center justify-center lg:justify-start text-xl">
                        <motion.p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About