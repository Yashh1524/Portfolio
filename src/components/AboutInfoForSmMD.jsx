import React from 'react'

export const AboutInfoForSmMD = () => {
    return (
        <div className='lg:hidden flex flex-col gap-5 w-full max-w-6xl'>
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
        <div className="bg-[#232323] p-5 rounded-2xl flex flex-col items-center h-[30vh] w-full">
            <h1 className="text-2xl font-bold text-white pb-5">
                Days I <strong className="text-purple-400">Code</strong>
            </h1>
            <GitHubCalendar username="YashBhut1524" blockSize={15} fontSize={16} />
        </div>
    </div>
    )
}
