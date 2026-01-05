/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Download, FileText, MonitorDown, Settings2 } from "lucide-react";
import Header from "../header/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";


const DRIVERS = [
  { id: 1, title: "Print Utility", size: "12 MB", url: "/downloads/print-utility.exe" },
  { id: 2, title: "Gprinter - 2023.1-M-0.exe", size: "25 MB", url: "/downloads/gprinter.exe" },
  { id: 3, title: "NetWinConfig", size: "8 MB", url: "/downloads/netwinconfig.exe" },
  { id: 4, title: "FWTool v2.3.18(b)", size: "5 MB", url: "/downloads/fwtool.exe" },
  { id: 5, title: "ZPLcodebartool", size: "3 MB", url: "/downloads/zpltool.exe" },
];

const UTILITARIOS = [
  { id: 6, title: "Camasso special edition BarTender 2016 R9", size: "650 MB", url: "/downloads/bartender-camasso.exe" },
];

export default function Suporte() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />

      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Suporte <span className="text-green-600">Técnico</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Selecione o driver ou utilitário desejado abaixo para iniciar o download.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          

          <div>
            <div className="flex items-center gap-2 mb-6 border-b-2 border-green-100 pb-2">
              <MonitorDown className="text-green-600" size={24} />
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">Drivers</h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {DRIVERS.map((item) => (
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
              {UTILITARIOS.map((item) => (
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

function DownloadCard({ item }: { item: any }) {
  return (
    <a
      href={item.url}
      download={item.title}
      className="border-2 border-green-500 rounded-2xl p-4 flex items-center gap-4 hover:bg-green-50 transition-all group"
    >
      <div className="border-2 border-green-500 rounded-xl p-2 flex items-center justify-center min-w-[50px] h-[50px] bg-white">
        <FileText className="text-green-500 w-6 h-6" />
      </div>

      <div className="flex-1">
        <h3 className="text-green-600 font-bold text-sm md:text-base leading-tight">
          {item.title}
        </h3>
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
          Executável • {item.size}
        </p>
      </div>

      <div className="text-green-500 group-hover:scale-110 transition-transform">
        <Download size={20} />
      </div>
    </a>
  );
}