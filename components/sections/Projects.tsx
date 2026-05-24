"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import type { ProjectCategory } from "@/types";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

type ProjectSource = "instagram" | "internal";

interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  accent: string;
  source: ProjectSource;
  href?: string;
  thumbnail?: string;
  span?: string;
}

// ─── FEATURED WORK ──────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: "ll-gulbadin-naib",
    title: "Gulbadin Naib is Coming to NPL",
    client: "Lumbini Lions · NPL",
    category: "Sports",
    description:
      "Player announcement reel for Afghanistan captain Gulbadin Naib signing with Lumbini Lions — dramatic reveal with cinematic motion graphics and hype build-up.",
    tags: ["Player Announcement", "NPL", "Lumbini Lions"],
    accent: "#FF2D55",
    source: "instagram",
    href: "https://www.instagram.com/reel/DQ4BtYnCDoG/",
    thumbnail: "/assets/images/ll-gulbadin.png",
  },
  {
    id: "ll-good-morning",
    title: "Good Morning Lumbini",
    client: "Lumbini Lions · NPL",
    category: "Reels",
    description:
      "Match-day morning energy reel for Lumbini Lions — building pre-game buzz and fan excitement across social media ahead of the NPL fixture.",
    tags: ["Match Day", "Hype", "Lumbini Lions"],
    accent: "#FF6B35",
    source: "instagram",
    href: "https://www.instagram.com/reel/DRI_QpxCGTh/",
    thumbnail: "/assets/images/good_morning_lumini.png",
  },
  {
    id: "ll-elevate",
    title: "Elevate Frame, Elevate Game",
    client: "Lumbini Lions · NPL",
    category: "Cinematic",
    description:
      "Cinematic brand reel for Lumbini Lions — high-end visual storytelling that combines slow motion, dynamic cuts, and motivational framing.",
    tags: ["Cinematic", "Brand Reel", "Lumbini Lions"],
    accent: "#BF5AF2",
    source: "instagram",
    href: "https://www.instagram.com/reel/DROI2GZiM_L/",
    thumbnail: "/assets/images/elevate.png",
  },
  {
    id: "npl-season2-promo",
    title: "NPL Season 2 — Official Promo",
    client: "Nepal Premier League",
    category: "Sports",
    description:
      "Official promotional video for Season 2 of the Nepal Premier League — showcasing teams, energy, and the scale of Nepal's premier cricket tournament.",
    tags: ["Season Promo", "NPL", "Official"],
    accent: "#0A84FF",
    source: "instagram",
    href: "https://www.instagram.com/reel/DJ369kjsqlG/",
    thumbnail: "/assets/images/second_season.png",
  },
  {
    id: "npl-routineofnepalbanda",
    title: "RouteOfNepalbanda — Sponsorship Feature",
    client: "Nepal Premier League",
    category: "Commercial",
    description:
      "Sponsorship announcement feature for NPL — a polished commercial edit introducing RouteOfNepalbanda as an official sponsor of the league.",
    tags: ["Sponsorship", "Commercial", "NPL"],
    accent: "#FF9F0A",
    source: "instagram",
    href: "https://www.instagram.com/reel/DN-3ZMpDB6_/",
    thumbnail: "/assets/images/ronb.png",
  },
];
// ────────────────────────────────────────────────────────────────────────────

const CATEGORY_FILTERS: (ProjectCategory | "All")[] = [
  "All",
  "Sports",
  "Cinematic",
  "Reels",
  "Commercial",
  "Motion Graphics",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const hasLink = !!project.href;
  const hasThumb = !!project.thumbnail;

  const cardContent = (
    <motion.div
      ref={ref}
      className="group relative rounded-3xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      whileHover={{ y: -6 }}
    >
      {/* Thumbnail area */}
      <div className="aspect-[4/3] relative overflow-hidden">
        {hasThumb ? (
          <Image
            src={project.thumbnail!}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* Styled gradient fallback */
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, ${project.accent}18, #0d0d0d 60%, ${project.accent}08)`,
            }}
          >
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
                backgroundSize: "36px 36px",
              }}
            />
            {/* Centre icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${project.accent}18`,
                    border: `1px solid ${project.accent}30`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {project.category === "Sports" ? "🏆"
                    : project.category === "Cinematic" ? "🎬"
                    : project.category === "Reels" ? "📱"
                    : project.category === "Commercial" ? "📺"
                    : "✨"}
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: `1px solid ${project.accent}20` }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Dark cinematic scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.3) 45%, transparent 100%)",
          }}
        />

        {/* Instagram source badge */}
        {project.source === "instagram" && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full backdrop-blur-md"
            style={{
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <InstagramIcon size={11} />
            <span className="text-[10px] text-white/70 font-medium">Instagram</span>
          </div>
        )}

        {/* Play hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
            style={{
              background: `${project.accent}35`,
              border: `1px solid ${project.accent}60`,
              boxShadow: `0 0 30px ${project.accent}40`,
            }}
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <Play size={18} className="ml-0.5" style={{ color: project.accent }} fill={project.accent} />
          </motion.div>
        </div>
      </div>

      {/* Info panel */}
      <div
        className="relative p-5"
        style={{ background: "rgba(10,10,10,0.95)", borderTop: `1px solid rgba(255,255,255,0.04)` }}
      >
        {/* Accent glow top-edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
        />

        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            <span
              className="text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: project.accent }}
            >
              {project.client}
            </span>
            <h3
              className="text-sm font-bold text-white leading-snug mt-0.5 truncate"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {project.title}
            </h3>
          </div>

          {/* Category pill */}
          <span
            className="text-[10px] font-medium px-2.5 py-1 rounded-full shrink-0"
            style={{
              background: `${project.accent}15`,
              color: project.accent,
              border: `1px solid ${project.accent}25`,
            }}
          >
            {project.category}
          </span>
        </div>

        <p className="text-xs text-white/40 leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Tags + CTA row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1.5 flex-wrap">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-white/30 border border-white/[0.05] px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {hasLink && (
            <div
              className="flex items-center gap-1.5 text-[11px] font-semibold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: project.accent }}
            >
              <InstagramIcon size={11} />
              View
              <ExternalLink size={10} />
            </div>
          )}
        </div>
      </div>

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none border transition-all duration-500 border-white/[0.04] group-hover:border-white/[0.08]"
        style={{ boxShadow: `0 0 0 rgba(${project.accent},0)` }}
      />
    </motion.div>
  );

  if (hasLink) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    );
  }
  return cardContent;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,45,85,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#FF2D55]" />
              <span className="text-xs text-[#FF2D55] uppercase tracking-[0.3em] font-medium">
                Portfolio
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tighter text-white"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Featured{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  background: "linear-gradient(135deg, #FF2D55, #BF5AF2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Work
              </span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "text-white"
                    : "text-white/40 border border-white/[0.06] hover:text-white/70"
                }`}
                style={
                  activeFilter === filter
                    ? { background: "linear-gradient(135deg, #FF2D55, #BF5AF2)", boxShadow: "0 0 20px rgba(255,45,85,0.3)" }
                    : {}
                }
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Instagram attribution note */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <InstagramIcon size={12} />
          <span className="text-xs text-white/20">
            Videos published on Instagram — click any card to view
          </span>
        </motion.div>
      </div>
    </section>
  );
}
