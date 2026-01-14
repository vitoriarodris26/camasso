"use client";

import { useState } from "react";
import { Search, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link"; 

import { SERVICOS_CAMASSO } from "./services-data";
import HeroActivities from "./hero";
import Header from "../header/header";
import Footer from "@/components/footer";
import { ROUTES } from "@/lib/routes";

export default function Activities() {
  const [filter, setFilter] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = SERVICOS_CAMASSO.filter((s) => {
    const matchesCategory = filter === "todos" || s.category === filter;
    const matchesSearch = 
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      s.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["todos", ...new Set(SERVICOS_CAMASSO.map((s) => s.category))];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <HeroActivities />

      <section className="container mx-auto px-6 mt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">Nossas Soluções</h2>
            <p className="text-sm text-gray-500">Encontre o equipamento ideal para sua operação</p>
          </div>

          <div className="flex flex-col md:flex-row w-full lg:w-auto gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="O que você procura?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 p-3 pl-10 rounded-xl text-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div className="relative w-full md:w-64">
              <select
                onChange={(e) => setFilter(e.target.value)}
                className="w-full appearance-none bg-gray-50 border border-gray-200 p-3 px-4 rounded-xl text-gray-700 font-medium focus:ring-2 focus:ring-green-500 outline-none cursor-pointer"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === "todos" ? "Todas as Categorias" : c}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto pb-20 px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((servico) => (
            <Link 
              key={servico.id} 
              href={`${ROUTES.SERVICOS_DETALHE}/${servico.slug}`} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={servico.image}
                  alt={servico.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">
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
                <div className="flex items-center text-green-600 text-xs font-black gap-2 uppercase tracking-wider border-t pt-4">
                  Ver Solução Completa <ExternalLink size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Nenhum serviço encontrado para sua busca.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}