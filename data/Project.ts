export const projects = [
  {
    id: 1,
    title: "House Marketing Analysis",
    category: "Data Analysis",
    description:
      "An analysis of housing data to uncover pricing patterns, property characteristics, and market insights.",
    technologies: ["Python", "Pandas", "Power BI"],
    slug: "house-marketing-analysis",
    image: "/projects/house-marketing-analysis/dashboard.png",
   links: {
  github: "https://github.com/Tabotjoel/Housing-Market-Analysis.git",
  dashboard: "https://github.com/Tabotjoel/Housing-Market-Analysis/blob/main/Housing%20Market%20Analysis.pbix",
  live: "",
},
    year: "2026",

   overview:
  "This project analyses a housing rental dataset to understand rental price patterns across cities, property sizes, room counts, and furnishing conditions. The analysis was performed using Python and Pandas, with the results prepared for visualization in Power BI.",

problem:
  "The goal was to transform raw housing rental records into a cleaned and structured dataset that could be used to understand differences in rental prices and identify useful patterns in the housing market.",

process: [
  "Loaded and inspected the housing rental dataset using Python and Pandas.",
  "Removed duplicate records and checked the dataset for missing values.",
  "Converted rental prices from INR to FCFA using an approximate conversion of 1 INR = 7.5 FCFA.",
  "Analysed average rental prices by city, number of rooms (BHK), and furnishing status.",
  "Created visualisations in Python and prepared the cleaned dataset for Power BI analysis.",
],

insights: [
  "Mumbai had the highest average rental price among the cities in the dataset, at approximately 640,000 FCFA.",
  "Average rental prices increased substantially as the number of bedrooms (BHK) increased, with 4-BHK and 5-BHK properties having particularly high average rents.",
  "Furnished properties had the highest average rent at approximately 421,000 FCFA, followed by semi-furnished and unfurnished properties.",
  "The dataset contains 4,746 rental listings covering six cities.",
],
  },

  {
    id: 2,
    title: "Gym Performance Analytics",
    category: "Data Visualization",
    description:
      "A performance analytics project exploring training progression, strength trends, and workout data over time.",
    technologies: ["Python", "Pandas", "Power BI"],
    slug: "gym-performance-analytics",
    image: "/projects/gym-performance-analytics/dashboard.png",
links: {
  github: "https://github.com/Tabotjoel/gym-performance-dashboard.git",
  dashboard: "",
  live: "",
},
    year: "2026",

    overview:
      "A personal analytics project designed to transform workout history into measurable performance insights.",

    problem:
      "The goal was to understand strength progression over time and turn workout records into a structured dataset that could be analysed visually.",

    process: [
      "Structured workout records into a usable dataset.",
      "Cleaned and transformed exercise data using Pandas.",
      "Analysed strength progression over time.",
      "Created time-series visualisations.",
      "Designed a Power BI dashboard to monitor performance.",
    ],

    insights: [
      "Strength progression can be tracked clearly using historical training data.",
      "Time-series analysis provides a better understanding of performance trends.",
      "Data visualisation makes long-term training progress easier to interpret.",
    ],
  },

  {
    id: 3,
    title: "Expense Analytics",
    category: "Data Visualization",
    description:
      "An interactive financial analysis project designed to explore spending patterns and financial behaviour.",
    technologies: ["Python", "Pandas", "Power BI"],
    slug: "expense-analytics",
   image: "/projects/expense-analytics/dashboard.png",
    links: {
  github: "https://github.com/Tabotjoel/Sales-Performance.git",
  dashboard: "",
  live: "",
},
   year: "2026",

    overview:
      "An expense tracking and analysis project that transforms transaction data into useful financial insights.",

    problem:
      "The goal was to organise expense records and create a dashboard capable of revealing spending patterns and trends.",

    process: [
      "Collected and structured expense records.",
      "Cleaned the dataset using Python.",
      "Analysed spending categories and trends.",
      "Created visualisations using Power BI.",
      "Designed an interactive dashboard for financial monitoring.",
    ],

    insights: [
      "Categorising expenses makes spending behaviour easier to understand.",
      "Visual trends can reveal areas where spending can be better controlled.",
      "Interactive dashboards provide a convenient way to monitor financial activity.",
    ],
  },

  {
    id: 4,
    title: "CleanCrest",
    category: "Web Development",
    description:
      "A business website for a Douala-based cleaning company, showcasing their services and driving bookings online.",
    technologies: ["Next.js", "React", "TypeScript"],
    slug: "cleancrest",
    image: "/projects/cleancrest/homepage.jpg",
    links: {
  github: "",
  dashboard: "",
  live: "https://cleancrest.vercel.app",
},
    year: "2026",

    overview:
      "CleanCrest is a business website built for a professional cleaning company in Douala, Cameroon, offering deep cleaning, commercial cleaning, and pest control services. The site presents their full range of services and gives customers a clear path to booking.",

    problem:
      "The business needed an online presence that matched the quality of their in-person service — one that could clearly communicate their range of services (from deep cleaning to pest control) and make it easy for potential customers to book, all while looking credible and professional to first-time visitors.",

    process: [
      "Designed the site structure and user flow across Home, Services, Pest Control, About, and Contact pages.",
      "Built the frontend using Next.js and React.",
      "Implemented a responsive, mobile-first layout for on-the-go customers.",
      "Structured a clear service catalog covering deep cleaning, commercial cleaning, upholstery care, post-construction cleaning, and pest control.",
      "Optimized the booking flow to guide visitors toward a clear call-to-action.",
    ],

    insights: [
      "A clear service breakdown helps customers quickly find what they need without confusion.",
      "A strong call-to-action on every page significantly improves the likelihood of conversion.",
      "For local service businesses, mobile responsiveness is critical since most visitors browse on their phones.",
    ],
  },
    {
    id: 5,
    title: "Kimil Fabrics",
    category: "Web Development",
    description:
      "A bilingual e-commerce platform for a Canadian made-to-measure fashion atelier, with a custom admin dashboard and integrated Stripe payments.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    slug: "kekia-sally",
    image: "/projects/kekia-sally/kimilsfabrics.jpg",
    links: {
  github: "",
  dashboard: "",
  live: "https://kimilsfabrics.vercel.app",
},
    year: "2026",

    overview:
      "Kekia Sally is a full-stack e-commerce platform built for a Canadian made-to-measure clothing atelier serving both women's and men's wear. The site is fully bilingual (English/French), supports dark and light modes, and gives the business owner a self-serve admin dashboard to manage her entire product catalog and order pipeline without touching code. Currently running in Stripe test mode ahead of full public launch — checkout can be tried end-to-end with a test card, no real charges occur.",

    problem:
      "The business owner is a skilled tailor with no existing online storefront and no technical background, serving customers across Canada's English and French-speaking markets. She needed a professional, brand-consistent site that could showcase made-to-order pieces, accept real payments, and let her independently add new products, upload her own photography, and track orders — all without ever needing a developer for day-to-day updates.",

    process: [
      "Designed a custom brand system (color palette, typography, and a signature visual motif) directly from the client's existing logo.",
      "Built the full storefront with Next.js App Router: home, shop with filtering, product detail pages, cart, and checkout.",
      "Implemented full English/French localization with next-intl, including a persistent locale switcher across every page.",
      "Built a password-protected admin dashboard with product CRUD, image uploads, and order management, backed by Prisma and PostgreSQL.",
      "Integrated Stripe Checkout for CAD payments, including a signed webhook handler to confirm payments and automatically update order status and inventory.",
      "Deployed to Vercel with Vercel Blob for production image storage and Neon for the production database.",
    ],

    insights: [
      "Webhook debugging taught me to verify each layer independently — signature validation, event subscription, and payload delivery are separate failure points that all return misleadingly similar symptoms.",
      "Building an admin experience for a non-technical user means every decision (form labels, upload flow, status labels) has to be judged by 'would she understand this without me explaining it,' not by developer conventions.",
      "Localizing a real business's voice in two languages surfaces details a generic i18n setup misses — tone, formality, and even line-break placement in headlines need deliberate attention per language.",
    ],
  },
  {
    id: 6,
    title: "CribHunt",
    category: "Web Development",
    description:
      "A rental platform concept designed to help users discover and manage accommodation.",
    technologies: ["React", "Firebase", "JavaScript"],
    slug: "cribhunt",
    image: "/projects/cribhunt/homepage.png",
    links: {
  github: "https://github.com/Tabotjoel/mf-cribhunt.git",
  dashboard: "",
  live: "",
},
    year: "2026",

    overview:
      "CribHunt is a rental platform concept focused on helping users discover accommodation through a simple digital experience.",

    problem:
      "The project was designed around the challenge of making accommodation discovery easier and more accessible for users searching for rental properties.",

    process: [
      "Designed the application structure and user experience.",
      "Built the frontend using React.",
      "Integrated Firebase services.",
      "Implemented reusable interface components.",
      "Developed the project as a functional web application.",
    ],

    insights: [
      "A focused user experience can simplify accommodation discovery.",
      "Reusable React components make the application easier to maintain.",
      "Firebase provides useful backend services for rapidly developing an MVP.",
    ],
  },
];