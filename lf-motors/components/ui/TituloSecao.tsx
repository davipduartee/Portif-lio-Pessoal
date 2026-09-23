import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Cabecalho editorial de secao: rotulo versalete acima, serifa grande abaixo. */
export function TituloSecao({
  rotulo,
  titulo,
  texto,
  className,
}: {
  rotulo: string;
  titulo: ReactNode;
  texto?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <p className="rotulo">{rotulo}</p>
      <h2 className="max-w-[20ch] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02]">
        {titulo}
      </h2>
      {texto ? (
        <p className="max-w-[54ch] text-base leading-relaxed text-bone-dim">
          {texto}
        </p>
      ) : null}
    </div>
  );
}
