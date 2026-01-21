import { Eye, Heart, Target, Trophy } from "lucide-react";

const cards = [
  {
    titulo: "Valores",
    texto:
      "Ética, transparência, inovação, foco no cliente, trabalho em equipe, perseverança e superação.",
    Icone: Heart,
  },
  {
    titulo: "Missão",
    texto:
      "Implementar soluções em produtos e serviços que gerem agilidade e economia a nossos clientes, com qualidade e excelência em atendimento.",
    Icone: Target,
  },
  {
    titulo: "Visão",
    texto:
      "Inovar e destacar-se como referência no mercado, trazendo a melhor experiência e maior confiabilidade aos nossos clientes e parceiros.",
    Icone: Eye,
  },
];

export default function About() {
  return (
    <main>
      <section className="pt-24 lg:pt-20 pb-16 lg:pb-24 bg-white">
        <div className="container mx-auto pt-45 px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 items-center">
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] w-full rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src="/assets/images/camassos.png"
                alt="Escritório Camasso"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="space-y-6 scroll-mt-32" id="quem-somos">
                <span className="border border-green-600 bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase inline-flex items-center gap-2">
                  <Trophy size={16} />
                  quem somos?
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Inovação em cada detalhe da{" "}
                  <span className="text-green-500">produção</span>.
                </h1>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                A Camasso é uma empresa versátil e consolidada que se destaca em
                soluções para identificação. Com uma estrutura própria e
                dinâmica, atende com excelência a todo o território nacional.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 max-w-md">
                <div>
                  <h4 className="text-3xl font-bold text-green-600">+17</h4>
                  <p className="text-gray-500 text-xs">Anos de mercado</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-green-600">+10k</h4>
                  <p className="text-gray-500 text-xs">Produtos mensais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className="border-2 border-green-500 rounded-[1rem] p-6 flex flex-col items-start gap-3 hover:bg-green-50 transition-all"
              >
                <h3 className="text-green-600 font-bold text-lg">
                  {item.titulo}
                </h3>
                <div className="flex items-start gap-4">
                  <div className="border-2 border-green-500 rounded-2xl p-2 flex items-center justify-center min-w-[45px] h-[45px] bg-white">
                    <item.Icone className="text-green-500 w-5 h-5" />
                  </div>
                  <p className="text-gray-600 text-sm leading-snug">
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
