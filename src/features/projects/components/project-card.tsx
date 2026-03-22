import { Project } from "../types/projects.types";

/**
 * Composant d'affichage d'un projet sous forme de carte (Card).
 * Intègre des animations interactives (hover) et un design épuré.
 */
export function ProjectCard({ project }: { project: Project }) {
    // Conteneur principal de la carte : bordures douces, fond gris très clair, effet d'élévation au survol
    return (
        <div
            className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] bg-[#FAFAF9] p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
            style={{ border: "1px solid rgba(28,24,21,0.05)" }}
        >
            {/* Zone du haut : Icône colorée et structure de présentation */}
            <div>
                {/* 
                    L'icône : Bulle ronde dorée qui grossit au survol de la carte (group-hover). 
                    Le SVG représente un document / document de projet.
                 */}
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#F5EDD6] text-[#C9A84C] transition-transform group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </div>

                {/* Titre principal du projet (police serif personnalisée) */}
                <h3 className="mb-2 font-display text-lg font-bold leading-snug text-[#1C1815]" style={{ fontFamily: "var(--font-display)" }}>
                    {project.title}
                </h3>
                
                {/* Contexte du projet (IUT, Stage, etc.) - Texte rose/muted uppercase */}
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#C47090]">
                    {project.context}
                </p>
                
                {/* Type de rendu / document fourni (ex: SAE, Rapport de contrôle) */}
                <p className="text-sm text-[#6B6058]">
                    {project.type}
                </p>
            </div>

            {/* Zone du bas : Date (fixée) et Bouton "Consulter" */}
            <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-4">
                {/* Date / Année scolaire */}
                <span className="text-xs font-bold text-[#9A9088]">{project.date}</span>
                
                {/* Lien PDF ouvrant le document projet. Couleur dorée principale */}
                <a
                    href={project.link}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A84C] transition-opacity hover:opacity-70"
                >
                    Consulter
                    {/* Flèche directionnelle d'accompagnement */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
