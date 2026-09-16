import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-4 sm:gap-6">
      <span className="font-mono text-xs tracking-[0.18em] text-amber">
        {index}
      </span>
      <span aria-hidden className="h-px w-8 bg-amber-dim sm:w-12" />
      <span className="font-mono text-xl font-bold tracking-[0.18em] text-fg uppercase sm:text-3xl">
        {children}
      </span>
    </h2>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-amber-dim px-2 py-1 font-mono text-xs text-amber">
      {children}
    </span>
  );
}

/** Caixa com o canto marcado, usada nos dados do hero e nos destaques. */
export function Panel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-line bg-ink-soft p-4">
      <p className="label">{label}</p>
      <p className="mt-1 text-fg">{children}</p>
    </div>
  );
}
