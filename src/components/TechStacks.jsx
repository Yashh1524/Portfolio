import { techStack } from "../constants";

const TechStacks = () => {
    return (
        <div className="bg-[#181818] text-white flex flex-col items-center h-full w-[83%] pb-10">
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 gap-5 mt-5 w-full">
                {techStack.map((tech, index) => (
                    <div 
                        key={index} 
                        className="bg-[#323232] p-4 rounded-2xl flex flex-col items-center justify-center h-28 transition-transform transform hover:scale-105"
                    >
                        <img src={tech.img} alt={tech.name} className="w-15 h-15 rounded-xl" />
                        {/* <span className="mt-2 text-sm text-gray-300">{tech.name}</span> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStacks;
