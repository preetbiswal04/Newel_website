export interface SubService {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string; // Lucide icon name
  subItems?: { title: string; slug: string }[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: SubService[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "ai-data-solutions",
    name: "AI And Data Solutions",
    services: [
      {
        id: "ai-strategy",
        slug: "ai-strategy-consulting",
        title: "AI Strategy & Consulting",
        tagline: "Strategic roadmap and advisory to unlock the full potential of AI in your business.",
        icon: "Briefcase"
      },
      {
        id: "data-engineering-ai",
        slug: "data-engineering-for-ai",
        title: "Data Engineering for AI",
        tagline: "Building robust data pipelines and architectures to fuel your AI models.",
        icon: "Database"
      },
      {
        id: "data-analysis",
        slug: "data-analysis",
        title: "Data Analysis",
        tagline: "Deep insights and predictive analytics to drive data-informed decision making.",
        icon: "Activity"
      },
      {
        id: "ml-solutions",
        slug: "machine-learning-solutions",
        title: "Machine Learning Solutions",
        tagline: "Custom ML models and algorithms designed to solve specific business challenges.",
        icon: "Cpu"
      },
      {
        id: "generative-ai",
        slug: "generative-ai",
        title: "Generative AI (Chatbots, Copilots, Knowledge Assistants)",
        tagline: "Harnessing the power of LLMs to create intelligent assistants and creative tools.",
        icon: "Layers"
      }
    ]
  },
  {
    id: "software-development",
    name: "Software Development",
    services: [
      {
        id: "web-dev",
        slug: "website-development",
        title: "Website Development",
        tagline: "Modern, responsive, and high-performance websites built for business growth.",
        icon: "Network"
      },
      {
        id: "app-dev",
        slug: "application-development",
        title: "App Development",
        tagline: "Custom-built software solutions designed to solve complex business challenges.",
        icon: "Layers"
      },
      {
        id: "app-re-eng",
        slug: "application-re-engineering",
        title: "App Re-Engineering",
        tagline: "Revitalizing legacy systems with modern architectures and improved performance.",
        icon: "Layers"
      },
      {
        id: "qa-services",
        slug: "qa-services",
        title: "QA Services",
        tagline: "Rigorous testing and quality control to ensure flawless software delivery.",
        icon: "Shield"
      }
    ]
  },
  {
    id: "rpa",
    name: "RPA",
    services: [
      {
        id: "uipath",
        slug: "uipath-automation",
        title: "UiPath Automation",
        tagline: "Enterprise-grade automation using the world's leading RPA platform.",
        icon: "Activity"
      },
      {
        id: "power-automate",
        slug: "power-automate",
        title: "Power Automate",
        tagline: "Seamless workflow automation integrated with the Microsoft ecosystem.",
        icon: "Zap"
      },
      {
        id: "bot-solutions",
        slug: "bot-solutions",
        title: "Bot Solutions (Alerts, MIS, Data Entry, EOD, Recon)",
        tagline: "Specialized bots to handle critical business operations and reporting.",
        icon: "Cpu"
      }
    ]
  },
  {
    id: "cloud",
    name: "Cloud",
    services: [
      {
        id: "cloud-strategy",
        slug: "cloud-strategy-migration",
        title: "Cloud Strategy & Migration",
        tagline: "Expert guidance and execution for a seamless transition to the cloud.",
        icon: "Cloud"
      },
      {
        id: "managed-services",
        slug: "managed-services-cost-optimization",
        title: "Managed Services & Cost Optimization",
        tagline: "Maximizing ROI through efficient cloud management and cost reduction.",
        icon: "Activity"
      },
      {
        id: "microsoft-aws",
        slug: "microsoft-workloads-on-aws",
        title: "Microsoft Workloads on AWS",
        tagline: "Optimized performance and reliability for Microsoft applications in the AWS cloud.",
        icon: "Cpu"
      },
      {
        id: "aws-services",
        slug: "aws-services",
        title: "AWS Services",
        tagline: "Scalable and secure AWS infrastructure solutions tailored for your business.",
        icon: "Cloud"
      },
      {
        id: "app-modernization",
        slug: "app-modernization",
        title: "App Modernisation",
        tagline: "Transforming monolithic applications into cloud-native microservices.",
        icon: "Layers"
      },
      {
        id: "security-compliance",
        slug: "security-compliance",
        title: "Security & Compliance",
        tagline: "Ensuring your cloud infrastructure meets the highest security standards.",
        icon: "Shield"
      }
    ]
  },
  {
    id: "os",
    name: "OS",
    services: [
      {
        id: "os-managed",
        slug: "os-managed-services-administration",
        title: "Managed Services & Administration",
        tagline: "End-to-end administration and management of enterprise operating systems.",
        icon: "Cpu"
      },
      {
        id: "os-ha",
        slug: "os-high-availability-dr",
        title: "High Availability & DR",
        tagline: "Ensuring continuous operation and disaster recovery for critical OS environments.",
        icon: "Activity"
      },
      {
        id: "os-security",
        slug: "os-security-hardening-compliance",
        title: "Security Hardening & Compliance",
        tagline: "Rigorous security measures to protect your OS from modern threats.",
        icon: "Shield"
      },
      {
        id: "os-performance",
        slug: "os-performance-automation",
        title: "Performance & Automation",
        tagline: "Optimizing OS performance through intelligent automation and tuning.",
        icon: "Zap"
      }
    ]
  },
  {
    id: "database",
    name: "Database",
    services: [
      {
        id: "db-managed",
        slug: "db-managed-services-administration",
        title: "Managed Services & Administration",
        tagline: "Professional database administration and maintenance for peak performance.",
        icon: "Database"
      },
      {
        id: "db-ha",
        slug: "db-ha-dr-backup-recovery",
        title: "HA & DR / Backup & Recovery",
        tagline: "Comprehensive data protection and recovery solutions for enterprise databases.",
        icon: "Shield"
      },
      {
        id: "db-performance",
        slug: "db-performance-tuning-security",
        title: "Performance Tuning & Security",
        tagline: "Expert tuning and security hardening to optimize database speed and safety.",
        icon: "Zap"
      },
      {
        id: "db-migration",
        slug: "db-migration-consolidation",
        title: "Migration & Consolidation",
        tagline: "Seamless database migration and infrastructure consolidation services.",
        icon: "Network"
      }
    ]
  },
  {
    id: "middleware",
    name: "Middleware",
    services: [
      {
        id: "mw-managed",
        slug: "mw-managed-services-administration",
        title: "Managed Services & Administration",
        tagline: "Expert management of middleware components to ensure smooth application flow.",
        icon: "Layers"
      },
      {
        id: "mw-ha",
        slug: "mw-ha-dr-backup-recovery",
        title: "HA & DR / Backup & Recovery",
        tagline: "High availability and recovery solutions for critical middleware layers.",
        icon: "Activity"
      },
      {
        id: "mw-performance",
        slug: "mw-performance-tuning-security",
        title: "Performance Tuning & Security",
        tagline: "Optimizing middleware performance and security for enterprise applications.",
        icon: "Zap"
      },
      {
        id: "mw-upgrades",
        slug: "mw-upgrades-migration-automation",
        title: "Upgrades, Migration & Automation",
        tagline: "Managing middleware lifecycles through automated upgrades and migrations.",
        icon: "Network"
      }
    ]
  },
  {
    id: "it-staffing",
    name: "IT Staff Augmentation",
    services: [
      {
        id: "contract-staffing",
        slug: "contract-staffing",
        title: "Contract Staffing / Third Party Hiring",
        tagline: "Flexible and scalable contract staffing solutions tailored to your project needs.",
        icon: "Briefcase"
      },
      {
        id: "staff-augmentation",
        slug: "staff-augmentation",
        title: "Staff Augmentation Support services",
        tagline: "Scale your technical teams quickly with our expert specialized IT professionals.",
        icon: "Users"
      },
      {
        id: "executive-search",
        slug: "executive-search",
        title: "Executive Search / Permanent Hiring",
        tagline: "Strategic recruitment solutions to find and hire the best permanent talent for your organization.",
        icon: "Briefcase"
      }
    ]
  },
  {
    id: "specialized",
    name: "Specialized Media",
    services: [
      {
        id: "dooh",
        slug: "dooh",
        title: "DOOH",
        tagline: "Innovative Digital Out-of-Home media solutions for modern brand engagement.",
        icon: "Network"
      }
    ]
  }
];
