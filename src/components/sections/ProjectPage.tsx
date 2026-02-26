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
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md"
        style={{
          backgroundColor: `${project.color}ee`,
          borderBottom: "var(--border-width) solid rgba(255,255,255,0.15)",
        }}
      >
        <button
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          ← Back
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
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-4">
        <h1
          className="text-5xl md:text-7xl lg:text-9xl font-light text-white tracking-tight leading-[0.95]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.name}
        </h1>
        <div className="flex items-center justify-between mt-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
            {project.location}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
            {project.year}
          </span>
        </div>
      </section>

      {/* ─── Hero image ──────────────────────────────────── */}
      <section className="px-6 md:px-10 pb-8">
        <div className="w-full overflow-hidden rounded-sm">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-[50vh] md:h-[65vh] object-cover"
          />
        </div>
      </section>

      {/* ─── Content grid ────────────────────────────────── */}
      <section className="px-6 md:px-10 py-8">
        {/* Section labels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {["About", "Challenges", "Features"].map((label, i) => (
            <span
              key={label}
              className="text-[10px] uppercase tracking-[0.2em] text-white/80 flex items-center gap-1"
            >
              <span className="text-[8px]">●</span> {label}
            </span>
          ))}
          <div className="flex flex-col items-end gap-1">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="text-[10px] uppercase tracking-[0.2em] link-muted"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Text columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            {project.about.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm text-white/80 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Challenges */}
          <div>
            <p className="text-sm text-white/80 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Features */}
          <div>
            {project.features && (
              <p className="text-sm text-white/80 leading-relaxed">
                {project.features}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ─── Gallery ─────────────────────────────────────── */}
      {project.gallery.length > 0 && (
        <section className="px-6 md:px-10 py-8">
          <div className="flex flex-wrap gap-4">
            {project.gallery.map((image, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-sm ${
                  image.size === "full"
                    ? "w-full"
                    : "w-full md:w-[calc(50%-0.5rem)]"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Footer ──────────────────────────────────────── */}
      <footer
        className="px-6 md:px-10 py-4 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-white/30"
        style={{
          borderTop: "var(--border-width) solid rgba(255,255,255,0.1)",
        }}
      >
        <span>Emma Troni</span>
        <span>Web and Graphic Designer · Milan (IT)</span>
        <span>© 2025</span>
      </footer>
    </div>
  );
}
