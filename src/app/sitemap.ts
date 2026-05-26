import type { MetadataRoute } from "next";
import { experiences } from "@/features/experience/data/experience.data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dina-riani.fr";

    const experiencePages: MetadataRoute.Sitemap = experiences
        .filter((exp) => exp.sections && exp.sections.length > 0)
        .map((exp) => ({
            url: `${baseUrl}/experience/${exp.slug}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...experiencePages,
    ];
}
