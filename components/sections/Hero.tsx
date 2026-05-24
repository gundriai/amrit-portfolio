"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowDown, ChevronRight } from "lucide-react";

const WORD_ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 2.8 },
    },
  },
  word: {
    hidden: { y: 80, opacity: 0, rotateX: -30 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  },
};

const FLOAT_CARDS = [
  {
    id: 1,
    label: "Nepal Premier League",
    category: "Sports",
    color: "from-[#FF2D55]/20 to-[#FF2D55]/5",
    border: "border-[#FF2D55]/20",
    glow: "rgba(255,45,85,0.15)",
    icon: "⚡",
    pos: "top-[20%] -right-4 md:right-8",
    delay: 0.4,
  },
  {
    id: 2,
    label: "Cinematic Edit",
    category: "Storytelling",
    color: "from-[#BF5AF2]/20 to-[#BF5AF2]/5",
    border: "border-[#BF5AF2]/20",
    glow: "rgba(191,90,242,0.15)",
    icon: "🎬",
    pos: "bottom-[25%] -left-4 md:left-4",
    delay: 0.7,
  },
  {
    id: 3,
    label: "1M+ Views",
    category: "Social Media",
    color: "from-[#0A84FF]/20 to-[#0A84FF]/5",
    border: "border-[#0A84FF]/20",
    glow: "rgba(10,132,255,0.15)",
    icon: "🚀",
    pos: "bottom-[38%] right-2 md:right-12",
    delay: 1.0,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Cinematic gradient orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,45,85,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(191,90,242,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,45,85,0.3), transparent)",
        }}
        animate={{ top: ["-2%", "102%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center"
        style={{ y, opacity, scale }}
      >
        {/* Badge */}
        <motion.div
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-white/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-[#FF2D55]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs text-white/60 tracking-wider uppercase">
            Available for Projects
          </span>
          <ChevronRight size={12} className="text-white/40" />
        </motion.div>

        {/* Main headline */}
        <motion.div
          className="overflow-hidden mb-6"
          variants={WORD_ANIMATIONS.container}
          initial="hidden"
          animate="visible"
        >
          {["I Edit Stories", "That People", "Remember."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={WORD_ANIMATIONS.word}
                className={`block leading-[1.0] font-extrabold tracking-tighter ${
                  i === 2
                    ? "text-transparent bg-clip-text"
                    : "text-white"
                }`}
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  ...(i === 2 && {
                    background:
                      "linear-gradient(135deg, #FF2D55 0%, #BF5AF2 50%, #0A84FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }),
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="max-w-xl text-base md:text-lg text-white/50 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.7 }}
        >
          Professional Video Editor specializing in{" "}
          <span className="text-white/80">cinematic edits</span>,{" "}
          <span className="text-white/80">sports content</span>, commercials,
          reels, and storytelling visuals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.7 }}
        >
          <motion.button
            onClick={scrollToWork}
            className="group relative px-8 py-4 text-sm font-bold text-white rounded-full overflow-hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #FF2D55, #BF5AF2)",
              }}
            />
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, #BF5AF2, #FF2D55)",
                boxShadow: "0 0 30px rgba(255,45,85,0.4)",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Play size={14} className="fill-white" />
              View Work
            </span>
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="group px-8 py-4 text-sm font-bold text-white/80 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="flex items-center gap-2">
              Contact Me
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex items-center gap-8 mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.9, duration: 0.7 }}
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "3+", label: "Years" },
            { value: "20+", label: "Clients" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #FF2D55, #BF5AF2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </span>
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating cards */}
      {FLOAT_CARDS.map((card) => (
        <motion.div
          key={card.id}
          className={`absolute ${card.pos} z-20 hidden sm:block`}
          initial={{ opacity: 0, x: 20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3.8 + card.delay, duration: 0.7 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + card.id,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-44 rounded-2xl p-3 glass border ${card.border}`}
              style={{ boxShadow: `0 0 30px ${card.glow}` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{card.icon}</span>
                <div>
                  <div className="text-xs text-white/80 font-semibold leading-tight">
                    {card.label}
                  </div>
                  <div className="text-[10px] text-white/40">{card.category}</div>
                </div>
              </div>
              <div className={`h-0.5 rounded-full mt-2 bg-gradient-to-r ${card.color}`} />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 0.7 }}
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
