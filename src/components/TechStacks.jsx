import { useEffect, useRef } from "react";
import { techStack } from "../constants";
import gsap from "gsap";

const TechStacks = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.01,
                stagger: 0.1,
                ease: "power1.in",
            }
        );
    }, []);

    const handleMouseEnter = (index) => {
        if (cardsRef.current[index]) {
            gsap.to(cardsRef.current[index], {
                scale: 1.15,
                boxShadow: "0px 0px 5px rgba(255,255,255,0.15)",
                duration: 0.01,
                ease: "power3.out",
            });
        }
    };

    const handleMouseLeave = (index) => {
        if (cardsRef.current[index]) {
            gsap.to(cardsRef.current[index], {
                scale: 1,
                boxShadow: "0px 0px 0px rgba(255,255,255,0)",
                duration: 0.01,
                ease: "power3.inOut",
            });
        }
    };

    return (
        <div 
            className="scroll-container bg-[#181818] text-white flex flex-col items-center h-full w-[83%] pb-10">
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 gap-5 mt-5 w-full">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className="bg-[#323232] p-4 rounded-2xl flex flex-col items-center justify-center h-28 transition-transform"
                    >
                        <img src={tech.img} alt={tech.name} className="w-15 h-15 rounded-xl" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStacks;
