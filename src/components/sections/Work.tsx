import projects from "../../data/projects";
import ProjectRow from "../ui/ProjectRow";

interface WorkProps {
  onProjectClick: (slug: string) => void;
}

export default function Work({ onProjectClick }: WorkProps) {
  return (
    <section id="work" className="bg-black min-h-fit px-6 md:px-3 pt-12 pb-16">
      <h2
        className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-8 mt-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        All projects
      </h2>
      <div>
        {[...projects]
          .sort((a, b) => Number(b.year) - Number(a.year))
          .map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={i}
              onClick={() => onProjectClick(project.slug)}
            />
          ))}
      </div>
    </section>
  );
}
