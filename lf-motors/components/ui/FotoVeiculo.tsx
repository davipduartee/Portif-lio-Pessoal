import Image from "next/image";
import { FotoPendente } from "@/components/ui/FotoPendente";
import { cn } from "@/lib/cn";

/**
 * Ponto unico de troca entre a foto real e o marcador de foto pendente.
 * Quando as imagens da loja chegarem, basta preencher o array fotos em
 * lib/estoque.ts: nenhum componente de tela precisa mudar.
 */
export function FotoVeiculo({
  foto,
  etiqueta,
  alt,
  sizes,
  prioridade = false,
  className,
}: {
  foto: string | undefined;
  etiqueta: string;
  alt: string;
  sizes: string;
  prioridade?: boolean;
  className?: string;
}) {
  if (!foto) {
    return <FotoPendente etiqueta={etiqueta} className={cn("size-full", className)} />;
  }

  return (
    <Image
      src={foto}
      alt={alt}
      fill
      sizes={sizes}
      priority={prioridade}
      className={cn("object-cover", className)}
    />
  );
}
