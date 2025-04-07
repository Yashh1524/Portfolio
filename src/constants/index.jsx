import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaEnvelope, FaYoutube  } from "react-icons/fa6";

export const roles = [
    "Building Seamless Web Apps",
    "MERN Stack Enthusiast",
    "UI/UX Explorer",
    "Performance Optimization Geek",
    "AI & Automation Enthusiast",
    "Problem Solver with Code",
    "Full-Stack Innovator",
    "Crafting Interactive Experiences",
    "Tech Explorer & Innovator",
    "Turning Ideas into Scalable Solutions"
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
        icon: <FaGithub size={30} />,
        label: "Github"
    },
    {
        href: "https://www.instagram.com/dev.yashh1524/",
        icon: <FaInstagram size={30} />,
        label: "Instagram"
    },
    {
        href: "https://x.com/YaShh1524",
        icon: <FaXTwitter size={30} />,
        label: "X"
    },
    {
        href: "https://www.linkedin.com/in/yashbhut1524/",
        icon: <FaLinkedin size={30} />,
        label: "LinkedIn"
    },
    {
        href: "https://youtube.com/@yashh_1524?si=PzWdorlUq0Mlq5TY",
        icon: <FaYoutube size={30} />,
        label: "Youtube"
    },
];

export const techStack = [
    // Programming Languages
    { name: "JavaScript", img: "/img/tech/js.svg" },
    { name: "TypeScript", img: "/img/tech/ts.svg" },
    { name: "Python", img: "/img/tech/py.svg" },
    // Frontend Technologies
    { name: "React", img: "/img/tech/react.svg" },
    { name: "Next.js", img: "/img/tech/nextjs.svg" },
    { name: "Tailwind CSS", img: "/img/tech/tailwindcss.svg" },
    // Backend Technologies
    { name: "Node.js", img: "/img/tech/nodejs.svg" },
    { name: "Express.js", img: "/img/tech/expressjs.png" },
    // Databases
    { name: "Prisma", img: "/img/tech/prisma.svg" },
    { name: "MongoDB", img: "/img/tech/mongodb.svg" },
    { name: "SQL", img: "/img/tech/sql.svg" },
    { name: "Firebase", img: "/img/tech/firebase.svg" },
    { name: "Postgresql", img: "/img/tech/postgresql.svg" },
    // Other Tools
    { name: "Git", img: "/img/tech/git.svg" },
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
                img: "/img/tech/mongodb.svg"
            },
            {
                name: "Expressjs",
                img: "/img/tech/expressjs.png"
            },
            {
                name: "React",
                img: "/img/tech/react.svg"
            },
            {
                name: "Nodejs",
                img: "/img/tech/nodejs.svg"
            },
            {
                name: "Stripe",
                img: "/img/tech/stripe.svg"
            },
            {
                name: "Razorpay",
                img: "/img/tech/razorpay.png"
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
                img: "/img/tech/firebase.svg"
            },
            {
                name: "React",
                img: "/img/tech/react.svg"
            },
            {
                name: "Nodejs",
                img: "/img/tech/nodejs.svg"
            },
            {
                name: "Gemini",
                img: "/img/tech/gemini.svg"
            },
            {
                name: "Oauth",
                img: "/img/tech/oauth.svg"
            },
        ]
    },
    {
        title: "OCR TOOL",
        description: "An OCR tool built with Python and pytesseract that extracts text from images via a custom snipping tool or image upload.",
        fullDescription: "This OCR (Optical Character Recognition) tool, built with Python and pytesseract, allows users to extract text from images efficiently. It offers two methods for text extraction: a custom snipping tool that lets users capture a specific area of the screen and an option to upload an image from their device. With a simple and user-friendly approach, this tool makes text recognition from images quick and convenient.",
        repoLink: "https://github.com/YashBhut1524/OCR-Tool-App-using-PyTesseract",
        liveLink: "",
        ytLink: "https://www.youtube.com/watch?v=uTJTmOiS8ws",
        image: "/img/projectImg/ocr.png",
        video: "/video/ocr.mp4",
        techStackUsed: [
            {
                name: "Python",
                img: "/img/tech/py.svg"
            },
            {
                name: "Tesseract",
                img: "/img/tech/ocr.png"
            },
        ]
    },
    {
        title: "Pitch Here",
        description: "A Next.js 15 app featuring Partial Prerendering, Parallel Fetching, GitHub OAuth, Sanity CMS, and Cloudinary for media management.",
        fullDescription: "PitchHere is a modern web application built with Next.js 15, utilizing advanced features like Partial Prerendering (PPR) and Parallel Fetching to enhance performance. It includes GitHub OAuth authentication for seamless login, Sanity CMS for dynamic content management, and Cloudinary for efficient media handling, making it a powerful platform for content-driven applications.",
        repoLink: "https://github.com/YashBhut1524/PitchHere",
        liveLink: "https://pitch-here.vercel.app/",
        ytLink: "",
        image: "/img/projectImg/pitchHere.png",
        video: "",
        techStackUsed: [
            {
                name: "Nextjs",
                img: "/img/tech/nextjs.svg"
            },
            {
                name: "React",
                img: "/img/tech/react.svg"
            },
            {
                name: "Sanity",
                img: "/img/tech/sanity.svg"
            },
            {
                name: "Oauth",
                img: "/img/tech/oauth.svg"
            },
        ]
    },
    {
        title: "Notes App",
        description: "A React and TypeScript-based Notes app that allows users to create, tag, and search notes locally for fast access.",  
        fullDescription: "This lightweight Notes app, built with React and TypeScript, enables users to create and manage notes with multiple tags. Featuring a robust search function, it allows quick retrieval by title or tags while storing all data locally for seamless and offline use.",
        repoLink: "https://github.com/YashBhut1524/Advance-Notes-TypeScript-React",
        liveLink: "https://advance-note-app-typescript-react.netlify.app/",
        ytLink: "",
        image: "/img/projectImg/note.png",
        video: "",
        techStackUsed: [
            {
                name: "TypeScript",
                img: "/img/tech/ts.svg"
            },
            {
                name: "React",
                img: "/img/tech/react.svg"
            },
        ]
    },
]