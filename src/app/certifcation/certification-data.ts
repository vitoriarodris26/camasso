export interface Certification {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  textColor: string;
  bgColor: string;
  image: string;
  downloadUrl: string;
}

export const certification: Certification[] = [
  {
    id: 1,
    title: "ISO 9001",
    subtitle: "QUALITY ASSURANCE MANAGEMENT",
    color: "border-blue-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    image: "/certificacoes/iso_9001.png", 
    downloadUrl: "/certificacoes/certificado-filial-9001.pdf"
  },
  {
    id: 2,
    title: "ISO 14001",
    subtitle: "ENVIRONMENTAL MANAGEMENT",
    color: "border-green-600",
    textColor: "text-green-600",
    bgColor: "bg-green-50",
    image: "/certificacoes/iso_14001.png",
    downloadUrl: "/certificacoes/certificado-filial-14001.pdf"
  },
  {
    id: 3,
    title: "ISO 45001",
    subtitle: "OCCUPATIONAL HEALTH & SAFETY",
    color: "border-orange-600",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50",
    image: "/certificacoes/iso_45001.png",
    downloadUrl: "/certificacoes/certificado-filial-18001.pdf"
  },
];