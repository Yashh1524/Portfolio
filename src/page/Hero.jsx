/* eslint-disable no-unused-vars */
import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { RobotCanvas } from "../components";

const roles = [
    "Building Seamless Web Apps",
    "MERN Stack Enthusiast",
    "UI/UX Explorer"
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center pb-20">
                {/* Hero Text */}
                <div className="w-full text-center z-40">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="sm:text-5xl text-xl font-extrabold font-hero-heading bg-gradient-to-r from-[#004556] via-[#0887aa] to-[#97E2C8] bg-clip-text text-transparent sm:text-white"
                    >
                        Hi, I am Yash Bhut <span className="waving-hand">👋</span>
                    </motion.p>

                    <motion.p
                        key={roleIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center xl:text-4xl md:text-3xl sm:text-3xl text-2xl font-generalsans font-black bg-gradient-to-r from-[#97E2C8] via-[#d038d5] to-[#004556] bg-clip-text text-transparent"
                    >
                        {roles[roleIndex]}
                    </motion.p>
                </div>

                {/* 3D Model */}
                {/* <div className="absolute w-full h-full flex justify-center items-center">
                    <Canvas className="w-full h-full">
                        <ambientLight intensity={1} />
                        <OrbitControls enableZoom={false} />
                        <MovingCamera />
                        <Suspense fallback={null}>
                            <Robot scale={modelScale} position={[0, -0.5, 0]} />
                        </Suspense>
                    </Canvas>
                </div> */}
                <RobotCanvas />
            </section>
    );
};

export default Hero;
