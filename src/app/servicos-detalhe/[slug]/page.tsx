"use client"; 

import Header from "@/app/header/header";
import Footer from "@/components/footer";
import { MessageCircle, CheckCircle, ArrowLeft, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation"; 
import { ROUTES } from "@/lib/routes";
import { SERVICOS_CAMASSO } from "@/app/servicos-informacoes/services-data";
import { use } from "react"; 

export default function DetalheServico({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const router = useRouter();
  const { slug } = use(params); 
  
  const servico = SERVICOS_CAMASSO.find((s) => s.slug === slug);
  if (!servico) return notFound();

  return (
    <main className="bg-white min-h-screen">
      <Header />
      

      <section className="bg-gray-50 pt-32 pb-12">
        <div className="container mx-auto px-6">
          <Link href={ROUTES.SERVICOS} className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 mb-8 transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            Voltar para serviços
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {servico.title}
          </h1>
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto px-6">
          
          <div className="lg:hidden mb-10">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              Ver outras soluções
            </label>
            <div className="relative">
              <select 
                value={slug}
                onChange={(e) => router.push(`${ROUTES.SERVICOS_DETALHE}/${e.target.value}`)}
                className="w-full bg-gray-900 text-white p-5 rounded-2xl appearance-none border-none focus:ring-2 focus:ring-green-500  shadow-xl"
              >
                {SERVICOS_CAMASSO.map((item) => (
                  <option key={item.id} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-green-500 pointer-events-none" size={24} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-2/3">
              <div className="mb-12">
                <img 
                  src={servico.image} 
                  alt={servico.title} 
                  className="w-full h-auto max-h-[500px] object-cover rounded-[2rem] shadow-xl border-2 border-gray-50 mb-10" 
                />
                
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                   <p className="text-xl font-medium text-gray-900 mb-6">
                    {servico.title}: Soluções eficientes para sua empresa.
                   </p>
                   <p className="mb-8">{servico.longDesc || servico.desc}</p>
                </div>

                <a 
                  href={`${ROUTES.CONTATO}?text=Olá! Gostaria de um orçamento para: ${servico.title}`}
                  target="_blank"
                  className="inline-flex items-center gap-4 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
                >
                  <MessageCircle size={24} />
                  Solicite um orçamento
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-16">
                {[
                  { t: "Tecnologia", d: "Equipamentos de última geração." },
                  { t: "Suporte", d: "Atendimento técnico especializado." },
                  { t: "Economia", d: "Redução de custos operacionais." },
                  { t: "Agilidade", d: "Logística rápida e eficiente." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 border border-gray-100 rounded-2xl bg-gray-50/50">
                    <CheckCircle className="text-green-600 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.t}</h4>
                      <p className="text-gray-500 text-xs">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hidden lg:block lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  
                  <h3 className="text-white font-black text-xl mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                    Nossas Serviços
                  </h3>

                  <nav className="space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                    {SERVICOS_CAMASSO.map((item) => (
                      <Link 
                        key={item.id}
                        href={`${ROUTES.SERVICOS_DETALHE}/${item.slug}`}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all group ${
                          item.slug === slug 
                          ? "bg-green-800 text-white font-bold" 
                          : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="text-sm uppercase tracking-wider truncate mr-2">
                          {item.title}
                        </span>
                        <ChevronRight 
                          size={18} 
                          className={`shrink-0 transition-transform group-hover:translate-x-1 ${
                            item.slug === slug ? "text-white" : "text-green-500"
                          }`} 
                        />
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}