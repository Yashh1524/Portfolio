import GitHubCalendar from 'react-github-calendar';
import meImg from "/img/me.jpg";
import { socialLinks } from '../constants';
import { FaEnvelope } from 'react-icons/fa6';
import { useState } from 'react';

const About = () => {
    const [copied, setCopied] = useState(false);

    return (
        <section className="bg-[#181818] text-white px-2 md:px-10 lg:px-10 py-10 flex flex-col items-center pt-20 h-full">
            <div className="hidden lg:grid grid-cols-3 gap-5 max-w-6xl w-full">
                <div className="col-span-1 bg-[#232323] rounded-2xl flex justify-center items-center h-[50vh]">
                    <img src={meImg} alt="Me" className='w-full h-full object-cover rounded-xl' />
                </div>
                
                <div className="col-span-2 space-y-5">
                    <div className="col-span-2 bg-[#323232] p-5 py-6 rounded-2xl flex flex-col h-[35vh] overflow-hidden hover:bg-[#444444]">
                        <h2 className="text-3xl font-bold mb-3">About Me</h2>
                        <p className="text-gray-300">
                            Hi, I'm a passionate web developer specializing in front-end and back-end technologies.
                            I enjoy building interactive experiences and solving problems with code.
                        </p>
                        <p className="text-gray-300 mt-2">
                            Always eager to take on new challenges, I continuously strive to optimize performance and enhance user experiences.
                            With a keen interest in AI and automation, I explore ways to integrate intelligent solutions into my projects.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-2 mt-8">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#323232] py-5 px-8 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
                            >
                                {link.icon}
                            </a>
                        ))}

                        {/* Gmail Button with Animation Fixed */}
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("yashhbhut15@gmail.com");
                                setCopied(true);
                                setTimeout(() => setCopied(false), 1000);
                            }}
                            className="relative bg-[#323232] py-5 px-8 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
                        >
                            <FaEnvelope size={30} />
                            {copied && (
                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#6b6e6c] text-white text-xs px-2 py-1 rounded-md shadow-lg">
                                    Email Copied!
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* GitHub Contribution Section */}
                <div className="col-span-3 bg-[#232323] p-3 rounded-2xl flex flex-col items-center h-fit w-full xl:mt-5 xl:mb-4">
                    <GitHubCalendar username="YashBhut1524" blockSize={15} fontSize={16} />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col gap-5 w-full max-w-6xl">
                <div className="bg-[#232323] rounded-2xl flex justify-center items-center h-[35vh] transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ffffff1a]">
                    <img src={meImg} alt="Me" className="w-full h-full object-contain md:object-contain rounded-xl" />
                </div>

                <div className="grid grid-cols-1 gap-2 w-full py-1">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#323232] px-5 py-2 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
                        >
                            {link.icon} {link.label}
                        </a>
                    ))}

                    {/* Gmail Button with Fixed Animation */}
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText("yashhbhut15@gmail.com");
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1000);
                        }}
                        className="relative bg-[#323232] px-5 py-2 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
                    >
                        <FaEnvelope size={30} /> Gmail
                        {copied && (
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#6b6e6c] text-white text-xs px-2 py-1 rounded-md shadow-lg">
                                Email Copied!
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
