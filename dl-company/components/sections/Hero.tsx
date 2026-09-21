import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

/**
 * Provas de capacidade — afirmacoes verificaveis sobre como trabalhamos.
 * TODO(cliente): quando houver numeros reais (leads/mes, tempo medio de
 * resposta, ROAS), trocamos esta faixa por uma barra de metricas.
 */
const provas = [
  "Funil desenhado para o setor automotivo",
  "Resposta ao lead em segundos, 24/7",
  "CRM próprio, não terceirizado",
  `Time baseado em ${site.region}`,
];

const leadsDemo = [
  {
    veiculo: "Hilux SW4 2023",
    origem: "Meta Ads",
    tempo: "há 4s",
    status: "IA respondeu",
    cor: "text-success",
    ponto: "bg-success",
  },
  {
    veiculo: "Onix Plus 2022",
    origem: "Instagram Direct",
    tempo: "há 12s",
    status: "Lead qualificado",
    cor: "text-brand-soft",
    ponto: "bg-brand",
  },
  {
    veiculo: "Compass 2024",
    origem: "Google Ads",
    tempo: "há 31s",
    status: "Test-drive agendado",
    cor: "text-cta-soft",
    ponto: "bg-cta",
  },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-28 sm:pt-36 md:pb-28">
      {/* fundo: grid tecnologico + brilhos. Tudo CSS, nenhuma imagem carregada. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-1/2 top-[-20rem] size-[46rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />
        <div className="absolute right-[-12rem] top-52 size-[28rem] rounded-full bg-cta/8 blur-[130px]" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <span className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-medium text-muted sm:text-sm">
              <span aria-hidden="true" className="pulse-dot size-2 rounded-full bg-success" />
              Parceira tecnológica de concessionárias em {site.city}
            </span>

            <h1
              className="rise mt-6 text-[2.25rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
              style={{ animationDelay: "80ms" }}
            >
              Tecnologia que faz sua concessionária em {site.city}{" "}
              <span className="bg-gradient-to-r from-brand-soft to-brand bg-clip-text text-transparent">
                vender mais todo mês.
              </span>
            </h1>

            <p
              className="rise mt-6 max-w-[58ch] text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "140ms" }}
            >
              Unimos identidade digital, tráfego pago, atendimento com inteligência
              artificial e um CRM próprio para o setor automotivo — do primeiro
              clique à chave na mão.
            </p>

            <div
              className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "200ms" }}
            >
              <Button href="#contato" size="lg" className="w-full sm:w-auto">
                Acelerar Minhas Vendas
                <ArrowRight className="size-4.5" aria-hidden="true" />
              </Button>
              <Button
                href="#solucoes"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Ver como funciona
              </Button>
            </div>

            <ul
              className="rise mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2"
              style={{ animationDelay: "260ms" }}
            >
              {provas.map((prova) => (
                <li key={prova} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {prova}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise" style={{ animationDelay: "320ms" }}>
            <HeroPanel />
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Mock ilustrativo do painel de leads do CRM DL. */
function HeroPanel() {
  return (
    <figure className="m-0">
      <div className="rounded-2xl border border-line bg-surface/80 p-4 shadow-[0_30px_80px_-40px_#000] backdrop-blur sm:p-5">
        <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
          <p className="font-display text-sm font-semibold">CRM DL · Leads</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[0.7rem] font-medium text-success">
            <span aria-hidden="true" className="pulse-dot size-1.5 rounded-full bg-success" />
            tempo real
          </span>
        </div>

        <ul className="flex flex-col divide-y divide-line">
          {leadsDemo.map((lead) => (
            <li
              key={lead.veiculo}
              className="flex items-center justify-between gap-3 py-3.5"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{lead.veiculo}</p>
                <p className="mt-0.5 truncate text-xs text-muted">
                  {lead.origem} · <span className="tabular">{lead.tempo}</span>
                </p>
              </div>
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 text-xs font-medium ${lead.cor}`}
              >
                <span aria-hidden="true" className={`size-1.5 rounded-full ${lead.ponto}`} />
                {lead.status}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-night/60 px-4 py-3">
          <p className="text-xs text-muted">Nenhum lead esperando resposta</p>
          <p className="font-display text-sm font-semibold text-cta">24/7</p>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-muted">
        Ilustração do painel de leads do CRM DL.
      </figcaption>
    </figure>
  );
}
