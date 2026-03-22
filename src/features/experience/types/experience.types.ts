export type RecommendationLetter = {
    label: string;
    href: string;
};

export type Experience = {
    title: string;
    company: string;
    period: string;
    type: "Pro" | "Personnel";
    description: string;
    recommendationLetters?: RecommendationLetter[];
};
