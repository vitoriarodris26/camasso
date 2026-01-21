import { useState, useMemo } from "react";
import { BRASIL_CITIES } from "./cidades-data";
import { MapPin } from "lucide-react";

export default function ServiceLocations() {
  const ufs = useMemo(() => Object.keys(BRASIL_CITIES).sort(), []);
  const [activeUF, setActiveUF] = useState("SP");

  return (
    <div className="mt-12 w-full">
      <div className="bg-gray-300 rounded-[24px] overflow-hidden border border-gray-200 shadow-sm">
        <div className="p-6 md:p-8 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0fb34b] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#0fb34b]/20">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-[#0f172a] font-bold text-lg">Áreas de Atendimento</h3>
                <p className="text-gray-500 text-xs">Selecione o estado para listar os municípios</p>
              </div>
            </div>
            
            <div className="bg-[#0fb34b]/10 border border-[#0fb34b]/20 px-4 py-1.5 rounded-full self-start md:self-center">
              <span className="text-[#0fb34b] text-xs font-bold uppercase tracking-wider">
                {BRASIL_CITIES[activeUF]?.length} Cidades em {activeUF}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-200/50 border-b border-gray-200">
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
            {ufs.map((uf) => (
              <button
                key={uf}
                onClick={() => setActiveUF(uf)}
                className={`w-10 h-10 md:w-11 md:h-11 rounded-lg text-[11px] font-black transition-all duration-200 border ${
                  activeUF === uf
                    ? "bg-[#0fb34b] border-[#0fb34b] text-white shadow-md scale-105"
                    : "bg-white border-gray-300 text-gray-500 hover:border-gray-400 hover:text-[#0f172a]"
                }`}
              >
                {uf}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 bg-gray-50">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3 max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
            {BRASIL_CITIES[activeUF]?.map((cidade) => (
              <div 
                key={cidade} 
                className="flex items-center gap-2 group cursor-default"
              >
                <div className="w-1.5 h-1.5 bg-[#0fb34b] rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-gray-600 text-[11px] md:text-[12px] group-hover:text-[#0f172a] transition-colors truncate">
                  {cidade}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 px-8 py-4 border-t border-gray-200">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] text-center md:text-left font-medium">
            Cobertura Logística Nacional • Camasso Soluções
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f3f4f6; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #0fb34b; }
      `}} />
    </div>
  );
}