import { Download, ShieldCheck } from "lucide-react";
import { certification } from "./certification-data";

export default function CertificacoesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      <section className="pb-10" id="certificacoes">
        <div className="container mx-auto px-6 text-center pt-60">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700  rounded-full mb-6">
             <span className="border border-green-600 bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase inline-flex items-center gap-2">
                  <ShieldCheck size={16} />
                  Certificações
                </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Compromisso com a <span className="text-green-600">excelência</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Nossas operações seguem os mais rigorosos padrões internacionais de
            qualidade e sustentabilidade.
          </p>
        </div>
      </section>

      <section className="pb-60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm border border-gray-100 shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certification.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col bg-white border border-gray-100 rounded-[32px] p-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Container da Imagem */}
                  <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-[24px] border border-gray-50 p-8 flex items-center justify-center overflow-hidden group">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Conteúdo de Texto */}
                  <div className="mt-8 flex flex-col flex-1">
                    <span className="text-[11px] font-bold text-green-600 uppercase tracking-widest mb-2">
                      {cert.subtitle}
                    </span>

                    <h3 className="text-xl font-extrabold text-gray-900 mb-8">
                      {cert.title}
                    </h3>

                    <a
                      href={cert.downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-3 bg-black hover:bg-green-600 text-white text-[12px] font-bold px-6 py-4 rounded-2xl transition-all active:scale-95 uppercase tracking-widest w-full"
                    >
                      <Download size={18} />
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