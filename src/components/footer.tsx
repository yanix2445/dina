"use client";

import { cn } from "@/lib/utils";

const links = {
    navigation: [
        { label: "À propos", href: "#about" },
        { label: "Parcours", href: "#parcours" },
        { label: "Compétences", href: "#competences" },
        { label: "Projets", href: "#projets" },
    ],
    contact: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/dina-riani-53a876333/" },
        { label: "Email", href: "mailto:dinariani258@gmail.com" },
        { label: "Téléphone", href: "tel:+33769053306" },
        { label: "Curriculum Vitae", href: "/Cv dina.pdf" },
    ]
};

export function Footer() {
    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-[#1C1815] bg-[#1C1815] pt-20 pb-10">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                {/* Section principale : 4 colonnes */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-20">

                    {/* Colonne 1 : Marque & Bio */}
                    <div className="flex flex-col items-start gap-6 lg:col-span-1">
                        <a href="#" onClick={scrollToTop} className="group flex items-center gap-3">
                            <span className="flex size-10 items-center justify-center rounded-full border border-[#C9A84C]/50 text-xs font-semibold tracking-wider text-[#C9A84C] transition-all group-hover:bg-[#C9A84C] group-hover:text-[#1C1815]">
                                DR
                            </span>
                            <span className="font-display text-lg font-bold text-[#FEFCF8] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                                Dina Riani.
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed text-[#9A9088] max-w-xs">
                            Étudiante en BUT GEA. Spécialisation en contrôle de gestion, comptabilité et conseil financier.
                        </p>
                    </div>

                    {/* Colonne 2 : Navigation */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                            Navigation
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {links.navigation.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm font-medium text-[#FEFCF8] transition-colors hover:text-[#C9A84C]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact & Réseaux */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {links.contact.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm font-medium text-[#FEFCF8] transition-colors hover:text-[#C9A84C]"
                                        {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 4 : Informations */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                            Informations
                        </h4>
                        <div className="flex flex-col gap-4">
                            <div>
                                <p className="text-[11px] font-semibold text-[#9A9088] uppercase tracking-wider mb-1">Localisation</p>
                                <p className="text-sm font-medium text-[#FEFCF8]">Meaux, France</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-semibold text-[#9A9088] uppercase tracking-wider mb-1">Disponibilité</p>
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-3 py-1 text-xs font-medium text-[#C9A84C]">
                                    <span className="relative flex size-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A84C] opacity-75"></span>
                                        <span className="relative inline-flex size-2 rounded-full bg-[#C9A84C]"></span>
                                    </span>
                                    Stage / Alternance 2025
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Séparateur pour la ligne finale */}
                <div className="w-full h-px bg-[#FEFCF8]/10 mb-8" />

                {/* Section bas de page : Copyright et retour en haut */}
                <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
                    <div className="flex flex-col items-center gap-2 sm:items-start">
                        <p className="text-xs font-medium text-[#9A9088]">
                            &copy; {new Date().getFullYear()} Dina RIANI. Tous droits réservés.
                        </p>
                        <p className="text-[10px] text-[#9A9088]/80">
                            Fait avec passion pour le BUT GEA.
                        </p>
                    </div>

                    <a
                        href="#"
                        onClick={scrollToTop}
                        className="group flex size-10 items-center justify-center rounded-full bg-[#FEFCF8]/5 border border-[#FEFCF8]/10 transition-all hover:bg-[#C9A84C] hover:border-[#C9A84C]"
                        aria-label="Retour en haut"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#FEFCF8] transition-transform group-hover:-translate-y-1 group-hover:text-[#1C1815]"
                        >
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
