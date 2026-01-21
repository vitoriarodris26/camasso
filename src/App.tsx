import {  Routes, Route } from "react-router-dom";

import FAQ from "./faq/page";
import Header from "./header/header";
import Catalogos from "./catalog/page";
import Home from "./Home/home";
import Suporte from "./help-desk/page";
import DetalheServicoPage from "./servicos-detalhe/[slug]/page";
import Services from "./servicos-informacoes/page";
import { Facebook, Instagram, Linkedin, MessageCircleMore, Youtube } from "lucide-react";
import Solucoes from "./solucoes/page";
import ServicosOutsourcing from "./servicos-camasso/page";



export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900 relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/catalog" element={<Catalogos />} />
        <Route path="/help-desk" element={<Suporte />} />
        <Route path="/servicos-camasso" element={<ServicosOutsourcing />} />
        <Route path="/servicos-informacoes" element={<Services />} />
        <Route path="/servicos/:slug" element={<DetalheServicoPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-2">
        {[
          { id: 'yt', icon: <Youtube size={20} />, color: 'bg-[#ff0033]', link: 'https://www.youtube.com/@camassosolucoes7538' },
          { id: 'ig', icon: <Instagram size={20} />, color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', link: 'https://www.instagram.com/camasso_do_brasil/' },
          { id: 'li', icon: <Linkedin size={20} />, color: 'bg-[#0077b5]', link: 'https://www.linkedin.com/company/camasso/jobs/' },
          { id: 'fb', icon: <Facebook size={20} />, color: 'bg-[#1877F2]', link: 'https://www.facebook.com/camassodobrasil/?locale=pt_BR' },
        ].map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} text-white p-3 rounded-l-xl shadow-lg transition-all duration-300 hover:pr-10 flex items-center justify-center`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="fixed bottom-6 right-6 z-[9999]">
        <a
          href="https://wa.me/5511975361817?text=Olá! Gostaria de informações sobre os produtos da Camasso."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#25D366] text-white p-1 pr-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 overflow-hidden max-w-[60px] hover:max-w-[250px]"
        >
          <div className="relative bg-[#25D366] p-3 rounded-full shrink-0 flex items-center justify-center">
            <MessageCircleMore 
              size={32} 
              strokeWidth={2} 
              fill="white" 
              className="text-[#25D366]" 
            />
            <span className="absolute top-1 right-1 bg-red-600 text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm animate-pulse">
              1
            </span>
          </div>

          <div className="ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[10px] leading-none opacity-90 uppercase font-bold">chamar no</p>
            <p className="font-black text-lg">WhatsApp</p>
          </div>
        </a>
      </div>
    </main>
  );
}