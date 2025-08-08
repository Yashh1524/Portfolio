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
    video,
    techStackUsed,
    fullDescription,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardHeight, setCardHeight] = useState("auto");
    const cardRef = useRef(null);

    // Keep front and back the same height dynamically
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
                    className="flex flex-col lg:flex-row-reverse bg-[#0F0F1C] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 w-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Left Image/Video */}
                    <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                        <img
                            src={image}
                            alt={title}
                            className={`object-cover w-full h-full transition-opacity duration-300 ${isHovered && video ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        {video && (
                            <video
                                src={video}
                                autoPlay
                                loop
                                muted
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        )}
                    </div>

                    {/* Right Text */}
                    <div className="flex flex-col justify-between bg-[#242323] text-white p-6 md:p-10 w-full lg:w-1/2">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
                            <p className="text-gray-300 mb-6 text-sm md:text-base">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {techStackUsed.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#282828] text-gray-300 text-xs md:text-sm px-3 py-1 rounded-full"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
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
                    className="flex flex-col bg-[#242323] text-white p-6 md:p-10 rounded-2xl w-full justify-between shadow-xl relative overflow-y-auto"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            {title} - Details
                        </h2>
                        <p className="text-gray-300 mb-6 text-sm md:text-base whitespace-pre-line">
                            {fullDescription}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-6">
                        {techStackUsed.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-[#282828] p-3 rounded-2xl select-none"
                            >
                                <img
                                    src={tech.img}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain"
                                />
                                <span className="text-gray-300 text-sm hidden md:block">
                                    {tech.name}
                                </span>
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
