"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { FotoVeiculo } from "@/components/ui/FotoVeiculo";
import { Reveal } from "@/components/ui/Reveal";
import { TituloSecao } from "@/components/ui/TituloSecao";
import {
  estoque,
  fichaTecnica,
  formatarPreco,
  marcasDoEstoque,
  type Veiculo,
} from "@/lib/estoque";
import { cn } from "@/lib/cn";

const TODAS = "Todas";

export function Estoque() {
  const [marca, setMarca] = useState<string>(TODAS);
  const marcas = useMemo(() => [TODAS, ...marcasDoEstoque()], []);

  const lista = useMemo(() => {
    const filtrada = marca === TODAS ? estoque : estoque.filter((v) => v.marca === marca);
    // destaques primeiro, mantendo a ordem original dentro de cada grupo
    return [...filtrada].sort((a, b) => Number(b.destaque) - Number(a.destaque));
  }, [marca]);

  return (
    <section id="estoque" className="scroll-mt-24 border-t border-line py-24 md:py-36">
      <Container>
        <Reveal>
          <TituloSecao
            rotulo="Estoque"
            titulo="Cada carro aqui passou por uma escolha."
            texto="Estoque enxuto, atualizado conforme as unidades entram e saem. Fale com a loja para agendar uma visita e ver o carro de perto."
          />
        </Reveal>

        <Reveal className="mt-14" delay={80}>
          <div className="flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div role="group" aria-label="Filtrar por marca" className="flex flex-wrap gap-2">
              {marcas.map((nome) => {
                const ativa = nome === marca;
                return (
                  <button
                    key={nome}
                    type="button"
                    onClick={() => setMarca(nome)}
                    aria-pressed={ativa}
                    className={cn(
                      "rounded-[2px] border px-4 py-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                      ativa
                        ? "border-bone bg-bone text-ink"
                        : "border-line text-bone-dim hover:border-bone hover:text-bone",
                    )}
                  >
                    {nome}
                  </button>
                );
              })}
            </div>

            <p aria-live="polite" className="rotulo shrink-0">
              {lista.length === 1 ? "1 veículo" : `${lista.length} veículos`}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {lista.map((veiculo, indice) => (
            <Reveal
              key={veiculo.slug}
              delay={(indice % 3) * 90}
              className={cn(indice === 0 && veiculo.destaque && "lg:col-span-2")}
            >
              <CartaoVeiculo veiculo={veiculo} largo={indice === 0 && veiculo.destaque} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CartaoVeiculo({ veiculo, largo }: { veiculo: Veiculo; largo: boolean }) {
  const nomeCompleto = `${veiculo.marca} ${veiculo.modelo}`;

  return (
    <article className="group h-full">
      <div
        className={cn(
          "relative overflow-hidden bg-ink-2",
          largo ? "aspect-[16/9]" : "aspect-[4/3]",
        )}
      >
        <div className="size-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <FotoVeiculo
            foto={veiculo.fotos[0]}
            etiqueta={nomeCompleto}
            alt={`${nomeCompleto} ${veiculo.ano}`}
            sizes={largo ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          />
        </div>

        {veiculo.blindado ? (
          <span className="absolute left-4 top-4 rounded-[2px] bg-ink/85 px-3 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-bone">
            Blindado
          </span>
        ) : null}

        {veiculo.destaque ? (
          <span className="absolute right-4 top-4 rounded-[2px] bg-bone px-3 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-ink">
            Destaque
          </span>
        ) : null}
      </div>

      <div className="mt-6 border-t border-line pt-5 transition-colors duration-500 group-hover:border-bone/45">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="rotulo">{veiculo.marca}</p>
            <h3 className="mt-2.5 font-display text-2xl leading-tight">
              {veiculo.modelo}
            </h3>
          </div>
          <p className="tabular shrink-0 pt-1 text-sm text-bone">
            {formatarPreco(veiculo.preco)}
          </p>
        </div>

        <p className="tabular mt-4 text-xs leading-relaxed text-steel">
          {fichaTecnica(veiculo)}
        </p>
      </div>
    </article>
  );
}
