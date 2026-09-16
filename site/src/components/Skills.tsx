import { Link } from "react-router-dom";
import { learning, projectBySlug, skillGroups } from "../data/site";
import { Container, SectionHeading } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-16 sm:py-24">
      <Container>
        <SectionHeading index="02">Habilidades</SectionHeading>

        <p className="mt-4 max-w-2xl text-fg-muted">
          Cada tecnologia aponta para os projetos em que ela foi realmente
          usada — a prova está no código, não em uma barra de porcentagem.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={i > 0 ? "lg:border-l lg:border-line lg:pl-8" : "lg:pr-8"}
            >
              <h3 className="label">{group.label}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <p className="font-mono text-fg">
                      <span aria-hidden className="mr-2 text-amber-dim">
                        ›
                      </span>
                      {skill.name}
                    </p>
                    {skill.usedIn.length > 0 && (
                      <p className="mt-1 ml-5 flex flex-wrap gap-x-2 text-xs text-fg-faint">
                        {skill.usedIn.map((slug) => (
                          <Link
                            key={slug}
                            to={`/projetos/${slug}`}
                            className="underline decoration-dotted underline-offset-4 hover:text-amber"
                          >
                            {projectBySlug(slug)?.title ?? slug}
                          </Link>
                        ))}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs tracking-[0.14em] text-fg-muted uppercase">
            Loading: →
          </span>
          {learning.map((item) => (
            <span
              key={item}
              className="border border-amber-dim px-3 py-1.5 font-mono text-sm text-amber"
            >
              {item}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
