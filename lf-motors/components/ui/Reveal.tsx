"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Anima a entrada do conteudo quando ele chega na viewport.
 * O estado inicial vive no CSS, sob @media (scripting: enabled), entao sem
 * JavaScript o conteudo simplesmente aparece.
 *
 * Com midia = true o filho entra crescendo de leve, como foco de camera.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  midia = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  midia?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.visible = "true";
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            el.dataset.visible = "true";
            observador.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  const atributo = midia ? { "data-reveal-midia": "" } : { "data-reveal": "" };

  return (
    <div
      ref={ref}
      {...atributo}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
