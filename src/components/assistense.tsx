import { Headset, ShieldCheck, HelpCircle } from "lucide-react";

export default function Assistance() {
  const items = [
    { icon: ShieldCheck, title: "Garantia", desc: "A proteção da política de garantia local e fornecida", active: false },
    { icon: HelpCircle, title: "FAQ", desc: "Tire suas dúvidas", active: true },
    { icon: Headset, title: "Assistência ao cliente", desc: "Fale conosco via live-chat, email ou por telefone", active: false },
  ];

  return (
    <section className="py-20 pb-45 bg-[#f8f9fa] opacity-0 animate-[fadeIn_1s_ease-in-out_1s_forwards]">
      <div className="container mx-auto px-1">        
        <div className="flex flex-wrap justify-center gap-12 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className={`mb-6 p-6 rounded-2xl border-2 transition-all duration-300 ${
                item.active 
                ? "bg-green-600 text-white border-green-600 shadow-lg scale-110" 
                : "bg-white border-green-500 text-green-500 group-hover:bg-green-50 group-hover:scale-105"
              }`}>
              
                <item.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 max-w-[220px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}