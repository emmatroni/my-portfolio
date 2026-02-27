import type { Project } from "../../../data/projects";

interface ProjectTitleProps {
  project: Project;
  visible: boolean;
}

export default function ProjectTitle({ project, visible }: ProjectTitleProps) {
  return (
    <section
      className={`pb-4 px-3 flex row justify-between transition-all duration-[1.5s] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        paddingTop: "clamp(6rem, 20vw, 30rem)",
      }}
    >
      <h1
        className="font-light text-white tracking-tight leading-[0.95]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 8vw, 9rem)",
        }}
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
  );
}
