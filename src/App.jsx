import { useState, useEffect } from "react";
import { About, Contact, Projects } from "./page";
import { Head, Loader, StarsCanvas } from "./components";
import { useProgress } from "@react-three/drei";

function App() {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <main>
      {loading ? (
        <Loader progress={progress} /> // Pass progress to show %
      ) : (
        <div className="relative overflow-y-hidden">
          <StarsCanvas />
          <Head />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </main>
  );
}

export default App;
