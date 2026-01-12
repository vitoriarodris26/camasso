"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/lib/routes";
import NavBar from "./components/nav-bar";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <div className="container mx-auto max-w-7xl flex items-center justify-between h-16 px-6 rounded-full bg-white/90 backdrop-blur-md border border-white/20 shadow-lg relative">
        
        <div className="flex-shrink-0">
          <Link href={ROUTES.HOME}>
            <Image 
              src="/assets/images/logo.png"
              alt="Camasso" 
              width={120} 
              height={40} 
              className="w-full"
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-center px-4">
          <NavBar />
        </div>

        <div className="hidden lg:block flex-shrink-0">
          <Link href={ROUTES.CONTATO}>
            <button className="rounded-full bg-[#008542] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#006d36] shadow-md active:scale-95">
              Contato
            </button>
          </Link>
        </div>

        <button 
          className="lg:hidden p-2 text-gray-700 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 flex flex-col items-start gap-6 lg:hidden animate-in fade-in slide-in-from-top-5 duration-300">
          <NavBar isMobile onLinkClick={() => setIsOpen(false)} />
          <Link href={ROUTES.CONTATO} className="w-full" onClick={() => setIsOpen(false)}>
            <button className="w-full rounded-2xl bg-[#008542] py-4 text-white font-bold">
              Contato
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}