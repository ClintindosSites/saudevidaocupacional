import Link from "next/link";
import { servicos } from "@/data/servicos";

import {
  Stethoscope,
  ShieldCheck,
  ClipboardCheck,
  FileCheck,
  FileSpreadsheet,
  PersonStanding,
  HardHat,
  Factory,
  GraduationCap,
  HeartPulse,
} from "lucide-react";

const serviceIcons = {
  pcmso: Stethoscope,
  pgr: ShieldCheck,
  "exames-ocupacionais": ClipboardCheck,
  ltcat: FileCheck,
  esocial: FileSpreadsheet,
  ergonomia: PersonStanding,
  "seguranca-do-trabalho": HardHat,
  "avaliacoes-ambientais": Factory,
  "treinamentos-sst": GraduationCap,
  "medicina-do-trabalho": HeartPulse,
};

export default function ServicosPage() {
  return (
    <section className="servicosPage">
      <div className="container">
        <div className="text">
          <h1>Nossos Serviços</h1>

          <p>
            Conheça todas as soluções em Medicina e Segurança do Trabalho
            oferecidas pela Saúde e Vida.
          </p>
        </div>

        <div className="servicos-grid">
          {servicos.map(servico => {
            const IconComponent =
              serviceIcons[servico.slug as keyof typeof serviceIcons];

            return (
              <div className="servico-item" key={servico.slug}>
                <div className="serviceIcon">
                  {IconComponent && (
                    <IconComponent size={70} strokeWidth={1.5} />
                  )}
                </div>

                <img
                  src={servico.heroImage}
                  alt={servico.title}
                  className="servico-bg"
                />

                <div className="item-text">
                  <h3>{servico.title}</h3>

                  <p>{servico.description}</p>
                </div>

                <Link href={`/servicos/${servico.slug}`} className="saibaMais">
                  Saiba Mais
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
