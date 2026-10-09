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
  rotatingRoles: ["Data Engineer (Senior Data Associate)", "Senior Data Analyst", "Data Analyst"],
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
    "AI Tools": ["Claude", "Claude Code", "GitHub Copilot", "ChatGPT", "Gemini"],
  } as Record<string, string[]>,
  experience: [
    {
      role: "Data Engineer (Senior Data Associate)",
      company: "Cognizant Technology Solutions",
      period: "Current project",
      location: "Project: Financial Data Load & Position Processing Platform · Financial services",
      highlights: [
        "Develop, analyse, deploy, test and support an enterprise data-load application that stages data from upstream securities-processing systems in replica tables and transforms it into Position and Subledger structures.",
        "Built a separate Commission processing path that creates Commission Positions directly from fee-file attributes, leaving existing fee-processing and suppression logic unchanged.",
        "Traced and documented column-level lineage from source file to replica, transformation, and Position or Subledger tables to support data governance and downstream analytics teams.",
        "Retired obsolete production batch jobs with dependency-ordered delete scripts and rollback scripts, validated in SIT and UAT before release.",
        "Monitor batch processing and find the root cause of failures across application code, infrastructure, missing source files and upstream dependencies.",
        "Manage feature and release branches with cherry-picks, patches, PR reviews and approvals across DEV, SIT, UAT and PROD.",
      ],
    },
    {
      role: "Senior Data Analyst",
      company: "Cognizant Technology Solutions",
      period: "Previous project",
      location: "Project: Data Quality Automation Framework · Client: Wells Fargo",
      highlights: [
        "Built and enhanced a configuration-driven data quality framework where every validation rule is defined in YAML, so new checks need no code changes.",
        "Validated incoming CSV and TXT files before ingestion with Python and pandas, covering file existence, schema, record counts, file size, checksums, nulls, duplicates and min/max thresholds.",
        "Ran SQL-based database checks after loading with SQLAlchemy and pandas, covering row counts, sums and averages, duplicates, nulls and business rules.",
        "Reconciled source files against database records to catch data loss or mismatches during ingestion.",
        "Logged results for auditing, integrated with Splunk and sent email notifications, stopping the pipeline on any failure so bad data never reached downstream systems.",
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
      name: "Financial Data Load & Position Processing Platform",
      description:
        "Current contract in financial services: an enterprise data-load application that stages data from upstream securities-processing systems in replica tables and transforms it into Position and Subledger structures. I built a separate Commission processing path that creates Commission Positions from fee-file attributes without changing existing fee logic, and documented column-level lineage from source file to Position and Subledger for data governance. I also retired obsolete production batch jobs with dependency-ordered delete and rollback scripts, find the root cause of batch failures, and manage release branches across DEV, SIT, UAT and PROD.",
      tags: ["SQL Server", "Python", "PySpark", "Autosys", "Harness", "Data Lineage"],
    },
    {
      name: "Data Quality Automation Framework (DQAF)",
      description:
        "At Cognizant Technology Solutions for Wells Fargo: a configuration-driven framework that validates data before ingestion and after loading, with every rule defined in YAML so new checks need no code changes. File checks cover schema, record counts, checksums, nulls, duplicates and thresholds. Database checks run SQL row-count, aggregate and business-rule validations, then reconcile source files against loaded records. Results are logged, sent to Splunk and emailed, and any failure halts the pipeline so bad data never reaches downstream systems.",
      tags: ["Python", "Pandas", "SQLAlchemy", "YAML", "Splunk", "Data Quality"],
    },
    {
      name: "Ledgerly: GST Invoicing & Inventory",
      description:
        "Personal project: a GST invoicing and inventory platform for Indian businesses. It covers GST-compliant invoices and tax calculation, quotations through to delivery challans, purchase orders, returns and credit notes, stock across multiple godowns, party ledgers and payments, and GST return reports. Bills and purchase orders can be scanned with OCR to fill in forms automatically. A separate marketing website handles pricing, a product tour and demo requests.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "GST", "OCR", "Tailwind CSS"],
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
