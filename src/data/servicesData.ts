export interface SubService {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string; // Lucide icon name
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: SubService[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "infrastructure",
    name: "Infrastructure Services",
    services: [
      {
        id: "cloud-ops",
        slug: "cloud-operations",
        title: "Cloud Operations",
        tagline: "Managed hybrid-cloud environments with 99.9% uptime and auto-scaling.",
        icon: "Cloud"
      },
      {
        id: "cyber-sec",
        slug: "cyber-security",
        title: "Cyber Security",
        tagline: "Zero-trust architecture and real-time threat intelligence monitoring.",
        icon: "Shield"
      },
      {
        id: "network-edge",
        slug: "network-edge",
        title: "Network & Edge",
        tagline: "Next-gen software-defined networking and edge computing solutions.",
        icon: "Network"
      }
    ]
  },
  {
    id: "application",
    name: "Application Services",
    services: [
      {
        id: "app-mod",
        slug: "application-modernization",
        title: "Application Modernization",
        tagline: "Transforming legacy monoliths into scalable microservices architectures.",
        icon: "Layers"
      },
      {
        id: "devops",
        slug: "devops-automation",
        title: "DevOps Automation",
        tagline: "Continuous integration and delivery pipelines optimized for speed.",
        icon: "Zap"
      }
    ]
  },
  {
    id: "data-analytics",
    name: "Data & Analytics Services",
    services: [
      {
        id: "data-eng",
        slug: "data-engineering",
        title: "Data Engineering",
        tagline: "Building robust data pipelines and lakehouse architectures.",
        icon: "Database"
      },
      {
        id: "ai-ml",
        slug: "ai-ml-solutions",
        title: "AI & ML Solutions",
        tagline: "Custom machine learning models for predictive business intelligence.",
        icon: "Cpu"
      }
    ]
  },
  {
    id: "business-process",
    name: "Business Process Services",
    services: [
      {
        id: "rpa",
        slug: "rpa-automation",
        title: "RPA Automation",
        tagline: "Automating repetitive tasks with intelligent robotic process agents.",
        icon: "Activity"
      }
    ]
  },
  {
    id: "professional",
    name: "Professional Services",
    services: [
      {
        id: "consulting",
        slug: "it-consulting",
        title: "IT Consulting",
        tagline: "Strategic technology roadmaps aligned with business growth goals.",
        icon: "Briefcase"
      }
    ]
  }
];
