import * as z from "zod/mini";

/**
 * Schema unico do lead B2B, usado nos dois lados: validacao imediata no
 * cliente e validacao de novo no servidor (a Server Action e alcancavel por
 * POST direto, entao nunca confiamos so no navegador).
 *
 * Usamos "zod/mini" de proposito: a variante padrao do zod entra inteira no
 * bundle do cliente (~94 kB gzip, mais de um terco do JS da pagina), enquanto
 * a mini so carrega as regras realmente usadas. Mesmo schema, mesma checagem.
 */
export const LeadSchema = z.object({
  nome: z
    .string()
    .check(
      z.minLength(2, "Informe seu nome."),
      z.maxLength(120, "Nome muito longo."),
    ),
  cargo: z
    .string()
    .check(
      z.minLength(2, "Informe seu cargo na empresa."),
      z.maxLength(80, "Cargo muito longo."),
    ),
  concessionaria: z
    .string()
    .check(
      z.minLength(2, "Informe o nome da concessionária."),
      z.maxLength(140, "Nome muito longo."),
    ),
  email: z.email("E-mail inválido. Confira o endereço."),
  whatsapp: z
    .string()
    .check(
      z.refine((valor) => {
        const digitos = valor.replace(/\D/g, "");
        return digitos.length === 10 || digitos.length === 11;
      }, "WhatsApp inválido. Use DDD + número, como (98) 98765-4321."),
    ),
});

export type Lead = z.infer<typeof LeadSchema>;
export type CampoLead = keyof Lead;

export const camposLead = [
  "nome",
  "cargo",
  "concessionaria",
  "email",
  "whatsapp",
] as const satisfies readonly CampoLead[];

/** Nome do campo-armadilha: preenchido = bot. */
export const CAMPO_ARMADILHA = "site_empresa";

/** Campo com o instante em que o formulario foi montado no navegador. */
export const CAMPO_INSTANTE = "montado_em";

export type EstadoFormulario = {
  status: "inicial" | "sucesso" | "erro";
  mensagem?: string;
  erros?: Partial<Record<CampoLead, string>>;
  valores?: Partial<Record<CampoLead, string>>;
};

export const estadoInicial: EstadoFormulario = { status: "inicial" };

/**
 * Extrai os campos do lead de um FormData, ja sem espacos nas pontas —
 * e por isso que o schema nao precisa de transform.
 */
export function lerCamposLead(formData: FormData): Record<CampoLead, string> {
  return Object.fromEntries(
    camposLead.map((campo) => [campo, String(formData.get(campo) ?? "").trim()]),
  ) as Record<CampoLead, string>;
}

type ProblemaDeValidacao = { path: PropertyKey[]; message: string };

/** Converte os erros do zod no formato usado pelo formulario. */
export function errosPorCampo(erro: { issues: readonly ProblemaDeValidacao[] }) {
  const resultado: Partial<Record<CampoLead, string>> = {};
  for (const problema of erro.issues) {
    const campo = problema.path[0] as CampoLead | undefined;
    if (campo && !resultado[campo]) resultado[campo] = problema.message;
  }
  return resultado;
}

/** (98) 98765-4321 — formata enquanto a pessoa digita. */
export function formatarWhatsapp(valor: string) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length <= 2) return digitos;
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  if (digitos.length <= 10) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
  }
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}
