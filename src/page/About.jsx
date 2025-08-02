import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
    AboutInfoForSmMD,
    AboutSection, 
    TechStacks,
} from "../components";

const About = () => {

    useGSAP(() => {
    const startTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top center',
        },
        ease: "power1.inOut"
    });

    startTimeline.to(".about-heading", {
        opacity: 1,
        ease: "power1.inOut"
    });

    const arrowTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#about-section",
            start: "center top",
            toggleActions: "play none none reverse",
        }
    });

    arrowTimeline.to(".scroll-arrow", { opacity: 0, duration: 0.5, ease: "power1.out" });

    const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
        },
    });

    clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
    });
});


    return (
        <>
            <div id="about" data-scroll data-scroll-speed="-0.6" className="min-h-screen w-full relative overflow-y-auto no-scrollbar pb-2">
                <div className="relative mb-8 mt-20 flex flex-col items-center gap-5">
                    <p className="about-heading opacity-0 font-hero-heading text-[1.5rem] uppercase md:text-[5rem] bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Know Who I'M
                    </p>

                    <div className="absolute bottom-[-70dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
                        <p className="text-gray-500 hidden lg:block">
                            Passionate full-stack developer skilled in MERN, Next.js, and problem-solving. Strong communicator, always seeking better solutions, and dedicated to writing clean, efficient code.
                        </p>
                    </div>
                </div>

                <div className="h-dvh" id="clip">
                    {/* AboutSection with clip mask */}
                    <div className="mask-clip-path absolute left-1/2 top-0 z-10 h-[45vh] lg:h-[45vh] w-60 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[40vw] lg:w-[30vw]">
                        <div id="about-section" className="mask-clip-path absolute left-0 top-0 size-full">
                            <AboutSection />
                        </div>
                    </div>

                    {/* Scroll Down Arrow on right side of AboutSection, visible only md and above */}
                    <div className="scroll-arrow hidden md:flex flex-col items-center absolute right-[20%] top-[20%] transform -translate-y-1/2 z-50">
                        <div className="animate-bounce text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <span className="mt-2 text-gray-400 text-sm">Scroll Down</span>
                    </div>
                </div>

                <div>
                    <AboutInfoForSmMD />
                </div>

                <div className="w-screen bg-[#181818] flex item-center justify-center">
                    <TechStacks />  
                </div>
            </div>
        </>
    );
};

export default About;
