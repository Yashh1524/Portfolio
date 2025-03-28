import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import MyCustomComponent from "../components/MyCustomComponent";

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

        clipAnimation.to(".custom-component", {
            width: "100vw",
            height: "100vh",
        }, "<"); // Runs in sync with mask-clip-path
    });

    return (
        <div id="about" className="min-h-screen w-full">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[5rem] text-white">
                    About
                </p>

                <div className="absolute bottom-[-90dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]s">
                    <p className="text-gray-500 hidden lg:block">
                    Passionate full-stack developer skilled in MERN, Next.js, and problem-solving. Strong communicator, always seeking better solutions, and dedicated to writing clean, efficient code.
                    </p>
                </div>
            </div>

            <div className="h-dvh" id="clip">
                <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
                    {/* <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    /> */}
                    <div className="custom-component absolute left-0 top-0 size-full">
                        <MyCustomComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
