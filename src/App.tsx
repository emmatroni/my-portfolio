import { useState, useEffect } from "react";
import HomePage from "./components/sections/HomePage";
import ProjectPage from "./components/sections/ProjectPage";
import CustomCursor from "./components/ui/CustomCursor";
import projects from "./data/projects";

export default function App() {
  const [currentProject, setCurrentProject] = useState<string | null>(null);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const match = path.match(/^\/projects\/(.+)$/);
      setCurrentProject(match ? match[1] : null);
    };

    handlePopState();

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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

    return (
      <>
        <CustomCursor />
        <ProjectPage project={project} onBack={navigateHome} />
      </>
    );
  }

  // ─── Homepage ──────────────────────────────────────
  return (
    <>
      <CustomCursor />
      <HomePage onProjectClick={navigateToProject} />
    </>
  );
}
