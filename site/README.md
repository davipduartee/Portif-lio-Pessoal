# site · implementação do portfólio

Implementação em React do protótipo feito no Figma Make, na raiz deste
repositório.

## Rodando localmente

```bash
cd site
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # serve o build
```

## Estrutura

```
src/
├── data/site.ts        # perfil, contato, skills e projetos — edite aqui primeiro
├── components/         # Nav, Hero, Skills, Projects, Contact, Footer, ui
└── pages/              # Home e ProjectDetail (/projetos/:slug)
```

Todo o conteúdo do site vem de `src/data/site.ts`. Os componentes não têm texto
fixo, então atualizar o portfólio é editar um arquivo só.

## O que ainda falta preencher

Procure por `TODO` em `src/data/site.ts`:

- foto em `public/img/davi.jpg` e currículo em `public/curriculo-davi-duarte.pdf`;
- prints reais de cada projeto em `public/img/projetos/` (enquanto não houver,
  o site desenha um cartão gráfico próprio — nunca uma foto de banco);
- links de repositório, demo e Swagger de cada projeto;
- `results` e `learnings` de cada projeto: resultado medido em vez de lista de
  features, e o que você faria diferente hoje.

## Decisões de design

Em relação ao protótipo original:

- **Seção de contato** (`04 — CONTATO`): o selo "disponível para projetos"
  precisava ter para onde levar.
- **Skills ligadas a projetos** em vez de barras de proficiência — a prova é o
  código, e nenhuma barra de porcentagem é acreditável.
- **Stack completa nos cards**, sem o `+3` que escondia justamente a
  informação procurada.
- **"Destaques" viraram "Resultados"**, mais links de repositório/demo e uma
  seção de aprendizados nas páginas de detalhe.
- **Contraste revisado** (texto e labels acima de 4.5:1 sobre o fundo), foco
  visível no teclado e `prefers-reduced-motion` respeitado.
- **Layout responsivo**, incluindo o breakpoint de celular que o protótipo não
  cobria.
