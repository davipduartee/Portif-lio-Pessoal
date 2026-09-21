"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // fundo solido so depois que a pagina rola: no topo o header some sobre o hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // menu aberto: trava o scroll do corpo e fecha no Escape
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-line bg-night/85 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-18 items-center justify-between gap-4">
            <a href="#inicio" aria-label="DL Company — ir para o início">
              <Logo />
            </a>

            <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="#contato" size="sm">
                Falar com especialista
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid size-11 place-items-center rounded-xl border border-line bg-surface/70 text-ink transition-colors hover:border-brand/60 lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/*
        Scrim e painel ficam FORA do <header>: o backdrop-blur dele cria um
        bloco de contencao, e filhos position:fixed passariam a se posicionar
        em relacao ao header em vez da viewport.
      */}
      <div
        hidden={!open}
        onClick={close}
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-night/80 backdrop-blur-sm lg:hidden"
      />

      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-18 z-45 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-line bg-night shadow-[0_28px_60px_-30px_#000] lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-5">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-xl px-3 py-3.5 text-base text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contato" size="lg" className="mt-3 w-full" onClick={close}>
            Falar com especialista
          </Button>
        </Container>
      </div>
    </>
  );
}
