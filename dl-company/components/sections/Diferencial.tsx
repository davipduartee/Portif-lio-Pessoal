import {
  ArrowDown,
  ArrowRight,
  Bot,
  Check,
  LayoutDashboard,
  Target,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const etapas = [
  {
    icone: Target,
    titulo: "O tráfego traz o lead certo",
    texto:
      "Anúncios segmentados por modelo e por estágio de compra atraem quem está pesquisando carro agora — não quem clicou sem querer.",
  },
  {
    icone: Bot,
    titulo: "A IA responde antes de ele esfriar",
    texto:
      "Em segundos a automação puxa conversa, entende o que a pessoa procura e agenda. Às 22h, no domingo, no feriado.",
  },
  {
    icone: LayoutDashboard,
    titulo: "O vendedor recebe pronto para fechar",
    texto:
      "O lead cai no CRM já com modelo de interesse, entrada e urgência. Seu time gasta tempo vendendo, não triando contato frio.",
  },
];

const comparativo = [
  {
    antes: "O lead chega às 22h e fica esperando",
    depois: "Respondido em segundos, a qualquer hora",
  },
  {
    antes: "O gerente descobre o contato no dia seguinte",
    depois: "Lead já qualificado esperando no CRM",
  },
  {
    antes: "A concorrência responde primeiro",
    depois: "Sua equipe fala primeiro",
  },
  {
    antes: "Ninguém sabe qual anúncio gerou a venda",
    depois: "Origem rastreada da campanha até a entrega",
  },
];

export function Diferencial() {
  return (
    <section
      id="diferencial"
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-brand/8 blur-[140px]"
      />

      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Diferencial competitivo"
            title={
              <>
                Enquanto a concorrência responde amanhã, você já agendou o{" "}
                <span className="bg-gradient-to-r from-brand-soft to-brand bg-clip-text text-transparent">
                  test-drive.
                </span>
              </>
            }
            description="Tráfego, inteligência artificial e CRM não são três serviços soltos aqui. São um circuito fechado — e é isso que derruba o tempo de resposta a praticamente zero."
          />
        </Reveal>

        {/* fluxo do lead: trafego -> IA -> CRM */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {etapas.map((etapa, indice) => (
            <Reveal key={etapa.titulo} delay={indice * 90} className="relative">
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10">
                    <etapa.icone className="size-5 text-brand-soft" aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="tabular font-display text-sm font-semibold text-muted/35"
                  >
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {etapa.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {etapa.texto}
                </p>
              </Card>

              {indice < etapas.length - 1 ? (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 hidden size-8 -translate-y-1/2 translate-x-[calc(50%+0.75rem)] place-items-center rounded-full border border-line bg-night text-brand-soft md:grid"
                  >
                    <ArrowRight className="size-4" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 left-1/2 grid size-7 -translate-x-1/2 place-items-center rounded-full border border-line bg-night text-brand-soft md:hidden"
                  >
                    <ArrowDown className="size-3.5" />
                  </span>
                </>
              ) : null}
            </Reveal>
          ))}
        </div>

        {/* antes x depois */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-line/80 bg-surface/30">
              <h3 className="font-display text-base font-semibold text-muted">
                Sem um ecossistema integrado
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {comparativo.map((linha) => (
                  <li key={linha.antes} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-muted/10">
                      <X className="size-3 text-muted" aria-hidden="true" />
                    </span>
                    {linha.antes}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={90}>
            <Card className="h-full border-brand/30 bg-brand/5">
              <h3 className="font-display text-base font-semibold text-ink">
                Com a DL Company
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {comparativo.map((linha) => (
                  <li key={linha.depois} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/15">
                      <Check className="size-3 text-success" aria-hidden="true" />
                    </span>
                    {linha.depois}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-col items-center gap-6 rounded-card border border-line bg-surface/50 px-6 py-10 text-center sm:px-10">
            <p className="max-w-[46ch] font-display text-xl font-semibold leading-snug sm:text-2xl">
              Lead que espera resposta não vira venda. Vira venda{" "}
              <span className="text-cta">do concorrente.</span>
            </p>
            <p className="max-w-[56ch] text-sm leading-relaxed text-muted sm:text-base">
              O circuito Tráfego + IA + CRM existe para que nenhum contato da sua
              concessionária fique parado esperando alguém lembrar dele.
            </p>
            <Button href="#contato" size="lg">
              Fechar essa brecha na minha operação
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
