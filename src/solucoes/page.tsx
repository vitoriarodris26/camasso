import { useState } from "react";
import { Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import Header from "../header/header";
import { solutionCategories, solutionsData } from "./solucoes-data";
import Footer from "../components/footer";

export default function Solucoes() {
  const [activeTab, setActiveTab] = useState(solutionCategories[0]);
  const navigate = useNavigate();
  const content = solutionsData[activeTab];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-28 md:pt-32">
        <section className="bg-white py-12" id="solucoes">
          <div className="max-w-[1440px] mx-auto px-4 md:px-10">
            
            {/* Título da Seção */}
            <div className="text-center mb-12">
              <span className="border border-green-600 bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase inline-flex items-center gap-2">
                <Lightbulb size={16} />
                Nossas Soluções
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 p-5">
                Respostas inteligentes para <span className="text-[#008542]">cada setor</span>
              </h2>
            </div>

            {/* RECOLOCADO: Menu de Categorias (Tabs) */}
            <div className="flex justify-center mb-16 overflow-x-auto px-6 scrollbar-hide">
              <div className="flex gap-4 md:gap-12 border-b border-gray-100">
                {solutionCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`pb-4 text-sm md:text-base transition-all relative whitespace-nowrap px-4 ${
                      activeTab === cat
                        ? "text-[#008542] font-bold"
                        : "text-gray-400 hover:text-[#008542]"
                    }`}
                  >
                    {cat}
                    {activeTab === cat && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#008542] rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Card Principal Largo */}
            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm w-full">
              
              <div className="w-full mb-12">
                <div className="bg-[#E8F5EE] text-[#008542] w-fit px-4 py-1 rounded-full text-[10px] font-bold uppercase mb-6 tracking-widest border border-[#D1EADF]">
                  Foco em {activeTab}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 w-full">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed w-full">
                  {content.description}
                </p>
              </div>

              {/* Grid de Imagens */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
                {content.images.map((img, index) => (
                  <div key={index} className="relative h-72 rounded-[2.5rem] overflow-hidden group shadow-md">
                    <img
                      src={img}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={`${activeTab} ${index}`}
                    />
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 mb-12 border border-gray-100 text-gray-700 leading-relaxed text-base md:text-lg shadow-sm w-full">
                <div className="w-full">
                  {content.detailedText.paragraphs.map((paragraph, idx) => (
                    <p 
                      key={idx} 
                      className="mb-6 w-full max-w-none" 
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-100 w-full">
                  {content.detailedText.footerNotes.map((note, idx) => (
                    <p 
                      key={idx} 
                      className="font-bold mt-4 w-full max-w-none"
                      dangerouslySetInnerHTML={{ __html: note }}
                    />
                  ))}
                </div>
              </div>

              {/* Footer do Card com Features e Botão */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-10 border-t border-gray-200 w-full">
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  {content.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="text-[#00D37F]" size={22} />
                      <span className="font-bold text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => navigate(ROUTES.CONTATO)}
                  className="group flex items-center gap-3 bg-[#008542] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#006d36] transition-all active:scale-95 shadow-xl whitespace-nowrap"
                >
                  Solicitar Consultoria
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}