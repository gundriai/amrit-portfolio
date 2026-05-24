"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Shrestha",
    title: "Content Director",
    company: "Nepal Premier League",
    content:
      "Amrit delivered outstanding work on our NPL content this season. His ability to capture the energy and emotion of cricket and translate it into compelling video content was exactly what we needed. Every promo reel he produced exceeded our expectations.",
    rating: 5,
    accent: "#FF2D55",
    initials: "RS",
  },
  {
    id: 2,
    name: "Anish Maharjan",
    title: "YouTube Creator",
    company: "2.5M Subscribers",
    content:
      "Working with Amrit completely transformed my channel's aesthetic. My average watch time increased by 40% after he started editing my videos. He has an incredible sense of pacing and knows exactly when to cut and when to hold.",
    rating: 5,
    accent: "#BF5AF2",
    initials: "AM",
  },
  {
    id: 3,
    name: "Priya Gurung",
    title: "Marketing Manager",
    company: "Himalayan Brands Co.",
    content:
      "Our brand commercial needed to stand out in a crowded market. Amrit created something truly cinematic and memorable. The video drove a 3x increase in our campaign engagement. Professional, communicative, and delivers on time, every time.",
    rating: 5,
    accent: "#0A84FF",
    initials: "PG",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  const current = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(191,90,242,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#FF2D55]" />
            <span className="text-xs text-[#FF2D55] uppercase tracking-[0.3em] font-medium">
              Testimonials
            </span>
            <div className="w-8 h-px bg-[#FF2D55]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tighter text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            What Clients{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(135deg, #FF2D55, #BF5AF2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Say
            </span>
          </h2>
        </motion.div>

        {/* Main testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${current.accent}25`,
                boxShadow: `0 0 80px ${current.accent}08`,
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-8 right-8 opacity-10"
                style={{ color: current.accent }}
              >
                <Quote size={80} />
              </div>

              {/* Background glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(ellipse 60% 60% at 0% 0%, ${current.accent}06 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={current.accent}
                      style={{ color: current.accent }}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote
                  className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-3xl"
                  style={{ fontStyle: "normal" }}
                >
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${current.accent}30, ${current.accent}10)`,
                      border: `1px solid ${current.accent}30`,
                      color: current.accent,
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    {current.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {current.name}
                    </div>
                    <div className="text-xs text-white/40">
                      {current.title} · {current.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <motion.div
          className="flex items-center justify-between mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {/* Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="relative overflow-hidden rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 24 : 6,
                  height: 6,
                  background:
                    i === active
                      ? `linear-gradient(90deg, #FF2D55, #BF5AF2)`
                      : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={16} />
            </motion.button>
            <motion.button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Mini cards — desktop */}
        <div className="hidden md:grid grid-cols-3 gap-4 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-2xl transition-all duration-300 border ${
                i === active
                  ? "border-white/10"
                  : "border-white/[0.04] opacity-50 hover:opacity-75"
              }`}
              style={{
                background: i === active ? "rgba(255,255,255,0.03)" : "transparent",
                boxShadow: i === active ? `0 0 30px ${t.accent}10` : "none",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="text-xs font-semibold text-white mb-1">{t.name}</div>
              <div className="text-[11px] text-white/40">{t.company}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
