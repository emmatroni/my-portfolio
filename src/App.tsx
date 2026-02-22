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
    const sectionIds = ["contact", "about", "work"];

    const handleScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
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
      <Header />
      <Hero />
      {/* Footer sits here in the flow — after Hero, before content.
          sticky top-0 makes it stick to the top once scrolled past. */}
      <Footer activeSection={activeSection} />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
