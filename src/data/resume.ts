// All site content lives here. Replace the placeholders with details from your resume.
export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url?: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export const resume = {
  name: "Phanesh Yavarna",
  role: "Senior Data Analyst",
  rotatingRoles: ["Senior Data Analyst", "Power BI & SQL Specialist", "Data Quality Automation", "Business Intelligence"],
  availability: "Available to join immediately",
  location: "Hyderabad, India",
  summary:
    "Senior Data Analyst with 7+ years of experience in Business Intelligence, Data Engineering, Advanced Analytics, and Automation Testing across Banking and Enterprise domains. Expertise in SQL, Python, Power BI, and the Azure data ecosystem, with extensive experience designing data validation and reconciliation frameworks, automating trade file processing and API-based validations, and delivering scalable analytics solutions.",
  about:
    "I turn complex datasets into strategic business insights. My work strengthens data integrity, optimizes performance, and improves operational efficiency through structured, automation-driven approaches, whether that's reconciling trade data for a global bank, analysing Azure Marketplace sales for Microsoft, or building Power BI dashboards that shape sales strategy.",
  email: "yavarnaphanesh@gmail.com",
  phone: "",
  links: {
    github: "https://github.com/yavarnaphanesh",
    linkedin: "https://www.linkedin.com/in/phanesh-yavarna",
  },
  stats: [
    { label: "Years experience", value: "7+" },
    { label: "Sales campaign uplift", value: "15%" },
    { label: "Faster stakeholder decisions", value: "20%" },
  ],
  skills: {
    "Database & Querying": [
      "Advanced SQL",
      "Joins",
      "Window Functions",
      "CTEs",
      "Stored Procedures",
      "Dynamic Queries",
      "Star & Snowflake Schemas",
      "Data Warehousing",
    ],
    Programming: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Shell Scripting"],
    Visualization: [
      "Power BI",
      "DAX",
      "Custom Visuals",
      "Drill-Through",
      "Row-Level Security",
      "Tableau",
      "Advanced Excel",
    ],
    "Data Analytics": [
      "Data Cleaning",
      "Data Wrangling",
      "Statistical Modeling",
      "Predictive Analytics",
      "Feature Engineering",
    ],
    "Cloud & Tools": ["Azure", "Google BigQuery", "Power Query", "Jupyter Notebooks", "UNIX"],
    "AI Tools": ["GitHub Copilot", "ChatGPT", "Gemini"],
  } as Record<string, string[]>,
  experience: [
    {
      role: "Senior Data Associate",
      company: "Cognizant Technology Solutions",
      period: "Apr 2025 – Present",
      location: "Project: WMBIS · Client: Wells Fargo",
      highlights: [
        "Designed and implemented end-to-end data quality validation test cases based on business rules, data mapping documents, and transformation logic.",
        "Automated trade file creation, external reference ID generation, and trade data processing using Python.",
        "Built a validation framework comparing trade files against API (GPOS) responses to ensure referential integrity and economic consistency.",
        "Developed automation modules for cancel-trade scenarios and ERAM Client Gateway validations.",
        "Performed schema validation, duplicate checks, referential integrity checks, and downstream reconciliation.",
      ],
    },
    {
      role: "Data Analyst",
      company: "Launch IT Consulting",
      period: "Jun 2024 – Dec 2024",
      location: "Project: One-GDC · Client: Microsoft",
      highlights: [
        "Analyzed product performance and customer behavior on Microsoft Azure Marketplace, identifying high-revenue sectors (AI vs. non-AI), seasonality trends, and top-selling products, resulting in a 15% increase in targeted sales campaigns.",
        "Designed interactive dashboards and reports using Python and PowerPoint, leading to a 20% improvement in stakeholder decision-making efficiency.",
        "Delivered detailed case studies with cross-functional teams, highlighting key metrics, challenges, and opportunities.",
        "Worked in Agile Scrum teams through daily stand-ups, sprint planning, and retrospectives.",
      ],
    },
    {
      role: "Data Analyst",
      company: "Anatek Services Pvt Ltd",
      period: "Jul 2018 – Jun 2024",
      location: "Hyderabad",
      highlights: [
        "Analyzed sales data for pharmaceutical instruments to uncover trends and guide strategic decisions, contributing to significant revenue growth.",
        "Developed interactive dashboards and reports in Power BI and Advanced Excel to visualize sales performance and trends.",
        "Transformed raw data into actionable insights that shaped future sales policies and strategies.",
        "Wrote advanced SQL (functions, stored procedures, CTEs, temp tables) for efficient data retrieval and optimization.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      name: "Trade Data Validation Framework",
      description:
        "For Wells Fargo (WMBIS): a Python framework that automates trade file creation and checks trade files against GPOS API responses for referential integrity and economic consistency, including cancel-trade and ERAM Client Gateway scenarios.",
      tags: ["Python", "API Testing", "Data Quality", "Reconciliation"],
    },
    {
      name: "Azure Marketplace Sales Insights",
      description:
        "For Microsoft (One-GDC): analysis of Azure Marketplace product performance and customer behavior, splitting AI and non-AI revenue and spotting seasonality, which drove a 15% increase in targeted sales campaigns.",
      tags: ["Python", "Analytics", "Dashboards", "Azure"],
    },
    {
      name: "Pharma Instrument Sales Dashboards",
      description:
        "At Anatek Services: Power BI and Excel dashboards backed by optimized SQL that tracked pharmaceutical instrument sales and shaped future sales policies.",
      tags: ["Power BI", "SQL", "DAX", "Excel"],
    },
  ] as Project[],
  education: [
    {
      degree: "B.Tech, Electronics and Communication Engineering",
      school: "Tirumala Engineering College (JNTUH)",
      period: "Graduated Sep 2019",
    },
  ] as Education[],
  certifications: [
    "Data Analytics Internship Plan · IBM",
    "Foundations: Data, Data, Everywhere · Google · Mar 2023",
    "Ask Questions to Make Data-Driven Decisions · Google · Apr 2023",
    "Data Science & Analytics using Machine Learning · CloudyML · Feb 2023",
  ],
};
