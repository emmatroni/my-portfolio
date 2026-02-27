import { useEffect, useState, useRef } from "react";
import type { Project } from "../../../data/projects";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`px-3 pt-3 md:pt-6 transition-all duration-[1.2s] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-8 xl:grid-cols-12 gap-5 border-t border-white/70 pt-3">
        {/* About */}
        <div className="order-1 md:col-span-5 xl:col-span-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold flex items-center gap-1 mb-4">
            <span className="text-[8px]">●</span> About
          </span>
          {project.about.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-white/80 mb-4"
              style={{ fontSize: "clamp(1rem, 1.7vw, 1.25rem)" }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Challenges */}
        <div className="order-2 md:order-3 xl:order-2 md:col-span-5 xl:col-span-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold flex items-center gap-1 mb-4">
            <span className="text-[8px]">●</span> Challenges
          </span>
          {project.challenges.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-white/80 mb-4"
              style={{ fontSize: "clamp(1rem, 1.7vw, 1.25rem)" }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Features + Attrs */}
        <div className="order-3 md:order-2 xl:order-3 md:col-span-3 xl:col-span-4 md:row-span-2 xl:row-span-1">
          <div className="flex justify-between items-start pb-3 border-b">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold flex items-center gap-1">
              <span className="text-[8px]">●</span> Features
            </span>
            {project.attrs[0] && (
              <span
                className="text-[10px] uppercase tracking-[0.2em] text-white/50 px-3 py-1 rounded-full"
                style={{
                  border: "var(--border-width) solid rgba(255,255,255,0.15)",
                  color: "var(--color-text-muted)",
                }}
              >
                {project.attrs[0]}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            {project.attrs.slice(1).map((attr, i) => (
              <div key={i} className="flex justify-end border-b py-3">
                <span
                  className="text-[10px] uppercase tracking-[0.2em] text-white/50 px-3 py-1 rounded-full"
                  style={{
                    border: "var(--border-width) solid rgba(255,255,255,0.15)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {attr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
