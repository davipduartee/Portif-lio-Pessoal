/**
 * Estoque da loja.
 *
 * TODO(cliente): estes veiculos sao EXEMPLOS de estrutura, com dados
 * inventados para o layout poder ser avaliado. Troque por unidades reais e
 * coloque as fotos em public/estoque/<slug>/ antes de publicar.
 *
 * REGRA DO PROJETO: nada de hifen no texto visivel. Vale tambem para nome de
 * marca, por isso "Mercedes Benz" aparece sem o hifen original.
 */
export type Veiculo = {
  slug: string;
  marca: string;
  modelo: string;
  ano: number;
  km: number;
  cambio: string;
  motor: string;
  carroceria: string;
  blindado: boolean;
  /** Em reais. Quando for null, a vitrine mostra "Sob consulta". */
  preco: number | null;
  destaque: boolean;
  fotos: string[];
};

export const estoque: Veiculo[] = [
  {
    slug: "jeep-commander-overland",
    marca: "Jeep",
    modelo: "Commander Overland",
    ano: 2023,
    km: 38000,
    cambio: "Automático",
    motor: "2.0 turbodiesel",
    carroceria: "SUV",
    blindado: true,
    preco: 329900,
    destaque: true,
    fotos: [],
  },
  {
    slug: "volkswagen-golf-gti",
    marca: "Volkswagen",
    modelo: "Golf GTI",
    ano: 2021,
    km: 42000,
    cambio: "Automático",
    motor: "2.0 TSI",
    carroceria: "Hatch",
    blindado: false,
    preco: 219900,
    destaque: true,
    fotos: [],
  },
  {
    slug: "porsche-718-cayman",
    marca: "Porsche",
    modelo: "718 Cayman",
    ano: 2022,
    km: 12000,
    cambio: "Automático PDK",
    motor: "2.0 boxer",
    carroceria: "Cupê",
    blindado: false,
    preco: null,
    destaque: true,
    fotos: [],
  },
  {
    slug: "bmw-x5-xdrive30d",
    marca: "BMW",
    modelo: "X5 xDrive30d",
    ano: 2022,
    km: 55000,
    cambio: "Automático",
    motor: "3.0 turbodiesel",
    carroceria: "SUV",
    blindado: false,
    preco: 489900,
    destaque: false,
    fotos: [],
  },
  {
    slug: "mercedes-benz-c300",
    marca: "Mercedes Benz",
    modelo: "C300 AMG Line",
    ano: 2021,
    km: 61000,
    cambio: "Automático",
    motor: "2.0 turbo",
    carroceria: "Sedã",
    blindado: true,
    preco: 379900,
    destaque: false,
    fotos: [],
  },
  {
    slug: "toyota-hilux-srx",
    marca: "Toyota",
    modelo: "Hilux SRX Plus",
    ano: 2023,
    km: 47000,
    cambio: "Automático",
    motor: "2.8 turbodiesel",
    carroceria: "Picape",
    blindado: false,
    preco: 289900,
    destaque: false,
    fotos: [],
  },
];

/** Marcas presentes no estoque, em ordem alfabetica, para os filtros. */
export function marcasDoEstoque() {
  return [...new Set(estoque.map((veiculo) => veiculo.marca))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );
}

const formatadorInteiro = new Intl.NumberFormat("pt-BR");

export function formatarKm(km: number) {
  return `${formatadorInteiro.format(km)} km`;
}

export function formatarPreco(preco: number | null) {
  if (preco === null) return "Sob consulta";
  return `R$ ${formatadorInteiro.format(preco)}`;
}

/** Linha de ficha tecnica: 2023 · 38.000 km · Automático · 2.0 turbodiesel */
export function fichaTecnica(veiculo: Veiculo) {
  return [
    String(veiculo.ano),
    formatarKm(veiculo.km),
    veiculo.cambio,
    veiculo.motor,
  ].join(" · ");
}
