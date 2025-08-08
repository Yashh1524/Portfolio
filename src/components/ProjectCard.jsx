import React, { useState, useRef, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { FaGithub, FaYoutube } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
    title,
    description,
    repoLink,
    liveLink,
    ytLink,
    image,
    techStackUsed,
    fullDescription,
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardHeight, setCardHeight] = useState("auto");
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            setCardHeight(`${cardRef.current.offsetHeight}px`);
        }
    }, [isFlipped]);

    return (
        <div className="w-full max-w-5xl mx-auto">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* FRONT SIDE */}
                <div
                    ref={cardRef}
                    style={{ minHeight: cardHeight }}
                    className="flex flex-col lg:flex-row bg-[#0F0F1C] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 w-full lg:h-[450px]"
                >
                    {/* Left Image */}
                    <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                        <img
                            src={image}
                            alt={title}
                            className="object-cover w-full h-full transition-opacity duration-300"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col justify-between bg-[#1B1B29] text-white p-6 md:p-10 w-full lg:w-1/2">
                        <div>
                            <h2 className="text-3xl font-extrabold mb-3 tracking-wide">{title}</h2>
                            <p className="text-gray-300 mb-6 text-base leading-relaxed">
                                {description}
                            </p>

                            {/* Redesigned Tech Stack */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {techStackUsed.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-purple-900/20 border border-purple-500/30 text-purple-300 backdrop-blur-sm shadow-md hover:shadow-lg transition"
                                    >
                                        {tech.text}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 mt-4 flex-wrap">
                                {liveLink && (
                                    <a
                                        href={liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 transition flex items-center gap-1"
                                    >
                                        <FiExternalLink /> Live
                                    </a>
                                )}
                                {repoLink && (
                                    <a
                                        href={repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white transition flex items-center gap-1"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                                {ytLink && (
                                    <a
                                        href={ytLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-500 hover:text-red-400 transition flex items-center gap-1"
                                    >
                                        <FaYoutube /> Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setIsFlipped(true)}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg transition"
                            >
                                More Info
                            </button>
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div
                    style={{ minHeight: cardHeight }}
                    className="flex flex-col bg-[#1B1B29] text-white p-6 md:p-10 rounded-2xl w-full justify-between shadow-2xl relative overflow-y-auto"
                >
                    <div>
                        <h2 className="text-3xl font-extrabold mb-4 tracking-wide">
                            {title} — Details
                        </h2>
                        <p className="text-gray-300 mb-6 text-base leading-relaxed whitespace-pre-line">
                            {fullDescription}
                        </p>
                    </div>

                    {/* Redesigned Tech Stack for Back Side */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {techStackUsed.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-900/10 border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm shadow-inner"
                            >
                                {/* Uncomment if you have icons: */}
                                {/* <img src={tech.img} alt={tech.text} className="w-5 h-5" /> */}
                                {tech.text}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => setIsFlipped(false)}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg transition"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
};

export default ProjectCard;
