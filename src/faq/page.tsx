"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "./faq-items";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const WHATSAPP_LINK = "https://wa.me/5511975361817?text=Olá! Gostaria de tirar uma dúvida.";

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-24">
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <span className="border border-green-600 bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase inline-flex items-center gap-2">
            <HelpCircle size={16} />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dúvidas <span className="text-green-500">Comuns</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`border-2 rounded-[1rem] transition-all overflow-hidden ${
                activeIndex === index 
                  ? "border-green-500 bg-green-50" 
                  : "border-gray-300 hover:border-green-200"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`border-2 rounded-2xl p-2 flex items-center justify-center min-w-[40px] h-[40px] ${
                    activeIndex === index ? "border-green-500 bg-white" : "border-gray-200 bg-gray-50"
                  }`}>
                    <item.Icone className={`${activeIndex === index ? "text-green-500" : "text-gray-600"} w-5 h-5`} />
                  </div>
                  <span className={`font-bold text-lg ${activeIndex === index ? "text-green-600" : "text-gray-700"}`}>
                    {item.pergunta}
                  </span>
                </div>
                {activeIndex === index ? (
                  <ChevronUp className="text-green-500" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-8 ml-14">
                  <p className="text-gray-600 text-base leading-relaxed border-l-2 border-green-200 pl-4">
                    {item.resposta}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12 p-8 border-2 border-dashed border-green-300 rounded-[2rem] bg-green-50/30 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:bg-green-50/50">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-full text-white shadow-lg shadow-green-200">
                <MessageCircle size={28} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">Tem alguma sugestão de melhoria ou algo que não saiu como esperado?</h3>
                <p className="text-gray-600"></p>Identificou algo que podemos aprimorar? Fale diretamente com a gestão da Camasso. Qualidade e confiança começam pela escuta.
              </div>
            </div>

       <a
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between bg-[#1db054] hover:bg-[#199949] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-transform hover:scale-105 w-[180px] group"
>
  <span className="text-left leading-tight text-[17px] w-[100px]">
    Falar com a Direção
  </span>
  <ArrowRight size={20} className="ml-2" />
</a>
          </div>
        </div>
      </div>
    </section>
  );
}