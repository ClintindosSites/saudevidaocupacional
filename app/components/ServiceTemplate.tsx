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
            <p className="subtitle">{service.introText}</p>
          </div>
        </div>
      </section>

      <section className="benefitsConversion">
        <div className="container">
          <div className="text">
            <h2>Quais benefícios a {service.title} pode beneficiar minha</h2>
          </div>
          {service.benefits.map(item => (
            <div className="beneficio-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="ctaFinal">
        <div className="container">
          {" "}
          <h2>
            Proteja a sua empresa com a nossa consultoria em <br />
            <span className="text-[#89b5f1]">{service.title}</span>
          </h2>
          <a href="#contato" className="btnHeader">
            Falar com um especialista
          </a>
        </div>
      </section>
    </>
  );
}
