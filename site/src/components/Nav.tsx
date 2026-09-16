import { Link, useLocation } from "react-router-dom";
import { Container } from "./ui";

const items = [
  { href: "/#sobre", label: "sobre" },
  { href: "/#skills", label: "skills" },
  { href: "/#projetos", label: "projetos" },
  { href: "/#contato", label: "contato" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link
          to="/"
          className="shrink-0 font-mono text-sm font-bold whitespace-nowrap text-amber"
          aria-label="Ir para o início"
        >
          &lt;davi.dev /&gt;
        </Link>

        <nav aria-label="Seções do site">
          <ul className="flex gap-3 sm:gap-8">
            {items.map((item) => (
              <li key={item.href}>
                {/* Fora da home os âncoras precisam voltar para ela antes de rolar. */}
                <a
                  href={onHome ? item.href.replace("/", "") : item.href}
                  className="font-mono text-xs text-fg-muted transition-colors hover:text-amber sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
