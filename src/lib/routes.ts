
export const ROUTES = {
  HOME: "/",
  PRODUTOS: "/produtos",
  SERVICOS: "/servicos-informacoes",
  SOBRE: "/#quem-somos",
  SOLUCOES: "/solucoes",
  CONTATO: "https://wa.me/5511975361817?text=Olá",
  CATALOGO: "/catalogos",
  SUPORTE: "/suporte",
  TRABALHE_CONOSCO: "https://www.linkedin.com/company/camasso/jobs/",
  AREA_CLIENTE: "https://camasso.tomticket.com/",
  SERVICO_DETALHE: (slug) => `/servicos/${slug}`,
  SERVICOS_CAMASSO : "/servicos-camasso"
};

export const NAV_LINKS = [
  { label: "Início", href: ROUTES.HOME },
  { label: "Sobre", href: ROUTES.SOBRE },
  { label: "Soluções", href: ROUTES.SOLUCOES },
  { label: "Serviços", href: ROUTES.SERVICOS_CAMASSO },
  { label: "Informações", href: ROUTES.SERVICOS },
  { label: "Catálogo", href: ROUTES.CATALOGO },
  { label: "Suporte", href: ROUTES.SUPORTE },
  { label: "Trabalhe Conosco", href: ROUTES.TRABALHE_CONOSCO },
  { label: "Área do Cliente", href: ROUTES.AREA_CLIENTE },
];