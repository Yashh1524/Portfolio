import { About, Contact, Projects } from "./page";
import { Head } from "./components";
import { cn } from "./lib/utils";
import { DotPattern } from "./components/magicui/dot-pattern";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function App() {
  
  gsap.registerPlugin(ScrollTrigger);

  return (
    <main>
      <div className="relative overflow-y-hidden">
        <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-black">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            )}
            width={22}
            height={20}
          />
          <Head />
        </div>
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
