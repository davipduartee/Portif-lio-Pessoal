import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variante = "solido" | "contorno" | "discreto";
type Tamanho = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[2px] " +
  "text-xs font-medium uppercase tracking-[0.18em] " +
  "transition-[background-color,color,border-color,opacity] duration-300 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variantes: Record<Variante, string> = {
  // bloco claro sobre fundo escuro: no hover, inverte
  solido: "bg-bone text-ink hover:bg-transparent hover:text-bone border border-bone",
  contorno: "border border-line text-bone hover:border-bone",
  discreto: "text-bone-dim hover:text-bone",
};

const tamanhos: Record<Tamanho, string> = {
  md: "h-12 px-7",
  lg: "h-14 px-9",
};

type Comuns = {
  variante?: Variante;
  tamanho?: Tamanho;
  className?: string;
  children: ReactNode;
};

type ComoLink = Comuns &
  Omit<ComponentPropsWithoutRef<"a">, keyof Comuns> & { href: string };

type ComoBotao = Comuns &
  Omit<ComponentPropsWithoutRef<"button">, keyof Comuns> & { href?: never };

/** Renderiza <a> quando recebe href, <button> caso contrario. */
export function Button(props: ComoLink | ComoBotao) {
  const { variante = "solido", tamanho = "md", className, children, ...resto } = props;
  const classes = cn(base, variantes[variante], tamanhos[tamanho], className);

  if (typeof resto.href === "string") {
    return (
      <a className={classes} {...(resto as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(resto as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
