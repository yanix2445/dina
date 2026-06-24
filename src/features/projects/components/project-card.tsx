import { Project } from "../types/projects.types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

/**
 * Composant d'affichage d'un projet utilisant les composants Shadcn UI.
 * Intègre des animations interactives (hover) et un design épuré.
 */
export function ProjectCard({ project }: { project: Project }) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-[360px] w-full focus:outline-none"
        >
            <Card className="flex h-full flex-col overflow-hidden rounded-[24px] bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#C9A84C]/15 ring-0 relative z-10">
                <CardHeader className="flex flex-col items-start gap-0 p-8 pb-0">
                    {/* Icône */}
                    <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#F5EDD6] text-[#C9A84C] transition-transform duration-300 group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </div>

                    {/* Titre avec line-clamp */}
                    <CardTitle className="mb-2 font-display text-lg font-bold leading-snug text-[#1C1815] line-clamp-2" style={{ fontFamily: "var(--font-display)" }}>
                        {project.title}
                    </CardTitle>
                    
                    <CardDescription className="text-xs font-semibold uppercase tracking-wider text-[#C47090] line-clamp-1">
                        {project.context}
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-8 py-4">
                    <p className="text-sm text-[#6B6058] line-clamp-1">
                        {project.type}
                    </p>
                </CardContent>

                <CardFooter className="mt-auto flex items-center justify-between border-t border-black/5 p-8 pt-4 rounded-none">
                    <span className="text-xs font-bold text-[#9A9088]">{project.date}</span>
                    
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A84C] transition-opacity group-hover:opacity-70">
                        Consulter
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </CardFooter>
            </Card>
        </a>
    );
}
