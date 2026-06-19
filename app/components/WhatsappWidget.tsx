"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const atendentes = [
    {
      nome: "Comercial",
      foto: "/avatar-vendas.webp",
      whatsapp:
        "https://wa.me/553135323016?text=Olá,%20gostaria%20de%20um%20orçamento.",
    },

    {
      nome: "Agendamento de Exames",
      foto: "/avatar-agendamento-exames.webp",
      whatsapp:
        "https://wa.me/553135323016?text=Olá,%20gostaria%20de%20agendar%20exames.",
    },
  ];

  return (
    <>
      {open && (
        <div className="whatsapp-modal">
          <div className="header">
            <h3>Central de Atendimento</h3>

            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {atendentes.map(item => (
            <a
              key={item.nome}
              href={item.whatsapp}
              target="_blank"
              className="atendente"
            >
              <img src={item.foto} alt={item.nome} />

              <div>
                <strong>{item.nome}</strong>
                <p>🟢 Online</p>
              </div>
            </a>
          ))}
        </div>
      )}

      <button className="whatsapp-float " onClick={() => setOpen(!open)}>
        <FaWhatsapp size={34} />
      </button>
    </>
  );
}
