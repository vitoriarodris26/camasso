import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { ROUTES } from "../lib/routes";
import { solutionCategories, solutionsData } from "./solucoes-data";
import Footer from "../components/footer";
import Hero from "../components/hero";

export default function Solucoes() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const toSlug = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const activeTab = useMemo(() => {
    return (
      solutionCategories.find((cat) => toSlug(cat) === slug) ||
      solutionCategories[0]
    );
  }, [slug]);

  const content = solutionsData[activeTab];

  useEffect(() => {
    const currentSlug = toSlug(activeTab);
    if (slug !== currentSlug) {
      navigate(`${ROUTES.SOLUCOES}/${currentSlug}`, { replace: true });
    }
  }, [activeTab, slug, navigate]);

  const handleTabClick = (category: string) => {
    navigate(`${ROUTES.SOLUCOES}/${toSlug(category)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />

      <main className="flex-grow pt-24 md:pt-28">
        <section className="bg-white py-10" id="solucoes">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <span className="border border-green-600 bg-green-100 text-green-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase inline-flex items-center gap-2">
                <Lightbulb size={14} />
                Nossas Soluções
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Respostas inteligentes para{" "}
                <span className="text-[#008542]">cada setor</span>
              </h2>
            </div>

            <div className="flex justify-center mb-12 px-4">
              <div className="flex items-center gap-2 md:gap-4 bg-[#22C55E] p-3 rounded-full overflow-x-auto scrollbar-hide max-w-full shadow-lg">
                {solutionCategories.map((cat) => {
                  const isActive = activeTab === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleTabClick(cat)}
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

            {/* Conteúdo Dinâmico */}
            <div className="bg-gray-50 rounded-[3rem] p-6 md:p-10 border border-gray-100 shadow-sm transition-all duration-500">
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

              {/* Grid de Imagens - Aumentado para maior destaque visual */}
              {content.images && content.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {content.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-64 md:h-72 lg:h-80 rounded-[2rem] overflow-hidden group shadow-md border border-gray-100"
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={activeTab}
                      />
                      {/* Overlay sutil para melhorar o contraste */}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              )}

              {/* Texto Detalhado */}
              <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-gray-100 text-gray-700 leading-relaxed text-sm md:text-base shadow-sm">
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
                      className="font-bold text-sm text-gray-900 mb-2 last:mb-0"
                      dangerouslySetInnerHTML={{ __html: note }}
                    />
                  ))}
                </div>
              </div>

              {/* Features e CTA */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  {content.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle2 className="text-[#00D37F]" size={18} />
                      <span className="font-bold text-sm uppercase">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate(ROUTES.CONTATO)}
                  className="group flex items-center gap-2 bg-[#008542] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#006d36] transition-all active:scale-95 shadow-lg whitespace-nowrap text-sm uppercase tracking-wider"
                >
                  Solicitar Consultoria
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
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
