export const ROUTES = {
  HOME: "/",
  PRODUTOS: "/produtos",
  INFORMACOES: "/informacoes",
  SOBRE: "/#quem-somos",
  CONTATO: "https://wa.me/5511975361817?text=Olá",
  SOLUCOES: "/solucoes",
  SERVICOS: "/servico-camasso",
  CATALOGO: "/catalog",
  SUPORTE: "/help-desk",
  TRABALHE_CONOSCO: "https://www.linkedin.com/company/camasso/jobs/",
  AREA_CLIENTE: "https://camasso.tomticket.com/",
  SERVICO_DETALHE: (slug) => `/servicos/${slug}`
};

export const NAV_LINKS = [
  { label: "Início", href: ROUTES.HOME },
  { label: "Sobre", href: ROUTES.SOBRE },
  { label: "Soluções", href: ROUTES.SERVICOS },
  { label: "Suporte", href: ROUTES.SERVICOS },
  { label: "Informações", href: ROUTES.INFORMACOES },
  { label: "Serviços", href: ROUTES.SERVICOS },
  { label: "Cátalogo", href: ROUTES.CATALOGO },
  { label: "Suporte", href: ROUTES.SUPORTE },
  { label: "Trabalhe Conosco", href: ROUTES.TRABALHE_CONOSCO },
  { label: "Área do Cliente", href: ROUTES.AREA_CLIENTE },
];
