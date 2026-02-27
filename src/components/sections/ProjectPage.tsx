import { useEffect } from "react";
import type { Project } from "../../data/projects";

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectPage({ project, onBack }: ProjectPageProps) {
  // Scroll to top when project page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: project.color }}>
      {/* ─── Header bar ──────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between  py-4 px-3"
        style={{
          backgroundColor: `${project.color}`,
          borderBottom: "var(--border-width) solid var(--border-color)",
        }}
      >
        <button
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          ← Home
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/80">
          Emma Troni
        </span>
        <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-white/80 text-center leading-tight">
          Web and Graphic Designer
          <br />
          Currently based in Milan (IT)
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/80">
          @2025
        </span>
      </nav>

      {/* ─── Title section ───────────────────────────────── */}
      <section className=" pt-16 md:pt-24 pb-4 px-3 flex row justify-between">
        <h1
          className="text-5xl md:text-7xl lg:text-9xl font-light text-white tracking-tight leading-[0.95]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.name}
        </h1>
        <div className="flex justify-between mt-6 gap-5 items-end">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
            {project.location}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
            {project.year}
          </span>
        </div>
      </section>

      {/* ─── Hero image ──────────────────────────────────── */}
      <section className=" pb-8 px-3">
        <div className="w-full overflow-hidden rounded-sm">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-[50vh] md:h-[65vh] object-cover"
          />
        </div>
      </section>

      {/* ─── Content grid (12 cols, gap 20px) ────────────── */}
      {/* Desktop ≥1440: 3 cols (4+4+4) side by side
          Tablet 768–1440: About (5 cols) + Challenges below (5 cols) | Features (3 cols) right
          Mobile <768: all stacked full width, order: About → Challenges → Features */}
      <section className="px-3 pt-3 md:pt-6">
        <div className="grid grid-cols-1 md:grid-cols-8 xl:grid-cols-12 gap-5 border-t border-white/70 pt-3">
          {/* About */}
          <div className="order-1 md:col-span-5 xl:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold flex items-center gap-1 mb-4">
              <span className="text-[8px]">●</span> About
            </span>
            {project.about.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-white/80  mb-4"
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
              {/* tag */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold flex items-center gap-1 ">
                <span className="text-[8px]">●</span> Features
              </span>
              {/* first attr */}
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
            <div className="flex flex-col ">
              {/* other attr */}
              {project.attrs.slice(1).map((attr, i) => (
                <div key={i} className="flex justify-end border-b py-3">
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] text-white/50 px-3 py-1 rounded-full"
                    style={{
                      border:
                        "var(--border-width) solid rgba(255,255,255,0.15)",
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

      {/* ─── Gallery ─────────────────────────────────────── */}
      {project.gallery.length > 0 && (
        <section className="px-3 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {project.gallery.map((image, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-sm ${
                  i === 0
                    ? "md:col-span-6 xl:col-span-4"
                    : "md:col-span-6 xl:col-span-8"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
      {/* ─── Gallery ─────────────────────────────────────── */}

      {/* ─── Footer ──────────────────────────────────────── */}
      <footer
        className=" py-4 flex items-center justify-center text-[9px] uppercase text-white/80 px-3"
        style={{
          borderTop: "var(--border-width) solid var(--border-color)",
        }}
      >
        <span>Developed by Emma Troni</span>
      </footer>
    </div>
  );
}
