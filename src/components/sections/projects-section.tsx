import { projects } from "@/features/projects/data/projects.data";
import { ProjectCard } from "@/features/projects/components/project-card";

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
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
