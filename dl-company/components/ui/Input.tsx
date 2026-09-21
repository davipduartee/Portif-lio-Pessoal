import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "id"> & {
  id: string;
  label: string;
  error?: string;
};

export function Input({ id, label, error, className, ...props }: InputProps) {
  const idDoErro = `${id}-erro`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? idDoErro : undefined}
        className={cn(
          "h-12 w-full rounded-xl border bg-surface-2/60 px-4 text-base text-ink outline-none",
          "placeholder:text-muted/60 transition-colors",
          error
            ? "border-danger/70 focus:border-danger"
            : "border-line focus:border-brand",
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={idDoErro} className="text-xs text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
