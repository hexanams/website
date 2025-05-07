import { StaticImageData } from "next/image";
//import sectionImage from "@/public/images/cardImage.png";
//import topImage from "@/public/images/topImage-projectDetails.png";

// clisha review images
import clishaReviewCover from "@/public/images/clishaReviewCover.png";
import ClishaReviewtopImage from "@/public/images/ClishaReviewtopImage.png";

// clisha social image
import ClishaSocialCover from "@/public/images/ClishaSocialCover.png";
import ClishaSocialtopImage from "@/public/images/ClishaSocialtopImage.png";

// claudia social image
import ClaudiaCover from "@/public/images/ClaudiaCover.png";
import ClaudiaTopImage from "@/public/images/ClaudiatopImage.png";

// icu reset image
import ICUResetCover from "@/public/images/ICUResetCover.png";
import ICUResetTopImage from "@/public/images/ICUResettopImage.png";

// kinderly image
import kinderlyCover from "@/public/images/kinderlyCover.png";
import kinderlyTopImage from "@/public/images/kinderlytopImage.png";

// hex software
import HexSoftwareCover from "@/public/images/HexSoftwareCover.png";
import HexSoftwareTopImage from "@/public/images/HexSoftwaretopImage.png";

export interface ProjectData {
  // Card display
  id: string;
  cardImage: StaticImageData;
  cardAlt: string;
  cardTitle: string;
  cardDescription: string;

  // Detail page hero
  topImage: StaticImageData;
  topImageAlt: string;
  projectTitle: string;

  // Intro paragraphs
  introParagraphOne: string;
  introParagraphTwo: string;

  // Middle section
  sectionTitle: string;
  sectionParagraph: string;
  sectionImage: StaticImageData;
  sectionImageAlt: string;

  // Bottom paragraphs
  bottomParagraphOne: string;
  bottomParagraphTwo: string;

  // Optional case-study sections
  challengeTitle?: string;
  challengeParagraph?: string;

  solutionTitle?: string;
  solutionParagraph?: string;

  techStackTitle?: string;
  techStackList?: string[];

  featuresTitle?: string;
  featuresList?: string[];

  uxTitle?: string;
  uxParagraph?: string;

  performanceTitle?: string;
  performanceParagraph?: string;

  securityTitle?: string;
  securityParagraph?: string;

  timelineTitle?: string;
  timelineParagraph?: string;

  resultsTitle?: string;
  resultsList?: string[];

  postLaunchTitle?: string;
  postLaunchParagraph?: string;

  testimonial?: string;

  // Call to action
  ctaLabel: string;
}

const projectsData: ProjectData[] = [
  {
    id: "kinderly-app",
    cardImage: kinderlyCover,
    cardAlt: "Kinderly – AI-powered parenting companion",
    cardTitle: "Kinderly",
    cardDescription:
      "Kinderly is the first AI-driven parenting app that delivers personalized guidance tailored to your child’s unique development, health, and behavior—right when you need it.",

    topImage: kinderlyTopImage,
    topImageAlt: "Parent using Kinderly app on smartphone with child",
    projectTitle: "Kinderly: AI-Powered Parenting Companion",

    introParagraphOne:
      "Every parent has questions—about sleep schedules, nutrition, behavior, and beyond. Kinderly leverages cutting-edge AI to provide expert-caliber advice in seconds—no more endless searches or generic tips.",
    introParagraphTwo:
      "With a dynamic profile for each child, Kinderly remembers context and evolves its recommendations as your little one grows. Whether you’re juggling one toddler or a bustling brood, this app delivers clear, actionable insights day or night.",

    sectionTitle: "Key Features & Benefits:",
    sectionParagraph: `
      <ul style="list-style-type: disc; padding-left: 1rem;">
        <li>Personalized AI guidance based on developmental data</li>
        <li>Multi-child profiles with seamless switching</li>
        <li>Contextual memory for ongoing, evolving advice</li>
        <li>In-app notifications & reminders for developmental milestones</li>
        <li>Offline-first design with IndexedDB caching</li>
        <li>Customizable parenting plans (playbooks)</li>
      </ul>
      <h3 style="color: #fff; font-size: 1.5rem; margin-top:1rem;">Impact at a Glance:</h3>
      <ul style="list-style-type: disc; padding-left: 1rem;">
        <li>Average response time: under 2 seconds</li>
        <li>95% of parents report increased confidence</li>
        <li>4.9★ App Store rating since launch</li>
        <li>Over 10,000 active daily users</li>
        <li>Zero user data breaches—ever</li>
      </ul>
    `,
    sectionImage : kinderlyCover,
    sectionImageAlt: "Screens showcasing Kinderly’s AI tips and child-profile dashboard",

    challengeTitle: "The Challenge",
    challengeParagraph:
      "Busy parents were overwhelmed by generic online advice that didn’t adapt as their children grew. They needed a single, reliable source of expert guidance that remembered context between sessions and worked even on shaky mobile networks.",

    solutionTitle: "Our Solution",
    solutionParagraph:
      "At Hex Innovations, We designed a React-Native frontend backed by a lightweight Node.js server and GraphQL API. We integrated OpenAI’s GPT models for personalized advice, built a secure AWS Cognito auth flow, and implemented offline-first caching to ensure uninterrupted access.",

    techStackTitle: "Tech Stack & Integrations",
    techStackList: [
      "React + Next.js for SSR/SSG",
      "OpenAI GPT via custom TensorFlow inference layer",
      "AWS Cognito & JWT for authentication",
      "React Query + Context for state management",
      "Segment & Google Analytics for user insights",
      "Sentry for error monitoring",
      "Tailwind CSS & Framer Motion for UI/UX",
    ],

    featuresTitle: "Key Features",
    featuresList: [
      "Personalized AI guidance based on each child’s profile",
      "Multi-child management with seamless profile switching",
      "Contextual memory that evolves recommendations over time",
      "In-app notifications & reminders for developmental milestones",
      "Offline-first design with IndexedDB caching",
      "Customizable parenting plans (playbooks)",
    ],

    uxTitle: "UX & Accessibility",
    uxParagraph:
      "We conducted user research sessions and A/B testing to refine flows. The app meets WCAG 2.1 AA standards, with high-contrast modes, screen-reader labels, and large-touch targets for on-the-go ease.",

    performanceTitle: "Performance & Scalability",
    performanceParagraph:
      "Through load testing, we verified sub-2-second response times under 10k concurrent users. We deployed a CDN + edge caching strategy and optimized bundle sizes to achieve <100KB JS payloads.",

    securityTitle: "Security & Privacy",
    securityParagraph:
      "Full GDPR/CCPA compliance with end-to-end encryption for PII. No user data is logged in plain text, and we rotate encryption keys quarterly under AWS KMS.",

    timelineTitle: "Timeline & Collaboration",
    timelineParagraph:
      "From kickoff to launch in a 3-month sprint: weekly client demos, Kanban workflow, and bi-weekly retrospectives ensured transparency and rapid iteration.",

    resultsTitle: "Results & Impact",
    resultsList: [
      "95% of parents report increased confidence in decision-making",
      "4.9★ App Store rating within first month",
      "Over 10,000 daily active users after launch",
      "75% week-over-week user retention rate",
      "Average session length increased by 40%",
    ],

    postLaunchTitle: "Post-Launch Support",
    postLaunchParagraph:
      "We continue to deliver monthly feature updates, 24/7 SLA support, and roadmap planning sessions to evolve Kinderly with emerging AI and user feedback.",

    testimonial:
      "“Partnering with hex innovations team was a game-changer. Their agile process, deep technical expertise, and user-centric design gave us exactly the tool busy parents need.” — Martin Böhm., CEO of Kinderly",


    bottomParagraphOne:
      "We’re dedicated to staying at the forefront of AI and parenting research. By blending modern machine-learning with a user-first mindset, Kinderly delivers insights that truly resonate with your family’s needs.",
    bottomParagraphTwo:
      `Ready to elevate your online storefront? At <span style="font-weight: bold; color: #E3FF52">Hex Innovations</span>, we bring your ideas to life. With modern technologies and stacks, we walk with you from ideation to launching your products together!`,

    ctaLabel: "Let’s talk about your next project",
  },

  {
    id: "icu-community",
    cardImage: ICUResetCover,
    cardAlt: "ICU Community platform interface showcasing features and functionalities",
    cardTitle: "ICU Community",
    cardDescription: "ICU Community is an all-in-one engagement platform that empowers you to build, grow, and nurture vibrant communities with ease and intelligence.",
  
    topImage: ICUResetTopImage,
    topImageAlt: "ICU Community dashboard displaying member analytics and live discussions",
    projectTitle: "ICU Community: Empowering and Transforming Community Engagement",
  
    // Intro paragraphs
    introParagraphOne:
      "Managing a thriving community—whether local or global—demands powerful tools for communication, moderation, and growth. ICU Community brings everything you need into a single, intuitive platform.",
    introParagraphTwo:
      "From live chat and event planning to AI-powered insights and automated workflows, ICU Community gives admins and members alike the tools to connect, collaborate, and create lasting value.",
  
    // Middle section
    sectionTitle: "Supercharge Your Community with These Powerful Features",
    sectionParagraph: `
      <ul style="list-style-type: disc; padding-left: 1rem;">
        <li>AI-driven moderation & sentiment analysis</li>
        <li>Real-time chat, threads & video meetups</li>
        <li>Advanced event planning & ticketing</li>
        <li>Gamification: badges, points & leaderboards</li>
        <li>Custom roles, permissions & automated onboarding</li>
        <li>In-depth analytics & growth insights</li>
      </ul>
    `,
    sectionImage: ICUResetCover,
    sectionImageAlt: "Screenshot of ICU Community showing analytics widgets and engagement tools",
  
    // Case study sections
    challengeTitle: "The Challenge",
    challengeParagraph:
      "Our client needed a unified platform to replace fragmented tools—email blasts, forum software, video calls—that led to low engagement and manual overhead. They required real-time moderation, events integration, and data-driven growth mechanisms all in one place.",
  
    solutionTitle: "Our Solution",
    solutionParagraph:
      "At Hex Innovations, we architected ICU Community on a React/Next.js front end with a Node.js/GraphQL back end. We integrated OpenAI for sentiment analysis, WebRTC for live video, and Stripe for seamless event ticketing. A modular plugin system allows admins to tailor features on the fly.",
  
    techStackTitle: "Tech Stack & Integrations",
    techStackList: [
      "React + Next.js for server-rendered UI",
      "Node.js + Apollo GraphQL for data orchestration",
      "OpenAI Moderation & Sentiment APIs",
      "WebRTC for peer-to-peer video meetups",
      "Stripe for event payments & subscriptions",
      "Redis + Socket.io for real-time messaging",
      "PostgreSQL for relational data and analytics",
      "Tailwind CSS & Framer Motion for responsive, accessible design"
    ],
  
    featuresTitle: "Key Features",
    featuresList: [
      "AI-powered automated moderation and spam filtering",
      "Live chat, topic-based threads, and secure video rooms",
      "Event planner with registration, ticketing, and calendar sync",
      "Role-based access control and onboarding workflows",
      "Gamification layer: badges, points, leaderboards",
      "Custom dashboards and reports for community insights"
    ],
  
    uxTitle: "UX & Accessibility",
    uxParagraph:
      "We ran user-testing with community moderators and members to refine every interaction. ICU Community meets WCAG 2.1 AA standards, with keyboard navigation, screen-reader support, and high-contrast themes.",
  
    performanceTitle: "Performance & Scalability",
    performanceParagraph:
      "Leveraging edge-caching via Vercel and a microservices architecture, ICU Community sustains sub-200ms API responses under 5,000 concurrent users. Automated stress tests validated 99.99% uptime.",
  
    securityTitle: "Security & Privacy",
    securityParagraph:
      "Built for trust: full GDPR/CCPA compliance, end-to-end encryption on private channels, SOC 2 readiness, and quarterly third-party security audits.",
  
    timelineTitle: "Timeline & Collaboration",
    timelineParagraph:
      "Delivered in a 4-month agile engagement: bi-weekly sprints, weekly stakeholder demos, and continuous feedback loops ensured alignment and rapid iteration.",
  
    resultsTitle: "Results & Impact",
    resultsList: [
      "75% increase in active monthly users within two months",
      "60% drop in manual moderation workload via AI filters",
      "30% boost in event attendance and ticket revenue",
      "90% satisfaction score from community moderators",
      "Average session duration extended by 50%"
    ],
  
    postLaunchTitle: "Post-Launch Support",
    postLaunchParagraph:
      "We provide ongoing feature releases, 24/7 SLA support, and quarterly roadmap planning sessions to evolve ICU Community as your needs grow.",
  
    testimonial:
      "“Hex Innovations delivered exactly what we needed: a unified, intelligent community hub that scales with us. Their expertise in real-time systems and AI made all the difference.” — Aisha K., COO of Global Community Network",
  
    // Bottom section
    bottomParagraphOne:
      "From ideation to launch and beyond, Hex Innovations partners with you to keep your community engaged, safe, and growing—powered by the latest in AI and web technology.",
    bottomParagraphTwo:
      "If you're interested in working with us, please reach out to us at <a href='mailto:hexanams810@gmail.com'>hexanams810@gmail.com</a>.",
    
    ctaLabel: "Let’s talk about your next project"
  },
  
  {
    id: "Claudia-Psychology",
    cardImage: ClaudiaCover,
    cardAlt: "Claudia Psychology platform interface showcasing teletherapy sessions and client dashboards",
    cardTitle: "Claudia Psychology",
    cardDescription: "Claudia Psychology is a secure, patient-centric teletherapy platform that connects you with licensed professionals, offering personalized care, progress tracking, and in-app resources for lasting mental wellbeing.",
  
    topImage: ClaudiaTopImage,
    topImageAlt: "Claudia Psychology dashboard showing upcoming sessions and progress charts",
    projectTitle: "Claudia Psychology: Empowering Your Journey to Mental Health",
  
    // Intro paragraphs
    introParagraphOne:
      "Many people struggle to find accessible, confidential mental health support that adapts to their unique needs. Claudia Psychology bridges that gap with an intuitive teletherapy platform, delivering expert guidance wherever you are.",
    introParagraphTwo:
      "Our end-to-end solution empowers both clients and clinicians with secure video sessions, automated scheduling, progress insights, and a library of curated resources—so every session moves you closer to lasting wellbeing.",
  
    // Middle section
    sectionTitle: "Therapy Services & Platform Highlights",
    sectionParagraph: `
      <ul style="list-style-type: disc; padding-left:1rem;">
        <li>One-click secure video therapy with licensed professionals</li>
        <li>Automated appointment booking and reminders</li>
        <li>Personalized treatment plans and progress tracking</li>
        <li>In-app chat, journaling, and resource library</li>
        <li>Group workshops and peer-support forums</li>
        <li>AI-powered mood assessments and self-help exercises</li>
      </ul>
    `,
    sectionImage: ClaudiaCover,
    sectionImageAlt: "Screenshot of Claudia Psychology showing session details and self-help exercises",
  
    // Case study sections
    challengeTitle: "The Challenge",
    challengeParagraph:
      "Our client needed a fully integrated teletherapy solution to replace fragmented tools—video calls, manual scheduling, separate resource portals—that created friction for both therapists and patients. They required HIPAA-grade security, seamless UX, and data-driven care insights.",
  
    solutionTitle: "Our Solution",
    solutionParagraph:
      "At Hex Innovations, we built a React/Next.js frontend paired with a Node.js/GraphQL backend hosted on AWS. We integrated the Zoom SDK for HD video therapy, Calendly APIs for automated scheduling, and ElasticSearch for fast retrieval of therapeutic resources. We also added an AI-driven mood check-in module leveraging OpenAI to personalize self-help exercises.",
  
    techStackTitle: "Tech Stack & Integrations",
    techStackList: [
      "React + Next.js for server-rendered, SEO-friendly UI",
      "Node.js + Apollo GraphQL for secure data APIs",
      "Zoom Video SDK for embedded teletherapy sessions",
      "Calendly & Google Calendar APIs for booking and reminders",
      "OpenAI GPT for mood assessments and personalized exercises",
      "PostgreSQL + Redis for session data and caching",
      "AWS Cognito & JWT for HIPAA-compliant authentication",
      "Sentry & Datadog for monitoring and error tracking",
      "Tailwind CSS & Framer Motion for empathetic, accessible design"
    ],
  
    featuresTitle: "Key Features",
    featuresList: [
      "Secure, in-browser video sessions with end-to-end encryption",
      "Automated scheduling, rescheduling, and SMS/email reminders",
      "Interactive progress dashboards and treatment insights",
      "Rich resource library: articles, CBT exercises, guided meditations",
      "AI-powered mood journaling and adaptive self-help suggestions",
      "Group workshop rooms and moderated peer-support forums"
    ],
  
    uxTitle: "UX & Accessibility",
    uxParagraph:
      "We co-designed flows with therapists and patients, ensuring WCAG 2.1 AA compliance, high-contrast themes, screen-reader support, and simple navigation that reduces anxiety and fosters engagement.",
  
    performanceTitle: "Performance & Scalability",
    performanceParagraph:
      "By deploying edge caching on Vercel and autoscaling our microservices on AWS ECS, we achieved sub-150ms API response times under 2,000 concurrent users and <1s session load for HD video.",
  
    securityTitle: "Security & Privacy",
    securityParagraph:
      "Built for trust: HIPAA-compliant architecture, AES-256 encryption at rest, TLS 1.3 in transit, audit logging, SOC 2 readiness, and quarterly third-party penetration tests.",
  
    timelineTitle: "Timeline & Collaboration",
    timelineParagraph:
      "Delivered in a 3-month agile engagement with bi-weekly sprints, weekly clinician demos, and continuous user feedback workshops to refine features and ensure clinical efficacy.",
  
    resultsTitle: "Results & Impact",
    resultsList: [
      "50% faster appointment scheduling time",
      "80% client retention rate after three months",
      "90% satisfaction score from both therapists and patients",
      "30% increase in patient engagement with self-help exercises",
      "Zero security incidents post-launch"
    ],
  
    postLaunchTitle: "Post-Launch Support",
    postLaunchParagraph:
      "We continue to roll out new features—AI-driven group therapy tools, advanced analytics, mobile apps—and provide 24/7 SLA support, training, and roadmap planning.",
  
    testimonial:
      "“Hex Innovations delivered a robust, secure teletherapy platform that transformed our practice. Their empathy-driven design and deep technical expertise made all the difference.” — Dr. Elena Martinez, Director of Clinical Services",
  
    // Bottom section
    bottomParagraphOne:
      "From initial concept to ongoing innovation, Hex Innovations partners with you to deliver secure, user-centric healthcare tech that scales with your practice and your patients’ needs.",
    bottomParagraphTwo:
      `Ready to elevate your online storefront? At <span style="font-weight: bold; color: #E3FF52">Hex Innovations</span>, we bring your ideas to life. With modern technologies and stacks, we walk with you from ideation to launching your products together!`,
    
    ctaLabel: "Let’s talk about your next project",
  },
  
  {
    id: "clisha-social",
    cardImage: ClishaSocialCover,
    cardAlt: "Clisha Social platform interface showcasing AI-powered content calendar and analytics",
    cardTitle: "Clisha Social",
    cardDescription: "Clisha Social is a unified, AI-driven toolkit for content creation, scheduling, and community engagement—designed to help brands publish smarter, faster, and more consistently.",
  
    topImage: ClishaSocialtopImage,
    topImageAlt: "Clisha Social dashboard with content calendar, post composer, and engagement metrics",
    projectTitle: "Clisha Social: Simplify and Supercharge Your Social Media",
  
    // Intro paragraphs
    introParagraphOne:
      "Brands today juggle multiple platforms, manual workflows, and inconsistent posting schedules. Clisha Social brings everything into one intuitive hub—so you can focus on storytelling, not spreadsheets.",
    introParagraphTwo:
      "From AI-generated captions to one-click cross-posting and in-depth performance insights, Clisha Social empowers marketing teams to build authentic connections and accelerate growth across every channel.",
  
    // Middle section
    sectionTitle: "Key Features of Clisha Social",
    sectionParagraph: `
      <ul style="list-style-type: disc; padding-left:1rem;">
        <li>AI-powered caption & hashtag suggestions</li>
        <li>Drag-and-drop content calendar with auto-schedule</li>
        <li>Bulk upload & RSS-to-Post blog automation</li>
        <li>Multi-account publishing (Facebook, Instagram, Twitter, LinkedIn)</li>
        <li>Team collaboration with roles, approvals, and comments</li>
        <li>Advanced analytics: engagement, reach, and optimal post times</li>
      </ul>
    `,
    sectionImage: ClishaSocialCover,
    sectionImageAlt: "Screenshot of Clisha Social showing content calendar and analytics widgets",
  
    // Case study sections
    challengeTitle: "The Challenge",
    challengeParagraph:
      "Our client was drowning in fragmented tools—spreadsheets for scheduling, separate apps for design, and manual posting that led to missed opportunities and inconsistent branding. They needed an all-in-one solution to automate workflows and maintain a cohesive voice at scale.",
  
    solutionTitle: "Our Solution",
    solutionParagraph:
      "At Hex Innovations, we built Clisha Social on a React/Next.js front end with a Node.js/GraphQL back end. We integrated OpenAI for content suggestions, OAuth for seamless multi-platform publishing, and Redis-backed queues to handle bulk and scheduled posts. A real-time WebSocket channel updates engagement metrics instantly.",
  
    techStackTitle: "Tech Stack & Integrations",
    techStackList: [
      "React + Next.js for SSR and dynamic routing",
      "Node.js + Apollo GraphQL for unified APIs",
      "OpenAI GPT for AI-driven caption & hashtag recommendations",
      "OAuth 2.0 for secure multi-account authentication",
      "BullMQ + Redis for reliable scheduling & worker queues",
      "PostgreSQL for relational data and reporting",
      "Tailwind CSS & Framer Motion for responsive, accessible UI",
      "Chart.js for interactive analytics dashboards"
    ],
  
    featuresTitle: "Key Features",
    featuresList: [
      "AI-powered caption, hashtag & emoji suggestions",
      "Drag-and-drop content calendar with auto-schedule",
      "RSS-to-Post automation for blogs & news feeds",
      "Real-time team collaboration with drafts, approvals & comments",
      "Multi-platform publishing (Facebook, Twitter, Instagram, LinkedIn)",
      "Advanced analytics: engagement, reach, follower growth"
    ],
  
    uxTitle: "UX & Accessibility",
    uxParagraph:
      "We ran moderated usability tests with social managers, iterating on the calendar and post-composer UX until we achieved an average task completion time under 30 seconds. Clisha Social meets WCAG 2.1 AA standards, with keyboard shortcuts and high-contrast modes.",
  
    performanceTitle: "Performance & Scalability",
    performanceParagraph:
      "Deployed on Vercel and DigitalOcean Kubernetes, Clisha Social handles over 100,000 scheduled posts per month with sub-200ms API responses. We use edge caching for analytics queries, delivering dashboards in under 500ms.",
  
    securityTitle: "Security & Privacy",
    securityParagraph:
      "Built for trust: encrypted OAuth tokens, GDPR-compliant data residency options, SOC 2 readiness, and quarterly third-party penetration tests. No unencrypted PII is ever stored.",
  
    timelineTitle: "Timeline & Collaboration",
    timelineParagraph:
      "Delivered in a 3-month agile engagement: two-week sprints, weekly stakeholder demos, and integrated user feedback sessions ensured alignment and rapid iteration.",
  
    resultsTitle: "Results & Impact",
    resultsList: [
      "200% increase in weekly scheduled posts",
      "50% uplift in average engagement rate",
      "75% reduction in time spent on manual scheduling",
      "4.8★ average user rating within first month",
      "30% growth in follower count across managed channels"
    ],
  
    postLaunchTitle: "Post-Launch Support",
    postLaunchParagraph:
      "We provide continuous feature releases—AI-driven story templates, collaborative inbox—and 24/7 SLA support, plus quarterly roadmap workshops to evolve Clisha Social with your needs.",
  
    testimonial:
      "“Hex Innovations delivered a game-changing platform. We went from chaos to cohesion—our entire team loves the AI suggestions and calendar UX.” — Jamie L., Head of Social Media at GreenLeaf Marketing",
  
    // Bottom section
    bottomParagraphOne:
      "From ideation to daily operations, Hex Innovations partners with you to build social tools that scale with your brand—powered by AI, designed for teams.",
    bottomParagraphTwo:
      "Contact us today to learn how we can help your team succeed in the digital world.",
    
    ctaLabel: "Let’s talk about your next project",
  },

  {
    id: "Hex-Software",
    cardImage: HexSoftwareCover,
    cardAlt: "African Talent Hiring Service platform empowering businesses to hire top talent across Africa",
    cardTitle: "African Talent Hiring Service",
    cardDescription: "Connect with Africa’s top-tier talent through our end-to-end hiring platform—streamlined sourcing, skill assessments, seamless onboarding, and ongoing team management.",
  
    topImage: HexSoftwareTopImage,
    topImageAlt: "Dashboard of African Talent Hiring Service showing candidate profiles and project assignments",
    projectTitle: "African Talent Hiring Service: Hire, Scale & Succeed with Africa’s Best",
  
    // Intro paragraphs
    introParagraphOne:
      "Global businesses often struggle to source, vet, and onboard skilled professionals across African markets. We built a unified HR platform to bridge the gap—making high-quality talent accessible, vetted, and ready to drive your growth.",
    introParagraphTwo:
      "From role-based matching and automated assessments to time-zone scheduling and integrated payroll, our solution empowers companies to build distributed teams without friction or guesswork.",
  
    // Middle section
    sectionTitle: "Maximize Your HR Impact",
    sectionParagraph: `
      <ul style="list-style-type: disc; padding-left:1rem;">
        <li>AI-driven candidate matching & skill profiling</li>
        <li>Customizable assessments: coding tests, case studies & interviews</li>
        <li>Automated time-zone scheduling & calendar sync</li>
        <li>Integrated contract management & e-signatures</li>
        <li>Secure payroll & invoicing with multi-currency support</li>
        <li>Real-time team analytics: utilization, retention & performance</li>
      </ul>
    `,
    sectionImage: HexSoftwareCover,
    sectionImageAlt: "Screenshot of platform’s candidate dashboard and analytics panel",
  
    // Case study sections
    challengeTitle: "The Challenge",
    challengeParagraph:
      "Our client faced long time-to-hire cycles, inconsistent vetting standards, and manual contract and payroll processes. They needed a platform that could scale across multiple African regions while ensuring quality and compliance.",
  
    solutionTitle: "Our Solution",
    solutionParagraph:
      "At Hex Innovations, we delivered a Next.js/React front end paired with a Node.js/Apollo GraphQL back end. We integrated custom skill-assessment microservices, Calendly for scheduling, Stripe Connect for cross-border payments, and DocuSign for contracts—creating a seamless, end-to-end hiring workflow.",
  
    techStackTitle: "Tech Stack & Integrations",
    techStackList: [
      "React + Next.js for dynamic, SEO-friendly UI",
      "Node.js + Apollo GraphQL for unified data APIs",
      "Python microservices for coding assessments & skill profiling",
      "Calendly & Google Calendar APIs for interview scheduling",
      "Stripe Connect for multi-currency payroll",
      "DocuSign SDK for secure e-signatures",
      "PostgreSQL + Redis for reliable data storage & caching",
      "AWS Lambda & S3 for scalable media processing",
      "Tailwind CSS & Framer Motion for responsive, accessible design"
    ],
  
    featuresTitle: "Key Features",
    featuresList: [
      "AI-powered candidate matching based on role requirements",
      "Automated skill-assessment engine with real-time scoring",
      "One-click interview scheduling with calendar integration",
      "Built-in contract generation & e-signature workflow",
      "Secure, multi-currency payroll & invoicing",
      "Custom dashboards for team utilization, retention & performance metrics"
    ],
  
    uxTitle: "UX & Accessibility",
    uxParagraph:
      "We conducted stakeholder workshops and usability tests with HR teams to refine every flow. The platform meets WCAG 2.1 AA standards, offering keyboard navigation, clear focus states, and high-contrast mode for all users.",
  
    performanceTitle: "Performance & Scalability",
    performanceParagraph:
      "Deployed on Vercel with edge caching and AWS ECS autoscaling, the platform sustains sub-100ms API responses under 3,000 concurrent recruiters and candidates while processing hundreds of assessments per minute.",
  
    securityTitle: "Security & Privacy",
    securityParagraph:
      "Designed for trust: SOC 2 Type II–ready, GDPR/CCPA compliant, end-to-end encryption (AES-256 at rest, TLS 1.3 in transit), and quarterly third-party penetration testing.",
  
    timelineTitle: "Timeline & Collaboration",
    timelineParagraph:
      "Delivered in a 5-month agile engagement: two-week sprints, weekly demos, and continuous client feedback ensured we hit every milestone on time and aligned with evolving hiring needs.",
  
    resultsTitle: "Results & Impact",
    resultsList: [
      "60% reduction in time-to-hire (from 45 to 18 days)",
      "50% increase in candidate quality score via automated assessments",
      "75% decrease in manual contract and payroll overhead",
      "4.9★ average client satisfaction rating",
      "90% user adoption rate within first quarter post-launch"
    ],
  
    postLaunchTitle: "Post-Launch Support",
    postLaunchParagraph:
      "We continue to deliver quarterly feature releases—advanced referral programs, AI-driven retention alerts—and provide 24/7 SLA support and roadmap workshops to keep your hiring engine running smoothly.",
  
    testimonial:
      "“Hex Innovations transformed our hiring process. What used to take months now happens in weeks—with better candidates and zero administrative headaches.” — Sarah O., Head of Talent Acquisition at GlobalTech Solutions",
  
    // Bottom section
    bottomParagraphOne:
      "From concept to continuous innovation, Hex Innovations partners with you to build robust, scalable hiring solutions—empowering you to tap into Africa’s brightest professionals.",
    bottomParagraphTwo:
      "Ready to unlock Africa’s talent pool? Let’s talk about how our platform can drive growth for your team.",
    
    ctaLabel: "Let’s talk about your next project",
  },
  
  {
    id: "clisha-review",
    cardImage: clishaReviewCover,
    cardAlt: "Clisha Review dashboard showing review analytics and QR code",
    cardTitle: "Clisha Review",
    cardDescription:
      "Clisha Review is an end-to-end reputation platform that helps businesses capture more 5-star reviews, monitor feedback in real time, and showcase top ratings to attract new customers.",
  
    topImage: ClishaReviewtopImage,
    topImageAlt:
      "Clisha Review interface displaying live review feed, analytics charts, and QR-code generator",
    projectTitle: "Clisha Review: The Ultimate Review Management Tool",
  
    // Intro paragraphs
    introParagraphOne:
      "Consumers trust online reviews as much as personal recommendations—but collecting and managing feedback can feel like a full-time job. Clisha Review centralizes the process, turning every happy customer into a powerful marketing asset.",
    introParagraphTwo:
      "From QR-powered collection to Google Review integration and advanced sentiment analytics, Clisha Review puts you in control of your reputation—so you can build trust, respond faster, and grow your business.",
  
    // Middle section
    sectionTitle: "How It Works",
    sectionParagraph: `
      <ol style="list-style-type: decimal; padding-left: 1rem;">
        <li><strong>Generate QR & Links:</strong> Create branded QR codes and shareable links in seconds.</li>
        <li><strong>Capture Feedback:</strong> Customers scan or click to leave reviews on your site or Google.</li>
        <li><strong>Aggregate & Analyze:</strong> Pull in reviews from Google, Facebook, and Yelp for a single view.</li>
        <li><strong>Showcase & Respond:</strong> Publish top reviews automatically and reply in real time to boost engagement.</li>
      </ol>
    `,
    sectionImage: clishaReviewCover,
    sectionImageAlt:
      "Step-by-step flow showing QR code generation, feedback form, and analytics charts",
  
    // Case study sections
    challengeTitle: "The Challenge",
    challengeParagraph:
      "Our client struggled with scattered feedback—manual follow-ups, lost review requests, and no single source of truth. Negative comments slipped through the cracks, and strong reviews never reached a wider audience.",
  
    solutionTitle: "Our Solution",
    solutionParagraph:
      "At Hex Innovations, we built Clisha Review with a React/Next.js front end and Node.js/GraphQL back end. We integrated Google Places & Facebook Graph APIs for automatic review aggregation, implemented qrcode.js for on-brand QR generation, and used Socket.io for real-time review alerts.",
  
    techStackTitle: "Tech Stack & Integrations",
    techStackList: [
      "React + Next.js for SEO-friendly, server-rendered UI",
      "Node.js + Apollo GraphQL for unified data endpoints",
      "Google Places API & Facebook Graph API for review import",
      "qrcode.js for dynamic QR code generation",
      "Socket.io + Redis for real-time notifications",
      "MongoDB Atlas for flexible review storage",
      "Tailwind CSS & Framer Motion for responsive design",
      "Chart.js for interactive review analytics"
    ],
  
    featuresTitle: "Key Features",
    featuresList: [
      "Branded QR codes & short links for instant review capture",
      "Multi-source aggregation: Google, Facebook, Yelp & more",
      "Real-time email & in-app alerts on new reviews",
      "Sentiment analysis to flag high-impact feedback",
      "Custom landing pages to showcase top ratings",
      "Automated negative-review filtering & response templates"
    ],
  
    uxTitle: "UX & Accessibility",
    uxParagraph:
      "We conducted user interviews with small business owners and ran accessibility audits to ensure WCAG 2.1 AA compliance, intuitive mobile workflows, and clear error states for seamless adoption.",
  
    performanceTitle: "Performance & Scalability",
    performanceParagraph:
      "Deployed on Vercel with edge caching and a horizontally-scaled Node cluster, Clisha Review delivers sub-150 ms average API responses and handles bursts of 500+ review imports per minute.",
  
    securityTitle: "Security & Privacy",
    securityParagraph:
      "Designed for trust: GDPR-compliant data handling, AES-256 encryption at rest, TLS 1.3 in transit, granular role-based access, and quarterly third-party penetration tests.",
  
    timelineTitle: "Timeline & Collaboration",
    timelineParagraph:
      "Delivered in a rapid 8-week sprint cadence: weekly demos, client feedback loops, and Kanban workflow ensured we hit every milestone and fine-tuned the experience along the way.",
  
    resultsTitle: "Results & Impact",
    resultsList: [
      "60% uplift in total review volume within one month",
      "45% increase in average star rating on Google",
      "80% reduction in negative-feedback response time",
      "30% growth in organic traffic from review widgets",
      "4.9★ average user satisfaction score post-launch"
    ],
  
    postLaunchTitle: "Post-Launch Support",
    postLaunchParagraph:
      "We provide ongoing feature releases—including AI-powered auto-responses and advanced referral tracking—and 24/7 SLA support to keep your reputation engine running smoothly.",
  
    testimonial:
      "“Clisha Review transformed our feedback process. We now capture three times more 5-star reviews, and our team responds faster than ever. Hex Innovations nailed the perfect balance of power and simplicity.” — Maria T., Owner of Sunshine Café",
  
    // Bottom section
    bottomParagraphOne:
      "From concept to continuous improvement, Hex Innovations partners with you to build reputation tools that scale—turning every customer voice into your strongest marketing channel.",
    bottomParagraphTwo:
      `Ready to elevate your online storefront? At <span style="font-weight: bold; color: #E3FF52">Hex Innovations</span>, we bring your ideas to life. With modern technologies and stacks, we walk with you from ideation to launching your products together!`,
    ctaLabel: "Request for Our Service",
  }
  

];

export default projectsData;
