# DL Company — site institucional

Landing page de conversão B2B da DL Company, parceira tecnológica de
concessionárias e revendas de veículos em São Luís (MA).

## Stack

- **Next.js 16** (App Router, Turbopack) — páginas pré-renderizadas estaticamente
- **Tailwind CSS 4** — tokens de design em `app/globals.css`
- **TypeScript**, **lucide-react**, **zod**, **resend**

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Onde mexer

| Quero mudar | Arquivo |
|---|---|
| Telefone, e-mail, WhatsApp, redes sociais | `lib/site.ts` |
| Paleta de cores e tipografia | `app/globals.css` |
| Conteúdo de uma seção | `components/sections/` |
| Header / Footer / logo | `components/layout/` |

> Os campos marcados com `TODO(cliente)` em `lib/site.ts` são placeholders e
> precisam ser substituídos pelos dados reais antes do deploy.
