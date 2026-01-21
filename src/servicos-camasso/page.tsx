import { CheckCircle2, Printer, Settings, ShieldCheck, Headphones, BarChart3 } from "lucide-react";
import Header from "../header/header";
import Footer from "../components/footer";
import Hero from "../servicos-informacoes/hero";

export default function ServicosOutsourcing() {
  const vantagens = [
    { title: "Equipamentos modernos e econômicos", icon: <Printer size={24} /> },
    { title: "Total suporte técnico e de assistência", icon: <Settings size={24} /> },
    { title: "Reposição contínua e ágil de suprimentos", icon: <ShieldCheck size={24} /> },
    { title: "Atendimento e treinamento de utilização", icon: <Headphones size={24} /> },
    { title: "Controle gerencial com rastreamento", icon: <BarChart3 size={24} /> },
    { title: "Empresa séria e comprometida", icon: <CheckCircle2 size={24} /> },
  ];

  const impressoras = [
    "/servicos/servicos-01.jpg",
    "/servicos/servicos-02.jpg",
    "/servicos/servicos-03.jpg",
    "/servicos/servicos-04.jpg",
    "/servicos/servicos-05.jpg",
  ];

  return (
    <main className="bg-white min-h-screen font-sans">
      <Header />
      <Hero />

      <section className="container mx-auto px-4 py-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex gap-4 overflow-x-auto pb-4 w-full md:w-auto">
            {impressoras.map((img, index) => (
              <div key={index} className="border border-gray-200 p-2 rounded-lg hover:shadow-md transition-shadow min-w-[100px] flex items-center justify-center bg-white">
                <img src={img} alt={`Modelo ${index}`} className="w-20 h-20 object-contain" />
              </div>
            ))}
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg whitespace-nowrap uppercase text-sm tracking-wide">
            Solicite um orçamento
          </button>
        </div>

        <div className="max-w-none text-gray-700 leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Conheça a Terceirização de Serviços de Impressão Camasso e Epson
          </h2>
          <p className="mb-4">
            Escritórios, hospitais, academias e outras instituições em São Paulo, que têm alta demanda de impressão, podem encontrar muitas vantagens ao utilizar a terceirização de serviços de impressão. A terceirização de serviços de impressão conhecida como outsourcing de impressão é uma forma econômica e prática de fornecer uma estrutura completa de impressão para empresas de todos os portes, mantendo o controle de custos ao mesmo tempo que garante a eficiência dessa operação.
          </p>
          <p className="mb-4">
            Muitas empresas têm percebido a problemática de manter internamente equipamentos de impressão, porque toda a estrutura de controle, manutenção e escolha técnica é feita pela própria empresa, muitas vezes por profissionais que não são especialistas para tal atividade, resultando em perda de tempo, materiais e recursos.
          </p>
          <p className="mb-4">
            A Camasso do Brasil é uma empresa experiente no ramo de terceirização de serviços de impressão conhecida como outsourcing de impressão. Localizada em São Paulo, atende clientes com agilidade e qualidade em seu fornecimento de equipamentos EPSON, marca mundialmente reconhecida por excelência, economia e alta performance, associados ao total suporte em atendimento técnico e funcional da Camasso, o resultado é o melhor da terceirização de serviços de impressão para o seu negócio.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left uppercase">
            Vantagens da <span className="text-green-600">Terceirização</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vantagens.map((item, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-green-500 rounded-2xl p-6 flex items-center gap-4 hover:bg-green-50 transition-all group"
              >
                <div className="border-2 border-green-500 rounded-xl p-2 flex items-center justify-center min-w-[50px] h-[50px] bg-white text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <p className="text-gray-800 font-bold text-sm md:text-base leading-tight">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center lg:px-24">
        <div className="pt-10 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">
            Para saber mais sobre terceirização de serviços de impressão
          </h3>
          <p className="text-gray-500 mb-8">
            Ligue para <span className="text-gray-900 font-bold">11 5567-7200</span> ou entre em contato clicando no botão abaixo.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-xl transition-all hover:scale-105 shadow-xl uppercase tracking-widest text-sm">
            Consulte a Camasso
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}