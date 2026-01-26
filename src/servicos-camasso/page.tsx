import { useState } from "react";
import { 
  CheckCircle2, Printer, Settings, ShieldCheck, 
  Headphones, BarChart3, ArrowRight, Lightbulb 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../components/footer";
import Hero from "../servicos-informacoes/hero";
import { ROUTES } from "../lib/routes";
import { serviceCategories, servicesData } from "./servicos-outsourcing-data";

export default function ServicosOutsourcing() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0]);
  const navigate = useNavigate();
  const content = servicesData[activeTab];

  const vantagens = [
    { title: "Equipamentos modernos e econômicos", icon: <Printer size={24} /> },
    { title: "Total suporte técnico e de assistência", icon: <Settings size={24} /> },
    { title: "Reposição contínua e ágil de suprimentos", icon: <ShieldCheck size={24} /> },
    { title: "Atendimento e treinamento de utilização", icon: <Headphones size={24} /> },
    { title: "Controle gerencial com rastreamento", icon: <BarChart3 size={24} /> },
    { title: "Empresa séria e comprometida", icon: <CheckCircle2 size={24} /> },
  ];

  return (
    <main className="bg-white min-h-screen font-sans">
      <Header />
      <Hero />

      <section className="py-12 lg:py-20" id="servicos">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Título da Seção */}
          <div className="text-center mb-10">
            <span className="border border-green-600 bg-green-100 text-green-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase inline-flex items-center gap-2">
              <Lightbulb size={14} />
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Tecnologia de ponta para <span className="text-[#008542]">seu outsourcing</span>
            </h2>
          </div>

          {/* Menu de Abas Estilo Soluções */}
          <div className="flex justify-center mb-12 px-4">
            <div className="flex items-center gap-2 md:gap-4 bg-[#22C55E] p-3 rounded-full overflow-x-auto scrollbar-hide max-w-full shadow-lg">
              {serviceCategories.map((cat) => {
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex flex-col items-center gap-1 ${
                      isActive 
                        ? "bg-white text-[#008542] shadow-sm scale-105" 
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {cat}
                    {isActive && (
                      <div className="w-8 h-[2px] bg-[#008542] rounded-full animate-in fade-in zoom-in duration-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 rounded-[3rem] p-6 md:p-10 border border-gray-100 shadow-sm">
            
            <div className="mb-8">
              <div className="bg-[#E8F5EE] text-[#008542] w-fit px-3 py-0.5 rounded-full text-[9px] font-bold uppercase mb-4 tracking-widest border border-[#D1EADF]">
                Foco em {activeTab}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {content.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {content.images.map((img, index) => (
                <div key={index} className="relative h-56 rounded-2xl overflow-hidden group shadow-sm bg-white border border-gray-100 flex items-center justify-center p-6">
                  <img
                    src={img}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    alt={`${activeTab} ${index}`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-gray-100 text-gray-700 leading-relaxed text-sm md:text-base shadow-sm text-justify">
              <div>
                {content.detailedText.paragraphs.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className="mb-4 last:mb-0" 
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                {content.detailedText.footerNotes.map((note, idx) => (
                  <p 
                    key={idx} 
                    className="font-bold text-sm text-gray-900"
                    dangerouslySetInnerHTML={{ __html: note }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {content.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="text-[#00D37F]" size={18} />
                    <span className="font-bold text-sm uppercase">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate(ROUTES.CONTATO)}
                className="group flex items-center gap-2 bg-[#008542] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#006d36] transition-all active:scale-95 shadow-lg whitespace-nowrap text-sm uppercase tracking-wider"
              >
                Solicitar Orçamento
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left uppercase">
            Vantagens da <span className="text-green-600">Camasso</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vantagens.map((item, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-green-500 rounded-2xl p-6 flex items-center gap-4 transition-all hover:shadow-md"
              >
                <div className="border-2 border-green-500 rounded-xl p-2 flex items-center justify-center min-w-[50px] h-[50px] bg-white text-green-500">
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

      <Footer />
    </main>
  );
}