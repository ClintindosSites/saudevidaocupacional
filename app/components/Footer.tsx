import { whatsappUrl } from "@/constants/whatsapp";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="Saúde e Vida" />

            <p>
              Soluções completas em Medicina e Segurança do Trabalho, Saúde
              Ocupacional, eSocial SST, Ergonomia e Gestão de Riscos.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              Falar com um Especialista
            </a>
          </div>

          <div>
            <h3>Serviços</h3>

            <ul>
              <li>
                {" "}
                <Link href="/servicos/medicina-do-trabalho">
                  Medicina do Trabalho
                </Link>
              </li>

              <li>
                {" "}
                <Link href="/servicos/seguranca-do-trabalho">
                  Segurança do Trabalho
                </Link>
              </li>

              <li>
                {" "}
                <Link href="/servicos/exames-ocupacionais">
                  Exames Admissionais
                </Link>
              </li>
              <Link href={"/servicos/ltcat"}>LTCAT</Link>
              <li>
                {" "}
                <Link href={"/servicos/pcmso"}>PCMSO</Link>
              </li>
              <li>
                {" "}
                <Link href={"/servicos/pgr"}>PGR</Link>
              </li>
              <li>
                {" "}
                <Link href={"/servicos/ergonomia"}>Ergonomia</Link>
              </li>
              <li>
                {" "}
                <Link href="/servicos/eSocial">eSocial</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contato</h3>

            <ul>
              <li>(31) 3532-3016</li>

              <li>contato@saudevida.com.br</li>

              <li>Belo Horizonte - MG</li>

              <li>Segunda a Sexta</li>

              <li>08h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Saúde e Vida Medicina e Segurança do
            Trabalho. Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido por{" "}
            <a
              href="https://clintindossites.com.br"
              className="decoration-none"
              target="_blank"
            >
              Clintin dos Sites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
