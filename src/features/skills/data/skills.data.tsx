import { Expertise, Certification } from "../types/skills.types";

const expertiseIcons = {
    compta: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12" y2="18" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="16" y2="14" />
        </svg>
    ),
    finance: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    ),
    management: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )
};

export const expertises: Expertise[] = [
    {
        title: "Comptabilité & Fiscalité",
        icon: expertiseIcons.compta,
        items: [
            "Comptabilité analytique & lettrage",
            "Logiciels (ADCI, Agicap, Tiime, RCA, Sage)",
            "Saisie des opérations courantes",
            "Rapprochements bancaires",
            "Gestion de la facturation & Relances",
            "Clôtures mensuelles",
            "Comptabilité clients & fournisseurs",
            "Révision des budgétaire",
            "Archivage & Dématérialisation"
        ],
    },
    {
        title: "Analyse & Pilotage Financier",
        icon: expertiseIcons.finance,
        items: [
            "Contrôle de gestion & Reporting",
            "Calcul des coûts & Prix de revient",
            "Analyse des écarts & Rentabilité (ROI)",
            "Budgets & Trésorerie (BFR, Flux, SIG)",
            "Indicateurs de performance (KPI)",
            "Analyse financière & Ratios stratégiques",
            "Analyses marge brute & nette",
            "Suivi des entrées et sorties monétaire",
            "Optimisation de la performance",
        ],
    },
    {
        title: "Droit & Management",
        icon: expertiseIcons.management,
        items: [
            "Excel (TCD, Formules, VBA)",
            "Droit du travail (Contrats, Ruptures)",
            "Droit des sociétés & Formes juridiques",
            "Droit du numérique & Données (RGPD)",
            "Droit des institutions publiques",
            "Organisation & Administration RH",
            "Gestion de projet",
            "Veille juridique & Sociale",
            "Rédaction de rapports & Synthèses",
            "Outils collaboratifs (Teams, Slack, Trello)",
            "Analyse des structures juridiques"
        ],
    },
];

export const certifications: Certification[] = [
    { name: "TOEIC", date: "Obtenu", desc: "Anglais professionnel (Score : 700)", href: "/documents/toeic.pdf" },
    { name: "Score IAE Message", date: "Validé", desc: "Aptitudes pour les études de gestion (Score : 198)", href: "/documents/score-iae-message.pdf" },
    { name: "Avis Poursuite d'Études", date: "Excellent", desc: "Avis de l'IUT pour la poursuite d'études", href: "/documents/avis-poursuite-etudes.pdf" },
    { name: "Certification Pix", date: "Validé", desc: "Outils numériques (Traitements de données)" },
    { name: "CLUE-IUT-BUT GEA", date: "Certification", desc: "Compétences Langagières Universitaires", href: "/documents/clue-iut-but-gea.pdf" },
];

export const softSkills: string[] = [
    "Rigueur & Fiabilité", // Compta
    "Esprit d'Analyse", // Finance
    "Travail en Équipe", // Management
    "Sens de l'Organisation", // Compta
    "Esprit de Synthèse", // Finance
    "Communication Professionnelle", // Management
    "Force de Proposition", // Finance/Management
];
