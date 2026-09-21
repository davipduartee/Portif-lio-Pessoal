"use client";

import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { enviarLead } from "@/app/actions/enviar-lead";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import {
  CAMPO_ARMADILHA,
  CAMPO_INSTANTE,
  LeadSchema,
  camposLead,
  errosPorCampo,
  estadoInicial,
  formatarWhatsapp,
  lerCamposLead,
  type CampoLead,
} from "@/lib/schema";
import { whatsappUrl } from "@/lib/site";

export function FormularioLead() {
  const [estado, acao, pendente] = useActionState(enviarLead, estadoInicial);
  const [errosCliente, setErrosCliente] = useState<Partial<Record<CampoLead, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const instanteRef = useRef<HTMLInputElement>(null);

  // Marcado no navegador (e nao na renderizacao estatica) para que o valor
  // seja o momento real em que a pessoa abriu o formulario.
  useEffect(() => {
    if (instanteRef.current) instanteRef.current.value = String(Date.now());
  }, []);

  const erros = { ...(estado.erros ?? {}), ...errosCliente };

  function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    const resultado = LeadSchema.safeParse(
      lerCamposLead(new FormData(evento.currentTarget)),
    );

    if (!resultado.success) {
      evento.preventDefault();
      const encontrados = errosPorCampo(resultado.error);
      setErrosCliente(encontrados);

      const primeiroComErro = camposLead.find((campo) => encontrados[campo]);
      if (primeiroComErro) {
        formRef.current
          ?.querySelector<HTMLInputElement>(`[name="${primeiroComErro}"]`)
          ?.focus();
      }
      return;
    }

    setErrosCliente({});
  }

  function limparErro(campo: CampoLead) {
    setErrosCliente((atuais) => {
      if (!atuais[campo]) return atuais;
      const proximos = { ...atuais };
      delete proximos[campo];
      return proximos;
    });
  }

  if (estado.status === "sucesso") {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-card border border-success/30 bg-success/5 px-6 py-12 text-center"
        role="status"
      >
        <span className="grid size-14 place-items-center rounded-full bg-success/15">
          <CheckCircle2 className="size-7 text-success" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold">Contato recebido.</h3>
        <p className="max-w-[40ch] text-sm leading-relaxed text-muted">
          Vamos analisar a operação da sua concessionária e retornar pelo canal
          que você informou. Se preferir adiantar a conversa, chame no WhatsApp.
        </p>
        <Button href={whatsappUrl()} variant="secondary" target="_blank" rel="noopener noreferrer">
          <WhatsappIcon className="size-4.5" />
          Falar agora no WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={acao}
      onSubmit={aoEnviar}
      noValidate
      className="flex flex-col gap-5 rounded-card border border-line bg-surface/60 p-6 sm:p-8"
    >
      {/* armadilha para bots: fora da tela, sem foco e sem leitura por leitor de tela */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={CAMPO_ARMADILHA}>Não preencha este campo</label>
        <input id={CAMPO_ARMADILHA} name={CAMPO_ARMADILHA} type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={instanteRef} name={CAMPO_INSTANTE} type="hidden" defaultValue="" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="nome"
          name="nome"
          label="Nome"
          placeholder="Seu nome"
          autoComplete="name"
          defaultValue={estado.valores?.nome ?? ""}
          error={erros.nome}
          onChange={() => limparErro("nome")}
        />
        <Input
          id="cargo"
          name="cargo"
          label="Cargo"
          placeholder="Diretor, gerente comercial…"
          autoComplete="organization-title"
          defaultValue={estado.valores?.cargo ?? ""}
          error={erros.cargo}
          onChange={() => limparErro("cargo")}
        />
      </div>

      <Input
        id="concessionaria"
        name="concessionaria"
        label="Nome da concessionária"
        placeholder="Nome da sua revenda ou concessionária"
        autoComplete="organization"
        defaultValue={estado.valores?.concessionaria ?? ""}
        error={erros.concessionaria}
        onChange={() => limparErro("concessionaria")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          label="E-mail"
          placeholder="voce@concessionaria.com.br"
          autoComplete="email"
          defaultValue={estado.valores?.email ?? ""}
          error={erros.email}
          onChange={() => limparErro("email")}
        />
        <Input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          label="WhatsApp"
          placeholder="(98) 98765-4321"
          autoComplete="tel"
          defaultValue={estado.valores?.whatsapp ?? ""}
          error={erros.whatsapp}
          onChange={(evento) => {
            evento.target.value = formatarWhatsapp(evento.target.value);
            limparErro("whatsapp");
          }}
        />
      </div>

      {estado.status === "erro" && estado.mensagem ? (
        <p role="alert" className="rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
          {estado.mensagem}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={pendente} className="mt-1 w-full">
        {pendente ? (
          <>
            <Loader2 className="size-4.5 animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="size-4.5" aria-hidden="true" />
            Quero acelerar minhas vendas
          </>
        )}
      </Button>

      <p className="text-center text-xs leading-relaxed text-muted">
        Seus dados são usados apenas para esse contato comercial. Sem spam, sem
        repasse para terceiros.
      </p>
    </form>
  );
}
