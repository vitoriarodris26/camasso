export type ProductCardData = {
  title: string;
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
  items: [ProductCardData, ProductCardData, ProductCardData];
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
        title: "Impressora de Pulseiras",
        tags: ["Térmico direto", "Baixo Volume"],
        image: "/assets/images/impressora2.png",
        description: "Ideal para baixo a médio volume de impressão, unindo economia e qualidade profissional."
      },
       {
        title: "Etiqueta BOPP",
        tags: ["Fosco", "Transparente"],
        image: "/produtos/Etiqueta BOPP.png",
        description: "Material plástico resistente a rasgos, é utlizado em meios hospitalares."
      },
       {
        title: "Tela interativa  43”",
        tags: ["Alta Tecnologia", ],
        image: "/produtos/tela 43.png",
        description: "Interface homem-máquina para controlo de produção e processos industriais."
      },
    ]
  },
  "Pulseiras": {
    heroImage: "/produtos/medico.avif",
    heroBadge: "Pulseiras Hospitalares",
    highlightLabel: "Pulseiras",
    highlightTitle: "Segurança do Paciente",
    highlightDesc: "Soluções completas para identificação segura em hospitais e eventos.",
    highlightLink: "#",
    items: [
      {
        title: "Pulseira Térmica",
        tags: ["Hospitalar", "Adulto"],
        image: "/assets/images/termica.jpeg",
        description: "Material durável e confortável, resistente a água e álcool, garantindo a legibilidade dos dados."
      },
      {
        title: "Pulseira Soft",
        tags: ["Conforto", "Infantil"],
        image: "/assets/images/puseira-branca.webp",
        description: "Toque macio especial para peles sensíveis, ideal para alas neonatais e pediátricas."
      },
      {
        title: "Pulseira de Classificação",
        tags: ["Triagem", "Cores"],
        image: "/assets/images/classif.webp",
        description: "Cores padrão para gestão de risco e triagem visual rápida em unidades de emergência."
      }
    ]
  },
  "Etiquetas": {
    heroImage: "/produtos/etiqueta-grid.png",
    heroBadge: "Etiquetas Especializadas",
    highlightLabel: "Etiquetas",
    highlightTitle: "Identificação Precisa",
    highlightDesc: "Etiquetas para rastreabilidade, logística e conformidade técnica.",
    highlightLink: "#",
    items: [
      {
        title: "Poliéster",
        tags: ["Cromo Fosco"],
        image: "/produtos/Poliester.png",
        description: "Ideal para envios e identificação de curta duração com excelente contraste de impressão."
      },
      {
        title: "Etiqueta BOPP",
        tags: ["Fosco", "Transparente"],
        image: "/produtos/Etiqueta BOPP.png",
        description: "Material plástico resistente a rasgos, é utlizado em meios hospitalares."
      },
      {
        title: "Etiquetas em geral",
        tags: ["Alta Fixação"],
        image: "/produtos/Etiquetas.png",
        description: "Fazemos etiquetas personalizadas conforme a necessidade do cliente, com diversos tipos de materiais e acabamentos."
      }
    ]
  },
  "Unitarização": {
    heroImage: "/produtos/farmc.avif",
    heroBadge: "Gestão Farmacêutica",
    highlightLabel: "Unitarização",
    highlightTitle: "Segurança Medicamentosa",
    highlightDesc: "Sistemas para fracionamento e identificação individual de medicamentos.",
    highlightLink: "#",
    items: [
      {
        title: "Compatibilidade Opuspac",
        tags: ["Filme Laminado", "Selagem Lateral"],
        image: "/produtos/oup.avif",
        description: "Materiais específicos que garantem a integridade e estabilidade do medicamento fracionado."
      },
      {
        title: "Compatibilidade SisnacMed",
        tags: ["Selagem em 3 lados", "Fosco"],
        image: "/produtos/sisnc.avif",
        description: "Rastreabilidade completa desde a farmácia central até à beira do leito do paciente."
      },
       {
        title: "Compatibilidade MeaModul",
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
        tags: ["Térmico direto", "Baixo Volume"],
        image: "/assets/images/impressora2.png",
        description: "Ideal para baixo a médio volume de impressão, unindo economia e qualidade profissional."
      },
      {
        title: "Impressora de Etiquetas",
        tags: ["Térmico direto", "Média Produção"],
        image: "/assets/images/impressora-1.png",
        description: "Construída para operar 24/7 em ambientes fabris e logísticos intensos."
      },
      {
        title: "Impressora de Etiquetas Industrial",
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
        tags: ["Económico", "Papel"],
        image: "/produtos/RibbonCera.png",
        description: "Excelente qualidade para etiquetas de papel em logística e retalho."
      },
      {
        title: "Ribbon Misto",
        tags: ["Resistência", "Versátil"],
        image: "/produtos/RibbonMisto.png",
        description: "Mistura de cera e resina para maior resistência a fricção e variações de temperatura."
      },
      {
        title: "Ribbon Resina",
        tags: ["Químico", "Extremo"],
        image: "/produtos/RibbonResin.png",
        description: "Máxima durabilidade para etiquetas sintéticas expostas a químicos ou condições externas."
      }
    ]
  },
  "Telas Interativas": {
    heroImage: "/produtos/escritorio.jpg",
    heroBadge: "Comunicação Visual",
    highlightLabel: "Telas",
    highlightTitle: "Interatividade e Engajamento",
    highlightDesc: "Monitores touch e painéis de gestão para ambientes modernos.",
    highlightLink: "#",
    items: [
      {
        title: "Tela interativa  43”",
        tags: ["Alta Tecnologia", ],
        image: "/produtos/tela 43.png",
        description: "Interface homem-máquina para controlo de produção e processos industriais."
      },
      {
        title: "Tela interativa  65”, 75” e 86”",
        tags: ["Versátil"],
        image: "/produtos/tela.png",
        description: "Exiba métricas em tempo real para a sua equipa com clareza e alto brilho."
      },
      {
        title: "Outros",
        tags: ["Tecnologia de ponta", "Qualidade de Imagem"],
        image: "/produtos/telas.png",
        description: "Tecnologia para reuniões e treinos dinâmicos com interação simultânea."
      }
    ]
  },
  "PDV": {
    heroImage: "/produtos/pdvg.png",
    heroBadge: "Ponto de Venda",
    highlightLabel: "PDV",
    highlightTitle: "Eficiência nas Vendas",
    highlightDesc: "Equipamentos para frente de loja e atendimento ao público.",
    highlightLink: "#",
    items: [
      {
        title: "Ponto de Venda | HD-780Pro",
        tags: ["Recibo", "Ágil"],
        image: "/produtos/pdv.png",
        description: "Impressão veloz de talões e pedidos, essencial para qualquer comércio ou restaurante."
      },
      {
        title: "Ponto de Venda | HD-280F",
        tags: ["Tecnologico", "PDV"],
        image: "/produtos/pdv impress.png",
        description: "Leitura rápida em qualquer ângulo, ideal para supermercados e retalho de alto fluxo."
      },
      {
        title: "Outros",
        tags: ["Variedade", "Tecnologia"],
        image: "/produtos/smart4.png",
        description: "Temos variedade de PDV, confira"
      }
    ]
  },
  "Totens de Autoatendimento": {
    heroImage: "/produtos/atendimento.jpg",
    heroBadge: "Auto atendimento",
    highlightLabel: "Totens",
    highlightTitle: "Inovação no Atendimento",
    highlightDesc: "Soluções self-service para reduzir custos e melhorar o fluxo de clientes.",
    highlightLink: "#",
    items: [
      {
        title: "Totem Pro",
        tags: ["Moderno"],
        image: "/produtos/Pro 2.png",
        description: "Permite que o cliente realize o checkout completo de forma autónoma e segura."
      },
      {
        title: "Totem Smart",
        tags: ["Inteligente", "Aplicativos"],
        image: "/produtos/smart3.png",
        description: "Organize o fluxo de atendimento com emissão de senhas e triagem inicial."
      },
      {
        title: "Outros",
        tags: ["Variedade", "Interativo"],
        image: "/produtos/Smart.png",
        description: "Ideal para shoppings, hospitais e eventos para orientação e consulta de dados."
      }
    ]
  }
};