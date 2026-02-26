import projects from "../../data/projects";
import ProjectRow from "../ui/ProjectRow";

export default function Work() {
  return (
    <section
      id="work"
      className="bg-black min-h-screen px-6 md:px-10 pt-12 pb-16"
    >
      <h2
        className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight pb-8 pt-8"
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
