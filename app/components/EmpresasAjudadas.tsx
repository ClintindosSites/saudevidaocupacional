import { whatsappUrl } from "@/constants/whatsapp";

const linha1 = [
  "/awema.webp",
  "/bom-beef.webp",
  "/cetecman.webp",
  "/cooperar.webp",
  "/coopsey.webp",
  "/dolox.webp",
];

const linha2 = [
  "/gelowinx-light.webp",
  "/jhm.webp",
  "/jwf.webp",
  "/montbec.webp",
  "/nexuz-light.webp",
  "/panda-pe.webp",
  "/press.webp",
];

const linha3 = [
  "/prime.webp",
  "/santa-gema.webp",
  "/shieldguard-light.webp",
  "/so-borrachas.webp",
  "/sorvetes-top.webp",
  "/spotlight-light.webp",
  "/tecshen.webp",
];
function LogoRow({ logos }: { logos: string[] }) {
  return (
    <div className="logoRow">
      <div className="logoTrack">
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo} alt="Empresa atendida" />
        ))}
      </div>
    </div>
  );
}
export default function EmpresasAjudadas() {
  return (
    <section className="provasSociais">
      <div className="container">
        <div className="headerSection">
          <span>EMPRESAS ATENDIDAS</span>

          <h2>
            Empresas que confiam na <br />{" "}
            <span className="red">Saúde e Vida Ocupacional</span>
          </h2>

          <p>
            Há anos ajudamos organizações a manterem conformidade com as normas
            de Saúde e Segurança do Trabalho, protegendo pessoas e fortalecendo
            negócios.
          </p>
        </div>

        <div>
          {" "}
          <LogoRow logos={linha1} />
          <LogoRow logos={linha2} />
          <LogoRow logos={linha3} />
        </div>
        <a href={whatsappUrl} className="btnHeader">
          Fale conosco e seja nosso cliente{" "}
        </a>
      </div>
    </section>
  );
}
