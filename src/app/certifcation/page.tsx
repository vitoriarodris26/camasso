
"use client";

import { Download, ShieldCheck } from "lucide-react";
import Header from "../header/header";
import { certification } from "./certification-data";

export default function CertificacoesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />

      <section className="pt-45">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck size={16} className="text-green-600" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">
              Certificações
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Compromisso com a <span className="text-green-600">excelência</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Nossas operações seguem os mais rigorosos padrões internacionais de
            qualidade e sustentabilidade.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {certification.map((cert) => (
                <div key={cert.id} className="flex flex-col group border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full aspect-[16/10] bg-gray-50 rounded-3xl border border-gray-100 p-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-green-200 group-hover:shadow-md">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-6 flex flex-col flex-1">
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.15em] mb-1">
                      {cert.subtitle.split(' ')[0]} Certification
                    </span>
                    
                    <h3 className="text-lg font-bold text-gray-900 h-14 line-clamp-2">
                      {cert.title}
                    </h3>

                    <a 
                      href={cert.downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-green-600 text-white text-[12px] font-bold px-6 py-3 rounded-2xl transition-all active:scale-95 uppercase tracking-wider w-fit"
                    >
                      <Download size={16} />
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}