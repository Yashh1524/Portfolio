import GitHubCalendar from 'react-github-calendar';
import meImg from "/img/me.jpg"
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { socialLinks } from '../constants';

const About = () => {
    const socialLinksRef = useRef([]);

    useEffect(() => {
        socialLinksRef.current = socialLinksRef.current.filter(el => el); // Remove undefined/null

        // Ensure refs are set correctly
        setTimeout(() => {
            socialLinksRef.current.forEach((el) => {
                gsap.set(el, { scale: 1, opacity: 0.8 });
            });
        }, 50);  // Small delay to allow DOM update
    }, []);

    const handleMouseEnter = (index) => {
        if (socialLinksRef.current[index]) {
            gsap.to(socialLinksRef.current[index], {
                scale: 1.15,
                opacity: 1,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.15)",
                duration: 0.01,
                ease: "power3.out",
            });
        }
    };

    const handleMouseLeave = (index) => {
        if (socialLinksRef.current[index]) {
            gsap.to(socialLinksRef.current[index], {
                scale: 1,
                opacity: 0.9,
                boxShadow: "0px 0px 0px rgba(255,255,255,0)",
                duration: 0.01,
                ease: "power3.inOut",
            });
        }
    };

    return (
        <section className="bg-[#181818] text-white p-10 flex flex-col items-center pt-20 h-full">
            {/* Bento Grid Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-5 max-w-6xl w-full">
                {/* Avatar Section */}
                <div className="col-span-1 bg-[#232323] rounded-2xl flex justify-center items-center h-[50vh]">
                    <img
                        src={meImg}
                        alt="Me"
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

                    {/* Social Links */}
                    <div className="flex justify-center gap-5 mt-8">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                ref={(el) => { 
                                    socialLinksRef.current[index] = el;  // Ensure refs are set properly
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
                            >
                                {link.icon} {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* GitHub Contribution Section */}
                <div className="col-span-3 bg-[#232323] p-5 rounded-2xl flex flex-col items-center h-fit w-full xl:mt-5 xl:mb-4">
                    <GitHubCalendar username="YashBhut1524" blockSize={15} fontSize={16} />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className='lg:hidden flex flex-col gap-5 w-full max-w-6xl'>
                {/* Avatar Section */}
                <div className="bg-[#232323] rounded-2xl flex justify-center items-center h-[38vh]">
                    <img
                        src={meImg}
                        alt="Me"
                        className='w-full h-full object-contain md:object-contain rounded-xl'
                    />
                </div>
                
                {/* Social Links */}
                <div className="grid grid-cols-1 gap-3 w-full">
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
                </div>
            </div>
        </section>
    );
};

export default About;
