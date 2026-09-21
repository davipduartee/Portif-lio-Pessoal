import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { nav, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-[42ch] text-sm leading-relaxed text-muted">
              Ecossistema de marketing e tecnologia para concessionárias e revendas
              de veículos em {site.city} e todo o {site.stateName}.
            </p>
            <div className="flex items-center gap-2">
              {site.social.instagram ? (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} no Instagram`}
                  className="grid size-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-brand/60 hover:text-ink"
                >
                  <InstagramIcon className="size-4.5" />
                </a>
              ) : null}
              {site.social.linkedin ? (
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} no LinkedIn`}
                  className="grid size-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-brand/60 hover:text-ink"
                >
                  <LinkedinIcon className="size-4.5" />
                </a>
              ) : null}
            </div>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              Navegação
            </h2>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              Contato
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="flex w-fit items-center gap-2.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <Mail className="size-4 shrink-0 text-brand" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <Phone className="size-4 shrink-0 text-brand" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <p className="flex items-center gap-2.5 text-sm text-muted">
              <MapPin className="size-4 shrink-0 text-brand" aria-hidden="true" />
              {site.region}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>Feito em {site.region}.</p>
        </div>
      </Container>
    </footer>
  );
}
