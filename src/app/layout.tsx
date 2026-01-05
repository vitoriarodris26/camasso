import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",

});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camasso",
  description: "Fornecemos soluções em pulseiras e etiquetas de identificação para hospitais, indústrias e logística. Pulseiras de identificação hospitalar, protocolo de Manchester e classificação assistencial de risco. Fabricadas em BOPP e atendendo as especificações solicitadas no Protocolo de Identificação do paciente do Ministério da Saúde.Etiquetas e rótulos para bolsa de sangue, bolsa de soro. E também etiquetas para ecommerce e toda cadeia logística, bem como identificação industrial. Também fornecemos impressoras de pulseiras, rótulos, etiquetas, e cupom fiscal e não fiscal. Elas possuem impressão térmica, o que reduz custos com insumos e traz mais performance com a velocidade e qualidade que a impressão térmica oferece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
