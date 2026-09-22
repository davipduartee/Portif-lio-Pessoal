import { cn } from "@/lib/cn";

/**
 * Ocupa o lugar de uma foto que ainda nao chegou.
 *
 * De proposito nao usamos imagem de carro de terceiros nem foto generica de
 * banco de imagens: o layout fica honesto e obviamente a espera do material
 * real da loja.
 */
export function FotoPendente({
  etiqueta,
  className,
}: {
  etiqueta: string;
  className?: string;
}) {
  return (
    <div className={cn("grao relative flex items-end overflow-hidden bg-ink-2", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,var(--color-ink-3),transparent_72%)]"
      />
      <div className="relative z-10 p-5">
        <p className="rotulo">Foto pendente</p>
        <p className="mt-1.5 font-display text-lg text-bone-dim">{etiqueta}</p>
      </div>
    </div>
  );
}
