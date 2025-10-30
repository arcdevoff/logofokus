import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/global.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"], // укажи нужные веса
});

export const metadata: Metadata = {
  title: "Логопед онлайн",
  description: "Логопед онлайн для детей от 3,5 лет",
  keywords: [
    "логопед",
    "Логопед онлайн",
    "логопед для детей",
    "детский логопед",
    "актуальная логопедия",
  ],
  openGraph: {
    title: "Логопед онлайн",
    description: "Логопед онлайн для детей от 3,5 лет",
    type: "website",
    images: [
      {
        url: "/images/og-logoped-online.png",
        width: 1200,
        height: 630,
        alt: "Логопед онлайн",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Логопед онлайн",
    description: "Логопед онлайн для детей от 3,5 лет",
    images: ["/images/og-logoped-online.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
