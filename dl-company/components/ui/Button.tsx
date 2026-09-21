import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium " +
  "transition-[transform,background-color,border-color,color,box-shadow] duration-200 " +
  "disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // laranja automotivo: reservado ao CTA primario
  primary:
    "bg-cta text-night font-semibold shadow-[0_10px_30px_-10px_var(--color-cta)] " +
    "hover:bg-cta-soft hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-line bg-surface/70 text-ink hover:border-brand/60 hover:bg-surface-2 " +
    "hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
  lg: "h-13 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps> & { href: string };

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & { href?: never };

/**
 * Renderiza <a> quando recebe href, <button> caso contrario.
 * Mantem a mesma escala visual nos dois casos.
 */
export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof rest.href === "string") {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
