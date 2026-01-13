"use client";

"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "./faq-items";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="pb-35 pt-35 bg-white">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <span className="bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase inline-flex items-center gap-2">
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
                activeIndex === index ? "border-green-500 bg-green-50" : "border-gray-100 hover:border-green-200"
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
                    <item.Icone className={`${activeIndex === index ? "text-green-500" : "text-gray-400"} w-5 h-5`} />
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
                <div className="px-6 pb-6 ml-14">
                  <p className="text-gray-600 text-base leading-relaxed border-l-2 border-green-200 pl-4">
                    {item.resposta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}