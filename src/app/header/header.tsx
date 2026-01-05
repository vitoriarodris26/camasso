import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/lib/routes";
import  NavBar  from "./components/nav-bar";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4 opacity-0 animate-[fadeIn_1s_ease-in-out_0.2s_forwards]">
      <div className="container mx-auto flex items-center justify-between h-16 px-6 rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5">
        
        <Link href={ROUTES.HOME} className="flex items-center group">
          <Image 
            src="/assets/images/logo.png"
            alt="Camasso" 
            width={110} 
            height={50} 
            className="rounded-lg transition-transform group-hover:rotate-12" 
          />
          
        </Link>
        <NavBar />
        <Link href={ROUTES.CONTATO}>
          <button className="rounded-full bg-green-500 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-200 active:scale-95">
            Contato
          </button>
        </Link>
        
      </div>
    </header>
  );
}