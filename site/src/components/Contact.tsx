import { contact } from "../data/site";
import { Container, SectionHeading } from "./ui";

const channels = [
  { label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
  { label: "GitHub", value: "/davipduartee", href: contact.github },
  { label: "LinkedIn", value: "/davipduartee", href: contact.linkedin },
];

export default function Contact() {
  return (
    <section id="contato" className="grid-bg py-16 sm:py-24">
      <Container>
        <SectionHeading index="04">Contato</SectionHeading>

        <p className="mt-6 max-w-2xl text-lg text-fg-muted">
          Estou aberto a estágio, projetos freelance e colaborações em código
          aberto. A resposta costuma sair no mesmo dia.
        </p>

        <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
          {channels.map((channel) => (
            <li key={channel.label} className="bg-ink">
              <a
                href={channel.href}
                className="group block h-full p-6 transition-colors hover:bg-ink-soft"
              >
                <p className="label">{channel.label}</p>
                <p className="mt-2 font-mono text-sm break-all text-fg group-hover:text-amber">
                  {channel.value}
                </p>
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${contact.email}?subject=Oportunidade%20para%20voc%C3%AA`}
          className="mt-10 inline-block border border-amber bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-85"
        >
          Enviar uma mensagem →
        </a>
      </Container>
    </section>
  );
}
