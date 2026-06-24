"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "@/features/projects/data/projects.data";
import { ProjectCard } from "@/features/projects/components/project-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 7000, stopOnInteraction: true })
    );

    return (
        <section id="projets" className="relative scroll-mt-24 bg-[#FEFCF8] py-32 overflow-hidden">
            {/* Décorations d'arrière-plan (Glow dynamique) */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[radial-gradient(circle,#E8A4B8_0%,transparent_60%)] opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,#C9A84C_0%,transparent_60%)] opacity-10 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    {/* En-tête avec boutons de navigation intégrés */}
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl text-left">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#C9A84C]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                                    Réalisations
                                </span>
                            </div>
                            <h2
                                className="mb-4 font-display text-4xl font-bold text-[#1C1815] lg:text-5xl"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Travaux & Projets
                            </h2>
                            <p className="text-sm leading-relaxed text-[#6B6058]">
                                Découvrez une sélection de mes rapports de stage, études de cas académiques et projets concrets réalisés au cours de ma formation. Parcourez le carrousel pour explorer mes livrables.
                            </p>
                        </div>

                        {/* Flèches de navigation Shadcn */}
                        <div className="flex items-center gap-3 shrink-0 relative">
                            <CarouselPrevious className="static translate-x-0 translate-y-0 hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] border-[#C9A84C]/20 text-[#C9A84C] size-12" />
                            <CarouselNext className="static translate-x-0 translate-y-0 hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] border-[#C9A84C]/20 text-[#C9A84C] size-12" />
                        </div>
                    </div>

                    <CarouselContent className="-ml-6">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-6 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="h-full">
                                    <ProjectCard project={project} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
