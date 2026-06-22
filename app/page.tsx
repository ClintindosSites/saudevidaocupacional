import Autoridade from "./components/Autoridade";
import Avaliacoes from "./components/Avaliacoes";

import CTAFinal from "./components/CTAFinal";
import EmpresasAjudadas from "./components/EmpresasAjudadas";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import PainSolution from "./components/PainSolution";
import Servicos from "./components/Servicos";

export default function Home() {
  return (
    <>
      <Hero />
      <PainSolution />
      <Servicos />

      <Autoridade />
      <EmpresasAjudadas />
      <Avaliacoes />
      <FAQ />
      <CTAFinal />
    </>
  );
}
