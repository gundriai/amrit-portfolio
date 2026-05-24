"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Play, Award } from "lucide-react";

const STATS = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 200, suffix: "+", label: "Videos Edited" },
];

const HIGHLIGHTS = [
  { icon: "⚡", text: "Nepal Premier League Content" },
  { icon: "🎬", text: "Cinematic Storytelling Edits" },
  { icon: "📱", text: "Social Media & Reels" },
  { icon: "▶️", text: "YouTube Long-form & Shorts" },
];

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="glass border border-white/[0.06] rounded-2xl p-5 text-center group hover:border-[rgba(255,45,85,0.2)] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(255,45,85,0.1)" }}
    >
      <div
        className="text-3xl font-black mb-1"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        <motion.span
          className="text-transparent bg-clip-text"
          style={{
            background: "linear-gradient(135deg, #FF2D55, #BF5AF2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {value}
          {suffix}
        </motion.span>
      </div>
      <div className="text-xs text-white/40 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,45,85,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-px bg-[#FF2D55]" />
          <span className="text-xs text-[#FF2D55] uppercase tracking-[0.3em] font-medium">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image + badges */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Profile image container */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Actual profile photo */}
              <Image
                src="/assets/images/profile.jpeg"
                alt="Amrit Niraula — Video Editor"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Cinematic overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 50%)",
                }}
              />

              {/* Animated border */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  border: "1px solid rgba(255,45,85,0.2)",
                  boxShadow: "0 0 40px rgba(255,45,85,0.05)",
                }}
              />
            </div>

            {/* Floating badge — location */}
            <motion.div
              className="absolute top-6 -right-4 lg:right-0 glass border border-white/[0.08] rounded-xl px-3 py-2 flex items-center gap-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin size={12} className="text-[#FF2D55]" />
              <span className="text-xs text-white/70">Kathmandu, Nepal</span>
            </motion.div>

            {/* Floating badge — award */}
            <motion.div
              className="absolute -bottom-4 lg:bottom-6 -left-4 lg:left-0 glass border border-white/[0.08] rounded-xl px-3 py-2 flex items-center gap-2"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <Award size={12} className="text-[#BF5AF2]" />
              <span className="text-xs text-white/70">NPL Official Editor</span>
            </motion.div>
          </motion.div>

          {/* Right — text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Crafting Visuals{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  background: "linear-gradient(135deg, #FF2D55, #BF5AF2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                That Move
              </span>{" "}
              People
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-6">
              I'm a passionate video editor from{" "}
              <span className="text-white/80">Nepal</span>, dedicated to
              transforming raw footage into compelling stories. Every frame
              matters, every cut has purpose.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-8">
              From high-energy sports promo reels to emotionally driven
              cinematic pieces, I bring technical precision and creative
              vision together to deliver content that{" "}
              <span className="text-white/80">resonates and converts.</span>
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-sm text-white/60"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <span>{h.icon}</span>
                  <span>{h.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Mini CTA */}
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 text-sm font-semibold text-white/70 hover:text-white transition-colors"
              whileHover={{ x: 4 }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,45,85,0.15)",
                  border: "1px solid rgba(255,45,85,0.3)",
                }}
              >
                <Play size={10} className="fill-[#FF2D55] text-[#FF2D55] ml-0.5" />
              </div>
              Watch my reel
            </motion.button>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
