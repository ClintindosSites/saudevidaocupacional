import { whatsappUrl } from "@/constants/whatsapp";

export default function Beneficios() {
  return (
    <section className="beneficios">
      <div className="container">
        <div className="text">
          <h2>
            Por que investir em Saúde Ocupacional e Segurança do trabalho com a{" "}
            <br />
            <span>Saúde e Vida Ocupacional</span>
          </h2>
        </div>
        <div className="beneficios-list">
          <div className="beneficio-item">
            <h3>Evite Multas Indesejáveis</h3>
            <p>
              Evite transtornos financeiros com multas e mantenha sua empresa em
              conformidade com a legislação.
            </p>
          </div>
          <div className="beneficio-item">
            <h3>Reduza Afastamentos</h3>
            <p>Mais saúde e produtividade para sua equipe.</p>
          </div>
          <div className="beneficio-item">
            <h3>Proteja Sua Empresa</h3>
            <p>
              Reduza riscos acidentes de trabalho e problemas indesejáveis com
              processos trabalhistas.
            </p>
          </div>
          <div className="beneficio-item">
            <h3>Gestão Simplificada</h3>
            <p>Documentação organizada e suporte especializado.</p>
          </div>
        </div>
        <a href={whatsappUrl} className="btnHeader2">
          Solicitar consultoria no WhatsApp
        </a>
      </div>
    </section>
  );
}
