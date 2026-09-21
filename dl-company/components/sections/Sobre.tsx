import { Handshake, MapPin, Wrench } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const pilares = [
  {
    icone: Wrench,
    titulo: "Vocabulário de showroom",
    texto:
      "Giro de estoque, test-drive, avaliação do usado, aprovação de financiamento. Falamos a língua da sua operação desde a primeira reunião — sem traduzir marketing para o seu gerente.",
  },
  {
    icone: Handshake,
    titulo: "Um responsável, não quatro",
    texto:
      "Design, tráfego, atendimento e CRM sob o mesmo teto. Ninguém empurra a culpa para o fornecedor do lado quando o lead não vira venda.",
  },
  {
    icone: MapPin,
    titulo: `Presença local em ${site.city}`,
    texto:
      "Time no Maranhão, que conhece a sazonalidade, o perfil do comprador e a concorrência da região — não um call center a três mil quilômetros daqui.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Sobre a DL Company"
              title={
                <>
                  Marketing genérico não vende{" "}
                  <span className="bg-gradient-to-r from-brand-soft to-brand bg-clip-text text-transparent">
                    veículo.
                  </span>
                </>
              }
            />

            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Vender carro não é vender qualquer produto. O ciclo é longo, o
                ticket é alto e a decisão passa por test-drive, avaliação do usado
                e aprovação de financiamento. Campanha bonita que ignora esse
                caminho entrega curioso — e curioso não assina contrato.
              </p>
              <p>
                A DL Company existe para ser o time de tecnologia e marketing que
                a concessionária não tem dentro de casa. Em vez de uma agência
                para o tráfego, um freelancer para o design e uma planilha para
                controlar os leads, você passa a ter um só responsável, aqui em{" "}
                {site.region}, respondendo pelo percurso inteiro: do anúncio até o
                CRM onde seu vendedor fecha a venda.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {pilares.map((pilar, indice) => (
              <Reveal key={pilar.titulo} delay={indice * 90}>
                <Card className="h-full transition-colors duration-300 hover:border-brand/45">
                  <div className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10">
                      <pilar.icone className="size-5 text-brand-soft" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {pilar.titulo}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {pilar.texto}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
