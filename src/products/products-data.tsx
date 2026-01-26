export type ProductCardData = {
  title: string;
  slug: string;
  tags: string[];
  image: string;
  description?: string;
};

export type CategoryData = {
  heroImage: string;
  heroBadge: string;
  highlightLabel: string;
  highlightTitle: string;
  highlightDesc: string;
  highlightLink: string;
  items: ProductCardData[];
};

export const categoriesList = [
  "Destaques", 
  "Pulseiras", 
  "Etiquetas", 
  "Unitarização", 
  "Impressoras", 
  "Ribbon",
  "Telas Interativas", 
  "PDV", 
  "Totens de Autoatendimento"
];

export const productsContent: Record<string, CategoryData> = {
  "Destaques": {
    heroImage: "/produtos/pdvg.png",
    heroBadge: "Tecnologia e Inovação",
    highlightLabel: "Destaques",
    highlightTitle: "Soluções Integradas",
    highlightDesc: "Descubra como nossa tecnologia conecta todos os setores da sua empresa.",
    highlightLink: "#",
    items: [
      {
        title: "Térmico Direto",
        slug: "aluguel-impressoras",
        tags: ["Premium", "Soft", "Identificação"],
        image: "/assets/images/impressora2.png",
        description: "Ideal para baixo a médio volume de impressão, unindo economia e qualidade profissional."
      },
      {
        title: "Etiqueta BOPP",
        slug: "etiquetas-adesivas",
        tags: ["Fosco", "Transparente"],
        image: "/produtos/Etiqueta BOPP.png",
        description: "Material plástico resistente a rasgos, é utlizado em meios hospitalares."
      },
      {
        title: "Tela interativa 43”",
        slug: "telas-interativas",
        tags: ["Alta Tecnologia"],
        image: "/produtos/tela 43.png",
        description: "Interface homem-máquina para controlo de produção e processos industriais."
      },
    ]
  },
  "Pulseiras": {
    heroImage: "/produtos/paciente.png",
    heroBadge: "Pulseiras Hospitalares",
    highlightLabel: "Pulseiras",
    highlightTitle: "Segurança do Paciente",
    highlightDesc: "Soluções completas para identificação segura em hospitais e eventos.",
    highlightLink: "#",
    items: [
      {
        title: "Térmica Direto",
        slug: "pulseiras-identificacao",
        tags: ["Hospitalar", "Premium"],
        image: "/produtos/pulseira-termica.png",
        description: "Material durável e confortável, resistente a água e álcool, garantindo a legibilidade dos dados."
      },
      {
        title: "Classificação",
        slug: "pulseiras-identificacao",
        tags: ["Adulto", "Folha"],
        image: "/produtos/pulseira-indent.png",
        description: "Toque macio especial para peles sensíveis, ideal para alas neonatais e pediátricas."
      },
      {
        title: "Cartucho de Pulseiras",
        slug: "pulseiras-identificacao",
        tags: ["Triagem", "Infantil", "Neonatal"],
        image: "/produtos/cartucho.png",
        description: "Cores padrão para gestão de risco e triagem visual rápida em unidades de emergência."
      }
    ]
  },
  "Etiquetas": {
    heroImage: "/produtos/etiquetas_nutri.png",
    heroBadge: "Etiquetas Especializadas",
    highlightLabel: "Etiquetas",
    highlightTitle: "Identificação Precisa",
    highlightDesc: "Etiquetas para rastreabilidade, logística e conformidade técnica ou personalizada para qualquer necessidade.",
    highlightLink: "#",
    items: [
      {
        title: "Poliéster",
        slug: "etiquetas-adesivas",
        tags: ["Cromo Fosco"],
        image: "/produtos/Poliester.png",
        description: "Ideal para envios e identificação de curta duração com excelente contraste de impressão."
      },
      {
        title: "Etiqueta BOPP",
        slug: "etiquetas-adesivas",
        tags: ["Fosco", "Transparente", "Outros"],
        image: "/produtos/Etiqueta BOPP.png",
        description: "Material plástico resistente a rasgos, é utlizado em meios hospitalares."
      },
      {
        title: "Couchê",
        slug: "etiquetas-adesivas",
        tags: ["Acrílico", "Borracha", "Outros"],
           image: "/servicos/etq_couche.png", 
        description: "Fazemos etiquetas personalizadas conforme a necessidade do cliente, com diversos tipos de materiais e acabamentos."
      }
    ]
  },
  "Unitarização": {
    heroImage: "/produtos/unitalirizacao.png",
    heroBadge: "Gestão Farmacêutica",
    highlightLabel: "Unitarização",
    highlightTitle: "Segurança Medicamentosa",
    highlightDesc: "Sistemas para fracionamento e identificação individual de medicamentos.",
    highlightLink: "#",
    items: [
      {
        title: "Compatibilidade Opuspac",
        slug: "unitarizacao-medicamentos",
        tags: ["Filme Laminado", "Selagem Lateral"],
        image: "/produtos/oup.avif",
        description: "Materiais específicos que garantem a integridade e estabilidade do medicamento fracionado."
      },
      {
        title: "Compatibilidade SisnacMed",
        slug: "unitarizacao-medicamentos",
        tags: ["Selagem em 3 lados", "Fosco"],
        image: "/produtos/sisnc.avif",
        description: "Rastreabilidade completa desde a farmácia central até à beira do leito do paciente."
      },
      {
        title: "Compatibilidade MeaModul",
        slug: "unitarizacao-medicamentos",
        tags: ["Papel Térmico", "Transtérmico"],
        image: "/produtos/other.avif",
        description: "Automatize o processo de embalagem e etiquetagem de doses unitárias com precisão total."
      },
    ]
  },
  "Impressoras": {
    heroImage: "/produtos/medicos.avif",
    heroBadge: "Impressão Profissional",
    highlightLabel: "Impressoras",
    highlightTitle: "Performance Superior",
    highlightDesc: "Hardware de alta confiabilidade para impressão de etiquetas e pulseiras.",
    highlightLink: "#",
    items: [
      {
        title: "Impressora de Pulseiras",
        slug: "aluguel-impressoras",
        tags: ["Térmico direto", "Baixo Volume"],
        image: "/assets/images/impressora2.png",
        description: "Ideal para baixo a médio volume de impressão, unindo economia e qualidade profissional."
      },
      {
        title: "Impressora de Etiquetas",
        slug: "aluguel-impressoras",
        tags: ["Térmico direto", "Média Produção"],
        image: "/assets/images/impressora-1.png",
        description: "Construída para operar 24/7 em ambientes fabris e logísticos intensos."
      },
      {
        title: "Impressora de Etiquetas Industrial",
        slug: "aluguel-impressoras",
        tags: ["Transferência Térmica", "Alta Produção"],
        image: "/assets/images/industrial.png",
        description: "Leve e ágil, permite a impressão de etiquetas no local da operação, aumentando a produtividade."
      }
    ]
  },
  "Ribbon": {
    heroImage: "/produtos/rib.png",
    heroBadge: "Suprimentos de Impressão",
    highlightLabel: "Ribbon",
    highlightTitle: "Nitidez Máxima",
    highlightDesc: "Ribbons de cera, resina e mistos para todas as aplicações térmicas.",
    highlightLink: "#",
    items: [
      {
        title: "Ribbon Cera",
        slug: "ribbons",
        tags: ["Económico", "Papel"],
        image: "/produtos/RibbonCera.png",
        description: "Excelente qualidade para etiquetas de papel em logística e retalho."
      },
      {
        title: "Ribbon Misto",
        slug: "ribbons",
        tags: ["Resistência", "Versátil"],
        image: "/produtos/RibbonMisto.png",
        description: "Mistura de cera e resina para maior resistência a fricção e variações de temperatura."
      },
      {
        title: "Ribbon Resina",
        slug: "ribbons",
        tags: ["Químico", "Extremo"],
        image: "/produtos/RibbonResin.png",
        description: "Máxima durabilidade para etiquetas sintéticas expostas a químicos ou condições externas."
      }
    ]
  },
  "Telas Interativas": {
    heroImage: "/produtos/aula.png",
    heroBadge: "Tela Interativa",
    highlightLabel: "Tela interativa",
    highlightTitle: "Fazemos Outsourcing",
    highlightDesc: "Gestão completa | Suporte especializado",
    highlightLink: "#",
    items: [
      {
        title: "Tela interativa 43”",
        slug: "telas-interativas",
        tags: ["Alta Tecnologia"],
        image: "/produtos/tela 43.png",
        description: "Interface homem-máquina para controle de produção industrial."
      },
      {
        title: "Tela interativa 65”, 75” e 86”",
        slug: "telas-interativas",
        tags: ["Versátil"],
        image: "/produtos/tela.png",
        description: "Exiba métricas em tempo real para a sua equipe com clareza."
      },
    ]
  },
  "PDV": {
    heroImage: "/produtos/pdvg.png",
    heroBadge: "Ponto de Venda",
    highlightLabel: "PDV",
    highlightTitle: "Fazemos Outsourcing",
    highlightDesc: "Gestão completa | Suporte especializado",
    highlightLink: "#",
    items: [
      {
        title: "Ponto de Venda | HD-780Pro",
        slug: "automacao-comercial",
        tags: ["Recibo", "Ágil"],
        image: "/produtos/pdv.png",
        description: "Impressão veloz de talões e pedidos."
      },
      {
        title: "Ponto de Venda | HD-280F",
        slug: "automacao-comercial",
        tags: ["Tecnológico"],
        image: "/produtos/pdv impress.png",
        description: "Leitura rápida em qualquer ângulo."
      },
    ]
  },
  "Totens de Autoatendimento": {
    heroImage: "/produtos/auto_atend.png",
    heroBadge: "Fazemos Outsourcing",
    highlightLabel: "Totens",
    highlightTitle: "Fazemos Outsourcing",
    highlightDesc: "Gestão completa | Suporte especializado",
    highlightLink: "#",
    items: [
      {
        title: "Totem Pro",
        slug: "totens-autoatendimento",
        tags: ["Moderno"],
        image: "/servicos/Totem Pro.png",
        description: "Hardware de alta performance para operações críticas."
      },
      {
        title: "Totem Smart",
        slug: "totens-autoatendimento",
        tags: ["Inteligente", "Aplicativos"],
        image: "/produtos/pro.png",
        description: "Organize o fluxo de atendimento com emissão de senhas."
      },
    ]
  }
  
  
};