import React from "react";

const ProjectSkeleton = () => {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row bg-[#0F0F1C] rounded-2xl overflow-hidden shadow-xl w-full lg:h-[375px] animate-pulse">
                
                {/* Left Media Skeleton */}
                <div className="relative w-full lg:w-1/2 h-64 lg:h-auto bg-[#1a1a2e]"></div>

                {/* Right Text Skeleton */}
                <div className="flex flex-col justify-between bg-[#242323] text-white p-6 md:p-10 w-full lg:w-1/2">
                    <div>
                        {/* Title */}
                        <div className="h-6 bg-[#333333] rounded w-2/3 mb-4"></div>

                        {/* Description */}
                        <div className="space-y-2 mb-6">
                            <div className="h-4 bg-[#333333] rounded w-full"></div>
                            <div className="h-4 bg-[#333333] rounded w-5/6"></div>
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {[1, 2, 3].map((i) => (
                                <span
                                    key={i}
                                    className="bg-[#282828] rounded-full h-6 w-16"
                                ></span>
                            ))}
                        </div>

                        {/* Links Skeleton */}
                        <div className="flex gap-4 mt-4 flex-wrap">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="h-5 w-20 bg-[#333333] rounded"
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Button Skeleton */}
                    <div className="mt-6 flex justify-end">
                        <div className="h-10 w-24 bg-purple-700 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSkeleton;
