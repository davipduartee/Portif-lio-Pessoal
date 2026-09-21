# DL Company — site institucional

Landing page de conversão B2B da **DL Company**, parceira tecnológica de
concessionárias e revendas de veículos em São Luís (MA).

O site tem dois objetivos: captar leads qualificados (donos e gerentes de
concessionária) e ranquear em buscas locais de São Luís.

## Stack

- **Next.js 16** (App Router, Turbopack) — todas as rotas pré-renderizadas como estáticas
- **Tailwind CSS 4** — tokens de design declarados em `app/globals.css`
- **TypeScript**, **zod/mini** (validação), **resend** (envio dos leads), **lucide-react** (ícones)

Sem Radix/shadcn e sem biblioteca de animação: os componentes de UI são nativos
e acessíveis, e as animações são CSS + `IntersectionObserver`. O estado inicial
do *reveal* fica sob `@media (scripting: enabled)`, então **sem JavaScript o
conteúdo aparece normalmente** em vez de ficar invisível.

A validação usa `zod/mini` em vez do zod padrão: o zod completo entrava inteiro
no bundle do cliente (94 kB gzip, mais de um terço do JS da página). Mesmo
schema, mesmas regras, 74 kB a menos. Peso atual da página: **~199 kB de JS
gzip**, que é o piso do React 19 + App Router.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
npx tsc --noEmit # checagem de tipos
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Para quê |
|---|---|
| `RESEND_API_KEY` | Chave da [Resend](https://resend.com) que envia os leads |
| `LEAD_FROM_EMAIL` | Remetente — precisa ser de um domínio verificado na Resend |
| `LEAD_TO_EMAIL` | Caixa que recebe os leads (padrão: o e-mail de `lib/site.ts`) |

Sem essas variáveis o formulário continua validando e **não quebra**: ele
responde com uma mensagem amigável apontando o WhatsApp e registra o lead no
log do servidor.

## Onde mexer

| Quero mudar | Arquivo |
|---|---|
| Telefone, e-mail, WhatsApp, redes, domínio | `lib/site.ts` |
| Paleta, tipografia, animações | `app/globals.css` |
| Conteúdo de uma seção | `components/sections/` |
| Header, footer, logo | `components/layout/` |
| Campos e mensagens do formulário | `lib/schema.ts` |
| Envio do lead | `app/actions/enviar-lead.ts` |
| Dados estruturados do Google | `lib/jsonLd.ts` |

## Antes de publicar

Os pontos marcados com `TODO(cliente)` no código precisam dos dados reais:

1. **`lib/site.ts`** — telefone, WhatsApp, e-mail, domínio e redes sociais.
2. **`lib/jsonLd.ts`** — endereço completo, coordenadas e horário de
   atendimento. É o que mais pesa no pacote local do Google.
3. **`components/layout/Logo.tsx`** — o logo oficial, quando houver vetor.
4. **`components/sections/Hero.tsx`** — a faixa de provas hoje traz afirmações
   sobre o método, não números. Com métricas reais em mãos (leads/mês, tempo
   médio de resposta, ROAS), ela vira uma barra de métricas.

## Deploy

O projeto vive na subpasta `dl-company/` de um repositório maior. Na Vercel,
aponte **Root Directory** para `dl-company` — o resto é detectado
automaticamente. Cadastre as três variáveis de ambiente antes do primeiro
deploy e ajuste `site.url` em `lib/site.ts` para o domínio final (ele alimenta
canonical, sitemap, robots e Open Graph).

## SEO local

- `metadata` completo com canonical, Open Graph e Twitter Card
- Imagem OG 1200×630 gerada em build (`app/opengraph-image.tsx`)
- JSON-LD `ProfessionalService` com `areaServed` de São Luís e Maranhão
- `sitemap.xml` e `robots.txt` nativos do App Router
