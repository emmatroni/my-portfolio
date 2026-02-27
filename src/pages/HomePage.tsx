import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import LinkNav from "../components/common/LinkNav";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

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
      <LinkNav activeSection={activeSection} />
      <Work onProjectClick={onProjectClick} />
      <About onProjectClick={onProjectClick} />
      <Contact />
    </div>
  );
}
