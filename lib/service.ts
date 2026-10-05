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
            "Climate change is already changing daily life for farmers and communities across Africa: the rains, the harvests, the future. We help organisations, and the people they serve, adapt and build resilience and farm in ways that protect both livelihoods and the land for the years to come.",
        description:
            "Climate change is already changing daily life for farmers and communities across Africa: the rains, the harvests, the future. We help organisations, and the people they serve, adapt and build resilience and farm in ways that protect both livelihoods and the land for the years to come.",
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
            "It's not enough to do good work today. You have to show that it's working. We help you track your progress and prove your impact with clear, honest evidence that funders trust. And we go one step further: we help turn that same data into evidence that can unlock funding and open the door to credit for the farmers and communities you serve.",
        image: "/images/monitor.jpg",
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
            "Running a big programme means holding a hundred things together at once: plans, budgets, deadlines, partners and funders who are counting on you. We take that weight off your shoulders. We manage your programme from the first plan to the final report, so nothing slips through the cracks and your funders stay confident in you.",
        image: "/images/hero.jpg",
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
            "Good work needs a strong financial backbone. But managing money and admin, especially donor funds with strict rules, eats up time and causes worry. We keep your finances well-managed and your operations in order, so you can focus on your mission instead of the paperwork.",
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
            "Your people are your greatest asset and they want to grow. We build their skills and their confidence with practical, hands-on training designed around your real needs, so the learning sticks long after the workshop ends.",
        image: "/images/train.jpg",
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
            "The best decisions are built on solid evidence, not guesswork. We do the research that helps you understand what is really happening on the ground, so you can choose your next step with confidence and stay ahead of what's coming.",
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
