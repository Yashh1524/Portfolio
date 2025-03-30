import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa6'

const ProjectCard = ({title, description, repoLink, liveLink, image}) => {

    return (
        <div className="relative flex flex-col w-full h-[80vh] w-[400px] sm:w-[450px] md:w-[450px] bg-[#181818] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <div className="flex justify-end gap-4 bg-[#323232] p-3">
                <a href={repoLink} className="text-gray-300 hover:text-white transition">
                    <FaGithub size={24} />
                </a>
                <a href={liveLink} className="text-gray-300 hover:text-white transition">
                    <FaLink size={24} />
                </a>
            </div>
            <div className="">
                <img 
                    src={image} 
                    alt={title}
                    className='object-cover h-full w-full p-0.5' 
                />
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg flex-grow">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
