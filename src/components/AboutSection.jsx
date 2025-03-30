import GitHubCalendar from 'react-github-calendar';
import meImg from "/img/me.jpg"
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { socialLinks } from '../constants';

const About = () => {

    const socialLinksRef = useRef([]);

    useEffect(() => {
        socialLinksRef.current.forEach((el) => {
            gsap.fromTo(el, 
                { scale: 1, opacity: 0.8 }, 
                { scale: 1.05, opacity: 1, duration: 1, ease: "power3.out", paused: true }
            );
        });
    }, []);

    const handleMouseEnter = (index) => {
        gsap.to(socialLinksRef.current[index], { scale: 1.1, boxShadow: "0px 0px 15px rgba(255,255,255,0.1)", duration: 0.01, ease: "power3.out"});
    };

    const handleMouseLeave = (index) => {
        gsap.to(socialLinksRef.current[index], { scale: 1, boxShadow: "none", duration: 0.01, ease: "power3.inOut" });
    };


    return (
        <div className="bg-[#181818] text-white p-10 flex flex-col items-center pt-20 h-full">
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
                    <div className="flex justify-center gap-5 mt-8">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                ref={el => socialLinksRef.current[index] = el}
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

            {/* Layout for md and sm */}
            <div className='lg:hidden flex flex-col gap-5 w-full max-w-6xl'>
                {/* Avatar Section */}
                <div className="bg-[#232323] rounded-2xl flex justify-center items-center h-[38vh]">
                    <img
                        src={meImg}
                        alt=""
                        className='w-full h-full object-cover md:object-contain rounded-xl'
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            ref={el => socialLinksRef.current[index] = el}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className="bg-[#323232] p-5 rounded-xl flex items-center gap-3 text-white text-lg hover:bg-[#444444] transition"
                        >
                            {link.icon} {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
