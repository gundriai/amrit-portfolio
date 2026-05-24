"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILLS = [
  { name: "Adobe Premiere Pro", level: 97, category: "Editing", icon: "🎬" },
  { name: "After Effects", level: 90, category: "Motion", icon: "✨" },
  { name: "DaVinci Resolve", level: 88, category: "Color", icon: "🎨" },
  { name: "Motion Graphics", level: 85, category: "Design", icon: "⚡" },
  { name: "Color Grading", level: 92, category: "Color", icon: "🎞" },
  { name: "Sound Design", level: 80, category: "Audio", icon: "🎵" },
  { name: "Storytelling", level: 95, category: "Creative", icon: "📖" },
  { name: "Social Media Reels", level: 96, category: "Social", icon: "📱" },
  { name: "YouTube Editing", level: 93, category: "Platform", icon: "▶️" },
  { name: "Sports Highlights", level: 94, category: "Sports", icon: "🏆" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Editing: "#FF2D55",
  Motion: "#BF5AF2",
  Color: "#FF9F0A",
  Design: "#30D158",
  Audio: "#64D2FF",
  Creative: "#FF6B6B",
  Social: "#FF2D55",
  Platform: "#FF2D55",
  Sports: "#FF2D55",
};

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof SKILLS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const accent = CATEGORY_COLORS[skill.category] || "#FF2D55";

  return (
    <motion.div
      ref={ref}
      className="glass border border-white/[0.06] rounded-2xl p-5 group relative overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      whileHover={{
        y: -6,
        borderColor: `${accent}40`,
        boxShadow: `0 20px 50px ${accent}15`,
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 100%, ${accent}08, transparent)`,
        }}
      />

      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
            style={{
              background: `${accent}15`,
              border: `1px solid ${accent}25`,
            }}
          >
            {skill.icon}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white leading-tight">
              {skill.name}
            </h3>
            <span
              className="text-[11px] font-medium"
              style={{ color: accent }}
            >
              {skill.category}
            </span>
          </div>
        </div>

        {/* Level badge */}
        <div
          className="text-sm font-bold tabular-nums"
          style={{ color: accent, fontFamily: "JetBrains Mono, monospace" }}
        >
          {skill.level}%
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full origin-left"
          style={{
            background: `linear-gradient(90deg, ${accent}, ${accent}99)`,
            boxShadow: `0 0 8px ${accent}60`,
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
          transition={{
            delay: index * 0.06 + 0.3,
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 0% 50%, rgba(255,45,85,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#FF2D55]" />
              <span className="text-xs text-[#FF2D55] uppercase tracking-[0.3em] font-medium">
                Expertise
              </span>
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
                Toolkit
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/40 leading-relaxed md:text-right">
            Industry-standard tools and creative skills built over years of
            professional editing work.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="w-12 h-px bg-white/10" />
          <span className="text-xs text-white/30 uppercase tracking-wider">
            Always learning
          </span>
          <div className="w-12 h-px bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
