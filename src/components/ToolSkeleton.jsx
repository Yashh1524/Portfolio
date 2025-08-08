const ToolSkeleton = () => {
    return (
        <div className="bg-[#2a2a2a]/50 border border-purple-500/10 backdrop-blur-md p-5 rounded-xl flex flex-col items-center justify-center gap-3 animate-pulse">
            <div className="w-14 h-14 bg-gray-700 rounded-lg"></div>
            <div className="w-16 h-3 bg-gray-700 rounded"></div>
        </div>
    );
};

export default ToolSkeleton;
