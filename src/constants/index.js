import {
  backend,
  creator,
  mobile,
  web,

  html,
  angular,
  vuejs,
  react,
  php,
  css,
  tailwind,
  wordpress,
  nodejs,
  springboot,
  strapi,
  elasticsearch,
  git,

  logo_chu_limoges,
  logo_doing,
  logo_riderclub,
  logo_yuzer,
  trophy_4l,
  rider_intelligence
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Présentation",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Très bonne maitrise d'Angular",
    icon: web,
  },
  {
    title: "Des notions dans les concurrents tels que Vue.js et React",
    icon: mobile,
  },
  {
    title: "1 an d'expérience en PHP",
    icon: backend,
  },
  {
    title: "Bonne compréhension des méthodes agiles",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
    rate: 5,
    comment: "Maitrise la hiérarchie et les bonnes pratiques pour le SEO"
  },
  {
    name: "Angular",
    icon: angular,
    rate: 4,
    comment: "Maitrise vraiment bien (4 ans d'expérience)"
  },
  {
    name: "Vue.js",
    icon: vuejs,
    rate: 2,
    comment: "Maitrise que les bases"
  },
  {
    name: "React",
    icon: react,
    rate: 2,
    comment: "Maitrise que les bases"
  },
  {
    name: "PHP",
    icon: php,       
    rate: 3,
    comment: "Maitrise bien (1 an d'expérience)"            
  },
  {
    name: "CSS",
    icon: css,
    rate: 5,
    comment: "Maitrise tout ce qu'il faut savoir"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    rate: 4,
    comment: "Maitrise vraiment bien (2 ans d'expérience)"
  },
  {
    name: "Wordpress",
    icon: wordpress,
    rate: 3,
    comment: "Déjà réalisé plusieurs sites avec pour des projets d'écoles"
  },
  {
    name: "Strapi",
    icon: strapi,
    rate: 4,
    comment: "Maitrise vraiment bien (3 ans d'expérience)"
  },
  {
    name: "NodeJS",
    icon: nodejs,
    rate: 3,
    comment: "Déjà utilisé plusieurs fois en cours + dans des projets"
  },
  {
    name: "Spring Boot",
    icon: springboot,
    rate: 2,
    comment: "Maitrise que les bases"
  },
  {
    name: "ElasticSearch",
    icon: elasticsearch,
    rate: 2,
    comment: "Maitrise que les bases"
  },
  {
    name: "Git",
    icon: git,
    rate: 4,
    comment: "Autonome, même en cas de conflit"
  },
];

const experiences = [
  {
    title: "Développeur Fullstack",
    company_name: "Yuzer, Paris (Full Télétravail)",
    icon: logo_yuzer,
    iconBg: "#E6DEDD",
    date: "CDI 1 an · Novembre 2023 - Novembre 2024",
    project: "Yuzer est un ERP SaaS 360° destiné aux professionnels de la moto, du vélo et de l'automobile. L'entreprise propose une solution moderne et adaptée pour la gestion des tâches, des réceptions de commande, des inventaires, etc.",
    missions: [
      {
        text: "Analyse de la solution existante pour identifier les leviers d’amélioration."
      },
      {
        text: "Développement backend en Kotlin (Spring Boot) :",
        subpoints: [
          "Conception de routes CRUD robustes pour assurer une communication fluide avec le frontend.",
          "Gestion des accès utilisateurs selon les 4 types d’offres ERP avec une gestion différenciée des accès utilisateurs.",
          "Intégration de filtres de recherche avancés, basés sur ElasticSearch, permettant une recherche intelligente et performante."
        ]
      },
      {
        text: "Développement frontend en Angular :",
        subpoints: [
          "Création d’interfaces réactives avec formulaires dynamiques, gestion d’état, et communication via services HTTP.",
          "Développement d'une nouvelle vue de planification type Gantt pour la gestion des tâches, accompagnée de la création d’un nouveau format d’affichage des cartes de tâches, afin de mieux visualiser les informations clés.",
          "Intégration UI avec Tailwind CSS pour un rendu moderne et responsive.",
          "Intégration de la solution de chat client multicanal CRISP (support, chatbot, etc.)."
        ]
      },
      {
        text: "Maintenance & amélioration continue :",
        subpoints: [
          "Détection et correction de bugs sur les environnements Angular/Kotlin.",
          "Participation active à la fiabilisation du code et à l’amélioration de la couverture de tests.",
        ]
      },
      {
        text: "Participation active aux événements Agile en anglais (daily stand-ups, sprint reviews, planning poker), favorisant la collaboration internationale au sein de l'équipe."
      }
    ],
    environment: "Frontend en Angular, Backend en Kotlin (Framework Spring Boot), Docker, Slack, Soucetree, Github, Visual Studio Code, IntelliJ IDEA, Tailwind CSS, phpMyAdmin, MySQL, MacOS"
  },
  {
    title: "Développeur Fullstack",
    company_name: "Rider Club, Bordeaux",
    icon: logo_riderclub,
    iconBg: "#E6DEDD",
    date: "Alternance 2 ans + CDI 1 an et 2 mois · 2020/2023",
    project: "Rider Club est une plateforme française de location de deux-roues entre particuliers et professionnels, assurée par Allianz. Elle permet aux utilisateurs de louer des motos et scooters pour des week-ends, des vacances ou pour essayer avant d'acheter.",
    missions: [
      {
        text: "Développement frontend en Angular :",
        subpoints: [
          "Refonte complète de l'application selon des maquettes fournies par un prestataire externe (Figma), avec mise en œuvre de composants dynamiques, responsive et performants grâce à Tailwind CSS.",
          "Création d’un système de messagerie en temps réel entre utilisateurs via WebSockets (mis en place côté backend), avec gestion des connexions/déconnexions, envoi différé et notifications visuelles.",
          "Mise en place d’un système d’avis utilisateurs (évaluations bilatérales locataire/propriétaire), inspiré de Blablacar, avec logique conditionnelle d’affichage selon les statuts des locations.",
          "Optimisation des performances de l'application web pour garantir une expérience fluide, tout en améliorant le référencement SEO.",
          "Conception et intégration d’un composant calendrier personnalisé, entièrement développé en interne pour répondre aux exigences spécifiques du projet."
        ]
      },
      {
        text: "Développement backend avec Strapi (Node.js Headless CMS) :",
        subpoints: [
          "Structuration des collections et permissions selon les rôles (locataire, propriétaire, admin).",
          "Création de routes API sécurisées, gestion des rôles avec des policies middleware personnalisées pour un contrôle fin des accès aux données.",
          "Développement de logiques métiers côté Strapi, via des custom controllers."
        ]
      },
      {
        text: "Maintenance & amélioration continue :",
        subpoints: [
          "Tests multi-plateformes des fonctionnalités sur l’App Store, le Play Store et la version web, afin de garantir la cohérence et la stabilité du produit.",
          "Résolution des bugs et amélioration continue des fonctionnalités."
        ]
      },
      {
        text: "UI/UX : réalisation de maquettes d’écrans secondaires en complément de celles fournies, avec intégration pixel-perfect en Angular."
      }
    ],
    environment: "Frontend Angular, Backend avec Strapi (Node.js Headless CMS), Webstorm, Github, Figma, Slack, Tailwind CSS, Docker, phpMyAdmin, MySQL, MacOS"
  },
  {
    title: "Alternant Développeur Fullstack",
    company_name: "Doing, Saint-Etienne",
    icon: logo_doing,
    iconBg: "#E6DEDD",
    date: "Alternance d'1 an · 2019/2020",
    project: "DOING est une entreprise stéphanoise spécialisée dans le développement d'applications métiers web et mobile sur mesure depuis plus de 30 ans. Engagée dans une démarche de développement durable, elle est labellisée Entreprise Numérique Responsable depuis 2012.",
    missions: [
      {
        text: "Prise en main d’un framework PHP interne et apprentissage des standards de l’entreprise."
      },
      {
        text: "Création de pages d’accueil et de menus de navigation."
      },
      {
        text: "Intégration de formulaires de contact fonctionnels."
      },
      {
        text: "Développement de backoffices administrables."
      },
      {
        text: "Mise en place de routes CRUD et traitement des erreurs."
      },
      {
        text: "Travail collaboratif en Agile (Poker Planning, Sprint)."
      }
    ],
    environment: "Frontend et backend géré avec le framework PHP, Visual Studio Code, MariaDB, phpMyAdmin, JIRA, Gitlab, Slack, Docker, MacOS"
  },
  {
    title: "Stagiaire Développeur ASP",
    company_name: "CHU de Limoges",
    icon: logo_chu_limoges,
    iconBg: "#E6DEDD",
    date: "Stage 14 semaines + CDD 1 mois · 2019",
    project: "Le Centre Hospitalier Universitaire (CHU) de Limoges est un établissement de santé majeur en Nouvelle-Aquitaine. La Direction des Systèmes d'Information (DSI) gère l'infrastructure informatique de l'hôpital, y compris l'intranet utilisé par le personnel médical et administratif.",
    missions: [
      {
        text: "Automatisation du module de gestion des formations."
      },
      {
        text: "Réalisation de maquettes pour les nouveaux modules."
      },
      {
        text: "Développement de fonctionnalités supplémentaires sur l’intranet."
      },
      {
        text: "Support aux utilisateurs du personnel hospitalier."
      },
      {
        text: "Garantie de la sécurité des accès et des données."
      },
      {
        text: "Résolution de bugs et assistance technique."
      },
    ],
    environment: "Frontend en ASP, Adobe Dreamweaver CS6, Windows"
  },
];

const projects = [
  {
    name: "4L Trophy",
    description:
      "Des amis à moi faisaient le 4L Trophy et m'ont demandé un site pour présenter leurs sponsors, en quoi consister le projet et leurs motivations. Ils m'ont un site au plus vite et je n'ai jamais utilisé Webflow, je me suis dit que c'était une bonne occasion pour l'utiliser.",
    tags: [],
    image: trophy_4l,
    source_code_link: "https://4l-trophy-arzem-ethier.webflow.io/",
  },
  {
    name: "Rider Intelligence",
    description:
      "Ce projet était pour valider mon diplome de mastère, il était en collaboration avec mon entreprise d'alternance Rider Club."
      + " Le but du projet était de réaliser un tableau de bord et de faire des suggestions de motos avec une IA qui va réfléchir sur les motos qui correspondront parfaitement au profil du client en fonction des données des utilisateurs et de son environnement.",
    tags: [],
    image: rider_intelligence,
  },
];

export { services, technologies, experiences, projects };
