"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/app/header/header";
import Footer from "@/components/footer";
import { Send, Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";

const contactSchema = z.object({
  nome: z.string().min(3, "Nome é obrigatório"),
  cnpj: z.string().min(1, "CNPJ é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  origem: z.string().min(1, "Selecione uma opção"),
  mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Dados do formulário:", data);
  };

  const infoCards = [
    { 
      title: "Telefones", 
      desc: "(11) 5567-7200 / (11) 97536-1817", 
      Icon: Phone 
    },
    { 
      title: "E-mails", 
      desc: "comercial@camasso.com.br / suporte@camasso.com.br", 
      Icon: Mail 
    },
    { 
      title: "Endereço", 
      desc: "Estrada dos Romeiros, 2008 - Barueri - SP", 
      Icon: MapPin 
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Header />

      <section className="pt-32 lg:pt-44 pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <span className="bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase inline-flex items-center gap-2 mb-6">
              <MessageSquare size={16} />
              Canais de Atendimento
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fale com a <span className="text-green-500">Camasso</span>.
            </h1>
            <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
              Dúvidas, orçamentos ou suporte técnico? Nossa equipe está pronta para atender sua empresa com agilidade e excelência.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            
            <div className="bg-white p-8 md:p-12 rounded-[1rem] border-2 border-green-500 shadow-sm relative overflow-hidden">
              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                
                <div className="md:col-span-2">
                  <label className="text-xs font-grey-500 font-bold text-gray-900 uppercase tracking-widest mb-2 block">Nome Completo *</label>
                  <input
                    {...register("nome")}
                    className={`w-full p-4 rounded-[1rem] border-2 transition-all outline-none bg-white text-gray-900 ${errors.nome ? 'border-red-500' : 'border-green-500 focus:bg-green-50'}`}
                    placeholder="Ex: João Silva"
                  />
                  {errors.nome && <p className="text-red-500 text-xs mt-1 font-medium">{errors.nome.message}</p>}
                </div>

                <div>
                  <label className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 block">CNPJ *</label>
                  <input
                    {...register("cnpj")}
                    className={`w-full p-4 rounded-[1rem] border-2 transition-all outline-none bg-white text-gray-900 ${errors.cnpj ? 'border-red-500' : 'border-green-500 focus:bg-green-50'}`}
                    placeholder="00.000.000/0000-00"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 block">Telefone *</label>
                  <input
                    {...register("telefone")}
                    className={`w-full p-4 rounded-[1rem] border-2 transition-all outline-none bg-white text-gray-900 ${errors.telefone ? 'border-red-500' : 'border-green-500 focus:bg-green-50'}`}
                    placeholder="(11) 0000-0000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 block">E-mail Corporativo *</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full p-4 rounded-[1rem] border-2 border-green-500 transition-all outline-none bg-white text-gray-900 focus:bg-green-50"
                    placeholder="seu@email.com.br"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 block">Como nos conheceu? *</label>
                  <select
                    {...register("origem")}
                    className="w-full p-4 rounded-[1rem] border-2 border-green-500 focus:bg-green-50 transition-all outline-none bg-white text-gray-900 appearance-none cursor-pointer"
                  >
                    <option value="">Selecione...</option>
                    <option value="Google">Google</option>
                    <option value="Redes Sociais">Redes Sociais</option>
                    <option value="Indicação">Indicação</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 block">Sua Mensagem *</label>
                  <textarea
                    {...register("mensagem")}
                    rows={5}
                    className="w-full p-4 rounded-[1rem] border-2 border-green-500 focus:bg-green-50 transition-all outline-none bg-white text-gray-900 resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    disabled={isSubmitting}
                    className="w-[150px] bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-[1rem] transition-all flex items-center justify-center gap-3 text-lg shadow-md active:scale-95"
                  >
                    {isSubmitting ? "..." : (
                      <>
                        Enviar
                        <Send size={18} className="text-white" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              {infoCards.map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-green-500 rounded-[1rem] p-6 flex flex-col items-start gap-3 hover:bg-green-50 transition-all"
                >
                  <h3 className="text-green-600 font-bold text-lg">
                    {item.title}
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-green-500 rounded-2xl p-2 flex items-center justify-center min-w-[45px] h-[45px] bg-white text-green-500">
                      <item.Icon size={20} />
                    </div>
                    <p className="text-gray-600 text-sm leading-snug font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-2 border-gray-200 rounded-[1rem] p-6 flex items-center gap-4 bg-gray-50 text-gray-900">
                <div className="bg-gray-200 p-3 rounded-xl">
                  <Clock size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-tighter">Atendimento</p>
                  <p className="text-sm font-bold">Seg a Sex: 08h às 18h</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}