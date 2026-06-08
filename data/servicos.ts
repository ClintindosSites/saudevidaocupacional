import { ServiceData } from "@/types/service";

export const servicos: ServiceData[] = [
  {
    slug: "pcmso",

    title: "PCMSO",

    description: "Programa de Controle Médico de Saúde Ocupacional",

    heroImage: "/pcmso.webp",

    benefits: [
      "Evite multas",
      "Conformidade legal",
      "Proteção dos colaboradores",
      "Suporte especializado",
    ],

    introTitle: "O que é o PCMSO?",

    introText:
      "O Programa de Controle Médico de Saúde Ocupacional é obrigatório para empresas e tem como objetivo monitorar a saúde dos trabalhadores.",

    faq: [
      {
        question: "Quem precisa ter PCMSO?",
        answer: "Toda empresa com empregados registrados deve possuir PCMSO.",
      },
    ],

    seo: {
      title: "PCMSO - Programa de Controle Médico de Saúde Ocupacional",

      description: "Implantação de PCMSO para empresas.",

      keywords: ["PCMSO", "saúde ocupacional", "medicina do trabalho"],
    },
  },

  {
    slug: "pgr",

    title: "PGR",

    description: "Programa de Gerenciamento de Riscos",

    heroImage: "/pgr-card.webp",

    benefits: [
      "Redução de riscos",
      "Conformidade legal",
      "Segurança operacional",
      "Documentação completa",
    ],

    introTitle: "O que é o PGR?",

    introText:
      "O Programa de Gerenciamento de Riscos identifica, avalia e controla riscos ocupacionais.",

    faq: [],

    seo: {
      title: "PGR - Programa de Gerenciamento de Riscos",
      description: "Elaboração de PGR para empresas.",
      keywords: ["PGR"],
    },
  },
  {
    slug: "exames-ocupacionais",

    title: "Exames Ocupacionais",

    description:
      "Exames Admissionais, Periódicos, Demissionais e Retorno ao Trabalho",

    heroImage: "/exames-ocupacionais.webp",

    benefits: [
      "Atendimento rápido",
      "Conformidade com a legislação",
      "Laudos e ASO emitidos",
      "Redução de riscos trabalhistas",
    ],

    introTitle: "O que são os Exames Ocupacionais?",

    introText:
      "Os exames ocupacionais são obrigatórios para monitorar a saúde dos trabalhadores e garantir que a empresa esteja em conformidade com as exigências da Medicina do Trabalho.",

    faq: [
      {
        question: "Quais exames ocupacionais são obrigatórios?",
        answer:
          "Os principais exames são admissional, periódico, mudança de função, retorno ao trabalho e demissional.",
      },
      {
        question: "Quem deve realizar os exames ocupacionais?",
        answer:
          "Toda empresa com funcionários registrados deve realizar os exames ocupacionais conforme previsto na legislação trabalhista.",
      },
    ],

    seo: {
      title: "Exames Ocupacionais | Admissional, Periódico e Demissional",

      description:
        "Realização de exames ocupacionais para empresas. Atendimento rápido, emissão de ASO e conformidade legal.",

      keywords: [
        "exames ocupacionais",
        "exame admissional",
        "exame periódico",
        "exame demissional",
        "ASO",
      ],
    },
  },
  {
    slug: "ergonomia",

    title: "Ergonomia",

    description: "Análise Ergonômica do Trabalho e Adequação à NR-17",

    heroImage: "/ergonomia.webp",

    benefits: [
      "Redução de afastamentos",
      "Maior produtividade",
      "Adequação à NR-17",
      "Melhoria do ambiente de trabalho",
    ],

    introTitle: "O que é Ergonomia?",

    introText:
      "A ergonomia adapta o ambiente de trabalho às características dos colaboradores, reduzindo riscos ocupacionais, aumentando o conforto e melhorando a produtividade.",

    faq: [
      {
        question: "Quando a empresa precisa realizar uma análise ergonômica?",
        answer:
          "A análise é recomendada para identificar riscos ergonômicos e pode ser exigida durante fiscalizações ou processos trabalhistas.",
      },
      {
        question: "O que é a AET?",
        answer:
          "A Análise Ergonômica do Trabalho (AET) é um estudo técnico que avalia as condições ergonômicas do ambiente laboral.",
      },
    ],

    seo: {
      title: "Ergonomia para Empresas | Análise Ergonômica do Trabalho",

      description:
        "Serviços de ergonomia, AET e adequação à NR-17. Reduza riscos e aumente a produtividade da sua equipe.",

      keywords: [
        "ergonomia",
        "AET",
        "análise ergonômica do trabalho",
        "NR17",
        "ergonomia empresarial",
      ],
    },
  },
  {
    slug: "ltcat",

    title: "LTCAT",

    description: "Laudo Técnico das Condições Ambientais do Trabalho",

    heroImage: "/ltcat.webp",

    benefits: [
      "Conformidade previdenciária",
      "Identificação de agentes nocivos",
      "Documentação técnica completa",
      "Segurança jurídica para a empresa",
    ],

    introTitle: "O que é o LTCAT?",

    introText:
      "O LTCAT é um documento técnico elaborado por profissional habilitado para identificar a exposição dos trabalhadores a agentes nocivos e atender às exigências previdenciárias.",

    faq: [
      {
        question: "O LTCAT é obrigatório?",
        answer:
          "Sim. Empresas com trabalhadores expostos a agentes nocivos devem possuir LTCAT atualizado.",
      },
      {
        question: "Qual a diferença entre LTCAT e PGR?",
        answer:
          "O PGR é voltado para gerenciamento de riscos ocupacionais, enquanto o LTCAT possui foco previdenciário e aposentadoria especial.",
      },
    ],

    seo: {
      title: "LTCAT | Laudo Técnico das Condições Ambientais do Trabalho",

      description:
        "Elaboração de LTCAT para empresas. Atendimento especializado e conformidade com as exigências previdenciárias.",

      keywords: [
        "LTCAT",
        "laudo técnico",
        "aposentadoria especial",
        "agentes nocivos",
        "segurança do trabalho",
      ],
    },
  },
  {
    slug: "esocial",

    title: "eSocial SST",

    description:
      "Envio dos Eventos de Saúde e Segurança do Trabalho para o eSocial",

    heroImage: "/esocial.webp",

    benefits: [
      "Envio correto dos eventos SST",
      "Evite multas e penalidades",
      "Suporte especializado",
      "Conformidade com o eSocial",
    ],

    introTitle: "O que é o eSocial SST?",

    introText:
      "O eSocial SST é a obrigação de envio das informações de Saúde e Segurança do Trabalho ao Governo Federal por meio dos eventos S-2210, S-2220 e S-2240.",

    faq: [
      {
        question: "Quem precisa enviar informações SST ao eSocial?",
        answer:
          "Empresas obrigadas ao eSocial devem transmitir os eventos relacionados à Saúde e Segurança do Trabalho.",
      },
      {
        question: "Quais eventos SST são enviados ao eSocial?",
        answer:
          "Os principais são S-2210 (CAT), S-2220 (Monitoramento da Saúde do Trabalhador) e S-2240 (Condições Ambientais do Trabalho).",
      },
    ],

    seo: {
      title: "eSocial SST | Gestão e Envio dos Eventos SST",

      description:
        "Gestão completa do eSocial SST para empresas. Envio dos eventos obrigatórios com segurança e conformidade.",

      keywords: [
        "esocial SST",
        "S2210",
        "S2220",
        "S2240",
        "eventos SST",
        "medicina do trabalho",
      ],
    },
  },
  {
    slug: "seguranca-do-trabalho",

    title: "Segurança do Trabalho",

    description: "Gestão de Segurança do Trabalho para Empresas",

    heroImage: "/seguranca-do-trabalho.webp",

    benefits: [
      "Redução de acidentes",
      "Conformidade com as NRs",
      "Menor risco de autuações",
      "Ambiente de trabalho mais seguro",
    ],

    introTitle: "O que é Segurança do Trabalho?",

    introText:
      "A Segurança do Trabalho reúne ações e programas voltados para a prevenção de acidentes e doenças ocupacionais, protegendo colaboradores e empresas.",

    faq: [
      {
        question: "Toda empresa precisa investir em Segurança do Trabalho?",
        answer:
          "Sim. As exigências variam conforme a atividade econômica e os riscos ocupacionais existentes.",
      },
      {
        question: "Quais normas regulamentadoras são mais importantes?",
        answer:
          "As principais variam conforme o setor, mas NR-01, NR-06, NR-07, NR-09 e NR-17 estão entre as mais comuns.",
      },
    ],

    seo: {
      title: "Segurança do Trabalho para Empresas | Saúde e Vida",

      description:
        "Consultoria e gestão de Segurança do Trabalho para empresas. Reduza riscos, evite multas e proteja seus colaboradores.",

      keywords: [
        "segurança do trabalho",
        "consultoria SST",
        "normas regulamentadoras",
        "prevenção de acidentes",
        "SST",
      ],
    },
  },
  {
    slug: "avaliacoes-ambientais",

    title: "Avaliações Ambientais",

    description: "Avaliação de Agentes Físicos, Químicos e Biológicos",

    heroImage: "/avaliacoes-ambientais.webp",

    benefits: [
      "Identificação de riscos ocupacionais",
      "Laudos técnicos especializados",
      "Conformidade legal",
      "Base para programas SST",
    ],

    introTitle: "O que são Avaliações Ambientais?",

    introText:
      "As avaliações ambientais identificam agentes físicos, químicos e biológicos presentes no ambiente de trabalho para subsidiar programas de Saúde e Segurança do Trabalho.",

    faq: [
      {
        question: "Quais agentes podem ser avaliados?",
        answer:
          "Ruído, calor, vibração, poeiras, produtos químicos, agentes biológicos e outros fatores de risco ocupacional.",
      },
      {
        question: "As avaliações ambientais são obrigatórias?",
        answer:
          "Dependendo das atividades exercidas e dos riscos presentes, elas podem ser exigidas para elaboração de documentos e programas legais.",
      },
    ],

    seo: {
      title: "Avaliações Ambientais Ocupacionais | Saúde e Vida",

      description:
        "Avaliações ambientais para identificação de riscos ocupacionais e atendimento às exigências legais.",

      keywords: [
        "avaliações ambientais",
        "higiene ocupacional",
        "ruído ocupacional",
        "agentes químicos",
        "agentes físicos",
      ],
    },
  },
  {
    slug: "treinamentos-sst",

    title: "Treinamentos SST",

    description: "Treinamentos de Saúde e Segurança do Trabalho",

    heroImage: "/treinamentos-sst.webp",

    benefits: [
      "Capacitação dos colaboradores",
      "Conformidade com as NRs",
      "Redução de acidentes",
      "Certificados e documentação",
    ],

    introTitle: "Por que investir em Treinamentos SST?",

    introText:
      "Os treinamentos de SST capacitam colaboradores para desempenharem suas atividades com segurança e em conformidade com as normas regulamentadoras.",

    faq: [
      {
        question: "Quais treinamentos podem ser realizados?",
        answer:
          "NR-35, NR-33, NR-10, integração de segurança, uso de EPIs e diversos outros treinamentos obrigatórios.",
      },
      {
        question: "Os treinamentos geram certificado?",
        answer:
          "Sim. Os participantes recebem documentação e certificados conforme os requisitos aplicáveis.",
      },
    ],

    seo: {
      title: "Treinamentos SST para Empresas | Saúde e Vida",

      description:
        "Treinamentos de Saúde e Segurança do Trabalho com emissão de certificados e conformidade com as NRs.",

      keywords: [
        "treinamentos SST",
        "NR35",
        "NR33",
        "NR10",
        "treinamento segurança do trabalho",
      ],
    },
  },
];
