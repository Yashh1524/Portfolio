import GitHubCalendar from 'react-github-calendar';
import meImg from "/img/me.jpg";
import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { socialLinks } from '../constants';
import { FaEnvelope } from 'react-icons/fa6';

const About = () => {
    const socialLinksRef = useRef([]);
    const gmailButtonRef = useRef(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        socialLinksRef.current = socialLinksRef.current.filter(el => el); // Remove undefined/null
    }, []);

    // Hover animation for social links
    const handleMouseEnter = (index) => {
        if (socialLinksRef.current[index]) {
            gsap.to(socialLinksRef.current[index], {
                scale: 1.15,
                opacity: 1,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.15)",
                duration: 0.2,
                ease: "power1.out",
            });
        }
    };

    const handleMouseLeave = (index) => {
        if (socialLinksRef.current[index]) {
            gsap.to(socialLinksRef.current[index], {
                scale: 1,
                opacity: 0.9,
                boxShadow: "0px 0px 0px rgba(255,255,255,0)",
                duration: 0.2,
                ease: "power3.inOut",
            });
        }
    };

    // Separate hover animation for Gmail button
    const handleGmailEnter = () => {
        if (gmailButtonRef.current) {
            gsap.to(gmailButtonRef.current, {
                scale: 1.2,
                boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.25)",
                duration: 0.2,
                ease: "power1.out",
            });
        }
    };

    const handleGmailLeave = () => {
        if (gmailButtonRef.current) {
            gsap.to(gmailButtonRef.current, {
                scale: 1,
                boxShadow: "0px 0px 0px rgba(255,255,255,0)",
                duration: 0.2,
                ease: "power3.inOut",
            });
        }
    };

    return (
        <section className="bg-[#181818] text-white px-2 md:px-10 lg:px-10 py-10 flex flex-col items-center pt-20 h-full">
            <div className="hidden lg:grid grid-cols-3 gap-5 max-w-6xl w-full">
                <div className="col-span-1 bg-[#232323] rounded-2xl flex justify-center items-center h-[50vh] transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ffffff1a]">
                    <img src={meImg} alt="Me" className='w-full h-full object-cover rounded-xl' />
                </div>

                <div className="col-span-2 space-y-5">
                    <div className="col-span-2 bg-[#323232] p-5 py-6 rounded-2xl flex flex-col h-[35vh] overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ffffff1a]">
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
                    <div className="flex justify-center gap-5 mt-8">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                ref={(el) => {
                                    socialLinksRef.current[index] = el;
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                className="bg-[#323232] py-5 px-8 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
                            >
                                {link.icon}
                            </a>
                        ))}

                        {/* Gmail Button */}
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("yashhbhut15@gmail.com");
                                setCopied(true);
                                setTimeout(() => setCopied(false), 1000);
                            }}
                            ref={gmailButtonRef}
                            onMouseEnter={handleGmailEnter}
                            onMouseLeave={handleGmailLeave}
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
                <div className="col-span-3 bg-[#232323] p-3 rounded-2xl flex flex-col items-center h-fit w-full xl:mt-5 xl:mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ffffff1a]">
                    <GitHubCalendar username="YashBhut1524" blockSize={15} fontSize={16} />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col gap-5 w-full max-w-6xl">
                <div className="bg-[#232323] rounded-2xl flex justify-center items-center h-[38vh] transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ffffff1a]">
                    <img src={meImg} alt="Me" className="w-full h-full object-contain md:object-contain rounded-xl" />
                </div>

                <div className="grid grid-cols-2 gap-3 w-full py-10">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={(el) => {
                                socialLinksRef.current[index + socialLinks.length] = el;
                            }}
                            onMouseEnter={() => handleMouseEnter(index + socialLinks.length)}
                            onMouseLeave={() => handleMouseLeave(index + socialLinks.length)}
                            className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
                        >
                            {link.icon} {link.label}
                        </a>
                    ))}
                    <button
                            onClick={() => {
                                navigator.clipboard.writeText("yashhbhut15@gmail.com");
                                setCopied(true);
                                setTimeout(() => setCopied(false), 1000);
                            }}
                            ref={gmailButtonRef}
                            onMouseEnter={handleGmailEnter}
                            onMouseLeave={handleGmailLeave}
                            className="relative bg-[#323232] py-5 px-8 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
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
