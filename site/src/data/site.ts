export const profile = {
  name: "Davi",
  surname: "Duarte",
  fullName: "Davi Pereira Duarte",
  role: "Full Stack Dev · Jr",
  available: true,
  location: "São Luís, MA",
  school: "CEUMA · Oxygeni",
  focus: "Java · React",
  hobby: "Videogames",
  bio: "Estudante de Engenharia de Software na CEUMA pelo hub da Oxygeni, em São Luís do Maranhão. Apaixonado por construir software de ponta a ponta — do banco de dados à interface. Nas horas vagas, dominando o controle.",
  photo: "/img/davi.jpg", // TODO: colocar a foto em site/public/img/davi.jpg
} as const;

export const contact = {
  email: "davipduartee@gmail.com",
  github: "https://github.com/davipduartee",
  linkedin: "https://www.linkedin.com/in/davipduartee", // TODO: confirmar a URL
  resume: "/curriculo-davi-duarte.pdf", // TODO: colocar o PDF em site/public/
} as const;

export type SkillGroup = {
  label: string;
  items: { name: string; usedIn: string[] }[];
};

/**
 * Cada skill aponta para os projetos onde ela aparece (slug). É essa ligação —
 * e não uma barra de proficiência — que serve de prova para quem está lendo.
 */
export const skillGroups: SkillGroup[] = [
  {
    label: "Linguagens",
    items: [
      { name: "Java", usedIn: ["taskflow", "finance-api"] },
      { name: "TypeScript", usedIn: ["devlinks", "gametracker", "taskflow"] },
      { name: "JavaScript", usedIn: ["devlinks", "gametracker"] },
      { name: "SQL", usedIn: ["taskflow", "finance-api"] },
      { name: "HTML/CSS", usedIn: ["devlinks"] },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", usedIn: ["taskflow", "devlinks", "gametracker"] },
      { name: "Tailwind CSS", usedIn: ["taskflow", "devlinks", "gametracker"] },
      { name: "Vite", usedIn: ["devlinks", "gametracker"] },
      { name: "Context API", usedIn: ["gametracker"] },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot", usedIn: ["taskflow", "finance-api"] },
      { name: "Spring Security", usedIn: ["taskflow"] },
      { name: "JWT", usedIn: ["taskflow"] },
      { name: "REST APIs", usedIn: ["taskflow", "finance-api"] },
    ],
  },
  {
    label: "Banco de dados",
    items: [
      { name: "PostgreSQL", usedIn: ["taskflow", "finance-api"] },
      { name: "MySQL", usedIn: [] },
      { name: "Hibernate", usedIn: ["finance-api"] },
      { name: "JPA", usedIn: ["taskflow", "finance-api"] },
    ],
  },
  {
    label: "Ferramentas",
    items: [
      { name: "Git", usedIn: [] },
      { name: "GitHub", usedIn: [] },
      { name: "Maven", usedIn: ["taskflow", "finance-api"] },
      { name: "Postman", usedIn: ["taskflow", "finance-api"] },
      { name: "IntelliJ", usedIn: [] },
    ],
  },
];

export const learning = ["Docker", "AWS", "Next.js", "Microsserviços"];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  cover: string;
  /** Prints reais da aplicação. Vazio = nada é exibido, nunca foto de banco. */
  shots: { src: string; caption: string }[];
  links: { repo?: string; demo?: string; docs?: string };
  overview: string[];
  /** Resultado, não feature: o que mudou e quanto. */
  results: string[];
  learnings: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    tagline: "Gerenciador de tarefas com autenticação e painel completo",
    year: "2024",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "JWT"],
    cover: "/img/projetos/taskflow.png", // TODO: print real da interface
    shots: [],
    links: {
      repo: "https://github.com/davipduartee/taskflow", // TODO: confirmar
    },
    overview: [
      "TaskFlow foi meu primeiro projeto full stack completo, unindo back-end em Spring Boot com front-end em React. O objetivo era construir algo real — com autenticação segura, persistência de dados e uma interface que funcionasse de verdade.",
      "No back-end, implementei autenticação via JWT com refresh token, endpoints REST documentados com Swagger e banco de dados PostgreSQL. No front-end, utilizei React com TypeScript e Tailwind CSS para criar uma interface limpa e responsiva.",
    ],
    results: [
      "Sessão persistente sem novo login a cada expiração, via refresh token — o fluxo que mais quebrava nos meus projetos anteriores.",
      "TODO: troque por um número — tempo de resposta, cobertura de testes, nº de endpoints, usuários reais.",
      "API documentada no Swagger, o que tornou o front-end possível de desenvolver sem adivinhação.",
    ],
    learnings:
      "TODO: o que você faria diferente hoje. Ex.: separaria a camada de serviço dos controllers desde o início, e escreveria os testes antes da regra de negócio.",
  },
  {
    slug: "devlinks",
    title: "DevLinks",
    tagline: "Página de links estilo Linktree para desenvolvedores",
    year: "2024",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    cover: "/img/projetos/devlinks.png",
    shots: [],
    links: {},
    overview: [
      "TODO: qual problema o DevLinks resolve e para quem. Duas a três frases.",
    ],
    results: ["TODO: resultado mensurável."],
    learnings: "TODO: aprendizado principal.",
  },
  {
    slug: "finance-api",
    title: "Finance API",
    tagline: "API REST de controle financeiro pessoal",
    year: "2025",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Hibernate"],
    cover: "/img/projetos/finance-api.png", // Sem UI: use o Swagger ou o diagrama.
    shots: [],
    links: {
      docs: "", // TODO: link do Swagger publicado — vale mais que qualquer print.
    },
    overview: ["TODO: o problema, o recorte e por que API-only."],
    results: ["TODO: resultado mensurável."],
    learnings: "TODO: aprendizado principal.",
  },
  {
    slug: "gametracker",
    title: "GameTracker",
    tagline: "Catálogo pessoal de jogos com avaliações",
    year: "2025",
    stack: ["React", "TypeScript", "RAWG API", "Vite", "Context API"],
    cover: "/img/projetos/gametracker.png",
    shots: [],
    links: {},
    overview: ["TODO: o problema, o recorte e o que a RAWG API entrega."],
    results: ["TODO: resultado mensurável."],
    learnings: "TODO: aprendizado principal.",
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
