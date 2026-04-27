export interface IndustryChallenge {
  title: string;
  desc: string;
}

export interface IndustryPageData {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  introHeading: string;
  introHighlight: string;
  introText: string;
  quote: string;
  challenges: IndustryChallenge[];
}

export const INDUSTRY_PAGES_DATA: Record<string, IndustryPageData> = {
  bfsi: {
    id: "bfsi",
    heroTitle: "BFSI",
    heroSubtitle: "Banking, Financial Services & Insurance",
    heroDescription: "The biggest trend defining the global financial services industry is digital disruption. Unless banks and other financial institutions tune as per rapid digital transformation, they may get it into high risk of becoming obsolete.",
    heroImage: "/finance service.jpg",
    introHeading: "Embrace the ",
    introHighlight: "Digital Pulse",
    introText: "Keeping up with technology and the market is indispensable for success and survival. Furthermore, revamp of existing systems with developing new platforms with everlasting innovation is becoming an integral part of technology strategy.",
    quote: "\"At Newel, we help financial leaders navigate this disruption, turning technological challenges into competitive advantages through data-driven innovation.\"",
    challenges: [
      {
        title: "Increasing fintech competition",
        desc: "Traditional institutions face pressure from agile startups redefining financial services."
      },
      {
        title: "Purposeful digital transformation",
        desc: "Moving beyond surface-level tech to fundamental organizational change."
      },
      {
        title: "Investing in mobile-first banking",
        desc: "Meeting the modern customer where they are—on their smartphones."
      },
      {
        title: "Tackling current and evolving regulations",
        desc: "Staying compliant in a fast-shifting global regulatory landscape."
      },
      {
        title: "Focusing on CX",
        desc: "Prioritizing customer experience as the primary differentiator."
      }
    ]
  },
  retail: {
    id: "retail",
    heroTitle: "RETAIL",
    heroSubtitle: "Retail & Consumer Goods",
    heroDescription: "Creating meaningful experiences to enhance customer journeys in today's digital world. Retail is undergoing a massive transformation with AI and data-driven insights.",
    heroImage: "/capital market.jpg",
    introHeading: "Redefining the ",
    introHighlight: "Retail Experience",
    introText: "The modern consumer demands hyper-personalized, omnichannel experiences. Retailers must leverage advanced analytics and seamless digital platforms to meet these evolving expectations.",
    quote: "\"We empower retail brands to bridge the gap between physical and digital, creating cohesive journeys that drive loyalty and revenue.\"",
    challenges: [
      {
        title: "Omnichannel Integration",
        desc: "Unifying online and offline channels for a seamless customer experience."
      },
      {
        title: "Supply Chain Optimization",
        desc: "Leveraging predictive analytics to manage inventory and logistics efficiently."
      },
      {
        title: "Hyper-Personalization",
        desc: "Delivering tailored recommendations and marketing at scale."
      },
      {
        title: "E-commerce Scalability",
        desc: "Building robust platforms capable of handling massive traffic spikes."
      },
      {
        title: "Data Privacy & Security",
        desc: "Protecting consumer data while extracting actionable insights."
      }
    ]
  },
  epc: {
    id: "epc",
    heroTitle: "EPC",
    heroSubtitle: "Engineering, Procurement & Construction",
    heroDescription: "Streamlining complex project lifecycles from concept to commissioning. We provide integrated digital platforms that improve collaboration and optimize supply chain procurement.",
    heroImage: "/insurance.jpg",
    introHeading: "Building the ",
    introHighlight: "Digital Foundation",
    introText: "Large-scale EPC projects face inherent complexities in coordination, cost management, and safety. Digital twins and project management platforms are now essential for on-time delivery.",
    quote: "\"Our solutions bring transparency and predictability to complex EPC lifecycles, ensuring safety and efficiency from design to handover.\"",
    challenges: [
      {
        title: "Project Lifecycle Management",
        desc: "Digitizing end-to-end workflows for better visibility and control."
      },
      {
        title: "Supply Chain Resilience",
        desc: "Optimizing procurement processes to mitigate delays and cost overruns."
      },
      {
        title: "Digital Twin Integration",
        desc: "Creating virtual replicas of physical assets for real-time monitoring."
      },
      {
        title: "Safety & Compliance",
        desc: "Automating safety checks and regulatory reporting on-site."
      },
      {
        title: "Workforce Productivity",
        desc: "Empowering field workers with mobile tools and real-time data."
      }
    ]
  },
  "oil-gas": {
    id: "oil-gas",
    heroTitle: "OIL & GAS",
    heroSubtitle: "Energy & Utilities",
    heroDescription: "Driving operational excellence in a high-stakes environment. Our technology solutions help energy companies optimize asset performance and ensure safety compliance.",
    heroImage: "/wealth.jpg",
    introHeading: "Fueling the ",
    introHighlight: "Future of Energy",
    introText: "The energy sector is navigating a dual challenge: optimizing current operations while transitioning to sustainable models. Data-driven automation is the key to unlocking new efficiencies.",
    quote: "\"We help energy leaders harness the power of industrial IoT and predictive analytics to minimize downtime and maximize yield.\"",
    challenges: [
      {
        title: "Predictive Maintenance",
        desc: "Using AI to foresee equipment failures before they occur."
      },
      {
        title: "Asset Optimization",
        desc: "Maximizing the lifespan and output of high-value capital assets."
      },
      {
        title: "Safety & Risk Management",
        desc: "Deploying intelligent systems to monitor hazardous environments."
      },
      {
        title: "Supply Chain Visibility",
        desc: "Tracking logistics and materials across global operations."
      },
      {
        title: "Sustainability Tracking",
        desc: "Monitoring emissions and driving ESG compliance initiatives."
      }
    ]
  },
  infrastructure: {
    id: "infrastructure",
    heroTitle: "INFRASTRUCTURE",
    heroSubtitle: "Smart Cities & Development",
    heroDescription: "Building the backbone of modern society with intelligent digital solutions. We support engineering firms in managing large-scale assets through advanced simulation.",
    heroImage: "/enterprise.jpg",
    introHeading: "Architecting ",
    introHighlight: "Smart Infrastructure",
    introText: "Modern infrastructure demands resilience, sustainability, and connectivity. Digital integration from the planning phase ensures assets are future-proofed for smart city ecosystems.",
    quote: "\"We provide the digital backbone that enables infrastructure projects to be smarter, safer, and more sustainable.\"",
    challenges: [
      {
        title: "Smart Asset Management",
        desc: "Implementing IoT for real-time structural health monitoring."
      },
      {
        title: "Urban Mobility Solutions",
        desc: "Developing platforms for intelligent transportation systems."
      },
      {
        title: "Energy Efficiency",
        desc: "Optimizing power consumption across large-scale facilities."
      },
      {
        title: "BIM Integration",
        desc: "Enhancing Building Information Modeling with cloud collaboration."
      },
      {
        title: "Citizen Engagement",
        desc: "Creating digital portals for public infrastructure interaction."
      }
    ]
  },
  engineering: {
    id: "engineering",
    heroTitle: "ENGINEERING",
    heroSubtitle: "Precision & Innovation",
    heroDescription: "Precision mechanical components and 3D CAD design on high-resolution screens. Powering the next generation of engineering excellence with data-driven insights.",
    heroImage: "/finance service.jpg",
    introHeading: "Engineering the ",
    introHighlight: "Next Generation",
    introText: "The intersection of hardware engineering and digital software is where true innovation happens. We provide the computational tools necessary to accelerate complex R&D.",
    quote: "\"Our platforms empower engineers to simulate, iterate, and innovate faster than ever before.\"",
    challenges: [
      {
        title: "Advanced Simulation",
        desc: "Deploying high-performance computing for complex physical models."
      },
      {
        title: "PLM Optimization",
        desc: "Streamlining Product Lifecycle Management workflows."
      },
      {
        title: "Collaborative Design",
        desc: "Enabling global engineering teams to work on unified CAD models."
      },
      {
        title: "Generative Design AI",
        desc: "Leveraging algorithms to optimize part geometries and materials."
      },
      {
        title: "Quality Assurance",
        desc: "Automating defect detection using computer vision."
      }
    ]
  },
  oem: {
    id: "oem",
    heroTitle: "OEM",
    heroSubtitle: "Original Equipment Manufacturers",
    heroDescription: "Revolutionizing manufacturing through smart, connected ecosystems. We help OEMs integrate IoT and digital twin technology to transform product performance.",
    heroImage: "/capital market.jpg",
    introHeading: "Transforming ",
    introHighlight: "Manufacturing",
    introText: "OEMs are transitioning from selling products to delivering services. Connected equipment and data monetization are creating entirely new revenue streams.",
    quote: "\"We enable OEMs to build connected products that provide actionable intelligence back to the business.\"",
    challenges: [
      {
        title: "IoT Connectivity",
        desc: "Embedding secure, reliable connectivity into industrial equipment."
      },
      {
        title: "Servitization Models",
        desc: "Shifting from CAPEX sales to Equipment-as-a-Service (EaaS)."
      },
      {
        title: "Over-the-Air Updates",
        desc: "Managing remote software updates for global device fleets."
      },
      {
        title: "Telemetry Analytics",
        desc: "Processing massive streams of machine data for insights."
      },
      {
        title: "Smart Factory Integration",
        desc: "Connecting shop floor machines to enterprise IT systems."
      }
    ]
  },
  "heavy-equipment": {
    id: "heavy-equipment",
    heroTitle: "HEAVY EQUIPMENT",
    heroSubtitle: "Industrial Machinery",
    heroDescription: "Large excavators or construction machinery with digital sensor overlays. Powerful, high-tech industrial solutions for the heavy equipment industry.",
    heroImage: "/insurance.jpg",
    introHeading: "Intelligent ",
    introHighlight: "Heavy Machinery",
    introText: "The heavy equipment sector relies on maximizing uptime and operational efficiency in harsh environments. Telematics and AI are redefining fleet management.",
    quote: "\"We bring digital intelligence to the physical world of heavy machinery, maximizing uptime and ROI.\"",
    challenges: [
      {
        title: "Fleet Telematics",
        desc: "Real-time tracking of location, utilization, and fuel consumption."
      },
      {
        title: "Autonomous Operations",
        desc: "Developing software for semi-autonomous machine guidance."
      },
      {
        title: "Condition Monitoring",
        desc: "Deploying edge AI to detect anomalies in hydraulic and engine systems."
      },
      {
        title: "Aftermarket Service",
        desc: "Optimizing spare parts inventory using predictive models."
      },
      {
        title: "Operator Safety",
        desc: "Implementing computer vision for proximity warnings."
      }
    ]
  },
  "chemical-healthcare": {
    id: "chemical-healthcare",
    heroTitle: "CHEMICAL HEALTHCARE",
    heroSubtitle: "Life Sciences & Pharma",
    heroDescription: "Modern laboratory solutions for chemical and healthcare industries. Clean, sterile, and tech-advanced platforms for research and development.",
    heroImage: "/wealth.jpg",
    introHeading: "Accelerating ",
    introHighlight: "Life Sciences",
    introText: "From drug discovery to clinical trials, the life sciences sector requires rigorous data management, strict compliance, and massive computational power.",
    quote: "\"Our solutions accelerate research and ensure compliance in the highly regulated chemical and healthcare sectors.\"",
    challenges: [
      {
        title: "R&D Data Management",
        desc: "Organizing complex genomic and clinical trial datasets securely."
      },
      {
        title: "Regulatory Compliance",
        desc: "Automating validation processes for FDA and EMA standards."
      },
      {
        title: "Digital Therapeutics",
        desc: "Developing software-as-a-medical-device (SaMD) solutions."
      },
      {
        title: "Supply Chain Integrity",
        desc: "Implementing blockchain and IoT for cold chain tracking."
      },
      {
        title: "AI in Drug Discovery",
        desc: "Using machine learning to predict molecular interactions."
      }
    ]
  },
  "it-ites": {
    id: "it-ites",
    heroTitle: "IT/ITEs",
    heroSubtitle: "Information Technology Services",
    heroDescription: "Scaling agility and performance for the digital enterprise. Modernizing legacy infrastructure and deploying robust cloud-native solutions.",
    heroImage: "/enterprise.jpg",
    introHeading: "Empowering the ",
    introHighlight: "Digital Enterprise",
    introText: "IT service providers must operate at peak agility to deliver value to their clients. Automation, AIOps, and modern architecture are essential for scaling operations.",
    quote: "\"We help IT enterprises streamline their internal operations and build resilient, scalable architectures for their clients.\"",
    challenges: [
      {
        title: "AIOps Integration",
        desc: "Automating IT operations and incident resolution using AI."
      },
      {
        title: "Cloud Migration",
        desc: "Executing complex migrations from on-premise to multi-cloud."
      },
      {
        title: "Cybersecurity Posture",
        desc: "Implementing Zero Trust architectures and automated threat response."
      },
      {
        title: "DevSecOps Culture",
        desc: "Embedding security protocols seamlessly into the CI/CD pipeline."
      },
      {
        title: "Digital Workspace",
        desc: "Creating secure, productive environments for distributed teams."
      }
    ]
  },
  semiconductors: {
    id: "semiconductors",
    heroTitle: "SEMICONDUCTORS",
    heroSubtitle: "Microelectronics & Fabrication",
    heroDescription: "Powering the next generation of technological advancement. Accelerating R&D cycles and optimizing yield management in chip manufacturing.",
    heroImage: "/finance service.jpg",
    introHeading: "Optimizing ",
    introHighlight: "Chip Manufacturing",
    introText: "Semiconductor fabrication is one of the most complex manufacturing processes in the world. Yield optimization and defect reduction require nanometer-level precision and massive data analytics.",
    quote: "\"We deploy advanced analytics to maximize yield and accelerate time-to-market in semiconductor fabrication.\"",
    challenges: [
      {
        title: "Yield Optimization",
        desc: "Analyzing massive fabrication datasets to identify and eliminate defects."
      },
      {
        title: "Supply Chain Resilience",
        desc: "Navigating global component shortages through predictive modeling."
      },
      {
        title: "EDA Acceleration",
        desc: "Optimizing cloud infrastructure for Electronic Design Automation workloads."
      },
      {
        title: "Smart Fabrication",
        desc: "Implementing IoT sensors across cleanroom environments."
      },
      {
        title: "IP Security",
        desc: "Protecting highly sensitive chip designs from cyber threats."
      }
    ]
  }
};
