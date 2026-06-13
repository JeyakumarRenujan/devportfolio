import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;