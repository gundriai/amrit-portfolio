"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    id: "lumbini-lions",
    company: "Lumbini Lions",
    role: "Video Editor",
    type: "Contract",
    period: "Sep 2025 – Present",
    duration: "9 mos",
    description:
      "Official Video Editor for Lumbini Lions during the Nepal Premier League (NPL), creating high-energy video content to build match-day excitement and strengthen the team's digital presence.",
    bullets: [
      "Edited match highlights and post-match recap videos",
      "Created match day hype videos to energize fans",
      "Produced player announcement & reveal hype videos",
      "Edited the Champions Trophy Tour documentary",
      "Produced promotional Reels and Shorts",
    ],
    tags: ["NPL", "Sports", "Highlights", "Reels", "Documentary"],
    accent: "#FF2D55",
    icon: "🦁",
    side: "left",
  },
  {
    id: "dhangadhi-fc",
    company: "Dhangadhi FC",
    role: "Video Editor",
    type: "Full-time",
    period: "Mar 2025 – Apr 2025",
    duration: "2 mos",
    description:
      "Video Editor for Dhangadhi FC during Season 2 of the Nepal Super League (NSL), producing all match-related video content.",
    bullets: [
      "Created match-day hype videos",
      "Produced player announcement videos",
      "Created player hype videos",
      "Edited match highlights and post-game recap videos",
    ],
    tags: ["NSL", "Football", "Sports", "Hype Videos"],
    accent: "#0A84FF",
    icon: "⚽",
    side: "right",
  },
  {
    id: "rever-hub",
    company: "Rever Hub",
    role: "Digital Marketing Manager",
    type: "Full-time",
    period: "Sep 2024 – Present",
    duration: "1 yr 9 mos",
    location: "Balkumari, Kathmandu · On-site",
    description:
      "Working at Rever Hub, a digital marketing agency, managing social media and creating video content for multiple clients to enhance their online presence and audience engagement.",
    bullets: [
      "Managed social media platforms for various clients",
      "Shot and edited video content for campaigns and promotions",
      "Created graphic content for social media posts and stories",
      "Developed strategies to increase reach and engagement",
      "SEO Internship (Jun–Aug 2024)",
    ],
    tags: ["Digital Marketing", "Social Media", "Video", "SEO", "Agency"],
    accent: "#BF5AF2",
    icon: "📈",
    side: "left",
  },
  {
    id: "bhakundo",
    company: "Bhakundo Media & Management",
    role: "Video Editor",
    type: "Freelance",
    period: "Jun 2023 – Present",
    duration: "3 yrs",
    description:
      "Freelance Video Editor for Bhakundo Nepal, a football-focused media platform covering matches, player stories, and football news.",
    bullets: [
      "Created individual player highlight videos",
      "Edited match highlights and recap videos",
      "Produced engaging player edits for social media",
    ],
    tags: ["Football", "Highlights", "Player Edits", "Media"],
    accent: "#FF9F0A",
    icon: "🎥",
    side: "right",
  },
];

function TimelineCard({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = experience.side === "left";

  return (
    <motion.div
      ref={ref}
      className={`relative flex gap-6 md:gap-0 items-start ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Card */}
      <div
        className={`w-full md:w-[calc(50%-2.5rem)] ${
          isLeft ? "md:pr-10" : "md:pl-10"
        }`}
      >
        <motion.div
          className="glass border border-white/[0.06] rounded-2xl p-6 group relative overflow-hidden"
          whileHover={{ y: -4, borderColor: `${experience.accent}30` }}
          transition={{ duration: 0.3 }}
        >
          {/* Corner glow */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, ${experience.accent}12 0%, transparent 70%)`,
            }}
          />

          {/* Left accent line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl"
            style={{
              background: experience.accent,
              boxShadow: `0 0 12px ${experience.accent}60`,
            }}
          />

          <div className="pl-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{experience.icon}</span>
                  <h3
                    className="text-base font-bold text-white leading-tight"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {experience.company}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={11} className="text-white/40" />
                    <span className="text-sm text-white/60">{experience.role}</span>
                  </div>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: `${experience.accent}15`,
                      color: experience.accent,
                      border: `1px solid ${experience.accent}25`,
                    }}
                  >
                    {experience.type}
                  </span>
                </div>
              </div>

              {/* Period */}
              <div className="text-right shrink-0">
                <div
                  className="flex items-center gap-1 text-[11px] font-medium mb-0.5"
                  style={{ color: experience.accent }}
                >
                  <Calendar size={10} />
                  {experience.period}
                </div>
                <div className="text-[10px] text-white/30">{experience.duration}</div>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-4">
              {experience.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-1.5 mb-4">
              {experience.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-white/45">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: experience.accent }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-1 rounded-full text-white/40 border border-white/[0.06]"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center dot — desktop */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10"
        style={{ top: 22 }}
      >
        <motion.div
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: experience.accent,
            background: "#080808",
            boxShadow: `0 0 15px ${experience.accent}50`,
          }}
          animate={{
            boxShadow: [
              `0 0 10px ${experience.accent}30`,
              `0 0 25px ${experience.accent}70`,
              `0 0 10px ${experience.accent}30`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: experience.accent }}
          />
        </motion.div>
      </div>

      {/* Mobile dot */}
      <div
        className="md:hidden flex-shrink-0 mt-1.5 w-4 h-4 rounded-full border-2"
        style={{
          borderColor: experience.accent,
          background: "#080808",
          boxShadow: `0 0 10px ${experience.accent}50`,
        }}
      />
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 100% 50%, rgba(191,90,242,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#FF2D55]" />
            <span className="text-xs text-[#FF2D55] uppercase tracking-[0.3em] font-medium">
              Experience
            </span>
            <div className="w-8 h-px bg-[#FF2D55]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tighter text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            My{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(135deg, #FF2D55, #BF5AF2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,45,85,0.4), rgba(191,90,242,0.4), rgba(10,132,255,0.4), rgba(255,159,10,0.4), transparent)",
            }}
          />

          {/* Mobile vertical line */}
          <div
            className="absolute left-2 top-0 bottom-0 w-px md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,45,85,0.4), rgba(191,90,242,0.3), rgba(255,159,10,0.3), transparent)",
            }}
          />

          <div className="flex flex-col gap-10 md:gap-14 pl-8 md:pl-0">
            {EXPERIENCES.map((exp, i) => (
              <TimelineCard key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
