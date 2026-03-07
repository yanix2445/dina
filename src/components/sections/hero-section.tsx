import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white"
        >
            {/* Blob or — haut droit */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-25 blur-[120px] select-none"
                style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
            />

            {/* Blob crème/sable — bas gauche (plus neutral qu'un blob rose) */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-40 blur-[130px] select-none"
                style={{ background: "radial-gradient(circle, #EDE5D8, transparent 70%)" }}
            />

            {/* Grille subtile dorée */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(#c9a84c1a 1px, transparent 1px), linear-gradient(90deg, #c9a84c1a 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Contenu */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center">
                {/* Eyebrow — or */}
                <div className="mb-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C9A84C]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                        Portfolio — BUT GEA
                    </span>
                    <span className="h-px w-8 bg-[#C9A84C]" />
                </div>

                {/* Nom */}
                <h1
                    className="font-display leading-none"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 12vw, 9rem)" }}
                >
                    {/* Prénom — or riche */}
                    <span className="block font-bold text-[#C9A84C]">Dina</span>
                    {/* Nom — charbon chaud, pas rose (trop de rose avant) */}
                    <span className="block font-bold" style={{ color: "#1C1815" }}>RIANI</span>
                </h1>

                {/* Filet or */}
                <div className="my-8 h-0.5 w-20 bg-[#C9A84C]" />

                {/* Accroche */}
                <p className="max-w-xl text-lg font-light leading-relaxed text-neutral-500">
                    Étudiante passionnée en Gestion des Entreprises et des Administrations,
                    à la recherche d'une opportunité pour mettre en valeur mes compétences.
                </p>

                {/* CTAs */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                    {/* Principal — or */}
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#C9A84C]/30 transition-all hover:bg-[#9E7B30] hover:shadow-xl hover:shadow-[#C9A84C]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 focus-visible:ring-offset-2"
                    >
                        <span>Me contacter</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    {/* Secondaire — taupe/neutre, pas rose */}
                    <a
                        href="#parcours"
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-600 transition-all hover:border-[#C9A84C]/40 hover:bg-[#F5EDD6] hover:text-[#9E7B30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/30 focus-visible:ring-offset-2"
                    >
                        Voir mon parcours
                    </a>
                </div>
            </div>

            {/* Indicateur scroll */}
            <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                        Scroll
                    </span>
                    <div className="relative h-10 w-5 rounded-full border border-neutral-300">
                        <div
                            className="absolute top-1.5 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-[#C9A84C]"
                            style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          60% { transform: translateX(-50%) translateY(18px); opacity: 0; }
          61% { transform: translateX(-50%) translateY(0); opacity: 0; }
        }
      `}</style>
        </section>
    );
}
