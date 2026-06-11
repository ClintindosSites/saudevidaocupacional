import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/553135323016?text=Olá,%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <span className="tooltip">Fale com um especialista</span>

      <FaWhatsapp size={34} />
    </a>
  );
}
