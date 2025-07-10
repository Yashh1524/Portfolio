import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaEnvelope, FaYoutube } from "react-icons/fa6";

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
        title: "GiveWithTrust",
        description: "A proof-based donation platform where NGOs receive funds only after verified work submission, with donor-controlled fund redirection.",
        fullDescription: "GiveWithTrust is a transparent donation platform where NGOs get funds only after submitting monthly proof of work. If they miss deadlines, donors can vote to redirect the funds to more accountable NGOs. Built with modern tech like Next.js, Prisma, and Gemini AI, it promotes trust and measurable impact.",
        repoLink: "https://github.com/YashBhut1524/Give-With-Trust",
        liveLink: "https://give-with-trust.vercel.app/",
        ytLink: "https://www.youtube.com/watch?v=o9hRJNVbHgs",
        image: "/img/projectImg/give-with-trust.png",
        techStackUsed: [
            {
                name: "Next.js",
                img: "/img/tech/nextjs.svg"
            },
            {
                name: "TypeScript",
                img: "/img/tech/ts.svg"
            },
            {
                name: "Prisma",
                img: "/img/tech/prisma.svg"
            },
            {
                name: "PostgreSQL (Neon)",
                img: "/img/tech/postgresql.svg"
            },
            {
                name: "Clerk",
                img: "/img/tech/clerk.svg"
            },
            {
                name: "Razorpay",
                img: "/img/tech/razorpay.png"
            },
            {
                name: "Gemini AI",
                img: "/img/tech/gemini.svg"
            }
        ]
    },
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
        title: "GamBles",
        description: "A secure online casino platform inspired by Stake, featuring real-time games with full-stack MERN architecture and anti-cheat mechanisms.",
        fullDescription: "GamBles is a Stake-inspired online casino platform developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes robust anti-cheat logic to ensure fair gameplay and game integrity. The platform currently supports two games with plans for expansion. Emphasis was placed on real-time responsiveness, a smooth user interface, and covering edge cases for seamless gameplay.",
        repoLink: "https://github.com/YashBhut1524/Gambles",
        liveLink: "https://gambles-gilt.vercel.app/",
        ytLink: "https://www.youtube.com/watch?v=KF0jBhC7FsM&feature=youtu.beuZkDM8ZYMFY",
        image: "/img/projectImg/gambles.jpg",
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
                name: "TailwindCSS",
                img: "/img/tech/tailwindcss.svg"
            }
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