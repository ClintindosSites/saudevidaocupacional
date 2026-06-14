import { whatsappUrl } from "@/constants/whatsapp";
import Image from "next/image";

export default function PainSolution() {
  return (
    <section className="painSolution">
      <div className="container">
        <div className="text">
          <h2>
            Sua empresa está em dia com as exigências de <br />
            <span>Saúde e Segurança do Trabalho?</span>
          </h2>
          <p>
            Empresas que não cumprem as exigências legais podem enfrentar
            multas, passivos trabalhistas e dificuldades com fiscalização.
          </p>
          <a href={whatsappUrl} className="btnHeader">
            Solicitar atendimento no WhatsApp
          </a>
        </div>
        <div className="imgBox">
          <Image
            src={"/logo.png"}
            width={300}
            height={200}
            alt={"Imagem  de segurança do trabalho para empresas"}
          />
        </div>
      </div>
    </section>
  );
}
