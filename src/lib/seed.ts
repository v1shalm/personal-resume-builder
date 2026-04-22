import type { Resume } from "./types";

export const seedResume: Resume = {
  header: {
    name: "Vishal Maurya",
    title: "Product Designer",
    tagline:
      "Product Designer with 2.5+ years of experience crafting end-to-end digital products across eCommerce, AI-powered SaaS, and fintech. Adept at translating complex workflows into intuitive, scalable experiences from concept to launch, with a strong focus on clarity, usability, and thoughtful interaction design.",
    contacts: [
      {
        id: "c1",
        label: "phone",
        value: "+91 9372083719",
      },
      {
        id: "c2",
        label: "email",
        value: "vishalm.designs@gmail.com",
        href: "mailto:vishalm.designs@gmail.com",
      },
      {
        id: "c3",
        label: "site",
        value: "vishal-maurya.framer.website",
        href: "https://vishal-maurya.framer.website",
      },
    ],
  },
  sectionOrder: ["experience", "education", "skills", "links"],
  sections: {
    experience: { id: "experience", title: "Experience", visible: true },
    education: { id: "education", title: "Education", visible: true },
    skills: { id: "skills", title: "Skills & Tools", visible: true },
    links: { id: "links", title: "Links", visible: true },
  },
  experience: [
    {
      id: "e1",
      company: "Pineapple Design Studio",
      role: "Sr. Associate UI Designer",
      startDate: "Dec 2024",
      endDate: "Present",
      bullets: [
        {
          id: "b1",
          text: "Led UI design across 0→1 and iterative product projects in eCommerce, AI-powered SaaS, and fintech, delivering end-to-end experiences from concept to final handoff.",
        },
        {
          id: "b2",
          text: "Designed Nexus 247, a mall-first commerce experience by shaping end-to-end journeys across discovery, purchase, and post-purchase, extending digital experiences across a network of 17+ malls and improving clarity, trust, and overall shopping experience.",
        },
        {
          id: "b3",
          text: "Translated Outcomes AI into a clear, credible digital experience that simplifies communication of a complex AI-driven healthcare platform, contributing to its positioning during a $10M seed funding phase.",
        },
        {
          id: "b4",
          text: "Shaped Zilo, a 0→1 curated fashion quick-commerce experience that reduces choice overload and enables confident decision-making through clear, structured journeys.",
        },
        {
          id: "b5",
          text: "Built scalable and consistent UI systems across mobile and web, improving design quality and handoff efficiency.",
        },
      ],
    },
    {
      id: "e2",
      company: "Make It Grow",
      role: "UI/UX Designer",
      startDate: "Oct 2023",
      endDate: "Oct 2024",
      bullets: [
        {
          id: "b6",
          text: "Designed end-to-end digital experiences across web and mobile platforms for startups in eCommerce and SaaS domains.",
        },
        {
          id: "b7",
          text: "Led design of a POS dashboard for restaurant operations, improving usability across order management, sales tracking, and staff workflows.",
        },
        {
          id: "b8",
          text: "Conducted user research and usability testing to identify pain points and inform design decisions.",
        },
        {
          id: "b9",
          text: "Collaborated with developers to ensure feasible implementation and smooth design handoff.",
        },
      ],
    },
    {
      id: "e3",
      company: "SpiceTrance",
      role: "UI/UX Intern",
      startDate: "Feb 2023",
      endDate: "Aug 2023",
      bullets: [
        {
          id: "b10",
          text: "Designed responsive web interfaces and landing pages, focusing on usability, visual consistency, and user experience.",
        },
        {
          id: "b11",
          text: "Created wireframes and high-fidelity UI designs to structure user flows and improve content clarity.",
        },
      ],
    },
  ],
  skillGroups: [
    {
      id: "s1",
      label: "Design",
      items:
        "UX/UI Design, User-Centered Design, Wireframing, Prototyping, Interaction Design, Design Systems, Mobile & Web Design, Visual Design, Brand Design, Accessibility, Motion Design, Product Design, User Research, Research & Strategy, Usability Testing, Qualitative & Quantitative Analysis",
    },
    {
      id: "s2",
      label: "Tools & Technologies",
      items:
        "Figma, Adobe Creative Suite (Photoshop, Illustrator), Framer, Webflow, Lottiefiles, Lovable, Bolt, Cursor, Miro, Jira, ChatGPT, Claude, Midjourney, HTML, CSS, JavaScript",
    },
  ],
  education: [
    {
      id: "ed1",
      degree: "Bachelor in Science",
      field: "Information Technology",
      institution: "Mumbai University",
      year: "2017 – 2020",
    },
  ],
  links: [
    {
      id: "l1",
      label: "Portfolio",
      url: "https://vishal-maurya.framer.website",
    },
    {
      id: "l2",
      label: "Linkedin",
      url: "https://www.linkedin.com/in/v1shalm/",
    },
    {
      id: "l3",
      label: "Dribbble",
      url: "https://dribbble.com/V1shal",
    },
  ],
  style: {
    titleFontId: "source-serif",
    bodyFontId: "geist",
    accentColor: "#23316d",
    nameFontWeight: 500,
    nameLetterSpacing: -0.024,
    bodyLineHeight: 1.55,
  },
};
