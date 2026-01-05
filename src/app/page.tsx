import Footer from "@/components/footer";
import Assistance from "@/components/assistense";
import Header from "./header/header";
import Products from "./products/page";
import Hero from "@/components/hero";
import About from "./about/page";


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