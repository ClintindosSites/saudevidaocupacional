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
            <h1 className="title">{service.hero.title}</h1>
            <p className="subtitle">{service.hero.subtitle}</p>
            <a href={whatsappUrl} className="btnHeader2">
              {service.cta.buttonText}
            </a>
          </div>
        </div>
      </section>

      <section className="dor">
        <div className="container">
          <div className="dor-content">
            <div className="text">
              <h2>{service.benefitsSection.title}</h2>

              {service.benefitsSection.subtitle && (
                <p>{service.benefitsSection.subtitle}</p>
              )}

              <a
                href={whatsappUrl}
                className="btnHeader2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com um especialista
              </a>
            </div>

            <div className="dor-image">
              <img src={service.painImage} alt={service.title} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="benefitsConversion">
        <div className="container">
          <div className="text">
            <h2>Quais benefícios a {service.title} pode beneficiar minha</h2>
          </div>
          <div className="beneficios-list">
            {service.benefits.map(item => (
              <div className="beneficio-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <a href={whatsappUrl} className="btnHeader2">
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
          <p>{service.cta.description}</p>
          <a href={whatsappUrl} className="btnHeader2">
            {service.cta.buttonText}
          </a>
        </div>
      </section>
    </>
  );
}
