import { useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Working from "./components/MyWorkingProcess";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div>
          <Working />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;


