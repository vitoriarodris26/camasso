"use client";

import { useState } from "react";
import { Download, Search, FileText } from "lucide-react";
import { Header } from "../header/header";
import { Footer } from "@/components/footer";
import { CATALOGOS_DATA } from "./catalog-data";
import { Hero } from "@/components/hero";


export default function Catalogos() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = CATALOGOS_DATA.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero/>

      <section className="pt-20 pb-15 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-green-600">Catálogos</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Encontre e baixe as especificações técnicas de todos os nossos produtos e soluções.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16 lg:px-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <a
              key={item.id}
              href={item.fileUrl}
              download={item.title}
              className="border-2 border-green-500 rounded-2xl p-4 flex items-center gap-4 hover:bg-green-50 transition-all group"
            >
              <div className="border-2 border-green-500 rounded-xl p-2 flex items-center justify-center min-w-[50px] h-[50px] bg-white">
                <FileText className="text-green-500 w-6 h-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-green-600 font-bold text-sm md:text-base  leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                  PDF • {item.size}
                </p>
              </div>

              <div className="text-green-500 group-hover:scale-110 transition-transform">
                <Download size={20} />
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 mt-10">Nenhum catálogo encontrado.</p>
        )}
      </section>

      <Footer />
    </main>
  );
}