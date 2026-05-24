"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 3;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-[#080808] flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Cinematic bars */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-16 bg-black z-10"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: "top" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-16 bg-black z-10"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: "bottom" }}
          />

          {/* Logo */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="text-5xl font-bold tracking-tighter"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <span className="text-white">AMRIT</span>
                <span
                  className="text-[#FF2D55]"
                  style={{
                    textShadow:
                      "0 0 20px rgba(255,45,85,0.8), 0 0 40px rgba(255,45,85,0.4)",
                  }}
                >
                  .
                </span>
              </motion.div>
              <motion.div
                className="text-xs tracking-[0.4em] text-white/40 uppercase text-center mt-2"
              >
                Video Editor
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background:
                    "linear-gradient(90deg, #FF2D55, #BF5AF2)",
                  boxShadow: "0 0 10px rgba(255,45,85,0.5)",
                }}
              />
            </div>

            <motion.div className="text-xs text-white/30 tabular-nums font-mono">
              {Math.min(Math.round(progress), 100)}%
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
