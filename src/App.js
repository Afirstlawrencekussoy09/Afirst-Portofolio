import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Education from "./Components/Education";

function App() {
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className={`fade ${
            visibleSections.includes(sectionsRef.current[0]) ? "show" : ""
          }`}
        >
          <Home />
        </section>
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className={`fade ${
            visibleSections.includes(sectionsRef.current[1]) ? "show" : ""
          }`}
        >
          <About />
        </section>
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className={`fade ${
            visibleSections.includes(sectionsRef.current[2]) ? "show" : ""
          }`}
        >
          <Education />
        </section>
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className={`fade ${
            visibleSections.includes(sectionsRef.current[3]) ? "show" : ""
          }`}
        >
          <Projects />
        </section>
        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className={`fade ${
            visibleSections.includes(sectionsRef.current[4]) ? "show" : ""
          }`}
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
