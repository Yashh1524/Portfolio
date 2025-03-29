import { 
  About,
} from "./page";
import { 
  AboutInfoForSmMD,
  Head, 
  StarsCanvas 
} from "./components";

function App() {
  return (
    <main>
      <div className="relative overflow-y-hidden">
        <StarsCanvas />
        <Head />
        <About />
      </div>
        {/* <AboutInfoForSmMD /> */}
    </main>
  );
}

export default App;
