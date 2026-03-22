import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

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

export const viewport: Viewport = {
  themeColor: "#FEFCF8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dina-riani.vercel.app"),
  title: {
    default: "Dina Riani — Portfolio",
    template: "%s | Dina Riani",
  },
  description:
    "Portfolio de Dina Riani, étudiante en BUT GEA à Meaux. Spécialisation en contrôle de gestion, comptabilité et conseil financier. Découvrez mon parcours, mes compétences et mes projets professionnels.",
  applicationName: "Portfolio Dina Riani",
  authors: [{ name: "Dina Riani" }],
  creator: "Dina Riani",
  publisher: "Dina Riani",
  keywords: [
    "BUT GEA",
    "Contrôle de gestion",
    "Comptabilité",
    "Finance",
    "Portfolio",
    "Étudiante",
    "Gestion des Entreprises et des Administrations",
    "Dina Riani",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "Dina Riani — Portfolio en BUT GEA",
    description:
      "Découvrez mon parcours, mes compétences et mes projets en gestion des entreprises et administrations.",
    siteName: "Portfolio Dina Riani",
    images: [
      {
        url: "/portrait-dina.png",
        width: 1200,
        height: 630,
        alt: "Dina Riani — Portfolio BUT GEA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dina Riani — Portfolio GEA",
    description:
      "Étudiante en BUT GEA, parcours et compétences spécialisées en finance et contrôle de gestion.",
    images: ["/portrait-dina.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(dmSans.variable, playfair.variable)}>
      <body className={cn("antialiased")}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
