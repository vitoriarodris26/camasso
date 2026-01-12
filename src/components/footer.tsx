import { ROUTES } from "@/lib/routes";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#edece8] pt-25 pb-8 text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10 mb-12">
        
        <div>
          <h5 className="font-bold mb-4 uppercase text-xs tracking-widest">Suporte</h5>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2 hover:text-black transition-colors">
              <Phone size={14} />
              <a href="tel:+551155677200">+55 (11) 5567-7200</a>
            </li>
            <li className="flex items-center gap-2 hover:text-black transition-colors">
              <MessageCircle size={14} />
              <a href={ROUTES.CONTATO} target="_blank" rel="noopener noreferrer">
                WhatsApp Comercial
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-black transition-colors">
              <Mail size={14} />
              <a href="mailto:comercial@camasso.com.br">comercial@camasso.com.br</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4 uppercase text-xs tracking-widest">Sobre nós</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href={ROUTES.SOBRE} className="hover:text-black transition-colors">A Empresa</a>
            </li>
            <li>
              <a href={ROUTES.TRABALHE_CONOSCO} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                Trabalhe Conosco
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4 uppercase text-xs tracking-widest">Acesso Rápido</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href={ROUTES.CATALOGO} className="hover:text-black transition-colors">Catálogo de Produtos</a></li>
            <li><a href={ROUTES.SERVICOS} className="hover:text-black transition-colors">Serviços</a></li>
            <li><a href={ROUTES.AREA_CLIENTE} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-semibold">Portal do Cliente</a></li>
          </ul>
        </div>


        <div>
          <h5 className="font-bold mb-4 uppercase text-xs tracking-widest">Siga a Camasso</h5>
          <div className="flex gap-3 mb-6">
            <a 
              href="https://www.facebook.com/camassobrasil" 
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-900 rounded flex items-center justify-center hover:bg-blue-600 transition-all text-white"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.instagram.com/camassobrasil/" 
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-900 rounded flex items-center justify-center hover:bg-pink-600 transition-all text-white"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/company/camasso/" 
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-900 rounded flex items-center justify-center hover:bg-blue-700 transition-all text-white"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-9 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between text-[11px] text-gray-500 items-center">
        <p className="text-center font-medium">
          Copyright © {new Date().getFullYear()} Camasso Brasil. <br className="md:hidden" />
          Todos os direitos reservados.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 uppercase tracking-widest font-bold">
          <span>Brasil</span>
          <span className="text-gray-300">|</span>
          <span>Português</span>
        </div>
      </div>
    </footer>
  );
}