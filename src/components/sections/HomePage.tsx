import { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "./Hero";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

interface HomePageProps {
  onProjectClick: (slug: string) => void;
}

export default function HomePage({ onProjectClick }: HomePageProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["contact", "about", "work"];

    const handleScroll = () => {
      const threshold = 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > threshold) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white antialiased">
      <Header />
      <Hero />
      <Footer activeSection={activeSection} />
      <Work onProjectClick={onProjectClick} />
      <About />
      <Contact />
    </div>
  );
}
