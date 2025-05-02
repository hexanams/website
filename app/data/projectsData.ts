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
    id: "kinderly-app",
    cardImage: cardImage,
    cardAlt: "Kinderly parenting app with AI advice tailored to your child",
    cardTitle: "Kinderly",
    cardDescription: "The first parenting app delivering AI-powered guidance personalized to each child’s development, health, and behavior.",
    topImage: topImage,
    topImageAlt: "Mother and daughter interacting with Kinderly app on a smartphone",
    projectTitle: "Kinderly: AI-Powered Parenting Companion",
    introParagraphOne: "Parenting raises countless questions about your child’s development, health, and behavior. Kinderly harnesses advanced AI to deliver personalized, expert-level advice—no fluff, no searching—just clear, actionable answers when you need them.",
    introParagraphTwo: "Our intuitive app adapts to each child’s unique profile, offering context-aware guidance you can trust. Whether you’re managing one child or several, Kinderly supports busy parents with on-demand insights anytime, day or night.",
    sectionTitle: "Everything Parents Need, Right at Your Fingertips 👆",
    sectionParagraph: "Kinderly combines tailored AI guidance, professional expertise, multi-child management, contextual memory, intuitive design, and rigorous privacy safeguards—ensuring you get reliable answers in seconds, exactly when you need them.",
    sectionImage: sectionImage,
    sectionImageAlt: "Feature highlights of the Kinderly app showing AI tips and multi-child dashboard",
    bottomParagraphOne: "We’re dedicated to staying at the forefront of AI and parenting research. By blending modern machine-learning with a user-first mindset, Kinderly delivers insights that truly resonate with your family’s needs.",
    bottomParagraphTwo: "Our mission is to empower parents with confidence and peace of mind. From the first download to everyday use, Kinderly is your trusted partner on the parenting journey.",
    ctaLabel: "Start Free Trial",
  },

  {
    id: "mindfulpath-therapy",
    cardImage: cardImage,
    cardAlt: "Serene river and mossy rocks symbolizing calm and healing",
    cardTitle: "MindfulPath Therapy",
    cardDescription: "Personalized, compassionate mental health support through expert-led therapy sessions in a safe, non-judgmental environment.",
    topImage: topImage,
    topImageAlt: "Tranquil nature scene to evoke mental well-being and peace",
    projectTitle: "MindfulPath: Your Journey to Mental Well-Being",
    introParagraphOne: "At MindfulPath, we believe mental well-being is a journey best traveled with support. Our licensed therapists provide personalized care tailored to your unique experiences and goals, empowering you every step of the way.",
    introParagraphTwo: "Whether you’re seeking individual, couples, child & adolescent, workplace, or specialized therapy, MindfulPath offers a safe, inclusive space to explore, heal, and grow. Start your path to a healthier mind today.",
    sectionTitle: "Comprehensive Therapy Services",
    sectionParagraph: "From one-on-one sessions to targeted programs, our services combine evidence-based techniques with empathetic guidance—ensuring you receive the right support, at the right time, in the way that fits your life.",
    sectionImage: sectionImage,
    sectionImageAlt: "Collage of therapy settings: individual, couples, child, workplace",
    bottomParagraphOne: "Our accredited professionals uphold the highest standards of care, offering flexible scheduling, both virtual and in-person options, and strict confidentiality—so you can focus fully on your growth.",
    bottomParagraphTwo: "Take the first step toward lasting change. Whether you’re navigating stress, relationship challenges, or personal development, MindfulPath is here to guide and support you on your journey to well-being.",
    ctaLabel: "Book Your First Session"
  },

  {
    id: "clisha-review",
    cardImage: cardImage,
    cardAlt: "Clisha Review dashboard showing review analytics and QR code",
    cardTitle: "Clisha Review",
    cardDescription:
      "Maximise your online reviews, attract more customers, and take control of your reputation with an all-in-one review management platform.",
    topImage: topImage,
    topImageAlt: "Clisha Review user interface displaying review metrics and customer feedback",
    projectTitle: "Clisha Review: The Ultimate Review Management Tool",
    introParagraphOne:
      "90% of customers trust online reviews as much as personal recommendations. Clisha Review empowers businesses to capture more 5-star ratings, monitor feedback in real time, and showcase your best reviews—so you can build trust and drive growth.",
    introParagraphTwo:
      "Our platform centralises review collection and management, offering seamless QR code generation, Google Review integration, and powerful analytics. No more chasing feedback or worrying about negative reviews—you’re in control.",
    sectionTitle: "How It Works",
    sectionParagraph:
      "In just four simple steps, Clisha Review helps you generate, monitor, and respond to customer reviews effortlessly—boosting your online reputation and attracting new business.",
    sectionImage: sectionImage,
    sectionImageAlt: "Hand holding phone displaying Clisha Review QR code for customer feedback",
    bottomParagraphOne:
      "With features like high-quality QR code stickers, custom landing pages, real-time email alerts, and negative review filtering, Clisha Review provides everything you need to streamline feedback collection and protect your brand.",
    bottomParagraphTwo:
      "Priced at just €60 per year, our solution is affordable for businesses of all sizes. Join Clisha Review today to enhance customer satisfaction, increase visibility, and unlock the power of positive reviews.",
    ctaLabel: "Get Started Now"
  },
  
  {
    id: "icu-community",
    cardImage: cardImage,
    cardAlt: "ICU Community platform interface showcasing features and functionalities",
    cardTitle: "ICU Community",
    cardDescription: "Build, grow, and engage your community like never before with ICU Community's all-in-one platform, designed to empower and transform your digital experiences.",
    topImage: topImage,
    topImageAlt: "ICU Community platform showing user dashboard and engagement features",
    projectTitle: "ICU Community: Empowering and Transforming Community Engagement",
    introParagraphOne: "ICU Community offers a dynamic platform to build and engage communities effectively. Whether you're managing a local group or a global network, ICU Community helps you connect, grow, and thrive with its easy-to-use tools and integrated features.",
    introParagraphTwo: "With ICU Community, you can create a space where members feel valued, stay engaged, and collaborate. The platform empowers admins and members alike with tools for communication, task management, and community growth.",
    sectionTitle: "Supercharge Your Community with These Powerful Features",
    sectionParagraph: "ICU Community offers AI-driven automation, advanced monitoring, and real-time engagement tools to ensure your community grows with ease and efficiency. Streamline workflows, engage members, and gain valuable insights with our cutting-edge platform.",
    sectionImage: sectionImage,
    sectionImageAlt: "Screenshot of ICU Community dashboard displaying user statistics and community interactions",
    bottomParagraphOne: "Our platform includes a range of powerful tools to manage and grow your community, including member management, content sharing, event planning, and much more. ICU Community gives you the support you need to build lasting connections.",
    bottomParagraphTwo: "Start today with ICU Community's flexible pricing options. Whether you're just starting or ready to scale, we offer plans to meet your needs. Join ICU Community now and start transforming how you engage with your members.",
    ctaLabel: "Get Started Now"
  },
  
  {
    id: "mental-wellbeing",
    cardImage: cardImage,
    cardAlt: "Mental Wellbeing platform interface showcasing therapy and consultation services",
    cardTitle: "Mental Wellbeing",
    cardDescription: "Take the first step towards a life of empowerment and fulfillment with our expert therapy services. Whether you're seeking individual therapy, support for your family, or help in the workplace, Mental Wellbeing is here to guide you.",
    topImage: topImage,
    topImageAlt: "Mental Wellbeing platform displaying professional therapy sessions and client support",
    projectTitle: "Mental Wellbeing: Empowering Your Journey to Mental Health",
    introParagraphOne: "At Mental Wellbeing, we believe in providing a safe, non-judgmental space where you can express yourself and take control of your mental health journey. From personal therapy to workplace support, our services are tailored to your unique needs.",
    introParagraphTwo: "Our team of licensed professionals offers compassionate support to help you overcome life’s challenges and develop strategies for lasting mental health. With a focus on empathy, confidentiality, and expert guidance, we help you achieve fulfillment.",
    sectionTitle: "Therapy Services We Offer",
    sectionParagraph: "We offer a wide range of therapeutic services to support individuals at various stages of life. Whether you're navigating personal struggles, managing a family, or seeking professional guidance, we have a program designed for you.",
    sectionImage: sectionImage,
    sectionImageAlt: "Mental Wellbeing professional therapy session with clients",
    bottomParagraphOne: "From individual therapy to couples and workplace support, our services cover a broad spectrum of needs. Explore our diverse offerings, including child and adolescent therapy, adult therapy, and much more. Together, we can take the first step towards better mental health.",
    bottomParagraphTwo: "Get started today by booking your first session. Our easy-to-navigate platform allows you to schedule and manage your therapy appointments with ease, ensuring that you receive the support you need, when you need it.",
    ctaLabel: "Book Your Appointment Now"
  },
  
  {
    id: "clisha-social",
    cardImage: cardImage,
    cardAlt: "Clisha Social platform interface showcasing automated social media management features",
    cardTitle: "Clisha Social",
    cardDescription: "Manage your social media effortlessly with Clisha Social's all-in-one platform, designed to streamline content creation, scheduling, and community engagement.",
    topImage: topImage,
    topImageAlt: "Clisha Social platform showing automated posting and engagement analytics",
    projectTitle: "Clisha Social: Simplify Your Social Media Management",
    introParagraphOne: "Clisha Social is the perfect solution for businesses and individuals looking to optimize their social media management. From automating posts to engaging with your audience, Clisha Social provides a seamless experience to help you grow your online presence.",
    introParagraphTwo: "Our platform makes it easy to schedule posts, track engagement, and show off your expertise through blog automation. With Clisha Social, you can manage your content and connect with your audience across multiple channels effortlessly.",
    sectionTitle: "Key Features of Clisha Social",
    sectionParagraph: "Clisha Social offers a range of tools to enhance your social media engagement, including automated posting, blog management, content scheduling, and advanced performance tracking. Take control of your social media strategy with ease.",
    sectionImage: sectionImage,
    sectionImageAlt: "Clisha Social dashboard showing scheduled posts and engagement metrics",
    bottomParagraphOne: "With features like auto-scheduling, AI-driven content suggestions, and detailed performance analytics, Clisha Social empowers you to grow your brand and reach a wider audience. Get started today and make social media management easier than ever.",
    bottomParagraphTwo: "Clisha Social offers flexible pricing plans tailored to your needs. Whether you're a small business or a large enterprise, our platform helps you automate and streamline your social media management. Join Clisha Social today and start growing your online presence.",
    ctaLabel: "Start Managing Your Social Media Today"
  },

  // {
  //   id: "creqe-mobile-app",
  //   cardImage: cardImage,
  //   cardAlt: "Creqe Mobile App",
  //   cardTitle: "Creqe Mobile App",
  //   cardDescription:
  //     "Transform your ideas into reality with our expert software development services. We build intuitive, scalable, and high-performing mobile applications that ensure seamless user experiences and help businesses grow in today’s competitive digital landscape.",
  //   topImage: topImage,
  //   topImageAlt: "Mobile App Hero Image Hex Innovations is a global software development",
  //   projectTitle: "Creqe Mobile App",
  //   introParagraphOne:
  //     "At [Your Company Name], we craft cutting-edge mobile experiences designed to engage users and drive growth. Our team excels in building scalable, intuitive apps that stand out in today's market.",
  //   introParagraphTwo:
  //     "We leverage modern frameworks and seamless UI/UX design to create powerful, user-friendly applications that elevate your brand’s presence and accessibility.",
  //   sectionTitle: "Why Creqe?",
  //   sectionParagraph:
  //     "From concept to launch, our comprehensive mobile app development process ensures robust features, seamless UX, and efficient performance. Together, let's bring your idea to life!",
  //   sectionImage: sectionImage,
  //   sectionImageAlt: "Creqe Mobile App code snippet",
  //   bottomParagraphOne:
  //     "We handle everything from UI/UX design to backend infrastructure, ensuring a smooth path to success. Whether you're looking to launch an MVP or a full-fledged product, our team is here to support you every step of the way.",
  //   bottomParagraphTwo:
  //     "Partner with us to turn your mobile app vision into a high-performing reality that resonates with users across the globe.",
  //   ctaLabel: "Request for a Service",
  // },

  // {
  //   id: "neo-dashboard",
  //   cardImage: cardImage,
  //   cardAlt: "Neo Dashboard Hex Innovations is a global software development",
  //   cardTitle: "Neo Dashboard",
  //   cardDescription:
  //     "Empower decision-making with a dynamic and intuitive dashboard solution designed for real-time analytics, data-driven insights, and seamless business intelligence. Our technology ensures businesses can track performance, identify trends, and optimize operations effectively.",
  //   topImage: topImage,
  //   topImageAlt: "Dashboard Hero Image Hex Innovations is a global software development",
  //   projectTitle: "Neo Dashboard",
  //   introParagraphOne:
  //     "Neo Dashboard is built to provide real-time insights and analytics for businesses of all sizes. Our focus is on delivering complex data in a simplified format.",
  //   introParagraphTwo:
  //     "Leveraging the latest data visualization tools, we help clients identify trends, spot bottlenecks, and make data-driven decisions with confidence.",
  //   sectionTitle: "Real-Time Analytics",
  //   sectionParagraph:
  //     "Our advanced analytics modules pull data from multiple sources, updating key performance indicators in real time. You’ll have a clear view of your operations at any moment.",
  //   sectionImage: sectionImage,
  //   sectionImageAlt: "Neo Dashboard code snippet Hex Innovations is a global software development",
  //   bottomParagraphOne:
  //     "Security and scalability are at the core of Neo Dashboard’s architecture, ensuring safe and smooth handling of high-volume data as your business grows.",
  //   bottomParagraphTwo:
  //     "Whether it’s integrating new datasets or customizing analytics, our team is ready to tailor Neo Dashboard to your unique requirements.",
  //   ctaLabel: "Request for a Service",
  // },

  // {
  //   id: "skyfarm-website",
  //   cardImage: cardImage,
  //   cardAlt: "SkyFarm Website Hex Innovations is a global software development",
  //   cardTitle: "SkyFarm Website",
  //   cardDescription:
  //     "A next-level website designed to showcase and manage modern urban farming practices. Our solutions integrate seamless UI/UX, e-commerce features, and automation to drive efficiency, increase engagement, and empower sustainable agricultural initiatives.",
  //   topImage: topImage,
  //   topImageAlt: "SkyFarm Website Hero Image Hex Innovations is a global software development",
  //   projectTitle: "SkyFarm Website",
  //   introParagraphOne:
  //     "SkyFarm's mission is to revolutionize urban agriculture with innovative solutions for vertical farming. We designed a website that captures their vision and connects with stakeholders.",
  //   introParagraphTwo:
  //     "From highlighting sustainable growing techniques to facilitating online orders for fresh produce, our platform seamlessly integrates all aspects of SkyFarm’s operations.",
  //   sectionTitle: "User-Centric Design",
  //   sectionParagraph:
  //     "Every page on the SkyFarm website is thoughtfully designed to engage visitors and provide the information they need. We ensured intuitive navigation and captivating visuals that reflect the brand's eco-friendly ethos.",
  //   sectionImage: sectionImage,
  //   sectionImageAlt: "SkyFarm Website snippet Hex Innovations is a global software development",
  //   bottomParagraphOne:
  //     "Behind the scenes, robust backend systems support product listings, order management, and customer feedback loops, ensuring smooth day-to-day operations.",
  //   bottomParagraphTwo:
  //     "SkyFarm’s online presence not only boosts credibility but also educates the public on modern farming solutions, driving awareness and advocacy.",
  //   ctaLabel: "Request for a Service",
  // },

  // {
  //   id: "verito-enterprise",
  //   cardImage: cardImage,
  //   cardAlt: "Verito Enterprise Hex Innovations is a global software development",
  //   cardTitle: "Verito Enterprise",
  //   cardDescription:
  //     "A custom enterprise solution built for efficiency, scalability, and seamless collaboration. Our advanced platform integrates project management, analytics, automation, and security, allowing businesses to streamline operations and enhance productivity.",
  //   topImage: topImage,
  //   topImageAlt: "Verito Enterprise Hero Image Hex Innovations is a global software development",
  //   projectTitle: "Verito Enterprise",
  //   introParagraphOne:
  //     "Verito Enterprise was developed with large-scale teams and complex workflows in mind, offering a centralized platform for project management, communication, and analytics.",
  //   introParagraphTwo:
  //     "By integrating various tools and processes, Verito Enterprise cuts down operational overhead and enhances team productivity across multiple locations.",
  //   sectionTitle: "End-to-End Integration",
  //   sectionParagraph:
  //     "Our solution merges CRM, ERP, and analytics modules into one cohesive ecosystem. This single source of truth ensures accurate data flow and minimal redundancy.",
  //   sectionImage: sectionImage,
  //   sectionImageAlt: "Verito Enterprise code snippet Hex Innovations is a global software development",
  //   bottomParagraphOne:
  //     "With enterprise-grade security and robust access controls, sensitive data is protected, while still enabling stakeholders to access critical information when they need it.",
  //   bottomParagraphTwo:
  //     "Ongoing support and updates keep Verito Enterprise aligned with evolving business needs, ensuring that it remains a cornerstone of operational excellence.",
  //   ctaLabel: "Request for a Service",
  // },

  // {
  //   id: "roadsync-e-commerce",
  //   cardImage: cardImage,
  //   cardAlt: "RoadSync E-Commerce Hex Innovations is a global software development",
  //   cardTitle: "RoadSync E-Commerce",
  //   cardDescription:
  //     "An end-to-end e-commerce platform optimized for high-volume and diverse product catalogs. Our system offers seamless inventory management, secure payments, and personalized shopping experiences to help businesses scale effortlessly.",
  //   topImage: topImage,
  //   topImageAlt: "RoadSync E-Commerce Hero Image Hex Innovations is a global software development",
  //   projectTitle: "RoadSync E-Commerce",
  //   introParagraphOne:
  //     "RoadSync E-Commerce caters to businesses looking to sell products and services online with ease. Its modular design supports expansions, integrations, and heavy traffic.",
  //   introParagraphTwo:
  //     "Our approach emphasizes secure transactions, user-friendly interfaces, and streamlined inventory management to maximize conversions and reduce friction.",
  //   sectionTitle: "Omnichannel Experience",
  //   sectionParagraph:
  //     "Beyond a simple storefront, RoadSync connects with social media, physical retail points, and third-party logistics providers, offering a cohesive shopping journey for customers.",
  //   sectionImage: sectionImage,
  //   sectionImageAlt: "RoadSync code snippet Hex Innovations is a global software development",
  //   bottomParagraphOne:
  //     "Adaptive layout and mobile responsiveness ensure that customers enjoy a consistent experience, whether they're on a desktop, tablet, or smartphone.",
  //   bottomParagraphTwo:
  //     "Advanced analytics provide insights into buying patterns, helping you refine strategies and stay competitive in the fast-paced world of online retail.",
  //   ctaLabel: "Request for a Service",
  // },

  // {
  //   id: "aquadex-data",
  //   cardImage: cardImage,
  //   cardAlt: "Aquadex Data Platform Hex Innovations is a global software development",
  //   cardTitle: "Aquadex Data Platform",
  //   cardDescription:
  //     "A high-performance data platform designed to monitor, analyze, and protect water resources. With real-time data tracking, predictive analytics, and AI-driven insights, we empower organizations to drive sustainable water management strategies.",
  //   topImage: topImage,
  //   topImageAlt: "Aquadex Data Hero Image Hex Innovations is a global software development",
  //   projectTitle: "Aquadex Data Platform",
  //   introParagraphOne:
  //     "Aquadex is a robust data platform for environmental agencies and water management organizations. It tracks water quality metrics, usage patterns, and real-time sensor inputs.",
  //   introParagraphTwo:
  //     "We built Aquadex to handle massive data flows and deliver clear, actionable insights for sustainable water management, risk mitigation, and policy planning.",
  //   sectionTitle: "Scalable Monitoring",
  //   sectionParagraph:
  //     "From small-scale local communities to sprawling utilities, Aquadex adapts to various needs. Its modular architecture supports custom analytics, forecasting, and alert systems.",
  //   sectionImage: sectionImage,
  //   sectionImageAlt: "Aquadex code snippet Hex Innovations is a global software development",
  //   bottomParagraphOne:
  //     "Cutting-edge security measures protect sensitive environmental data while enabling researchers, technicians, and decision-makers to collaborate effectively.",
  //   bottomParagraphTwo:
  //     "By integrating historical datasets, predictive models, and real-time monitoring, Aquadex empowers stakeholders to adopt proactive water resource strategies.",
  //   ctaLabel: "Request for a Service",
  // },

  // {
  //   id: "enigma-automation",
  //   cardImage: cardImage,
  //   cardAlt: "Enigma Automation Suite Hex Innovations is a global software developments",
  //   cardTitle: "Enigma Automation Suite",
  //   cardDescription:
  //     "An intelligent automation platform streamlining repetitive tasks and boosting productivity. Using AI-driven workflows and robotic process automation, we help businesses reduce manual workload and optimize efficiency at scale.",
  //   topImage: topImage,
  //   topImageAlt: "Enigma Automation Hero Image Hex Innovations is a global software development",
  //   projectTitle: "Enigma Automation Suite",
  //   introParagraphOne:
  //     "Enigma Automation Suite combines AI-driven workflows and robotic process automation to eliminate mundane tasks and free up teams for high-value projects.",
  //   introParagraphTwo:
  //     "From document processing to advanced analytics, Enigma’s flexible architecture allows for quick deployment of new automations and seamless integration with legacy systems.",
  //   sectionTitle: "AI & RPA Synergy",
  //   sectionParagraph:
  //     "Our platform’s core AI engine continuously learns from user actions, making suggestions to optimize processes further. RPA bots handle repetitive tasks, ensuring speed and accuracy.",
  //   sectionImage: sectionImage,
  //   sectionImageAlt: "Enigma Automation code snippet Hex Innovations is a global software development",
  //   bottomParagraphOne:
  //     "Enigma’s automation potential spans multiple industries, including finance, healthcare, and manufacturing, reducing costs and turnaround times.",
  //   bottomParagraphTwo:
  //     "Ongoing updates ensure the suite remains compatible with evolving technology stacks and security standards, safeguarding your investment for years to come.",
  //   ctaLabel: "Request for a Service",
  // },
];


export default projectsData;
