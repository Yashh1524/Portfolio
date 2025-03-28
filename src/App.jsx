import { 
  About,
  Hero,
  Navbar, 
} from "./page";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button, Stars } from "./components";
import { Suspense, useRef } from "react";
import { motion } from "framer-motion";

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

function App() {
  return (
    <main>
      <div className="relative overflow-y-hidden">
        {/* Background Animated Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start from below with opacity 0
          animate={{ opacity: 1, y: 0 }} // Move to original position with fade-in
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        >
          <Canvas>
            <ambientLight />
            <MovingCamera />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <Stars />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative max-w-7xl mx-auto">
          <Navbar />
          <Hero />
          <div className="absolute bottom-7 left-0 right-0 w-full flex justify-center items-center">
            <a href="#about" className="w-fit">
              <Button name="Let's work together" isBeam containerClass="sm:w-fit sm:min-w-50 bg-[#2c2c2c] text-white rounded-md px-10" />
            </a>
          </div>
        </div>
      </div>
        <About />
    </main>
  );
}

export default App;
