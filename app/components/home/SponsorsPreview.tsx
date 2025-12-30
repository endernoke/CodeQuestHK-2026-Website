"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/app/components/SectionWrapper";

const sponsors = [
  { name: "TechCorp HK", tier: "platinum" },
  { name: "Innovation Labs", tier: "gold" },
  { name: "Digital Solutions", tier: "gold" },
  { name: "Future Fund", tier: "silver" },
  { name: "Code Academy", tier: "silver" },
  { name: "StartUp Hub", tier: "silver" },
  { name: "DevTools Inc", tier: "bronze" },
  { name: "Cloud Services", tier: "bronze" },
];

export default function SponsorsPreview() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          Our Supporters
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Powered By
        </motion.h2>
      </div>

      {/* Infinite scroll sponsors */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-deep-space to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-deep-space to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 py-8"
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 h-16 px-8 glass rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white/60 hover:text-storm-white transition-colors whitespace-nowrap">
                {sponsor.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="/partners"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-electric-cyan/50 text-electric-cyan font-semibold rounded-full hover:bg-electric-cyan/10 transition-all"
        >
          Become a Partner
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
