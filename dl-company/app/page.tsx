import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Solucoes } from "@/components/sections/Solucoes";
import { Diferencial } from "@/components/sections/Diferencial";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Solucoes />
      <Diferencial />
    </>
  );
}
