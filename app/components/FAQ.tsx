"use client";

import { whatsappUrl } from "@/constants/whatsapp";
import { useState } from "react";

const faqs = [
  {
    pergunta: "O que é o PCMSO?",
    resposta:
      "O Programa de Controle Médico de Saúde Ocupacional (PCMSO) é obrigatório para empresas e tem como objetivo monitorar e preservar a saúde dos trabalhadores por meio de exames ocupacionais e acompanhamento médico.",
  },
  {
    pergunta: "O que é o PGR?",
    resposta:
      "O Programa de Gerenciamento de Riscos (PGR) identifica, avalia e controla os riscos presentes no ambiente de trabalho, ajudando a empresa a cumprir as exigências legais e reduzir acidentes.",
  },
  {
    pergunta: "Quais exames ocupacionais são obrigatórios?",
    resposta:
      "Os principais exames são admissional, periódico, retorno ao trabalho, mudança de função e demissional, conforme exigido pela legislação trabalhista.",
  },
  {
    pergunta: "Minha empresa precisa enviar informações ao eSocial?",
    resposta:
      "Sim. Empresas devem enviar eventos relacionados à Saúde e Segurança do Trabalho (SST) ao eSocial conforme as obrigações legais vigentes.",
  },
  {
    pergunta: "O que acontece se minha empresa não estiver em conformidade?",
    resposta:
      "A empresa pode estar sujeita a multas, autuações, processos trabalhistas e dificuldades durante fiscalizações dos órgãos competentes.",
  },
  {
    pergunta: "Quanto tempo leva para implantar os programas obrigatórios?",
    resposta:
      "O prazo depende do porte da empresa e dos serviços contratados, mas nossa equipe trabalha para entregar toda a documentação com agilidade e segurança.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <span>PERGUNTAS FREQUENTES</span>

          <h2>Tire suas dúvidas sobre Medicina e Segurança do Trabalho</h2>

          <p>
            Reunimos as perguntas mais comuns feitas por empresários e gestores
            sobre Saúde Ocupacional e SST.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.pergunta}</span>

                <span>{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.resposta}</p>
                </div>
              )}
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
