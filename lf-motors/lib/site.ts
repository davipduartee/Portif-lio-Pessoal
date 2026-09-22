/**
 * Fonte unica de verdade dos dados institucionais da LF Motors.
 *
 * REGRA DO PROJETO: nenhum hifen ou travessao no texto visivel. Telefone, CEP
 * e cidade ja entram aqui no formato final, porque e daqui que a pagina le.
 * O script scripts/sem-hifens.ts confere este arquivo inteiro.
 *
 * TODO(cliente): trocar os campos marcados pelos dados reais antes de publicar.
 */
export const site = {
  nome: "LF Motors",
  assinatura: "Veiculos premium e superesportivos",
  descricao:
    "Loja de veiculos premium e superesportivos em Sao Luis. Procedencia conferida, laudo cautelar e transferencia acompanhada do inicio ao fim.",

  /** TODO(cliente): dominio definitivo. Alimenta canonical, sitemap e Open Graph. */
  url: "https://www.lfmotors.com.br",

  cidade: "São Luís",
  estado: "MA",
  estadoNome: "Maranhão",
  regiao: "São Luís, MA",

  /** TODO(cliente): endereco completo. Temos apenas o CEP. */
  logradouro: "Avenida a confirmar, 000",
  bairro: "Bairro a confirmar",
  cep: "65055 378",

  /**
   * TODO(cliente): confirmar se este numero recebe WhatsApp. O formato que voce
   * passou tem oito digitos depois do DDD, entao pode faltar o nove inicial.
   */
  telefoneVisivel: "+55 (98) 9243 9118",
  telefoneE164: "+559892439118",
  whatsapp: "559892439118",
  mensagemWhatsapp:
    "Olá! Vim pelo site e quero falar sobre um veículo do estoque da LF Motors.",

  /**
   * TODO(cliente): email comercial real.
   * ATENCAO: se o dominio oficial tiver hifen (lf-motors.com), ele aparece no
   * texto visivel e conflita com a regra do projeto. Endereco de email e de
   * site nao podem ser reescritos sem quebrar. Precisamos decidir juntos.
   */
  email: "contato@lfmotors.com.br",

  /** TODO(cliente): horarios reais de atendimento. */
  horarios: [
    { dias: "Segunda a sexta", horas: "09h às 18h" },
    { dias: "Sábado", horas: "09h às 13h" },
  ],

  social: {
    /** TODO(cliente): perfis reais. Deixe vazio para ocultar o link. */
    instagram: "https://instagram.com/lfmotors",
  },

  /**
   * TODO(cliente): foto de abertura, em public/. Enquanto nao houver,
   * a Home desenha um campo de grafite com grao no lugar.
   */
  fotoAbertura: null as string | null,
} as const;

export const navegacao = [
  { href: "#inicio", rotulo: "Home" },
  { href: "#empresa", rotulo: "Empresa" },
  { href: "#estoque", rotulo: "Estoque" },
  { href: "#galeria", rotulo: "Galeria" },
  { href: "#localizacao", rotulo: "Localização" },
  { href: "#contato", rotulo: "Contato" },
] as const;

export function linkWhatsapp(mensagem: string = site.mensagemWhatsapp) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
