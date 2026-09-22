import { cn } from "@/lib/cn";

/**
 * Wordmark tipografico: serifa editorial no monograma, grotesca em versalete
 * no restante. Sem icone, de proposito.
 * TODO(cliente): trocar pelo logo oficial quando houver vetor.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2.5", className)}>
      <span className="font-display text-2xl leading-none tracking-tight">LF</span>
      <span className="text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-bone-dim">
        Motors
      </span>
    </span>
  );
}
