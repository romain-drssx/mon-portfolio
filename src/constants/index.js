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
    title: "Développeur Angular",
    company_name: "Yuzer, Paris",
    icon: logo_yuzer,
    iconBg: "#E6DEDD",
    date: "2023/2024 - 12 mois en CDI/Télétravail",
    points: [
      "Intervenir sur une ERP intuitive, instantanée et personnalisable",
      "Optimiser les recherches dans la base de données pour un meilleur temps de réponse sur l'ERP",
      "Travailler en équipe de façon agile"
    ],
  },
  {
    title: "Développeur Angular",
    company_name: "Rider Club, Bordeaux",
    icon: logo_riderclub,
    iconBg: "#E6DEDD",
    date: "2020/2023 - Alternance de 2 ans + 1 an et 2 mois en CDI",
    points: [
      "Réaliser l'application web d'un service de location de motos pour particuliers et professionnels",
      "Résoudre les bugs le plus rapidement possible pour une meilleure expérience utilisateur",
      "Toujours chercher à améliorer l'application",
      "Réaliser des designs pour la communication sur l'application et les réseaux sociaux",
      "Travailler en équipe de façon agile",
    ],
  },
  {
    title: "Alternant Développeur PHP",
    company_name: "Doing, Saint-Etienne",
    icon: logo_doing,
    iconBg: "#E6DEDD",
    date: "2019/2020 - Alternance d'1 an",
    points: [
      "Réaliser des sites sur mesure en fonction des besoins des clients",
      "Apprendre un framework maison PHP",
      "Travailler en équipe de façon agile",
    ],
  },
  {
    title: "Stagiaire Développeur",
    company_name: "CHU de Limoges",
    icon: logo_chu_limoges,
    iconBg: "#E6DEDD",
    date: "2019 - Stage de 14 semaines + 1 mois en CDD",
    points: [
      "Evoluer l'intranet",
      "Assurer le bon fonctionnement de l'infrastructure du système d'information",
      "Assister les utilisateurs",
      "Fournir les équipements informatiques",
      "Garantir la sécurité du système d'information"
    ],
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
