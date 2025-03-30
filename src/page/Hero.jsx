/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { RobotCanvas } from "../components";
import { roles } from "../constants";

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const textRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(nameRef.current, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 2, ease: "power3.out" });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(textRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                onComplete: () => {
                    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                    gsap.fromTo(
                        textRef.current,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5 }
                    );
                }
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center pb-20">
            {/* Hero Text */}
            <div className="w-full text-center z-40">
                <p
                    ref={nameRef}
                    className="sm:text-5xl text-xl font-extrabold font-hero-heading bg-gradient-to-r from-[#004556] via-[#0887aa] to-[#97E2C8] bg-clip-text text-transparent sm:text-white"
                >
                    Hi, I am Yash Bhut <span className="waving-hand">👋</span>
                </p>

                <p
                    ref={textRef}
                    className="text-center xl:text-4xl md:text-3xl sm:text-3xl text-2xl font-generalsans font-black bg-gradient-to-r from-[#97E2C8] via-[#d038d5] to-[#004556] bg-clip-text text-transparent"
                >
                    {roles[roleIndex]}
                </p>
            </div>
            <RobotCanvas />
        </section>
    );
};

export default Hero;