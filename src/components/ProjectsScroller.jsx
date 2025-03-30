import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

function ProjectsScroller() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            let sectionWidth = sectionRef.current.scrollWidth; // Get total scroll width of the container
            let viewportWidth = window.innerWidth; // Get the viewport width

            gsap.fromTo(
                sectionRef.current,
                { x: 0 },
                {
                    x: `-${sectionWidth - viewportWidth}px`, // Ensure it scrolls only as needed
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: `+=${sectionWidth - viewportWidth}`, // Match scrolling distance to content
                        scrub: 1.2,
                        pin: true,
                        anticipatePin: 1, // Helps prevent jumps
                    },
                }
            );
        }, triggerRef);

        return () => ctx.revert(); // Cleanup GSAP when component unmounts
    }, []);

    return (
        <div ref={triggerRef} className="overflow-hidden">
            <div ref={sectionRef} className="relative flex w-fit h-screen items-center space-x-10 pr-10 ml-10 mr-30">
                {
                    projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            title={project?.title}
                            description={project?.description}
                            repoLink={project?.repoLink} 
                            liveLink={project?.liveLink}
                            image={project?.image}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectsScroller;
