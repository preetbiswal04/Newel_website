export interface ProcessStep {
  label: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;            // short card description
  heroDescription: string;    // full hero paragraph
  icon: string;               // emoji or lucide name key
  whatWeOffer: string[];      // bullet list
  processSteps: ProcessStep[]; // 6-step methodology
  techStack: { category: string; tools: string[] }[];
}

export const SERVICES: ServiceItem[] = [
  // ─── 1. Staffing & Recruiting ────────────────────────────────────────────
  {
    slug: "staffing-recruiting",
    title: "Staffing and Recruiting",
    tagline:
      "Finding the right talent is the cornerstone of every successful organisation. We connect businesses with skilled professionals across technology, engineering, and corporate domains.",
    heroDescription:
      "At Newel Technologies, we understand that people are the most valuable asset of any business. Our Staffing and Recruiting practice is built on deep industry expertise and an extensive talent network, enabling us to source, screen, and deliver the right candidates — fast. Whether you need permanent hires, contract professionals, or executive leaders, we tailor every engagement to your unique culture and requirements.",
    icon: "👥",
    whatWeOffer: [
      "Executive Search & C-Suite Hiring",
      "Permanent Placement Services",
      "Contract & Third-Party Staffing",
      "Bulk / Volume Hiring Programmes",
      "Campus Recruitment Drives",
      "Diversity & Inclusion Hiring",
      "Technical Assessment & Shortlisting",
    ],
    processSteps: [
      { label: "IDENTIFY", description: "We begin by deeply understanding your job requirements, culture, and long-term goals." },
      { label: "SOURCE", description: "Leveraging our extensive network and advanced sourcing tools to find the best-fit candidates." },
      { label: "SCREEN", description: "Rigorous multi-stage screening — technical, behavioural, and cultural fit assessments." },
      { label: "INTERVIEW", description: "Coordinating structured interview rounds and providing real-time feedback loops." },
      { label: "PLACE", description: "Finalising offers, negotiations, and paperwork to ensure a smooth placement." },
      { label: "ONBOARD", description: "Post-joining support and follow-ups to ensure successful long-term retention." },
    ],
    techStack: [
      { category: "Sourcing Platforms", tools: ["LinkedIn Recruiter", "Naukri", "Indeed", "Monster"] },
      { category: "Assessment Tools", tools: ["HackerRank", "Codility", "Mercer Mettl", "AMCAT"] },
      { category: "ATS & HRMS", tools: ["Workday", "SAP SuccessFactors", "Zoho Recruit", "Greenhouse"] },
    ],
  },

  // ─── 2. Application Development ────────────────────────────────────────
  {
    slug: "application-development",
    title: "Application Development",
    tagline:
      "In this technology era, applications have brought convenience in our lives. Applications are an effective way to connect your potential clients and engage them in your service offerings.",
    heroDescription:
      "Application development plays a very vital role for any business that strives to gain recognition and significant market share. At Newel Technologies, we design, build, and deploy robust, scalable, and secure enterprise applications that accelerate your digital transformation journey. Our full-stack development teams combine modern architectures with agile delivery to bring your vision to life — on time and within budget.",
    icon: "💻",
    whatWeOffer: [
      "Custom Enterprise Application Development",
      "Web Application Development (React, Angular, Vue)",
      "API Design, Development & Integration",
      "Microservices & Event-Driven Architecture",
      "SharePoint & Microsoft 365 Solutions",
      "Legacy System Modernisation",
      "Ongoing Support & Application Maintenance",
    ],
    processSteps: [
      { label: "IDEA", description: "Analyse requirements through in-depth research using brilliant discovery tools." },
      { label: "SKETCH", description: "Draft the design and architecture to check feasibility before committing resources." },
      { label: "DESIGN", description: "After the feasibility test, a final technical and UI/UX design is prepared using smart tools." },
      { label: "DEVELOP", description: "Our development team builds the solution according to the approved design and sprint plan." },
      { label: "TEST", description: "Every component is rigorously tested to ensure the solution fully meets requirements." },
      { label: "CELEBRATE", description: "We deliver the solution and assist our clients in controlling, administering, and scaling it." },
    ],
    techStack: [
      { category: "MS Technologies", tools: ["Angular", "Node.js", "React", "MSSQL", "Oracle", "MySQL", "PostgreSQL", "Event Sourcing", "SharePoint"] },
      { category: "Testing Frameworks", tools: ["NUnit", "XUnit", "Mocha", "Jest", "Chai", "Sinon"] },
      { category: "DevOps & CI/CD", tools: ["Docker", "Kubernetes", "Jenkins", "Azure DevOps"] },
    ],
  },

  // ─── 3. Mobile Applications ────────────────────────────────────────────
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    tagline:
      "It is important for every business to invest in mobile app development. Studies suggest the community increasingly prefers mobile-first experiences for discovering and engaging with services.",
    heroDescription:
      "A powerful mobile application can be your most direct channel to your customers. At Newel Technologies, we design and develop intuitive, high-performance mobile apps for iOS and Android — from consumer-facing products to complex enterprise tools. Our cross-platform expertise ensures you reach every user, on every device, without compromising on quality or experience.",
    icon: "📱",
    whatWeOffer: [
      "Native iOS App Development (Swift)",
      "Native Android App Development (Kotlin)",
      "Cross-Platform Apps with React Native & Flutter",
      "Progressive Web Apps (PWA)",
      "Mobile UI/UX Design & Prototyping",
      "App Store Optimisation (ASO) & Deployment",
      "Post-Launch Support & Analytics Integration",
    ],
    processSteps: [
      { label: "DISCOVER", description: "Deep-dive into user personas, journeys, and business objectives to define the right product." },
      { label: "DESIGN", description: "Wireframes, prototypes, and high-fidelity UI crafted for a seamless mobile experience." },
      { label: "DEVELOP", description: "Agile sprints to build production-grade features with performance-first code." },
      { label: "TEST", description: "Device matrix testing, performance benchmarking, and security audits before release." },
      { label: "DEPLOY", description: "Smooth submission and release to App Store and Google Play with full compliance." },
      { label: "SUPPORT", description: "Ongoing updates, crash monitoring, and feature enhancements post-launch." },
    ],
    techStack: [
      { category: "Mobile Platforms", tools: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"] },
      { category: "Backend & APIs", tools: ["Node.js", "Firebase", "GraphQL", "REST APIs", "AWS Amplify"] },
      { category: "Testing & Analytics", tools: ["Detox", "Appium", "Firebase Crashlytics", "Mixpanel", "Amplitude"] },
    ],
  },

  // ─── 4. Data Analytics ─────────────────────────────────────────────────
  {
    slug: "data-analytics",
    title: "Data Analytics",
    tagline:
      "Data is the oil — some say the gold — of the 21st century. The raw material that drives our economies, societies, and organisations to smarter, faster, and more profitable decisions.",
    heroDescription:
      "At Newel Technologies, we transform raw data into actionable intelligence. Our Data Analytics practice combines cutting-edge tools, proven methodologies, and domain expertise to help organisations harness the full potential of their data. From designing scalable data pipelines to building real-time dashboards and predictive models, we empower decision-makers with the insights they need — when they need them.",
    icon: "📊",
    whatWeOffer: [
      "Data Strategy & Roadmap Consulting",
      "Business Intelligence (BI) & Dashboard Development",
      "Data Warehousing & ETL Pipeline Design",
      "Predictive Analytics & Machine Learning Models",
      "Real-Time Data Streaming & Processing",
      "Data Governance, Quality & Compliance",
      "Advanced Visualisation & Reporting",
    ],
    processSteps: [
      { label: "COLLECT", description: "Identify, ingest, and consolidate data from structured and unstructured sources across your organisation." },
      { label: "PROCESS", description: "Cleanse, transform, and enrich data to ensure accuracy and consistency for analysis." },
      { label: "ANALYSE", description: "Apply statistical, ML, and AI techniques to uncover hidden patterns and trends." },
      { label: "VISUALISE", description: "Build intuitive, interactive dashboards and reports that tell a clear story." },
      { label: "INSIGHT", description: "Translate findings into concrete, data-backed recommendations for business leaders." },
      { label: "ACT", description: "Embed insights into workflows and automate decision triggers for continuous value." },
    ],
    techStack: [
      { category: "BI & Visualisation", tools: ["Power BI", "Tableau", "Looker", "Grafana", "Metabase"] },
      { category: "Data Engineering", tools: ["Apache Spark", "dbt", "Airflow", "Kafka", "Snowflake", "Redshift"] },
      { category: "Languages & AI", tools: ["Python", "R", "SQL", "TensorFlow", "Scikit-Learn", "Pandas"] },
    ],
  },

  // ─── 5. Cloud Services ─────────────────────────────────────────────────
  {
    slug: "cloud-services",
    title: "Cloud Services",
    tagline:
      "In today's dynamic and demanding business world, cloud is the clear rescuer for infrastructure and software challenges — delivering agility, scalability, and cost efficiency.",
    heroDescription:
      "Newel Technologies is your trusted cloud partner across AWS, Microsoft Azure, and Google Cloud Platform. We help enterprises plan, migrate, optimise, and manage their cloud environments with precision. Our cloud-native architects design resilient, secure, and cost-effective architectures tailored to your business needs — so you can focus on innovation, not infrastructure.",
    icon: "☁️",
    whatWeOffer: [
      "Cloud Strategy, Assessment & Roadmap",
      "Cloud Migration & Lift-and-Shift Execution",
      "AWS, Azure & GCP Architecture Design",
      "Microsoft Workloads on AWS",
      "Managed Cloud Operations & Monitoring",
      "Cloud Cost Optimisation & FinOps",
      "Cloud Security, Compliance & Governance",
    ],
    processSteps: [
      { label: "ASSESS", description: "Evaluate your current infrastructure, workloads, and readiness for cloud adoption." },
      { label: "PLAN", description: "Define a tailored cloud strategy, architecture blueprint, and migration roadmap." },
      { label: "MIGRATE", description: "Execute phased, zero-downtime migration of workloads to the target cloud environment." },
      { label: "OPTIMISE", description: "Tune performance, right-size resources, and implement FinOps best practices." },
      { label: "SECURE", description: "Apply cloud-native security controls, IAM policies, and compliance guardrails." },
      { label: "SCALE", description: "Enable auto-scaling, disaster recovery, and continuous improvement for growth." },
    ],
    techStack: [
      { category: "Cloud Platforms", tools: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"] },
      { category: "Infrastructure as Code", tools: ["Terraform", "AWS CloudFormation", "Ansible", "Pulumi"] },
      { category: "Containers & Orchestration", tools: ["Docker", "Kubernetes", "EKS", "AKS", "Helm"] },
    ],
  },

  // ─── 6. Application Re-engineering ─────────────────────────────────────
  {
    slug: "application-re-engineering",
    title: "Application Re-engineering",
    tagline:
      "Today, due to rapid change in technologies, enterprises face increasing challenges maintaining ageing legacy systems. Re-engineering breathes new life into old applications.",
    heroDescription:
      "Legacy systems often hold your most critical business logic — but they also hold your organisation back. Newel Technologies' Application Re-engineering practice helps you modernise ageing applications into cloud-native, scalable, and maintainable systems — without losing institutional knowledge. We analyse, refactor, re-architect, and re-platform your legacy estate into a future-ready foundation that supports rapid innovation.",
    icon: "🔄",
    whatWeOffer: [
      "Legacy Application Assessment & Audit",
      "Code Refactoring & Technical Debt Elimination",
      "Monolith-to-Microservices Decomposition",
      "Database Migration & Modernisation",
      "Re-platforming to Cloud-Native Stacks",
      "API-First Transformation",
      "Performance Tuning & Scalability Improvements",
    ],
    processSteps: [
      { label: "AUDIT", description: "Comprehensive analysis of the existing codebase, architecture, dependencies, and technical debt." },
      { label: "ARCHITECT", description: "Design the target-state architecture — microservices, APIs, and cloud-native patterns." },
      { label: "REFACTOR", description: "Incrementally improve code quality, eliminate redundancy, and modernise data models." },
      { label: "MIGRATE", description: "Execute a phased, risk-managed migration to the new platform." },
      { label: "TEST", description: "Regression, integration, and performance testing to validate parity and improvements." },
      { label: "DEPLOY", description: "Go-live with zero-downtime deployment strategies and full knowledge transfer." },
    ],
    techStack: [
      { category: "Languages & Frameworks", tools: ["Java", ".NET", "Python", "Node.js", "Spring Boot", "FastAPI"] },
      { category: "Architecture Patterns", tools: ["Microservices", "Event-Driven", "CQRS", "Domain-Driven Design"] },
      { category: "DevOps & Platforms", tools: ["Docker", "Kubernetes", "CI/CD Pipelines", "AWS", "Azure"] },
    ],
  },

  // ─── 7. Quality Assurance ──────────────────────────────────────────────
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    tagline:
      "If a website or web application takes three extra seconds to load, users get annoyed. In today's competitive digital landscape, quality is non-negotiable.",
    heroDescription:
      "Quality Assurance is not just about finding bugs — it's about building confidence. Newel Technologies' QA practice embeds quality at every stage of your software delivery lifecycle. Our experienced QA engineers use a blend of manual expertise and test automation to deliver reliable, performant, and secure software. From functional testing to load simulations, we ensure your product meets the highest standards before it reaches your users.",
    icon: "✅",
    whatWeOffer: [
      "Manual & Exploratory Testing",
      "Test Automation Framework Design & Development",
      "Performance & Load Testing",
      "Security & Penetration Testing",
      "Mobile Application Testing",
      "API & Integration Testing",
      "Continuous Testing in CI/CD Pipelines",
    ],
    processSteps: [
      { label: "PLAN", description: "Define the test strategy, scope, tools, and acceptance criteria aligned with business requirements." },
      { label: "DESIGN", description: "Craft detailed test cases, scripts, and automation suites covering all critical scenarios." },
      { label: "EXECUTE", description: "Run manual, automated, performance, and security tests across environments." },
      { label: "DEFECT", description: "Log, prioritise, and track defects with clear reproduction steps and severity ratings." },
      { label: "RETEST", description: "Validate fixes and conduct regression testing to confirm no new issues are introduced." },
      { label: "RELEASE", description: "Sign-off with a comprehensive quality report and go-live confidence." },
    ],
    techStack: [
      { category: "Test Automation", tools: ["Selenium", "Playwright", "Cypress", "Appium", "WebdriverIO"] },
      { category: "Performance Testing", tools: ["JMeter", "k6", "Gatling", "LoadRunner"] },
      { category: "API & Unit Testing", tools: ["Postman", "REST Assured", "JUnit", "Jest", "PyTest"] },
    ],
  },

  // ─── 8. Robotic Process Automation ─────────────────────────────────────
  {
    slug: "robotic-process-automation",
    title: "Robotic Process Automation",
    tagline:
      "\"In our banks we have people doing work like robots. People ought to be doing work like people.\" — John Cryan, CEO of Deutsche Bank. RPA makes this vision a reality.",
    heroDescription:
      "Robotic Process Automation (RPA) eliminates the burden of repetitive, rule-based tasks from your workforce — freeing them to focus on creative, strategic, and high-value work. Newel Technologies' RPA practice designs, builds, and deploys intelligent software bots that mimic human actions across your digital systems. Our RPA solutions integrate seamlessly with your existing applications, delivering rapid ROI and significant operational efficiency gains.",
    icon: "🤖",
    whatWeOffer: [
      "RPA Opportunity Assessment & ROI Analysis",
      "Bot Design, Development & Deployment",
      "Attended & Unattended Automation",
      "Intelligent Document Processing (IDP)",
      "AI-Augmented RPA with ML & NLP",
      "RPA Centre of Excellence (CoE) Setup",
      "Bot Monitoring, Maintenance & Optimisation",
    ],
    processSteps: [
      { label: "IDENTIFY", description: "Discover and prioritise the highest-value automation opportunities across your processes." },
      { label: "EVALUATE", description: "Assess technical feasibility, ROI potential, and complexity for each candidate process." },
      { label: "DESIGN", description: "Map the process flow and design the bot architecture for reliable, scalable automation." },
      { label: "DEVELOP", description: "Build and configure bots using industry-leading RPA platforms with rigorous coding standards." },
      { label: "TEST", description: "Validate bots against edge cases, exception scenarios, and integration touchpoints." },
      { label: "DEPLOY", description: "Go-live with production deployment, change management support, and performance tracking." },
    ],
    techStack: [
      { category: "RPA Platforms", tools: ["UiPath", "Blue Prism", "Automation Anywhere", "Microsoft Power Automate"] },
      { category: "AI & Cognitive", tools: ["Microsoft Azure AI", "Google Document AI", "AWS Textract", "OpenAI"] },
      { category: "Integration", tools: ["REST APIs", "SAP", "Salesforce", "ServiceNow", "Oracle ERP"] },
    ],
  },

  // ─── 9. IT Staff Augmentation ──────────────────────────────────────────
  {
    slug: "it-staff-augmentation",
    title: "IT Staff Augmentation",
    tagline:
      "Almost all organisations face the challenge of getting quality technical skilled resources within limited timeframes. Staff Augmentation gives you the agility to scale your team instantly.",
    heroDescription:
      "Newel Technologies' IT Staff Augmentation service provides businesses with on-demand access to highly skilled technology professionals — without the overhead of traditional hiring. Whether you need to scale up quickly for a project or fill critical skill gaps in your team, we embed vetted, experienced engineers, architects, and specialists who integrate seamlessly with your organisation and delivery cadence.",
    icon: "🧑‍💼",
    whatWeOffer: [
      "Short-Term & Long-Term Staff Augmentation",
      "Dedicated Development Teams",
      "Skills-Gap Analysis & Resource Planning",
      "Remote, Hybrid & On-Site Engagement Models",
      "Full-Stack, Frontend & Backend Developers",
      "DevOps, Cloud & Data Engineers",
      "Project Managers, Scrum Masters & QA Engineers",
    ],
    processSteps: [
      { label: "ASSESS", description: "Analyse your project requirements, technology stack, and team skill gaps." },
      { label: "SOURCE", description: "Tap into our pre-vetted talent pool or execute targeted searches for specific skills." },
      { label: "SCREEN", description: "Technical interviews, coding assessments, and background verification." },
      { label: "ONBOARD", description: "Fast onboarding with tools access, process orientation, and team introductions." },
      { label: "INTEGRATE", description: "Professionals embedded into your Agile sprints, standups, and delivery workflows." },
      { label: "SCALE", description: "Ramp capacity up or down flexibly based on your evolving project demands." },
    ],
    techStack: [
      { category: "Development", tools: ["React", "Angular", "Node.js", ".NET", "Java", "Python", "Go"] },
      { category: "Cloud & DevOps", tools: ["AWS", "Azure", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"] },
      { category: "Collaboration", tools: ["Jira", "Confluence", "Slack", "MS Teams", "GitHub", "Azure DevOps"] },
    ],
  },

  // ─── 10. Outsystems ────────────────────────────────────────────────────
  {
    slug: "outsystems",
    title: "Outsystems",
    tagline:
      "OutSystems is the world's leading low-code application development platform. We help enterprises build, deploy, and evolve enterprise-grade applications at record speed.",
    heroDescription:
      "As an OutSystems partner, Newel Technologies leverages the world's most advanced low-code platform to help enterprises deliver complex, scalable applications in a fraction of the traditional time. Our certified OutSystems developers combine platform expertise with deep business understanding to build customer portals, internal tools, process applications, and integrations that drive real operational value — rapidly.",
    icon: "⚡",
    whatWeOffer: [
      "OutSystems Application Development",
      "OutSystems Architecture Design & Review",
      "Legacy System Migration to OutSystems",
      "OutSystems Integration with ERP/CRM/HRMS",
      "Mobile App Development on OutSystems",
      "OutSystems Performance Optimisation",
      "Training, Enablement & CoE Setup",
    ],
    processSteps: [
      { label: "DISCOVER", description: "Understand your business requirements, existing systems, and define the OutSystems solution scope." },
      { label: "DESIGN", description: "Architect the application structure, data models, integrations, and UX flows on OutSystems." },
      { label: "BUILD", description: "Rapid visual development using OutSystems' high-productivity environment and components." },
      { label: "TEST", description: "Functional, integration, and performance testing within the OutSystems lifecycle toolchain." },
      { label: "DEPLOY", description: "One-click deployment to cloud or on-premise environments with OutSystems LifeTime." },
      { label: "MONITOR", description: "Continuous monitoring, maintenance, and platform upgrades to keep your apps healthy." },
    ],
    techStack: [
      { category: "OutSystems Platform", tools: ["OutSystems 11", "ODC (OutSystems Developer Cloud)", "LifeTime", "Service Studio"] },
      { category: "Integration & APIs", tools: ["REST APIs", "SOAP", "SAP Connector", "Salesforce Connector", "SQL Server"] },
      { category: "Front-End & Mobile", tools: ["OutSystems Reactive Web", "OutSystems Mobile", "JavaScript", "CSS"] },
    ],
  },

  // ─── 11. DOOH ──────────────────────────────────────────────────────────
  {
    slug: "dooh",
    title: "DOOH",
    tagline:
      "Digital Out-of-Home (DOOH) advertising delivers dynamic, data-driven brand experiences to audiences in the physical world — at scale, in real time, with measurable impact.",
    heroDescription:
      "Newel Technologies' DOOH practice brings together technology, creativity, and data to power the next generation of out-of-home advertising. From digital signage networks and smart displays to programmatic DOOH campaigns and content management systems, we help brands connect with their audiences in the right place, at the right time, with the right message. Our end-to-end solutions cover hardware, software, content, and analytics.",
    icon: "🖥️",
    whatWeOffer: [
      "DOOH Campaign Strategy & Planning",
      "Digital Signage Hardware Procurement & Installation",
      "Content Management System (CMS) Development",
      "Programmatic DOOH Integration",
      "Dynamic & Data-Triggered Content Delivery",
      "Audience Analytics & Campaign Measurement",
      "Remote Monitoring & Display Management",
    ],
    processSteps: [
      { label: "PLAN", description: "Define audience targets, screen network, geographies, and campaign objectives." },
      { label: "CREATE", description: "Design compelling, dynamic creative content tailored for digital display formats." },
      { label: "DEPLOY", description: "Install and configure display hardware and content management infrastructure." },
      { label: "ACTIVATE", description: "Launch campaigns with scheduling, dayparting, and trigger-based content rules." },
      { label: "MONITOR", description: "Real-time monitoring of display health, content delivery, and audience data." },
      { label: "REPORT", description: "Comprehensive campaign analytics, proof-of-play reports, and ROI measurement." },
    ],
    techStack: [
      { category: "Display & Hardware", tools: ["LED Displays", "LCD Signage", "Raspberry Pi", "BrightSign", "Samsung MagicINFO"] },
      { category: "Software & CMS", tools: ["Scala", "Signagelive", "NoviSign", "Custom CMS", "REST APIs"] },
      { category: "Analytics & Data", tools: ["Google Analytics", "Programmatic DSPs", "Python", "Power BI", "Real-Time Data Feeds"] },
    ],
  },
];
