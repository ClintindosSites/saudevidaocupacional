import { ServiceData } from "@/types/service";

interface Props {
  service: ServiceData;
}

export default function ServiceTemplate({ service }: Props) {
  return (
    <>
      <section className="serviceHero hero">
        <div className="container">
          {" "}
          <div className="text">
            <h1 className="title">{service.title}</h1>
            <p className="subtitle">{service.description}</p>
            <a href="#contato" className="btnHeader">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      <section className="dor">
        <div className="container">
          <div className="text">
            {" "}
            <h2>{service.introTitle}</h2>
            <p>{service.introText}</p>
          </div>
        </div>
      </section>

      <section className="benefitsConversion">
        <div className="container">
          {service.benefits.map(item => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="ctaFinal">
        <div className="container">
          {" "}
          <h2>Solicite um orçamento sem compromisso</h2>
          <a href="#contato" className="btnHeader">
            Falar com um especialista
          </a>
        </div>
      </section>
    </>
  );
}
