import {
  About,
  Contact,
  Projects,
} from "./page";
import {
  AboutSection,
  Head,
  ProjectsScroller,
  StarsCanvas,
} from "./components";

function App() {

  return (
    <main>
      <div className="relative overflow-y-hidden">
        <StarsCanvas />
        <Head />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
