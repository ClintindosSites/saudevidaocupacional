"use client";

import { whatsappUrl } from "@/constants/whatsapp";

const reviews = [
  {
    nome: "Carlos Henrique",
    empresa: "Metalúrgica BH",
    nota: 5,
    comentario:
      "Atendimento rápido e extremamente profissional. Conseguimos regularizar toda a documentação de SST e eSocial sem complicações.",
  },

  {
    nome: "Fernanda Souza",
    empresa: "Grupo Alimentar Prime",
    nota: 5,
    comentario:
      "Equipe muito atenciosa. Os exames ocupacionais foram realizados dentro do prazo e com excelente suporte.",
  },

  {
    nome: "Ricardo Oliveira",
    empresa: "Construtora Minas",
    nota: 5,
    comentario:
      "O suporte na elaboração do PGR e PCMSO foi fundamental para manter nossa empresa em conformidade.",
  },

  {
    nome: "Juliana Costa",
    empresa: "Logística Express",
    nota: 5,
    comentario:
      "Excelente experiência. Profissionais competentes e atendimento muito acima do esperado.",
  },
];
export default function Avaliacoes() {
  return (
    <section className="reviews">
      <div className="container">
        {" "}
        <div className="avaliacoes-header">
          <span className="badge">AVALIAÇÕES</span>

          <h2>O que nossos clientes dizem</h2>

          <p>
            Mais segurança, conformidade e tranquilidade para empresas de
            diversos segmentos.
          </p>
        </div>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-top">
                <div className="avatar">{review.nome.charAt(0)}</div>

                <div>
                  <h3>{review.nome}</h3>
                  <span>{review.empresa}</span>
                </div>
              </div>

              <div className="stars">{"⭐".repeat(review.nota)}</div>

              <p>{review.comentario}</p>
            </div>
          ))}
        </div>
        <a href={whatsappUrl} className="btnHeader">
          Falar com um especialista
        </a>
      </div>
    </section>
  );
}
