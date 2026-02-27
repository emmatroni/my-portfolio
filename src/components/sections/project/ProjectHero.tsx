import type { Project } from "../../../data/projects";

interface ProjectHeroProps {
  project: Project;
  visible: boolean;
}

export default function ProjectHero({ project, visible }: ProjectHeroProps) {
  return (
    <section
      className={`pb-8 px-3 transition-all duration-[1.5s] delay-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-full overflow-hidden rounded-sm">
        <img
          src={project.heroImage}
          alt={project.name}
          className="w-full h-[50vh] md:h-[65vh] object-cover"
        />
      </div>
    </section>
  );
}
