import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Rocket } from "../Rocket";
import gsap from "gsap";

const RocketCanvas = () => {
    const [position, setPosition] = useState([0, 0, 0]); // Initial position
    const [isMoving, setIsMoving] = useState(true);

    // Function to move the rocket randomly every few seconds
    const moveRandomly = () => {
        if (isMoving) {
            const randomX = (Math.random() - 0.5) * 2; // Random between -1 and 1
            const randomY = (Math.random() - 0.5) * 2;

            gsap.to(position, {
                0: randomX,
                1: randomY,
                duration: 2,
                ease: "power1.inOut",
                onUpdate: () => {
                    setPosition([...position]); // Ensure React updates state
                },
                onComplete: () => {
                    setTimeout(moveRandomly, 2000); // Repeat after 2 seconds
                },
            });
        }
    };

    // Start movement when component mounts
    useEffect(() => {
        const timeout = setTimeout(moveRandomly, 2000);
        return () => clearTimeout(timeout);
    }, [isMoving]); // Depend on isMoving state

    return (
        <div className="absolute right-0 w-[90vw] h-[60vh] -z-10 flex">
            <div className="w-full lg:w-2/3 ">
                
            </div>
            <div className="w-full lg:w-1/3 h-full">
                <Canvas>
                    <ambientLight />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false} // Disable manual panning
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Suspense fallback={null}>
                        <group position={position}>
                            <Rocket scale={0.5} />
                        </group>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

export default RocketCanvas;
