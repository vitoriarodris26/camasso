/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Download, FileText, MonitorDown, Settings2, Search } from "lucide-react";
import Header from "../header/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

// const DRIVERS = [
//   { id: 1, title: "Print Utility Beta", size: "3.231 KB", url: "/help-desk/pirnterutility-beta2-35.exe" },
//   { id: 6, title: "Print Utility v3-2-63", size: "2.495 KB", url: "/help-desk/printerutility-v3-2-63-set-new-mac-adress.exe" },
//   { id: 2, title: "Gprinter - 2023.1-M-0.exe", size: "1 MB", url: "/help-desk/Gprinter_2024.1_M-37.exe" },
//   { id: 3, title: "NetWinConfig", size: "676 KB", url: "/help-desk/netwinconfig.exe" },
//   { id: 4, title: "FWTool v2.3.18(b)", size: "589 KB", url: "/help-desk/fwtool-v2-3-18.exe" } ,
//   { id: 5, title: "ZPLcodebartool", size: "676 KB", url: "/help-desk/zpltool.exe" },
// ];

const DRIVERS = [
  { id: 1, title: "Print Utility Beta", size: "3.231 KB", url: "/help-desk/pirnterutility-beta2-35.exe" },
  { id: 6, title: "Print Utility v3-2-63", size: "2.495 KB", url: "/help-desk/printerutility-v3-2-63-set-new-mac-adress.exe" },
  { id: 2, title: "Gprinter - 2023.1-M-0.exe", size: "1 MB", url: "" },
  { id: 3, title: "NetWinConfig", size: "676 KB", url: "/help-desk/netwinconfig.exe" },
  { id: 4, title: "FWTool v2.3.18(b)", size: "589 KB", url: "/help-desk/fwtool-v2-3-18.exe" } ,
  { id: 5, title: "ZPLcodebartool", size: "676 KB", url: "/help-desk/zpltool.exe" },
];

const UTILITARIOS = [
  { id: 6, title: "Camasso special edition BarTender 2016 R9", size: "650 MB", url: "/help-desk/BT2016_R9_3160_UL_Gprinter.exe" },
];

export default function Suporte() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterBySearch = (list: any[]) =>
    list.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />

      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Suporte <span className="text-green-600">Técnico</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Busque e baixe drivers, utilitários e instaladores do Help Desk.
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="O que você está procurando?"
              className="w-full pl-10 pr-4 py-3 border-2 border-green-700 rounded-xl focus:border-green-500 outline-none transition-all text-gray-900 shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6 border-b-2 border-green-100 pb-2">
              <MonitorDown className="text-green-600" size={24} />
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">Drivers</h2>
            </div>
            <div className="flex flex-col gap-4">
              {filterBySearch(DRIVERS).map((item) => (
                <DownloadCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6 border-b-2 border-green-100 pb-2">
              <Settings2 className="text-green-600" size={24} />
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">Utilitários</h2>
            </div>
            <div className="flex flex-col gap-4">
              {filterBySearch(UTILITARIOS).map((item) => (
                <DownloadCard key={item.id} item={item} />
              ))}
            </div>
          </div>
      
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DownloadCard({ item, isHelpDesk = false }: { item: any; isHelpDesk?: boolean }) {
  const isExe = item.url?.endsWith('.exe') || item.fileUrl?.endsWith('.exe');
  const finalUrl = item.url || item.fileUrl;

  return (
    <a
      href={finalUrl}
      download={true}
      className="border-2 border-green-500 rounded-2xl p-4 flex items-center gap-4 hover:bg-green-50 transition-all group"
    >
      <div className="border-2 border-green-500 rounded-xl p-2 flex items-center justify-center min-w-[50px] h-[50px] bg-white">
        <FileText className="text-green-500 w-6 h-6" />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
           <h3 className="text-green-600 font-bold text-sm md:text-base leading-tight">
            {item.title}
          </h3>
          {isHelpDesk && (
            <span className="text-[9px] bg-green-600 text-white px-1.5 rounded uppercase font-bold">Novo</span>
          )}
        </div>
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
          {isExe ? "Executável" : "Documento"} • {item.size}
        </p>
        {item.description && (
          <p className="text-gray-500 text-[11px] mt-1 line-clamp-1 italic">
            {item.description}
          </p>
        )}
      </div>

      <div className="text-green-500 group-hover:scale-110 transition-transform">
        <Download size={20} />
      </div>
    </a>
  );
}