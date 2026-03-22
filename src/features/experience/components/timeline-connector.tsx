/**
 * Composant dessinant la ligne de connexion entre deux expériences de la timeline.
 * Il s'adapte automatiquement (bureau/mobile) et gère le dégradé de couleur.
 */
export function TimelineConnector({ 
    index, 
    color, 
    nextColor, 
    isEven 
}: { 
    index: number; 
    color: string; 
    nextColor: string; 
    isEven: boolean 
}) {
    return (
        <>
            {/* --- Version Bureau (Desktop) --- */}
            {/* Affiche une ligne ondulée asymétrique (largeur 55%) */}
            <div className="hidden md:block w-[55%] h-20 my-2 relative self-center">
                <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        {/* Dégradé vertical reliant la couleur de l'expérience actuelle à la suivante */}
                        <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} />
                            <stop offset="100%" stopColor={nextColor} />
                        </linearGradient>
                    </defs>
                    
                    {/* Tracé de la ligne principale (Courbe de Bézier) */}
                    <path
                        d={
                            isEven
                                ? "M 0 0 C 0 50, 100 50, 100 100" // Courbe de gauche vers la droite
                                : "M 100 0 C 100 50, 0 50, 0 100" // Courbe de droite vers la gauche
                        }
                        stroke={`url(#grad-${index})`}
                        strokeWidth="2.5"
                        fill="none"
                        strokeDasharray="5 5" // Effet de pointillés
                        vectorEffect="non-scaling-stroke" // L'épaisseur (stroke) reste fixe même si le SVG s'étire
                    />
                    
                    {/* Petits points aux extrémités pour connecter proprement les blocs */}
                    <circle cx={isEven ? "0" : "100"} cy="0" r="4" fill={color} />
                    <circle cx={isEven ? "100" : "0"} cy="100" r="4" fill={nextColor} />
                </svg>
            </div>

            {/* --- Version Mobile --- */}
            {/* Affiche une petite ligne d'ondulation verticale centrée */}
            <div className="md:hidden w-full h-12 my-2 flex justify-center">
                <svg className="h-full w-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        {/* Dégradé spécifique pour mobile */}
                        <linearGradient id={`grad-mob-${index}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} />
                            <stop offset="100%" stopColor={nextColor} />
                        </linearGradient>
                    </defs>
                    
                    {/* Tracé de la ligne mobile (ondulation plus serrée) */}
                    <path
                        d={
                            isEven
                                ? "M 50 0 C 100 33, 0 66, 50 100" // Ondule légèrement vers la droite
                                : "M 50 0 C 0 33, 100 66, 50 100" // Ondule légèrement vers la gauche
                        }
                        stroke={`url(#grad-mob-${index})`}
                        strokeWidth="2.5"
                        fill="none"
                        strokeDasharray="5 5"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>
        </>
    );
}
