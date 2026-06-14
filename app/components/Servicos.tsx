import Link from "next/link";

const servicosHome = [
  {
    title: "PCMSO",
    slug: "pcmso",
    image: "/pcmso-card.webp",
    description: "Programa de Controle Médico de Saúde Ocupacional",
    whatsapp:
      "Olá, vim do Google e gostaria de solicitar um orçamento para PCMSO.",
  },
  {
    title: "PGR",
    slug: "pgr",
    image: "/pgr-card.webp",
    description: "Programa de Gerenciamento de Riscos.",
    whatsapp:
      "Olá, vim do Google e gostaria de solicitar um orçamento para elaboração de PGR.",
  },
  {
    title: "Exames Ocupacionais",
    slug: "exames-ocupacionais",
    image: "/exame-ocupacional-card.webp",
    description:
      "Admissional, Demissional, Periódico, Retorno ao Trabalho e Mudança de Função.",
    whatsapp:
      "Olá, vim do Google e gostaria de agendar exames ocupacionais para minha empresa.",
  },
  {
    title: "LTCAT",
    slug: "ltcat",
    image: "/ltcat-card.webp",
    description: "Laudo Técnico das Condições Ambientais do Trabalho.",
    whatsapp:
      "Olá, vim do Google e gostaria de solicitar um orçamento para elaboração de LTCAT.",
  },
  {
    title: "eSocial SST",
    slug: "esocial",
    image: "/eSocial-card.webp",
    description: "Envio correto e seguro dos eventos obrigatórios.",
    whatsapp:
      "Olá, preciso de ajuda com os eventos SST do eSocial da minha empresa.",
  },
  {
    title: "Ergonomia",
    slug: "ergonomia",
    image: "/ergonomia-card.webp",
    description:
      "AET e avaliações ergonômicas para adequação às normas vigentes.",
    whatsapp:
      "Olá, vim do Google e gostaria de solicitar uma análise ergonômica para minha empresa.",
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
            const whatsappUrl = `https://wa.me/553135323016?text=${encodeURIComponent(
              servico.whatsapp
            )}`;

            return (
              <div className="servico-item" key={servico.slug}>
                <div className="item-img">
                  <img src={servico.image} alt={servico.title} />
                </div>

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

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="WhatsAppBtn"
                  >
                    Atendimento no WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
