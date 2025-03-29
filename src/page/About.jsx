import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { 
    AboutInfoForSmMD,
    AboutSection, 
    RocketCanvas
} from "../components";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
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
            <div id="about" className="min-h-screen w-full relative overflow-y-auto no-scrollbar">
                <div className="relative mb-8 mt-20 flex flex-col items-center gap-5">
                    <p className="font-general text-sm uppercase md:text-[5rem] text-white">
                        Know Who I'M
                    </p>

                    <div className="absolute bottom-[-70dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
                        <p className="text-gray-500 hidden lg:block">
                            Passionate full-stack developer skilled in MERN, Next.js, and problem-solving. Strong communicator, always seeking better solutions, and dedicated to writing clean, efficient code.
                        </p>
                    </div>
                </div>

                <div className="h-dvh" id="clip">
                    <div className="mask-clip-path absolute left-1/2 top-0 z-10 h-[60vh] lg:h-[45vh] w-60 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[40vw] lg:w-[30vw]">
                        <div className="mask-clip-path absolute left-0 top-0 size-full">
                            <AboutSection />
                        </div>
                    </div>
                    <RocketCanvas />
                </div>
            </div>
            <div className="text-white">
                <AboutInfoForSmMD />
            </div>
        </>
    );
};

export default About;