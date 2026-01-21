
export interface SolutionData {
  title: string;
  description: string;
  images?: string[];
  features: string[];
  highlight: string;
  detailedText: {
    paragraphs: string[];
    footerNotes: string[];
  };
}

export const solutionsData: Record<string, SolutionData> = {
  "Etiquetas": {
    title: "Etiquetas",
    description: "Outsourcing de Etiquetas é a terceirização da produção de etiquetas de sua empresa. Há vários tipos, autoadesivas, produzidas para diversas finalidades, como código de barras, preços, entre muitas outras. De acordo com a demanda, Outsourcing de Etiquetas torna-se uma solução importante para a redução de custos e aumento da qualidade de seu produto final.",
    images: [
      "/servicos/empresa-etiquetas-termicas-02.jpg", 
      "/servicos/etiqueta-termica-onde-comprar-03.jpg",
      "/servicos/empresa-etiquetas-termicas-03.jpg"
    ],
    highlight: "Fabricação Própria",
    features: ["Adesivos Especiais", "Ribbons de Cera/Resina", "Padrão ANVISA"],
    detailedText: {
      paragraphs: [
        "Somos fabricantes da solução completa, desde <span class='text-[#008542]'>Hardware</span>, <span class='text-[#008542]'>Software</span> e insumos como <span class='text-[#008542]'>etiquetas</span> e <span class='text-[#008542]'>ribbons</span>. Seja empresa de pequeno ou grande porte, comércio, indústria ou varejo, as etiquetas fabricadas pela Camasso atendem a todas as demandas do mercado.",
        "Assim, <strong>oferecemos soluções desde aplicações em temperaturas baixas ou altas, até uma simples identificação utilizando etiquetas brancas</strong>.",
        "Entendemos primeiro a necessidade e as aplicações de nosso cliente e, após essa análise, indicamos o melhor produto.",
        "Trabalhamos com clientes de diversos setores como: <span class='text-[#008542] font-semibold'>alimentício, automobilístico, químico, armazenamento e logística, siderurgia, entre outros</span>.",
        "A Camasso também oferece para a área da saúde um projeto de padronização eficiente e econômico, de acordo com os protocolos da Anvisa e Ministério da Saúde. Trata-se da atualização das etiquetas utilizadas com medidas padronizadas, reduzindo modelos e aumentando os volumes, levando à <strong>diminuição de custos</strong>.",
        "Dessa forma é possível utilizar medidas padrão para os <span class='text-[#008542]'>diversos setores</span> como: recepção, laboratório, centro de diagnóstico, almoxarifado, internação, nutrição, arquivo médico e também podemos atender a <span class='text-[#008542]'>demandas de embalagens para unitarização de medicamentos nos ambientes da farmácia</span>."
      ],
      footerNotes: [
        "ADQUIRA TUDO ISSO COM UMA EMPRESA FABRICANTE, CONTANDO COM <span class='text-[#008542]'>TÉCNICO NACIONAL</span> E EXPERIÊNCIA DE <span class='text-[#008542]'>MAIS DE 15 ANOS NO MERCADO</span>.",
        "TRABALHAMOS COM VENDA OU COM CONTRATOS DE <span class='text-[#008542]'>OUTSOURCING DA SOLUÇÃO</span>."
      ]
    }
  },
  "Pulseiras": {
    title: "Segurança e Precisão Hospitalar",
    description: "A pulseira de identificação térmica é fornecida em rolos de coluna única, com impressão através de impressoras térmicas diretas. Dados variáveis e códigos de barras são impressos diretamente em sua superfície, dispensando a necessidade do uso de ribbon.As pulseiras de classificação de risco coloridas podem vir já impressas com os riscos, conforme as demandas do hospital, em diversas cores.",
    images: [
      "/servicos/pulseira-identificacao-biomedical-02.jpg",
      "/servicos/pulseira-identificacao-recem-nascido-preco-01.jpg",
      "/servicos/pulseira-identificacao-recem-nascido-preco-02.jpg"
    ],
    highlight: "Protocolo de Segurança",
    features: ["Pulseiras Hipoalergênicas", "Controle de Acesso", "Triagem Inteligente"],
    detailedText: {
      paragraphs: [
        "<span class='text-[#008542] font-bold uppercase'>Confira as principais características e benefícios das pulseiras Camasso para o uso hospitalar:</span>",
        "- Fáceis de usar, seguras e muito confortáveis;",
        "- Disponíveis nos tamanhos adulto, infantil / neonatal;",
        "- Eliminam o risco de deixar os registros das informações do paciente no ribbon;",
        "- Proporcionam durabilidade superior de imagem, resistente a tração e lacre inviolável;",
        "- Excelente qualidade de impressão para código de barras e dados variáveis;",
        "- Livre de látex, à prova d'água e resistente a mancha, abrasão, álcool, produtos de limpeza suaves e muito mais."
      ],
      footerNotes: [
        "Consulte nossos modelos de <span class='text-[#008542]'>pulseiras para triagem</span>.",
        "Experiência comprovada em grandes grupos hospitalares."
      ]
    }
  },
  "Hardware": {
    title: "Hardware",
    description: "A tecnologia de código de barras é uma facilitadora importante no suporte à digitalização no negócio da indústria e de logística. A aplicação dessa tecnologia melhora muito o grau de automação na modernização do processo.",
    images: [
      "/servicos/empresa-de-impressora-termica-02.png", 
      "/servicos/aluguel-impressora-termica-04.png",
      "/servicos/aluguel-impressoras-04.jpg"
    ],
    highlight: "Automação e Controle",
    features: ["Impressoras Térmicas", "Coletores de Dados", "Leitores de Código de Barras"],
    detailedText: {
      paragraphs: [
        "Globalmente é a <strong>mais poderosa no rastreamento automático</strong> para produzir uma maneira simples e rápida de coletar informações de forma altamente precisa, mesmo com uma grande quantidade de troca de dados. <span class='text-[#008542]'>A tecnologia do código de barras é de baixo custo e, o equipamento, fácil e conveniente de usar</span>.",
        "Desde o processo de produção até as vendas, a tecnologia do código de barras atua como um link que liga cada estágio. <span class='text-[#008542]'>Vincula todas as atividades durante a vida útil do produto</span> a uma história completa. Desempenha um papel importante na identificação precisa dos itens no processo e pode acelerar o ciclo de vida inteiro de um produto. Uma <strong>tecnologia fundamental de todo o modelo de negócios da indústria e logística digitalizada</strong>.",
        "Em geral, o sistema consiste em <strong>etiquetas de código de barras, impressoras térmicas, coletores ou scanner, computador do sistema</strong> e outros equipamentos. A etiqueta do código de barras é um índice para um local de memória no computador em que as informações estão armazenadas. <span class='text-[#008542]'>Pode carregar as informações do sistema, convertendo automaticamente para o formato de dados compatível, e inserir no computador</span>. Realiza a aquisição e identificação automáticas de dados."
      ],
      footerNotes: [
        "Consulte nossas opções de <span class='text-[#008542]'>locação e outsourcing de hardware</span>.",
        "Suporte técnico especializado para toda a linha de automação."
      ]
    }
  },
  "Software": {
    title: "Gestão Hospitalar e Beira-Leito Digital",
    description: "A checagem beira-leito é considerada solução adequada para assegurar qualidade no atendimento e segurança do paciente. Consiste no uso de dispositivo móvel para verificação de prescrições médicas. Isso permite ao usuário acesso e utilização de informações vitais do paciente em tempo real.",
    images: [
   
    ],
    highlight: "Segurança do Paciente",
    features: ["Beira-Leito Digital", "Integração com ERP", "Redução de Erros"],
    detailedText: {
      paragraphs: [
        "Em 2017, o IESS e o Instituto de Pesquisa da Feluma produziram um <span class='text-[#008542]'>relatório de mortes por eventos adversos no Brasil</span>. O estudo indicou que <strong>erros e falhas em hospitais causaram 6 mortes por hora no País</strong>, revelando que 66% desses óbitos poderiam ter sido evitados. O cenário <span class='text-[#008542]'>retrata o panorama preocupante da rede de saúde pública e privada</span>.",
        "Com o uso de tecnologia móvel, o aplicativo é capaz de consultar os dados de pacientes direto na base do ERP hospitalar. É possível verificar informações sobre administração de medicamentos como: <span class='text-[#008542] font-semibold'>dados do paciente, riscos assistenciais, horários de medicação, aplicação e dosagem</span>.",
        "<strong>O beira-leito digital auxilia no combate a eventos adversos</strong>. Na prática, consiste em ler, por meio de um dispositivo, a pulseira de identificação do paciente, o crachá do enfermeiro e o código de barras do medicamento. Com isso, ocorre a liberação do procedimento e o registro de importantes informações sobre o paciente."
      ],
      footerNotes: [
        "Tecnologia fundamental para a <span class='text-[#008542]'>transformação digital da saúde</span>.",
        "Redução drástica de falhas humanas na administração medicamentosa."
      ]
    }
  },
};

export const solutionCategories = Object.keys(solutionsData);