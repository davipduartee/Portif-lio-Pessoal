/**
 * Fonte unica de verdade para dados institucionais da DL Company.
 * Trocar telefone, e-mail ou redes e mexer aqui — nunca nos componentes.
 *
 * TODO(cliente): substituir os placeholders marcados abaixo pelos dados reais
 * antes do deploy em producao.
 */
export const site = {
  name: "DL Company",
  tagline: "Tecnologia para concessionárias",
  description:
    "A DL Company une identidade digital, tráfego pago, atendimento com IA e CRM próprio para escalar as vendas de concessionárias e revendas de veículos em São Luís (MA).",

  /** TODO(cliente): dominio definitivo. Usado em canonical, OG e sitemap. */
  url: "https://www.dlcompany.com.br",

  city: "São Luís",
  state: "MA",
  stateName: "Maranhão",
  region: "São Luís – MA",

  /** TODO(cliente): e-mail comercial real. */
  email: "contato@dlcompany.com.br",

  /** TODO(cliente): telefone real. phoneE164 alimenta o link tel: e o JSON-LD. */
  phoneDisplay: "(98) 98000-0000",
  phoneE164: "+5598980000000",

  /** TODO(cliente): numero real do WhatsApp comercial (formato 55 + DDD + numero). */
  whatsapp: "5598980000000",
  whatsappMessage:
    "Olá! Vim pelo site e quero entender como a DL Company pode escalar as vendas da minha concessionária.",

  social: {
    /** TODO(cliente): handles reais. Deixe como null para ocultar o link. */
    instagram: "https://instagram.com/dlcompany",
    linkedin: "https://linkedin.com/company/dlcompany",
  },
} as const;

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#diferencial", label: "Diferencial" },
  { href: "#contato", label: "Contato" },
] as const;

/** Link de WhatsApp com mensagem pre-preenchida. */
export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
