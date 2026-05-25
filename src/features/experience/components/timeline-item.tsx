import Link from "next/link";
import { Experience } from "../types/experience.types";

/**
 * Composant carte "Bulle" pour afficher une expérience dans la frise chronologique (Timeline).
 * Gère dynamiquement ses couleurs et sa forme selon le type d'expérience (Pro/Formation).
 */
export function TimelineItem({ exp, isEven }: { exp: Experience; isEven: boolean }) {
    // Différenciation de style : Doré (Pro) vs Rose (Formation/Autre)
    const isPro = exp.type === "Pro";
    const color = isPro ? "#C9A84C" : "#E8A4B8";
    const mutedBg = isPro ? "#F5EDD6" : "#FBF0F5";
    const textColor = isPro ? "#9E7B30" : "#A0405E";

    // Conteneur principal : s'aligne à gauche ou à droite sur Bureau selon l'index (isEven)
    return (
        <div className={`relative w-[90%] md:w-max md:max-w-full ${isEven ? 'md:self-start' : 'md:self-end'}`}>
            
            {/* 
                La Carte : Bords arrondis asymétriques selon le côté où elle se trouve
                - Pair (Gauche) : Coin inférieur droit asymétrique (8px)
                - Impair (Droite) : Coin inférieur gauche asymétrique (8px)
            */}
            <div
                className="relative bg-white p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
                style={{
                    border: `1px solid ${isPro ? "#E8D5A3" : "#F5D6E2"}`,
                    boxShadow: "0 4px 20px -10px rgba(0,0,0,0.05)",
                    borderRadius: isEven ? "32px 32px 32px 8px" : "32px 32px 8px 32px",
                }}
            >
                {/* En-tête : Badge dynamique (Pro / Formation) + Bouton "Voir détails" */}
                <div className="mb-4 flex items-start justify-between gap-4">
                    <span
                        className="inline-block rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest"
                        style={{ background: mutedBg, color: textColor }}
                    >
                        {exp.type}
                    </span>

                    {/* Bouton vers la page dédiée */}
                    <Link
                        href={`/experience/${exp.slug}`}
                        className="group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
                        style={{
                            color: textColor,
                            background: mutedBg,
                        }}
                        aria-label={`Voir les détails de l'expérience ${exp.title}`}
                    >
                        <span className="hidden sm:inline">Détails</span>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform group-hover:translate-x-0.5"
                        >
                            <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                        </svg>
                    </Link>
                </div>

                {/* Date / Période avec la couleur principale dynamique */}
                <p
                    className="mb-1.5 font-display text-xl tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: color }}
                >
                    {exp.period}
                </p>

                {/* Titre du poste ou du diplôme */}
                <h3 className="mb-1 font-display text-lg font-bold text-[#1C1815]" style={{ fontFamily: "var(--font-display)" }}>
                    {exp.title}
                </h3>

                {/* Nom de l'entreprise ou école */}
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-[#9A9088]">
                    {exp.company}
                </p>

                {/* Description de l'expérience (supporte les retours à la ligne natifs) */}
                <p className="text-sm leading-relaxed text-[#6B6058] whitespace-pre-line mb-6">
                    {exp.description}
                </p>

                {/* Section optionnelle : Lettres de recommandation */}
                {exp.recommendationLetters && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-100">
                        {exp.recommendationLetters.map((letter, idx) => (
                            <a
                                key={idx}
                                href={letter.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#9E7B30] transition-all duration-300 hover:bg-[#C9A84C] hover:text-white"
                            >
                                {/* Icône "Lien Externe" PDF */}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform group-hover:-translate-y-0.5"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                                {letter.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
