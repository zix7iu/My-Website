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

/** Same year spans as EDUCATION_BLOCKS; labels in Chinese for 经历页. */
export const EDUCATION_BLOCKS_ZH: EducationBlock[] = [
  {
    startYear: 2025,
    endYear: 2026,
    dateRange: "2025 – 2026",
    title: "哥伦比亚大学",
    subtitle: "商业分析硕士",
  },
  {
    startYear: 2023,
    endYear: 2025,
    dateRange: "2023 – 2025",
    title: "加州大学洛杉矶分校（UCLA）",
    subtitle: "数学/经济学学士 & 数据科学与统计学学士",
  },
  {
    startYear: 2021,
    endYear: 2023,
    dateRange: "2021 – 2023",
    title: "加州大学圣塔芭芭拉分校（UCSB）",
    subtitle: "金融数学专业",
  },
];

/** Spine years (newest first). Must match timeline rows. */
export const TIMELINE_YEARS = [2025, 2024, 2023, 2022, 2021] as const;

/** Chinese timeline spine (includes 2026 for current project row). */
export const TIMELINE_YEARS_ZH = [2026, 2025, 2024, 2023, 2022, 2021] as const;

export const EXPERIENCE_SPINE_EN = {
  min: 2021,
  max: 2025,
  yearCount: TIMELINE_YEARS.length,
} as const;

export const EXPERIENCE_SPINE_ZH = {
  min: 2021,
  max: 2026,
  yearCount: TIMELINE_YEARS_ZH.length,
} as const;

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
    right: [    ],
  },
];

/** Chinese experience timeline (reverse-chronological). */
export const EXPERIENCE_TIMELINE_ZH: TimelineRow[] = [
  {
    year: 2026,
    left: [
      {
        dateRange: "2026.01 – 至今",
        title: "企业差旅碳排放分析与策略优化",
        subtitle: "小组项目（组长）",
        achievements: [
          "制定差旅碳排放核心KPI，基于Celonis流程挖掘数据搭建看板监控碳排放数据，支持高排放部门快速定位。",
          "通过多维度下钻分析，识别Top3高排放差旅目的地，为精准减排提供数据支撑。",
          "结合行业对标与内部数据提出“视频会议替代+绿色交通补贴”的减排策略，预计可降低年度差旅成本8%、减少碳排放15%，相关建议已纳入企业ESG年度规划。",
        ],
        skills: ["#ESG", "#流程挖掘", "#数据看板", "#碳排放分析"],
      },
    ],
    right: [],
  },
  {
    year: 2025,
    left: [
      {
        dateRange: "2024.05 – 2025.03",
        title: "基于强化学习的多臂老虎机算法优化研究",
        subtitle: "独立项目",
        achievements: [
          "针对化学实验参数调优中的探索-利用权衡问题，设计并实现基于多臂老虎机的强化学习算法，通过仿真对比不同策略的收敛效率，识别出最优算法，使实验收敛速度提升15%，为实验设计提供高效解决方案。",
          "在Python中构建算法框架，引入随机噪声模拟真实实验环境，验证模型在不同扰动水平下的鲁棒性与稳定性，确保算法在实际场景中的可靠表现。",
          "利用Matplotlib可视化各算法的奖励分布与探索路径，量化不同超参数对算法性能的影响，为策略选择提供数据依据；该经验可迁移至互联网业务中的A/B测试流量分配与动态策略优化，提升实验效率。",
        ],
        skills: ["#强化学习", "#多臂老虎机", "#Python", "#仿真建模"],
      },
    ],
    right: [],
  },
  {
    year: 2024,
    left: [
      {
        dateRange: "2024.09 – 2024.12",
        title: "吸烟对呼吸系统疾病的影响",
        subtitle: "独立项目",
        achievements: [
          "基于NHANES数据库，清洗并整合8万+样本的烟雾暴露与呼吸健康数据，采用神经网络和Datawig库填补缺失值，构建高质量分析数据集，确保数据完整性与可靠性，为后续建模奠定基础。",
          "运用Cox比例风险模型量化吸烟对呼吸疾病的影响，控制年龄、性别、BMI等混杂因素，发现吸烟者患病风险为非吸烟者的1.8倍（p<0.01），为公共卫生决策提供量化依据，相关方法论可迁移至用户流失风险建模或医疗健康产品的人群风险评估。",
          "开发交互式数据看板（Python+Flask+HTML），支持按年龄、地域、吸烟年限等维度下钻分析疾病关联，赋能研究团队快速探索数据、生成洞察，提升分析效率30%以上。",
        ],
        skills: ["#Cox回归", "#数据清洗", "#Python", "#Flask", "#数据可视化"],
      },
      {
        dateRange: "2023.12 – 2024.03",
        title: "数据可视化认知实验平台开发与用户行为分析",
        subtitle: "独立项目",
        achievements: [
          "为探究图形表征对用户认知的影响，独立开发基于Flask的交互式实验平台，集成任务切换与注意力眨眼测试，实现50名受试者行为数据的自动化采集与存储，为后续分析奠定基础。",
          "通过分析受试者散点图绘制行为，运用R语言进行相关性分析，发现重复绘制次数与绘图精度显著正相关（r=0.62），为数据可视化设计中的交互反馈提供心理学实证支持，启示产品设计需考虑用户学习曲线与认知负荷。",
          "基于用户操作日志分析，识别实验流程中的卡点并优化界面引导，使任务完成率提升12%，体现用户行为分析驱动产品迭代的闭环思维，相关经验可应用于互联网产品的用户体验优化。",
        ],
        skills: ["#Flask", "#用户行为分析", "#R语言", "#实验平台开发"],
      },
    ],
    right: [],
  },
  {
    year: 2023,
    left: [
      {
        dateRange: "2023.06 – 2023.09",
        title: "美团",
        subtitle: "商业分析实习生（效能提升组，快驴业务部）",
        achievements: [
          "核心指标监控与异动分析：搭建覆盖招商人效、商家履约、库存周转的核心指标监控看板，负责指标异动归因分析，为管理层周期复盘与经营决策提供数据支撑。",
          "绩效目标设定与数据运营：基于历史数据、季节特征与市场增速，构建XGBoost回归模型预测采购团队月度GMV，结合业务规则优化输出，为8个品类团队制定差异化绩效目标，并产出每日数据战报支持激励赛事执行。",
          "商户补贴实验与策略优化：采用PSM方法设计配送费补贴A/B测试，评估不同策略对新商户激活与留存的影响，通过因果推断确定最优方案，实现新商户周激活率提升6%、补贴成本降低10%。",
        ],
        skills: ["#A/B测试", "#XGBoost", "#SQL", "#数据看板", "#因果推断"],
      },
    ],
    right: [],
  },
  {
    year: 2022,
    left: [
      {
        dateRange: "2022.06 – 2022.09",
        title: "京东",
        subtitle: "商业分析实习生（监管合规组，平台治理部）",
        achievements: [
          "监管动态自动化追踪：基于Python编写爬虫自动化抓取50+监管政策与竞对信源，通过NLP提取关键变更并生成简报，提前预判资质审核收紧趋势，有效规避平台合规风险。",
          "平台治理监控看板搭建：通过SQL构建平台治理核心指标监控看板，监控退款率、投诉量、GMV等指标并配置异常预警，支持多维度下钻分析，助力策略快速迭代、保障大盘稳定。",
          "欺诈风险识别模型优化：为提高模型对商品欺诈识别效率，减少人工干预频率，基于用户行为与投诉日志挖掘5项补充业务特征，提升模型对高风险样本召回率，实现欺诈自动化审核覆盖率提升15%。",
          "优质商家画像与运营策略：针对家居新商家开展同期群分析，提炼高信任商家关键行为特征并搭建质量评估体系，推动优质商家扶持计划落地，带动品类新商家留存率提升12%。",
        ],
        skills: ["#Python", "#爬虫", "#NLP", "#SQL", "#同期群分析", "#风控建模"],
      },
    ],
    right: [],
  },
  {
    year: 2021,
    left: [
      {
        dateRange: "2021.07 – 2021.09",
        title: "北京汇惠佳科技有限公司",
        subtitle: "商业分析实习生",
        achievements: [
          "业务转型数据决策支持：深度参与公司传统批发至抖音直播电商转型，通过日销数据监控与竞品对标定位人气、转化核心问题，以数据支撑运营策略调整，助力直播间月GMV从0突破至30万元。",
          "营销策略玩法优化：针对新用户进间转化率偏低问题，制定低价SKU引流策略，将新用户首次进间购买率提升5pp；在大促期间落地小件赠品+高毛利商品组合策略，提升高毛利商品点击率15%，推动GMV环比增长32%。",
        ],
        skills: ["#直播电商", "#数据监控", "#用户转化", "#策略优化"],
      },
    ],
    right: [],
  },
];
