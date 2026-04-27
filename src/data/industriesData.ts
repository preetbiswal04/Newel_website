export interface SubIndustry {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: string; // Lucide icon name
}

export interface IndustryCategory {
  id: string;
  name: string;
  industries: SubIndustry[];
}

export const INDUSTRIES_DATA: IndustryCategory[] = [
  {
    id: "finance-retail",
    name: "Finance & Retail",
    industries: [
      {
        id: "bfsi",
        slug: "bfsi",
        title: "BFSI",
        tagline: "Digital disruption and technology for banking and insurance.",
        icon: "Shield"
      },
      {
        id: "retail",
        slug: "retail",
        title: "Retail",
        tagline: "Omnichannel commerce and AI-driven customer journeys.",
        icon: "Layers"
      }
    ]
  },
  {
    id: "energy-infra",
    name: "Energy & Infrastructure",
    industries: [
      {
        id: "oil-gas",
        slug: "oil-gas",
        title: "Oil & Gas",
        tagline: "Operational excellence and asset performance optimization.",
        icon: "Zap"
      },
      {
        id: "infrastructure",
        slug: "infrastructure",
        title: "Infrastructure",
        tagline: "Smart city solutions and large-scale asset management.",
        icon: "Network"
      },
      {
        id: "epc",
        slug: "epc",
        title: "EPC",
        tagline: "Integrated digital platforms for project lifecycles.",
        icon: "Briefcase"
      }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    industries: [
      {
        id: "engineering",
        slug: "engineering",
        title: "Engineering",
        tagline: "Precision design and data-driven engineering excellence.",
        icon: "Cpu"
      },
      {
        id: "oem",
        slug: "oem",
        title: "OEM",
        tagline: "Smart ecosystems and digital twin technology for manufacturing.",
        icon: "Database"
      },
      {
        id: "heavy-equipment",
        slug: "heavy-equipment",
        title: "Heavy Equipment",
        tagline: "High-tech industrial solutions for large-scale machinery.",
        icon: "Activity"
      }
    ]
  },
  {
    id: "tech-health",
    name: "Tech & Healthcare",
    industries: [
      {
        id: "chemical-healthcare",
        slug: "chemical-healthcare",
        title: "Chemical Healthcare",
        tagline: "Advanced platforms for research, laboratory, and healthcare.",
        icon: "Activity"
      },
      {
        id: "it-ites",
        slug: "it-ites",
        title: "IT/ITEs",
        tagline: "Modernizing legacy infrastructure and cloud-native solutions.",
        icon: "Zap"
      },
      {
        id: "semiconductors",
        slug: "semiconductors",
        title: "Semiconductors",
        tagline: "Accelerating R&D and yield management in chip manufacturing.",
        icon: "Cpu"
      }
    ]
  }
];
