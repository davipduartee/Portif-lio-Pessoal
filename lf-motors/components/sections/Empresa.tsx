import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TituloSecao } from "@/components/ui/TituloSecao";

const compromissos = [
  {
    rotulo: "Seleção",
    texto:
      "Cada unidade é avaliada antes de a loja comprar. O carro que não passa nessa etapa nunca chega à vitrine.",
  },
  {
    rotulo: "Transparência",
    texto:
      "Laudo cautelar e histórico ficam abertos para você antes de qualquer conversa sobre valor.",
  },
  {
    rotulo: "Continuidade",
    texto:
      "O atendimento ao proprietário continua depois da entrega da chave, e não termina na assinatura.",
  },
];

export function Empresa() {
  return (
    <section id="empresa" className="scroll-mt-24 border-t border-line py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
          <Reveal>
            <TituloSecao
              rotulo="Empresa"
              titulo="O nosso limite de estoque é proposital."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-7 text-base leading-relaxed text-bone-dim sm:text-lg">
              <p>
                Uma loja que gira dezenas de carros por mês não tem tempo de
                olhar cada um deles com calma. A LF Motors trabalha ao
                contrário: poucas unidades por vez, escolhidas uma a uma, para
                conseguir responder por todas elas.
              </p>
              <p>
                Quem compra um superesportivo ou um premium já sabe o que quer.
                O trabalho da loja não é convencer ninguém. É entregar o carro
                certo, com histórico limpo, documentação resolvida e alguém do
                outro lado depois que a chave troca de mão.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 md:mt-28">
          <blockquote className="border-t border-line pt-12">
            <p className="max-w-[24ch] font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.08]">
              Se o carro não entraria na nossa garagem, ele não entra na
              vitrine.
            </p>
          </blockquote>
        </Reveal>

        <dl className="mt-20 grid gap-10 border-t border-line pt-12 md:mt-28 md:grid-cols-3 md:gap-14">
          {compromissos.map((item, indice) => (
            <Reveal key={item.rotulo} delay={indice * 110}>
              <dt className="rotulo">{item.rotulo}</dt>
              <dd className="mt-3.5 text-sm leading-relaxed text-bone-dim">
                {item.texto}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
