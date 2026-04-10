import * as React from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight, Download, Mail, MapPin, Phone, Sparkles, Zap } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "./lib/cn";
import { InfiniteSlider } from "./components/ui/infinite-slider";
import { useToast } from "./components/ui/toast";

type ExperienceCategory =
  | "all"
  | "events"
  | "hospitality"
  | "retail"
  | "volunteer";

type Experience = {
  id: string;
  category: Exclude<ExperienceCategory, "all">;
  emoji: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
};

const PROFILE = {
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

const STATS = [
  { value: "800+", label: "Event hours" },
  { value: "2", label: "Festival seasons" },
  { value: "5+", label: "Years service" },
];

const EXPERIENCE: Experience[] = [
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

const SKILL_TAGS = [
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

const SKILL_GROUPS = [
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

const HIGHLIGHT_TICKER = [
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[linear-gradient(140deg,rgba(28,27,36,0.55),rgba(12,12,17,0.35))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      {children}
    </div>
  );
}

function GradientIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl">
      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] opacity-90" />
      <span className="absolute inset-0 rounded-xl blur-md bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] opacity-55" />
      <span className="relative z-10 text-black">{children}</span>
    </span>
  );
}

function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] backdrop-blur-2xl",
        "shadow-[0_30px_95px_rgba(0,0,0,0.52)]",
        "transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-1.5 hover:shadow-[0_38px_110px_rgba(0,0,0,0.56)]",
        "hover:border-white/25",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        "before:bg-[radial-gradient(640px_circle_at_20%_4%,rgba(250,147,250,0.18),transparent_58%),radial-gradient(640px_circle_at_85%_78%,rgba(59,130,246,0.16),transparent_58%)]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-white/[0.06]",
        className
      )}
    >
      {children}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px -12% 0px" }}
      transition={{ duration: 0.75, ease: [0.2, 0, 0, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <div className="text-[11px] tracking-[0.32em] uppercase text-white/60">
        {kicker}
      </div>
      <div className="premium-divider" aria-hidden="true" />
      <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-tight">
        <span className="bg-gradient-to-br from-white via-[#FA93FA] to-[#983AD6] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/70 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = React.useState(sectionIds[0] ?? "home");

  React.useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -65% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds.join("|")]);

  return active;
}

async function copyToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

function AuroraVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FA93FA]/10 via-[#C967E8]/10 to-[#983AD6]/10" />

      <motion.div
        className="absolute -left-32 top-[-120px] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(250,147,250,0.28), transparent 60%)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-40 top-[40px] h-[620px] w-[620px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(152,58,214,0.22), transparent 60%)",
        }}
        animate={{ x: [0, -70, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[20%] bottom-[-260px] h-[700px] w-[700px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(201,103,232,0.18), transparent 62%)",
        }}
        animate={{ x: [0, 50, 0], y: [0, -35, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.06) 18%, transparent 36%, rgba(255,255,255,0.04) 52%, transparent 68%)",
        }}
        animate={{ x: ["-25%", "25%", "-25%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FlowConstellation() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -70]), {
    stiffness: 110,
    damping: 20,
  });
  const layerOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    [0.88, 1, 0.72]
  );
  const nodes = [
    { x: "10%", y: "20%", delay: 0, dur: 6.2, size: 8 },
    { x: "28%", y: "62%", delay: 0.6, dur: 8.1, size: 6 },
    { x: "48%", y: "30%", delay: 1.2, dur: 7.4, size: 10 },
    { x: "66%", y: "72%", delay: 1.8, dur: 8.6, size: 6 },
    { x: "84%", y: "38%", delay: 0.9, dur: 7.8, size: 8 },
  ];

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      style={{
        y: reduceMotion ? 0 : parallaxY,
        opacity: layerOpacity,
      }}
    >
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full opacity-55"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(250,147,250,0)" />
            <stop offset="45%" stopColor="rgba(250,147,250,0.42)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>
        <path d="M 4 62 C 18 34, 35 82, 54 48 S 84 34, 96 58" stroke="url(#flowLine)" strokeWidth="0.6" fill="none" />
        <path d="M 0 40 C 20 54, 36 24, 58 44 S 86 70, 100 52" stroke="url(#flowLine)" strokeWidth="0.45" fill="none" />
      </svg>

      {nodes.map((n, idx) => (
        <motion.span
          key={`${n.x}-${n.y}-${idx}`}
          className="absolute rounded-full"
          style={{
            left: n.x,
            top: n.y,
            width: n.size,
            height: n.size,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(250,147,250,0.8) 55%, rgba(59,130,246,0.2) 100%)",
            boxShadow:
              "0 0 18px rgba(250,147,250,0.55), 0 0 42px rgba(59,130,246,0.28)",
          }}
          animate={
            reduceMotion
              ? { opacity: 0.8 }
              : {
                  y: [0, -14, 0],
                  x: [0, 6, 0],
                  opacity: [0.45, 1, 0.45],
                  scale: [1, 1.12, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: n.dur,
                  delay: n.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </motion.div>
    </div>
  );
}

export default function Hero() {
  const sections = ["home", "about", "experience", "skills", "contact"];
  const active = useActiveSection(sections);
  const { push } = useToast();

  const [filter, setFilter] = React.useState<ExperienceCategory>("all");
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  const [skillQuery, setSkillQuery] = React.useState("");
  const q = skillQuery.trim().toLowerCase();

  const [spotlightIndex, setSpotlightIndex] = React.useState(0);
  const spotlight = EXPERIENCE[spotlightIndex % EXPERIENCE.length];

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  const visibleExperience = EXPERIENCE.filter((e) =>
    filter === "all" ? true : e.category === filter
  );

  const groupMatches = (items: string[]) =>
    q ? items.filter((x) => x.toLowerCase().includes(q)) : items;

  const onNav = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6]"
      />

      <div className="sticky top-4 z-40 mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/15 bg-[linear-gradient(160deg,rgba(10,10,14,0.72),rgba(17,17,25,0.45))] backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.52)]">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <button
              className="text-left"
              onClick={() => onNav("home")}
              type="button"
            >
              <div className="text-[11px] tracking-[0.32em] uppercase text-white/60">
                Resume Portfolio
              </div>
              <div className="mt-0.5 font-semibold tracking-tight">
                {PROFILE.name}
              </div>
            </button>

            <div className="hidden items-center gap-2 sm:flex">
              {sections.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => onNav(id)}
                  className={cn(
                    "nav-chip rounded-2xl px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white",
                    active === id &&
                      "bg-white/5 text-white border border-white/10"
                  )}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PROFILE.resumeHref}
                className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-[1px]"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl px-6 pb-28">
        <section id="home" className="pt-20 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <Pill>
              <GradientIcon>
                <Zap className="h-4 w-4" />
              </GradientIcon>
              <span className="text-sm text-white/70">
                Event-ready. Guest-first. Ops-focused.
              </span>
            </Pill>

            <h1 className="mt-8 text-balance text-[44px] font-semibold leading-[1.01] tracking-tight sm:text-[66px] lg:text-[80px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <span className="block bg-gradient-to-br from-white via-[#FA93FA] to-[#983AD6] bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
              <span className="mt-2 block text-white/90 text-[18px] sm:text-[20px] font-medium">
                {PROFILE.title}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              {PROFILE.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Open to relocation</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Available immediately</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Event + Ops Focus</span>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={PROFILE.resumeHref}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-[1px]"
              >
                Download Resume
                <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6]" />
                  <ArrowRight className="relative h-4 w-4 text-black transition-transform duration-200 group-hover:translate-x-[1px]" />
                </span>
              </a>

              <button
                type="button"
                onClick={() => onNav("experience")}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:-translate-y-[1px]"
              >
                View Experience <Sparkles className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onNav("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:-translate-y-[1px]"
              >
                Contact <Mail className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-4 backdrop-blur-xl transition hover:-translate-y-[2px] hover:bg-white/[0.10]"
                >
                  <div className="text-xl font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Reveal>
              <GlassCard className="lg:col-span-2">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] tracking-[0.32em] uppercase text-white/60">
                        Spotlight
                      </div>
                      <div className="mt-2 text-2xl font-semibold tracking-tight">
                        Tap through key roles
                      </div>
                      <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
                        Quick skim of the strongest role examples — then jump
                        into the full experience section.
                      </p>
                    </div>
                    <GradientIcon>
                      <Sparkles className="h-4 w-4" />
                    </GradientIcon>
                  </div>

                  <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                      <span className="text-base">{spotlight.emoji}</span>
                      <span className="font-semibold">{spotlight.role}</span>
                    </div>

                    <div className="mt-4 text-2xl font-semibold tracking-tight">
                      {spotlight.company}
                    </div>
                    <div className="mt-2 text-sm text-white/60">
                      {spotlight.location} • {spotlight.dates}
                    </div>

                    <p className="mt-4 text-white/75 leading-relaxed">
                      {spotlight.highlights[0]}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setSpotlightIndex(
                              (v) =>
                                (v - 1 + EXPERIENCE.length) % EXPERIENCE.length
                            )
                          }
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                          aria-label="Previous spotlight"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setSpotlightIndex((v) => (v + 1) % EXPERIENCE.length)
                          }
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                          aria-label="Next spotlight"
                        >
                          →
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setFilter("all");
                          onNav("experience");
                          window.setTimeout(() => {
                            document
                              .getElementById(`exp-${spotlight.id}`)
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                          }, 250);
                        }}
                        className="rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-[1px]"
                      >
                        Jump to role
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={0.06}>
                <GlassCard>
                  <div className="p-6 sm:p-8">
                    <div className="text-[11px] tracking-[0.32em] uppercase text-white/60">
                      Contact
                    </div>

                    <div className="mt-5 grid gap-3">
                      <button
                        type="button"
                        onClick={async () => {
                          const ok = await copyToClipboard(PROFILE.email);
                          push(ok ? "Email copied" : "Copy failed");
                        }}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-white/70" />
                          <span className="text-sm text-white/85">
                            {PROFILE.email}
                          </span>
                        </div>
                        <span className="text-xs text-white/60">copy</span>
                      </button>

                      <a
                        href={`tel:${PROFILE.phoneHref}`}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-white/70" />
                          <span className="text-sm text-white/85">
                            {PROFILE.phone}
                          </span>
                        </div>
                        <span className="text-xs text-white/60">call</span>
                      </a>

                      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <MapPin className="mt-0.5 h-4 w-4 text-white/70" />
                        <span className="text-sm text-white/75 leading-relaxed">
                          {PROFILE.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.12}>
                <GlassCard>
                  <div className="p-6 sm:p-8">
                    <div className="text-[11px] tracking-[0.32em] uppercase text-white/60">
                      Education
                    </div>
                    <div className="mt-4 text-lg font-semibold">
                      Clemson University
                    </div>
                    <div className="mt-2 text-sm text-white/70 leading-relaxed">
                      Bachelor of Science in Parks, Recreation, and Tourism
                      Management
                      <br />
                      Concentration: Tourism and Event Management
                    </div>
                    <div className="mt-3 text-sm text-white/60">May 2026</div>
                    <div className="mt-4 text-sm text-white/60 leading-relaxed">
                      Additional background in computer science coursework, with
                      experience using modern software and technology tools.
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative mt-16">
          <div
            className="relative bg-[#010101] overflow-hidden"
            style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
          >
            <div className="relative overflow-hidden">
              <div className="relative h-[340px] sm:h-[420px]">
                <AuroraVisual />
                <FlowConstellation />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#010101] via-transparent to-[#010101]" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#010101] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#010101] to-transparent" />
              </div>

              <div className="relative z-20 border-t border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="mx-auto max-w-6xl px-6 py-7">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    <div className="flex items-center gap-4 md:min-w-[240px]">
                      <p className="text-sm font-medium text-white/70">
                        Highlights
                      </p>
                      <div className="hidden h-8 w-px bg-white/10 md:block" />
                    </div>

                    <InfiniteSlider
                      items={HIGHLIGHT_TICKER}
                      speed={70}
                      speedBoostOnScroll
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell mt-20">
          <div className="premium-dot-grid" aria-hidden="true" />
          <SectionHeading
            kicker="Profile"
            title="About Gunnar"
            subtitle="Experience in events, hospitality, and day-to-day operations — built around reliability, guest awareness, and fast problem-solving."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <GlassCard>
                <div className="p-6 sm:p-8">
                  <div className="text-lg font-semibold">Professional Summary</div>
                  <p className="mt-4 text-white/75 leading-relaxed">
                    Gunnar Patterson has a background in event operations,
                    hospitality, guest service, and logistics. His experience
                    includes live events, front desk work, and customer-facing
                    roles that have built strong communication, organization, and
                    problem-solving skills.
                  </p>
                  <p className="mt-4 text-white/60 leading-relaxed">
                    He works well in fast-paced environments where staying
                    organized, helping people, and handling issues quickly all
                    matter.
                  </p>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.06}>
              <GlassCard>
                <div className="p-6 sm:p-8">
                  <div className="text-lg font-semibold">What stands out</div>
                  <ul className="mt-5 grid gap-3 text-white/75">
                    {[
                      "Hands-on experience with live events and on-site operations.",
                      "Comfortable working in busy environments where teamwork matters.",
                      "Experience supporting large public events, including festival and motorsports work.",
                      "Strong fit for event, hospitality, tourism, and operations roles.",
                    ].map((t) => (
                      <li
                        key={t}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                      >
                        <span className="mt-1 text-[#FA93FA]">›</span>
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="section-shell mt-20">
          <div className="premium-dot-grid" aria-hidden="true" />
          <SectionHeading
            kicker="Career"
            title="Experience that translates"
            subtitle="From hospitality and retail to major-event execution — this background shows consistency, guest awareness, and on-site reliability."
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {(
              [
                ["all", "All"],
                ["events", "Events"],
                ["hospitality", "Hospitality"],
                ["retail", "Retail"],
                ["volunteer", "Volunteer"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white",
                  filter === key && "bg-white text-black"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6">
            {visibleExperience.map((e, idx) => {
              const isExpanded = Boolean(expanded[e.id]);
              const shown = isExpanded ? e.highlights : e.highlights.slice(0, 3);
              const delay = Math.min(idx * 0.04, 0.16);

              return (
                <Reveal key={e.id} delay={delay}>
                  <GlassCard className="overflow-hidden">
                    <div id={`exp-${e.id}`} className="p-6 sm:p-8">
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                            <span className="text-base">{e.emoji}</span>
                            <span className="font-semibold">{e.role}</span>
                          </div>
                          <div className="mt-4 text-2xl font-semibold tracking-tight">
                            {e.company}
                          </div>
                          <div className="mt-2 text-sm text-white/60">{e.location}</div>
                          <div className="mt-3 text-sm text-white/70">{e.dates}</div>
                        </div>

                        <div className="lg:max-w-xl">
                          <ul className="grid gap-3">
                            {shown.map((h) => (
                              <li
                                key={h}
                                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/75 leading-relaxed transition hover:bg-white/5"
                              >
                                {h}
                              </li>
                            ))}
                          </ul>

                          {e.highlights.length > 3 ? (
                            <button
                              type="button"
                              onClick={() =>
                                setExpanded((s) => ({ ...s, [e.id]: !isExpanded }))
                              }
                              className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:-translate-y-[1px]"
                            >
                              {isExpanded ? "Show fewer" : "Show all highlights"}
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="skills" className="section-shell mt-20">
          <div className="premium-dot-grid" aria-hidden="true" />
          <SectionHeading
            kicker="Capabilities"
            title="Skills built for modern work"
            subtitle="A mix of operations, people skills, and technical adaptability — with quick search + clickable chips."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Reveal>
              <GlassCard className="lg:col-span-1">
                <div className="p-6 sm:p-8">
                  <div className="text-lg font-semibold">At a glance</div>
                  <div className="mt-4 flex gap-2">
                    <input
                      value={skillQuery}
                      onChange={(e) => setSkillQuery(e.target.value)}
                      placeholder="Search skills (try: logistics, guest, AI)"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/40"
                    />
                    <button
                      type="button"
                      onClick={() => setSkillQuery("")}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:-translate-y-[1px]"
                    >
                      Clear
                    </button>
                  </div>

                  <p className="mt-4 text-sm text-white/60">
                    Tip: click any chip to auto-search it.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {SKILL_TAGS.filter((t) =>
                      q ? t.toLowerCase().includes(q) : true
                    ).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSkillQuery(t)}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:-translate-y-[1px]"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <div className="grid gap-6 lg:col-span-2 lg:grid-cols-3">
              {SKILL_GROUPS.map((g, idx) => {
                const matches = groupMatches(g.items);
                if (q && matches.length === 0) return null;
                const delay = Math.min(idx * 0.05, 0.15);

                return (
                  <Reveal key={g.title} delay={delay}>
                    <GlassCard>
                      <div className="p-6 sm:p-8">
                        <div className="text-lg font-semibold">{g.title}</div>
                        <div className="mt-5 grid gap-2">
                          {matches.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSkillQuery(t)}
                              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-left text-sm text-white/75 transition hover:bg-white/5 hover:-translate-y-[1px]"
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell mt-20">
          <div className="premium-dot-grid" aria-hidden="true" />
          <SectionHeading
            kicker="Connect"
            title="Let’s connect"
            subtitle="Reach out for event work, hospitality roles, internships, or other opportunities."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <GlassCard>
                <div className="p-6 sm:p-8">
                  <div className="text-2xl font-semibold tracking-tight">
                    Open to opportunities in events, hospitality, tourism, and operations
                  </div>
                  <p className="mt-4 text-white/75 leading-relaxed">
                    Gunnar has experience in live events, hospitality, guest service,
                    and logistics. Email is the best way to reach him, and phone works
                    well for quicker conversations.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a
                      href={`mailto:${PROFILE.email}?subject=Professional%20Opportunity%20for%20Gunnar%20Patterson`}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:-translate-y-[1px]"
                    >
                      <GradientIcon>
                        <Mail className="h-4 w-4" />
                      </GradientIcon>
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
                          Email
                        </div>
                        <div className="text-sm text-white/85">{PROFILE.email}</div>
                      </div>
                    </a>

                    <a
                      href={`tel:${PROFILE.phoneHref}`}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:-translate-y-[1px]"
                    >
                      <GradientIcon>
                        <Phone className="h-4 w-4" />
                      </GradientIcon>
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
                          Phone
                        </div>
                        <div className="text-sm text-white/85">{PROFILE.phone}</div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <GradientIcon>
                      <MapPin className="h-4 w-4" />
                    </GradientIcon>
                    <div>
                      <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
                        Location
                      </div>
                      <div className="text-sm text-white/75 leading-relaxed">
                        {PROFILE.location}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.06}>
              <GlassCard>
                <div className="p-6 sm:p-8">
                  <Pill>
                    <GradientIcon>
                      <Sparkles className="h-4 w-4" />
                    </GradientIcon>
                    <span className="text-sm text-white/70">Quick Links</span>
                  </Pill>

                  <div className="mt-6 grid gap-3">
                    <a
                      href={PROFILE.resumeHref}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white px-5 py-4 text-black transition hover:-translate-y-[1px]"
                    >
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-black/60">
                          Resume
                        </div>
                        <div className="mt-1 font-semibold">Download PDF</div>
                      </div>
                      <Download className="h-5 w-5" />
                    </a>

                    <button
                      type="button"
                      onClick={async () => {
                        const ok = await copyToClipboard(PROFILE.email);
                        push(ok ? "Email copied" : "Copy failed");
                      }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:bg-white/10 hover:-translate-y-[1px]"
                    >
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
                          Copy Email
                        </div>
                        <div className="mt-1 font-semibold">{PROFILE.email}</div>
                      </div>
                      <span className="text-white/70">⧉</span>
                    </button>

                    <button
                      type="button"
                      onClick={async () => {
                        const ok = await copyToClipboard(PROFILE.phone);
                        push(ok ? "Phone copied" : "Copy failed");
                      }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:bg-white/10 hover:-translate-y-[1px]"
                    >
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
                          Copy Phone
                        </div>
                        <div className="mt-1 font-semibold">{PROFILE.phone}</div>
                      </div>
                      <span className="text-white/70">⧉</span>
                    </button>

                    <button
                      type="button"
                      onClick={async () => {
                        const ok = await copyToClipboard(window.location.href);
                        push(ok ? "Page link copied" : "Copy failed");
                      }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:bg-white/10 hover:-translate-y-[1px]"
                    >
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
                          Share Portfolio
                        </div>
                        <div className="mt-1 font-semibold">Copy this page link</div>
                      </div>
                      <span className="text-white/70">↗</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition hover:bg-white/10 hover:-translate-y-[1px]"
                    >
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
                          Back to Top
                        </div>
                        <div className="mt-1 font-semibold">Return to hero</div>
                      </div>
                      <span className="text-white/70">↑</span>
                    </button>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <div className="mt-10 text-center text-sm text-white/50">
            Crafted as a premium GitHub Pages portfolio experience.
          </div>
        </section>
      </main>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a
          href={PROFILE.resumeHref}
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-3 text-white/85 shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition hover:bg-black/40 hover:-translate-y-[1px]"
          aria-label="Download resume"
          title="Download resume"
        >
          <Download className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-3 text-white/85 shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition hover:bg-black/40 hover:-translate-y-[1px]"
          aria-label="Email"
          title="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-3 text-white/85 shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition hover:bg-black/40 hover:-translate-y-[1px]"
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      </div>
    </div>
  );
}
