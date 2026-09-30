import type { Localized } from '@/lib/i18n'

export const about = {
  bio: [
    {
      fr: "J'ai 21 ans et je suis étudiant en BUT MMI à l'IUT Clermont Auvergne depuis septembre 2026, après un BTS SIO option SLAM. J'y cherche ce qui me manquait : mieux relier le développement, le design d'interface et l'expérience utilisateur.",
      en: "I'm 21 and have been studying for a BUT MMI (Multimedia & Internet) at IUT Clermont Auvergne since September 2026, after a two-year BTS SIO in software development. I'm there for what I was missing: connecting development, interface design and user experience.",
    },
    {
      fr: "J'aime les projets où la technique sert l'usage : un configurateur 3D, une boutique en ligne, un outil métier bien pensé. En dehors des cours, je crée des jeux sur Roblox, j'apprends le japonais en autodidacte, et la musique reste un fil rouge depuis mon année de musicologie.",
      en: 'I enjoy projects where the tech serves the user: a 3D configurator, an online shop, a well-designed business tool. Outside of class I build games on Roblox, teach myself Japanese, and music has stayed with me since my year studying musicology.',
    },
  ] satisfies Localized[],
  strengths: [
    {
      title: { fr: 'Calme', en: 'Calm' },
      detail: {
        fr: 'Résilient face aux bugs et aux défis techniques, je garde la tête froide quand ça coince.',
        en: 'Resilient in the face of bugs and technical challenges, I keep a cool head when things get stuck.',
      },
    },
    {
      title: { fr: 'Adaptable', en: 'Adaptable' },
      detail: {
        fr: "Je m'intègre vite dans une équipe, un environnement ou une stack que je ne connais pas encore.",
        en: "I quickly fit into a team, an environment or a stack I don't know yet.",
      },
    },
    {
      title: { fr: 'Autonome', en: 'Independent' },
      detail: {
        fr: 'Proactif et orienté résultats : je cherche, je teste, et je reviens avec une solution.',
        en: 'Proactive and results-driven: I research, I test, and I come back with a solution.',
      },
    },
  ],
}

export type Category = 'front' | 'back' | 'database' | 'systems' | 'game'

export const categories: { id: Category; label: Localized }[] = [
  { id: 'front', label: { fr: 'Front-end', en: 'Front-end' } },
  { id: 'back', label: { fr: 'Back-end', en: 'Back-end' } },
  { id: 'database', label: { fr: 'Base de données', en: 'Database' } },
  { id: 'systems', label: { fr: 'Systèmes & réseau', en: 'Systems & network' } },
  { id: 'game', label: { fr: 'Jeu vidéo', en: 'Game dev' } },
]

export type ProjectImage = { src: string; alt: Localized; animated?: boolean }

export type Project = {
  slug: string
  title: string
  kind: Localized
  summary: Localized
  context: Localized
  categories: Category[]
  tags: string[]
  features: Localized[]
  stack: { name: string; detail: Localized }[]
  images: ProjectImage[]
  repo?: string
  upcoming?: boolean
}

export const projects: Project[] = [
  {
    slug: 'plexiglass',
    title: 'Configurateur Plexiglass',
    kind: { fr: 'Stage · CTRLZ SAS', en: 'Internship · CTRLZ SAS' },
    summary: {
      fr: 'Outil interactif pour configurer des plaques de plexiglass en temps réel : formes, dimensions, trous et découpes.',
      en: 'Interactive tool to configure plexiglass sheets in real time: shapes, dimensions, holes and cut-outs.',
    },
    context: {
      fr: "Développé pendant mon stage chez CTRLZ SAS, cet outil permet aux clients de personnaliser entièrement leurs plaques de plexiglass : choix de la forme, modification des dimensions, ajout de trous et de découpes intérieures, avec un aperçu 2D/3D instantané.",
      en: 'Built during my internship at CTRLZ SAS, this tool lets customers fully customise their plexiglass sheets: choose a shape, change dimensions, add holes and inner cut-outs, with an instant 2D/3D preview.',
    },
    categories: ['front'],
    tags: ['Vue.js', 'WebGL', 'Canvas', 'PHP'],
    features: [
      { fr: 'Formes variables : rectangle, cercle, étoile, diamant…', en: 'Variable shapes: rectangle, circle, star, diamond…' },
      { fr: 'Modificateurs : dimensions, trous, découpes intérieures', en: 'Modifiers: dimensions, holes, inner cut-outs' },
      { fr: 'Prévisualisation 2D/3D en temps réel', en: 'Real-time 2D/3D preview' },
      { fr: 'Sauvegarde et export des configurations', en: 'Save and export configurations' },
    ],
    stack: [
      { name: 'Vue.js', detail: { fr: 'Interface réactive et gestion d’état', en: 'Reactive UI and state management' } },
      { name: 'Canvas & WebGL', detail: { fr: 'Rendu 2D/3D de la prévisualisation', en: '2D/3D preview rendering' } },
      { name: 'PHP', detail: { fr: 'Intégration au site existant', en: 'Integration with the existing site' } },
    ],
    images: [
      {
        src: '/projects/plexiglass-cover.png',
        alt: { fr: 'Couverture du configurateur Plexiglass', en: 'Plexiglass configurator cover' },
      },
      {
        src: '/projects/plexi-config.png',
        alt: {
          fr: 'Interface du configurateur avec la plaque en aperçu et les options de forme',
          en: 'Configurator interface showing the sheet preview and shape options',
        },
      },
    ],
    repo: 'https://github.com/aaronZER69/vueconf',
  },
  {
    slug: 'huiles',
    title: 'E-commerce — Huiles',
    kind: { fr: 'Projet personnel', en: 'Personal project' },
    summary: {
      fr: "Boutique en ligne d'huiles de qualité avec catalogue, panier et tunnel de commande.",
      en: 'Online shop for quality oils with a catalogue, cart and checkout flow.',
    },
    context: {
      fr: "L'objectif : proposer une expérience d'achat fluide et professionnelle, avec un catalogue riche, un panier persistant et une gestion des commandes, pour une solution d'achat en ligne moderne et sécurisée.",
      en: 'The goal: a smooth, professional shopping experience with a rich catalogue, a persistent cart and order management — a modern, secure way to buy online.',
    },
    categories: ['front', 'back'],
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    features: [
      { fr: 'Catalogue produits et fiches détaillées', en: 'Product catalogue and detail pages' },
      { fr: 'Panier persistant (localStorage)', en: 'Persistent cart (localStorage)' },
      { fr: 'Tunnel de commande et confirmation', en: 'Checkout flow and confirmation' },
      { fr: 'Intégration du paiement', en: 'Payment integration' },
    ],
    stack: [
      { name: 'React', detail: { fr: 'Interface dynamique et réactive', en: 'Dynamic, reactive interface' } },
      { name: 'Tailwind CSS', detail: { fr: 'Styles modernes et responsive', en: 'Modern, responsive styling' } },
      { name: 'Node.js', detail: { fr: 'Gestion des données et des commandes', en: 'Data and order handling' } },
    ],
    images: [
      { src: '/projects/huiles-cover.png', alt: { fr: 'Couverture de la boutique d’huiles', en: 'Oil shop cover' } },
      { src: '/projects/oil1.png', alt: { fr: "Page d'accueil de la boutique", en: 'Shop home page' } },
      { src: '/projects/oil2.png', alt: { fr: 'Catalogue produits', en: 'Product catalogue' } },
      { src: '/projects/oil3.png', alt: { fr: 'Détail produit', en: 'Product detail' } },
      { src: '/projects/oil4.png', alt: { fr: "Panier d'achat", en: 'Shopping cart' } },
      { src: '/projects/oil5.png', alt: { fr: 'Processus de commande', en: 'Checkout process' } },
      { src: '/projects/oil6.png', alt: { fr: 'Confirmation de commande', en: 'Order confirmation' } },
    ],
    repo: 'https://github.com/aaronZER69/huiles',
  },
  {
    slug: 'bibliotech',
    title: 'BiblioTech',
    kind: { fr: 'Projet BTS SIO', en: 'BTS SIO project' },
    summary: {
      fr: 'Gestion de bibliothèque en ligne : emprunts, réservations, avis et gamification.',
      en: 'Online library manager: loans, reservations, reviews and gamification.',
    },
    context: {
      fr: "BiblioTech est une application complète de gestion de bibliothèque, construite avec Laravel 12 selon une architecture MVC. Elle couvre l'emprunt et la réservation de livres, et ajoute des fonctionnalités plus avancées comme la gamification et la notation.",
      en: 'BiblioTech is a complete library management application built with Laravel 12 using an MVC architecture. It covers book loans and reservations, and adds more advanced features such as gamification and ratings.',
    },
    categories: ['back', 'database'],
    tags: ['Laravel 12', 'PHP 8.3', 'SQLite'],
    features: [
      { fr: 'Catalogue avec catégories et recherche', en: 'Catalogue with categories and search' },
      { fr: 'Emprunts, retours, historique et délais', en: 'Loans, returns, history and due dates' },
      { fr: 'Réservation des livres indisponibles', en: 'Reservations for unavailable books' },
      { fr: 'Authentification et rôles (Admin, Bibliothécaire, Utilisateur)', en: 'Authentication and roles (Admin, Librarian, User)' },
      { fr: 'Points, badges et classement', en: 'Points, badges and leaderboard' },
      { fr: 'Tableau de bord admin et notifications email', en: 'Admin dashboard and email notifications' },
    ],
    stack: [
      { name: 'Laravel 12 · PHP 8.3', detail: { fr: 'MVC, contrôleurs resource, middleware', en: 'MVC, resource controllers, middleware' } },
      { name: 'SQLite · Eloquent', detail: { fr: 'Migrations et relations', en: 'Migrations and relations' } },
      { name: 'Blade · Bootstrap 5', detail: { fr: 'Templates et interface responsive', en: 'Templates and responsive UI' } },
      { name: 'Spatie Permission', detail: { fr: 'Rôles et permissions', en: 'Roles and permissions' } },
      { name: 'PHPUnit · GitHub Actions · Docker', detail: { fr: 'Tests, CI/CD et conteneurisation', en: 'Tests, CI/CD and containers' } },
    ],
    images: [
      { src: '/projects/bibliotech-cover.png', alt: { fr: 'Couverture de BiblioTech', en: 'BiblioTech cover' } },
    ],
    repo: 'https://github.com/aaronZER69/laravel5',
  },
  {
    slug: 'boutikpro',
    title: 'BoutikPro',
    kind: { fr: 'CCF BTS SIO SLAM', en: 'BTS SIO graded project' },
    summary: {
      fr: 'Application de gestion commerciale pour PME : clients, commandes, fidélité et fournisseurs.',
      en: 'Business management app for small e-commerce companies: customers, orders, loyalty and suppliers.',
    },
    context: {
      fr: "Réalisé en contrôle continu (CCF) du BTS SIO SLAM, BoutikPro répond à un besoin réel : une PME e-commerce qui veut remplacer un système manuel fragmenté par une application Python intégrée. Le projet part de l'analyse métier (UML) jusqu'à une base MySQL de 11 tables.",
      en: 'Built as a graded BTS SIO project, BoutikPro addresses a real need: a small e-commerce company replacing a fragmented manual system with an integrated Python application. It goes from business analysis (UML) to an 11-table MySQL database.',
    },
    categories: ['back', 'database'],
    tags: ['Python', 'MySQL', 'SQLAlchemy', 'UML'],
    features: [
      { fr: 'Analyse métier et diagrammes de cas d’usage UML', en: 'Business analysis and UML use-case diagrams' },
      { fr: 'Modélisation MCD / MLD et schéma MySQL (11 tables)', en: 'Conceptual/logical data models and MySQL schema (11 tables)' },
      { fr: 'CRUD clients, produits, commandes et factures', en: 'CRUD for customers, products, orders and invoices' },
      { fr: 'Programme de fidélité et parrainage', en: 'Loyalty and referral programme' },
      { fr: '3 approches d’accès aux données : DB-API, SQLAlchemy Core, ORM', en: '3 data-access approaches: DB-API, SQLAlchemy Core, ORM' },
      { fr: 'Requêtes avancées : jointures et agrégations', en: 'Advanced queries: joins and aggregations' },
    ],
    stack: [
      { name: 'Python 3', detail: { fr: 'CRUD et gestion d’erreurs', en: 'CRUD and error handling' } },
      { name: 'MySQL 8', detail: { fr: 'Schéma relationnel et contraintes', en: 'Relational schema and constraints' } },
      { name: 'SQLAlchemy', detail: { fr: 'Core et ORM', en: 'Core and ORM' } },
      { name: 'PlantUML', detail: { fr: 'Modélisation UML', en: 'UML modelling' } },
      { name: 'Docker', detail: { fr: 'Environnement Codespaces', en: 'Codespaces environment' } },
    ],
    images: [
      { src: '/projects/boutikpro-cover.png', alt: { fr: 'Couverture de BoutikPro', en: 'BoutikPro cover' } },
    ],
    repo: 'https://github.com/BTS2-SIO-SLAM-LSW/bts-sio-2-oral-du-ccf-python-aaronZER69',
  },
  {
    slug: 'yoasobi',
    title: 'Site J-Pop — YOASOBI',
    kind: { fr: 'Projet personnel', en: 'Personal project' },
    summary: {
      fr: 'Site vitrine dédié au duo YOASOBI : membres, histoire et discographie.',
      en: 'Showcase website for the duo YOASOBI: members, story and discography.',
    },
    context: {
      fr: "Un site vitrine dynamique dédié au groupe japonais YOASOBI. Il présente les membres, leur histoire et leur discographie, avec des animations et des interactions pensées pour une expérience immersive.",
      en: 'A dynamic showcase site for the Japanese band YOASOBI. It presents the members, their story and discography, with animations and interactions designed for an immersive experience.',
    },
    categories: ['front'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      { fr: 'Structure HTML5 sémantique', en: 'Semantic HTML5 structure' },
      { fr: 'Animations et effets visuels en CSS3', en: 'CSS3 animations and visual effects' },
      { fr: 'Navigation fluide et interactions en JavaScript', en: 'Smooth navigation and interactions in JavaScript' },
      { fr: 'Responsive : mobile, tablette, desktop', en: 'Responsive: mobile, tablet, desktop' },
    ],
    stack: [
      { name: 'HTML5', detail: { fr: 'Structure sémantique', en: 'Semantic structure' } },
      { name: 'CSS3', detail: { fr: 'Responsive et animations', en: 'Responsive and animations' } },
      { name: 'JavaScript', detail: { fr: 'Interactivité et événements', en: 'Interactivity and events' } },
    ],
    images: [
      { src: '/projects/yoasobi-cover.jpg', alt: { fr: 'Couverture du site YOASOBI', en: 'YOASOBI website cover' } },
      { src: '/projects/yoasobi-1.png', alt: { fr: "Page d'accueil et présentation", en: 'Home page and introduction' } },
      { src: '/projects/yoasobi-2.gif', alt: { fr: 'Animations et interactions', en: 'Animations and interactions' }, animated: true },
      { src: '/projects/yoasobi-3.png', alt: { fr: 'Section membres du groupe', en: 'Band members section' } },
      { src: '/projects/yoasobi-4.png', alt: { fr: 'Section connexion', en: 'Login section' } },
    ],
    repo: 'https://github.com/aaronZER69/Yoasobi',
  },
  {
    slug: 'glpi',
    title: 'Gestion de parc — GLPI',
    kind: { fr: 'Projet BTS SIO', en: 'BTS SIO project' },
    summary: {
      fr: "Administration d'un parc informatique : inventaire, tickets et suivi des équipements.",
      en: 'IT asset management: inventory, helpdesk tickets and equipment tracking.',
    },
    context: {
      fr: "Mise en place de GLPI (Gestion Libre de Parc Informatique) pour administrer le parc d'une entreprise : inventaire, gestion des tickets d'assistance et suivi des équipements, pour une meilleure organisation et une vraie traçabilité.",
      en: "Deploying GLPI (an open-source IT asset manager) to run a company's IT fleet: inventory, support tickets and equipment tracking, for better organisation and real traceability.",
    },
    categories: ['systems', 'database'],
    tags: ['GLPI', 'MySQL', 'Réseau'],
    features: [
      { fr: 'Inventaire des équipements (PC, imprimantes, serveurs)', en: 'Equipment inventory (PCs, printers, servers)' },
      { fr: "Ticketing pour les demandes d'assistance", en: 'Ticketing for support requests' },
      { fr: 'Configuration et gestion du réseau', en: 'Network configuration and management' },
    ],
    stack: [
      { name: 'GLPI', detail: { fr: 'Plateforme open-source de gestion de parc', en: 'Open-source asset management platform' } },
      { name: 'MySQL', detail: { fr: 'Persistance des données', en: 'Data persistence' } },
    ],
    images: [
      { src: '/projects/glpi-cover.jpg', alt: { fr: 'Couverture de la gestion de parc GLPI', en: 'GLPI asset management cover' } },
      { src: '/projects/glpi-dashboard.png', alt: { fr: 'Tableau de bord GLPI', en: 'GLPI dashboard' } },
    ],
  },
  {
    slug: 'roblox',
    title: 'Jeux Roblox',
    kind: { fr: 'Projet personnel', en: 'Personal project' },
    summary: {
      fr: 'Conception de jeux sur Roblox : scripting, interfaces, animations et systèmes de jeu.',
      en: 'Designing games on Roblox: scripting, interfaces, animation and game systems.',
    },
    context: {
      fr: "En parallèle de mes études, je conçois des jeux sur Roblox. C'est un terrain d'expérimentation idéal pour la logique, l'UI et le game design. Captures et liens à venir.",
      en: "Alongside my studies I build games on Roblox. It's an ideal playground for logic, UI and game design. Screenshots and links coming soon.",
    },
    categories: ['game'],
    tags: ['Luau', 'Roblox Studio', 'UI', 'Animation'],
    features: [
      { fr: 'Scripting des mécaniques de jeu en Luau', en: 'Game mechanics scripting in Luau' },
      { fr: "Interfaces utilisateur en jeu", en: 'In-game user interfaces' },
      { fr: 'Animations de personnages et d’objets', en: 'Character and object animation' },
      { fr: 'Systèmes de jeu : progression, économie, sauvegarde', en: 'Game systems: progression, economy, saving' },
    ],
    stack: [
      { name: 'Luau', detail: { fr: 'Langage de scripting Roblox', en: 'Roblox scripting language' } },
      { name: 'Roblox Studio', detail: { fr: 'Moteur et éditeur', en: 'Engine and editor' } },
    ],
    images: [],
    upcoming: true,
  },
]

export const experiences = [
  {
    period: { fr: 'Janvier 2026', en: 'January 2026' },
    role: { fr: 'Stage · Développeur Full-Stack', en: 'Internship · Full-Stack Developer' },
    company: 'CoinMobile',
    summary: {
      fr: "Un stage qui couvre tout le cycle de vie d'une application web, de la gestion des données jusqu'au déploiement en production, avec des outils professionnels.",
      en: 'An internship covering the full life cycle of a web application, from data management to production deployment, using professional tools.',
    },
    missions: [
      { fr: 'Concevoir et enrichir une base de données', en: 'Design and extend a database' },
      { fr: 'Intégrer les données dans le backend du site', en: 'Integrate data into the site backend' },
      { fr: 'Déployer un site vitrine en production', en: 'Deploy a showcase website to production' },
      { fr: "Utiliser les outils d'interface utilisateur", en: 'Work with user interface tooling' },
    ],
    tags: ['Base de données', 'Backend', 'Déploiement', 'Front-end'],
  },
  {
    period: { fr: 'Juin 2025', en: 'June 2025' },
    role: { fr: 'Stage · Développeur Web', en: 'Internship · Web Developer' },
    company: 'CTRLZ SAS',
    summary: {
      fr: "Création d'un configurateur interactif permettant de personnaliser et visualiser en temps réel des plaques de matériau, avec Vue.js et WebGL, en plus de la gestion d'un site e-commerce WordPress.",
      en: 'Building an interactive configurator to customise and preview material sheets in real time with Vue.js and WebGL, alongside running a WordPress e-commerce site.',
    },
    missions: [
      { fr: 'Nouveau configurateur produit en Vue.js, HTML, CSS et PHP', en: 'New product configurator in Vue.js, HTML, CSS and PHP' },
      { fr: 'Création et optimisation de fiches produits et d’articles WordPress', en: 'Creating and optimising WordPress product pages and blog posts' },
      { fr: 'Optimisation et gestion de la base de données PHP / MySQL', en: 'Optimising and managing the PHP / MySQL database' },
      { fr: "Gestion du back-office d'un site e-commerce WordPress", en: 'Managing the back office of a WordPress e-commerce site' },
    ],
    tags: ['Vue.js', 'WebGL', 'Canvas', 'WordPress', 'PHP', 'MySQL'],
    projectSlug: 'plexiglass',
  },
]

export type Level = 'solid' | 'comfortable' | 'learning'

export const skills: { group: 'languages' | 'frameworks' | 'tools'; items: { name: string; level: Level }[] }[] = [
  {
    group: 'languages',
    items: [
      { name: 'HTML', level: 'solid' },
      { name: 'CSS', level: 'solid' },
      { name: 'JavaScript', level: 'solid' },
      { name: 'PHP', level: 'solid' },
      { name: 'SQL / MySQL', level: 'solid' },
      { name: 'TypeScript', level: 'comfortable' },
      { name: 'Python', level: 'comfortable' },
      { name: 'Luau', level: 'learning' },
    ],
  },
  {
    group: 'frameworks',
    items: [
      { name: 'React', level: 'solid' },
      { name: 'Tailwind CSS', level: 'solid' },
      { name: 'Laravel', level: 'solid' },
      { name: 'Next.js', level: 'comfortable' },
      { name: 'Vue.js', level: 'comfortable' },
      { name: 'SQLAlchemy', level: 'comfortable' },
      { name: 'Faker', level: 'comfortable' },
    ],
  },
  {
    group: 'tools',
    items: [
      { name: 'Git / GitHub', level: 'solid' },
      { name: 'VS Code / PhpStorm', level: 'solid' },
      { name: 'Vercel', level: 'solid' },
      { name: 'Figma', level: 'comfortable' },
      { name: 'PostgreSQL', level: 'comfortable' },
      { name: 'WordPress', level: 'comfortable' },
      { name: 'Docker', level: 'comfortable' },
      { name: 'Supabase', level: 'comfortable' },
      { name: 'GLPI', level: 'comfortable' },
      { name: 'API LLM', level: 'learning' },
    ],
  },
]

export const education = [
  {
    period: { fr: '2026 — ', en: '2026 — ' },
    current: true,
    title: 'BUT MMI',
    school: 'IUT Clermont Auvergne',
    detail: {
      fr: "Métiers du Multimédia et de l'Internet : développement web, design d'interface et communication numérique.",
      en: 'Multimedia & Internet: web development, interface design and digital communication.',
    },
  },
  {
    period: { fr: '2024 — 2026', en: '2024 — 2026' },
    title: 'BTS SIO — option SLAM',
    school: 'Lycée Simone Weil',
    detail: {
      fr: 'Solutions Logicielles et Applications Métier : développement full-stack, bases de données et architecture logicielle.',
      en: 'Software solutions & business applications: full-stack development, databases and software architecture.',
    },
  },
  {
    period: { fr: '2023 — 2024', en: '2023 — 2024' },
    title: 'L0 Musicologie',
    school: 'Université Jean Monnet',
    detail: {
      fr: "Histoire et analyse musicale, théorie, solfège et éducation auditive.",
      en: 'Music history and analysis, theory, sight-reading and ear training.',
    },
  },
  {
    period: { fr: '2022 — 2023', en: '2022 — 2023' },
    title: 'Baccalauréat STI2D',
    school: 'Lycée Jacob Holtzer',
    detail: {
      fr: 'Mention assez bien — innovation technologique et éco-conception.',
      en: 'With honours ("assez bien") — technological innovation and eco-design.',
    },
  },
]

export const languages = [
  { flag: 'fr', name: { fr: 'Français', en: 'French' }, level: { fr: 'Langue maternelle', en: 'Native' } },
  { flag: 'gb', name: { fr: 'Anglais', en: 'English' }, level: { fr: 'C1 — courant', en: 'C1 — fluent' } },
  { flag: 'es', name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'A2 — bases', en: 'A2 — basic' } },
  { flag: 'jp', name: { fr: 'Japonais', en: 'Japanese' }, level: { fr: 'Autodidacte — kana', en: 'Self-taught — kana' } },
]

export const documents = [
  { key: 'bts1', href: '/documents/attestation-stage-bts1.pdf', type: 'PDF' },
  { key: 'bts2', href: '/documents/attestation-stage-bts2.pdf', type: 'PDF' },
  { key: 'e5', href: '/documents/tableau-synthese-e5-2026.xlsx', type: 'XLSX' },
] as const
