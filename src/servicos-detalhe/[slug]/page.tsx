import { MessageCircle, ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { SERVICOS_CAMASSO } from "../../servicos-informacoes/services-data";
import { ROUTES } from "../../lib/routes";
import Header from "../../header/header";
import Footer from "../../components/footer";
import ServiceLocations from "../../service-location/page";
import Hero from "../../components/hero";

export default function DetalheServicoPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const servico = SERVICOS_CAMASSO.find((s) => s.slug === slug);

  const imagensExibicao = servico?.galeria && servico.galeria.length >= 4 
    ? servico.galeria.slice(0, 4) 
    : SERVICOS_CAMASSO.slice(0, 4).map(s => s.image);

  if (!servico) {
    return (
      <main className="bg-white min-h-screen">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold">Serviço não encontrado</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Hero />

      <section className="pt-32 pb-6">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate(ROUTES.SERVICOS)}
            className="inline-flex items-center gap-1 text-gray-400 text-sm mb-4 hover:text-green-600 transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar para serviços
          </button>
          
          <h1 className="text-4xl md:text-5xl font-black text-[#101828] mb-12">
            {servico.title}
          </h1>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-4 gap-4 mb-10">
              {imagensExibicao.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className="aspect-[3/4] rounded-[24px] overflow-hidden border border-gray-100 shadow-sm bg-gray-50"
                >
                  <img 
                    src={imgUrl} 
                    alt="" 
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#101828]">
                {servico.title}: Soluções eficientes para sua empresa.
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm text-justify">
                {servico.desc}
              </p>

              <div className="pt-4">
                <a
                  href={`${ROUTES.CONTATO}?text=Olá! Gostaria de um orçamento para ${servico.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0fb34b] hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-all active:scale-95 shadow-sm"
                >
                  <MessageCircle size={20} />
                  Solicite um orçamento
                </a>
              </div>
            </div>

            <ServiceLocations />
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-[#0f172a] p-8 rounded-[30px] shadow-xl sticky top-28">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-[#0fb34b] rounded-full" />
                <h3 className="font-bold text-white text-xl">Nossos Serviços</h3>
              </div>
              
              <nav className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {SERVICOS_CAMASSO.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                        navigate(ROUTES.SERVICO_DETALHE(item.slug));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`group flex items-center justify-between w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                      item.slug === servico.slug
                        ? "bg-[#1e293b] border-[#0fb34b] text-[#0fb34b]"
                        : "bg-[#1e293b]/50 border-transparent text-gray-400 hover:border-gray-700 hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider pr-4">
                      {item.title}
                    </span>
                    <ChevronRight size={16} className={`${item.slug === servico.slug ? "text-[#0fb34b]" : "text-gray-600 group-hover:text-white"}`} />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #0fb34b; }
      `}} />
    </main>
  );
}