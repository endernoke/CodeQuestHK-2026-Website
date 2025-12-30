"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/app/components/ParticleBackground";

export default function PartnersHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a3a5c 70%, #0d2847 100%)",
        }}
      />
      
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl lg:text-7xl font-bold text-storm-white mb-6"
        >
          Partner With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-storm-white/80 mb-6"
        >
          Join Hong Kong&apos;s most ambitious student hackathon
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-subtle-gray max-w-2xl mx-auto leading-relaxed"
        >
          TyphoonHacks 2026 brings together Hong Kong&apos;s brightest high school innovators for 48 hours of 
          intensive creation. Partner with us to access emerging talent, showcase your brand, and contribute 
          to the next generation of tech leaders.
        </motion.p>
      </div>
    </section>
  );
}
