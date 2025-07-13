import React, { useState } from 'react';
import { FaGithub, FaLink, FaYoutube, FaArrowLeft } from 'react-icons/fa6';
import ReactCardFlip from 'react-card-flip';

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
                className="relative flex flex-col h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[80vh] w-[300px] md:w-[350px] lg:w-[400px] bg-[#181818] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Links */}
                <div className="flex justify-end gap-4 bg-[#323232] px-3 py-2">
                    {
                        repoLink && (
                            <a href={repoLink} target='_blank' className="text-gray-300 hover:text-white transition rounded-full p-2 hover:bg-[#181818]">
                                <FaGithub size={24} />
                            </a>
                        )
                    }
                    {liveLink && (
                        <a href={liveLink} target='_blank' className="text-gray-300 hover:text-white transition rounded-full p-2 hover:bg-[#181818]">
                            <FaLink size={24} />
                        </a>
                    )}
                    {ytLink && (
                        <a href={ytLink} target='_blank' className="text-gray-300 hover:text-white transition rounded-full p-2 hover:bg-[#181818]">
                            <FaYoutube size={24} />
                        </a>
                    )}
                </div>
                <div className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[35vh]">
                    <img src={image} alt={title} className='object-cover h-full w-full transition-opacity duration-300' style={{ opacity: isHovered && video ? 0 : 1 }} />
                    {video && (
                        <video src={video} autoPlay loop muted className="absolute inset-0 object-cover h-full w-full transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }} />
                    )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg flex-grow">{description}
                        <button onClick={handleClick} className="ml-2 bg-[#323232] text-white px-2 py-1 rounded-md hover:bg-[#252525] transition text-xs sm:text-sm">
                            Read More
                        </button>
                    </p>
                </div>
                <div className="flex justify-end items-center bg-[#323232] px-4 py-3">
                    <div className="flex gap-2">
                        {techStackUsed.map((tech, index) => (
                            <div key={index} className="w-10 h-10 lg:w-12 lg:h-12 p-2 rounded-full overflow-hidden">
                                <img src={tech.img} alt={tech.name} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back of Card */}
            <div
                className="relative flex flex-col h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[80vh] w-[300px] md:w-[350px] lg:w-[400px] bg-[#202020] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 text-white p-6"
            >
                <button onClick={handleClick} className="absolute top-4 left-4 hover:bg-[#323232] p-2 rounded-full transition">
                    <FaArrowLeft size={20} />
                </button>
                <div className="flex flex-col justify-center items-center mt-10 text-center px-6">
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        {fullDescription}
                    </p>
                </div>
                <div className="absolute bottom-10 left-0 right-0 px-6">
                    <ul className="grid grid-cols-4 md:grid-cols-4 gap-3 justify-center">
                        {techStackUsed.map((item, index) => (
                            <li key={index} className="flex flex-col items-center bg-[#282828] px-3 py-2 rounded-lg shadow-md">
                                <img src={item.img} alt={item.name} className="w-7 h-7 lg:w-10 lg:h-10 object-contain" />
                                <p className="text-xs text-gray-400 mt-1 hidden lg:block ">{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ReactCardFlip>
    );
};

export default ProjectCard;
