import { expertises, certifications, softSkills } from "@/features/skills/data/skills.data";
import { ExpertiseCard } from "@/features/skills/components/expertise-card";
import { CertificationsCard } from "@/features/skills/components/certifications-card";
import { SoftSkillsMarquee } from "@/features/skills/components/soft-skills-marquee";

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
                        Des compétences transversales acquises au fil de la formation pour intervenir concrètement sur la tenue comptable, l&apos;aide à la décision financière et l&apos;organisation de l&apos;entreprise.
                    </p>
                </div>

                {/* ── 1. Marquee Soft Skills (Infini) ── */}
                <SoftSkillsMarquee softSkills={softSkills} />

                {/* ── 2. Grid Hard Skills & Certifications (Grille de 4) ── */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Les 3 Pôles d'expertise GEA (Cartes Blanches) */}
                    {expertises.map((exp, i) => (
                        <ExpertiseCard key={i} exp={exp} index={i} />
                    ))}

                    {/* 4ème Carte : Certifications (Carte Noire stylée) */}
                    <CertificationsCard certifications={certifications} />

                </div>
            </div>
        </section>
    );
}
