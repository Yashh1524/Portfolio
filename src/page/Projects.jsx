import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ProjectsScroller } from "../components";
import { FaGithub, FaLink } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Projects() {

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }


    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 3, ease: "power2.out" });
    }, []);

    return (
        <section id="projects">
            <div className="relative flex flex-col items-center space-x-10 pr-10 mt-10">
                <h1
                    className="font-general text-sm uppercase md:text-[4rem] text-white py-10"
                    ref={textRef}
                >
                    Code in Action 🎯
                </h1>
            </div>
            <ProjectsScroller />
        </section>
    );
}

export default Projects;
