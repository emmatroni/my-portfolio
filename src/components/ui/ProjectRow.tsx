import { useState, useEffect, useRef } from "react";
import type { Project } from "../../data/projects";

interface ProjectRowProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectRow({
  project,
  index,
  onClick,
}: ProjectRowProps) {
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
      onClick={onClick}
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
        className="text-sm md:text-base font-medium min-w-[140px]"
        style={{
          color: hovered ? "var(--color-text)" : "rgba(255,255,255,0.8)",
          transition: "color var(--transition-fast)",
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
          transition: "color var(--transition-fast)",
        }}
      >
        {project.year}
      </span>
    </div>
  );
}
