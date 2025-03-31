import React, { useState } from 'react';
import { FaGithub, FaLink, FaYoutube } from 'react-icons/fa6';
import ReactCardFlip from 'react-card-flip';
import { FaArrowLeft } from "react-icons/fa6";

const ProjectCard = ({ title, description, repoLink, liveLink, ytLink, image, video, techStackUsed, fullDescription }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            {/* Front of Card */}
            <div
                className="relative flex flex-col h-[80vh] w-[320px] sm:w-[320px] md:w-[450px] bg-[#181818] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex justify-end gap-4 bg-[#323232] px-3 py-2">
                    <a href={repoLink} className="text-gray-300 hover:text-white transition rounded-full p-2 hover:bg-[#181818]">
                        <FaGithub size={24} />
                    </a>
                    {liveLink && (
                        <a href={liveLink} className="text-gray-300 hover:text-white transition rounded-full p-2 hover:bg-[#181818]">
                            <FaLink size={24} />
                        </a>
                    )}
                    {ytLink && (
                        <a href={ytLink} className="text-gray-300 hover:text-white transition rounded-full p-2 hover:bg-[#181818]">
                            <FaYoutube size={24} />
                        </a>
                    )}
                </div>
                <div className="relative h-[35vh]">
                    <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: isHovered ? 0 : 1 }}>
                        <img
                            src={image}
                            alt={title}
                            className='object-cover h-full w-full'
                        />
                    </div>
                    <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }}>
                        <video
                            src={video}
                            autoPlay
                            controls
                            loop
                            muted
                            className="object-cover h-full w-full p-2"
                        />
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
                    <div>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg flex-grow">{description}
                            <span> </span>
                            <span className='text-xs'>
                                <button
                                    onClick={handleClick}
                                    className="bg-[#323232] text-white px-2 py-1 rounded-md hover:bg-[#252525] transition"
                                >
                                    Read More
                                </button>
                            </span>
                        </p>

                    </div>
                </div>
                <div className="flex justify-end items-center bg-[#323232] px-4 py-3">
                    <div className="flex gap-2">
                        {techStackUsed.map((tech, index) => (
                            <div key={index} className="w-12 h-12 hover:bg-[#181818] p-2 rounded-full overflow-hidden">
                                <img src={tech.img} alt={tech.name} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Back of Card */}
            <div
                className="relative flex flex-col h-[80vh] w-[320px] sm:w-[320px] md:w-[450px] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 bg-[#202020] text-white p-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <button onClick={handleClick} className="absolute top-4 left-4 rounded-full text-white p-2 hover:bg-[#323232] transition"><FaArrowLeft /></button>
                <div className='flex flex-col justify-center items-center h-full text-center px-4'>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg">{fullDescription}</p>
                </div>
            </div>
        </ReactCardFlip>
    );
};

export default ProjectCard;