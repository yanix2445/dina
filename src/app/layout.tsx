import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dina Riani — Portfolio",
  description:
    "Portfolio de Dina Riani, étudiante en BUT GEA à Meaux. Spécialisation en contrôle de gestion, comptabilité et conseil financier.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Dina Riani — Portfolio en BUT GEA",
    description: "Découvrez mon parcours, mes compétences et mes projets en gestion des entreprises et administrations.",
    siteName: "Portfolio Dina Riani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dina Riani — Portfolio GEA",
    description: "Étudiante en BUT GEA, parcours et compétences spécialisées en finance et contrôle de gestion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(dmSans.variable, playfair.variable)}>
      <body className={cn("antialiased")}>{children}</body>
    </html>
  );
}
