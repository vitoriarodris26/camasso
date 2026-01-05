import React from 'react';
import { Facebook, Instagram, Twitter, X } from 'lucide-react';

export function Footer() {
  return (
    <footer className=" bg-[#edece8] pt-16 pb-8 text-gray-800">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10 mb-12">
        
        <div>
          <h5 className="font-bold mb-4">Compre e saiba mais</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Todos os produtos</li>
            <li className="hover:text-black cursor-pointer">Totem Smart</li>
            <li className="hover:text-black cursor-pointer">Impressora de Pulseiras</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4">Suporte</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>+55 (11) 5567-7200</li>
            <li>+55 (11) 97536-1817</li>
            <li>comercial@camasso.com.br</li>
          </ul>
        </div>

         <div>
          <h5 className="font-bold mb-4">Sobre nós</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">A Empresa</li>
            <li className="hover:text-black cursor-pointer">Política de Privacidade</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4">Siga a Camasso</h5>
          <div className="flex gap-3 mb-6">
             {/* Redes sociais */}
            <div className="w-8 h-8 bg-gray-900 rounded hover:bg-gray-700 cursor-pointer flex items-center justify-center">
              <Facebook size={16} className="text-white" />
            </div>
            <div className="w-8 h-8 bg-gray-900 rounded hover:bg-gray-700 cursor-pointer flex items-center justify-center">
              <Instagram size={16} className="text-white" />
            </div>
            <div className="w-8 h-8 bg-gray-900 rounded hover:bg-gray-700 cursor-pointer flex items-center justify-center">
              <X size={16} className="text-white" />
            </div>
          </div>
          
          <h5 className="font-bold text-xs mb-2 uppercase tracking-wide">Newsletter</h5>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Digite seu email" 
              className="bg-transparent border border-black p-3 rounded text-sm placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500 items-center">
        <p>Copyright © {new Date().getFullYear()} Camasso. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Brasil / Português</p>
      </div>
    </footer>
  );
}