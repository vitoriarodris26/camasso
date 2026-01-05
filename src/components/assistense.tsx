import React from 'react';
import { Headset, ShieldCheck, HelpCircle } from "lucide-react";

export default function Assistance() {
  const items = [
    { icon: ShieldCheck, title: "Garantia", desc: "A proteção da política de garantia local e fornecida", active: false },
    { icon: Headset, title: "Assistência ao cliente", desc: "Fale conosco via live-chat, email ou por telefone", active: false },
    { icon: HelpCircle, title: "FAQ", desc: "Tire suas dúvidas", active: true } 
  ];

  return (
    <section className="py-20 bg-[#f8f9fa] opacity-0 animate-[fadeIn_1s_ease-in-out_1s_forwards]">
      <div className="container mx-auto px-1 ">        
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className={`mb-6 p-4 rounded-xl border-2 transition-all duration-300 ${
                item.active 
                ? "bg-green-600 text-white border-green-600 shadow-lg scale-105" 
                : "bg-white border-green-500 text-green-500 group-hover:bg-green-50"
              }`}>
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
          {/* <div className="flex flex-wrap justify-center gap-8 text-center">
            <button className="mt-15 bg-green-500 text-white py-4 px-8 rounded-3xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-100 flex items-center gap-1">
              <MessageCircle size={20} />
              Falar conosco
            </button> 
          </div> */}
      </div>
    </section>
  );
}