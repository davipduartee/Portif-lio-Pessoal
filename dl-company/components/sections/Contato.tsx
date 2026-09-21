import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { FormularioLead } from "@/components/sections/FormularioLead";
import { site, whatsappUrl } from "@/lib/site";

const passos = [
  "Você preenche o formulário — leva menos de um minuto.",
  "Conversamos pelo canal que preferir: WhatsApp ou e-mail.",
  "Diagnóstico da operação e proposta, sem compromisso.",
];

export function Contato() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-14rem] top-10 -z-10 size-[34rem] rounded-full bg-brand/10 blur-[140px]"
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Contato"
              title={
                <>
                  Vamos olhar a operação da{" "}
                  <span className="bg-gradient-to-r from-brand-soft to-brand bg-clip-text text-transparent">
                    sua concessionária.
                  </span>
                </>
              }
              description="Conte quem você é e qual é a revenda. A partir daí a conversa é sobre números: de onde vêm seus leads hoje e onde eles estão se perdendo."
            />

            <ol className="mt-9 flex flex-col gap-4">
              {passos.map((passo, indice) => (
                <li key={passo} className="flex items-start gap-3.5">
                  <span className="tabular mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/10 font-display text-xs font-semibold text-brand-soft">
                    {indice + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{passo}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8">
              <p className="text-sm font-medium text-ink">
                Prefere falar direto?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={whatsappUrl()}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon className="size-4.5" />
                  WhatsApp {site.phoneDisplay}
                </Button>
                <Button href={`mailto:${site.email}`} variant="secondary">
                  <Mail className="size-4.5" aria-hidden="true" />
                  {site.email}
                </Button>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="size-4 shrink-0 text-brand" aria-hidden="true" />
                Atendemos {site.city} e todo o {site.stateName}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <FormularioLead />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
