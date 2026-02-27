import { useState, useEffect, useCallback } from "react";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CustomCursor from "./components/ui/CustomCursor";
import PageTransition from "./components/ui/PageTransition";
import PageLoader from "./components/ui/PageLoader";
import projects from "./data/projects";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  const [startColor, setStartColor] = useState("#000000");
  const [targetColor, setTargetColor] = useState("#000000");
  const [pageFading, setPageFading] = useState(false);

  // Get color of current page
  const getCurrentColor = useCallback(() => {
    if (currentProject) {
      const project = projects.find((p) => p.slug === currentProject);
      return project?.color || "#000000";
    }
    return "#000000";
  }, [currentProject]);

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

  const navigateToProject = useCallback(
    (slug: string) => {
      const project = projects.find((p) => p.slug === slug);
      setStartColor(getCurrentColor());
      setTargetColor(project?.color || "#000000");
      setPendingSlug(slug);
      setTransitioning(true);
    },
    [getCurrentColor],
  );

  const navigateHome = useCallback(() => {
    setStartColor(getCurrentColor());
    setTargetColor("#000000");
    setPendingSlug(null);
    setTransitioning(true);
  }, [getCurrentColor]);

  const handleStart = useCallback(() => {
    setPageFading(true);
  }, []);

  const handleMidpoint = useCallback(() => {
    if (pendingSlug) {
      setCurrentProject(pendingSlug);
      window.history.pushState({}, "", `/projects/${pendingSlug}`);
    } else {
      setCurrentProject(null);
      window.history.pushState({}, "", "/");
    }
  }, [pendingSlug]);

  const handleComplete = useCallback(() => {
    setTransitioning(false);
    setPageFading(false);
  }, []);

  return (
    <>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

      <CustomCursor />

      <PageTransition
        active={transitioning}
        startColor={startColor}
        targetColor={targetColor}
        onStart={handleStart}
        onMidpoint={handleMidpoint}
        onComplete={handleComplete}
      />

      <div
        style={{
          opacity: pageFading ? 0 : 1,
          transition: "opacity 400ms ease-out",
        }}
      >
        {currentProject ? (
          (() => {
            const project = projects.find((p) => p.slug === currentProject);
            if (!project) {
              navigateHome();
              return null;
            }
            return <ProjectPage project={project} onBack={navigateHome} />;
          })()
        ) : (
          <HomePage onProjectClick={navigateToProject} loaded={loaded} />
        )}
      </div>
    </>
  );
}
