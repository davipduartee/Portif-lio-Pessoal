"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { navegacao, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);

  // fundo solido so depois que a pagina rola: no topo o header flutua sobre a foto
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // menu aberto: trava o scroll, fecha no Escape e prende o foco no painel
  useEffect(() => {
    if (!aberto) return;

    const painel = painelRef.current;
    const focaveis = painel
      ? painel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      : null;

    focaveis?.[0]?.focus();

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        setAberto(false);
        // devolve o foco a quem abriu, senao quem usa teclado cai no comeco da pagina
        botaoRef.current?.focus();
        return;
      }
      if (evento.key !== "Tab" || !focaveis || focaveis.length === 0) return;

      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];

      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primeiro.focus();
      }
    };

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", aoTeclar);

    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  function fechar() {
    setAberto(false);
    botaoRef.current?.focus();
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-colors duration-500",
          rolou ? "border-line bg-ink/95" : "border-transparent bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between gap-6">
            <a href="#inicio" aria-label="LF Motors, ir para o início">
              <Logo />
            </a>

            <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
              {navegacao.slice(1).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-bone-dim transition-colors duration-300 hover:text-bone"
                >
                  {item.rotulo}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="#contato" variante="contorno">
                Falar com a loja
              </Button>
            </div>

            <button
              ref={botaoRef}
              type="button"
              onClick={() => setAberto(true)}
              aria-expanded={aberto}
              aria-controls="menu"
              aria-label="Abrir menu"
              className="grid size-11 place-items-center text-bone lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      {/* painel de tela cheia: fica fora do <header> para nao herdar seu contexto */}
      <div
        id="menu"
        ref={painelRef}
        hidden={!aberto}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden"
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={fechar}
              aria-label="Fechar menu"
              className="grid size-11 place-items-center text-bone"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
        </Container>

        <Container className="flex flex-1 flex-col justify-center gap-1 pb-16">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={fechar}
              className="border-b border-line py-5 font-display text-3xl text-bone transition-colors duration-300 hover:text-bone-dim"
            >
              {item.rotulo}
            </a>
          ))}

          <div className="mt-10 flex flex-col gap-2">
            <span className="rotulo">Atendimento</span>
            <a href={`tel:${site.telefoneE164}`} className="text-lg text-bone">
              {site.telefoneVisivel}
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
