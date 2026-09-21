"use server";

import { Resend } from "resend";
import {
  CAMPO_ARMADILHA,
  CAMPO_INSTANTE,
  LeadSchema,
  errosPorCampo,
  lerCamposLead,
  type EstadoFormulario,
  type Lead,
} from "@/lib/schema";
import { site } from "@/lib/site";

/** Tempo minimo plausivel entre abrir e enviar o formulario. */
const MS_MINIMO_DE_PREENCHIMENTO = 2000;

export async function enviarLead(
  _estadoAnterior: EstadoFormulario,
  formData: FormData,
): Promise<EstadoFormulario> {
  const valores = lerCamposLead(formData);

  // Armadilha: campo invisivel para gente, irresistivel para bot.
  // Respondemos "sucesso" de proposito, para nao ensinar o bot a contornar.
  if (String(formData.get(CAMPO_ARMADILHA) ?? "").length > 0) {
    return { status: "sucesso" };
  }

  // Preenchimento instantaneo demais para ser humano. Quando o campo vem
  // vazio (navegador sem JS) nao ha o que checar, entao seguimos em frente.
  const instante = Number(formData.get(CAMPO_INSTANTE));
  if (
    Number.isFinite(instante) &&
    instante > 0 &&
    Date.now() - instante < MS_MINIMO_DE_PREENCHIMENTO
  ) {
    return { status: "sucesso" };
  }

  const resultado = LeadSchema.safeParse(valores);
  if (!resultado.success) {
    return {
      status: "erro",
      mensagem: "Confira os campos destacados.",
      erros: errosPorCampo(resultado.error),
      valores,
    };
  }

  const chave = process.env.RESEND_API_KEY;
  const destino = process.env.LEAD_TO_EMAIL ?? site.email;
  const remetente = process.env.LEAD_FROM_EMAIL;

  if (!chave || !remetente) {
    console.error(
      "[enviar-lead] RESEND_API_KEY e/ou LEAD_FROM_EMAIL ausentes: o lead não foi enviado.",
      resultado.data,
    );
    return {
      status: "erro",
      mensagem:
        "Não conseguimos enviar seu contato agora. Chame a gente no WhatsApp que respondemos na hora.",
      valores,
    };
  }

  try {
    const resend = new Resend(chave);
    const { error } = await resend.emails.send({
      from: remetente,
      to: destino,
      replyTo: resultado.data.email,
      subject: `Novo lead: ${resultado.data.concessionaria}`,
      text: corpoDoEmail(resultado.data),
    });

    if (error) {
      console.error("[enviar-lead] Resend recusou o envio:", error);
      return {
        status: "erro",
        mensagem:
          "Não conseguimos enviar seu contato agora. Chame a gente no WhatsApp que respondemos na hora.",
        valores,
      };
    }
  } catch (erro) {
    console.error("[enviar-lead] Falha inesperada no envio:", erro);
    return {
      status: "erro",
      mensagem:
        "Não conseguimos enviar seu contato agora. Chame a gente no WhatsApp que respondemos na hora.",
      valores,
    };
  }

  return { status: "sucesso" };
}

function corpoDoEmail(lead: Lead) {
  return [
    "Novo lead pelo site da DL Company",
    "",
    `Nome:           ${lead.nome}`,
    `Cargo:          ${lead.cargo}`,
    `Concessionária: ${lead.concessionaria}`,
    `E-mail:         ${lead.email}`,
    `WhatsApp:       ${lead.whatsapp}`,
    "",
    `Recebido em ${new Date().toLocaleString("pt-BR", {
      timeZone: "America/Fortaleza",
    })}`,
  ].join("\n");
}
