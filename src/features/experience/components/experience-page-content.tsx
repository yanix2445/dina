"use client";

import Link from "next/link";
import Image from "next/image";
import { Experience } from "../types/experience.types";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/**
 * Composant client affichant le contenu complet d'une page d'expérience dédiée.
 * Gère deux modes : contenu riche (sections, résultats, outils) et contenu basique (description).
 */
export function ExperiencePageContent({ experience }: { experience: Experience }) {
    const isPro = experience.type === "Pro";
    const color = isPro ? "#C9A84C" : "#E8A4B8";
    const deepColor = isPro ? "#9E7B30" : "#A0405E";
    const mutedBg = isPro ? "#F5EDD6" : "#FBF0F5";
    
    // Tokens de style pour la carte "En bref"
    const cardBgGradient = "linear-gradient(135deg, #FBF0F5 0%, #E8A4B8 100%)";
    const cardBorderColor = "#E8A4B8";
    const cardDotColor = "#A0405E";

    const hasRichContent = !!(experience.sections && experience.sections.length > 0);

    // Sépare les lignes de la description pour les afficher en liste (mode basique)
    const tasks = experience.description
        .split("\n")
        .map((line) => line.replace(/^•\s*/, "").trim())
        .filter(Boolean);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">

                {/* ══════════════════════════════ */}
                {/*         HERO SECTION           */}
                {/* ══════════════════════════════ */}
                <section className="relative overflow-hidden pt-32 pb-12 border-b" style={{ borderColor: `${color}20`, background: "#FEFCF8" }}>
                    {/* Blobs décoratifs */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full opacity-20 select-none"
                        style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 -left-32 h-100 w-100 rounded-full opacity-15 select-none"
                        style={{ background: `radial-gradient(circle, ${isPro ? "#EDE5D8" : "#F5D6E2"}, transparent 70%)` }}
                    />

                    <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
                        {/* Bouton retour */}
                        <Link
                            href="/#parcours"
                            className="group mb-12 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-neutral-500 transition-all hover:border-neutral-300 hover:text-neutral-800"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Retour au parcours
                        </Link>

                        {/* Badge type */}
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                className="inline-block rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest"
                                style={{ background: mutedBg, color: deepColor }}
                            >
                                {isPro ? "Expérience Professionnelle" : "Engagement Personnel"}
                            </span>
                        </div>

                        {/* Période + Sous-titre (Poste) placés au-dessus du logo */}
                        <div className="flex flex-col gap-1.5 text-left mb-6">
                            {/* Période */}
                            <p className="font-display text-lg tracking-tight font-semibold" style={{ fontFamily: "var(--font-display)", color: color }}>
                                {experience.period}
                            </p>
                            {/* Sous-titre poste (si enrichi) */}
                            {hasRichContent && (
                                <p className="text-xl font-semibold text-[#3D3530]">
                                    {experience.title}
                                </p>
                            )}
                        </div>

                        {/* Bloc Titre + Logo alignés horizontalement */}
                        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-8">
                            {/* Grand Logo de l'entreprise */}
                            {experience.slug === "ruby-rose-beauty-controle-de-gestion" && (
                                <Image
                                    src="/ruby-rose/logo.jpeg"
                                    alt="Logo Ruby Rose Beauty France"
                                    width={144}
                                    height={144}
                                    sizes="(max-width: 768px) 112px, 144px"
                                    className="size-28 md:size-36 rounded-[2rem] object-cover border border-neutral-200/80 shadow-xl bg-white p-2 shrink-0"
                                />
                            )}
                            {experience.slug === "alumni-gea-meaux-tresoriere-fondatrice" && (
                                <Image
                                    src="/alumni/logo.png"
                                    alt="Logo du projet Alumni GEA Meaux"
                                    width={144}
                                    height={144}
                                    sizes="(max-width: 768px) 112px, 144px"
                                    className="size-28 md:size-36 rounded-[2rem] object-contain border border-neutral-200/80 shadow-xl bg-white p-2 shrink-0"
                                />
                            )}
                            {experience.slug === "sfts-evenementiel-logistique-caritatif" && (
                                <div className="size-28 md:size-36 rounded-[2rem] border border-neutral-200/80 shadow-xl bg-linear-to-br from-[#0D9488] to-[#0F766E] p-1 flex items-center justify-center shrink-0">
                                    <div className="flex flex-col items-center justify-center text-white">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-1.5 animate-pulse text-[#E8A4B8]">
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                        </svg>
                                        <span className="text-xs font-bold uppercase tracking-widest">SFTS</span>
                                    </div>
                                </div>
                            )}
                            
                            {/* Titre du projet (si enrichi) ou titre du poste décalé sur la droite */}
                            <div className="flex-1 text-left">
                                {hasRichContent && experience.projectTitle ? (
                                    <h1 className="font-display text-4xl font-bold leading-tight text-[#1C1815] md:text-5xl lg:text-[3.5rem]" style={{ fontFamily: "var(--font-display)" }}>
                                        {experience.projectTitle}
                                    </h1>
                                ) : (
                                    <h1 className="font-display text-4xl font-bold leading-tight text-[#1C1815] md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                                        {experience.title}
                                    </h1>
                                )}
                            </div>
                        </div>

                        {/* Entreprise */}
                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex flex-col text-left">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A9088] mb-0.5">Entreprise</p>
                                <p className="text-lg font-semibold text-[#6B6058]">
                                    {experience.company}
                                </p>
                            </div>
                        </div>

                        {/* Bandeau « EN UN COUP D'ŒIL » intégré */}
                        {hasRichContent && (
                            <div className="mt-4">
                                <div className="grid gap-8 sm:grid-cols-3">
                                    {/* Secteur */}
                                    {experience.sector && (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A9088]">Secteur</span>
                                            <p className="text-sm font-semibold text-[#1C1815]">{experience.sector}</p>
                                        </div>
                                    )}
                                    {/* Outils */}
                                    {experience.tools && experience.tools.length > 0 && (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A9088]">Outils utilisés</span>
                                            <div className="flex flex-wrap gap-2">
                                                {experience.tools.map((tool) => (
                                                    <span
                                                        key={tool}
                                                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold"
                                                        style={{ background: mutedBg, color: deepColor }}
                                                    >
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                                        </svg>
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {/* Mots-clés */}
                                    {experience.keywords && experience.keywords.length > 0 && (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A9088]">Mots-clés</span>
                                            <div className="flex flex-wrap gap-1.5">
                                                {experience.keywords.map((kw) => (
                                                    <span key={kw} className="rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#6B6058]">
                                                        {kw}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </section>


                {/* ══════════════════════════════════ */}
                {/*         CONTENU PRINCIPAL          */}
                {/* ══════════════════════════════════ */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6 md:px-8">

                        {hasRichContent ? (
                            /* ───── MODE ENRICHI ───── */
                            <div className="grid gap-16 lg:grid-cols-3">

                                {/* Colonne sidebar */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-28 flex flex-col gap-8">
                                         {/* Carte récap */}
                                         <div 
                                             className="rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300"
                                             style={{
                                                 background: cardBgGradient,
                                                 border: `1px solid ${cardBorderColor}`
                                             }}
                                         >
                                             <div className="flex items-center gap-2 mb-6">
                                                 <div className="size-2 rounded-full" style={{ background: cardDotColor }} />
                                                 <h3 className="text-[13px] font-extrabold uppercase tracking-[0.25em] text-[#1C1815]">En bref</h3>
                                             </div>
                                             <div className="flex flex-col gap-5">
                                                 {/* Poste */}
                                                 <div className="flex items-start gap-3">
                                                     <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/70 border border-white/40 text-[#1C1815] shadow-xs">
                                                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                             <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                                             <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                                         </svg>
                                                     </div>
                                                     <div className="flex flex-col text-left">
                                                         <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1815]/60">Poste</p>
                                                         <p className="mt-0.5 text-xs font-semibold text-[#1C1815] leading-relaxed">{experience.title}</p>
                                                     </div>
                                                 </div>

                                                 {/* Entreprise */}
                                                 <div className="flex items-start gap-3">
                                                     <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/70 border border-white/40 text-[#1C1815] shadow-xs">
                                                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                             <path d="M3 21h18" />
                                                             <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
                                                             <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
                                                             <path d="M9 9h6" />
                                                             <path d="M9 13h6" />
                                                             <path d="M9 17h6" />
                                                         </svg>
                                                     </div>
                                                     <div className="flex flex-col text-left">
                                                         <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1815]/60">Entreprise</p>
                                                         <p className="mt-0.5 text-xs font-semibold text-[#1C1815] leading-relaxed">{experience.company}</p>
                                                     </div>
                                                 </div>

                                                 {/* Période */}
                                                 <div className="flex items-start gap-3">
                                                     <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/70 border border-white/40 text-[#1C1815] shadow-xs">
                                                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                             <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                             <line x1="16" y1="2" x2="16" y2="6" />
                                                             <line x1="8" y1="2" x2="8" y2="6" />
                                                             <line x1="3" y1="10" x2="21" y2="10" />
                                                         </svg>
                                                     </div>
                                                     <div className="flex flex-col text-left">
                                                         <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1815]/60">Période</p>
                                                         <p className="mt-0.5 text-xs font-semibold text-[#1C1815] leading-relaxed">{experience.period}</p>
                                                     </div>
                                                 </div>

                                                 {/* Durée */}
                                                 <div className="flex items-start gap-3">
                                                     <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/70 border border-white/40 text-[#1C1815] shadow-xs">
                                                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                             <circle cx="12" cy="12" r="10" />
                                                             <polyline points="12 6 12 12 16 14" />
                                                         </svg>
                                                     </div>
                                                     <div className="flex flex-col text-left">
                                                         <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1815]/60">Durée / Type</p>
                                                         <p className="mt-0.5 text-xs font-semibold text-[#1C1815] leading-relaxed">
                                                             {experience.slug === "ruby-rose-beauty-controle-de-gestion" ? "10 semaines (Stage)" : isPro ? "Stage professionnel" : "Engagement associatif"}
                                                         </p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>

                                         {/* Infographie triangle France-Brésil-Turquie */}
                                         {experience.slug === "ruby-rose-beauty-controle-de-gestion" && (
                                             <div className="rounded-[24px] bg-linear-to-br from-[#1C1815] to-[#25201C] p-6 border border-neutral-800 shadow-xl relative overflow-hidden">
                                                 {/* Ambient Glow */}
                                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#C9A84C]/5 blur-2xl pointer-events-none" />
                                                 
                                                 <div className="flex items-center gap-2 mb-6">
                                                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                         <circle cx="12" cy="12" r="10" />
                                                         <line x1="2" y1="12" x2="22" y2="12" />
                                                         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                     </svg>
                                                     <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                                                         Interface internationale
                                                     </h3>
                                                 </div>

                                                 <div className="relative mx-auto flex h-60 w-full items-center justify-center">
                                                     {/* Triangle SVG */}
                                                     <svg viewBox="0 0 200 180" className="h-full w-full" fill="none">
                                                         <defs>
                                                             <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                                                                 <feGaussianBlur stdDeviation="3" result="blur" />
                                                                 <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                                             </filter>
                                                             
                                                             <linearGradient id="gold-line" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                 <stop offset="0%" stopColor="#EAD49E" />
                                                                 <stop offset="100%" stopColor="#C9A84C" />
                                                             </linearGradient>

                                                             <linearGradient id="pink-line" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                 <stop offset="0%" stopColor="#F6C8D6" />
                                                                 <stop offset="100%" stopColor="#E8A4B8" />
                                                             </linearGradient>

                                                             <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                                                 <path d="M 0 2 L 8 5 L 0 8 z" fill="#C9A84C" />
                                                             </marker>

                                                             <marker id="arrow-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                                                 <path d="M 0 2 L 8 5 L 0 8 z" fill="#E8A4B8" />
                                                             </marker>
                                                         </defs>

                                                         {/* Courbes de flux dynamiques */}
                                                         {/* Brésil ➔ France (Benchmarks & Concept) */}
                                                         <path 
                                                             d="M 38,122 Q 55,75 88,48" 
                                                             stroke="url(#pink-line)" 
                                                             strokeWidth="1.5" 
                                                             strokeDasharray="4 3" 
                                                             markerEnd="url(#arrow-pink)"
                                                             opacity="0.85" 
                                                         />

                                                         {/* France ➔ Turquie (Formulation R&D & Procédé) */}
                                                         <path 
                                                             d="M 112,48 Q 145,75 162,122" 
                                                             stroke="url(#gold-line)" 
                                                             strokeWidth="1.5" 
                                                             strokeDasharray="4 3" 
                                                             markerEnd="url(#arrow-gold)"
                                                             opacity="0.85" 
                                                         />

                                                         {/* Turquie ➔ Brésil (Logistique & Reporting) */}
                                                         <path 
                                                             d="M 152,138 Q 100,148 48,138" 
                                                             stroke="url(#gold-line)" 
                                                             strokeWidth="1.5" 
                                                             strokeDasharray="4 3" 
                                                             markerEnd="url(#arrow-gold)"
                                                             opacity="0.85" 
                                                         />

                                                         {/* Nœuds interactifs */}
                                                         {/* France — Sommet */}
                                                         <g transform="translate(100, 35)">
                                                             <circle r="20" fill="#C9A84C" opacity="0.1" filter="url(#glow-filter)" />
                                                             <circle r="12" fill="#1C1815" stroke="#C9A84C" strokeWidth="2" />
                                                             <text y="3.5" textAnchor="middle" fill="#FEFCF8" fontSize="8" fontWeight="bold">🇫🇷</text>
                                                             <text y="-28" textAnchor="middle" fill="#FEFCF8" fontSize="9" fontWeight="600">France</text>
                                                             <text y="-19" textAnchor="middle" fill="#9A9088" fontSize="6.5" fontWeight="500">R&D Formulation</text>
                                                         </g>

                                                         {/* Brésil — Bas Gauche */}
                                                         <g transform="translate(30, 135)">
                                                             <circle r="20" fill="#E8A4B8" opacity="0.1" filter="url(#glow-filter)" />
                                                             <circle r="12" fill="#1C1815" stroke="#E8A4B8" strokeWidth="2" />
                                                             <text y="3.5" textAnchor="middle" fill="#FEFCF8" fontSize="8" fontWeight="bold">🇧🇷</text>
                                                             <text y="28" textAnchor="middle" fill="#FEFCF8" fontSize="9" fontWeight="600">Brésil</text>
                                                             <text y="37" textAnchor="middle" fill="#9A9088" fontSize="6.5" fontWeight="500">Benchmarks & Marketing</text>
                                                         </g>

                                                         {/* Turquie — Bas Droit */}
                                                         <g transform="translate(170, 135)">
                                                             <circle r="20" fill="#C9A84C" opacity="0.1" filter="url(#glow-filter)" />
                                                             <circle r="12" fill="#1C1815" stroke="#C9A84C" strokeWidth="2" />
                                                             <text y="3.5" textAnchor="middle" fill="#FEFCF8" fontSize="8" fontWeight="bold">🇹🇷</text>
                                                             <text y="28" textAnchor="middle" fill="#FEFCF8" fontSize="9" fontWeight="600">Turquie</text>
                                                             <text y="37" textAnchor="middle" fill="#9A9088" fontSize="6.5" fontWeight="500">Production en Série</text>
                                                         </g>
                                                     </svg>
                                                 </div>

                                                 {/* Descriptif des flux sous l'infographie */}
                                                 <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-col gap-3.5 text-left">
                                                     <div className="flex items-start gap-3">
                                                         <div className="flex size-6 shrink-0 items-center justify-center rounded bg-[#E8A4B8]/10 text-xs font-semibold">
                                                             🇧🇷
                                                         </div>
                                                         <div className="flex flex-col">
                                                             <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8A4B8]">
                                                                 Amont : Brésil ➔ France
                                                             </span>
                                                             <span className="text-xs text-[#9A9088] leading-normal">
                                                                 Cadrage artistique & benchmarks cosmétiques issus du siège de la marque.
                                                             </span>
                                                         </div>
                                                     </div>

                                                     <div className="flex items-start gap-3">
                                                         <div className="flex size-6 shrink-0 items-center justify-center rounded bg-[#C9A84C]/10 text-xs font-semibold">
                                                             🇫🇷
                                                         </div>
                                                         <div className="flex flex-col">
                                                             <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A84C]">
                                                                 Cœur : France ➔ Turquie
                                                             </span>
                                                             <span className="text-xs text-[#9A9088] leading-normal">
                                                                 Formulation en laboratoire R&D et développement des pilotes techniques.
                                                             </span>
                                                         </div>
                                                     </div>

                                                     <div className="flex items-start gap-3">
                                                         <div className="flex size-6 shrink-0 items-center justify-center rounded bg-[#C9A84C]/10 text-xs font-semibold">
                                                             🇹🇷
                                                         </div>
                                                         <div className="flex flex-col">
                                                             <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A84C]">
                                                                 Aval : Turquie ➔ Brésil (Monde)
                                                             </span>
                                                             <span className="text-xs text-[#9A9088] leading-normal">
                                                                 Production industrielle en série pour la distribution globale du groupe.
                                                             </span>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         )}

                                         {/* Tableau de bord budgétaire */}
                                         {experience.slug === "alumni-gea-meaux-tresoriere-fondatrice" && (
                                             <div className="rounded-[24px] bg-linear-to-br from-[#1C1815] to-[#25201C] p-6 border border-neutral-800 shadow-xl relative overflow-hidden">
                                                 {/* Ambient Glow */}
                                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#E8A4B8]/5 blur-2xl pointer-events-none" />
                                                 
                                                 <div className="flex items-center gap-2 mb-6">
                                                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8A4B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                         <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                     </svg>
                                                     <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8A4B8]">
                                                         Suivi Budgétaire du Projet
                                                     </h3>
                                                 </div>

                                                 <div className="flex flex-col gap-4 text-left">
                                                     {/* Budget Total */}
                                                     <div className="rounded-xl bg-white/3 border border-white/5 p-4">
                                                         <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">Budget Total Récolté</span>
                                                         <div className="flex items-baseline gap-2 mt-1">
                                                             <span className="text-2xl font-extrabold text-[#FEFCF8]">1 353,77 €</span>
                                                             <span className="text-[10px] font-medium text-[#E8A4B8]">+100% Autofinancé</span>
                                                         </div>
                                                     </div>

                                                     {/* Dépenses clés */}
                                                     <div className="flex flex-col gap-3">
                                                         <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">Répartition des Allocations</span>
                                                         
                                                         {/* Traiteur / Buffet */}
                                                         <div className="flex flex-col gap-1.5">
                                                             <div className="flex justify-between text-[11px] font-semibold text-[#FEFCF8]">
                                                                 <span>Traiteur & Buffet (75 pers.)</span>
                                                                 <span>45% (~610 €)</span>
                                                             </div>
                                                             <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                                                                 <div className="h-full rounded-full bg-[#E8A4B8]" style={{ width: "45%" }} />
                                                             </div>
                                                         </div>

                                                         {/* Logistique & Animations */}
                                                         <div className="flex flex-col gap-1.5">
                                                             <div className="flex justify-between text-[11px] font-semibold text-[#FEFCF8]">
                                                                 <span>Logistique (Photobooth, Tombola)</span>
                                                                 <span>35% (~473 €)</span>
                                                             </div>
                                                             <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                                                                 <div className="h-full rounded-full bg-[#C9A84C]" style={{ width: "35%" }} />
                                                             </div>
                                                         </div>

                                                         {/* Sonorisation / Sécurité */}
                                                         <div className="flex flex-col gap-1.5">
                                                             <div className="flex justify-between text-[11px] font-semibold text-[#FEFCF8]">
                                                                 <span>Sécurité & Sonorisation</span>
                                                                 <span>20% (~270 €)</span>
                                                             </div>
                                                             <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                                                                 <div className="h-full rounded-full bg-neutral-400" style={{ width: "20%" }} />
                                                             </div>
                                                         </div>
                                                     </div>

                                                     <div className="mt-2 pt-4 border-t border-neutral-800/80 flex flex-col gap-2">
                                                         <div className="flex items-center gap-2 text-xs text-[#9A9088]">
                                                             <span className="size-1.5 rounded-full bg-[#E8A4B8]" />
                                                             <span>Salle Bossuet : 0 € (Partenariat Mairie Meaux)</span>
                                                         </div>
                                                         <div className="flex items-center gap-2 text-xs text-[#9A9088]">
                                                             <span className="size-1.5 rounded-full bg-[#C9A84C]" />
                                                             <span>Actions : Marché de Noël, Vente Photos</span>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         )}

                                          {/* Infographie d'impact caritatif (SFTS) */}
                                          {experience.slug === "sfts-evenementiel-logistique-caritatif" && (
                                              <div className="rounded-[24px] bg-linear-to-br from-[#1C1815] to-[#25201C] p-6 border border-neutral-800 shadow-xl relative overflow-hidden text-left">
                                                  {/* Ambient Glow */}
                                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#0D9488]/5 blur-2xl pointer-events-none" />
                                                  
                                                  <div className="flex items-center gap-2 mb-6">
                                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                                      </svg>
                                                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D9488]">
                                                          Infographie d&apos;Impact
                                                      </h3>
                                                  </div>

                                                  <div className="flex flex-col gap-6 relative">
                                                      {/* L'achat de billet */}
                                                      <div className="flex items-start gap-4">
                                                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/3 border border-white/5 text-[#E8A4B8] shadow-xs">
                                                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                                                              </svg>
                                                          </div>
                                                          <div className="flex flex-col">
                                                              <span className="text-[11px] font-bold text-[#FEFCF8]">1 Billet de Gala Acheté</span>
                                                              <span className="text-xs text-neutral-400 mt-0.5">Valeur moyenne : 50 € de contribution directe.</span>
                                                          </div>
                                                      </div>

                                                      {/* Connecteur vertical */}
                                                      <div className="absolute left-5 top-10 bottom-6 w-0.5 bg-linear-to-b from-[#E8A4B8] to-[#0D9488]" />

                                                      {/* L'impact en soins */}
                                                      <div className="flex items-start gap-4 z-10">
                                                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/3 border border-white/5 text-[#0D9488] shadow-xs">
                                                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                  <path d="m12 3-1.912 5.886H3.873l4.947 3.596L6.908 18.37 12 14.774l5.092 3.596-1.912-5.002 4.947-3.596h-6.215Z" />
                                                              </svg>
                                                          </div>
                                                          <div className="flex flex-col">
                                                              <span className="text-[11px] font-bold text-[#FEFCF8]">Impact Solidaire Direct</span>
                                                              <span className="text-xs text-neutral-400 mt-0.5">Permet de fournir <strong>15 kits de médicaments</strong> ou finance des journées de dépistage ophtalmologique gratuites.</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          )}

                                          {/* Encadré Négociation Artistique (SFTS) */}
                                          {experience.slug === "sfts-evenementiel-logistique-caritatif" && (
                                              <div className="rounded-[24px] p-6 border transition-all duration-300 text-left bg-linear-to-br from-[#FEFCF8] to-[#FFF9FA]" style={{ borderColor: `${color}40` }}>
                                                  <div className="flex items-center gap-2 mb-4">
                                                      <div className="size-2 rounded-full" style={{ background: color }} />
                                                      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1C1815]">Focus Négociation</h3>
                                                  </div>
                                                  <div className="flex flex-col gap-3">
                                                      <div className="flex size-8 items-center justify-center rounded-lg bg-neutral-100 text-[#1C1815]">
                                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                              <circle cx="9" cy="7" r="4" />
                                                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                          </svg>
                                                      </div>
                                                      <p className="text-xs font-semibold text-[#1C1815] leading-relaxed">Convaincre & Fédérer</p>
                                                      <p className="text-xs text-[#6B6058] leading-relaxed">
                                                          Capacité à mener des négociations complexes avec des artistes et managers (production, logistique et cachets) afin d&apos;assurer leur prestation bénévole lors des galas et maximiser ainsi la marge nette réinjectée dans les soins.
                                                      </p>
                                                  </div>
                                              </div>
                                          )}

                                        {/* Documents & Livrables */}
                                        {experience.recommendationLetters && experience.recommendationLetters.length > 0 && (
                                            <div className="flex flex-col gap-3">
                                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A9088]">
                                                    {(experience.slug === "ruby-rose-beauty-controle-de-gestion" || experience.slug === "alumni-gea-meaux-tresoriere-fondatrice") ? "Documents & Livrables" : "Recommandations"}
                                                </h3>
                                                {experience.recommendationLetters.map((letter, idx) => {
                                                    const isRuby = experience.slug === "ruby-rose-beauty-controle-de-gestion";
                                                    let docSubtitle = "Télécharger le PDF";
                                                    let docIcon = (
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                            <polyline points="14 2 14 8 20 8" />
                                                        </svg>
                                                    );

                                                    const lowerLabel = letter.label.toLowerCase();
                                                    if (lowerLabel.includes("rapport") || lowerLabel.includes("mémoire") || lowerLabel.includes("memoire")) {
                                                        docSubtitle = isRuby ? "Consulter le PDF (5.1 Mo)" : lowerLabel.includes("mémoire") ? "Consulter le Mémoire (21.2 Mo)" : "Télécharger le document";
                                                        docIcon = (
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                                <polyline points="14 2 14 8 20 8" />
                                                                <line x1="16" y1="13" x2="8" y2="13" />
                                                                <line x1="16" y1="17" x2="8" y2="17" />
                                                                <polyline points="10 9 9 9 8 9" />
                                                            </svg>
                                                        );
                                                    } else if (lowerLabel.includes("soutenance") || lowerLabel.includes("présentation") || lowerLabel.includes("presentation") || lowerLabel.includes("pptx")) {
                                                        docSubtitle = isRuby ? "Télécharger la soutenance (26.7 Mo)" : "Consulter la Présentation (14.4 Mo)";
                                                        docIcon = (
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                                                <line x1="8" y1="21" x2="16" y2="21" />
                                                                <line x1="12" y1="17" x2="12" y2="21" />
                                                            </svg>
                                                        );
                                                    } else if (lowerLabel.includes("excel") || lowerLabel.includes("tableau") || lowerLabel.includes("xlsx")) {
                                                        docSubtitle = "Télécharger le Fichier Excel (34.4 Mo)";
                                                        docIcon = (
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                                <line x1="3" y1="9" x2="21" y2="9" />
                                                                <line x1="9" y1="21" x2="9" y2="9" />
                                                                <path d="M21 3v18H3V3h18Zm-2 2H5v14h14V5Z" />
                                                                <path d="M7 7h4v2H7V7Zm0 4h10v2H7v-2Zm0 4h10v2H7v-2Z" />
                                                            </svg>
                                                        );
                                                    } else if (lowerLabel.includes("recommandation")) {
                                                        docSubtitle = "Consulter le PDF";
                                                        docIcon = (
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                                <path d="m9 12 2 2 4-4" />
                                                            </svg>
                                                        );
                                                    }

                                                    return (
                                                        <a
                                                            key={idx}
                                                            href={letter.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group flex items-center gap-3 rounded-2xl border bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                                                            style={{ borderColor: `${color}40` }}
                                                        >
                                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ background: mutedBg }}>
                                                                {docIcon}
                                                            </div>
                                                            <div className="flex flex-col text-left">
                                                                <span className="text-xs font-bold text-[#1C1815]">{letter.label}</span>
                                                                <span className="text-[10px] text-[#9A9088]">{docSubtitle}</span>
                                                            </div>
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto transition-transform group-hover:translate-x-0.5">
                                                                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                                                            </svg>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Colonne contenu narratif */}
                                <div className="lg:col-span-2">
                                    {/* Sections narratives */}
                                    <div className="flex flex-col gap-16">
                                        {experience.sections!.map((section, idx) => (
                                            <div key={idx}>
                                                <div className="mb-6 flex items-center gap-3">
                                                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold" style={{ background: mutedBg, color: deepColor }}>
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </span>
                                                    <h2 className="font-display text-xl font-bold text-[#1C1815]" style={{ fontFamily: "var(--font-display)" }}>
                                                        {section.title}
                                                    </h2>
                                                </div>
                                                <div className="ml-10 text-[15px] leading-[1.85] text-[#3D3530] whitespace-pre-line">
                                                    {section.content}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Présentation Vidéo : Alumni GEA Meaux */}
                                    {experience.slug === "alumni-gea-meaux-tresoriere-fondatrice" && (
                                        <div className="mt-20">
                                            <div className="mb-8 flex items-center gap-3">
                                                <span className="h-px w-8" style={{ background: color }} />
                                                <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color }}>
                                                    Présentation Vidéo : Le Projet en Mouvement
                                                </span>
                                            </div>
                                            <div className="overflow-hidden rounded-[24px] border border-neutral-200/50 bg-[#FEFCF8] shadow-md p-4">
                                                <div className="aspect-video w-full rounded-[16px] overflow-hidden bg-[#1C1815]">
                                                    <video
                                                        src="/alumni/video-projet.mp4"
                                                        controls
                                                        className="h-full w-full object-cover"
                                                        poster="/alumni/photo-organisateurs-jour-j.jpg"
                                                    />
                                                </div>
                                                <div className="mt-4 px-2 text-left">
                                                    <h4 className="font-display text-sm font-bold text-[#1C1815]">Teaser & Rétrospective du Projet Alumni</h4>
                                                    <p className="mt-1 text-xs leading-relaxed text-[#6B6058]">Découvrez l&apos;ambiance et la dynamique de la conférence qui a réuni plus de 75 étudiants et professionnels.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Galerie Photos : Alumni GEA Meaux */}
                                    {experience.slug === "alumni-gea-meaux-tresoriere-fondatrice" && (
                                        <div className="mt-20">
                                            <div className="mb-8 flex items-center gap-3">
                                                <span className="h-px w-8" style={{ background: color }} />
                                                <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color }}>
                                                    Galerie Photo : Les Coulisses du Projet
                                                </span>
                                            </div>

                                            <div className="grid gap-6 sm:grid-cols-2">
                                                {[
                                                    {
                                                        src: "/alumni/image-arrivee-invites.jpg",
                                                        title: "Étape 1 : Accueil des invités & Cocktail d'arrivée",
                                                        desc: "Arrivée et émargement des professionnels (Alumni) et étudiants pour la conférence."
                                                    },
                                                    {
                                                        src: "/alumni/entree-salle.jpg",
                                                        title: "Étape 2 : Salle Bossuet à la Maison de l'Économie",
                                                        desc: "La prestigieuse salle Bossuet gracieusement mise à disposition par la Mairie de Meaux."
                                                    },
                                                    {
                                                        src: "/alumni/buffet.jpg",
                                                        title: "Étape 3 : Buffet traiteur de célébration",
                                                        desc: "Le somptueux buffet inclusif préparé pour les 75 participants lors des temps d'échange."
                                                    },
                                                    {
                                                        src: "/alumni/photo-organisateurs-jour-j.jpg",
                                                        title: "Étape 4 : L'équipe d'organisation au Jour J",
                                                        desc: "L'équipe d'étudiants organisateurs et fondateurs réunie le jour de l'événement."
                                                    }
                                                ].map((imgItem, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="overflow-hidden rounded-[20px] border border-neutral-200/50 bg-[#FEFCF8] shadow-sm"
                                                    >
                                                        <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                                                            <Image
                                                                src={imgItem.src}
                                                                alt={imgItem.title}
                                                                fill
                                                                sizes="(max-width: 640px) 100vw, 50vw"
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div className="p-5">
                                                            <h4 className="font-display text-sm font-bold text-[#1C1815]">
                                                                {imgItem.title}
                                                            </h4>
                                                            <p className="mt-1.5 text-xs leading-relaxed text-[#6B6058]">
                                                                {imgItem.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                     {/* Galerie Photos : Solidarité Franco-Tunisienne de Santé (SFTS) */}
                                     {experience.slug === "sfts-evenementiel-logistique-caritatif" && (
                                         <div className="mt-20">
                                             <div className="mb-8 flex items-center gap-3">
                                                 <span className="h-px w-8" style={{ background: color }} />
                                                 <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color }}>
                                                     Galerie Photo : Actions Événementielles & Logistiques
                                                 </span>
                                             </div>

                                             <div className="grid gap-6 sm:grid-cols-2">
                                                 {[
                                                     {
                                                         src: "/sfts/IMG_3535.jpeg",
                                                         title: "Le Gala de Charité Annuel",
                                                         desc: "Mobilisation et collecte de fonds à travers un grand spectacle d'artistes engagés pour la cause médicale."
                                                     },
                                                     {
                                                         src: "/sfts/IMG_6113.jpg",
                                                         title: "Logistique internationale & Expéditions",
                                                         desc: "Chargement et logistique de conteneurs maritimes d'équipements lourds vers les hôpitaux régionaux."
                                                     },
                                                     {
                                                         src: "/sfts/IMG_6033.jpg",
                                                         title: "Journées de Santé & Soins Gratuits",
                                                         desc: "Consultations et distribution de médicaments gratuits dispensées aux populations isolées en Tunisie."
                                                     },
                                                     {
                                                         src: "/sfts/IMG_5743.jpg",
                                                         title: "Gestion des Stocks de Médicaments",
                                                         desc: "Tri minutieux, inventaire analytique et sécurisation des lots de dons médicaux en France."
                                                     }
                                                 ].map((imgItem, idx) => (
                                                     <div
                                                         key={idx}
                                                         className="overflow-hidden rounded-[20px] border border-neutral-200/50 bg-[#FEFCF8] shadow-sm"
                                                     >
                                                         <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                                                             <Image
                                                                 src={imgItem.src}
                                                                 alt={imgItem.title}
                                                                 fill
                                                                 sizes="(max-width: 640px) 100vw, 50vw"
                                                                 className="object-cover"
                                                             />
                                                         </div>
                                                         <div className="p-5">
                                                             <h4 className="font-display text-sm font-bold text-[#1C1815]">
                                                                 {imgItem.title}
                                                             </h4>
                                                             <p className="mt-1.5 text-xs leading-relaxed text-[#6B6058]">
                                                                 {imgItem.desc}
                                                             </p>
                                                         </div>
                                                     </div>
                                                 ))}
                                             </div>
                                         </div>
                                     )}

                                    {/* Galerie Photos : Immersion au Laboratoire */}
                                    {experience.slug === "ruby-rose-beauty-controle-de-gestion" && (
                                        <div className="mt-20">
                                            <div className="mb-8 flex items-center gap-3">
                                                <span className="h-px w-8" style={{ background: color }} />
                                                <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color }}>
                                                    Galerie Photo : Immersion R&D & Tests
                                                </span>
                                            </div>

                                            <div className="grid gap-6 sm:grid-cols-2">
                                                {[
                                                    {
                                                        src: "/ruby-rose/formulation-etape-1.jpeg",
                                                        title: "Étape 1 : Pesée précise & sélection des pigments",
                                                        desc: "Sélection rigoureuse et pesée millimétrique des matières premières pour la formulation."
                                                    },
                                                    {
                                                        src: "/ruby-rose/formulation-etape-2.jpeg",
                                                        title: "Étape 2 : Processus de mélange thermique",
                                                        desc: "Mélange et homogénéisation à chaud sous agitation contrôlée en laboratoire."
                                                    },
                                                    {
                                                        src: "/ruby-rose/formulation-etape-3.jpeg",
                                                        title: "Étape 3 : Formulation cosmétique finale",
                                                        desc: "Obtention de la texture et de la teinte finale stabilisées prêtes pour le conditionnement."
                                                    },
                                                    {
                                                        src: "/ruby-rose/teste-produit.jpeg",
                                                        title: "Étape 4 : Tests produits & rendu sensoriel",
                                                        desc: "Évaluation de la pigmentation, de la tenue et de la sensorialité sur le produit fini."
                                                    }
                                                ].map((imgItem, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="overflow-hidden rounded-[20px] border border-neutral-200/50 bg-[#FEFCF8] shadow-sm"
                                                    >
                                                        <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                                                            <Image
                                                                src={imgItem.src}
                                                                alt={imgItem.title}
                                                                fill
                                                                sizes="(max-width: 640px) 100vw, 50vw"
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div className="p-5">
                                                            <h4 className="font-display text-sm font-bold text-[#1C1815]">
                                                                {imgItem.title}
                                                            </h4>
                                                            <p className="mt-1.5 text-xs leading-relaxed text-[#6B6058]">
                                                                {imgItem.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Résultats & Apprentissages */}
                                    {experience.results && experience.results.length > 0 && (
                                        <div className="mt-20">
                                            <div className="mb-8 flex items-center gap-3">
                                                <span className="h-px w-8" style={{ background: color }} />
                                                <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color }}>
                                                    Résultats & Apprentissages
                                                </span>
                                            </div>

                                            <div className="grid gap-4 sm:grid-cols-1">
                                                {experience.results.map((result, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="rounded-[20px] p-6 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                                                        style={{
                                                            background: idx === 0 ? "#1C1815" : "#FAFAF9",
                                                            border: idx === 0 ? "none" : "1px solid rgba(28,24,21,0.05)",
                                                        }}
                                                    >
                                                        <div className="mb-3 flex items-center gap-3">
                                                            <div
                                                                className="flex size-8 shrink-0 items-center justify-center rounded-lg"
                                                                style={{
                                                                    background: idx === 0 ? `${color}20` : mutedBg,
                                                                }}
                                                            >
                                                                {idx === 0 && (
                                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                                        <polyline points="22 4 12 14.01 9 11.01" />
                                                                    </svg>
                                                                )}
                                                                {idx === 1 && (
                                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                                                    </svg>
                                                                )}
                                                                {idx === 2 && (
                                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                                        <circle cx="9" cy="7" r="4" />
                                                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                            <h3
                                                                className="text-xs font-bold uppercase tracking-wider"
                                                                style={{ color: idx === 0 ? color : deepColor }}
                                                            >
                                                                {result.title}
                                                            </h3>
                                                        </div>
                                                        <p
                                                            className="ml-11 text-sm leading-relaxed"
                                                            style={{ color: idx === 0 ? "#FEFCF8" : "#3D3530" }}
                                                        >
                                                            {result.content}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            /* ───── MODE BASIQUE ───── */
                            <div className="grid gap-16 lg:grid-cols-3">
                                {/* Colonne gauche : Infos clés */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-28 flex flex-col gap-8">
                                        {/* Carte récap */}
                                        <div 
                                            className="rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300"
                                            style={{
                                                background: isPro 
                                                    ? "linear-gradient(135deg, #FAD0C4 0%, #E8A4B8 100%)" 
                                                    : "linear-gradient(135deg, #FDF0F3 0%, #F5C2D0 100%)",
                                                border: `1px solid ${isPro ? "#D88B9E" : "#E2AFBC"}`
                                            }}
                                        >
                                            <div className="flex items-center gap-2 mb-6">
                                                 <div className="size-2 rounded-full" style={{ background: isPro ? "#8A2A46" : "#A0405E" }} />
                                                 <h3 className="text-[13px] font-extrabold uppercase tracking-[0.25em] text-[#1C1815]">En bref</h3>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                {/* Poste */}
                                                <div className="flex items-start gap-3">
                                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/70 border border-white/40 text-[#1C1815] shadow-xs">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex flex-col text-left">
                                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1815]/60">Poste</p>
                                                        <p className="mt-0.5 text-xs font-semibold text-[#1C1815] leading-relaxed">{experience.title}</p>
                                                    </div>
                                                </div>

                                                {/* Entreprise */}
                                                <div className="flex items-start gap-3">
                                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/70 border border-white/40 text-[#1C1815] shadow-xs">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M3 21h18" />
                                                            <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
                                                            <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
                                                            <path d="M9 9h6" />
                                                            <path d="M9 13h6" />
                                                            <path d="M9 17h6" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex flex-col text-left">
                                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1815]/60">Entreprise</p>
                                                        <p className="mt-0.5 text-xs font-semibold text-[#1C1815] leading-relaxed">{experience.company}</p>
                                                    </div>
                                                </div>

                                                {/* Période */}
                                                <div className="flex items-start gap-3">
                                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/70 border border-white/40 text-[#1C1815] shadow-xs">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                            <line x1="16" y1="2" x2="16" y2="6" />
                                                            <line x1="8" y1="2" x2="8" y2="6" />
                                                            <line x1="3" y1="10" x2="21" y2="10" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex flex-col text-left">
                                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1815]/60">Période</p>
                                                        <p className="mt-0.5 text-xs font-semibold text-[#1C1815] leading-relaxed">{experience.period}</p>
                                                    </div>
                                                </div>

                                                {/* Durée */}
                                                <div className="flex items-start gap-3">
                                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/70 border border-white/40 text-[#1C1815] shadow-xs">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="10" />
                                                            <polyline points="12 6 12 12 16 14" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex flex-col text-left">
                                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1815]/60">Durée / Type</p>
                                                        <p className="mt-0.5 text-xs font-semibold text-[#1C1815] leading-relaxed">
                                                            {experience.slug === "ruby-rose-beauty-controle-de-gestion" ? "10 semaines (Stage)" : isPro ? "Stage professionnel" : "Engagement associatif"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Documents & Livrables */}
                                        {experience.recommendationLetters && experience.recommendationLetters.length > 0 && (
                                            <div className="flex flex-col gap-3">
                                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A9088]">
                                                    {experience.slug === "ruby-rose-beauty-controle-de-gestion" ? "Documents & Livrables" : "Recommandations"}
                                                </h3>
                                                {experience.recommendationLetters.map((letter, idx) => {
                                                    const isRuby = experience.slug === "ruby-rose-beauty-controle-de-gestion";
                                                    let docSubtitle = "Télécharger le PDF";
                                                    let docIcon = (
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                            <polyline points="14 2 14 8 20 8" />
                                                        </svg>
                                                    );

                                                    const lowerLabel = letter.label.toLowerCase();
                                                    if (lowerLabel.includes("rapport")) {
                                                        docSubtitle = isRuby ? "Consulter le PDF (5.1 Mo)" : "Télécharger le document";
                                                        docIcon = (
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                                <polyline points="14 2 14 8 20 8" />
                                                                <line x1="16" y1="13" x2="8" y2="13" />
                                                                <line x1="16" y1="17" x2="8" y2="17" />
                                                                <polyline points="10 9 9 9 8 9" />
                                                            </svg>
                                                        );
                                                    } else if (lowerLabel.includes("soutenance") || lowerLabel.includes("pptx")) {
                                                        docSubtitle = isRuby ? "Télécharger la soutenance (26.7 Mo)" : "Télécharger les slides";
                                                        docIcon = (
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                                                <line x1="8" y1="21" x2="16" y2="21" />
                                                                <line x1="12" y1="17" x2="12" y2="21" />
                                                            </svg>
                                                        );
                                                    } else if (lowerLabel.includes("recommandation")) {
                                                        docSubtitle = "Consulter le PDF";
                                                        docIcon = (
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                                <path d="m9 12 2 2 4-4" />
                                                            </svg>
                                                        );
                                                    }

                                                    return (
                                                        <a
                                                            key={idx}
                                                            href={letter.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group flex items-center gap-3 rounded-2xl border bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                                                            style={{ borderColor: `${color}40` }}
                                                        >
                                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ background: mutedBg }}>
                                                                {docIcon}
                                                            </div>
                                                            <div className="flex flex-col text-left">
                                                                <span className="text-xs font-bold text-[#1C1815]">{letter.label}</span>
                                                                <span className="text-[10px] text-[#9A9088]">{docSubtitle}</span>
                                                            </div>
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={deepColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto transition-transform group-hover:translate-x-0.5">
                                                                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                                                            </svg>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Colonne droite : Missions */}
                                <div className="lg:col-span-2">
                                    <div className="mb-8 flex items-center gap-3">
                                        <span className="h-px w-8" style={{ background: color }} />
                                        <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color }}>
                                            Missions réalisées
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        {tasks.map((task, idx) => (
                                            <div
                                                key={idx}
                                                className="group flex items-start gap-4 rounded-2xl bg-[#FAFAF9] p-5 transition-all hover:bg-white hover:shadow-sm"
                                                style={{ border: "1px solid rgba(28,24,21,0.04)" }}
                                            >
                                                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold" style={{ background: mutedBg, color: deepColor }}>
                                                    {String(idx + 1).padStart(2, "0")}
                                                </span>
                                                <p className="text-sm leading-relaxed text-[#3D3530] pt-1">{task}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CTA Contact */}
                        <div className="mt-24 flex flex-col items-center text-center">
                            <div className="h-px w-full max-w-xs mb-12" style={{ background: `linear-gradient(to right, transparent, ${color}40, transparent)` }} />
                            <p className="mb-6 text-sm text-[#9A9088]">Cette expérience vous intéresse ?</p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                                style={{ background: color, boxShadow: `0 8px 25px -8px ${color}60` }}
                            >
                                <span>Discutons-en</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

