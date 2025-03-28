/* eslint-disable no-unused-vars */
import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Robot } from "../components";

const roles = [
    "Building Seamless Web Apps",
    "MERN Stack Enthusiast",
    "UI/UX Explorer"
];

const MovingCamera = () => {
    useFrame(({ clock, camera }) => {
        const t = clock.getElapsedTime() * 0.1;
        const radius = 6; // Adjusted radius for better framing

        camera.position.x = Math.sin(t) * radius;
        camera.position.z = Math.cos(t) * radius;
        camera.position.y = 2.5; // Adjusted height for proper focus
        camera.lookAt(0, 1, 0);

        camera.fov = 45; // Optimized FOV for balanced view
        camera.updateProjectionMatrix();
    });

    return null;
};

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    // Media Queries for responsiveness
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

    // Adjust scale based on screen size
    const modelScale = isMobile ? 0.8 : isTablet ? 1.5 : 1.8;

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
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Canvas className="w-full h-full">
                    <ambientLight intensity={1} />
                    <OrbitControls enableZoom={false} />
                    <MovingCamera />
                    <Suspense fallback={null}>
                        <Robot scale={modelScale} position={[0, -0.6, 0]} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
