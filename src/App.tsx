import { useState, useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const sections = ["contact", "about", "work"];
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            setActiveSection(id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white antialiased">
      <Header activeSection={activeSection} />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
