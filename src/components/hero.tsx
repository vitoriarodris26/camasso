"use client";

import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { BadgeCheck } from 'lucide-react';

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/intro-camasso.mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a2a]/90 via-[#0a2a2a]/60 to-[#0a2a2a]/30"></div>
      </div>

      <div className="container mx-auto px-2 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Nossas soluções em <br />
            <span className="text-[#10b981]">identificação</span>
          </h1>
          
          <p className="text-gray-200 text-lg mb-8  leading-relaxed max-w-lg">
            Desenvolvemos soluções completas de identificação para tornar seus processos mais organizados, seguros e eficientes.
          </p>

          <button 
                 onClick={() => router.push(ROUTES.SERVICOS)}
            
            className="bg-[#10b981] text-white px-10 py-4 rounded-3xl font-semibold hover:bg-[#059669] transition-all shadow-lg flex items-center gap-2 group"
          >
            <BadgeCheck size={20} />
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}