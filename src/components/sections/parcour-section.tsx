import { experiences } from "@/features/experience/data/experience.data";
import { TimelineItem } from "@/features/experience/components/timeline-item";
import { TimelineConnector } from "@/features/experience/components/timeline-connector";

export function ParcourSection() {
    return (
        <section id="parcours" className="scroll-mt-24 py-32" style={{ background: "#FEFCF8" }}>
            <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col items-center">

                {/* En-tête + Légende 2 mondes */}
                <div className="mb-20 flex w-full flex-col items-center text-center">
                    <h2
                        className="mb-8 font-display text-4xl font-bold text-[#1C1815] lg:text-5xl"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Expériences
                    </h2>

                    <p className="mb-6 max-w-md text-[#6B6058] text-sm leading-relaxed">
                        Mon parcours se construit à la croisée de deux mondes : le <strong className="text-[#9E7B30]">professionnel</strong> et mes engagements <strong className="text-[#A0405E]">personnels</strong>.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-3">
                            <div
                                className="size-5 bg-[#C9A84C]"
                                style={{ borderRadius: "16px 16px 6px 16px" }}
                            />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7B30]">
                                Monde Pro
                            </span>
                        </div>
                        <div className="h-4 w-px bg-[#E8D5A3]" />
                        <div className="flex items-center gap-3">
                            <div
                                className="size-5 bg-[#E8A4B8]"
                                style={{ borderRadius: "16px 16px 16px 6px" }}
                            />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A0405E]">
                                Monde Perso
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── Timeline Organique S-Curve ── */}
                <div className="flex w-full flex-col items-center relative">
                    {experiences.map((exp, i) => {
                        const isEven = i % 2 === 0;
                        const isPro = exp.type === "Pro";
                        const color = isPro ? "#C9A84C" : "#E8A4B8";

                        const nextExp = experiences[i + 1];
                        const nextColor = nextExp?.type === "Pro" ? "#C9A84C" : "#E8A4B8";

                        return (
                            <div key={i} className="flex w-full flex-col items-center">
                                {/* ── Bulle Expérience ── */}
                                <TimelineItem exp={exp} isEven={isEven} />

                                {/* ── Connecteur Organique S-Curve ── */}
                                {i < experiences.length - 1 && (
                                    <TimelineConnector
                                        index={i}
                                        color={color}
                                        nextColor={nextColor}
                                        isEven={isEven}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
