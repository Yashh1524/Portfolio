const Loader = ({ progress }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <p>Loading {Math.round(progress)}%</p>
        </div>
    );
};

export default Loader;
