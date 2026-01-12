"use client";

import { MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/routes';

export default function Hero() {
    const router = useRouter(); 
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
    
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/assets/videos/intro-camasso.mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#dcfce7] via-[#dcfce7]/95 to-transparent"></div>
      </div>

      <div className="container mx-auto mt-16 px-6 relative z-10">
        <div className="max-w-xl animate-fade-in-up">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
            Nossas soluções em <span className="text-green-600">Produtos</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Desenvolvemos soluções completas de identificação para tornar seus processos mais organizados, seguros e eficientes.
          </p>
          <button 
           onClick={() => router.push(ROUTES.SERVICOS)}
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition shadow-lg flex items-center gap-2">
            <MessageCircle size={20} />
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}