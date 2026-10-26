# Graph Report - Portif-lio-Pessoal  (2026-10-16)

## Corpus Check
- 9 files · ~433,930 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 121 nodes · 242 edges · 7 communities
- Extraction: 80% EXTRACTED · 19% INFERRED · 1% AMBIGUOUS · INFERRED: 46 edges (avg confidence: 0.83)
- Token cost: 595,151 input · 0 output

## Community Hubs (Navigation)
- Backend Java e Finance API
- Estrutura e Navegação do Portfólio
- Frontend React e TaskFlow
- Home e Perfil
- Ferramentas e Em Aprendizado
- GameTracker
- DevLinks

## God Nodes (most connected - your core abstractions)
1. `DevLinks` - 19 edges
2. `TaskFlow` - 18 edges
3. `Finance API` - 18 edges
4. `Portfólio Pessoal` - 17 edges
5. `GameTracker` - 17 edges
6. `01-tela-inicial-home.png` - 13 edges
7. `03-Projetos.png` - 11 edges
8. `Spring Boot` - 11 edges
9. `Seção de Projetos Desenvolvidos` - 10 edges
10. `02-Habilidades.png` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Next Project Navigation (próximo → DevLinks)` --references--> `DevLinks`  [AMBIGUOUS]
  04-Tela TaskFlow.png → README.md
- `01-tela-inicial-home.png` --references--> `'Visualizar' Button Overlay`  [AMBIGUOUS]
  README.md → 01-tela-inicial-home.png
- `Top Navbar (sobre / skills / projetos)` --references--> `Seção de Habilidades Técnicas`  [INFERRED]
  01-tela-inicial-home.png → README.md
- `2x2 Project Card Grid` --references--> `Página de Detalhe de Projeto`  [INFERRED]
  03-Projetos2.png → README.md
- `'Visualizar' Hover Tooltip` --references--> `Página de Detalhe de Projeto`  [INFERRED]
  03-Projetos.png → README.md

## Hyperedges (group relationships)
- **Fluxo de navegação do usuário pelas telas do portfólio** — 01_tela_inicial_home_tela, 02_habilidades_tela, 03_projetos_tela, 03_projetos2_tela, 04_tela_taskflow_tela, 05_tela_devlinks_tela, 06_tela_gametracker_tela, 07_tela_finance_api_tela [EXTRACTED 1.00]
- **Estrutura de 4 seções exigida pela atividade** — readme_secao_apresentacao, readme_secao_habilidades, readme_secao_projetos, readme_pagina_detalhe_projeto, readme_atividade_academica [EXTRACTED 1.00]
- **Projetos desenvolvidos apresentados no portfólio** — readme_taskflow, readme_devlinks, readme_gametracker, readme_finance_api [EXTRACTED 1.00]
- **Hero Identity Block (badge, name, role, bio)** — 01_tela_inicial_home_badge_disponivel, 01_tela_inicial_home_headline_davi_duarte, 01_tela_inicial_home_cargo_full_stack_jr, 01_tela_inicial_home_bio [EXTRACTED 1.00]
- **Gamer-themed Personal Branding** — 01_tela_inicial_home_player_card, 01_tela_inicial_home_hobby_videogames, 01_tela_inicial_home_dark_gold_theme [INFERRED 0.85]
- **Education and Location Context** — 01_tela_inicial_home_ceuma, 01_tela_inicial_home_oxygeni_hub, 01_tela_inicial_home_sao_luis_ma [EXTRACTED 1.00]
- **Stack backend Java/Spring** — tech_java, tech_spring_boot, tech_spring_security, tech_jwt, tech_jpa, tech_hibernate, tech_postgresql, tech_maven [INFERRED 0.85]
- **Stack frontend React** — tech_react, tech_typescript, tech_vite, tech_tailwind_css, tech_context_api [INFERRED 0.85]
- **Roadmap de aprendizado (LOADING)** — 02_habilidades_em_aprendizado, tech_docker, tech_aws, tech_nextjs, tech_microsservicos [EXTRACTED 1.00]
- **Project Card Anatomy (cover, chips, hover, link to detail)** — 03_projetos_project_card, 03_projetos_tech_tag_chip, 03_projetos_visualizar_hover, readme_pagina_detalhe_projeto [INFERRED 0.85]
- **TaskFlow Full-Stack (Java/Spring Boot + React)** — readme_taskflow, tech_java, tech_spring_boot, tech_react [EXTRACTED 1.00]
- **DevLinks Frontend Stack (React + TypeScript + Tailwind)** — readme_devlinks, tech_react, tech_typescript, tech_tailwind_css [EXTRACTED 1.00]
- **Java + Spring Boot backend stack (TaskFlow, Finance API)** — readme_taskflow, readme_finance_api, tech_java, tech_spring_boot [EXTRACTED 1.00]
- **React + TypeScript frontend stack (DevLinks, GameTracker)** — readme_devlinks, readme_gametracker, tech_react, tech_typescript [EXTRACTED 1.00]
- **Project card pattern (cover, badge, title, tags, chevron to detail)** — 03_projetos2_grid_cards_projetos, 03_projetos2_numeracao_cards, 03_projetos2_tech_tag_chips, readme_pagina_detalhe_projeto [INFERRED 0.85]
- **TaskFlow Back-end Stack (Spring Boot + JWT + Swagger + PostgreSQL)** — tech_java, tech_spring_boot, tech_jwt, tech_swagger, tech_postgresql, 04_tela_taskflow_autenticacao_jwt_refresh, 04_tela_taskflow_api_rest_swagger [EXTRACTED 1.00]
- **TaskFlow Front-end Stack (React + TypeScript + Tailwind)** — tech_react, tech_typescript, tech_tailwind_css, 04_tela_taskflow_interface_responsiva [EXTRACTED 1.00]
- **Project Detail Page Layout Pattern** — 04_tela_taskflow_tela, 04_tela_taskflow_tech_tags, 04_tela_taskflow_overview, 04_tela_taskflow_destaques, 04_tela_taskflow_navegacao_proximo [INFERRED 0.85]
- **DevLinks frontend tech stack** — readme_devlinks, tech_react, tech_typescript, tech_tailwind_css, tech_context_api [EXTRACTED 1.00]
- **Live editing flow (form input -> global state -> instant preview)** — 05_tela_devlinks_form_handling, tech_context_api, 05_tela_devlinks_realtime_preview [INFERRED 0.75]
- **Project detail page layout pattern** — 05_tela_devlinks_tela, 05_tela_devlinks_tech_badges, 05_tela_devlinks_visualizar_button, 05_tela_devlinks_project_navigation [EXTRACTED 1.00]
- **GameTracker Highlight Features (Destaques)** — 06_tela_gametracker_rawg_integration, 06_tela_gametracker_custom_lists, 06_tela_gametracker_search_filters, 06_tela_gametracker_local_persistence [EXTRACTED 1.00]
- **GameTracker Tech Stack** — tech_react, tech_typescript, tech_rawg_api, tech_tailwind_css, tech_localstorage [EXTRACTED 1.00]
- **Stack back-end Java da Finance API** — tech_java, tech_spring_boot, tech_hibernate, tech_postgresql, tech_maven [EXTRACTED 1.00]
- **Boas praticas de back-end (camadas, excecoes, validacao, paginacao)** — 07_tela_finance_api_arquitetura_camadas, 07_tela_finance_api_tratamento_global_excecoes, 07_tela_finance_api_bean_validation, 07_tela_finance_api_paginacao [INFERRED 0.85]
- **Layout da pagina de detalhe (hero, tags, overview, destaques, navegacao)** — 07_tela_finance_api_hero_banner, 07_tela_finance_api_tech_tags, 07_tela_finance_api_overview, 07_tela_finance_api_destaques, 07_tela_finance_api_navegacao_projetos [EXTRACTED 1.00]

## Communities (7 total, 0 thin omitted)

### Community 0 - "Backend Java e Finance API"
Cohesion: 0.16
Nodes (25): Backend, Banco de Dados, Tech Stack Tag Chips, Arquitetura em Camadas MVC (Controller, Service, Repository), Validacoes com Bean Validation, Secao Destaques, Hero Banner (dashboard de analytics desfocado, badge 2023), Navegacao Anterior/Proximo (DevLinks / GameTracker) (+17 more)

### Community 1 - "Estrutura e Navegação do Portfólio"
Cohesion: 0.12
Nodes (24): Top Navbar (sobre / skills / projetos), GitHub Footer Link, LinkedIn Footer Link, Footer (c 2026 Davi Pereira Duarte, GitHub, LinkedIn), 03-Projetos2.png, Dark Grid Background with Monospace/Gold Accent Theme, Project Card Component, Numbered Section Header '03 — PROJETOS' (+16 more)

### Community 2 - "Frontend React e TaskFlow"
Cohesion: 0.22
Nodes (16): Frontend, Linguagens, REST API Documented with Swagger, Secure Authentication with JWT and Refresh Token, Full Task CRUD with Filters and Sorting, TaskFlow Destaques (Highlights List), Responsive Interface with React + Tailwind CSS, TaskFlow (+8 more)

### Community 3 - "Home e Perfil"
Cohesion: 0.22
Nodes (14): Badge 'Disponível para Projetos', Bio Paragraph, Role 'Full Stack Dev · Jr', CEUMA (university), Dark Grid + Gold Accent Visual Theme, Headline 'DAVI DUARTE', Hobby: Videogames, Info Cards Grid (Loc / Faculdade / Foco / Hobby) (+6 more)

### Community 4 - "Ferramentas e Em Aprendizado"
Cohesion: 0.15
Nodes (14): Loading (Em aprendizado), Ferramentas, Estetica dark estilo terminal, 02-Habilidades.png, Seção de Habilidades Técnicas, Stack Técnica por Categoria, AWS, Docker (+6 more)

### Community 5 - "GameTracker"
Cohesion: 0.20
Nodes (14): 2x2 Project Card Grid, Numbered Card Badges (03, 04), Tech Tag Chips with +N Overflow, Custom Lists (playing, finished, abandoned, wishlist), Dark Terminal-Style Design Language, Local Persistence with LocalStorage, GameTracker Overview (Origin Story), Prev/Next Project Navigation (+6 more)

### Community 6 - "DevLinks"
Cohesion: 0.19
Nodes (14): Automated deploy on Vercel, Dark theme by default, Form handling, Learning: global state with Context API, Linktree-style link page for developers, Support for multiple social networks with icons, Previous/next project navigation (TaskFlow / Finance API), Real-time preview during editing (+6 more)

## Ambiguous Edges - Review These
- `DevLinks` → `Next Project Navigation (próximo → DevLinks)`  [AMBIGUOUS]
  04-Tela TaskFlow.png · relation: references
- `Finance API` → `03-Projetos.png`  [AMBIGUOUS]
  03-Projetos.png · relation: references
- `01-tela-inicial-home.png` → `'Visualizar' Button Overlay`  [AMBIGUOUS]
  01-tela-inicial-home.png · relation: references

## Knowledge Gaps
- **34 isolated node(s):** `Atividade Acadêmica`, `Engenharia de Software`, `Logo <davi.dev />`, `Badge 'Disponível para Projetos'`, `'Visualizar' Button Overlay` (+29 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 34 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Portfólio Pessoal` connect `Estrutura e Navegação do Portfólio` to `Backend Java e Finance API`, `Home e Perfil`, `Ferramentas e Em Aprendizado`, `GameTracker`, `DevLinks`?**
  _High betweenness centrality (0.289) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `DevLinks` (e.g. with `GameTracker` and `Portfólio Pessoal`) actually correct?**
  _`DevLinks` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Atividade Acadêmica`, `Engenharia de Software`, `Logo <davi.dev />` to the rest of the system?**
  _34 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Estrutura e Navegação do Portfólio` be split into smaller, more focused modules?**
  _Cohesion score 0.11956521739130435 - nodes in this community are weakly interconnected._
- **Why does `02-Habilidades.png` connect `Ferramentas e Em Aprendizado` to `Backend Java e Finance API`, `Estrutura e Navegação do Portfólio`, `Frontend React e TaskFlow`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `DevLinks` and `Next Project Navigation (próximo → DevLinks)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Finance API` and `03-Projetos.png`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._