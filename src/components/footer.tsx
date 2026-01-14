import { ROUTES } from "@/lib/routes";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#edece8] pt-16 pb-8 text-slate-700 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <h5 className="font-bold mb-6 text-base text-slate-900">Compre e saiba mais</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-green-600 transition-colors">Todos os produtos</a></li>
              <li className="pt-2"><a href="#" className="hover:text-green-600 transition-colors">Totem Smart</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Totem Pro</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Impressora de Pulseiras</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Impressora de Etiquetas</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Impressora de Cupom</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Tela interativa</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-base text-slate-900">Suporte</h5>
            <ul className="space-y-3 text-sm">
              <li><a href={ROUTES.AREA_CLIENTE} className="hover:text-green-600 transition-colors font-medium text-slate-600">Área do cliente</a></li>
              <li className="pt-2 flex flex-col space-y-1">
                <a href="tel:+551155677200" className="hover:text-green-600 transition-colors text-slate-600">(11) 5567-7200</a>
                <a href="https://wa.me/5511975361817" className="hover:text-green-600 transition-colors text-slate-600">(11) 97536-1817</a>
              </li>
              <li><a href="mailto:comercial@camasso.com.br" className="hover:text-green-600 transition-colors text-slate-600">comercial@camasso.com.br</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-base text-slate-900">Sobre nós</h5>
            <ul className="space-y-3 text-sm">
              <li><a href={ROUTES.SOBRE} className="hover:text-green-600 transition-colors">Sobre</a></li>
              <li className="pt-4"><a href="#" className="hover:text-green-600 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <h5 className="font-bold mb-6 text-base text-slate-00 lg:pr-4">Siga a Camasso</h5>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/camasso_do_brasil/" },
                { icon: <Facebook size={20} />, href: "https://facebook.com/camassobrasil" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/camasso/jobs/o" },
                { icon: <Youtube size={20} />, href: "https://www.youtube.com/@camassosolucoes7538" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-400 flex flex-col lg:flex-row justify-between items-center text-[13px] text-slate-700 gap-4">
          <p className="text-center lg:text-left">
            Copyright © 2020 - 2026 Camasso. Todos os direitos reservados
          </p>
          
          <p className="text-center">
            CNPJ: 10.822.670/0001-47
          </p>
          
          <p className="text-center max-w-[300px] lg:max-w-none">
            Razão social: Camasso Comercio e Serviços de Informática LTDA
          </p>

          <div className="flex justify-center lg:justify-end gap-2 items-center font-medium">
            <span>Brasil / Português</span>
          </div>
        </div>
      </div>
    </footer>
  );
}