import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
  Users,
  Truck,
  Cpu,
  ChevronRight,
  Calendar,
  Menu,
  X,
  Copy,
  Check,
  Building2,
  ArrowRight,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const skills = [
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

const experiences = [
  {
    role: "Front Desk Associate",
    company: "Best Western Plus",
    location: "Clemson, SC",
    date: "October 2025 – May 2026",
    icon: Building2,
    highlights: [
      "Managed front desk operations and welcomed guests in a fast-paced hospitality environment.",
      "Handled guest check-ins and check-outs while maintaining a professional first impression.",
      "Answered questions, resolved issues, and supported a smooth customer experience throughout each stay.",
      "Balanced phone communication, in-person service, and administrative front desk tasks efficiently.",
      "Strengthened hospitality, communication, and problem-solving skills in a customer-facing role.",
    ],
  },
  {
    role: "Event Management Intern",
    company: "Holywood Productions",
    location: "Gaffney, SC",
    date: "May 2024 – August 2024 • May 2025 – August 2025",
    icon: Briefcase,
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
    role: "Grocery Associate",
    company: "Food Lion Grocery",
    location: "Central, SC",
    date: "April 2019 – January 2024",
    icon: Users,
    highlights: [
      "Maintained floor displays and replenished merchandise to keep presentation standards high.",
      "Assisted customers quickly and effectively, improving the in-store experience.",
      "Managed inventory scanning, counting, and discrepancy reporting for department leadership.",
      "Kept aisles and displays clean, organized, and customer-ready in a busy retail environment.",
      "Brought long-term consistency and reliability across both Blacksburg and Central store locations.",
    ],
  },
  {
    role: "Volunteer",
    company: "City of Clemson Parks and Recreation",
    location: "Clemson, SC",
    date: "March 2023",
    icon: Star,
    highlights: [
      "Engaged professionally with community members and staff to support recreation initiatives.",
      "Maintained communication with staff about volunteer opportunities and events.",
      "Helped build local partnerships that supported community programming.",
      "Provided IT support for older community members to improve digital access.",
    ],
  },
];

const strengths = [
  {
    title: "Live Event Execution",
    text: "Experience supporting major, high-energy events with moving parts, hard deadlines, and on-site problem-solving.",
    icon: Calendar,
  },
  {
    title: "Technical Edge",
    text: "Backed by computer science coursework, strong software fluency, and a long-standing interest in AI and emerging technology.",
    icon: Cpu,
  },
  {
    title: "Operations & Logistics",
    text: "Comfortable with transport, setup, coordination, and the practical work that keeps an event running smoothly.",
    icon: Truck,
  },
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-300 leading-7">{subtitle}</p> : null}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-cyan-950/20 ${className}`}>
      {children}
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
        <GlassCard className="p-8 md:p-12 overflow-hidden relative">
          <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
              Resume Portfolio
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight text-white">
              Gunnar
              <span className="block text-cyan-300">Patterson</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-8">
              Event and hospitality professional with experience in large-scale events, logistics, guest service, and day-to-day operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setPage("experience")}
                className="rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                type="button"
              >
                View Experience
              </button>
              <button
                onClick={() => setPage("contact")}
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                type="button"
              >
                Contact Me
              </button>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <div className="mt-4 text-sm font-medium text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </GlassCard>

        <div className="grid gap-8">
          <GlassCard className="p-6 md:p-7">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Contact</div>
            <div className="mt-5 space-y-4 text-sm text-slate-200">
              <a href="mailto:gunrp2@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
                <Mail className="h-4 w-4 text-cyan-300" />
                <span>gunrp2@gmail.com</span>
              </a>
              <a href="tel:+18644919201" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
                <Phone className="h-4 w-4 text-cyan-300" />
                <span>(864) 491-9201</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-4 w-4 text-cyan-300" />
                <span>316 Pendleton Rd, Clemson, SC 29631</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 md:p-7">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Education</div>
            <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <GraduationCap className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">Clemson University</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Bachelor of Science in Parks, Recreation, and Tourism Management
                <br />
                Concentration: Tourism and Event Management
              </p>
              <p className="mt-3 text-sm text-slate-400">May 2026</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Additional background in computer science coursework, with experience using modern software and technology tools.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Profile"
        title="About Gunnar"
        subtitle="Experience in events, hospitality, and day-to-day operations."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
          <p className="mt-4 text-slate-300 leading-8 text-[15px]">
            Gunnar Patterson has a background in event operations, hospitality, guest service, and logistics. His experience includes live events, front desk work, and customer-facing roles that have built strong communication, organization, and problem-solving skills.
          </p>
          <p className="mt-4 text-slate-400 leading-8 text-[15px]">
            He works well in fast-paced environments where staying organized, helping people, and handling issues quickly all matter.
          </p>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="text-xl font-semibold text-white">What stands out</h3>
          <div className="mt-6 space-y-4">
            {[
              "Hands-on experience with live events and on-site operations.",
              "Comfortable working in busy environments where teamwork matters.",
              "Experience supporting large public events, including festival and motorsports work.",
              "Strong fit for event, hospitality, tourism, and operations roles.",
            ].map((point) => (
              <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <p className="text-sm leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Career"
        title="Experience that translates"
        subtitle="From hospitality and retail to major-event execution, Gunnar’s background shows reliability, guest awareness, and the ability to perform in demanding environments."
      />

      <div className="space-y-6">
        {experiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="p-7 md:p-8">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
                  <div>
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                      <Icon className="h-4 w-4 text-cyan-300" />
                      <span>{item.role}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">{item.company}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.location}</p>
                    <p className="mt-4 text-sm text-cyan-200">{item.date}</p>
                  </div>

                  <div className="grid gap-3">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SkillsPage() {
  const grouped = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div>
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills built for modern work"
        subtitle="A mix of operations, people skills, and technical adaptability."
      />

      <div className="grid xl:grid-cols-[0.8fr_1.2fr] gap-8">
        <GlassCard className="p-8">
          <h3 className="text-xl font-semibold text-white">At a glance</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>

        <div className="grid md:grid-cols-3 gap-6">
          {grouped.map((group) => (
            <GlassCard key={group.title} className="p-6">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage({ setPage, copiedField, handleCopy }) {
  return (
    <div>
      <SectionHeading
        eyebrow="Connect"
        title="Let’s connect"
        subtitle="Reach out for event work, hospitality roles, internships, or other opportunities."
      />

      <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8">
        <GlassCard className="p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-white">Open to opportunities in events, hospitality, tourism, and operations</h3>
          <p className="mt-5 text-slate-300 leading-8">
            Gunnar has experience in live events, hospitality, guest service, and logistics. Email is the best way to reach him, and phone works well for quicker conversations.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:gunrp2@gmail.com?subject=Professional%20Opportunity%20for%20Gunnar%20Patterson"
              className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 transition hover:bg-cyan-300/15 hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5 text-cyan-200" />
              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-cyan-100/70">Email</div>
              <div className="mt-2 text-lg font-medium text-white break-all">gunrp2@gmail.com</div>
            </a>

            <a
              href="tel:+18644919201"
              className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5 text-cyan-300" />
              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-400">Phone</div>
              <div className="mt-2 text-lg font-medium text-white">(864) 491-9201</div>
            </a>
          </div>

          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
            <MapPin className="h-5 w-5 text-cyan-300" />
            <div className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-400">Location</div>
            <div className="mt-2 text-lg font-medium text-white">316 Pendleton Rd, Clemson, SC 29631</div>
          </div>
        </GlassCard>

        <GlassCard className="p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <ArrowRight className="h-4 w-4 text-cyan-300" />
              Quick Links
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-white leading-tight">Quick links</h3>
            <p className="mt-5 text-sm md:text-base leading-8 text-slate-300">
              Use the buttons below to copy contact info or jump to other sections of the site.
            </p>

            <div className="mt-8 grid gap-3">
              <button
                onClick={() => handleCopy("gunrp2@gmail.com", "email")}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-left transition hover:bg-slate-950/70"
                type="button"
              >
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Copy Email</div>
                  <div className="mt-1 text-white">gunrp2@gmail.com</div>
                </div>
                {copiedField === "email" ? <Check className="h-5 w-5 text-cyan-300" /> : <Copy className="h-5 w-5 text-cyan-300" />}
              </button>

              <button
                onClick={() => handleCopy("(864) 491-9201", "phone")}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-left transition hover:bg-slate-950/70"
                type="button"
              >
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Copy Phone</div>
                  <div className="mt-1 text-white">(864) 491-9201</div>
                </div>
                {copiedField === "phone" ? <Check className="h-5 w-5 text-cyan-300" /> : <Copy className="h-5 w-5 text-cyan-300" />}
              </button>

              <button
                onClick={() => setPage("experience")}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
                type="button"
              >
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Experience</div>
                  <div className="mt-1 text-white">View experience highlights</div>
                </div>
                <ArrowRight className="h-5 w-5 text-cyan-300" />
              </button>

              <button
                onClick={() => setPage("about")}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
                type="button"
              >
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">About</div>
                  <div className="mt-1 text-white">Go to profile</div>
                </div>
                <ArrowRight className="h-5 w-5 text-cyan-300" />
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default function GunnarResumeSiteGraduateReady() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copiedField, setCopiedField] = useState("");

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(""), 1600);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  const pageContent = {
    home: <HomePage setPage={setPage} />,
    about: <AboutPage />,
    experience: <ExperiencePage />,
    skills: <SkillsPage />,
    contact: <ContactPage setPage={setPage} copiedField={copiedField} handleCopy={handleCopy} />,
  };

  return (
    <div className="min-h-screen bg-[#07111f] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,15,28,0.92),rgba(7,17,31,1))]" />
        <div className="absolute -top-32 left-[-10%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-[25%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[20%] h-[26rem] w-[26rem] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <header className="sticky top-4 z-50 mb-8">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/60 backdrop-blur-2xl px-5 md:px-7 py-4 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between gap-4">
              <button onClick={() => setPage("home")} className="text-left" type="button">
                <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Portfolio Resume</div>
                <div className="mt-1 text-lg md:text-xl font-semibold text-white">Gunnar Patterson</div>
              </button>

              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => {
                  const active = page === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setPage(item.id)}
                      className={`rounded-2xl px-4 py-2 text-sm transition ${
                        active
                          ? "bg-cyan-300 text-slate-950 font-semibold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                      type="button"
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <button
                className="md:hidden rounded-2xl border border-white/10 bg-white/5 p-2"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle navigation"
                type="button"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {mobileOpen ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setPage(item.id);
                          setMobileOpen(false);
                        }}
                        className={`rounded-2xl px-4 py-3 text-left text-sm ${
                          page === item.id
                            ? "bg-cyan-300 text-slate-950 font-semibold"
                            : "bg-white/5 text-slate-300"
                        }`}
                        type="button"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </header>

        <main className="pb-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28 }}
            >
              {pageContent[page]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
