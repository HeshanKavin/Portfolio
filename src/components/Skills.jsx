import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiTailwindcss, SiGraphql, SiTypescript, SiFirebase, SiDocker, SiRedux, SiSupabase } from 'react-icons/si';
import { DiRedis, DiJava, DiPhp } from 'react-icons/di';
import { FaNodeJs, FaPython, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoKubernetes } from 'react-icons/bi';
import { motion } from 'framer-motion';

const containerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Add delay between child animations
        },
    },
};

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Skills = () => {
    const skills = [
        { icon: <FaHtml5 className="text-7xl text-orange-500" />, label: 'HTML' },
        { icon: <FaCss3Alt className="text-7xl text-blue-500" />, label: 'CSS' },
        { icon: <DiPhp className="text-7xl text-blue-600" />, label: 'PHP' },
        { icon: <DiJava className="text-7xl text-red-600" />, label: 'Java' },
        { icon: <FaJs className="text-7xl text-yellow-500" />, label: 'JavaScript' },
        { icon: <SiTypescript className="text-7xl text-blue-600" />, label: 'TypeScript' },
        { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, label: 'React.js' },
        { icon: <TbBrandNextjs className="text-7xl text-gray-500" />, label: 'Next.js' },
        { icon: <FaNodeJs className="text-7xl text-green-400" />, label: 'Node.js' },
        { icon: <FaPython className="text-7xl text-blue-400" />, label: 'Python' },
        //{ icon: <FaAws className="text-7xl text-orange-500" />, label: 'AWS' },
        { icon: <FaGitAlt className="text-7xl text-orange-400" />, label: 'Git' },
        { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, label: 'React Native' },
        { icon: <SiMongodb className="text-7xl text-green-500" />, label: 'MongoDB' },
        //{ icon: <BiLogoPostgresql className="text-7xl text-blue-500" />, label: 'PostgreSQL' },
        { icon: <SiSupabase className="text-7xl text-green-600" />, label: 'Supabase' },
        //{ icon: <SiGraphql className="text-7xl text-pink-500" />, label: 'GraphQL' },
        //{ icon: <SiRedux className="text-7xl text-purple-500" />, label: 'Redux' },
        { icon: <SiTailwindcss className="text-7xl text-cyan-300" />, label: 'TailwindCSS' },
        { icon: <SiFirebase className="text-7xl text-yellow-400" />, label: 'Firebase' },
        { icon: <SiDocker className="text-7xl text-blue-400" />, label: 'Docker' },
        //{ icon: <BiLogoKubernetes className="text-7xl text-blue-300" />, label: 'Kubernetes' },
        //{ icon: <DiRedis className="text-7xl text-red-600" />, label: 'Redis' },
    ];

    return (
        <div id="skills" className="border-y border-blue-400 pb-10">
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-16 text-center text-4xl underline decoration-blue-400 decoration-2 underline-offset-4">
                Skills
            </motion.h1>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="flex flex-wrap items-center justify-center gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            variants={iconVariants(5)}
                            key={index}
                            className="flex flex-col items-center justify-center rounded-2xl border-4 border-blue-400 p-4 w-28 h-28 "
                        >
                            {skill.icon}
                            <span className="mt-2 text-sm text-white">{skill.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Skills;
