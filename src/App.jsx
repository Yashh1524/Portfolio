import { 
  About,
} from "./page";
import { 
  Head, 
  StarsCanvas,
} from "./components";

function App() {
  return (
    <main>
      <div className="relative overflow-y-hidden">
        <StarsCanvas />
        <Head />
        <About />
      </div>
    </main>
  );
}

export default App;
