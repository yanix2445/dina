"use client";

type Expertise = {
    title: string;
    items: { name: string; level: number }[];
};

const expertises: Expertise[] = [
    {
        title: "Comptabilité",
        items: [
            { name: "Comptabilité analytique (centres de coûts, répartition)", level: 90 },
            { name: "Logiciels de pilotage (Agicap, Tiime, RCA)", level: 85 },
            { name: "Saisie des opérations courantes", level: 95 },
            { name: "Rapprochements bancaires & déclarations", level: 80 },
        ],
    },
    {
        title: "Gestion Financière",
        items: [
            { name: "Contrôle de gestion (suivi budgétaire, reporting)", level: 90 },
            { name: "Traitement et analyse des données (tableaux de bord)", level: 90 },
            { name: "Analyse des écarts & rentabilité", level: 85 },
            { name: "Élaboration des budgets prévisionnels", level: 85 },
        ],
    },
    {
        title: "Management & RH",
        items: [
            { name: "Excel (formules, TCD, graphiques, Power BI)", level: 95 },
            { name: "PowerPoint & Word (présentations, rapports)", level: 90 },
            { name: "Gestion de projet & Planification", level: 85 },
            { name: "Bases de l'administration du personnel", level: 75 },
        ],
    },
];

const certifications = [
    { name: "TOEIC", date: "Obtenu", desc: "Anglais professionnel (Score : 700)" },
    { name: "Score Message", date: "Validé", desc: "Aptitudes pour les études de gestion (Score : 198)" },
    { name: "Certification Pix", date: "Validé", desc: "Outils numériques (Traitements de données)" },
];

/* Soft Skills ciblées liées aux 3 grands pôles (Compta, Finance, Management) */
const softSkills = [
    "Rigueur & Fiabilité", // Compta
    "Esprit d'Analyse", // Finance
    "Travail en Équipe", // Management
    "Sens de l'Organisation", // Compta
    "Esprit de Synthèse", // Finance
    "Communication Professionnelle", // Management
    "Force de Proposition", // Finance/Management
];

export function CompetencesSection() {
    return (
        <section id="competences" className="scroll-mt-24 overflow-hidden bg-[#FAFAF9] py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-8">

                {/* En-tête minimalist */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#C9A84C]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                            Les 3 axes du BUT GEA
                        </span>
                        <span className="h-px w-8 bg-[#C9A84C]" />
                    </div>
                    <h2
                        className="mb-6 font-display text-4xl font-bold text-[#1C1815] lg:text-5xl"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Savoir-Faire & Savoir-Être
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-[#6B6058]">
                        Des compétences acquises au fil de la formation pour intervenir concrètement sur la tenue comptable, l'aide à la décision financière et l'organisation managériale et financier de l'entreprise.
                    </p>
                </div>

                {/* ── 1. Marquee Soft Skills (Infini) ── */}
                <div className="relative mb-24 flex w-full flex-col">
                    <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#FAFAF9] to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#FAFAF9] to-transparent pointer-events-none" />

                    <div className="flex w-full overflow-hidden">
                        <div className="flex w-max animate-marquee items-center gap-8 py-4">
                            {[...softSkills, ...softSkills, ...softSkills].map((skill, index) => (
                                <div key={index} className="flex items-center gap-8">
                                    <span className="font-display text-2xl font-light italic tracking-tight text-[#C47090]" style={{ fontFamily: "var(--font-display)" }}>
                                        {skill}
                                    </span>
                                    <span className="text-xl text-[#F5D6E2]">•</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── 2. Grid Hard Skills & Certifications (Grille de 4) ── */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Les 3 Pôles d'expertise GEA (Cartes Blanches) */}
                    {expertises.map((exp, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-[32px] bg-white p-10 transition-all hover:shadow-lg"
                            style={{ border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 10px 30px -15px rgba(201,168,76,0.05)" }}
                        >
                            {/* Grand numéro background */}
                            <div
                                className="pointer-events-none absolute -right-6 -top-10 text-[160px] font-bold leading-none opacity-[0.03] transition-transform duration-700 group-hover:scale-110"
                                style={{ fontFamily: "var(--font-display)", color: "#C9A84C" }}
                            >
                                0{i + 1}
                            </div>

                            <h3 className="mb-8 pr-12 font-display text-2xl font-bold leading-tight text-[#1C1815]" style={{ fontFamily: "var(--font-display)" }}>
                                {exp.title}
                            </h3>

                            <div className="relative z-10 flex flex-col gap-6">
                                {exp.items.map((item, j) => (
                                    <div key={j} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-end gap-4">
                                            <span className="text-sm font-semibold leading-tight text-[#1C1815]">{item.name}</span>
                                            <span className="text-xs font-bold text-[#C9A84C]">{item.level}%</span>
                                        </div>
                                        {/* Progress Bar très fine & élégante */}
                                        <div className="h-1 w-full overflow-hidden rounded-full bg-[#F5EDD6]">
                                            <div
                                                className="h-full rounded-full bg-[#C9A84C] transition-all duration-1000 ease-out"
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* 4ème Carte : Certifications (Carte Noire stylée) */}
                    <div
                        className="group relative overflow-hidden rounded-[32px] bg-[#1C1815] p-10 text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C9A84C]/20"
                        style={{ boxShadow: "0 10px 30px -15px rgba(28,24,21,0.3)" }}
                    >
                        <div className="mb-8 flex items-center gap-4">
                            <span className="size-2 rounded-full bg-[#C9A84C]" />
                            <h3 className="font-display text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                                Certifications clés
                            </h3>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10">
                            {certifications.map((cert, i) => (
                                <div key={i} className="flex flex-col border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                    <div className="mb-1 flex items-start justify-between">
                                        <span className="font-bold text-[#F5EDD6] text-sm">{cert.name}</span>
                                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase font-bold text-[#E8D5A3]">
                                            {cert.date}
                                        </span>
                                    </div>
                                    <span className="text-xs text-white/50">{cert.desc}</span>
                                </div>
                            ))}
                        </div>

                        {/* Pattern fond animé */}
                        <div
                            className="absolute -bottom-20 -right-20 size-64 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                            style={{ background: "#C9A84C" }}
                        />
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
