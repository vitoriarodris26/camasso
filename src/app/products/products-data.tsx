export type ProductCardData = {
  title: string;
  tags: string[];
  image: string;
};

export type CategoryData = {
  // Dados do Bloco Superior Esquerdo (Imagem Hero)
  heroImage: string;
  heroBadge: string; // Ex: "Impressoras Camasso"

  // Dados do Bloco Superior Direito (Texto de Chamada)
  highlightLabel: string; // Ex: "Impressoras" (Pílula verde)
  highlightTitle: string;
  highlightDesc: string;
  highlightLink: string;

  // Dados dos 3 Cards Inferiores
  items: [ProductCardData, ProductCardData, ProductCardData]; // Array fixo de 3 itens
};

export const categoriesList = ["Destaques", "Pulseiras", "Etiquetas", "Unitarização", "Impressoras", "Ribbon"];

export const productsContent: Record<string, CategoryData> = {
    "Ribbon": {
    heroImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
    heroBadge: "Ribbons",

    highlightLabel: "ribbons",
    highlightTitle: "Fazemos Outsourcing",
    highlightDesc: "Gestão completa | Suimentos automáticos | Suporte especializado",
    highlightLink: "#",

    items: [
      {
        title: "Ribbon 1",
        tags: ["Térmico direto", "Baixo volume"],
        image: "/assets/images/ribbon.png"
      },
      {
        title: "Ribbon 3",
        tags: ["Térmico direto", "Média produção"],
         image: "/assets/images/ribbon2.png",
      },
      {
        title: "Ribbon 4",
        tags: ["Transferência térmica", "Alta produção"],
         image: "/assets/images/ribbon3.png"
      }
    ]
  },
  "Impressoras": {
    heroImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
    heroBadge: "Impressoras Camasso",
    
    highlightLabel: "Impressoras",
    highlightTitle: "Fazemos Outsourcing",
    highlightDesc: "Gestão completa | Suimentos automáticos | Suporte especializado",
    highlightLink: "#",

    items: [
      {
        title: "Impressora de Pulseira",
        tags: ["Térmico direto", "Baixo volume"],
        image: "/assets/images/impressora2.png"
      },
      {
        title: "Impressora de Etiquetas",
        tags: ["Térmico direto", "Média produção"],
         image: "/assets/images/impressora-1.png",
      },
      {
        title: "Impressora Industrial",
        tags: ["Transferência térmica", "Alta produção"],
         image: "/assets/images/industrial.png"
      }
    ]
  },
  "Pulseiras": {
    heroImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop",
    heroBadge: "Pulseiras Hospitalares",

    highlightLabel: "Pulseiras",
    highlightTitle: "Segurança do Paciente",
    highlightDesc: "Contrary to popular belrary to popular blation by H. RackhamContrary to popular belief,  the 1914 translation by H. RackhamContrary to popular belief,  the 1914 translation by H. Rackham",
    highlightLink: "#",

    items: [
      {
        title: "Pulseira Térmica",
        tags: ["Hospitalar", "Adulto"],
        image: "/assets/images/termica.jpeg",
      },
      {
        title: "Pulseira Soft",
        tags: ["Conforto", "Infantil"],
         image: "/assets/images/puseira-branca.webp",
      },
      {
        title: "Pulseira de Classificação",
        tags: ["Triagem", "Cores"],
        image: "/assets/images/classif.webp"
      }
    ]
  },
  // Fallback para outras categorias (apenas duplicando para demonstração)
  "Destaques": {
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076",
    heroBadge: "Tecnologia e Inovação",
    highlightLabel: "Destaques",
    highlightTitle: "Soluções Integradas",
    highlightDesc: "Descubra como nossa tecnologia conecta todos os setores da sua empresa.",
    highlightLink: "#",
    items: [
      { title: "Totem de Autoatendimento", tags: ["Touch", "Ágil"], image: "/assets/images/totem.png" },
      { title: "Leitor de Código", tags: ["Sem fio", "Robusto"], image: "/assets/images/leitor.png" },
      { title: "Tablet Industrial", tags: ["Android", "IP67"], image: "/assets/images/tablet-industrial.png" }
    ]
  }
};