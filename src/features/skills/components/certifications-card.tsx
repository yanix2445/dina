import { Certification } from "../types/skills.types";

/**
 * Composant encart (Card) affichant la liste des certifications.
 * Utilise un thème sombre contrasté avec des animations lumineuses.
 */
export function CertificationsCard({ certifications }: { certifications: Certification[] }) {
    // Conteneur de niveau supérieur : fond noir profond (#1C1815),
    // élévation au survol avec une ombre teintée dorée (#C9A84C).
    return (
        <div
            className="group relative overflow-hidden rounded-[32px] bg-[#1C1815] p-10 text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C9A84C]/20"
            style={{ boxShadow: "0 10px 30px -15px rgba(28,24,21,0.3)" }}
        >
            {/* Titre de la carte avec une petite pastille dorée */}
            <div className="mb-8 flex items-center gap-4">
                <span className="size-2 rounded-full bg-[#C9A84C]" />
                <h3 className="font-display text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Certifications clés
                </h3>
            </div>

            {/* Liste des certifications superposée au-dessus de l'effet lumineux (z-10) */}
            <div className="flex flex-col gap-4 relative z-10">
                {certifications.map((cert, i) => (
                    // Chaque certification est séparée par une fine ligne blanche (border-b)
                    // L'opacité (white/5) rend la ligne très subtile.
                    <div key={i} className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0 group/cert">
                        
                        {/* En-tête de la certification (Titre + Date + Lien) */}
                        <div className="mb-1 flex items-start justify-between">
                            <div className="flex flex-col gap-0.5">
                                <span className="font-bold text-[#F5EDD6] text-sm">{cert.name}</span>
                                <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">{cert.date}</span>
                            </div>
                            
                            {/* Bouton "Consulter" conditionnel (si un URL href est fourni) */}
                            {cert.href && (
                                <a
                                    href={cert.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold text-[#C9A84C] transition-all hover:bg-[#C9A84C] hover:text-[#1C1815]"
                                >
                                    Consulter
                                    {/* Icône "Lien externe" cliquable */}
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                        
                        {/* Description courte de la certification */}
                        <span className="text-[11px] text-white/50 leading-relaxed pr-2">{cert.desc}</span>
                    </div>
                ))}
            </div>

            {/* 
                Pattern de fond animé : Spot lumineux décoratif caché dans le coin inférieur droit.
                Devient légèrement plus visible lorsque l'utilisateur survole la carte globale (group-hover:opacity-20).
            */}
            <div
                className="absolute -bottom-20 -right-20 size-64 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: "#C9A84C" }}
            />
        </div>
    );
}
