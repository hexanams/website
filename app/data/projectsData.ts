import { StaticImageData } from "next/image";
import cardImage from "@/public/images/clisha-review.png";
import sectionImage from "@/public/images/cardImage.png";
import topImage from "@/public/images/topImage-projectDetails.png";
// If you have a second image, import it here (e.g., codeSnippet)

export interface ProjectData {
  // Fields for the "card" display in OurProjects
  id: string;
  cardImage: StaticImageData;
  cardAlt: string;
  cardTitle: string;
  cardDescription: string;

  // Fields for the detail page
  topImage: StaticImageData;
  topImageAlt: string;
  projectTitle: string;

  // TWO intro paragraphs
  introParagraphOne: string;
  introParagraphTwo: string;

  sectionTitle: string;
  sectionParagraph: string;
  sectionImage: StaticImageData;
  sectionImageAlt: string;

  // TWO bottom paragraphs
  bottomParagraphOne: string;
  bottomParagraphTwo: string;

  ctaLabel: string;
}

const projectsData: ProjectData[] = [
  {
    id: "clisha-review",

    // Card fields
    cardImage: cardImage,
    cardAlt: "Clisha Review",
    cardTitle: "Clisha Review",
    cardDescription:
      "We specialize in seamless, scalable, and user-centric solutions that help you stand out...",

    // Detail fields
    topImage: topImage,
    topImageAlt: "Laptop with code on the desk",
    projectTitle: "Clisha Review",

    introParagraphOne:
      "At [Your Company Name], we are passionate about building innovative digital solutions that drive growth and efficiency. With expertise in software development, mobile apps, cloud solutions, and more, we help our clients stay ahead of the competition.",
    introParagraphTwo:
      "Our team is dedicated to delivering seamless, scalable, and intuitive solutions tailored to meet your unique needs. Whether you're looking for a robust web platform or a cutting-edge mobile app, we've got you covered.",

    sectionTitle: "Software Development",
    sectionParagraph:
      "Transform your ideas into reality with our expert software development services. From concept to deployment, we build robust and user-centric products that drive growth. Let’s create something amazing together!",
    sectionImage: sectionImage,
    sectionImageAlt: "Code snippet or second relevant image",

    bottomParagraphOne:
      "At [Your Company Name], we take pride in staying at the forefront of technology. We combine modern frameworks, best practices, and a user-first mindset to deliver solutions that stand out in today’s digital landscape.",
    bottomParagraphTwo:
      "Our mission is to ensure your product not only meets your expectations but also resonates with your audience. From ideation to launch, we’re committed to making your vision a reality.",

    ctaLabel: "Request for a Service",
  },

  {
    id: "creqe-mobile-app",
    cardImage: cardImage,
    cardAlt: "Creqe Mobile App",
    cardTitle: "Creqe Mobile App",
    cardDescription:
      "Transform your ideas into reality with our expert software development services...",

    topImage: topImage,
    topImageAlt: "Mobile App Hero Image",
    projectTitle: "Creqe Mobile App",

    introParagraphOne:
      "At [Your Company Name], we craft cutting-edge mobile experiences designed to engage users and drive growth. Our team excels in building scalable, intuitive apps that stand out in today's market.",
    introParagraphTwo:
      "We leverage modern frameworks and seamless UI/UX design to create powerful, user-friendly applications that elevate your brand’s presence and accessibility.",

    sectionTitle: "Why Creqe?",
    sectionParagraph:
      "From concept to launch, our comprehensive mobile app development process ensures robust features, seamless UX, and efficient performance. Together, let's bring your idea to life!",
    sectionImage: sectionImage,
    sectionImageAlt: "Creqe Mobile App code snippet",

    bottomParagraphOne:
      "We handle everything from UI/UX design to backend infrastructure, ensuring a smooth path to success. Whether you're looking to launch an MVP or a full-fledged product, our team is here to support you every step of the way.",
    bottomParagraphTwo:
      "Partner with us to turn your mobile app vision into a high-performing reality that resonates with users across the globe.",

    ctaLabel: "Request for a Service",
  },

  {
    id: "neo-dashboard",
    cardImage: cardImage,
    cardAlt: "Neo Dashboard",
    cardTitle: "Neo Dashboard",
    cardDescription:
      "Empower decision-making with a dynamic and intuitive dashboard solution...",

    topImage: topImage,
    topImageAlt: "Dashboard Hero Image",
    projectTitle: "Neo Dashboard",

    introParagraphOne:
      "Neo Dashboard is built to provide real-time insights and analytics for businesses of all sizes. Our focus is on delivering complex data in a simplified format.",
    introParagraphTwo:
      "Leveraging the latest data visualization tools, we help clients identify trends, spot bottlenecks, and make data-driven decisions with confidence.",

    sectionTitle: "Real-Time Analytics",
    sectionParagraph:
      "Our advanced analytics modules pull data from multiple sources, updating key performance indicators in real time. You’ll have a clear view of your operations at any moment.",
    sectionImage: sectionImage,
    sectionImageAlt: "Neo Dashboard code snippet",

    bottomParagraphOne:
      "Security and scalability are at the core of Neo Dashboard’s architecture, ensuring safe and smooth handling of high-volume data as your business grows.",
    bottomParagraphTwo:
      "Whether it’s integrating new datasets or customizing analytics, our team is ready to tailor Neo Dashboard to your unique requirements.",

    ctaLabel: "Request for a Service",
  },

  {
    id: "skyfarm-website",
    cardImage: cardImage,
    cardAlt: "SkyFarm Website",
    cardTitle: "SkyFarm Website",
    cardDescription:
      "A next-level website to showcase and manage modern urban farming practices...",

    topImage: topImage,
    topImageAlt: "SkyFarm Website Hero Image",
    projectTitle: "SkyFarm Website",

    introParagraphOne:
      "SkyFarm's mission is to revolutionize urban agriculture with innovative solutions for vertical farming. We designed a website that captures their vision and connects with stakeholders.",
    introParagraphTwo:
      "From highlighting sustainable growing techniques to facilitating online orders for fresh produce, our platform seamlessly integrates all aspects of SkyFarm’s operations.",

    sectionTitle: "User-Centric Design",
    sectionParagraph:
      "Every page on the SkyFarm website is thoughtfully designed to engage visitors and provide the information they need. We ensured intuitive navigation and captivating visuals that reflect the brand's eco-friendly ethos.",
    sectionImage: sectionImage,
    sectionImageAlt: "SkyFarm Website snippet",

    bottomParagraphOne:
      "Behind the scenes, robust backend systems support product listings, order management, and customer feedback loops, ensuring smooth day-to-day operations.",
    bottomParagraphTwo:
      "SkyFarm’s online presence not only boosts credibility but also educates the public on modern farming solutions, driving awareness and advocacy.",

    ctaLabel: "Request for a Service",
  },

  {
    id: "verito-enterprise",
    cardImage: cardImage,
    cardAlt: "Verito Enterprise",
    cardTitle: "Verito Enterprise",
    cardDescription:
      "A custom enterprise solution built for efficiency, scalability, and seamless collaboration...",

    topImage: topImage,
    topImageAlt: "Verito Enterprise Hero Image",
    projectTitle: "Verito Enterprise",

    introParagraphOne:
      "Verito Enterprise was developed with large-scale teams and complex workflows in mind, offering a centralized platform for project management, communication, and analytics.",
    introParagraphTwo:
      "By integrating various tools and processes, Verito Enterprise cuts down operational overhead and enhances team productivity across multiple locations.",

    sectionTitle: "End-to-End Integration",
    sectionParagraph:
      "Our solution merges CRM, ERP, and analytics modules into one cohesive ecosystem. This single source of truth ensures accurate data flow and minimal redundancy.",
    sectionImage: sectionImage,
    sectionImageAlt: "Verito Enterprise code snippet",

    bottomParagraphOne:
      "With enterprise-grade security and robust access controls, sensitive data is protected, while still enabling stakeholders to access critical information when they need it.",
    bottomParagraphTwo:
      "Ongoing support and updates keep Verito Enterprise aligned with evolving business needs, ensuring that it remains a cornerstone of operational excellence.",

    ctaLabel: "Request for a Service",
  },

  {
    id: "roadsync-e-commerce",
    cardImage: cardImage,
    cardAlt: "RoadSync E-Commerce",
    cardTitle: "RoadSync E-Commerce",
    cardDescription:
      "An end-to-end e-commerce platform optimized for high-volume and diverse product catalogs...",

    topImage: topImage,
    topImageAlt: "RoadSync E-Commerce Hero Image",
    projectTitle: "RoadSync E-Commerce",

    introParagraphOne:
      "RoadSync E-Commerce caters to businesses looking to sell products and services online with ease. Its modular design supports expansions, integrations, and heavy traffic.",
    introParagraphTwo:
      "Our approach emphasizes secure transactions, user-friendly interfaces, and streamlined inventory management to maximize conversions and reduce friction.",

    sectionTitle: "Omnichannel Experience",
    sectionParagraph:
      "Beyond a simple storefront, RoadSync connects with social media, physical retail points, and third-party logistics providers, offering a cohesive shopping journey for customers.",
    sectionImage: sectionImage,
    sectionImageAlt: "RoadSync code snippet",

    bottomParagraphOne:
      "Adaptive layout and mobile responsiveness ensure that customers enjoy a consistent experience, whether they're on a desktop, tablet, or smartphone.",
    bottomParagraphTwo:
      "Advanced analytics provide insights into buying patterns, helping you refine strategies and stay competitive in the fast-paced world of online retail.",

    ctaLabel: "Request for a Service",
  },

  {
    id: "aquadex-data",
    cardImage: cardImage,
    cardAlt: "Aquadex Data Platform",
    cardTitle: "Aquadex Data Platform",
    cardDescription:
      "A high-performance data platform designed to monitor, analyze, and protect water resources...",

    topImage: topImage,
    topImageAlt: "Aquadex Data Hero Image",
    projectTitle: "Aquadex Data Platform",

    introParagraphOne:
      "Aquadex is a robust data platform for environmental agencies and water management organizations. It tracks water quality metrics, usage patterns, and real-time sensor inputs.",
    introParagraphTwo:
      "We built Aquadex to handle massive data flows and deliver clear, actionable insights for sustainable water management, risk mitigation, and policy planning.",

    sectionTitle: "Scalable Monitoring",
    sectionParagraph:
      "From small-scale local communities to sprawling utilities, Aquadex adapts to various needs. Its modular architecture supports custom analytics, forecasting, and alert systems.",
    sectionImage: sectionImage,
    sectionImageAlt: "Aquadex code snippet",

    bottomParagraphOne:
      "Cutting-edge security measures protect sensitive environmental data while enabling researchers, technicians, and decision-makers to collaborate effectively.",
    bottomParagraphTwo:
      "By integrating historical datasets, predictive models, and real-time monitoring, Aquadex empowers stakeholders to adopt proactive water resource strategies.",

    ctaLabel: "Request for a Service",
  },

  {
    id: "enigma-automation",
    cardImage: cardImage,
    cardAlt: "Enigma Automation Suite",
    cardTitle: "Enigma Automation Suite",
    cardDescription:
      "An intelligent automation platform streamlining repetitive tasks and boosting productivity...",

    topImage: topImage,
    topImageAlt: "Enigma Automation Hero Image",
    projectTitle: "Enigma Automation Suite",

    introParagraphOne:
      "Enigma Automation Suite combines AI-driven workflows and robotic process automation to eliminate mundane tasks and free up teams for high-value projects.",
    introParagraphTwo:
      "From document processing to advanced analytics, Enigma’s flexible architecture allows for quick deployment of new automations and seamless integration with legacy systems.",

    sectionTitle: "AI & RPA Synergy",
    sectionParagraph:
      "Our platform’s core AI engine continuously learns from user actions, making suggestions to optimize processes further. RPA bots handle repetitive tasks, ensuring speed and accuracy.",
    sectionImage: sectionImage,
    sectionImageAlt: "Enigma Automation code snippet",

    bottomParagraphOne:
      "Enigma’s automation potential spans multiple industries, including finance, healthcare, and manufacturing, reducing costs and turnaround times.",
    bottomParagraphTwo:
      "Ongoing updates ensure the suite remains compatible with evolving technology stacks and security standards, safeguarding your investment for years to come.",

    ctaLabel: "Request for a Service",
  },
];

export default projectsData;
