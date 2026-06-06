import Image from "next/image";
import Link from "next/link";

export default function Servicos() {
  return (
    <section className="servicos">
      <div className="container">
        <div className="text">
          <h2>Conheça nossos serviços em segurança do trabalho:</h2>
          <p></p>
        </div>
        <div className="servicos-grid">
          <div className="servico-item">
            <div className="item-img">
              <Image
                src={"/pcmso-card.webp"}
                width={270}
                height={100}
                alt="pcmso"
              />
            </div>
            <div className="item-text">
              <h3>PCMSO</h3>
              <p>Programa de Controle Médico de Saúde Ocupacional</p>
            </div>
            <div className="buttons">
              <Link href={"/servicos/"} className="saibaMais">
                Saiba mais
              </Link>
              <a href="#" className="WhatsAppBtn">
                Atendimento no WhatsApp
              </a>
            </div>
          </div>
          <div className="servico-item">
            <div className="item-img">
              <Image
                src={"/pgr-card.webp"}
                width={270}
                height={100}
                alt="pcmso"
              />
            </div>{" "}
            <div className="item-text">
              <h3>PGR</h3>
              <p>Programa de Gerenciamento de Riscos.</p>
            </div>
            <div className="buttons">
              <Link href={"/servicos/"} className="saibaMais">
                Saiba mais
              </Link>
              <a href="#" className="WhatsAppBtn">
                Atendimento no WhatsApp
              </a>
            </div>
          </div>
          <div className="servico-item">
            <div className="item-img">
              <Image
                src={"/exame-ocupacional-card.webp"}
                width={270}
                height={100}
                alt="pcmso"
              />
            </div>
            <div className="item-text">
              <h3>Exames Ocupacionais</h3>
              <p>
                Admissional, Demissional, Periódico, Retorno ao Trabalho e
                Mudança de Função.
              </p>
            </div>
            <div className="buttons">
              <Link href={"/servicos/"} className="saibaMais">
                Saiba mais
              </Link>
              <a href="#" className="WhatsAppBtn">
                Atendimento no WhatsApp
              </a>
            </div>
          </div>
          <div className="servico-item">
            <div className="item-img">
              <Image
                src={"/ltcat-card.webp"}
                width={270}
                height={100}
                alt="pcmso"
              />
            </div>
            <div className="item-text">
              <h3>LTCAT</h3>
              <p>Laudo Técnico das Condições Ambientais do Trabalho.</p>
            </div>
            <div className="buttons">
              <Link href={"/servicos/"} className="saibaMais">
                Saiba mais
              </Link>
              <a href="#" className="WhatsAppBtn">
                Atendimento no WhatsApp
              </a>
            </div>
          </div>
          <div className="servico-item">
            {" "}
            <div className="item-text">
              <div className="item-img">
                <Image
                  src={"/eSocial-card.webp"}
                  width={270}
                  height={100}
                  alt="pcmso"
                />
              </div>
              <h3>eSocial</h3>
              <p>Envio correto e seguro dos eventos obrigatórios.</p>
            </div>
            <div className="buttons">
              <Link href={"/servicos/"} className="saibaMais">
                Saiba mais
              </Link>
              <a href="#" className="WhatsAppBtn">
                Atendimento no WhatsApp
              </a>
            </div>
          </div>
          <div className="servico-item">
            <div className="item-img">
              <Image
                src={"/ergonomia-card.webp"}
                width={270}
                height={100}
                alt="pcmso"
              />
            </div>
            <div className="item-text">
              <h3>Ergonomia</h3>
              <p>
                AET e avaliações ergonômicas para adequação às normas vigentes.
              </p>
            </div>
            <div className="buttons">
              <Link href={"/servicos/"} className="saibaMais">
                Saiba mais
              </Link>
              <a href="#" className="WhatsAppBtn">
                Atendimento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
