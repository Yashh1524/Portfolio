import GitHubCalendar from 'react-github-calendar';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import React from 'react';
export const AboutInfoForSmMD = () => {
    return (
        <div className='lg:hidden flex flex-col gap-5 max-w-6xl bg-[#181818] pt-5 px-10 pb-12 ]'>
        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-3">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition w-full justify-center">
                <FaGithub size={24} /> Github
            </a>
            <a href="https://instagram.com/yourinsta" target="_blank" rel="noopener noreferrer" className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition w-full justify-center">
                <FaInstagram size={24} /> Instagram
            </a>
            <a href="https://twitter.com/yourx" target="_blank" rel="noopener noreferrer" className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition w-full justify-center">
                <FaXTwitter size={24} /> X
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition w-full justify-center">
                <FaLinkedin size={24} /> LinkedIn
            </a>
        </div>
        
        {/* GitHub Contribution Section */}
        <div className="bg-[#232323] pb-56 p-5 rounded-2xl flex flex-col items-center h-[30vh] sm:h-[30vh] w-full">
            <GitHubCalendar username="YashBhut1524" blockSize={15} fontSize={16} />
        </div>
    </div>
    )
}
