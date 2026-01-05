"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from 'lucide-react';
import { SERVICOS_CAMASSO } from './services-data';

export default function HeroActivities() {
  const [filter, setFilter] = useState("todos");

  const filtered = filter === "todos" 
    ? SERVICOS_CAMASSO 
    : SERVICOS_CAMASSO.filter(s => s.category === filter);

  const categories = ["todos", ...new Set(SERVICOS_CAMASSO.map(s => s.category))];
  return (
    <section className="relative  h-[650] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

      <div className="absolute inset-0 z-0">
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/assets/videos/intro-camasso.mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#dcfce7] via-[#dcfce7]/95 to-transparent"></div>
      </div>

      <div className="container mx-auto mt-16 px-6 relative z-10">
        <div className="max-w-xl animate-fade-in-up">
          <h1 className="text-5xl font-bold text-green-600 mb-6">
            Serviços e Informações
          </h1>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Selecione o serviço desejado para obter mais informações. Estamos aqui para ajudar você a encontrar a solução ideal para suas necessidades. 
          </p>
          
          
      <section>
        <div className="container mx-auto px-1 w-[600px]">
          <div className="relative max-w-xs">
            <select 
              onChange={(e) => setFilter(e.target.value)}
              className="w-full appearance-none bg-white border border-green-400 p-3 px-4 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-green-500"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={18} />
          </div>
        </div>
      </section>

        </div>
      </div>
    </section>
  );
}