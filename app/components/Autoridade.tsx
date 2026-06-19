"use client";

import Counter from "./Counter";
import { whatsappUrl } from "@/constants/whatsapp";

export default function Autoridade() {
  return (
    <section className="autoridade">
      <div className="container">
        <div className="text">
          <h2>Experiência e Credibilidade</h2>

          <p>
            Na Saúde e Vida, oferecemos soluções completas em medicina e
            segurança do trabalho para garantir conformidade legal, qualidade de
            vida dos colaboradores e mais produtividade para o seu negócio.
          </p>
        </div>

        <div className="autoridade-container">
          <div className="autoridade-card">
            <Counter end={17} suffix="+" />
            <p>Anos de experiência em Segurança do Trabalho</p>
          </div>

          <div className="autoridade-card">
            <Counter end={165} suffix="+" />
            <p>Empresas atendidas em Minas Gerais</p>
          </div>

          <div className="autoridade-card">
            <Counter end={5000} suffix="+" duration={3000} />
            <p>Exames realizados em pequenas e grandes empresas</p>
          </div>

          <div className="autoridade-card">
            <Counter end={98} suffix="%" />
            <p>Clientes satisfeitos com nossa consultoria</p>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="btnHeader"
        >
          Transforme sua empresa em nossa cliente hoje mesmo
        </a>
      </div>
    </section>
  );
}
