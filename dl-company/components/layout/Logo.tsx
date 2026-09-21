import { cn } from "@/lib/cn";

/**
 * Wordmark tipografico com monograma de "aceleracao" (chevrons).
 * TODO(cliente): trocar pelo logo oficial quando houver arquivo vetorial.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-brand/40 bg-gradient-to-br from-brand/30 to-transparent">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-4 text-brand-soft"
        >
          <path d="M4 6l6 6-6 6" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        DL <span className="font-normal text-muted">Company</span>
      </span>
    </span>
  );
}
