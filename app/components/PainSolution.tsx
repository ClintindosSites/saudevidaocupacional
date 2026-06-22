import { whatsappUrl } from "@/constants/whatsapp";

export default function PainSolution() {
  return (
    <section className="painSolution">
      <div className="container">
        <div className="text">
          <h2>
            Há mais de <span>17 anos</span> ajudando empresas a manterem a
            conformidade em Saúde e Segurança do Trabalho
          </h2>

          <p>
            A Saúde e Vida é especializada em Medicina e Segurança do Trabalho,
            oferecendo soluções completas para empresas que desejam atuar dentro
            das exigências legais, proteger seus colaboradores e evitar multas,
            autuações e passivos trabalhistas.
          </p>

          <p>
            Nossa equipe atua na elaboração de documentos obrigatórios,
            realização de exames ocupacionais, gestão do eSocial SST, avaliações
            ambientais, ergonomia, treinamentos e consultoria especializada para
            empresas de diversos segmentos.
          </p>

          <p>
            Com mais de 17 anos de experiência no mercado e centenas de empresas
            atendidas em Minas Gerais, trabalhamos para que nossos clientes
            tenham tranquilidade, segurança jurídica e total conformidade com as
            normas de Saúde e Segurança do Trabalho.
          </p>

          <a href={whatsappUrl} className="btnHeader2">
            Solicitar atendimento no WhatsApp
          </a>
        </div>

        <div className="imgBox">
          <img
            src="/sobre-bg.webp"
            alt="Saúde e Vida Medicina e Segurança do Trabalho"
          />
        </div>
      </div>
    </section>
  );
}
