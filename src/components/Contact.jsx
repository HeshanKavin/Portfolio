import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'


const Contact = () => {
    return (
        <div id="contact" className="border-y border-blue-400 pb-10">
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-4xl underline decoration-blue-400 decoration-2 underline-offset-4">
                Get in Touch
            </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="my-3">{CONTACT.address}</motion.p>
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="my-3">{CONTACT.phoneNo}</motion.p>
                <a href="#" className="my-3">{CONTACT.email}</a>
                <p className="my-5 border-t border-blue-400 pt-10">
                    &copy; {new Date().getFullYear()} | HesHan Dissanayaka
                </p>
            </div>
        </div>
    )
}

export default Contact