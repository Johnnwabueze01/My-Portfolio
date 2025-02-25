import Navbar from "./components/Navbar";
import HeroSection from "./Pages/HeroSection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Footer from "./Pages/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;