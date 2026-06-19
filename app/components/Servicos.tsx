import Link from "next/link";
import {
  Stethoscope,
  ShieldCheck,
  ClipboardCheck,
  FileCheck,
  FileSpreadsheet,
  PersonStanding,
  HardHat,
  Factory,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
const servicosHome = [
  {
    title: "PCMSO",
    slug: "pcmso",
    image: "/pcmso-card.webp",
    description:
      "Elaboração e gestão completa do Programa de Controle Médico de Saúde Ocupacional, com acompanhamento dos exames obrigatórios e conformidade com a NR-07.",
    icon: Stethoscope,
  },

  {
    title: "PGR",
    slug: "pgr",
    image: "/pgr-card.webp",
    description:
      "Identificação, avaliação e gerenciamento dos riscos ocupacionais da sua empresa para atendimento à NR-01 e redução de passivos trabalhistas.",
    icon: ShieldCheck,
  },

  {
    title: "Exames Ocupacionais",
    slug: "exames-ocupacionais",
    image: "/exame-ocupacional-card.webp",
    description:
      "Realizamos exames admissionais, periódicos, demissionais, retorno ao trabalho e mudança de função com emissão rápida de ASO.",
    icon: ClipboardCheck,
  },

  {
    title: "LTCAT",
    slug: "ltcat",
    image: "/ltcat-card.webp",
    description:
      "Laudo Técnico das Condições Ambientais do Trabalho elaborado por profissionais especializados para atender exigências previdenciárias e do eSocial.",
    icon: FileCheck,
  },

  {
    title: "eSocial SST",
    slug: "esocial",
    image: "/eSocial-card.webp",
    description:
      "Gestão e envio dos eventos S-2210, S-2220, S-2221 e S-2240, garantindo conformidade legal e evitando multas para sua empresa.",
    icon: FileSpreadsheet,
  },

  {
    title: "Ergonomia - AEP/AET",
    slug: "ergonomia",
    image: "/ergonomia-card.webp",
    description:
      "Análises ergonômicas, AEP, AET e avaliação dos fatores psicossociais para adequação à NR-17 e melhoria das condições de trabalho.",
    icon: PersonStanding,
  },

  {
    title: "Segurança do Trabalho",
    slug: "seguranca-do-trabalho",
    image: "/seguranca-do-trabalho-image.webp",
    description:
      "Consultoria especializada em SST para prevenção de acidentes, conformidade com as NRs e proteção dos colaboradores.",
    icon: HardHat,
  },

  {
    title: "Avaliações Ambientais",
    slug: "avaliacoes-ambientais",
    image: "/avaliacoes-ambientais-image.webp",
    description:
      "Medições de ruído, calor, agentes químicos, biológicos e demais riscos ocupacionais para suporte técnico aos programas SST.",
    icon: Factory,
  },

  {
    title: "Treinamentos SST",
    slug: "treinamentos-sst",
    image: "/treinamento-sst-image.webp",
    description:
      "Treinamentos obrigatórios conforme as Normas Regulamentadoras, com emissão de certificados e documentação completa.",
    icon: GraduationCap,
  },

  {
    title: "Medicina do Trabalho",
    slug: "medicina-do-trabalho",
    image: "/exames-ocupacionais-image.webp",
    description:
      "Soluções completas em saúde ocupacional para proteger colaboradores, reduzir riscos e manter sua empresa em conformidade.",
    icon: HeartPulse,
  },
];

export default function Servicos() {
  return (
    <section className="servicos">
      <div className="container">
        <div className="text">
          <h2>Conheça nossos serviços em segurança do trabalho:</h2>
          <p></p>
        </div>
        <div className="servicos-grid">
          {servicosHome.map(servico => {
            const Icon = servico.icon;

            return (
              <div className="servico-item" key={servico.slug}>
                <div className="serviceIcon">
                  <Icon size={70} strokeWidth={1.5} />
                </div>

                <img
                  src={servico.image}
                  alt={servico.title}
                  className="servico-bg"
                />

                <div className="item-text">
                  <h3>{servico.title}</h3>
                  <p>{servico.description}</p>
                </div>

                <div className="buttons">
                  <Link
                    href={`/servicos/${servico.slug}`}
                    className="saibaMais"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
