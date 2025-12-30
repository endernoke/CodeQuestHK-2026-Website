"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/app/components/ParticleBackground";

export default function ShowcaseHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with flashback effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a3a5c 70%, #0d2847 100%)",
        }}
      />
      
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(10, 22, 40, 0.5) 100%)",
        }}
      />
      
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 bg-warning-amber/20 text-warning-amber text-sm font-semibold rounded-full border border-warning-amber/30 uppercase tracking-wider">
            Looking Back
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl lg:text-7xl font-bold text-storm-white mb-6"
        >
          Our 2025 Game Jam
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-storm-white/80 mb-8"
        >
          Where it all started — A showcase of what our team can deliver
        </motion.p>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-subtle-gray max-w-2xl mx-auto leading-relaxed"
        >
          Before TyphoonHacks, our organizing committee ran a successful 12-hour game jam that brought together 
          72 passionate student developers. This experience laid the foundation for what would become 
          Hong Kong&apos;s most ambitious high school hackathon.
        </motion.p>
      </div>
    </section>
  );
}
