import Autoridade from "./components/Autoridade";
import Beneficios from "./components/Beneficios";
import Hero from "./components/Hero";
import PainSolution from "./components/PainSolution";
import Servicos from "./components/Servicos";

export default function Home() {
  return (
    <>
      <Hero />
      <PainSolution />
      <Servicos />
      <Beneficios />
      <Autoridade />
    </>
  );
}
