import React, { useState} from "react";
import Hero3 from "./components/Hero3.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects2 from "./components/Projects2.jsx";
import Contact2 from "./components/Contact2.jsx";
import Working from "./components/MyWorkingProcess.jsx";
import Loading from "./components/Loading.jsx";
//import useLenis from "./Hooks/useLenis.jsx";
import Navbar3 from "./components/Navbar3.jsx";
import Footer from "./components/Footer.jsx";
//import LocomotiveScroll from 'locomotive-scroll';
import Bharat from "./components/Bharat.jsx";

function App() {
  const [loading, setLoading] = useState(true);
 // const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      {loading ? (
        <Loading onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar3 />
          <div id="hero">
            <Hero3 />
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
          <div id="working">
            <Working />
          </div>
          <div id="projects">
            <Projects2 />
          </div>
          <div id="bharat">
              <Bharat />
          </div>
          <div id="contact">
            <Contact2 />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;


