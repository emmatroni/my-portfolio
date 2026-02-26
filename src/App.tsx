import { useState, useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import ProjectPage from "./components/sections/ProjectPage";
import projects from "./data/projects";

export default function App() {
  const [activeSection, setActiveSection] = useState("work");
  const [currentProject, setCurrentProject] = useState<string | null>(null);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const match = path.match(/^\/projects\/(.+)$/);
      setCurrentProject(match ? match[1] : null);
    };

    // Check initial URL
    handlePopState();

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Scroll tracking for homepage sections
  useEffect(() => {
    if (currentProject) return;

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
  }, [currentProject]);

  const navigateToProject = (slug: string) => {
    setCurrentProject(slug);
    window.history.pushState({}, "", `/projects/${slug}`);
  };

  const navigateHome = () => {
    setCurrentProject(null);
    window.history.pushState({}, "", "/");
  };

  // ─── Project page ──────────────────────────────────
  if (currentProject) {
    const project = projects.find((p) => p.slug === currentProject);
    if (!project) {
      navigateHome();
      return null;
    }
    return <ProjectPage project={project} onBack={navigateHome} />;
  }

  // ─── Homepage ──────────────────────────────────────
  return (
    <div className="bg-black min-h-screen text-white antialiased">
      <Header />
      <Hero />
      <Footer activeSection={activeSection} />
      <Work onProjectClick={navigateToProject} />
      <About />
      <Contact />
    </div>
  );
}
