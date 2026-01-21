import About from "../about/page";
import CertificacoesPage from "../certifcation/page";
import Assistance from "../components/assistense";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Faq from "../faq/page";
import Header from "../header/header";
import Products from "../products/page";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <Hero />
      <Products />
      <Assistance />
      <About />
      <CertificacoesPage />
      <Faq />
      <Footer />
    </main>
  );
}
