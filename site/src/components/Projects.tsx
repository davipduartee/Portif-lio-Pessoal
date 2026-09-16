import { Link } from "react-router-dom";
import { projects } from "../data/site";
import ProjectCover from "./ProjectCover";
import { Container, SectionHeading, Tag } from "./ui";

export default function Projects() {
  return (
    <section id="projetos" className="border-b border-line py-16 sm:py-24">
      <Container>
        <SectionHeading index="03">Projetos</SectionHeading>

        <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.slug} className="bg-ink">
              <Link
                to={`/projetos/${project.slug}`}
                className="group block h-full focus-visible:outline-offset-[-2px]"
              >
                <div className="relative">
                  <ProjectCover
                    project={project}
                    className="h-56 w-full transition-opacity group-hover:opacity-80 sm:h-64"
                  />
                  <span className="absolute top-4 left-4 border border-amber-dim bg-ink px-2 py-1 font-mono text-xs text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-mono text-xl font-bold text-fg group-hover:text-amber">
                      {project.title}
                    </h3>
                    <span
                      aria-hidden
                      className="text-fg-faint transition-transform group-hover:translate-x-1 group-hover:text-amber"
                    >
                      ›
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-sm text-fg-muted">
                    {project.tagline}
                  </p>
                  {/* Stack inteira à mostra: era exatamente o que o "+3" escondia. */}
                  <p className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
