import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { navegacao, site } from "@/lib/site";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-[40ch] text-sm leading-relaxed text-bone-dim">
              {site.assinatura} em {site.cidade}. Estoque enxuto, procedência
              conferida e atendimento que continua depois da entrega.
            </p>
            {site.social.instagram ? (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
              >
                Instagram
              </a>
            ) : null}
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3.5">
            <h2 className="rotulo">Navegação</h2>
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
              >
                {item.rotulo}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3.5">
            <h2 className="rotulo">Contato</h2>
            <a
              href={`tel:${site.telefoneE164}`}
              className="w-fit text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
            >
              {site.telefoneVisivel}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="w-fit text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
            >
              {site.email}
            </a>
            <address className="text-sm not-italic leading-relaxed text-bone-dim">
              {site.logradouro}
              <br />
              {site.bairro}, CEP {site.cep}
              <br />
              {site.regiao}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-7 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>
          <p>{site.regiao}</p>
        </div>
      </Container>
    </footer>
  );
}
