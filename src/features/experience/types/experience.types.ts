export type RecommendationLetter = {
    label: string;
    href: string;
};

/** Section de contenu riche pour les pages dédiées */
export type ExperienceSection = {
    title: string;
    content: string;
};

/** Résultat ou apprentissage clé */
export type ExperienceResult = {
    title: string;
    content: string;
};

export type Experience = {
    slug: string;
    title: string;
    company: string;
    period: string;
    type: "Pro" | "Personnel";
    description: string;
    recommendationLetters?: RecommendationLetter[];

    // ── Champs enrichis (optionnels) pour les pages dédiées ──
    /** Titre du projet principal (affiché en hero) */
    projectTitle?: string;
    /** Secteur d'activité */
    sector?: string;
    /** Outils maîtrisés */
    tools?: string[];
    /** Mots-clés / tags */
    keywords?: string[];
    /** Sections narratives (Contexte, Mission, Défis…) */
    sections?: ExperienceSection[];
    /** Résultats et apprentissages */
    results?: ExperienceResult[];
};
