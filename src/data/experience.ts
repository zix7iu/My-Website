export interface TimelineItem {
  dateRange: string;
  title: string;
  subtitle?: string;
  /** Left-side only: 2–3 accomplishment bullets when card is expanded */
  achievements?: string[];
  /** Left-side only: skill tags shown as #Tag when card is expanded */
  skills?: string[];
}

export interface TimelineRow {
  year: number;
  left: TimelineItem[];
  right: TimelineItem[];
}

/** Education entries as continuous blocks (startYear/endYear for vertical span). */
export interface EducationBlock {
  startYear: number;
  endYear: number;
  dateRange: string;
  title: string;
  subtitle?: string;
}

export const EDUCATION_BLOCKS: EducationBlock[] = [
  { startYear: 2025, endYear: 2026, dateRange: "2025 – 2026", title: "Columbia University", subtitle: "M.S. in Business Analytics" },
  { startYear: 2023, endYear: 2025, dateRange: "2023 – 2025", title: "UCLA", subtitle: "B.S. in Mathematics/Economics & B.S. in Data Science & Statistics" },
  { startYear: 2021, endYear: 2023, dateRange: "2021 – 2023", title: "UC Santa Barbara", subtitle: "Major in Financial Mathematics" },
];

/** Spine years (newest first). Must match timeline rows. */
export const TIMELINE_YEARS = [2025, 2024, 2023, 2022, 2021] as const;

/** Reverse-chronological (newest first). Left = Intern & Research, Right = Education (use EDUCATION_BLOCKS for right-side rendering). */
export const EXPERIENCE_TIMELINE: TimelineRow[] = [
  {
    year: 2025,
    left: [
      {
        dateRange: "2024.4 – 2025.3",
        title: "Research Assistant, UCLA Visual Intelligence Lab",
        subtitle: "Prof. Tao Gao",
        achievements: [
          "Developed a real-time interactive web application for multiplayer game in Angular with Python, TypeScript, JavaScript, and HTML, and modified the application to adapt to varying numbers of users and various trials.",
          "Prepared a game tutorial for a real-time multi-player hunting game, incorporating video tutorials and simulations to demonstrate strategies for teaming up with human and AI hunters to pursue moving prey in a 2D environment.",
          "Deployed the web application on a public server and assisted in collecting movement trajectory data from users.",
          "Prepared slides and presented comparative analyses on different cooperation strategies in multi-agent systems, highlighting the team dynamics and reward of the 'Imagine We' model over traditional Reward Sharing model.",
        ],
        skills: ["#Angular", "#Full-stack Development", "#Python", "Social Media Marketing"],
      },
    ],
    right: [],
  },
  {
    year: 2024,
    left: [
      {
        dateRange: "2024.5 – 2024.12",
        title: "Research Assistant, UCLA SCALE Lab",
        subtitle: "Surpervised by Prof. Xiaowu Dai",
        achievements: [
          "Defined classes for regret algorithms in Python and implemented reinforcement learning bandit models in chemistry reaction applications to optimize experimental proposals and identify optimal conditions for chemical reactions.",
          "Visualized the reward of each model with Matplotlib in python, compared the exploration efficiency among various bandit algorithms with different parameters, and identified the optimal model.",
          "Conducted simulation to introduce experiment noises to the current dataset with NumPy in Python, and validated the performance of optimal bandit algorithms with various random noise level.",
        ],
        skills: ["#BanditAlgorithms", "#Python", "#Statistics", "#ReinforcementLearning"],
      },
      {
        dateRange: "2024.9 – 2024.12",
        title: "Independent Researcher, UCLA",
        subtitle: "Surpervised by Prof. Vivian Lew",
        achievements: [
          "Acquired and aggregated smoke exposure and respiratory health data from National Health and Nutrition Examination dataset, excluded rows and imputed missing values with Deep Neural Network and Datawig library in Python.",
          "Conducted cox regression analysis to calculate multivariable hazard ratios and confidence intervals for active and passive smokers, compared with a reference group with non-smokers, identifying an increased risk of asthma for smokers.",
          "Built interactive dashboards with Plotly in Python and Microsoft Power BI, allowing users to visually explore the impact of tobacco smoke on respiratory diseases.",
        ],
        skills: ["#DataAnalysis", "#Python", "#Node.js", "#WebDevelopment"],
      },
      {
        dateRange: "2023.12 – 2024.3",
        title: "Research Assistant, UCLA Psychology Lab",
        subtitle: "Surpervised by Prof. Lucy Cui",
        achievements: [
          "Developed interactive web applications for experiments about statistical information processing with Flask in Python and HTML, including tests for task-switching and attentional blink, featuring automate data collection.",
          "Coded scatterplot drawing behaviors for 50 subjects, including binary variables repeated drawing and positive slope, and analyzed variable correlations between statistical coursework and drawing accuracy with R.",
        ],
        skills: ["#BehavioralResearch", "#DataCollection", "#Python", "#Flask", "#HTML", "#CSS"],
      },
    ],
    right: [],
  },
  {
    year: 2023,
    left: [
      {
        dateRange: "2023.6 – 2023.9",
        title: "Meituan Dianping",
        subtitle: "Product Data Scientist Intern",
        achievements: [
          "Partnered with product managers and operations to identify opportunities across 16 provinces to grow active merchants and consumer transactions in Meituan’s three-sided marketplace (merchants × deliveries × consumers).",
          "Designed and analyzed an A/B test on delivery-fee subsidy rules to balance merchant acquisition vs. margin protection; results drove a +6% lift in new-merchant activation and informed Q3 pricing roadmap for low-density markets.",
          "Identified that merchant sensitivity to delivery-fee changes varied by order volume and location density, prompting a segmented pricing iteration that clawed back revenue losses from the initial subsidy design.",
          "Conducted root-cause analysis on high fulfillment costs and developed a warehouse-site optimization model (K-means) to recommend new micro-hub locations, cutting delivery time 12% and logistics cost 8%.",
          "Partnered cross-functionally with Strategy, Ops, and Finance to align trade-offs between cost savings and merchant experience; results informed Q4 investment roadmap and guided site selection for 20 + new fulfillment hubs.",
          "Built automated dashboards in SQL + Python (Pandas, Plotly) to track merchant GMV, order frequency, and fulfillment KPIs, enabling continuous experiment monitoring and data-driven decision reviews.",
        ],
        skills: ["#AB Testing", "#SQL", "#Python", "#GrowthHacking"],
      },
    ],
    right: [],
  },
  {
    year: 2022,
    left: [
      {
        dateRange: "2022.6 – 2022.9",
        title: "JD.com",
        subtitle: "Data Scientist Intern",
        achievements: [
          "Designed a pair-market test to evaluate stricter fraud-enforcement thresholds; while short-term traffic to store pages dipped, buyer satisfaction and repeat purchase rate rose, validating the long-term ROI of trust.",
          "Quantified risk-coverage vs. revenue trade-offs using cohort and retention analysis, identifying an inflection point where stricter enforcement removed 15% of fraudulent listings without meaningful loss in gross merchandise volume, strengthened leadership decisions to prioritize long-term trust over short-term GMV.",
          "Built an ecosystem-impact dashboard to monitor post-launch trust metrics, including refund rate, complaint volume, buyer churn, and GMV recovery, providing ongoing visibility into marketplace health after enforcement rollout.",
          "Automated the manual fraud-review process by developing an ML-based detection pipeline, using labeled complaint and behavioral data to score listings by fraud risk; expanded detection coverage from reactive reports to proactive screening, cutting review latency by 70%.",
        ],
        skills: ["#Python", "#Machine Learning", "#Pair Market Test", "#Data Visualization", "#Cohort Analysis"],
      },
    ],
    right: [],
  },
  {
    year: 2021,
    left: [
      {
        dateRange: "2021.7 – 2021.9",
        title: "Beijing Huihuijia Technology",
        subtitle: "Data Analyst Intern",
        achievements: [
          "Supported the company’s transition from wholesale to TikTok livestream commerce, focusing on improving revenue, conversion rate, repeat purchase, and inventory turnover for home décor products such as carpets and cushions.",
          "Proposed and piloted a loss-leader pricing strategy, introducing low-cost entry SKUs (door mats, cushions) to acquire new users and build purchase trust; subsequent cohorts showed higher repeat purchase and average order volume.",
          "Designed and evaluated livestream studio redesign experiments, shifting backgrounds from plain studios to bedroom settings to increase contextual relevance; achieved measurable conversion lift and viewer engagement improvement.",
          "Tested a “lottery + bundle” mechanic, using small giveaway items and bundled discounts to gamify engagement; improved session retention and conversion on higher-margin products as viewers stayed longer in-stream.",
        ],
        skills: ["#Project Management", "#Video Editing", "#Market Analysis", "Social Media Marketing"],
      },
    ],
    right: [],
  },
];
