import { notFound } from "next/navigation";
import { experiences } from "@/features/experience/data/experience.data";
import { ExperiencePageContent } from "@/features/experience/components/experience-page-content";
import type { Metadata } from "next";

type Params = { slug: string };

/**
 * Génère les routes statiques pour chaque expérience à partir des slugs.
 */
export function generateStaticParams(): Params[] {
    return experiences.map((exp) => ({ slug: exp.slug }));
}

/**
 * Génère les métadonnées SEO dynamiques pour chaque page d'expérience.
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { slug } = await params;
    const exp = experiences.find((e) => e.slug === slug);
    if (!exp) return {};

    return {
        title: `${exp.title} — ${exp.company}`,
        description: `Découvrez mon expérience en tant que ${exp.title} chez ${exp.company}. ${exp.period}.`,
    };
}

/**
 * Page dédiée affichant le détail complet d'une expérience.
 */
export default async function ExperiencePage({
    params,
}: {
    params: Promise<Params>;
}) {
    const { slug } = await params;
    const exp = experiences.find((e) => e.slug === slug);

    if (!exp) {
        notFound();
    }

    return <ExperiencePageContent experience={exp} />;
}
