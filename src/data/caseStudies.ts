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
    overview: "Partnered with a major NBFC to automate Query, Risk, and Compliance (QRC) using AI at scale.",
    subtitle: "AI-Driven QRC Classification at Scale:",
    input: "A leading NBFC's compliance and risk teams manually sampled emails and call recordings to classify them as Queries, Requests, or Complaints. As interaction volumes grew, this approach created inconsistent categorization, poor visibility into high-risk complaints, delayed compliance issue detection, and rising audit observations — posing serious regulatory risk.",
    reasoning: "Newel implemented an AI-powered QRC Classification Engine that continuously scans and classifies all customer interactions — not just samples. Using AI/ML and NLP, the platform transcribes calls and emails, detects discrepancies between system and business classifications, and provides explainable reasoning through dashboards built for compliance and risk teams.",
    outcomes: "• 100% of customer interactions classified — not just samples — improving accuracy and consistency\n\n• Significant reduction in manual review effort for compliance and risk teams\n\n• Faster detection of high-risk complaints and classification discrepancies\n\n• Greater audit transparency with traceable reasoning for every classification\n\n• Stronger adherence to RBI norms and measurable reduction in auditor observations"
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
    input: "A financial institution's loan servicing team manually collected EMI files, logged into the Loan Origination System to download agreements, verified bounce charges and penalties by hand, and updated Excel sheets for each validation — a time-intensive process prone to human error and slow to flag discrepancies.",
    reasoning: "Newel deployed an RPA workflow using Power Automate to automate loan servicing validation end-to-end. The solution automated data extraction across EMI files, SOA, and reconciliation reports, introduced standardized exception reporting, and auto-generated structured output sheets — eliminating manual touchpoints across the validation lifecycle.",
    outcomes: "• Significantly reduced processing time with minimal manual intervention\n\n• Improved data accuracy by removing human error from validation workflows\n\n• Faster audit readiness through standardized, auto-generated exception reports\n\n• Scalable automation framework that handles growing loan volumes seamlessly"
  },
  {
    id: "3",
    slug: "ai-aws-transformation",
    title: "AI AWS TRANSFORMATION",
    innerTitle: "Transforming Assurance Monitoring with AI-Powered Early Warning & Risk Intelligence",
    client: "OmniRetail",
    industry: "EWS Process",
    teaser: "A multi-agent system designed to optimize inventory levels and reduce waste using real-time IoT.",
    image: "/Screenshot 2026-04-27 103631.png",
    video: "/8348732-uhd_3840_2160_25fps.mp4",
    location: "London, UK",
    overview: "An AI-powered Early Warning System replaced manual assurance reviews with real-time risk monitoring and dynamic, data-driven scoring.",
    subtitle: "Orchestrating planetary-scale logistics through predictive 'Digital Twin' modeling and IoT-driven demand forecasting.",
    input: "The client's governance and audit scoring relied on manual Excel formulas prone to error, with no linkage between residual and inherent risk, no control weighting, and static historical data that gave no view of emerging risk velocity — leaving stakeholders without actionable insight and creating significant audit gaps.",
    reasoning: "Newel built an Assurance Index platform with a three-lens risk evaluation model (Inherent, Control, and Residual Risk), automated real-time scoring with configurable weightings, an executive dashboard for governance oversight, and a Residual Risk Matrix — all backed by built-in RBAC for data security and role-based access.",
    outcomes: "• Replaced manual Excel scoring with automated, real-time risk scoring engine\n\n• Risk-weighted model now highlights critical controls and prioritizes action\n\n• Built-in validation and RBAC ensures data integrity and access governance\n\n• Data-driven visibility into control investments and ROI of risk mitigation efforts\n\n• Stronger audit readiness with traceable, configurable scoring logic"
  },
  {
    id: "4",
    slug: "aws-cloud",
    title: "AWS CLOUD",
    innerTitle: "Modernizing Legacy Applications with Cloud-Native AWS Transformation",
    client: "BioGenix Lab",
    industry: "AWS Cloud",
    teaser: "Migrating a legacy monolithic application to a modular, cloud-native AWS microservices architecture.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    location: "San Francisco, USA",
    overview: "The legacy monolithic system was transformed into a scalable, cloud-native architecture on AWS using microservices, containers, and automated deployments.",
    subtitle: "Modernizing legacy applications with cloud-native AWS transformations and containerized workloads.",
    input: "The client's application ran on a tightly coupled monolithic architecture (ASP.NET, MSSQL, IIS, Windows) where any change risked breaking multiple modules — and every deployment required redeploying the entire application on a single server, making updates slow, risky, and expensive to scale.",
    reasoning: "Newel migrated the application to a modular, cloud-native AWS architecture using NextJS (frontend) and NestJS (backend), modernized the database to Amazon RDS with PostgreSQL, containerized workloads on Linux with EKS and HPA for auto-scaling, and established automated CI/CD pipelines via GitLab — secured with WAF, ALB, and AWS Certificate Manager.",
    outcomes: "• Faster release cycles with automated CI/CD — changes no longer require full redeployment\n\n• Improved application performance and reliability through containerized, scalable infrastructure\n\n• Stronger security posture with WAF, load balancing, and managed certificate management\n\n• Significant cost efficiency by moving to Linux-based containers and right-sized cloud resources"
  },
  {
    id: "5",
    slug: "Infra-case-study",
    title: "INFRASTRUCTURE CASE STUDY",
    innerTitle: "Transforming Infrastructure Operations with Intelligent Managed Services",
    client: "EcoGrid",
    industry: "Application Managed Services",
    teaser: "Taking over end-to-end application management to free up internal IT teams for strategic growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    location: "Berlin, Germany",
    overview: "Financial institution offloads BAU application support to free up internal teams for strategic work",
    subtitle: "Orchestrating high-performance application environments through expert managed services and governance.",
    input: "The client's internal IT team managed 42 applications across multiple technology stacks — including legacy platforms — leaving senior engineers stretched across routine BAU tasks, with limited bandwidth for strategic initiatives, rising resource attrition risk, and gaps in after-hours support coverage.",
    reasoning: "Newel took over end-to-end application managed services with dedicated, stack-wise resources, weekly status reporting and monthly steering committees for governance, continuous skill upgrades driven by multi-client industry exposure, and a structured roadmap to modernize legacy technology applications in parallel.",
    outcomes: "• Internal IT team freed to focus on strategic business requirements, not BAU\n\n• Improved application performance through continuous monitoring and proactive optimization\n\n• Efficient change management with structured governance and reporting cadence\n\n• Access to broader technical expertise and skills across modern and legacy stacks"
  },
/*
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
  },
*/
  {
    id: "7",
    slug: "oracle-postgresql-migration",
    title: "ORACLE TO POSTGRESQL MIGRATION",
    innerTitle: "Strategic Database Modernization: Migrating from Oracle to Open-Source PostgreSQL",
    client: "FinCore Solutions",
    industry: "Database Migration",
    teaser: "Eliminating vendor lock-in and reducing licensing costs through a structured Oracle to PostgreSQL migration.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200",
    location: "Global",
    overview: "We executed a zero-data-loss migration from Oracle to PostgreSQL, achieving significant cost savings and improved query performance.",
    subtitle: "Modernizing data infrastructure through automated schema conversion and performance optimization.",
    input: "The client faced escalating Oracle licensing and support costs, growing database size causing performance overhead, and increasing concern over vendor lock-in — driving a strategic mandate to migrate to an open-source database without compromising uptime, data integrity, or application compatibility.",
    reasoning: "Newel executed a structured migration using ora2pg for automated schema and data transfer, converted PL/SQL procedures to PostgreSQL-compatible functions, applied indexing and query optimization for performance parity, used parallel data loading for faster cutover, and maintained a controlled rollback strategy throughout — ensuring minimal downtime and zero data loss.",
    outcomes: "• Zero data loss achieved across the full migration window\n\n• Seamless application compatibility post-migration with improved query response time\n\n• 35–50% reduction in database licensing costs by eliminating Oracle dependencies\n\n• Open-source flexibility enabling long-term cost optimization and scalability"
  },
  {
    id: "8",
    slug: "redis-implementation-caching",
    title: "REDIS IMPLEMENTATION FOR CACHING",
    innerTitle: "Optimizing Application Performance: Centralized Redis Implementation for High-Performance Caching",
    client: "Global SaaS Corp",
    industry: "Performance Optimization",
    teaser: "Drastically reducing latency and database load through centralized Redis caching and session management.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
    location: "Global",
    overview: "We implemented a centralized Redis caching layer that reduced database pressure and significantly accelerated API response times.",
    subtitle: "Accelerating application performance through intelligent caching and session orchestration.",
    input: "Frequent database hits were causing significant latency, high API response times, session management bottlenecks, and elevated DB CPU utilization — directly degrading the user experience and limiting the application's ability to scale.",
    reasoning: "Newel designed and implemented a centralized Redis caching architecture with key expiry and eviction policies, integrated it across the application layer, configured workload-appropriate persistence (RDB/AOF), and enabled real-time monitoring and memory optimization to ensure a secure, stable, and performant deployment.",
    outcomes: "• Significant reduction in database load — fewer direct DB hits at scale\n\n• Faster API response times across all application modules\n\n• Stable session handling and improved application scalability\n\n• Reduced infrastructure costs and a future-ready, scalable caching foundation"
  },
  {
    id: "9",
    slug: "infra-managed-services-ops",
    title: "INFRA MANAGED SERVICES",
    innerTitle: "Optimizing Infrastructure Operations: End-to-End OS & Database Managed Services",
    client: "EcoGrid Dynamics",
    industry: "Infrastructure Ops",
    teaser: "Ensuring 24/7 infrastructure stability and performance through expert OS and database managed services.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200",
    location: "Berlin, Germany",
    overview: "We took over the management of 100+ servers and diverse database stacks, enabling the client's IT team to pivot toward strategic growth.",
    subtitle: "Stabilizing critical infrastructure through proactive monitoring and 24/7 expert support.",
    input: "The client's internal IT team was responsible for managing 100+ servers across multiple OS and database technology stacks — consuming senior bandwidth on routine BAU tasks, creating resource dependency risks for odd-hours coverage, and leaving little capacity for strategic infrastructure initiatives.",
    reasoning: "Newel assumed end-to-end management of the client's OS and database estate with dedicated, stack-wise resources, structured escalation paths, weekly and monthly governance reporting, and continuous skill upgrades — ensuring round-the-clock coverage without the burden of internal hiring or attrition.",
    outcomes: "• Internal IT team redirected toward strategic initiatives rather than BAU firefighting\n\n• Efficient incident and problem management with defined SLAs and escalation paths\n\n• Improved server performance through proactive monitoring and optimization\n\n• Cost-effective, timely, and comprehensive infrastructure support across all stacks"
  },
  {
    id: "10",
    slug: "cloud-managed-services-aws",
    title: "CLOUD MANAGED SERVICES (AWS)",
    innerTitle: "Empowering Strategic Cloud Growth: Comprehensive AWS Managed Services Across 27 Accounts",
    client: "Nexus Global",
    industry: "Cloud Managed Services",
    teaser: "Streamlining operations across 27 AWS accounts to deliver high-performance cloud governance and 24/7 support.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    location: "USA / Global",
    overview: "We assumed management of 27 AWS accounts, hundreds of instances, and over 1,000 Lambda functions, providing consistent governance and expert cloud support.",
    subtitle: "Orchestrating complex AWS environments through dedicated expertise and proactive governance.",
    input: "The client operated 27 AWS accounts across different businesses, managing 300 EC2 instances, 100+ DB instances, 1,000+ Lambda functions, and 50+ Glue pipelines — with internal teams stretched thin across BAU operations, leaving limited bandwidth for strategic cloud initiatives and inconsistent governance across accounts.",
    reasoning: "Newel took over cloud operations with dedicated AWS expertise across all 27 accounts, established weekly status reporting and monthly steering committees for governance, implemented structured escalation paths and SLA-backed incident management, and provided continuous skill upgrades through multi-client AWS experience.",
    outcomes: "• Internal team freed to focus on strategic cloud and business priorities\n\n• Efficient incident and problem management with improved server and service performance\n\n• Consistent governance and visibility across all 27 AWS accounts\n\n• Access to strong backend AWS expertise — cost-effective and available round the clock"
  },
  {
    id: "11",
    slug: "aws-cost-optimization-savings",
    title: "AWS COST OPTIMIZATION",
    innerTitle: "Maximizing Cloud ROI: Delivering 20%+ AWS Cost Savings Across 27 Accounts",
    client: "Nexus Global",
    industry: "Cloud Governance",
    teaser: "Implementing a comprehensive AWS cost optimization framework to eliminate waste and maximize cloud ROI.",
    image: "https://images.unsplash.com/photo-1554224155-672629188427?auto=format&fit=crop&q=80&w=1200",
    location: "USA / Global",
    overview: "We delivered significant AWS cost savings through a full capacity review, resource rightsizing, and the strategic implementation of Savings Plans and Reserved Instances.",
    subtitle: "Driving cloud efficiency through intelligent resource management and cost governance.",
    input: "The client's AWS spend was escalating rapidly across 27 accounts due to over-provisioned instances, idle and unused resources, poor tag hygiene, and inconsistent use of Savings Plans and Reserved Instances — with limited visibility into what was driving costs across business units.",
    reasoning: "Newel conducted a full capacity review across all AWS accounts, reviewed EC2 and RDS usage to recommend Savings Plans and Reserved Instances, rightsized over-provisioned resources, implemented resource tagging for cost visibility, removed unused assets, and migrated to more cost-effective AWS service alternatives where applicable.",
    outcomes: "• Delivered 20%+ cost savings while maintaining full performance and reliability\n\n• Achieved clear, centralized visibility into cloud resource usage across all 27 accounts\n\n• Enhanced cost efficiency through rightsizing, reserved capacity, and waste elimination\n\n• Improved tagging hygiene enabling ongoing cost attribution and governance"
  },
  {
    id: "12",
    slug: "db-consolidation-savings",
    title: "DB CONSOLIDATION & COST SAVINGS",
    innerTitle: "Optimizing Enterprise Data: Consolidating Fragmented Database Infrastructure for 35–50% Savings",
    client: "Industrial Global",
    industry: "Database Ops",
    teaser: "Consolidating multi-plant database infrastructure to eliminate licensing waste and reduce hardware footprint.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    location: "USA / Europe",
    overview: "We consolidated a fragmented multi-plant database infrastructure, achieving up to 50% licensing cost reduction and a significantly smaller hardware footprint.",
    subtitle: "Standardizing enterprise data through structured consolidation and license rationalization.",
    input: "A mid-sized manufacturer with multiple plants maintained separate databases at each location using a mix of Oracle and SQL Server editions — resulting in fragmented infrastructure, underused hardware, duplicate maintenance efforts, advanced licensing features going unused, and steadily rising costs with no centralized oversight.",
    reasoning: "Newel performed a detailed license usage analysis, executed cross-platform database migrations to consolidate and rationalize the estate, and consolidated workloads onto fewer, properly sized servers — reducing the overall infrastructure footprint while standardizing operations and governance across all locations.",
    outcomes: "• 35–50% reduction in database licensing costs through rationalization and open-source adoption\n\n• Reduced infrastructure footprint — fewer servers and VMs to manage and maintain\n\n• Centralized monitoring enabling faster troubleshooting and improved compliance\n\n• Improved IT operational efficiency and simplified future upgrade pathways"
  },
  {
    id: "13",
    slug: "lms-performance-tuning",
    title: "LMS PERFORMANCE TUNING",
    innerTitle: "Accelerating Loan Repayment: Slicing Batch Processing from 17 Hours to 40 Minutes",
    client: "Capital First",
    industry: "Performance Engineering",
    teaser: "Dramatically reducing downtime and improving scalability through targeted LMS performance tuning.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    location: "Mumbai, India",
    overview: "We slashed daily repayment batch processing time from 17 hours down to 40 minutes, enabling predictable daily operations and massive scalability.",
    subtitle: "High-performance engineering for mission-critical loan management systems.",
    input: "A leading financial institution's Loan Management System was taking up to 17 hours to complete daily repayment batch processing — causing extended downtime, heavy support team dependency, slow customer query resolution, and an inability to scale with growing loan volumes.",
    reasoning: "Newel executed a targeted performance engineering program: implemented RabbitMQ for parallel batch processing, refactored iterative SQL queries to set-based logic, applied intelligent indexing, enforced automated data purging policies, and tuned both application and infrastructure parameters to stabilize performance at scale.",
    outcomes: "• Repayment batch processing reduced from 17 hours to approximately 40 minutes\n\n• Significantly reduced downtime windows — enabling more predictable daily operations\n\n• Faster customer query resolution due to timely processing and system availability\n\n• Improved scalability to support future growth in loan volumes and transactions"
  }
];

export const getCaseStudyBySlug = (slug: string) => {
  return CASE_STUDIES.find((cs) => cs.slug.toLowerCase() === slug.toLowerCase());
};
