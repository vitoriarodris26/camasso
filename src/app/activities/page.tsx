"use client";

import { useState } from "react";
import { X, ExternalLink, MessageCircle, ChevronDown } from "lucide-react";

import { SERVICOS_CAMASSO } from "../servicos-informacoes/services-data";
import Header from "../header/header";
import HeroActivities from "../servicos-informacoes/hero";

export default function Activities() {
  const [filter, setFilter] = useState("todos");
  const [selectedService, setSelectedService] = useState<any>(null);

  const filtered = filter === "todos" 
    ? SERVICOS_CAMASSO 
    : SERVICOS_CAMASSO.filter(s => s.category === filter);

  const categories = ["todos", ...new Set(SERVICOS_CAMASSO.map(s => s.category))];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <HeroActivities />

      <section className="container mx-auto px-6 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Explore nossas soluções</h2>
            <p className="text-sm text-gray-500">Selecione uma categoria para filtrar</p>
          </div>
          <div className="relative w-full md:w-64">
            <select 
              onChange={(e) => setFilter(e.target.value)}
              className="w-full appearance-none bg-gray-50 border border-gray-200 p-3 px-4 rounded-xl text-gray-700 font-medium focus:ring-2 focus:ring-green-500 outline-none cursor-pointer"
            >
              {categories.map(c => (
                <option key={c} value={c}>
                  {c === "todos" ? "Todos os Serviços" : c}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>
      </section>

      {/* Grid de Cards */}
      <section className="container mx-auto pb-20 px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((servico) => (
            <div 
              key={servico.id} 
              onClick={() => setSelectedService(servico)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={servico.image} 
                  alt={servico.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600/90 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                    {servico.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 leading-tight mb-3 group-hover:text-green-600 transition-colors text-lg">
                  {servico.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1">
                  {servico.desc}
                </p>
                <div className="flex items-center text-green-600 text-xs font-black gap-2 uppercase tracking-wider">
                  Ver Detalhes <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 z-20 p-3 bg-white/90 backdrop-blur rounded-full hover:bg-red-50 text-gray-500 hover:text-red-600 transition-all shadow-md"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-16 w-full flex flex-col justify-center overflow-y-auto">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-green-500"></span>
                  <span className="text-green-600 font-black text-xs uppercase tracking-[0.2em]">
                    {selectedService.category} — Camasso
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-[1.1]">
                  {selectedService.title}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedService.longDesc}
                </p>
              </div>


              <a 
                href={`https://wa.me/5511999999999?text=Olá, vi o serviço de ${selectedService.title} no site e gostaria de um orçamento.`}
                target="_blank"
                className="flex items-center justify-center w-[300px] justify-center gap-1 bg-green-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-700 transition-all hover:scale-[1.02] shadow-xl shadow-green-100"
              >
                <MessageCircle size={24} />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}