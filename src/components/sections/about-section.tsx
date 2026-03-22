import Image from "next/image";
import { stats } from "@/features/about/data/about.data";

export function AboutSection() {
    return (
        <section id="about" className="scroll-mt-24 bg-white py-32">
            <div className="mx-auto max-w-6xl px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Colonne gauche — Visuel */}
                    <div className="relative">
                        {/* Cadre décoratif */}
                        <div className="relative h-[480px]">
                            {/* Layer 1 — Carré or, décalé derrière */}
                            <div className="absolute top-6 left-6 h-full w-full rounded-2xl bg-[#F5EDD6]" />

                            {/* Layer 2 — Carré rose, plein, visible comme cadre */}
                            <div className="absolute inset-0 rounded-2xl bg-[#FBF0F5]" />

                            {/* Layer 3 — Photo, légèrement inset, rose visible autour */}
                            <div className="absolute inset-4 rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src="/portrait-dina.png"
                                    alt="Dina RIANI — étudiante en BUT GEA, travaillant à Paris"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Initiales DR en watermark subtil */}
                                <div className="absolute bottom-0 right-0 p-3" aria-hidden="true">
                                    <span
                                        className="select-none text-6xl font-bold leading-none text-white/20"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        DR
                                    </span>
                                </div>
                            </div>
                            {/* Badge flottant */}
                            <div className="absolute -bottom-5 -right-5 rounded-xl border border-[#C9A84C]/20 bg-white px-5 py-3 shadow-lg">
                                <p className="text-xs font-medium uppercase tracking-wider text-[#C9A84C]">
                                    Disponible
                                </p>
                                <p className="text-sm font-semibold text-neutral-800">
                                    Dès septembre 2026
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Colonne droite — Texte */}
                    <div className="flex flex-col gap-8">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#C9A84C]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
                                À propos
                            </span>
                        </div>

                        <h2
                            className="font-display text-4xl font-bold leading-tight text-neutral-900 lg:text-5xl"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Une approche rigoureuse de la gestion
                        </h2>

                        <div className="space-y-4 text-base leading-relaxed text-neutral-500">
                            <p>
                                Bientôt diplômée d'un BUT GEA, je me suis formée aux disciplines
                                fondamentales de la gestion d'entreprise : comptabilité, analyse
                                financière, droit des affaires et contrôle de gestion.
                            </p>
                            <p>
                                Mon approche est à la fois analytique et humaine. Je crois que
                                la rigueur technique et la communication claire sont les deux
                                piliers d'une gestion efficace.
                            </p>
                        </div>

                        {/* Séparateur */}
                        <div className="h-px w-full bg-gradient-to-r from-[#C9A84C]/30 via-[#E8A4B8]/30 to-transparent" />

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <p
                                        className="font-display text-3xl font-bold text-[#C9A84C]"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        {s.value}
                                    </p>
                                    <p className="mt-1 text-xs text-neutral-500">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
