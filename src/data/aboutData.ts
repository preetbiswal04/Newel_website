// ─── About Us Page — Central Data ─────────────────────────────────────

export const HERO_STATS = [
  { value: 500, suffix: "+", label: "Engineers & Experts" },
  { value: 200, suffix: "+", label: "Digital Masterpieces" },
  { value: 20, suffix: "+", label: "Industries Served" },
  { value: 30, suffix: "+", label: "Countries Reached" },
];

export interface TimelineMilestone {
  year: number;
  title: string;
  narrative: string;
  gradient: string;
}

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: 2015,
    title: "The Spark That Started It All",
    narrative:
      "Newel Technologies was founded with fewer than 10 passionate engineers, driven by a singular vision: to make enterprise-grade technology accessible. Within the first month, we secured our first enterprise client, setting the tone for relentless execution and unwavering quality.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    year: 2016,
    title: "Building Momentum",
    narrative:
      "We crossed the 50-project milestone and grew our team to 80+ engineers. Our strategic pivot from project-based delivery to long-term technology partnerships transformed how clients perceived us — not as vendors, but as co-architects of their digital future.",
    gradient: "from-violet-600 to-blue-500",
  },
  {
    year: 2017,
    title: "Industry Recognition Begins",
    narrative:
      "Our impact caught global attention as we earned our first industry award for excellence in digital transformation. We expanded our capabilities into AI and machine learning, establishing the R&D lab that would later become our innovation engine.",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    year: 2018,
    title: "Scaling New Heights",
    narrative:
      "With a 250% year-over-year revenue growth, we moved to a state-of-the-art campus to house our 200+ strong team. Deep investments in blockchain, cloud-native architectures, and IoT platforms cemented our position as a full-spectrum technology partner.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    year: 2019,
    title: "The 500-Project Milestone",
    narrative:
      "We celebrated the delivery of 500+ digital products and launched our philanthropic initiative, channeling resources into education and community development. Our first international office was established, marking the beginning of our global expansion.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    year: 2020,
    title: "Resilience Through Adversity",
    narrative:
      "While the world grappled with uncertainty, we doubled down on hiring and innovation. We secured multi-year enterprise contracts, launched our remote-first operations model, and maintained a zero-layoff policy that strengthened team morale and client trust.",
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    year: 2021,
    title: "Crossing ₹100 Crore Revenue",
    narrative:
      "A landmark year — we surpassed ₹100 crore in revenue while our clients' combined digital products exceeded 100 million end-users. We earned recognition as a top-tier technology partner by leading analyst firms.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    year: 2022,
    title: "Best Place to Work",
    narrative:
      "Our employee-first culture was formally recognized with the 'Best Place to Work' award. We expanded to three new office locations and spearheaded a national digital campaign that reached over 50 million citizens.",
    gradient: "from-fuchsia-500 to-violet-500",
  },
  {
    year: 2023,
    title: "Deloitte Fast 50 & Global Expansion",
    narrative:
      "Recognized by Deloitte as a 'Tech Fast 50' firm and by Statista as a Growth Champion, we accelerated our global footprint with new offices across three continents. Our zero-layoff strategy during the tech recession became a case study in resilient leadership.",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    year: 2024,
    title: "AI-First Transformation",
    narrative:
      "Revenue crossed ₹300 crore as we pivoted to AI-first engineering. We delivered 80+ AI and Generative AI solutions, earned consecutive Deloitte Fast 50 awards, and launched our EdTech scholarship program to nurture underprivileged talent.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    year: 2025,
    title: "The Intelligent Enterprise Era",
    narrative:
      "We launched our AI Center of Excellence, delivering enterprise-grade intelligent systems at scale. With multiple industry-first awards and a growing global team of 500+ engineers, Newel stands at the vanguard of the intelligent enterprise revolution.",
    gradient: "from-purple-600 to-blue-600",
  },
];

export const CLIENT_LOGOS = [
  "Tata Group",
  "Reliance Industries",
  "Mahindra",
  "Adani Group",
  "Wipro",
  "Infosys",
  "L&T",
  "Bajaj Finserv",
  "HDFC Bank",
  "ICICI Bank",
  "Hindustan Unilever",
  "Asian Paints",
  "Godrej",
  "Aditya Birla",
  "Sun Pharma",
  "Tech Mahindra",
  "Kotak Mahindra",
  "Axis Bank",
  "Airtel",
  "JSW Group",
];

export interface AwardItem {
  year: string;
  title: string;
  category: string;
}

export const AWARDS_DATA: AwardItem[] = [
  { year: "2025", title: "Leader in AI-First Product Engineering", category: "AI Excellence" },
  { year: "2025", title: "Clutch Top 100 Fastest-Growing Companies", category: "Growth" },
  { year: "2024", title: "Deloitte Technology Fast 50 — Consecutive Winner", category: "Growth" },
  { year: "2024", title: "Fastest-Growing AI Development Company", category: "AI Innovation" },
  { year: "2024", title: "Best Education Scholarship Award", category: "CSR" },
  { year: "2024", title: "CIO Klub Preferred Partner Award", category: "Digital Transformation" },
  { year: "2023", title: "Tech Company of the Year", category: "Industry Leadership" },
  { year: "2023", title: "Statista India Growth Champions", category: "Growth" },
  { year: "2022", title: "Best Place to Work", category: "Workplace Culture" },
  { year: "2020", title: "App Development Company of the Year", category: "Mobile Excellence" },
  { year: "2025", title: "Statista High Growth Companies APAC", category: "Growth" },
  { year: "2024", title: "Leading Custom Software Development Firm", category: "Software" },
];

export const CULTURE_VALUES = [
  "Agile First — Ship fast, iterate faster",
  "Innovation-Led — R&D is in our DNA",
  "Zero Layoff Policy — People over profits",
  "Remote-Hybrid Flexibility — Work from anywhere",
  "Continuous Learning — Weekly tech talks & upskilling",
  "Transparent Leadership — Open-door at every level",
];

export interface ProductSpotlight {
  name: string;
  tagline: string;
  description: string;
  howItWorks: string;
  gradient: string;
  icon: string;
}

export const FLAGSHIP_PRODUCTS: ProductSpotlight[] = [
  {
    name: "Newel Check Box",
    tagline: "Intelligent Compliance, Automated.",
    description:
      "An AI-powered compliance and audit automation platform that transforms how enterprises manage regulatory requirements. From HIPAA to GDPR, Check Box delivers real-time compliance monitoring with zero manual overhead.",
    howItWorks:
      "Connect your systems → AI scans policies & workflows → Generates compliance reports → Flags violations in real-time → Auto-remediates where possible.",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    icon: "☑️",
  },
  {
    name: "Newel PIT",
    tagline: "Process Intelligence & Transformation.",
    description:
      "A next-gen process mining and intelligence platform that uses AI to map, analyze, and optimize your entire operational workflow. PIT identifies bottlenecks, predicts failures, and recommends transformations before they become critical.",
    howItWorks:
      "Ingest process data → AI builds digital twin → Identifies inefficiencies → Simulates optimizations → Deploys automated fixes.",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    icon: "⚡",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  type: "client" | "employee";
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "CTO",
    company: "FinServ Global",
    quote:
      "Newel transformed our legacy banking platform into a modern, cloud-native ecosystem. The team's deep expertise in AI-driven fraud detection alone saved us millions in the first quarter.",
    initials: "RK",
    type: "client",
  },
  {
    name: "Priya Sharma",
    role: "VP Engineering",
    company: "HealthTech Solutions",
    quote:
      "We approached Newel with a clear vision to build a future-ready telehealth platform. They didn't just deliver — they elevated every aspect of the product beyond our expectations.",
    initials: "PS",
    type: "client",
  },
  {
    name: "Michael Chen",
    role: "Director of Digital",
    company: "RetailMax Inc.",
    quote:
      "After our launch with Newel, our app achieved 2 million downloads in 6 months. For companies still exploring their options, we highly recommend considering Newel as your technology partner.",
    initials: "MC",
    type: "client",
  },
  {
    name: "Sarah Williams",
    role: "CEO",
    company: "EduLearn Platform",
    quote:
      "We chose Newel to build our financial literacy platform from start to finish. From the first call, we were impressed with their professionalism, expertise, and commitment to top-notch results.",
    initials: "SW",
    type: "client",
  },
  {
    name: "Ankit Verma",
    role: "Senior Full-Stack Developer",
    company: "Newel Technologies",
    quote:
      "The organisation-wide policies have helped me plan my personal life better, which, in return, motivates me to do more at work. The tech stack is always cutting-edge.",
    initials: "AV",
    type: "employee",
  },
  {
    name: "Neha Patel",
    role: "HR Business Partner",
    company: "Newel Technologies",
    quote:
      "I have found great friends and mentors across hierarchies, completely opposite to the corporate stereotypes I've encountered elsewhere. Newel truly lives its values.",
    initials: "NP",
    type: "employee",
  },
  {
    name: "Arjun Mehta",
    role: "AI/ML Engineer",
    company: "Newel Technologies",
    quote:
      "Working on real enterprise AI problems with access to cutting-edge tools and brilliant colleagues — I couldn't ask for a more stimulating environment to grow my career.",
    initials: "AM",
    type: "employee",
  },
  {
    name: "Kavita Rao",
    role: "Product Designer",
    company: "Newel Technologies",
    quote:
      "I never thought a professional environment could be as candid and colorful as the culture at Newel. The creative freedom here is unmatched.",
    initials: "KR",
    type: "employee",
  },
];

export interface LeadershipMember {
  name: string;
  title: string;
  initials: string;
  gradient: string;
}

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  { name: "Vikram Desai", title: "Chief Executive Officer", initials: "VD", gradient: "from-blue-600 to-indigo-700" },
  { name: "Ananya Iyer", title: "Chief Technology Officer", initials: "AI", gradient: "from-violet-600 to-purple-700" },
  { name: "Rohan Kapoor", title: "Chief Operating Officer", initials: "RK", gradient: "from-teal-500 to-emerald-600" },
  { name: "Meera Joshi", title: "VP of Engineering", initials: "MJ", gradient: "from-cyan-500 to-blue-600" },
  { name: "Suresh Nair", title: "VP of Product", initials: "SN", gradient: "from-amber-500 to-orange-600" },
  { name: "Divya Menon", title: "VP of Design", initials: "DM", gradient: "from-rose-500 to-pink-600" },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What industries does Newel serve?",
    answer:
      "Newel offers comprehensive digital solutions as a trusted partner to businesses spanning over 35 industries. Our services encompass product ideation, innovative UI/UX design, and end-to-end software and mobile development. We specialize in Healthcare, BFSI, Retail, Manufacturing, Energy, Logistics, and more.",
  },
  {
    question: "Does Newel work with emerging technologies like AI, IoT, and Blockchain?",
    answer:
      "Absolutely. Our teams have real, hands-on experience in AI/ML, IoT, Blockchain, AR/VR, Cloud & DevOps, Data Analytics, and Cybersecurity. We build systems that learn from data, predict outcomes, and automate decisions — making daily operations faster and more intuitive.",
  },
  {
    question: "How does Newel handle security and compliance?",
    answer:
      "Security is built into the way we work from day one. We align with global standards like ISO 27001, SOC 2, GDPR, and NIST. Our approach includes governance and access controls, secure architecture with encryption, identity and access management, continuous monitoring and threat detection, and regular audits and compliance reviews.",
  },
  {
    question: "Does Newel offer consulting and strategic roadmapping?",
    answer:
      "Yes. Our consulting team works alongside business leaders through discovery & assessment, strategic roadmapping, technology modernization, change enablement, and performance tracking. Every project also comes with post-launch maintenance to ensure everything runs smoothly.",
  },
  {
    question: "What is Newel's approach to AI development?",
    answer:
      "We treat AI as a long-term capability, not a quick project. We start with data cleaning and organization, build models around specific business needs, keep human experts involved at every stage, deploy through MLOps pipelines, and continuously monitor and retrain models to keep performance sharp.",
  },
  {
    question: "What notable brands has Newel worked with?",
    answer:
      "Newel has partnered with leading enterprises across BFSI, healthcare, retail, government, and technology sectors. Our portfolio includes 200+ digital products delivered across 30+ countries, serving some of the most regulated and demanding industries globally.",
  },
];

export const SOCIETY_ITEMS = [
  { title: "EdTech Scholarship Program", description: "Merit-based scholarships for underprivileged students pursuing technology education.", color: "from-blue-500 to-indigo-600" },
  { title: "Community Code Labs", description: "Free coding bootcamps and workshops in underserved communities across India.", color: "from-emerald-500 to-teal-600" },
  { title: "Green Tech Initiative", description: "Carbon-neutral operations commitment and sustainable technology practices.", color: "from-green-500 to-lime-600" },
  { title: "Digital Literacy Drives", description: "Teaching digital skills to rural communities, empowering the next generation.", color: "from-violet-500 to-purple-600" },
  { title: "Women in Tech Program", description: "Dedicated mentorship and hiring programs to increase diversity in engineering.", color: "from-pink-500 to-rose-600" },
  { title: "Open Source Contributions", description: "Active contributions to open-source projects that benefit the global developer community.", color: "from-cyan-500 to-blue-600" },
];

export const WORKPLACE_ITEMS = [
  { title: "Annual Tech Summit", description: "A company-wide hackathon and innovation showcase where teams compete on real-world problems.", color: "from-amber-500 to-orange-600" },
  { title: "Wellness Wednesdays", description: "Weekly wellness sessions including yoga, meditation, and mental health workshops.", color: "from-teal-500 to-emerald-600" },
  { title: "Global Team Retreats", description: "Annual off-site retreats that bring together teams from all global offices.", color: "from-blue-500 to-indigo-600" },
  { title: "Innovation Fridays", description: "Dedicated time for engineers to experiment with new technologies and pet projects.", color: "from-violet-500 to-purple-600" },
  { title: "Cultural Celebrations", description: "Festive celebrations honoring the diverse cultural backgrounds of our global team.", color: "from-rose-500 to-pink-600" },
  { title: "Sports & Fitness League", description: "Inter-team tournaments in cricket, badminton, chess, and more.", color: "from-green-500 to-lime-600" },
];
