import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Robot } from "..";

const MovingCamera = () => {
    useFrame(({ clock, camera }) => {
        const t = clock.getElapsedTime() * 0.5;
        const radius = 7; // Adjusted radius for better framing

        camera.position.x = Math.sin(t) * radius;
        camera.position.z = Math.cos(t) * radius;
        camera.position.y = 2.5; // Adjusted height for proper focus
        camera.lookAt(0, 1, 0);

        camera.fov = 45; // Optimized FOV for balanced view
        camera.updateProjectionMatrix();
    });

    return null;
};

const RobotCanvas = () => {

    // Media Queries for responsiveness
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

    // Adjust scale based on screen size
    const modelScale = isMobile ? 0.8 : isTablet ? 1.5 : 1.8;

    return (
        <div className="absolute w-full h-full flex justify-center items-center">
            <Canvas className="w-full h-full" gl={{preserveDrawingBuffer:true}}>
                <ambientLight intensity={1} />
                <OrbitControls enableZoom={false} />
                <MovingCamera />
                <Suspense fallback={null}>
                    <Robot scale={modelScale} position={[0, -0.5, 0]} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default RobotCanvas