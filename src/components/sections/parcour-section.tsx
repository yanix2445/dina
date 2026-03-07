/* Double-rail timeline : deux lignes verticales (or = Pro | rose = Personnel)
   Les expériences s'accrochent de chaque côté, interleaved chronologiquement.
   Chaque entrée est connectée à son rail par un bras horizontal. */

type Entry = {
    title: string;
    company: string;
    period: string;
    description: string;
    side: "left" | "right"; // left = Pro (or), right = Personnel (rose)
};

/* Ordre chronologique — interleaving naturel */
const entries: Entry[] = [
    {
        side: "right",
        title: "Bénévole Événementiel",
        company: "Association locale",
        period: "2023 – 2024",
        description:
            "Coordination logistique d'événements caritatifs, gestion des inscriptions et liaison avec les partenaires.",
    },
    {
        side: "left",
        title: "Assistante Administrative",
        company: "Mairie locale",
        period: "Juin – Août 2024",
        description:
            "Accueil du public, gestion du courrier, archivage documentaire et outils bureautiques.",
    },
    {
        side: "right",
        title: "Trésorière — BDE GEA",
        company: "Association étudiante",
        period: "Sept. 2024 – Présent",
        description:
            "Gestion du budget associatif, suivi des dépenses et recettes, bilans en assemblée générale.",
    },
    {
        side: "left",
        title: "Stage en Comptabilité",
        company: "Cabinet comptable — XYZ",
        period: "Avr. – Juin 2025",
        description:
            "Saisie comptable, rapprochements bancaires et préparation des déclarations fiscales.",
    },
];

const GOLD = "#C9A84C";
const ROSE = "#C47090";
const GOLD_BG = "#F5EDD6";
const ROSE_BG = "#FBF0F5";
const GOLD_BORDER = "#E8D5A3";
const ROSE_BORDER = "#F5D6E2";

export function ParcourSection() {
    return (
        <section id="parcours" className="scroll-mt-24 bg-white py-32">
            <div className="mx-auto max-w-4xl px-8">

                {/* En-tête */}
                <div className="mb-20 text-center">
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#C9A84C]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                            Parcours
                        </span>
                        <span className="h-px w-8 bg-[#C9A84C]" />
                    </div>
                    <h2
                        className="font-display text-5xl font-bold text-[#1C1815]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Expériences
                    </h2>

                    {/* Légende des deux rails */}
                    <div className="mt-8 inline-flex items-center gap-8 rounded-full border border-neutral-100 bg-[#FAFAF9] px-6 py-3">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#C9A84C]" />
                            <span className="text-xs font-medium text-[#6B6058]">Professionnel</span>
                        </div>
                        <div className="h-4 w-px bg-neutral-200" />
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#E8A4B8]" />
                            <span className="text-xs font-medium text-[#6B6058]">Personnel</span>
                        </div>
                    </div>
                </div>

                {/* ── Double rail + entrées ── */}
                <div className="relative">

                    {/* Rail gauche — or */}
                    <div
                        className="absolute top-0 bottom-0 hidden w-0.5 md:block"
                        style={{ left: "calc(50% - 10px)", background: `linear-gradient(to bottom, transparent, ${GOLD} 5%, ${GOLD} 95%, transparent)` }}
                    />
                    {/* Rail droit — rose */}
                    <div
                        className="absolute top-0 bottom-0 hidden w-0.5 md:block"
                        style={{ left: "calc(50% + 10px)", background: `linear-gradient(to bottom, transparent, #E8A4B8 5%, #E8A4B8 95%, transparent)` }}
                    />

                    {/* Entrées */}
                    <div className="space-y-10">
                        {entries.map((entry, i) => {
                            const isLeft = entry.side === "left";
                            const color = isLeft ? GOLD : ROSE;
                            const bg = isLeft ? GOLD_BG : ROSE_BG;
                            const borderColor = isLeft ? GOLD_BORDER : ROSE_BORDER;
                            const dotColor = isLeft ? GOLD : "#E8A4B8";

                            return (
                                <div
                                    key={i}
                                    className={`relative flex items-start gap-4 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"
                                        } flex-col`}
                                >
                                    {/* Carte */}
                                    <div
                                        className={`group relative z-10 w-full rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:w-[calc(50%-32px)]`}
                                        style={{ background: "white", borderColor }}
                                    >
                                        {/* Bande colorée haute */}
                                        <div
                                            className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 group-hover:left-4 group-hover:right-4"
                                            style={{ background: color }}
                                        />

                                        {/* Période */}
                                        <p
                                            className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em]"
                                            style={{ color }}
                                        >
                                            {entry.period}
                                        </p>

                                        {/* Titre */}
                                        <h3
                                            className="font-display mb-1 text-lg font-bold leading-snug text-[#1C1815]"
                                            style={{ fontFamily: "var(--font-display)" }}
                                        >
                                            {entry.title}
                                        </h3>
                                        <p className="mb-4 text-xs text-[#9A9088]">{entry.company}</p>
                                        <p className="text-sm leading-relaxed text-[#6B6058]">
                                            {entry.description}
                                        </p>
                                    </div>

                                    {/* Dot sur le rail */}
                                    <div
                                        className="hidden shrink-0 md:flex items-center justify-center"
                                        style={{ width: "64px" }}
                                    >
                                        <div
                                            className="size-4 rounded-full border-2 border-white shadow-md ring-2"
                                            style={{
                                                background: dotColor,
                                                boxShadow: `0 0 0 3px white, 0 0 0 5px ${dotColor}40`,
                                                marginLeft: isLeft ? "8px" : "-8px",
                                            }}
                                        />
                                    </div>

                                    {/* Espace vide côté opposé (desktop) */}
                                    <div className="hidden md:block md:w-[calc(50%-32px)]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
