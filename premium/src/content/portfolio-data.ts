export type ExperienceCategory =
  | "all"
  | "events"
  | "hospitality"
  | "retail"
  | "volunteer";

export type Experience = {
  id: string;
  category: Exclude<ExperienceCategory, "all">;
  emoji: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
};

export const PROFILE = {
  name: "Gunnar Patterson",
  title: "Event & Hospitality Professional",
  tagline:
    "Event and hospitality professional with experience in large-scale events, logistics, guest service, and day-to-day operations.",
  email: "gunrp2@gmail.com",
  phone: "(864) 491-9201",
  phoneHref: "+18644919201",
  location: "316 Pendleton Rd, Clemson, SC 29631",
  resumeHref: "/resume.pdf",
};

export const STATS = [
  { value: "800+", label: "Event hours" },
  { value: "2", label: "Festival seasons" },
  { value: "5+", label: "Years service" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "best-western",
    category: "hospitality",
    emoji: "🏨",
    role: "Front Desk Associate",
    company: "Best Western Plus",
    location: "Clemson, SC",
    dates: "October 2025 – May 2026",
    highlights: [
      "Managed front desk operations and welcomed guests in a fast-paced hospitality environment.",
      "Handled guest check-ins and check-outs while maintaining a professional first impression.",
      "Answered questions, resolved issues, and supported a smooth customer experience throughout each stay.",
      "Balanced phone communication, in-person service, and administrative front desk tasks efficiently.",
      "Strengthened hospitality, communication, and problem-solving skills in a customer-facing role.",
    ],
  },
  {
    id: "holywood",
    category: "events",
    emoji: "🎪",
    role: "Event Management Intern",
    company: "Holywood Productions",
    location: "Gaffney, SC",
    dates: "May 2024 – August 2024 • May 2025 – August 2025",
    highlights: [
      "Completed over 800 hours of immersive event planning and execution experience.",
      "Helped deliver major live events including the Carolina Country Music Festival.",
      "Supported logistics, vendor coordination, and on-site operations in fast-paced environments.",
      "Assisted with a large professional LIUNA booth activation at the NASCAR Cup Series in Nashville, Tennessee.",
      "Developed hands-on experience transporting equipment and event materials over long distances using large vehicles.",
      "Worked across diverse teams to create smooth attendee experiences and successful event outcomes.",
    ],
  },
  {
    id: "food-lion",
    category: "retail",
    emoji: "🛒",
    role: "Grocery Associate",
    company: "Food Lion Grocery",
    location: "Central, SC",
    dates: "April 2019 – January 2024",
    highlights: [
      "Maintained floor displays and replenished merchandise to keep presentation standards high.",
      "Assisted customers quickly and effectively, improving the in-store experience.",
      "Managed inventory scanning, counting, and discrepancy reporting for department leadership.",
      "Kept aisles and displays clean, organized, and customer-ready in a busy retail environment.",
      "Brought long-term consistency and reliability across both Blacksburg and Central store locations.",
    ],
  },
  {
    id: "clemson-parks",
    category: "volunteer",
    emoji: "🌳",
    role: "Volunteer",
    company: "City of Clemson Parks and Recreation",
    location: "Clemson, SC",
    dates: "March 2023",
    highlights: [
      "Engaged professionally with community members and staff to support recreation initiatives.",
      "Maintained communication with staff about volunteer opportunities and events.",
      "Helped build local partnerships that supported community programming.",
      "Provided IT support for older community members to improve digital access.",
    ],
  },
];

export const SKILL_TAGS = [
  "Event Planning and Management",
  "Logistics and Transportation",
  "Customer Service Excellence",
  "Team Collaboration and Leadership",
  "Creative Problem-Solving",
  "Advanced Software Skills",
  "AI Technology Familiarity",
  "Strong Communication",
  "Adaptability and Flexibility",
  "Attention to Detail",
  "Cultural Awareness and Sensitivity",
  "Front Desk Operations",
  "Guest Relations",
];

export const SKILL_GROUPS = [
  {
    title: "Event & Operations",
    items: [
      "Event Planning and Management",
      "Logistics and Transportation",
      "Team Collaboration and Leadership",
      "Attention to Detail",
      "Adaptability and Flexibility",
    ],
  },
  {
    title: "People & Service",
    items: [
      "Customer Service Excellence",
      "Strong Communication",
      "Cultural Awareness and Sensitivity",
      "Guest Relations",
      "Front Desk Operations",
    ],
  },
  {
    title: "Technical & Creative",
    items: [
      "Advanced Software Skills",
      "AI Technology Familiarity",
      "Creative Problem-Solving",
    ],
  },
];

export const HIGHLIGHT_TICKER = [
  { alt: "Festival logistics + on-site ops" },
  { alt: "Front desk + guest experience" },
  { alt: "Vendor coordination" },
  { alt: "Fast problem-solving under pressure" },
  { alt: "Team collaboration" },
  { alt: "Transport + equipment handling" },
  { alt: "Inventory scanning + reporting" },
  { alt: "Professional communication" },
  { alt: "Software fluency + AI familiarity" },
  { alt: "Detail-oriented execution" },
];
