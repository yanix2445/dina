export function SoftSkillsMarquee({ softSkills }: { softSkills: string[] }) {
    // Conteneur principal du défilement (Marquee). Position relative pour caler les dégradés.
    return (
        <div className="relative mb-24 flex w-full flex-col">
            
            {/* Dégradé blanc/transparent à GAUCHE pour un effet d'apparition en douceur */}
            <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-linear-to-r from-[#FAFAF9] to-transparent pointer-events-none" />
            
            {/* Dégradé blanc/transparent à DROITE pour un effet de disparition en douceur */}
            <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-linear-to-l from-[#FAFAF9] to-transparent pointer-events-none" />

            {/* Zone de masquage : cache tout ce qui dépasse visuellement de l'écran */}
            <div className="flex w-full overflow-hidden">
                
                {/* 
                    Bande défilante : 
                    "w-max" pour ne pas couper le texte, 
                    "animate-marquee" pour lancer l'animation CSS définie plus bas.
                */}
                <div className="flex w-max animate-marquee items-center gap-8 py-4">
                    
                    {/* 
                        Astuce du Marquee infini : 
                        On duplique 3 fois la liste de compétences (softSkills) 
                        pour éviter un espace vide de "fin de liste" pendant le défilement.
                    */}
                    {[...softSkills, ...softSkills, ...softSkills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-8">
                            {/* Nom de la compétence (ex: "Créativité"). Typographie Serif, en rose. */}
                            <span className="font-display text-2xl font-light italic tracking-tight text-[#C47090]" style={{ fontFamily: "var(--font-display)" }}>
                                {skill}
                            </span>
                            
                            {/* Puce de séparation ronde entre chaque mot */}
                            <span className="text-xl text-[#F5D6E2]">•</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 
               Définition de l'animation CSS "marquee" directement injectée dans le composant.
               L'animation glisse le bloc de 0% à -33.33% de sa largeur globale.
               Comme le tableau est triplé (voir au-dessus), -33.33% correspond exactement
               à la largeur de la première liste originale. Le rebouclage est donc invisible.
            */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}
