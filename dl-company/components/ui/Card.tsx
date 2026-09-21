import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Superficie elevada padrao: borda, fundo e raio consistentes. */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-surface/60 p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
