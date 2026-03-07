

type Project = {
    title: string;
    context: string;
    type: string;
    date: string;
    link: string; // Placeholder pour le vrai fichier PDF
};

const projects: Project[] = [
    {
        title: "Rapport de Stage - Contrôle de Gestion",
        context: "Ruby Rose Beauty France",
        type: "Document d'analyse",
        date: "2025",
        link: "/rapport-stage-ruby-rose.pdf",
    },
    {
        title: "Analyse Financière & Diagnostic",
        context: "Projet Universitaire BUT GEA",
        type: "Étude de cas",
        date: "2024",
        link: "#",
    },
    {
        title: "Création et suivi de trésorerie",
        context: "Association Alumni GEA",
        type: "Tableaux de bord (Pilote Excel)",
        date: "2024",
        link: "#",
    },
    {
        title: "Rapport de Stage - Gestion d'Entreprise",
        context: "Coperton Holding",
        type: "Synthèse professionnelle",
        date: "2024",
        link: "#",
    },
];

export function ProjectsSection() {
    return (
        <section id="projets" className="scroll-mt-24 bg-white py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col items-center">
                {/* En-tête minimalist */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#C9A84C]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                            Réalisations
                        </span>
                        <span className="h-px w-8 bg-[#C9A84C]" />
                    </div>
                    <h2
                        className="mb-6 font-display text-4xl font-bold text-[#1C1815] lg:text-5xl"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Travaux & Projets
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-[#6B6058]">
                        Découvrez une sélection de mes rapports de stage, études de cas académiques et projets concrets réalisés au cours de ma formation.
                    </p>
                </div>

                {/* Grille des documents */}
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] bg-[#FAFAF9] p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
                            style={{ border: "1px solid rgba(28,24,21,0.05)" }}
                        >
                            <div>
                                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#F5EDD6] text-[#C9A84C] transition-transform group-hover:scale-110">
                                    {/* Icone Document minimalistic */}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10 9 9 9 8 9" />
                                    </svg>
                                </div>

                                <h3 className="mb-2 font-display text-lg font-bold leading-snug text-[#1C1815]" style={{ fontFamily: "var(--font-display)" }}>
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#C47090]">
                                    {project.context}
                                </p>
                                <p className="text-sm text-[#6B6058]">
                                    {project.type}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-4">
                                <span className="text-xs font-bold text-[#9A9088]">{project.date}</span>
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A84C] transition-opacity hover:opacity-70"
                                >
                                    Consulter
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
