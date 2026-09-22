import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site, linkWhatsapp } from "@/lib/site";

const fatos = [
  {
    rotulo: "Procedência",
    texto: "Histórico e laudo cautelar de cada unidade antes de entrar na vitrine.",
  },
  {
    rotulo: "Documentação",
    texto: "Transferência acompanhada por nós, do início ao fim.",
  },
  {
    rotulo: "Sua troca",
    texto: "Avaliamos o seu usado e apresentamos proposta na hora.",
  },
];

export function Home() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden"
    >
      <Abertura />

      {/* marca o estado de espera para que a area vazia leia como intencional */}
      {site.fotoAbertura ? null : (
        <p className="rotulo absolute bottom-40 right-6 z-10 hidden sm:right-10 lg:block">
          Foto de abertura pendente
        </p>
      )}

      <Container className="relative z-10 pb-20 pt-36">
        <div className="max-w-[48rem]">
          <p className="rotulo surgir">{site.regiao}</p>

          <h1
            className="surgir mt-7 text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.94]"
            style={{ animationDelay: "90ms" }}
          >
            Poucos carros. Todos conferidos.
          </h1>

          <p
            className="surgir mt-8 max-w-[52ch] text-base leading-relaxed text-bone-dim sm:text-lg"
            style={{ animationDelay: "170ms" }}
          >
            Trabalhamos com estoque enxuto de premium e superesportivos em{" "}
            {site.cidade}. Cada unidade passa por checagem de procedência e laudo
            cautelar antes de ser oferecida.
          </p>

          <div
            className="surgir mt-11 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "250ms" }}
          >
            <Button href="#estoque" tamanho="lg">
              Ver estoque
            </Button>
            <Button
              href={linkWhatsapp()}
              variante="contorno"
              tamanho="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-line">
        <Container>
          <dl className="grid gap-8 py-9 sm:grid-cols-3 sm:gap-10">
            {fatos.map((fato) => (
              <div key={fato.rotulo}>
                <dt className="rotulo">{fato.rotulo}</dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-bone-dim">
                  {fato.texto}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}

/** Foto de abertura sangrando na tela. Sem ela, um campo de grafite com grão. */
function Abertura() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      {site.fotoAbertura ? (
        <Image
          src={site.fotoAbertura}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="grao absolute inset-0 bg-ink-2">
          <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_70%_20%,var(--color-ink-3),transparent_65%)]" />
        </div>
      )}

      {/* vinheta: garante leitura do texto sobre qualquer foto */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/25" />
    </div>
  );
}
