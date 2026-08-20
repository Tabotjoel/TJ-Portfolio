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