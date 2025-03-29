import GitHubCalendar from 'react-github-calendar';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import meImg from "/img/me.jpg"

const About = () => {
    return (
        <div className="bg-[#181818] text-white p-10 flex flex-col items-center pt-20">
            {/* Bento Grid Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-5 max-w-6xl w-full">
                {/* Avatar Section */}
                <div className="col-span-1 bg-[#232323] rounded-2xl flex justify-center items-center h-[50vh]">
                    <img
                        src={meImg}
                        alt=""
                        className='w-full h-full object-cover rounded-xl'
                    />
                </div>

                {/* About Me Section */}
                <div className='col-span-2 space-y-5'>
                    <div className="col-span-2 bg-[#323232] p-5 py-6 rounded-2xl flex flex-col h-[35vh] overflow-hidden">
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
                    <div className="flex justify-center gap-5">
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition">
                            <FaGithub size={24} /> Github
                        </a>
                        <a href="https://instagram.com/yourinsta" target="_blank" rel="noopener noreferrer" className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition">
                            <FaInstagram size={24} /> Instagram
                        </a>
                        <a href="https://twitter.com/yourx" target="_blank" rel="noopener noreferrer" className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition">
                            <FaXTwitter size={24} /> X
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition">
                            <FaLinkedin size={24} /> LinkedIn
                        </a>
                    </div>
                </div>
                {/* GitHub Contribution Section */}
                <div className="col-span-3 bg-[#232323] p-5 rounded-2xl flex flex-col items-center h-[30vh] w-full">
                    <GitHubCalendar username="YashBhut1524" blockSize={15} fontSize={16} />
                </div>
            </div>

            {/* Layout for md and sm */}
            <div className='lg:hidden flex flex-col gap-5 w-full max-w-6xl'>
                {/* Avatar Section */}
                <div className="bg-[#232323] rounded-2xl flex justify-center items-center h-[50vh]">
                    <img
                        src={meImg}
                        alt=""
                        className='w-full h-full object-contain rounded-xl'
                    />
                </div>
                
                {/* About Me Section */}
                <div className='bg-[#323232] p-5 py-6 rounded-2xl flex flex-col overflow-hidden'>
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
            </div>
        </div>
    );
};

export default About;
