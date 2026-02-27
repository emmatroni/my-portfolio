import { useEffect, useState } from "react";
import type { Project } from "../data/projects";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProjectTitle from "../components/sections/project/ProjectTitle";
import ProjectHero from "../components/sections/project/ProjectHero";
import ProjectContent from "../components/sections/project/ProjectContent";
import ProjectGallery from "../components/sections/project/ProjectGallery";

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectPage({ project, onBack }: ProjectPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [titleVisible, setTitleVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: project.color }}>
      <Header bgColor={project.color} onLogoClick={onBack} />
      <ProjectTitle project={project} visible={titleVisible} />
      <ProjectHero project={project} visible={titleVisible} />
      <ProjectContent project={project} />
      <ProjectGallery project={project} />
      <Footer />
    </div>
  );
}
