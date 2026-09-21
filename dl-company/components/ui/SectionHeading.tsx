import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Cabecalho padrao de secao: eyebrow + titulo + descricao opcional. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
          <span aria-hidden="true" className="h-px w-6 bg-brand/70" />
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
