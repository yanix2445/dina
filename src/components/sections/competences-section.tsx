"use client";

type HardSkill = { name: string; level: number };
type SoftSkill = { name: string; detail: string };

const hardSkills: HardSkill[] = [
    { name: "Comptabilité Générale", level: 85 },
    { name: "Analyse Financière", level: 75 },
    { name: "Excel & Outils bureautiques", level: 92 },
    { name: "Gestion de Projet", level: 78 },
    { name: "Fiscalité", level: 68 },
    { name: "Droit des Affaires", level: 65 },
];

const softSkills: SoftSkill[] = [
    { name: "Rigueur", detail: "Souci du détail, précision" },
    { name: "Organisation", detail: "Planification, priorisation" },
    { name: "Communication", detail: "Écrite et orale" },
    { name: "Travail en équipe", detail: "Collaboration, entraide" },
    { name: "Adaptabilité", detail: "Flexibilité face aux imprévus" },
    { name: "Curiosité", detail: "Apprentissage continu" },
];

export function CompetencesSection() {
    return (
        <section
            id="competences"
            className="scroll-mt-24 py-32"
            style={{ background: "#FAFAF9" }}
        >
            <div className="mx-auto max-w-6xl px-8">
                {/* En-tête */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#C9A84C]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
                            Compétences
                        </span>
                        <span className="h-px w-8 bg-[#C9A84C]" />
                    </div>
                    <h2
                        className="font-display text-4xl font-bold text-neutral-900 lg:text-5xl"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Savoir-faire & savoir-être
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* ── Hard Skills ── fond blanc, accents dorés ── */}
                    <div className="rounded-2xl border border-[#E8D5A3]/60 bg-white p-8 shadow-sm">
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-6 w-1 rounded-full bg-[#C9A84C]" />
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#9E7B30]">
                                Hard Skills
                            </h3>
                        </div>
                        <div className="space-y-6">
                            {hardSkills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-neutral-700">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs font-semibold text-[#C9A84C]">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    {/* Barre or solide — pas de dégradé */}
                                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F5EDD6]">
                                        <div
                                            className="h-full rounded-full bg-[#C9A84C] transition-all duration-700"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Soft Skills ── fond rose, accents roses ── */}
                    <div className="rounded-2xl border border-[#F5D6E2] bg-[#FBF0F5] p-8">
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-6 w-1 rounded-full bg-[#E8A4B8]" />
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#C47090]">
                                Soft Skills
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {softSkills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="rounded-xl border border-[#F5D6E2] bg-white/70 p-4 transition-all hover:bg-white hover:border-[#E8A4B8] hover:shadow-sm"
                                >
                                    <div className="mb-1 flex items-center gap-2">
                                        <span className="size-1.5 rounded-full bg-[#E8A4B8]" />
                                        <p className="text-sm font-semibold text-neutral-800">
                                            {skill.name}
                                        </p>
                                    </div>
                                    <p className="pl-3.5 text-xs text-neutral-400">{skill.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
