import { useState, useMemo } from "react";
import { Download, FileText, Search } from "lucide-react";
import { CATALOGOS_DATA } from "./catalog-data";
import Header from "../header/header";
import Footer from "../components/footer";
import Hero from "../servicos-informacoes/hero";

export default function Catalogos() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndSorted = useMemo(() => {
    return CATALOGOS_DATA
      .filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [searchTerm]);

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />

      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-green-600">Catálogos</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Encontre e baixe as especificações técnicas de todos os nossos produtos e soluções.
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900" size={20} />
            <input 
              type="text"
              placeholder="Buscar catálogo..."
              className="w-full pl-10 pr-4 py-3 border-2 border-green-700 rounded-xl focus:border-green-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredAndSorted.map((item) => (
            <a
              key={item.id}
              href={item.fileUrl}
              download={`${item.title}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-500 rounded-2xl p-4 flex items-center gap-4 hover:bg-green-50 transition-all group cursor-pointer"
            >
              <div className="border-2 border-green-500 rounded-xl p-2 flex items-center justify-center min-w-[50px] h-[50px] bg-white">
                <FileText className="text-green-500 w-6 h-6" />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-green-600 font-bold text-sm md:text-base leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                  PDF • {item.size}
                </p>
              </div>

              <div className="text-green-500 group-hover:scale-125 transition-transform">
                <Download size={22} />
              </div>
            </a>
          ))}
        </div>

        {filteredAndSorted.length === 0 && (
          <div className="text-center py-20">
             <p className="text-gray-400">Nenhum catálogo encontrado para "{searchTerm}".</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}