import { useState } from "react";
import { contact, profile } from "../data/site";
import { Container, Panel } from "./ui";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="sobre" className="grid-bg border-b border-line py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {profile.available && (
            <p className="inline-flex items-center gap-2 border border-amber-dim px-3 py-1.5 font-mono text-xs tracking-[0.16em] text-amber uppercase">
              <span
                aria-hidden
                className="inline-block size-2 rounded-full bg-green-400"
              />
              Disponível para projetos
            </p>
          )}

          <h1 className="mt-6 font-mono text-5xl leading-none font-bold tracking-tight sm:text-7xl">
            <span className="block text-fg">{profile.name}</span>
            <span className="block text-amber">{profile.surname}</span>
          </h1>

          <p className="mt-5 flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-amber-dim" />
            <span className="label">{profile.role}</span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {profile.bio}
          </p>

          {/* O CTA que faltava: o aviso de disponibilidade agora tem para onde levar. */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="border border-amber bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-85"
            >
              Falar comigo →
            </a>
            <a
              href={contact.resume}
              className="border border-amber-dim px-5 py-2.5 font-mono text-sm text-amber transition-colors hover:bg-ink-soft"
            >
              Baixar currículo
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
            <Panel label="Loc">{profile.location}</Panel>
            <Panel label="Faculdade">{profile.school}</Panel>
            <Panel label="Foco">{profile.focus}</Panel>
            <Panel label="Hobby">🎮 {profile.hobby}</Panel>
          </dl>
        </div>

        {/* Moldura deslocada do Figma, agora alinhada à foto nos dois eixos. */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          <div
            aria-hidden
            className="absolute -top-4 -left-4 h-full w-full border border-amber-dim"
          />
          <figure className="relative border border-amber">
            {photoFailed ? (
              <div
                className="grid-bg flex aspect-[4/5] w-full items-center justify-center bg-ink-soft"
                role="img"
                aria-label={`Foto de ${profile.fullName} ainda não adicionada`}
              >
                <span className="font-mono text-4xl font-bold text-amber-dim">
                  {profile.name[0]}
                  {profile.surname[0]}
                </span>
              </div>
            ) : (
              <img
                src={profile.photo}
                alt={`${profile.fullName} trabalhando no computador`}
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
                onError={() => setPhotoFailed(true)}
              />
            )}
            <figcaption className="flex items-center justify-between border-t border-amber-dim bg-ink px-3 py-2 font-mono text-xs tracking-[0.14em] text-fg-muted uppercase">
              <span className="text-amber">Player_01</span>
              <span>◆ Oxygeni Hub</span>
            </figcaption>
          </figure>
          <p className="absolute -top-3 right-3 border border-amber bg-ink px-2 py-1 font-mono text-xs tracking-[0.14em] text-amber uppercase">
            {profile.focus}
          </p>
        </div>
      </Container>
    </section>
  );
}
