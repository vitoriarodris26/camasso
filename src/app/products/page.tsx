"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Store, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import {
  categoriesList,
  CategoryData,
  ProductCardData,
  productsContent,
} from "./products-data";

export default function Products() {
  const [activeTab, setActiveTab] = useState("Impressoras");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCardData | null>(null);

  const router = useRouter();
  const content: CategoryData =
    productsContent[activeTab] || productsContent["Destaques"];

  const openModal = (product: ProductCardData) => {
  setSelectedProduct(product);
  setIsModalOpen(true);
}

  return (
    <section className="bg-gray-50 py-20 relative" id="produtos">
      <section className="pt-10 pb-30">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full mb-6">
            <Store size={16} className="text-green-600" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">
              Produtos
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Aqui tem qualidade <span className="text-green-600">Camasso</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Conheça nossos produtos desenvolvidos para oferecer soluções
            completas de identificação para diversos setores.
          </p>
        </div>
      </section>

      <div className="w-full mb-12">
        <div className="block md:hidden px-4">
          <div className="overflow-x-scroll pb-4 scrollbar-verde w-full flex">
            <div className="flex min-w-max justify-start items-center gap-3 px-2">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex-shrink-0 border-2
                    ${
                      activeTab === cat
                        ? "bg-green-600 border-green-600 text-white shadow-md shadow-green-100"
                        : "bg-white border-gray-100 text-gray-500"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="flex space-x-8">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`pb-4 text-base font-medium transition-all relative px-2
                  ${
                    activeTab === cat
                      ? "text-green-600 font-bold"
                      : "text-gray-500 hover:text-green-600"
                  }`}
              >
                {cat}
                {activeTab === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-500 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 bg-white rounded-4xl p-7 shadow-sm">
        <div key={activeTab} className="flex flex-col gap-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[400px]">
            <article className="relative w-full h-[300px] lg:h-full rounded-[2rem] overflow-hidden shadow-sm group">
              <Image
                src={content.heroImage}
                alt={content.heroBadge}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg whitespace-nowrap">
                {content.heroBadge}
              </div>
            </article>

            <article className="bg-gray-50 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center items-center text-center border border-gray-100">
              <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-xs font-bold uppercase mb-6">
                {content.highlightLabel}
              </span>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                {content.highlightTitle}
              </h2>
              <p className="text-gray-500 mb-8 max-w-md">
                {content.highlightDesc}
              </p>

              <button
                onClick={() => router.push(ROUTES.CATALOGO)}
                className="bg-black text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg"
              >
                Ver Catálogo Completo
              </button>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.items.map((item, index) => (
              <article
                key={index}
                onClick={() => openModal(item)}
                className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between h-[350px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
              >
                <div className="relative w-full h-40 mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <div className="flex gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-in flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gray-50 p-12">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-contain p-12"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>

              <span className="text-green-600 font-bold text-xs uppercase tracking-widest">
                {activeTab}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                {selectedProduct.title}
              </h3>

              <div className="space-y-4 text-gray-600">
                <p>{selectedProduct.description}</p>

                <ul className="space-y-2 mt-6">
                  <li className="flex items-center gap-2">✅ Qualidade</li>
                  <li className="flex items-center gap-2">
                    ✅ Alta durabilidade e performance
                  </li>
                  <li className="flex items-center gap-2">
                    ✅ Suporte especializado Camasso
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/5511975361817?text=Olá, tenho interesse no produto: ${selectedProduct.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full mt-10 bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-100"
              >
                Falar com especialista no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
