"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import PageLoader from "@/components/effects/PageLoader";

// Lazy-load heavy canvas effect
const ParticleField = dynamic(
  () => import("@/components/effects/ParticleField"),
  { ssr: false }
);
const CursorGlow = dynamic(
  () => import("@/components/effects/CursorGlow"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <PageLoader />
      <CursorGlow />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
