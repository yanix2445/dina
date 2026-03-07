"use client";

type Experience = {
    title: string;
    company: string;
    period: string;
    type: "Pro" | "Personnel";
    description: string;
};

const experiences: Experience[] = [
    {
        type: "Pro",
        period: "Mars – Juin 2025",
        title: "Stage en Contrôle de Gestion",
        company: "Ruby Rose Beauty France",
        description:
            "• Mise en place d'une comptabilité analytique (centres de coûts, clés de répartition)\n• Calcul du coût de revient des formules cosmétiques (RCA)\n• Gestion de la facturation, saisies et rapprochements (Tiime)\n• Coordination avec l'usine en Turquie et le marketing au Brésil\n• Collecte et structuration des données techniques R&D\n• Veille sur les prix de transfert et relations intra-groupe\n• Collaboration interservices (formulation, finance, marketing)\n• Contribution à la structuration des process internes",
    },
    {
        type: "Personnel",
        period: "2024 – 2025",
        title: "Trésorière de Projet Universitaire",
        company: "Alumni GEA Meaux",
        description:
            "• Élaboration et suivi du budget prévisionnel du projet\n• Analyse des flux financiers et optimisation des ressources\n• Contrôle des encaissements et des dépenses\n• Reporting financier et gestion des outils Excel",
    },
    {
        type: "Pro",
        period: "Mars – Mai 2024",
        title: "Stage en Gestion d'Entreprise",
        company: "Coperton Holding",
        description:
            "• Mise à jour comptes comptables et lettrage (comptabilité)\n• Catégorisation des entrées et sorties financières (logiciel Agicap)\n• Appels sortants fournisseurs (mise à jour information sur l'entreprise)\n• Classement divers documents (facture, devis)\n• Mise à jour des bases de données",
    },
    {
        type: "Personnel",
        period: "Depuis 2019",
        title: "Bénévole",
        company: "Association SFTS",
        description:
            "• Aide à l'organisation de soirées caritatives\n• Assistance au trésorier de l'association",
    },
];

export function ParcourSection() {
    return (
        <section id="parcours" className="scroll-mt-24 py-32" style={{ background: "#FEFCF8" }}>
            <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col items-center">

                {/* En-tête + Légende 2 mondes */}
                <div className="mb-20 flex w-full flex-col items-center text-center">
                    <h2
                        className="mb-8 font-display text-4xl font-bold text-[#1C1815] lg:text-5xl"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Expériences
                    </h2>

                    <p className="mb-6 max-w-md text-[#6B6058] text-sm leading-relaxed">
                        Mon parcours se construit à la croisée de deux mondes : le <strong className="text-[#9E7B30]">professionnel</strong> et mes engagements <strong className="text-[#A0405E]">personnels</strong>.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-3">
                            <div
                                className="size-5 bg-[#C9A84C]"
                                style={{ borderRadius: "16px 16px 6px 16px" }}
                            />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7B30]">
                                Monde Pro
                            </span>
                        </div>
                        <div className="h-4 w-px bg-[#E8D5A3]" />
                        <div className="flex items-center gap-3">
                            <div
                                className="size-5 bg-[#E8A4B8]"
                                style={{ borderRadius: "16px 16px 16px 6px" }}
                            />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A0405E]">
                                Monde Perso
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── Timeline Organique S-Curve ── */}
                <div className="flex w-full flex-col items-center relative">
                    {experiences.map((exp, i) => {
                        const isEven = i % 2 === 0;
                        const isPro = exp.type === "Pro";

                        const color = isPro ? "#C9A84C" : "#E8A4B8";
                        const mutedBg = isPro ? "#F5EDD6" : "#FBF0F5";
                        const textColor = isPro ? "#9E7B30" : "#A0405E";

                        const nextExp = experiences[i + 1];
                        const nextColor = nextExp?.type === "Pro" ? "#C9A84C" : "#E8A4B8";

                        return (
                            <div key={i} className="flex w-full flex-col items-center">
                                {/* ── Bulle Expérience ── */}
                                <div
                                    className={`relative w-[90%] md:w-max md:max-w-full ${isEven ? 'md:self-start' : 'md:self-end'}`}
                                >
                                    {/* Carte asymétrique organique sans halo lumineux */}
                                    <div
                                        className="relative bg-white p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
                                        style={{
                                            border: `1px solid ${isPro ? "#E8D5A3" : "#F5D6E2"}`,
                                            boxShadow: "0 4px 20px -10px rgba(0,0,0,0.05)",
                                            borderRadius: isEven ? "32px 32px 32px 8px" : "32px 32px 8px 32px",
                                        }}
                                    >
                                        <div className="mb-4 flex items-start justify-between gap-4">
                                            <span
                                                className="inline-block rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest"
                                                style={{ background: mutedBg, color: textColor }}
                                            >
                                                {exp.type}
                                            </span>
                                        </div>

                                        <p
                                            className="mb-1.5 font-display text-xl tracking-tight"
                                            style={{ fontFamily: "var(--font-display)", color: color }}
                                        >
                                            {exp.period}
                                        </p>

                                        <h3 className="mb-1 font-display text-lg font-bold text-[#1C1815]" style={{ fontFamily: "var(--font-display)" }}>
                                            {exp.title}
                                        </h3>

                                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-[#9A9088]">
                                            {exp.company}
                                        </p>

                                        <p className="text-sm leading-relaxed text-[#6B6058] whitespace-pre-line">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* ── Connecteur Organique S-Curve ── */}
                                {
                                    i < experiences.length - 1 && (
                                        <>
                                            {/* Desktop Connector */}
                                            <div className="hidden md:block w-[55%] h-20 my-2 relative self-center">
                                                <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                    <defs>
                                                        <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor={color} />
                                                            <stop offset="100%" stopColor={nextColor} />
                                                        </linearGradient>
                                                    </defs>
                                                    <path
                                                        d={
                                                            isEven
                                                                ? "M 0 0 C 0 50, 100 50, 100 100"
                                                                : "M 100 0 C 100 50, 0 50, 0 100"
                                                        }
                                                        stroke={`url(#grad-${i})`}
                                                        strokeWidth="2.5"
                                                        fill="none"
                                                        strokeDasharray="5 5"
                                                        vectorEffect="non-scaling-stroke"
                                                    />
                                                    <circle cx={isEven ? "0" : "100"} cy="0" r="4" fill={color} />
                                                    <circle cx={isEven ? "100" : "0"} cy="100" r="4" fill={nextColor} />
                                                </svg>
                                            </div>

                                            {/* Mobile Connector */}
                                            <div className="md:hidden w-full h-12 my-2 flex justify-center">
                                                <svg className="h-full w-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                    <defs>
                                                        <linearGradient id={`grad-mob-${i}`} x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor={color} />
                                                            <stop offset="100%" stopColor={nextColor} />
                                                        </linearGradient>
                                                    </defs>
                                                    <path
                                                        d={
                                                            isEven
                                                                ? "M 50 0 C 100 33, 0 66, 50 100"
                                                                : "M 50 0 C 0 33, 100 66, 50 100"
                                                        }
                                                        stroke={`url(#grad-mob-${i})`}
                                                        strokeWidth="2.5"
                                                        fill="none"
                                                        strokeDasharray="5 5"
                                                        vectorEffect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}
