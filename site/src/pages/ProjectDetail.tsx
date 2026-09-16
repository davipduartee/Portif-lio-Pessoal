import { Link, Navigate, useParams } from "react-router-dom";
import ProjectCover from "../components/ProjectCover";
import { Container, Tag } from "../components/ui";
import { projects } from "../data/site";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <Navigate to="/" replace />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const links = [
    { label: "Repositório", href: project.links.repo },
    { label: "Demo ao vivo", href: project.links.demo },
    { label: "Documentação da API", href: project.links.docs },
  ].filter((link) => Boolean(link.href));

  return (
    <article>
      <div className="relative border-b border-line">
        <ProjectCover project={project} className="h-48 w-full sm:h-64" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <span className="absolute top-6 left-4 border border-amber-dim bg-ink px-2 py-1 font-mono text-xs text-amber sm:left-8">
          {project.year}
        </span>
      </div>

      <Container className="py-12 sm:py-16">
        <Link
          to="/#projetos"
          className="font-mono text-sm text-fg-muted hover:text-amber"
        >
          ← todos os projetos
        </Link>

        <div className="mt-8 flex flex-col gap-6 border-b border-line pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="font-mono text-4xl font-bold text-fg sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-fg-muted">{project.tagline}</p>

            {/* Sem link, um projeto é só uma alegação. */}
            {links.length > 0 && (
              <p className="mt-6 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="border border-amber-dim px-4 py-2 font-mono text-sm text-amber transition-colors hover:bg-ink-soft"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </p>
            )}
          </div>

          <p className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <section>
            <h2 className="label">// Overview</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-fg-muted">
              {project.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            {project.shots.length > 0 && (
              <div className="mt-12 space-y-8">
                {project.shots.map((shot) => (
                  <figure key={shot.src}>
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      loading="lazy"
                      className="w-full border border-line"
                    />
                    <figcaption className="mt-2 font-mono text-xs text-fg-faint">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>

          <aside>
            {/* "Destaques" virou resultado: o que mudou, e quanto. */}
            <h2 className="label">// Resultados</h2>
            <ol className="mt-6 space-y-5">
              {project.results.map((result, i) => (
                <li key={result.slice(0, 32)} className="flex gap-4">
                  <span className="font-mono text-xs text-amber">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-fg-muted">{result}</span>
                </li>
              ))}
            </ol>

            <h2 className="label mt-12">// Aprendizados</h2>
            <p className="mt-6 text-fg-muted">{project.learnings}</p>
          </aside>
        </div>

        <div className="mt-16 flex justify-end border-t border-line pt-8">
          <Link to={`/projetos/${next.slug}`} className="group text-right">
            <span className="font-mono text-xs tracking-[0.14em] text-fg-faint uppercase">
              próximo →
            </span>
            <span className="mt-1 block font-mono text-2xl font-bold text-fg group-hover:text-amber">
              {next.title}
            </span>
          </Link>
        </div>
      </Container>
    </article>
  );
}
