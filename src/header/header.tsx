"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom"; 
import NavBar from "./components/nav-bar";
import { ROUTES } from "../lib/routes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-6">
      <div className="container mx-auto max-w-7xl relative">

        <div className="flex items-center justify-between h-20 px-8 rounded-full bg-white/95 backdrop-blur-md border border-white/20 shadow-xl">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to={ROUTES.HOME}>
              <img 
                src="/assets/images/logo.png" 
                alt="Camasso Logo" 
                className="h-9 w-auto object-contain" 
              />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center px-8">
            <NavBar />
          </div>

          <div className="flex items-center">
            <div className="hidden lg:block">
              <Link to={ROUTES.CONTATO}>
                <button className="rounded-full bg-[#008542] px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#006d36] shadow-md active:scale-95">
                  Contato
                </button>
              </Link>
            </div>

            <button 
              className="lg:hidden flex items-center justify-center w-12 h-12 text-slate-800 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>


        {isOpen && (
          <div className="absolute top-[100%] left-0 right-0 mt-4 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 flex flex-col items-start gap-8 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="w-full">
              <NavBar isMobile onLinkClick={() => setIsOpen(false)} />
            </div>
            
            <Link to={ROUTES.CONTATO} className="w-full" onClick={() => setIsOpen(false)}>
              <button className="w-full rounded-2xl bg-[#008542] py-5 text-white font-bold text-lg shadow-lg active:scale-[0.98] transition-transform">
                Contato
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}