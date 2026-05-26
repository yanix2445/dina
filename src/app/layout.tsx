import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
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
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dina-riani.fr"),
  title: {
    default: "Dina Riani — Portfolio",
    template: "%s | Dina Riani",
  },
  description:
    "Dina Riani, étudiante en BUT GEA à Meaux spécialisée en contrôle de gestion et comptabilité. Découvrez mon parcours, mes compétences et mes projets.",
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
        url: "/portrait-dina.jpg",
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
    images: ["/portrait-dina.jpg"],
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dina-riani.fr";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    name: "Dina Riani",
    jobTitle: "Étudiante en BUT GEA — Contrôle de gestion",
    description:
      "Étudiante en BUT GEA à Meaux, spécialisée en contrôle de gestion et comptabilité, à la recherche d'une alternance en Master dès septembre 2026.",
    url: siteUrl,
    image: `${siteUrl}/portrait-dina.jpg`,
    email: "contact@dina-riani.fr",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IUT de Meaux",
    },
    knowsAbout: [
      "Contrôle de gestion",
      "Comptabilité",
      "Finance",
      "Gestion des Entreprises et des Administrations",
    ],
    sameAs: ["https://www.linkedin.com/in/dina-rianii/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster richColors position="top-right" />
        <Analytics />
      </body>
    </html>
  );
}
