import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
    });

    tl.to("#target-icon", {
        scale: () => gsap.utils.random(1.2, 1.8),
        rotation: () => gsap.utils.random(180, 720), 
        x: () => gsap.utils.random(0, 50),        
        y: () => gsap.utils.random(-30, 30), 
        duration: () => gsap.utils.random(1, 2),
        ease: "elastic.out(1, 0.5)",
    }).to("#target-icon", {
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        duration: () => gsap.utils.random(1, 2),
        ease: "power1.inOut",
    });
}, []);

    return (
        <section id="projects" className="mt-20">
            <div className="relative flex flex-col items-center mt-10">
                <h1 className="font-general text-[1.5rem] uppercase md:text-[4rem] py-10 select-none">
                    <span className="font-hero-heading bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Code in Action
                    </span>{" "}
                    <span id="target-icon" className="inline-block">🎯</span>
                </h1>

            </div>
            <div className="flex flex-col items-center justify-center px-3 gap-6 md:flex-wrap md:justify-center mt-20">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project?.title}
                        description={project?.description}
                        fullDescription={project?.fullDescription}
                        repoLink={project?.repoLink}
                        liveLink={project?.liveLink}
                        ytLink={project?.ytLink}
                        image={project?.image}
                        video={project?.video}
                        techStackUsed={project?.techStackUsed}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
