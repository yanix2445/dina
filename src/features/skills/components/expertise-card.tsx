import { Expertise } from "../types/skills.types";

/**
 * Composant encart (Card) affichant un domaine d'expertise et ses compétences associées.
 * Design aéré sur fond blanc avec des effets de survol délicats (hover).
 */
export function ExpertiseCard({ exp, index }: { exp: Expertise; index: number }) {
    // Conteneur principal : fond blanc, bords arrondis importants (32px), et ombre dorée très douce au survol
    return (
        <div
            className="group relative overflow-hidden rounded-[32px] bg-white p-10 transition-all hover:shadow-xl hover:shadow-[#C9A84C]/5"
            style={{ border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 10px 30px -15px rgba(201,168,76,0.05)" }}
        >
            {/* En-tête de la carte : Icône, Titre principal et Numérotation */}
            <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Conteneur de l'icône : s'inverse (fond doré, icône blanche) au survol de la carte */}
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#F5EDD6] text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-white transition-colors">
                        {exp.icon}
                    </span>
                    
                    {/* Titre du domaine d'expertise (ex: Frontend, Backend) */}
                    <h3 className="font-display text-2xl font-bold leading-tight text-[#1C1815]" style={{ fontFamily: "var(--font-display)" }}>
                        {exp.title}
                    </h3>
                </div>
                
                {/* Numéro de la carte en filigrane discret à droite (ex: 01, 02). 
                    Devient légèrement plus visible au survol (opacity-20). */}
                <span className="text-[40px] font-bold text-[#C9A84C]/10 transition-opacity group-hover:opacity-20 select-none">
                    0{index + 1}
                </span>
            </div>

            {/* Liste des compétences sous forme de grille (1 colonne sur mobile, 2 colonnes sur tablette/desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 relative z-10">
                {exp.items.map((item, j) => (
                    // Ligne d'une compétence spécifique
                    <div
                        key={j}
                        className="flex items-start gap-3 group/item"
                    >
                        {/* Petite puce (carré tourné à 45° pour faire un losange). S'agrandit au survol de la ligne. */}
                        <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-[#C9A84C] transition-transform group-hover/item:scale-125" />
                        
                        {/* Nom de la compétence (ex: React, Node.js). Le texte fonce légèrement au survol de la carte globale. */}
                        <span className="text-sm font-medium text-[#6B6058] transition-colors group-hover:text-[#1C1815]">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
