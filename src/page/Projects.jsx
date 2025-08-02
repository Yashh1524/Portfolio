import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
    return (
        <section id="projects" className="mt-20">
            <div className="relative flex flex-col items-center mt-10">
                <h1 className="font-general text-[1.5rem] uppercase md:text-[4rem] py-10">
                    <span className="font-hero-heading bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Code in Action
                    </span>{" "}
                    <span>🎯</span>
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
