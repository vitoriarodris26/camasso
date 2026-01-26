export const serviceCategories = ["Impressoras Epson", "Impressoras Camasso", "Totens", "PDVs"] as const;

export type ServiceCategory = typeof serviceCategories[number];

interface ServiceContent {
  title: string;
  description: string;
  images: string[];
  detailedText: {
    paragraphs: string[];
    footerNotes: string[];
  };
  features: string[];
}

export const servicesData: Record<ServiceCategory, ServiceContent> = {
  "Impressoras Epson": {
    title: "Conheça a Terceirização de Serviços de Impressão Camasso e Epson",
    description: "Soluções de alta performance para empresas que buscam eficiência e controle de custos.",
    images: ["/servicos/servicos-01.jpg", "/servicos/servicos-02.jpg", "/servicos/servicos-03.jpg"],
    detailedText: {
      paragraphs: [
        "Escritórios, hospitais, academias e outras instituições em <span class='text-green-600 font-bold'>São Paulo</span>, que têm alta demanda de impressão, podem encontrar muitas vantagens ao utilizar a terceirização de serviços de impressão. A terceirização de serviços de impressão conhecida como <span class='text-green-600 font-bold'>outsourcing de impressão</span> é uma forma econômica e prática de fornecer uma estrutura completa de impressão para empresas de todos os portes, mantendo o controle de custos ao mesmo tempo que garante a eficiência dessa operação.",
        "Muitas empresas têm percebido a problemática de manter internamente <span class='text-green-600 font-bold'>equipamentos de impressão</span>, porque toda a estrutura de controle, manutenção e escolha técnica é feita pela própria empresa, muitas vezes por profissionais que não são especialistas para tal atividade, resultando em perda de tempo, materiais e recursos.",
        "A Camasso do Brasil é uma empresa experiente no ramo de <span class='text-green-600 font-bold'>terceirização de serviços</span> de impressão conhecida como outsourcing de impressão. Localizada em São Paulo, atende clientes com agilidade e qualidade em seu fornecimento de equipamentos <span class='text-green-600 font-bold'>EPSON</span>, marca mundialmente reconhecida por excelência, economia e alta performance, associados ao total suporte em atendimento técnico e funcional da Camasso."
      ],
      footerNotes: ["O resultado é o melhor da terceirização de serviços de impressão para o seu negócio."]
    },
    features: ["Tecnologia Epson", "Suporte em SP", "Economia Real"]
  },
  "Impressoras Camasso": {
    title: "Outsourcing com Linha Exclusiva Camasso",
    description: "Equipamentos robustos desenvolvidos para suportar grandes fluxos de trabalho.",
    images: ["/servicos/aluguel-impressora-termica-04.png", "/servicos/aluguel-impressoras-04.jpg", "/servicos/aluguel-impressoras-sp-03.png"],
    detailedText: {
      paragraphs: [
        "Fornecer uma estrutura adequada para que os colaboradores realizem seus trabalhos faz parte dos objetivos centrais da administração de um escritório ou de uma empresa. Para tal, é fundamental contar com soluções que forneçam a melhor relação custo-benefício, entregando os resultados esperados a um preço adequado.",
        "O aluguel de impressoras é um serviço que se adéqua à boa gestão, ao possibilitar a economia de recursos, ao mesmo tempo que fornece uma estrutura de excelência para que o trabalho seja desenvolvido. O aluguel de impressoras deve ser feito junto a uma empresa confiável, experiente no ramo e que possa atender às necessidades específicas do cliente.",
        "A <span class='text-green-600 font-bold'>Camasso Solução em Impressão</span> é uma destas empresas, localizada em São Paulo, e dotada de capacidade e competência para atender clientes em todo o Brasil. Com mais de 10 anos de experiência, a Camasso conseguiu desenvolver formatos de aluguel de impressoras adequados a diversos tipos de cliente, o que permite o serviço customizado para cada necessidade.",
        "Através do aluguel de impressoras da Camasso, muitas empresas podem se beneficiar com o aumento de seus resultados. A Camasso trabalha com impressoras a laser, térmicas e outros tipos, fornecendo, também, de forma completa, os insumos necessários para a realização contínua de impressões.",
        "<strong>O aluguel de impressoras da Camasso envolve opções em:</strong><br/>• Impressoras a laser ideais para escritórios, indústrias e instituições;<br/>• Impressoras térmicas para etiquetas autoadesivas e pulseiras de identificação;<br/>• Outsourcing completo da linha de impressão;<br/>• Formatação de áreas de impressão adequadas a cada cliente.",
        "As soluções de aluguel de impressoras da Camasso têm conquistado empresas ao redor de todo o Brasil, entregando qualidade tanto nos equipamentos e insumos, como no atendimento atencioso e qualificado."
      ],
      footerNotes: ["Equipamentos de alta durabilidade e ", "Manutenção preventiva inclusa"]
    },
    features: ["Robustez", "Peças Nacionais", "Alta Disponibilidade"]
  },
  "Totens": {
    title: "Terminais de Autoatendimento e Gestão",
    description: "Modernize o atendimento do seu estabelecimento com nossos totems interativos.",
    images: ["/produtos/pro.png", "/servicos/Totem Pro.png",],
    detailedText: {
      paragraphs: [
        "A transformação digital no atendimento presencial é uma realidade necessária para empresas que buscam agilidade. Os <span class='text-green-600 font-bold'>Totens de Autoatendimento da Camasso</span> oferecem uma interface moderna e intuitiva, permitindo que o próprio usuário realize triagens, emita senhas ou efetue pagamentos de forma autônoma.",
        "Nossas soluções são projetadas para reduzir drasticamente o tempo de espera em filas, liberando sua equipe para tarefas mais complexas e estratégicas. Com um design ergonômico e elegante, os equipamentos se adaptam perfeitamente a <span class='text-green-600 font-bold'>hospitais, clínicas, eventos, varejo e grandes recepções</span>.",
        "Além da estética premium, o hardware é robusto e preparado para alta circulação, garantindo estabilidade operacional. A integração com sistemas de gestão local é feita de forma fluida, permitindo o acompanhamento de dados em tempo real sobre o fluxo de atendimento do seu estabelecimento.",
        "<strong>Principais aplicações dos Totens Camasso:</strong><br/>• Gestão de filas e emissão de senhas inteligentes;<br/>• Check-in e check-out automatizados;<br/>• Terminais de consulta e pagamentos rápidos;<br/>• Pesquisas de satisfação e interação publicitária."
      ],
      footerNotes: ["Integração com sistemas locais", "Design ergonômico"]
    },
    features: ["Autoatendimento", "Redução de Filas", "Interatividade"]
  },
  "PDVs": {
    title: "Soluções Completas para Ponto de Venda",
    description: "Frentes de caixa eficientes para varejo e serviços de todos os tamanhos.",
    images: ["/produtos/pdv impress.png", "/produtos/pdv.png"],
    detailedText: {
      paragraphs: [
        "O sucesso de uma operação comercial depende diretamente da eficiência no momento do fechamento da venda. Os <span class='text-green-600 font-bold'>PDVs da Camasso</span> reúnem o que há de mais moderno em hardware para automação comercial, combinando processamento ágil com periféricos de alta durabilidade.",
        "Nossas soluções são projetadas para suportar o ritmo intenso do varejo, garantindo que o seu ponto de venda opere sem interrupções, mesmo nos momentos de maior movimento. Além da performance, priorizamos a <span class='text-green-600 font-bold'>conformidade fiscal</span>, oferecendo equipamentos totalmente compatíveis com as normas vigentes (SAT, NFC-e e MF-e).",
        "Ao optar pelo outsourcing de PDV com a Camasso, sua empresa elimina custos de manutenção inesperados e obsolescência tecnológica. Entregamos uma solução <span class='text-green-600 font-bold'>plug-and-play</span>, com suporte técnico especializado e substituição ágil de hardware, permitindo que você foque exclusivamente na experiência de compra do seu cliente.",
        "<strong>Destaques da solução de PDV Camasso:</strong><br/>• Computadores compactos de alto desempenho (All-in-One);<br/>• Impressoras térmicas de cupom com alta velocidade de guilhotina;<br/>• Integração com leitores de código de barras e QR Code;<br/>• Estabilidade operacional para evitar filas e abandono de carrinhos."
      ],
      footerNotes: ["Conformidade Fiscal e ", "Suporte Especializado"]
    },
    features: ["Rapidez no Caixa", "Compacto", "Pronto para Uso"]
  }
};