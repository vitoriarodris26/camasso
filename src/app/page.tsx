import { Assistance } from "@/components/assistense";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Products } from "./products/page";
import About from "./about/page";
import { Header } from "./header/header";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <Hero />
      <Products />
      <Assistance />
      <About/>
      <Footer />
    </main>
  );
}