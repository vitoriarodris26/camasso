// 1. Removido o import incorreto de 'href'
// Se precisar de navegação, use Link ou useNavigate em seus componentes.

export const ROUTES = {
  HOME: "/",
  PRODUTOS: "/produtos",
  SERVICOS: "/servicos-informacoes",
  SOBRE: "/#quem-somos",
  SOLUCOES: "/solucoes",
  CONTATO: "https://wa.me/5511975361817?text=Olá",
  CATALOGO: "/catalog",
  SUPORTE: "/help-desk",
  TRABALHE_CONOSCO: "https://www.linkedin.com/company/camasso/jobs/",
  AREA_CLIENTE: "https://camasso.tomticket.com/",
  SERVICO_DETALHE: (slug) => `/servicos/${slug}`
};

export const NAV_LINKS = [
  { label: "Início", href: ROUTES.HOME },
  { label: "Sobre", href: ROUTES.SOBRE },
  { label: "Soluções", href: ROUTES.SOLUCOES },
  { label: "Informações", href: ROUTES.SERVICOS },
  { label: "Catálogo", href: ROUTES.CATALOGO },
  { label: "Suporte", href: ROUTES.SUPORTE },
  { label: "Trabalhe Conosco", href: ROUTES.TRABALHE_CONOSCO },
  { label: "Área do Cliente", href: ROUTES.AREA_CLIENTE },
];