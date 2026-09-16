import { contact, profile } from "../data/site";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs tracking-[0.14em] text-fg-faint uppercase">
          © {new Date().getFullYear()} · {profile.fullName}
        </p>
        <ul className="flex gap-6">
          <li>
            <a
              className="font-mono text-sm text-fg-muted hover:text-amber"
              href={contact.github}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="font-mono text-sm text-fg-muted hover:text-amber"
              href={contact.linkedin}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="font-mono text-sm text-fg-muted hover:text-amber"
              href={`mailto:${contact.email}`}
            >
              E-mail
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
