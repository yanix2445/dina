import { Experience } from "../types/experience.types";

export const experiences: Experience[] = [
    {
        slug: "wiame-groupe-controle-de-gestion",
        type: "Pro",
        period: "Février – Juillet 2026",
        title: "Assistante Contrôle de Gestion (Stage)",
        company: "Wiame Groupe",
        description:
            "• Élaboration de procédures internes pour structurer les méthodes de travail\n• Création et pilotage de tableaux de bord pour le suivi de l\u2019activité\n• Consolidation de données financières et analyse mensuelle des résultats\n• Participation aux clôtures mensuelles et saisie comptable des provisions\n• Calcul des prix de revient et optimisation des processus existants\n• Analyse des écarts pour l\u2019aide à la décision de la direction\n• Contribution à la révision budgétaire et analyse des prévisions\n• Revue des immobilisations pour garantir la conformité du registre",

        recommendationLetters: [
            { label: "Rapport de Stage (PDF)", href: "/wiame/rapport-stage-dina-wiame.pdf" },
            { label: "Soutenance de Stage (PPTX)", href: "/wiame/presentation-rapport-stage-wiame.pptx" },
        ],

        // ── Contenu enrichi pour la page dédiée ──
        projectTitle: "Pilotage centralisé de la performance financière d'un groupe TP multi-sociétés",
        sector: "Travaux Publics (TP) (VRD, Enrobés, Terrassement)",
        tools: ["Sage (Comptabilité)", "ADCI (Analytique)", "Excel (TCD avancés)", "MyReport (Reporting)"],
        keywords: ["Contrôle de gestion", "Cut-off mensuel", "FNP / CCA", "Harmonisation PCG", "Pilotage budgétaire", "Aide à la décision"],
        sections: [
            {
                title: "Le Contexte : ETI intégrée face aux enjeux du secteur TP",
                content:
                    `Le Groupe Wiame est une Entreprise de Taille Intermédiaire (ETI) familiale et indépendante d'environ 400 salariés pour un chiffre d'affaires consolidé de 60 à 80 millions d'euros. Le groupe maîtrise toute sa chaîne de valeur à travers plusieurs entités distinctes :
• Wiame VRD (l'entité principale basée à Sept-Sorts, CA 45-55M€, construction de routes et réseaux, accueillant le siège et mon service financier).
• Probinord (usine spécialisée dans la fabrication de liants et d'enrobés coulés à froid basée à Méréville).
• Wiame AXE (signalisation routière et mobilier urbain basé à Vaux-le-Pénil).

Aujourd'hui, le secteur des Travaux Publics traverse une période de fortes turbulences. Sur le plan commercial, nous faisons face à une contraction des commandes, couplée à une violente crise inflationniste causée par les tensions géopolitiques mondiales. Concrètement, cela provoque une flambée de nos coûts d'exploitation : le prix du gasoil pour nos engins explose, tout comme le coût du bitume, dérivé du pétrole indispensable pour nos enrobés. En plus de ces défis, le marché français de la construction routière est historiquement très clivé. On y trouve d'un côté les « Majors » du CAC 40 (Colas, Eiffage) qui raflent les immenses infrastructures, et de l'autre, de plus petites structures régionales souvent très dépendantes de leurs fournisseurs.

Face à cela, le Groupe Wiame se positionne comme un véritable « outsider de taille critique ». Sa force de frappe repose sur une stratégie d'intégration verticale. Contrairement à ses concurrents locaux, le groupe ne dépend de personne : il produit ses propres matériaux (centrales d'enrobés de Wiame VRD et Probinord) et possède sa propre flotte d'engins, entretenue en interne dans un immense atelier mécanique de 3 700 m². Il se distingue aussi par l'innovation technique (enrobeur projeteur) et favorise l'économie circulaire (rabotage et recyclage de routes). C'est au cœur financier de cette structure très intégrée que j'ai évolué.`,
            },
            {
                title: "Mes Missions : Fiabilisation, Modélisation et Pilotage Budgétaire",
                content:
                    `C'est dans ce contexte très dynamique que j'ai pris mes fonctions au siège. Ma particularité a été d'occuper un poste centralisé d'une grande transversalité : je gérais simultanément les données financières de Wiame VRD, de Probinord et de Wiame AXE. Mes missions se sont articulées autour de quatre grands pôles, allant de la fiabilité comptable pure jusqu'à l'accompagnement stratégique :

1. Fiabilisation comptable et sécurisation du « Cut-off » (Sage) : Dans notre secteur, le coût des matériaux fluctue tellement qu'il est impératif d'avoir un résultat exact à chaque fin de mois. J'ai pris part, sur le logiciel Sage, aux travaux de clôture en gérant les provisions (FNP et CCA). Pour surmonter mes difficultés initiales face à la logique comptable, j'ai arrêté de penser "comptabilité" pour penser "chantier", en me connectant à la réalité physique : une tonne d'enrobés livrée mais non facturée, c'est cela, une vraie FNP.

2. Harmonisation des SI et traçabilité : J'ai mené un gros travail de fond en pilotant l'harmonisation du Plan de Comptes Général (PCG) pour nos trois sociétés, qui utilisaient jusqu'ici leurs propres codes historiques. J'ai aussi restructuré notre matrice d'extraction du Grand Livre sur Excel, en y intégrant une "piste d'audit" horodatée pour tracer et justifier chaque modification manuelle.

3. Modélisation analytique & Reporting (ADCI & MyReport) : Une fois ces données sécurisées, ma mission la plus stratégique a été de les traduire en outils d'aide à la décision. J'ai refondu l'architecture analytique de notre usine Probinord sur ADCI (suppression des « faux chantiers » au profit de codes analytiques clairs) et automatisé des tableaux de bord croisés dynamiques via Excel et MyReport.

4. Pilotage budgétaire & Posture de Conseil : La dimension managériale s'est révélée lors de la révision budgétaire de mi-exercice (mars). J'ai accompagné individuellement les responsables de services (RH, QSE, Atelier mécanique). Pour être légitime face à des cadres expérimentés ne parlant pas le "jargon comptable", je ne me suis pas positionnée en "contrôleur", mais en "partenaire" : j'ai conçu des tableaux très visuels avec codes couleurs et organisé des entretiens pédagogiques, créant notamment un fichier sur-mesure de prévision des heures d'engins pour l'atelier mécanique.`,
            },
            {
                title: "Focus Projet : Assainir la facturation interne du Petit Matériel (PM)",
                content:
                    `J'en arrive au cœur de mon expertise technique, à travers un projet majeur mené sur la facturation interne de notre Petit Matériel (PM : pilonneuses, carotteuses, étais, etc.) gérée dans l'ERP ADCI. La réservation d'un outil à l'atelier déclenche une facturation interne visant à imputer le coût sur le chantier et à générer un chiffre d'affaires analytique pour évaluer la rentabilité de l'atelier.

• Le Diagnostic : Lors de mes analyses, j'ai identifié une anomalie importante. L'ERP utilisait deux unités : un tarif journalier (sur la base de 8 heures) et un tarif horaire. Prenons l'exemple concret d'une carotteuse : son prix de location journalier était paramétré à 35 € (soit 4,37 €/h), mais le tarif horaire appliqué informatiquement était de 5 €. Cette rupture de proportionnalité, multipliée par des centaines de locations quotidiennes, faussait totalement nos coûts réels et rendait l'analyse de rentabilité de l'atelier impossible.

• La Solution Technique : J'ai extrait la totalité des tarifs de l'ERP vers Excel, en utilisant le "numéro de parc" comme clé primaire, et j'ai construit une matrice de contrôle. J'ai utilisé la fonction RECHERCHEV pour aligner sur une même ligne le prix de location et le prix de vente divisé par 8. J'ai intégré un test logique booléen : =(Prix de vente / 8 = Prix de location) pour isoler instantanément les anomalies (cellules affichant FAUX).

• Dialogue Terrain & Import en masse : Je savais qu'il était risqué de modifier aveuglément les tarifs depuis mon bureau. Je suis donc allée consulter les responsables de l'atelier PM. En discutant avec eux, j'ai appris une subtilité métier : certains équipements achetés définitivement pour des équipes spécifiques ne devaient avoir aucun tarif. Sans cet échange, j'aurais laissé l'ERP générer un chiffre d'affaires totalement fictif ! Après ce dialogue indispensable, j'ai formaté ma matrice Excel et j'ai procédé à un import en masse sécurisé dans notre ERP. Les conducteurs de travaux ont désormais la garantie d'une facturation juste.`,
            },
        ],
        results: [
            {
                title: "Bilan concret & Apprentissages",
                content:
                    "J'ai compris que la théorie universitaire trouve parfois ses limites face à la complexité du terrain. Le contrôle de gestion ne se fait pas uniquement derrière un écran : un bon outil financier n'a de véritable valeur que s'il est compris, accepté et utile aux équipes opérationnelles qui l'utilisent au quotidien.",
            },
            {
                title: "Évolution de ma Posture",
                content:
                    "En allant chercher l'information à la source et en dialoguant avec les parties prenantes, j'ai réussi à dépasser la posture d'exécutante de ma deuxième année pour adopter une véritable logique de conseil et d'amélioration continue. J'ai appris à être pédagogue et à me positionner en partenaire auprès de cadres expérimentés.",
            },
            {
                title: "Poursuite d'études & Embauche",
                content:
                    "L'aboutissement de ce stage confirme pleinement mon projet professionnel : j'intègre à la rentrée le Master Management, Contrôle de Gestion et Audit Organisationnel à l'IAE de Paris-Saclay. Concrétisation ultime, le Groupe Wiame m'a renouvelé sa confiance en m'embauchant en alternance avec pour mission de piloter le contrôle de gestion de leur vaste atelier mécanique de 3 700 m² !",
            },
        ],
    },
    {
        slug: "bde-iut-meaux-tresoriere",
        type: "Personnel",
        period: "2024 – 2026",
        title: "Trésorière du BDE",
        company: "BDE IUT de Meaux",
        description:
            "• Gestion de la trésorerie et pilotage du budget prévisionnel de l\u2019association\n• Contrôle rigoureux des encaissements et des dépenses courantes\n• Reporting financier régulier sur Excel pour assurer la transparence\n• Organisation logistique d\u2019événements et de la vie étudiante\n• Gestion des flux financiers liés aux projets associatifs",
    },
    {
        slug: "ruby-rose-beauty-controle-de-gestion",
        type: "Pro",
        period: "Mars – Juin 2025",
        title: "Assistante Contrôle de Gestion & Assistante de Direction (Stage)",
        company: "Ruby Rose Beauty France",
        description:
            "• Mise en place de la comptabilité analytique (centres de coûts et clés de répartition)\n• Calcul des coûts de revient (RCA) pour les produits et formules cosmétiques\n• Gestion complète de la facturation et rapprochements bancaires sur Tiime\n• Coordination internationale entre l’usine en Turquie et le marketing au Brésil\n• Structuration des données techniques en lien avec le pôle R&D\n• Suivi des prix de transfert et des relations financières entre les filiales\n• Interface transversale entre la formulation, la finance et le marketing\n• Amélioration des process internes pour optimiser l’organisation",
        recommendationLetters: [
            { label: "Lettre de Recommandation", href: "/ruby-rose/lettre-recommandation-rrbf.pdf" },
            { label: "Rapport de Stage (PDF)", href: "/ruby-rose/rapport-stage-dina-rrbf.pdf" },
            { label: "Soutenance de Stage (PPTX)", href: "/ruby-rose/presentation-rapport-stage-rrbf.pptx" },
        ],

        // ── Contenu enrichi pour la page dédiée ──
        projectTitle: "Mise en place du pilotage de la performance internationale",
        sector: "Industrie cosmétique internationale",
        tools: ["RCA (module ACR)", "Tiime Expert", "Tiime Invoice"],
        keywords: ["Comptabilité analytique", "Coûts de revient", "Flux intra-groupe", "Digitalisation"],
        sections: [
            {
                title: "Le Contexte : Le défi d’une structuration financière au cœur d’un flux triangulaire mondial",
                content:
                    `Ruby Rose Beauty France n’est pas qu’un simple laboratoire de cosmétiques ; c’est le cœur d'innovation et le point pivot financier d’un groupe de cosmétiques d'envergure internationale. Au cours de ce stage de 10 semaines, j’ai évolué au sein d’un écosystème d’une grande complexité opérationnelle, caractérisé par un flux triangulaire mondial : la filiale française conçoit et formule les produits cosmétiques haut de gamme en se basant sur les benchmarks et les exigences du marketing stratégique situé au Brésil (siège opérationnel), tandis que la production industrielle en série est assurée par l'usine de fabrication du groupe en Turquie.

Le défi stratégique était majeur : Ruby Rose Beauty France, alors en pleine phase d'hypercroissance, ne disposait d’aucun système de comptabilité analytique ni d'outils de suivi précis de sa performance financière. Les coûts opérationnels du laboratoire de R&D (salaires des chimistes, matières premières de formulation, amortissements des équipements de pointe) s’accumulaient sans être correctement alloués ou valorisés. Sans visibilité sur les coûts réels de formulation, l'entité française ne pouvait ni justifier ses prix de transfert auprès du groupe, ni valoriser sa création de propriété intellectuelle auprès de l'usine turque, s'exposant ainsi à d'importants risques de trésorerie et de conformité fiscale internationale (règles de l'OCDE sur les prix de transfert).`,
            },
            {
                title: "Ma Mission : D’une comptabilité générale brute à une ingénierie financière décisionnelle",
                content:
                    `Placée sous la responsabilité directe de la Directrice Générale, ma mission consistait à concevoir de toutes pièces et à déployer le système de pilotage financier de la filiale. J'ai structuré mon intervention autour de quatre piliers méthodologiques :

1. L'assainissement et la fiabilisation de la donnée financière (Tiime Expert)
Avant de modéliser le moindre coût, il fallait s'assurer de la pureté de la donnée comptable. J'ai audité et mis à jour l'intégralité de la comptabilité générale sur Tiime Expert. De la saisie rigoureuse des écritures courantes aux rapprochements bancaires complexes, en passant par le cadrage minutieux de la TVA et l'intégration des immobilisations matérielles (matériel de laboratoire de haute technologie), j'ai redressé la balance générale pour en faire un socle d'information 100 % fiable et inattaquable.

2. L'architecture de la comptabilité analytique sur-mesure (RCA - module ACR)
J'ai conçu et paramétré la structure analytique de l'entreprise sur le logiciel RCA. J'ai défini deux centres de profit et de coûts distincts : l'activité historique de « Formulation R&D » (génératrice d'actifs incorporels) et l'activité commerciale d'« Achat-Revente ». L'enjeu technique résidait dans l'établissement de clés de répartition des charges indirectes (loyers, électricité, frais généraux, amortissements des machines) basées sur des inducteurs physiques et temporels validés avec le pôle scientifique.

3. L'ingénierie du modèle de refacturation intra-groupe (« Cost + 5 % »)
Pour assurer l'autonomie financière et la rentabilité de la filiale française, j'ai modélisé et mis en œuvre un système mensuel de refacturation cumulatif vers l'usine de production en Turquie. Ce mécanisme de prix de transfert, basé sur une marge de « Cost + 5 % », permettait de récupérer l'intégralité des dépenses opérationnelles du laboratoire français (salaires, consommables, frais généraux) majorées d'un taux de marge conforme aux standards fiscaux internationaux, garantissant ainsi un flux de trésorerie constant et prévisible.

4. La sécurisation de la supply chain administrative et douanière
En parallèle, j'ai pris en main la gestion opérationnelle des flux de matières premières importées pour les essais. J'ai rédigé les factures d'exportation vers la Turquie et le Brésil, géré les formalités douanières hors Union Européenne et mis en place les attestations de franchise de TVA (article 275 du CGI) pour optimiser le besoin en fonds de roulement (BFR) en évitant le décaissement inutile de taxes sur les importations.`,
            },
            {
                title: "Les Défis Surmontés : Traduire la science en chiffres et naviguer dans la complexité fiscale",
                content:
                    `Ce projet d'envergure m'a confrontée à des défis de taille, tant techniques qu'humains :

• Le dialogue interdisciplinaire et la vulgarisation financière
Il a fallu combler le fossé culturel entre le langage de la science (les chimistes de R&D centrés sur les formules et les ingrédients), la vision commerciale (le marketing brésilien concentré sur les tendances de marché et les contraintes budgétaires extrêmes) et la rigueur comptable. J'ai dû faire preuve d'empathie et de pédagogie pour expliquer pourquoi chaque gramme de matière première ou chaque heure passée en laboratoire devait être tracé et comptabilisé afin d'obtenir un coût de revient fiable.

• La maîtrise accélérée d'outils professionnels spécialisés
N'ayant pas de formation préalable approfondie sur RCA (module ACR) ni sur l'écosystème Tiime Expert, j'ai dû monter en compétences de manière autonome et extrêmement rapide (en moins de deux semaines) pour être opérationnelle sur le paramétrage complexe des clés de répartition et des plans comptables analytiques.

• La conformité douanière et fiscale hors UE
Les échanges de matières premières et de formules de produits de beauté impliquaient des flux de marchandises et financiers complexes hors Union Européenne. Comprendre et appliquer correctement les règles de douanes, de TVA à l'exportation et les principes de pleine concurrence de l'OCDE sur les prix de transfert a exigé une rigueur intellectuelle absolue pour prémunir la filiale de tout risque de redressement fiscal.`,
            },
        ],
        results: [
            {
                title: "Résultat concret",
                content:
                    "J’ai livré à la Direction Générale un outil de pilotage analytique automatisé et auditable sous RCA. Désormais, chaque formule cosmétique créée possède son coût de revient précis et indiscutable. Ce tableau de bord permet à la DG de négocier et de justifier avec assurance les prix de transfert face au CFO du groupe et aux commissaires aux comptes.",
            },
            {
                title: "Compétence acquise",
                content:
                    "Ce stage a ancré en moi la conviction que le contrôle de gestion stratégique est stérile sans une comptabilité générale d'une précision chirurgicale. Une seule omission de facturation ou une mauvaise écriture d'immobilisation sur Tiime Expert fausse instantanément la rentabilité analytique globale et peut induire la direction en erreur.",
            },
            {
                title: "Posture",
                content:
                    "Évoluer dans un laboratoire de cosmétiques m'a appris à sortir du cadre strictement financier. J'ai développé une posture d'écoute active et de médiation, devenant le traducteur privilégié capable de transformer des réalités scientifiques et marketing en données financières exploitables pour la performance du groupe.",
            },
        ],
    },
    {
        slug: "alumni-gea-meaux-tresoriere-fondatrice",
        type: "Personnel",
        period: "Septembre 2024 – Juin 2025",
        title: "Trésorière & Fondatrice du Projet Alumni",
        company: "Alumni GEA Meaux",
        description:
            "• Création et structuration complète du réseau Alumni GEA Meaux\n• Gestion des relations institutionnelles (mairie, sponsors et partenaires)\n• Coordination du réseau et interface directe avec les anciens élèves\n• Supervision opérationnelle d’une conférence pour 100 personnes\n• Pilotage budgétaire et optimisation des ressources du projet",
        recommendationLetters: [
            { label: "Mémoire du Projet Alumni (PDF)", href: "/alumni/memoire-projet-alumni.pdf" },
            { label: "Présentation du Projet Alumni (PDF)", href: "/alumni/presentation-projet-alumni.pdf" },
            { label: "Tableau de bord de Trésorerie (Excel)", href: "/alumni/alumni-gea-meaux-budget.xlsx" },
        ],
        projectTitle: "Création et structuration du réseau Alumni GEA Meaux",
        sector: "Projet Associatif & Événementiel",
        tools: ["Excel (Gestion budgétaire)", "Airtable (Base de données)", "Billetweb (Billetterie)"],
        keywords: ["Réseau Alumni", "Gestion budgétaire", "Événementiel", "Partenariats publics", "RGPD"],
        sections: [
            {
                title: "Le Contexte : Transformer une idée en institution",
                content:
                    `Le projet est né de la volonté de créer une passerelle solide et durable entre les 25 promotions d'anciens diplômés (Alumni) de l'IUT et les étudiants actuels. En tant que fondatrice de cette initiative, j'ai dû assumer une double casquette : d'une part sécuriser l'intégralité des ressources financières indispensables à la viabilité du projet, et d'autre part déployer une communication ciblée pour asseoir sa visibilité auprès des élus locaux, des partenaires et des anciens élèves.

Partant d'une feuille blanche, il a fallu concevoir une structure fédératrice capable de traverser le temps et d'apporter une vraie valeur ajoutée aux futurs diplômés dans la construction de leur parcours professionnel.`,
            },
            {
                title: "Mes Missions : La rigueur financière au service de l'événementiel",
                content:
                    `Mes responsabilités ont couvert l'intégralité de la chaîne de valeur du projet associatif, alliant gestion de projet et direction financière :

• Ingénierie Financière & Trésorerie :
J'ai conçu et mis en œuvre des campagnes d'autofinancement (organisation de ventes de photos pour les diplômés, stand au marché de Noël de l'IUT) qui ont permis de récolter un budget initial de 1 353,77 €. J'ai assuré le suivi analytique rigoureux de ce budget sous Excel, optimisant les lignes de dépenses (buffet, sécurité professionnelle, matériel de sonorisation et communication visuelle) pour garantir l'équilibre parfait de l'événement.

• Stratégie de Partenariats & Négociation Institutionnelle :
J'ai été le point de contact privilégié avec la Mairie de Meaux. Par une argumentation solide et la mise en avant de l'intérêt territorial du projet, j'ai négocié et obtenu la mise à disposition gratuite de la Salle Bossuet à la Maison de l’Économie. Cette économie stratégique majeure sur le coût de location de salle a permis de réallouer nos ressources pour monter en gamme sur l'accueil des participants et la qualité des intervenants.

• Organisation Logistique & Opérationnelle :
J'ai orchestré la logistique globale : paramétrage et sécurisation de la billetterie sur Billetweb, planification des animations (photobooth, tombola d'autofinancement) et coordination du buffet de célébration pour 75 personnes, en veillant à la parfaite gestion des prestataires externes et au respect du timing de la journée.`,
            },
            {
                title: "Les Défis Rencontrés : Agilité financière et diplomatie logistique",
                content:
                    `Le principal défi de ce projet résidait dans l'équation complexe de concilier des ambitions événementielles élevées avec un budget initial très serré. Pour sécuriser le modèle économique sans freiner l'élan de la communauté, j'ai fait preuve d'agilité en proposant d'instaurer une billetterie payante à prix abordable (5 €), une décision stratégique qui a permis d'équilibrer les comptes de manière saine et de dégager un excédent de trésorerie pour la pérennité du réseau.

Sur le plan relationnel et organisationnel, coordonner les agendas de 18 professionnels en poste (Alumni venant de divers horizons) pour animer les tables rondes et la conférence a requis une communication proactive, empathique et personnalisée pour fédérer chacun autour de notre vision commune.`,
            },
        ],
        results: [
            {
                title: "Impact concret",
                content:
                    "Nous avons livré un réseau structuré de A à Z avec une base de données Airtable sécurisée de plus de 600 Alumni, conforme aux exigences du RGPD et prête pour les promotions futures. L'événement de lancement a réuni 75 participants à la Salle Bossuet, propulsant le LinkedIn officiel du réseau à plus de 600 abonnés qualifiés.",
            },
            {
                title: "Révélation personnelle",
                content:
                    "Les échanges passionnants que j'ai menés avec les Alumni lors des tables rondes et des déjeuners de réseau ont été le déclencheur de ma vocation professionnelle. Découvrir l'envers du décor du contrôle de gestion et de l'audit à travers leurs yeux a confirmé mon choix absolu de m'orienter vers un Master Finance d'entreprise en alternance.",
            },
            {
                title: "Posture",
                content:
                    "Ce projet m'a appris qu'une gestion financière ou un suivi budgétaire rigoureux sur tableur ne mènent à rien sans une forte dimension relationnelle et humaine. C'est l'empathie, l'écoute active et la force de conviction qui fédèrent les équipes, convainquent les partenaires institutionnels et créent l'engagement d'une communauté.",
            },
        ],
    },
    {
        slug: "sfts-evenementiel-logistique-caritatif",
        type: "Personnel",
        period: "Depuis 2024",
        title: "Bénévole – Pôle Événementiel et Logistique",
        company: "Solidarité Franco-Tunisienne de Santé (SFTS)",
        description:
            "• Organisation du gala de charité annuel pour récolter des fonds humanitaires\n• Négociation avec des artistes de renom pour des prestations à frais réduits\n• Gestion budgétaire des médicaments et coordination de l'envoi de matériel médical\n• Suivi logistique international des conteneurs d'équipements médicaux vers la Tunisie",
        projectTitle: "Pilotage de l'événementiel caritatif au service de la santé",
        sector: "Humanitaire & Événementiel Caritatif",
        tools: ["Excel (Gestion budgétaire)", "Coordination Logistique", "Négociation Partenaires"],
        keywords: ["Événementiel caritatif", "Logistique médicale", "Relations artistes", "Négociation", "Flux internationaux"],
        sections: [
            {
                title: "Le Contexte : Un pont médical humanitaire",
                content:
                    `L'association SFTS a pour mission essentielle de pallier les difficultés d'accès aux soins de santé primaires et spécialisés dans les zones les plus reculées et défavorisées de Tunisie. Pour ce faire, elle organise régulièrement des "Journées de Santé" pluridisciplinaires sur le terrain, où des professionnels de santé (généralistes, pédiatres, ophtalmologues, dentistes) interviennent de manière entièrement bénévole.

Afin de soutenir ces interventions de proximité, l'association assure l'envoi régulier de conteneurs maritimes internationaux remplis de matériel médical lourd réformé mais fonctionnel (lits médicalisés, respirateurs, fauteuils) et de médicaments essentiels depuis la France vers les hôpitaux tunisiens.`,
            },
            {
                title: "Ma Mission : Transformer la mobilisation en ressources vitales",
                content:
                    `Au sein du pôle événementiel et logistique de l'association, mon rôle est de sécuriser les financements cruciaux nécessaires à la réalisation de ces expéditions médicales et de ces actions d'envergure, avec un focus opérationnel sur l'organisation du Gala de Charité Annuel :

• Ingénierie & Négociation Artistique :
Je suis chargée d'entrer en relation avec des célébrités et des artistes de renom de la scène tunisienne. Mon objectif est de les convaincre de se produire bénévolement ou à frais très réduits lors de notre gala annuel. Par une argumentation financière solide sur le retour sur investissement social et la cause humanitaire, je négocie les contrats pour maximiser la marge nette du gala.

• Allocation Stratégique des Ressources :
L'intégralité des bénéfices de la billetterie et des dons récoltés lors du gala is directement affectée à des actions de santé critiques : financement d'interventions chirurgicales d'urgence pour des enfants atteints de cancer en Tunisie ou achat de lots de médicaments indispensables.

• Logistique Douanière & Approvisionnement :
Je participe activement à la coordination de la collecte de dons d'équipements (auprès des cliniques, pharmacies et cabinets médicaux partenaires en France) et à la planification du chargement des conteneurs maritimes. Je gère également le budget d'achat des médicaments manquants pour garantir la gratuité totale des soins dispensés sur place.`,
            },
            {
                title: "Les Défis Rencontrés : L'optimisation extrême au service de l'éthique",
                content:
                    `Le principal défi de l'action caritative réside dans la rationalisation et l'optimisation absolue de chaque ligne de coûts de fonctionnement. En milieu associatif humanitaire, chaque euro dépensé en trop pour l'organisation du gala de charité (traiteur, décoration, communication) est un euro en moins investi dans une opération chirurgicale vitale ou dans des traitements médicaux pour les populations isolées.

Gérer ces négociations serrées avec les prestataires tout en assurant une réactivité logistique constante pour les flux de conteneurs douaniers hors Union Européenne exige une rigueur intellectuelle de chaque instant et une forte adaptabilité face aux aléas de la supply chain internationale.`,
            },
        ],
        results: [
            {
                title: "Impact concret",
                content:
                    "Grâce au succès financier et logistique de nos événements annuels, plusieurs opérations chirurgicales lourdes d'enfants atteints de cancer ont pu être intégralement financées. Des tonnes de matériel médical lourd et de lits médicalisés ont été acheminées avec succès par conteneurs maritimes vers des hôpitaux régionaux en Tunisie.",
            },
            {
                title: "Posture de gestionnaire",
                content:
                    "Cette expérience m'a enseigné que le contrôle de gestion n'est pas uniquement un levier de rentabilité capitaliste, mais un formidable outil de solidarité sociale. Réduire minutieusement les charges d'organisation d'un événement caritatif devient une responsabilité éthique et humaine pour maximiser l'impact direct sur la vie des bénéficiaires.",
            },
            {
                title: "Compétence transversale",
                content:
                    "Piloter et coordonner des flux internationaux complexes d'équipements médicaux et de médicaments entre la France et la Tunisie fait écho à mes missions de gestion des flux de matières premières chez Ruby Rose, renforçant mes compétences en logistique, douanes et gestion d'échanges hors Union Européenne.",
            },
        ],
    },
    {
        slug: "coperton-holding-assistante-direction",
        type: "Pro",
        period: "Mars – Mai 2024",
        title: "Assistante de Direction & Assistante Comptable (Stage)",
        company: "Coperton Holding",
        description:
            "• Mise à jour et lettrage des comptes pour assurer la fiabilité comptable\n• Actualisation rigoureuse des bases de données et dossiers tiers\n• Gestion de la relation fournisseurs via des campagnes d\u2019appels sortants\n• Organisation et classement structuré des pièces comptables (factures, devis)\n• Pilotage et catégorisation des flux de trésorerie sur le logiciel Agicap\n• Suivi quotidien des entrées et sorties financières pour le reporting",
        recommendationLetters: [
            { label: "Lettre de Recommandation 1", href: "/coperton/lettre-recommandation-coperton-1.pdf" },
            { label: "Lettre de Recommandation 2", href: "/coperton/lettre-recommandation-coperton-2.pdf" },
        ],
    },
];
