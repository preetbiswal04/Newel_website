export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  innerTitle?: string;
  client?: string;
  industry?: string;
  teaser: string;
  image: string;
  video?: string;
  location: string;
  year?: string;
  services?: string[];
  overview: string;
  subtitle: string;
  input: string;
  reasoning: string;
  outcomes: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    slug: "qrc-classification-ai",
    title: "QRC CLASSIFICATION",
    innerTitle: "AI-Driven QRC Classification at Scale",
    teaser: "Reducing Review Time and Making High-Risk Issues Instantly Visible through automated AI classification.",
    image: "/Screenshot 2026-04-23 150653.png",
    video: "https://www.youtube.com/watch?v=Ivrky_y7LGg",
    location: "Mumbai, India",
    overview: "Partnered with a major legal institution to automate Quality, Risk, and Compliance (QRC) using AI at scale.",
    subtitle: "AI-Driven QRC Classification at Scale:",
    input: "Manual, sample-based auditing caused classification gaps, inconsistent categorization, and regulatory vulnerabilities as data volumes grew.",
    reasoning: "Deployed an AI Classification Engine scanning 100% of interactions, enabling continuous oversight and automated transcription.",
    outcomes: "Increased accuracy, reduced manual effort, and strengthened RBI compliance through a scalable, transparent audit foundation."
  },

  {
    id: "2",
    slug: "ai-rpa-loan",
    title: "AI  RPA  LOAN",
    innerTitle: "Revolutionizing Loan Servicing Through Intelligent AI-Led Operations",
    client: "Sterling Capital",
    industry: "Finance",
    teaser: "Implementing reinforcement learning models to reduce execution latency and improve alpha generation.",
    image: "/Screenshot 2026-04-27 103441.png",
    video: "/14571398_1920_1080_30fps.mp4",
    location: "Mumbai, India",
    overview: "AI transformed manual loan servicing into an automated, intelligent system by handling validations, reconciliations, and exceptions in real time.",
    subtitle: "Optimizing high-frequency execution and unlocking alpha via Deep Reinforcement Learning for institutional asset managers.",
    input: "Loan servicing operations were heavily dependent on manual validations across EMI files, Statements of Account (SOA), reconciliation reports, and multiple servicing systems, creating delays, errors, and high operational overhead. Large volumes of borrower data, fragmenteprocesses, and exception- heavy workflows made it difficult to detect discrepancies early,maintain audit readiness, and scale servicing operations efficiently.The client needed to movbeyond traditional RPA - led task automation toward a more intelligent, AI - driven servicing model.",
    reasoning: "An AI-powered loan servicing solution was implemented, combining intelligent documen processing, automated validation workflows, and exception analytics to transform the servicin lifecycle.AI models analyzed EMI schedules, reconciliations, penalty charges, and servicin exceptions in real time, while automation workflows orchestrated validations, surfaced anomalie with reason codes, and generated structured outputs for review.Instead of rule- based RPA alone, the solution introduced cognitive automation that could prioritize exceptions, reduce huma intervention, and improve decision - making across loan operations.",
    outcomes: "The transformation significantly reduced servicing turnaround times, improved validation accuracy, and minimized manual effort across high- volume servicing workflows.Early discrepancy detection, faster audit readiness, and standardized exception handling improved operational control while making the process more scalable and resilient.The client moved from labor - intensive back - office servicing to an intelligent AI - assisted operating model that delivered efficiency gains, lower risk exposure, and stronger service reliability."
  },
  {
    id: "3",
    slug: "ai-aws-transformation",
    title: "AI AWS TRANSFORMATION",
    innerTitle: "Transforming Assurance Monitoring with AI-Powered Early Warning & Risk Intelligence",
    client: "OmniRetail",
    industry: "Logistics",
    teaser: "A multi-agent system designed to optimize inventory levels and reduce waste using real-time IoT.",
    image: "/Screenshot 2026-04-27 103631.png",
    video: "/8348732-uhd_3840_2160_25fps.mp4",
    location: "London, UK",
    overview: "An AI-powered Early Warning System replaced manual assurance reviews with real-time risk monitoring and dynamic, data-driven scoring.",
    subtitle: "Orchestrating planetary-scale logistics through predictive 'Digital Twin' modeling and IoT-driven demand forecasting.",
    input: "The assurance process relied on manual Excel-based reviews and static risk scoring methods that oftenfailed to reflect true risk exposure. There was limited visibility into governance issues, no unifieddashboard for monitoring risks in real time, and inadequate prioritization due to lack of inherent, control,and residual risk views. This led to audit gaps, delayed interventions, and difficulty identifying emergingrisks early.",
    reasoning: "An AI-powered Early Warning System (EWS) was implemented with a real-time risk dashboard tha continuously monitors governance indicators and surfaces potential issues proactively.The solution introduced a three- lens risk evaluation model—Inherent, Control, and Residual Risk—combined with AI  driven weighted scoring, checkpoint mapping, and built -in validation to assess true exposure.Intelligent analytics and automated risk scoring transformed manual assurance reviews into a dynamic, data - drive surveillance framework.",
    outcomes: "The solution enabled automated real-time risk scoring, early detection of governance issues, and a transparent dashboard view for faster decision-making. The three-lens risk model improved prioritization of critical controls, reduced manual effort, and strengthened validation and audit readiness. The client moved from fragmented monitoring to an AI-driven assurance index that delivered stronger risk visibility, proactive governance oversight, and better control effectiveness."
  },
  {
    id: "4",
    slug: "aws-cloud",
    title: "AWS CLOUD",
    innerTitle: "Modernizing Legacy Applications with Cloud-Native AWS Transformation",
    client: "BioGenix Lab",
    industry: "Healthcare",
    teaser: "Leveraging generative models to identify novel protein-folding patterns and accelerate clinical trials.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    location: "San Francisco, USA",
    overview: "The legacy monolithic system was transformed into a scalable, cloud-native architecture on AWS using microservices, containers, and automated deployments.",
    subtitle: "Revolutionizing drug discovery through generative intelligence and high-fidelity molecular modeling.",
    input: "The client operated on a monolithic legacy architecture built on tightly coupled components, making releases slow, scaling difficult, and infrastructure costly to maintain.Any application change introduced downstream risks due to the unified codebase and single- server deployment model, while legacy infrastructure constrained performance, resilience, and security.The client needed to transition from rigid legacy systems to a scalable, cloud - native architecture capable of supporting growth and faster innovation.",
    reasoning: "A cloud modernization program was executed on AWS to rearchitect the application into a modular, cloud-native platform. The solution migrated the legacy stack to decoupled microservices using modern application frameworks, containerized workloads on Amazon EKS, automated deployments through CI/CD pipelines, and modernized the database layer using Amazon RDS with PostgreSQL. Security and scalability were further enhanced through managed AWS services, auto-scaling, container orchestration, and cloud-native controls, enabling a resilient and future-ready application foundation.",
    outcomes: "The transformation delivered faster release cycles, improved application performance and reliability, an significantly enhanced scalability and security.The client moved from a high- maintenance monolithic system to a modern cloud - native architecture optimized for agility, cost efficiency, and growth.The AWS - led modernization established a scalable digital foundation that improved operational resilience while accelerating innovation."
  },
  {
    id: "5",
    slug: "Infra-case-study",
    title: "INFRASTRUCTURE CASE STUDY",
    innerTitle: "Transforming Infrastructure Operations with Intelligent Managed Services",
    client: "EcoGrid",
    industry: "Energy",
    teaser: "Predicting demand-supply gaps in real-time to stabilize renewable energy integration into national grids.",
    image: "https://images.unsplash.com/photo-1466611653911-954ffea113ad?auto=format&fit=crop&q=80&w=1200",
    location: "Berlin, Germany",
    overview: "Built a predictive balancing system for EcoGrid to handle the intermittency of wind and solar power across their national infrastructure.",
    subtitle: "Stabilizing the future of energy through predictive AI and real-time grid orchestration.",
    input: "The client managed a large and diverse infrastructure estate spanning operating systems, databases, and mission- critical environments through internal IT teams, creating operational strain and fragmented support.Resource dependency, skill gaps, incident management overhead, and scaling challenges made it difficult to sustain performance, governance, and round - the - clock support.The client needed a more resilient managed services model to improve infrastructure reliability while reducing operational burden.",
    reasoning: "An intelligent Infrastructure Managed Services model was implemented, combining proactive monitoring, automation- led operations, and AI - assisted incident management across servers, databases, and core infrastructure layers.The solution introduced dedicated technology support, predictive monitoring for performance and issue detection, automated remediation workflows, and governance - driven service management to strengthen uptime and operational control.By augmenting traditional managed services with intelligent automation and analytics, the model improved support responsiveness while enabling scalable and cost - efficient infrastructure operations.",
    outcomes: "The transformation improved incident and problem management, enhanced server performance, and delivered more reliable, scalable support across the infrastructure landscape. Proactive monitoring and automation reduced operational effort, improved service continuity, and provided access to stronger technical expertise at lower cost. The client moved from reactive infrastructure management to a more intelligent, managed operating model built for stability, efficiency, and long-term resilience."
  },
  {
    id: "6",
    slug: "customer-retention-telecom",
    title: "Deep Learning for Real-Time Churn Prediction and Proactive Retention",
    client: "GlobalTel",
    industry: "Telecom",
    teaser: "Analyzing petabytes of user interaction data to predict churn with high precision before it happens.",
    image: "https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80&w=1200",
    location: "London, UK",
    overview: "Developed a proactive retention engine for GlobalTel that identifies dissatisfied customers and automates personalized offers.",
    subtitle: "Protecting market share through deep learning and automated customer journey optimization.",
    input: "GlobalTel faced a 15% annual churn rate. Traditional rule-based alerts were too late, often triggering after a customer had already decided to switch.",
    reasoning: "Our team built a recurrent neural network (RNN) that analyzes behavioral sequences in real-time, assigning a 'churn probability' score to every user daily.",
    outcomes: "Reduced churn by 22% in the first year, resulting in an estimated $120M in retained annual revenue."
  }
];

export const getCaseStudyBySlug = (slug: string) => {
  return CASE_STUDIES.find((cs) => cs.slug.toLowerCase() === slug.toLowerCase());
};
