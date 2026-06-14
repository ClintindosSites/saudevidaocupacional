import { ServiceData } from "@/types/service";

interface Props {
  service: ServiceData;
}

export default function ServiceTemplate({ service }: Props) {
  const whatsappMessage = encodeURIComponent(
    `Olá, vim do Google e gostaria de receber mais informações sobre ${service.title}`
  );
  const whatsappUrl = `https://wa.me/553135323016?text=${whatsappMessage}`;
  return (
    <>
      <section className="serviceHero hero">
        <div className="container">
          {" "}
          <div className="text">
            <h1 className="title">{service.title}</h1>
            <p className="subtitle">{service.description}</p>
            <a href={whatsappUrl} className="btnHeader">
              {service.cta.buttonText}
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
            <div className="beneficio-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
          <a href={whatsappUrl} className="btnHeader">
            Solicitar atendimento Agora
          </a>
        </div>
      </section>

      <section className="ctaFinal">
        <div className="container">
          {" "}
          <h2>
            <span className="text-[#89b5f1]">{service.cta.title}</span>
          </h2>
          <a href={whatsappUrl} className="btnHeader">
            {service.cta.buttonText}
          </a>
        </div>
      </section>
    </>
  );
}
