import { whatsappUrl } from "@/constants/whatsapp";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1 className="titulo-principal">
            Medicina e Segurança do Trabalho para <br />
            <span> Empresas de Todos os Portes</span>
          </h1>
          <p className="subtitulo">
            Mantenha sua empresa em conformidade com as exigências legais, evite
            multas e proteja a saúde dos seus colaboradores com soluções
            completas em SST.
          </p>
          <a href={whatsappUrl} className="btnHeader3">
            Fale direto no Whatsapp
          </a>
        </div>
        <div className="heroForm">
          <form>
            <h3>Entre em contato conosco</h3>
            <div>
              {" "}
              <label htmlFor="name">Nome da empresa:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="responsavel">Responsável Pelo Contato:</label>
              <input type="text" name="responsavel" />
            </div>
            <div>
              {" "}
              <label htmlFor="address">Endereço completo:</label>
              <input type="text" name="address" />
            </div>
            z
            <div>
              {" "}
              <label htmlFor="options">Selecione o serviço desejado:</label>
              <select name="Selecione o serviço desejado" id="">
                <option value="">Medicina do trabalho</option>
                <option value="">Segurança do trabalho</option>
                <option value="">Exames ocupacionais</option>
                <option value="">eSocial</option>
              </select>
            </div>
            <div>
              {" "}
              <label htmlFor="textarea"></label>
              <textarea name="textarea" id="textarea"></textarea>
            </div>
            <button className="submit btnHeader">
              Enviar orçamento para o Whatsapp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
