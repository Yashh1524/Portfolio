import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const roles = [
    "Building Seamless Web Apps",
    "MERN Stack Enthusiast",
    "UI/UX Explorer"
];

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const socialLinks = [
    {
        href: "https://github.com/YashBhut1524",
        icon: <FaGithub size={24} />,
        label: "Github"
    },
    {

        href: "https://www.instagram.com/yashh_1524/",
        icon: <FaInstagram size={24} />,
        label: "Instagram"
    },
    {
        href: "https://x.com/YaShh1524",
        icon: <FaXTwitter size={24} />,
        label: "X"
    },
    {
        href: "https://www.linkedin.com/in/yashbhut1524/",
        icon: <FaLinkedin size={24} />,
        label: "LinkedIn"
    }
]

export const techStack = [
    // Programming Languages
    { name: "JavaScript", img: "/img/js.svg" },
    { name: "TypeScript", img: "/img/ts.svg" },
    { name: "Java", img: "/img/java.svg" },
    { name: "C", img: "/img/c.svg" },
    { name: "Python", img: "/img/py.svg" },
    // Frontend Technologies
    { name: "React", img: "/img/react.svg" },
    { name: "Next.js", img: "/img/nextjs.svg" },
    { name: "Tailwind CSS", img: "/img/tailwindcss.svg" },
    // Backend Technologies
    { name: "Node.js", img: "/img/nodejs.svg" },
    { name: "Express.js", img: "/img/expressjs.svg" },
    // Databases
    { name: "MongoDB", img: "/img/mongodb.svg" },
    { name: "SQL", img: "/img/sql.svg" },
    { name: "Firebase", img: "/img/firebase.svg" },
    // Other Tools
    { name: "Git", img: "/img/git.svg" },
];

export const projects = [
    {
        title: "BlinkIt-Clone",
        description: "A BlinkIt clone built with the MERN stack, featuring online grocery browsing, cart management, and secure checkout with integrated payment gateways.",
        fullDescription: "This is a BlinkIt clone built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is an online grocery ordering and delivery application that allows users to browse products, add them to the cart, and complete purchases using integrated payment gateways.",
        repoLink: "https://github.com/YashBhut1524/BlnkIt-clone",
        liveLink: "https://blnkit-clone.vercel.app/",
        ytLink: "https://www.youtube.com/watch?v=uZkDM8ZYMFY",
        image: "/img/projectImg/blinkitClone.png",
        video: "/video/blinkitClone.mp4",
        techStackUsed: [
            {
                name: "MongoDB",
                img: "/img/mongodb.svg"
            },
            {
                name: "Expressjs",
                img: "/img/expressjs.svg"
            },
            {
                name: "React",
                img: "/img/react.svg"
            },
            {
                name: "Nodejs",
                img: "/img/nodejs.svg"
            },
        ]
    },
    {
        title: "AI Trip Planner",
        description: "AI Trip Planner is a React and Firebase-based app using Gemini AI to create personalized trip plans, suggest hotels, and generate day-wise itineraries.",
        fullDescription: "AI Trip Planner is a smart travel planning app built with React, Firebase, and Gemini AI. It helps users create personalized trip plans based on their budget and travel companions. The app provides hotel recommendations and generates a day-wise itinerary, ensuring a seamless and well-organized travel experience.",
        repoLink: "https://github.com/YashBhut1524/AI-TripPlanner",
        liveLink: "https://ai-trip-planner-virid.vercel.app/",
        ytLink: "",
        image: "/img/projectImg/aiTrip.png",
        video: "",
        techStackUsed: [
            {
                name: "FireBase",
                img: "/img/firebase.svg"
            },
            {
                name: "React",
                img: "/img/react.svg"
            },
            {
                name: "Nodejs",
                img: "/img/nodejs.svg"
            },
            {
                name: "Gemini",
                img: "/img/gemini.svg"
            },
        ]
    },
]