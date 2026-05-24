"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    const animateFollower = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x - 20}px, ${followerPos.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animateFollower);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], .magnetic-btn, input, textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    rafRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{ width: 12, height: 12 }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-150 ${
            isClicking ? "scale-75" : "scale-100"
          }`}
          style={{
            background: isHovering ? "rgba(255,45,85,1)" : "white",
            boxShadow: isHovering
              ? "0 0 10px rgba(255,45,85,0.8), 0 0 20px rgba(255,45,85,0.4)"
              : "0 0 6px rgba(255,255,255,0.5)",
          }}
        />
      </div>

      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform"
        style={{ width: 40, height: 40 }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-300 ${
            isHovering
              ? "border-[rgba(255,45,85,0.8)] scale-150"
              : "border-[rgba(255,255,255,0.2)] scale-100"
          } ${isClicking ? "scale-75" : ""}`}
          style={{
            boxShadow: isHovering ? "0 0 15px rgba(255,45,85,0.3)" : "none",
          }}
        />
      </div>

      {/* Glow trail */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none will-change-transform opacity-30"
        style={{ width: 40, height: 40 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isHovering
              ? "radial-gradient(circle, rgba(255,45,85,0.2) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>
    </>
  );
}
