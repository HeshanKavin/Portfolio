import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";


export const ABOUT_TEXT = `I am an enthusiastic undergraduate student in Computer Science, with a strong foundation in software engineering and a passion for building innovative solutions. As a Full-Stack Developer, my expertise spans web development and mobile app development, and I am always eager to learn and adapt to new technologies. Beyond my technical skills, I value clear communication, teamwork, leadership, and problem-solving, ensuring that I contribute effectively to any project.`;
// export const EXPERIENCES = [
//     {
//         year: "2023 - Present",
//         role: "Senior Full Stack Developer",
//         company: "Google Inc.",
//         description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//         technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//     },
//     {
//         year: "2022 - 2023",
//         role: "Frontend Developer",
//         company: "Adobe",
//         description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//         technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//     },
//     {
//         year: "2021 - 2022",
//         role: "Full Stack Developer",
//         company: "Facebook",
//         description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//         technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//     },
//     {
//         year: "2020 - 2021",
//         role: "Software Engineer",
//         company: "Paypal",
//         description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//         technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//     },
// ];

export const PROJECTS = [
    {
        title: "Bakery Web Application",
        image: project1,
        description:
            "A full-stack project aimed at streamlining bakery operations. Features include product listings, user authentication, online order management, and integrated payments.",
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
        github: "https://github.com/chamodRash/bakery_web_app",
        liveDemo: "https://bakery-web-app.vercel.app",
    },
    {
        title: "Portfolio Website",
        image: project2,
        description:
            "A personal portfolio built using React to showcase skills, projects, and contact details. The website includes sections such as About, Skills, Projects, and Contact, offering a comprehensive overview of the development journey and technical expertise.",
        technologies: ["React.js", "JavaScript", "TailwindCSS"],
        github: "https://github.com/HeshanKavin/Portfolio",
        liveDemo: "https://heshandisanayaka.vercel.app/",
    },
    {
        title: "Personal Blog",
        image: project3,
        description:
            "A feature-rich blog platform where users can create, edit, and publish posts via a sleek admin dashboard. Designed with an intuitive UI for a seamless blogging experience.",
        technologies: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
        github: "https://github.com/HeshanKavin/Personal_Blog",
        liveDemo: "https://heshan-blog.vercel.app/",
    },
    {
        title: "CV Creator Mobile App Design",
        image: project4,
        description:
            "A sleek mobile app concept designed in Figma to simplify CV creation. It features customizable templates, real-time previews, and profile management, ensuring users can effortlessly craft professional resumes.",
        technologies: ["Figma"],
        github: "https://github.com/HeshanKavin/CV-Creator-Mobile-App",
        liveDemo: "",
    },
];

export const CONTACT = {
    address: "Kekirawa, Sri Lanka ",
    phoneNo: "0719609482 ",
    email: "heshankavinda0908@gmail.com",
};