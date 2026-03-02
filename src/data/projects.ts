export type ProjectType = "website" | "pdf" | "demo";

export type ProjectCategory = "dev" | "ml";

export interface ProjectItem {
  id: number;
  type: ProjectType;
  category: ProjectCategory;
  link: string;
  image: string;
  /** e.g. ["#Angular", "#Node.js"] */
  skills: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    type: "website",
    category: "dev",
    link: "https://travel-quest-log.vercel.app/",
    image: "/project_1_preview.png",
    skills: ["#JavaScript", "#React", "#Creative Apps"],
  },
  {
    id: 2,
    type: "demo",
    category: "dev",
    link: "",
    image: "/project_2_preview.png",
    skills: ["#Angular", "#Node.js", "#Socket.io"],
  },
  {
    id: 3,
    type: "website",
    category: "dev",
    link: "https://respiratory-health-dashboard.vercel.app/",
    image: "/project_3_preview.png",
    skills: ["#Data Viz", "#Dashboard", "#Python"],
  },
  {
    id: 4,
    type: "pdf",
    category: "ml",
    link: "/Bandit_Algorithm.pdf",
    image: "/project_4_preview.png",
    skills: ["#Python", "#Reinforcement Learning", "#Bandit Algorithms"],
  },
  {
    id: 5,
    type: "pdf",
    category: "ml",
    link: "/NYC_restaurant_violation.pdf",
    image: "/project_5_preview.png",
    skills: ["#Python", "#XGBoost", "#Neural Networks", "#SVM"],
  },
  {
    id: 6,
    type: "pdf",
    category: "ml",
    link: "/Classification%20Modeling%20for%20Election%20Prediction.pdf",
    image: "/project_6_preview.png",
    skills: ["#Python", "#Classification", "#Predictive Modeling"],
  },
];
