import { useState, useEffect, useRef } from "react";
import SectionNav from "../common/SectionNav";

interface Project {
  name: string;
  field: string;
  attrs: string[];
  year: string;
}

const projects: Project[] = [
  {
    name: "Project 1",
    field: "Field",
    attrs: ["Attribute 1", "Attribute 2", "Attribute 3"],
    year: "2025",
  },
  {
    name: "Project Name",
    field: "Field",
    attrs: ["Attribute 1", "Attribute 2", "Attribute 3"],
    year: "2024",
  },
  {
    name: "Project Name",
    field: "Field",
    attrs: ["Attribute 1", "Attribute 2", "Attribute 3"],
    year: "2024",
  },
  {
    name: "Project Name",
    field: "Field",
    attrs: ["Attribute 1", "Attribute 2", "Attribute 3"],
    year: "2024",
  },
  {
    name: "Project Name",
    field: "Field",
    attrs: ["Attribute 1", "Attribute 2", "Attribute 3"],
    year: "2023",
  },
  {
    name: "Project Name",
    field: "Field",
    attrs: ["Attribute 1", "Attribute 2", "Attribute 3"],
    year: "2023",
  },
  {
    name: "Project Name",
    field: "Field",
    attrs: ["Attribute 1", "Attribute 2", "Attribute 3"],
    year: "2023",
  },
  {
    name: "Project Name",
    field: "Field",
    attrs: ["Attribute 1", "Attribute 2", "Attribute 3"],
    year: "2022",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group flex items-center justify-between py-4 px-2 border-b border-white/5 cursor-pointer transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${hovered ? "bg-white/[0.03]" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span
        className={`text-sm md:text-base font-medium transition-colors duration-300 min-w-[140px] ${
          hovered ? "text-white" : "text-white/80"
        }`}
      >
        {project.name}
      </span>

      <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
        <span className="px-3 py-1 rounded-full border border-white/15 text-[10px] uppercase tracking-wider text-white/40">
          {project.field}
        </span>
        {project.attrs.map((attr, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full border border-white/15 text-[10px] uppercase tracking-wider text-white/40"
          >
            {attr}
          </span>
        ))}
      </div>

      <span
        className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
          hovered ? "text-white" : "text-white/50"
        }`}
      >
        {project.year}
      </span>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-black min-h-screen py-8">
      <SectionNav active="work" />

      <div className="px-6 md:px-10 pt-12 pb-6">
        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          All projects
        </h2>
      </div>

      <div className="px-6 md:px-10">
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
