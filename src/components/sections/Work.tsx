import { useState, useEffect, useRef } from "react";

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
      className={`group flex items-center justify-between py-4 px-2 cursor-pointer transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${hovered ? "bg-white/[0.03]" : ""}`}
      style={{
        transitionDelay: `${index * 80}ms`,
        borderBottom: "var(--border-width) solid var(--border-color-subtle)",
      }}
    >
      <span
        className={`text-sm md:text-base font-medium min-w-[140px]`}
        style={{
          color: hovered ? "var(--color-text)" : "rgba(255,255,255,0.8)",
          transition: `color var(--transition-fast)`,
        }}
      >
        {project.name}
      </span>

      <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
        <span
          className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider"
          style={{
            border: "var(--border-width) solid rgba(255,255,255,0.15)",
            color: "var(--color-text-muted)",
          }}
        >
          {project.field}
        </span>
        {project.attrs.map((attr, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider"
            style={{
              border: "var(--border-width) solid rgba(255,255,255,0.15)",
              color: "var(--color-text-muted)",
            }}
          >
            {attr}
          </span>
        ))}
      </div>

      <span
        className="text-xs uppercase tracking-[0.2em] font-semibold"
        style={{
          color: hovered ? "var(--color-text)" : "var(--color-text-subtle)",
          transition: `color var(--transition-fast)`,
        }}
      >
        {project.year}
      </span>
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="bg-black min-h-screen px-6 md:px-10 pt-12 pb-16"
    >
      <h2
        className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        All projects
      </h2>
      <div>
        {projects.map((project, i) => (
          <ProjectRow key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
