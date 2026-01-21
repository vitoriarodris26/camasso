import { useState, useEffect } from "react";
import { ArrowRight, Store, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  categoriesList,
  productsContent,
  type CategoryData,
  type ProductCardData,
} from "./products-data";
import { ROUTES } from "../lib/routes";

export default function Products() {
  const [activeTab, setActiveTab] = useState("Impressoras");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCardData | null>(null);

  const navigate = useNavigate();
  const content: CategoryData =
    productsContent[activeTab] || productsContent["Destaques"];

  const openModal = (product: ProductCardData) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <section className="bg-gray-50 py-24 relative" id="produtos">
      <div className="container mx-auto px-6 text-center mb-12">
        <span className="border border-green-600 bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase inline-flex items-center gap-2">
          <Store size={16} />
          Produtos
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 p-5">
          Aqui tem qualidade <span className="text-[#008542]">Camasso</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Conheça nossos produtos desenvolvidos para oferecer soluções completas
          de identificação para diversos setores.
        </p>
      </div>

      <div className="flex justify-center mb-12 overflow-x-auto px-6 scrollbar-hide">
        <div className="flex gap-8 border-b border-gray-100">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`pb-4 text-sm transition-all relative whitespace-nowrap ${
                activeTab === cat
                  ? "text-[#008542] font-bold"
                  : "text-gray-400 hover:text-[#008542]"
              }`}
            >
              {cat}
              {activeTab === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#008542]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[3rem] p-6 md:p-10 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden">
              <img
                src={content.heroImage}
                className="w-full h-full object-cover"
                alt="Hero"
              />
              <div className="absolute bottom-6 left-0 w-full flex justify-center">
                <span className="bg-[#00D37F] text-white px-6 py-2 rounded-full font-bold text-[11px] uppercase shadow-lg">
                  Impressão Profissional
                </span>
              </div>
            </div>

            <div className="bg-gray-50/50 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center justify-center text-center border border-gray-100">
              <div className="bg-[#E8F5EE] text-[#008542] px-4 py-1 rounded-full text-[10px] font-bold uppercase mb-4 tracking-widest border border-[#D1EADF]">
                {activeTab}
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Performance Superior
              </h3>
              <p className="text-gray-400 mb-8 max-w-sm text-sm leading-relaxed">
                Hardware de alta confiabilidade para impressão de etiquetas e
                pulseiras.
              </p>
              <button
                onClick={() => navigate(ROUTES.CATALOGO)}
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-85 transition-all active:scale-95 shadow-lg"
              >
                Ver Catálogo Completo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.items.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(item)}
                className="bg-white rounded-[2.5rem] p-8 flex flex-col shadow-sm hover:shadow-md transition-all border border-gray-100 group cursor-pointer"
              >
                <div className="aspect-[4/3] flex items-center justify-center mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-end justify-between mt-auto">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-[17px] font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h4>
                    <div className="flex gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-50 text-gray-400 text-[9px] font-bold px-3 py-1.5 rounded-full border border-gray-100 uppercase tracking-tighter"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:rotate-[-45deg]">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
            <div className="w-full md:w-1/2 bg-gray-50 p-12 flex items-center justify-center">
              <img
                src={selectedProduct.image}
                className="max-h-64 object-contain"
                alt="modal"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-[#008542] font-bold text-xs uppercase tracking-widest">
                {activeTab}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                {selectedProduct.title}
              </h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                {selectedProduct.description}
              </p>
              <a
                href={`https://wa.me/5511975361817?text=Interesse no produto: ${selectedProduct.title}`}
                target="_blank"
                className="bg-[#008542] text-white text-center py-4 rounded-2xl font-bold hover:bg-[#006d36] transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
