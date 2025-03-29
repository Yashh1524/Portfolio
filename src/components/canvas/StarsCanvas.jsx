import { OrbitControls } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import { Stars } from '../Stars'
import { Canvas, useFrame } from "@react-three/fiber";

const StarsCanvas = () => {

    const MovingCamera = () => {
        const cameraRef = useRef();

        useFrame(({ clock, camera }) => {
            const t = clock.getElapsedTime() * 0.02; // Adjust speed
            camera.position.x = Math.sin(t) * 20;
            camera.position.z = Math.cos(t) * 20;
            camera.lookAt(0, 0, 0);
        });

        return <perspectiveCamera ref={cameraRef} />;
    };

    return (
        <div
            // initial={{ opacity: 0, y: 100 }} // Start from below with opacity 0
            // animate={{ opacity: 1, y: 0 }} // Move to original position with fade-in
            // transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full -z-10"
        >
            <Canvas gl={{preserveDrawingBuffer:true}}>
                <ambientLight />
                <MovingCamera />
                <OrbitControls enableZoom={false} />
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default StarsCanvas