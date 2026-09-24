export interface ServiceDetail {
    number: string;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
    alt: string;
    offerings: string[];
}

export const SERVICES: ServiceDetail[] = [
    {
        number: "01",
        slug: "agriculture-environment-climate",
        title: "Agriculture, Environment & Climate Change",
        tagline:
            "Supporting sustainable agriculture, environmental initiatives, climate resilience, and responsible development.",
        description:
            "We work with organizations to design and implement sustainable agricultural practices, strengthen environmental stewardship, and build climate resilience across African communities. Our approach combines local knowledge with global best practices to create lasting ecological and economic impact.",
        image: "/images/agri.jpg",
        alt: "Aerial view of vast green agricultural fields in Tanzania",
        offerings: [
            "Practical strategies to adapt to a changing climate",
            "Research and innovation, including carbon and sequestration work",
            "Capacity building for NGOs and government teams",
            "Direct, on-the-ground support for farmers and pastoralists",
        ],
    },
    {
        number: "02",
        slug: "monitoring-evaluation",
        title: "Monitoring & Evaluation",
        tagline:
            "Helping organizations measure performance, understand outcomes, and improve the effectiveness of their programs.",
        description:
            "We help organizations build robust monitoring and evaluation frameworks that deliver actionable insights. By measuring what matters, we enable data-driven decisions that improve program effectiveness and demonstrate impact to stakeholders.",
        image: "/images/res.jpg",
        alt: "Tablet showing a web analytics dashboard with graphs and charts",
        offerings: [
            "Design simple, practical M&E systems that fit how you actually work",
            "Engage the people who matter most to your project",
            "Turn your monitoring data into evidence that can unlock finance and credit",
            "Choose the right things to measure, with clear indicators",
            "Measure your real impact and tell that story with confidence",
        ],
    },
    {
        number: "03",
        slug: "project-management",
        title: "Project Management",
        tagline:
            "Providing structured planning, implementation, coordination, and delivery support for complex initiatives.",
        description:
            "We provide end-to-end project management expertise to ensure complex initiatives are delivered on time, within scope, and to the highest standard. Our structured approach reduces risk and drives measurable results.",
        image: "/images/project.jpg",
        alt: "Engineers reviewing a construction blueprint on a laptop",
        offerings: [
            "Plan your programme and get it off to a strong, organised start",
            "Risk management and mitigation",
            "Handle procurement and contracts properly and transparently",
            "Quality assurance and delivery oversight"
        ],
    },
    {
        number: "04",
        slug: "finance-administration",
        title: "Finance & Administration",
        tagline:
            "Strengthening financial systems, operational processes, governance, and organizational efficiency.",
        description:
            "We help organizations build strong financial foundations and efficient administrative systems. From governance frameworks to operational processes, we ensure organizations have the structure they need to scale sustainably.",
        image: "/images/finance.jpg",
        alt: "Calculator with glasses and folders on an office desk",
        offerings: [
            "Manage your funds carefully, accurately and transparently",
            "Handle donor funds exactly the way donors expect",
            "Take care of day-to-day financial administration",
            "Run health checks to catch weak points before they become problems",
        ],
    },
    {
        number: "05",
        slug: "training-capacity-building",
        title: "Training & Capacity Building",
        tagline:
            "Building the skills, leadership capabilities, and institutional strength needed for long-term success.",
        description:
            "We design and deliver training programs that build lasting capability within organizations and communities. Our approach focuses on practical skills, leadership development, and institutional strengthening that drives sustainable growth.",
        image: "/images/training.jpg",
        alt: "Business professionals attending a conference session",
        offerings: [
            "Corporate governance training for boards and leaders",
            "Finance and administration workshops",
            "Agriculture and agribusiness skills development",
            "Mentorship and coaching frameworks",
            "Team building and leadership development",
        ],
    },
    {
        number: "06",
        slug: "research-development",
        title: "Research & Development",
        tagline:
            "Generating insights, conducting research, and developing evidence-based strategies for informed decision-making.",
        description:
            "We conduct rigorous research and generate evidence-based insights that inform strategy, policy, and practice. Our work helps organizations make better decisions grounded in data and contextual understanding.",
        image: "/images/mon.jpg",
        alt: "Researcher working with books and notes in a library",
        offerings: [
            "Baseline and feasibility studies",
            "Market and sector analysis",
            "Applied and action research",
            "Evidence-based strategy development",
            "Learning agendas and innovation pilots to keep improving",
        ],
    },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
    return SERVICES.find((s) => s.slug === slug);
}
