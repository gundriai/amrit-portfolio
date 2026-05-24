"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, ArrowUp } from "lucide-react";

function FacebookIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { icon: Instagram, href: "https://www.instagram.com/this_is._amrit/", label: "Instagram" },
  { icon: FacebookIcon, href: "https://www.facebook.com/share/1Enop2SNK2/?mibextid=wwXIfr", label: "Facebook" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/amritniraula/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:amritniraula9@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#060606]">
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,45,85,0.5), rgba(191,90,242,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-2xl font-black tracking-tighter text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                AMRIT
                <span
                  className="text-[#FF2D55]"
                  style={{ textShadow: "0 0 10px rgba(255,45,85,0.6)" }}
                >
                  .
                </span>
              </span>
            </div>
            <p className="text-xs text-white/35 leading-relaxed max-w-xs">
              Professional video editor from Nepal, crafting cinematic stories
              that resonate and inspire across sports, brand, and social media.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs text-white/30 uppercase tracking-[0.3em] mb-5">
              Navigation
            </h4>
            <nav className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-white/50 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs text-white/30 uppercase tracking-[0.3em] mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.05] group-hover:border-white/15 transition-colors"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <s.icon size={13} />
                  </div>
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-white/20 text-center sm:text-left">
            © {new Date().getFullYear()} Bishal. All rights reserved. ·{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(90deg, #FF2D55, #BF5AF2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Crafted with passion for storytelling
            </span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-white transition-colors duration-200 group"
            whileHover={{ y: -2 }}
          >
            Back to top
            <div
              className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors"
            >
              <ArrowUp size={12} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
