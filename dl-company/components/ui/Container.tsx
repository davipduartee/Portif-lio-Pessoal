import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Largura maxima e gutters consistentes em toda a pagina. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
