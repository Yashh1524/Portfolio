import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ProjectsScroller } from "../components";

gsap.registerPlugin(ScrollTrigger);

function Projects() {

    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 3, ease: "power2.out" });
    }, []);

    return (
        <section id="projects">
            <div className="relative flex flex-col items-center space-x-10 pr-10 mt-10">
                <h1
                    className="font-general text-[1.5rem] uppercase md:text-[4rem] py-10 "
                    ref={textRef}
                >
                    <span className="font-hero-heading bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Code in Action </span><span>🎯</span>
                </h1>
            </div>
            <ProjectsScroller />
        </section>
    );
}

export default Projects;
