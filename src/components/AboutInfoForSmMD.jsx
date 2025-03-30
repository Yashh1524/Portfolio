import GitHubCalendar from 'react-github-calendar';
import React from 'react';
export const AboutInfoForSmMD = () => {
    return (
        <div className='lg:hidden flex flex-col gap-5 max-w-6xl bg-[#181818] pt-5 px-10 pb-12 ]'>
                {/* About Me Section */}
                <div className='bg-[#323232] p-5 py-6 rounded-2xl flex flex-col'>
                    <h2 className="text-3xl font-bold mb-3">About Me</h2>
                    <div className='pb-2'>
                        <p className="text-gray-300">
                            Hi, I'm a passionate web developer specializing in front-end and back-end technologies.
                            I enjoy building interactive experiences and solving problems with code.
                        </p>
                        <p className="text-gray-300 mt-2">
                            Always eager to take on new challenges, I continuously strive to optimize performance and enhance user experiences.
                            With a keen interest in AI and automation, I explore ways to integrate intelligent solutions into my projects.
                        </p>
                    </div>
                </div>
        
        {/* GitHub Contribution Section */}
        <div className="bg-[#232323] pb-56 p-2 rounded-2xl flex flex-col items-center h-[30vh] sm:h-[30vh] w-full">
            <GitHubCalendar username="YashBhut1524" blockSize={15} fontSize={16} />
        </div>
    </div>
    )
}
