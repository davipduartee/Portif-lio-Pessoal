import { useState } from "react";
import type { Project } from "../data/site";

/**
 * Enquanto não existir um print real do projeto, mostramos um cartão gráfico na
 * linguagem do próprio site — nunca uma foto de banco genérica, que custa
 * credibilidade. O título não entra aqui: quem o exibe é o layout em volta.
 */
export default function ProjectCover({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !project.cover) {
    return (
      <div
        className={`grid-bg flex items-end bg-ink-soft p-6 ${className}`}
        role="img"
        aria-label={`Capa provisória do projeto ${project.title}`}
      >
        <p className="font-mono text-xs tracking-[0.16em] text-amber-dim uppercase">
          {project.stack.slice(0, 3).join(" · ")}
        </p>
      </div>
    );
  }

  return (
    <img
      src={project.cover}
      alt={`Interface do projeto ${project.title}`}
      onError={() => setFailed(true)}
      loading="lazy"
      className={`object-cover ${className}`}
    />
  );
}
