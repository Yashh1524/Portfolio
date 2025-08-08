import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import api from "@/lib/api";
import ToolSkeleton from "./ToolSkeleton";

const TechStacks = () => {
    const cardsRef = useRef([]);
    const [tools, setTools] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTools = async () => {
        try {
            setIsLoading(true);
            const response = await api.get("admin/tool/get-tools");
            setTools(response.data.tools || []);
        } catch (error) {
            console.error("Error fetching tools:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTools();
    }, []);

    useEffect(() => {
        if (!isLoading && tools.length > 0) {
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: "power2.out",
                }
            );
        }
    }, [isLoading, tools]);

    const handleMouseEnter = (index) => {
        if (cardsRef.current[index]) {
            gsap.to(cardsRef.current[index], {
                scale: 1.08,
                boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                duration: 0.25,
                ease: "power3.out",
            });
        }
    };

    const handleMouseLeave = (index) => {
        if (cardsRef.current[index]) {
            gsap.to(cardsRef.current[index], {
                scale: 1,
                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                duration: 0.25,
                ease: "power3.inOut",
            });
        }
    };

    return (
        <div className="bg-[#181818] text-white flex flex-col items-center h-full w-[83%] pb-10 my-10 lg:-mt-20 xl:-mt-30">
            <div className="
                grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                lg:grid-cols-11 lg:grid-rows-2 gap-6 w-full
            ">
                {isLoading
                    ? Array.from({ length: 12 }).map((_, i) => <ToolSkeleton key={i} />)
                    : tools.map((tool, index) => (
                        <div
                            key={tool._id || index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className="bg-[#222] p-5 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all"
                        >
                            <img
                                src={tool.image.url}
                                alt={tool.name}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-sm font-medium text-gray-300">
                                {tool.name}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TechStacks;
