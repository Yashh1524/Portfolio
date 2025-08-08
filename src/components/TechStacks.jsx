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
                ease: "power1.inOut",
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
            className="scroll-container bg-[#181818] text-white flex flex-col items-center h-full w-[83%] pb-10 my-10 lg:-mt-20 xl:-mt-30">
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-11 gap-5 mt-0 w-full">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className="bg-[#323232] p-4 rounded-2xl flex flex-col items-center justify-center h-25 transition-transform"
                    >
                        <img src={tech.img} alt={tech.name} className="w-12 h-12 object-cover rounded-lg"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStacks;
