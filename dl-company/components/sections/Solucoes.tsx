import { Bot, Check, LayoutDashboard, Palette, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const solucoes = [
  {
    icone: Palette,
    titulo: "Criação Identitária no Digital",
    resumo:
      "Posicionamento premium e identidade visual que fazem sua revenda parecer o que ela é: referência na cidade.",
    entregas: [
      "Identidade visual e manual de marca",
      "Direção de arte para anúncios e redes",
      "Padrão de foto e vídeo para o estoque",
    ],
  },
  {
    icone: LayoutDashboard,
    titulo: "CRM de Leads próprio",
    resumo:
      "Um CRM desenhado para o funil automotivo — não um genérico adaptado às pressas para vender carro.",
    entregas: [
      "Funil do primeiro contato até a entrega",
      "Origem de cada lead, campanha por campanha",
      "Histórico e follow-up por vendedor",
    ],
  },
  {
    icone: Bot,
    titulo: "Automação com Inteligência Artificial",
    resumo:
      "Atendimento imediato no Instagram, WhatsApp e Messenger, qualificando o lead antes que ele esfrie.",
    entregas: [
      "Resposta em segundos, 24 horas por dia",
      "Qualificação automática: modelo, entrada, urgência",
      "Repasse ao vendedor no momento certo",
    ],
  },
  {
    icone: Target,
    titulo: "Gestão de Tráfego Pago",
    resumo:
      "Meta e Google Ads com foco em venda de veículo, não em curtida. Verba onde existe intenção de compra.",
    entregas: [
      "Campanhas por modelo e estágio de funil",
      "Públicos locais de São Luís e região",
      "Relatório ligado ao CRM, não só ao anúncio",
    ],
  },
];

export function Solucoes() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-24 border-t border-line py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Soluções"
            title="Quatro pilares que funcionam como um sistema só"
            description="Cada pilar resolve um gargalo da operação. Juntos, eles fecham o circuito entre o anúncio que atrai e o vendedor que entrega a chave."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solucoes.map((solucao, indice) => (
            <Reveal key={solucao.titulo} delay={(indice % 2) * 90}>
              <Card className="group h-full p-7 transition-colors duration-300 hover:border-brand/45 hover:bg-surface-2/60">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 transition-colors duration-300 group-hover:border-brand/50">
                    <solucao.icone className="size-5.5 text-brand-soft" aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="tabular font-display text-sm font-semibold text-muted/35 transition-colors duration-300 group-hover:text-brand/70"
                  >
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold">
                  {solucao.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {solucao.resumo}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                  {solucao.entregas.map((entrega) => (
                    <li
                      key={entrega}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                      {entrega}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href="#contato" size="lg">
            Montar meu ecossistema de vendas
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
