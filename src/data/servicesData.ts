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
    id: "recruitment",
    name: "Staffing & Recruitment",
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
    id: "engineering",
    name: "Software Engineering",
    services: [
      {
        id: "app-dev",
        slug: "application-development",
        title: "Application Development",
        tagline: "Custom-built software solutions designed to solve complex business challenges.",
        icon: "Layers"
      },
      {
        id: "mobile-apps",
        slug: "mobile-applications",
        title: "Mobile Applications",
        tagline: "Engaging and high-performance mobile experiences for iOS and Android.",
        icon: "Zap"
      },
      {
        id: "app-re-eng",
        slug: "application-re-engineering",
        title: "Application Re-engineering",
        tagline: "Revitalizing legacy systems with modern architectures and improved performance.",
        icon: "Layers"
      },
      {
        id: "outsystems",
        slug: "outsystems",
        title: "Outsystems",
        tagline: "Accelerating digital transformation with high-performance low-code development.",
        icon: "Zap"
      }
    ]
  },
  {
    id: "modernization",
    name: "Automation & QA",
    services: [
      {
        id: "quality-assurance",
        slug: "quality-assurance",
        title: "Quality Assurance",
        tagline: "Rigorous testing and quality control to ensure flawless software delivery.",
        icon: "Shield"
      },
      {
        id: "rpa",
        slug: "robotic-process-automation",
        title: "Robotic Process Automation",
        tagline: "Intelligent automation to streamline repetitive tasks and boost productivity.",
        icon: "Activity"
      }
    ]
  },
  {
    id: "cloud-data",
    name: "Cloud & Analytics",
    services: [
      {
        id: "cloud-services",
        slug: "cloud-services",
        title: "Cloud Services",
        tagline: "Scalable, secure, and efficient cloud infrastructure solutions for the enterprise.",
        icon: "Cloud"
      },
      {
        id: "data-analytics",
        slug: "data-analytics",
        title: "Data Analytics",
        tagline: "Unlocking business value through advanced data processing and visualization.",
        icon: "Database"
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
  },
  {
    id: "ai-intelligence",
    name: "AI & Intelligence",
    services: [
      {
        id: "ai-solutions",
        slug: "ai-solutions",
        title: "Artificial Intelligence",
        tagline: "Leveraging AI and machine learning to drive intelligent automation and insights.",
        icon: "Cpu"
      }
    ]
  }
];
