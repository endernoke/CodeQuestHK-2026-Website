"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const comparisons = [
  {
    aspect: "Duration",
    others: "Weeks or Months",
    typhoonhacks: "48 Hours",
  },
  {
    aspect: "Focus",
    others: "Business Slides & Pitches",
    typhoonhacks: "Working Prototypes",
  },
  {
    aspect: "Work",
    others: "Pre-prepared Projects",
    typhoonhacks: "Built from Scratch",
  },
  {
    aspect: "Judging",
    others: "Presentation Skills",
    typhoonhacks: "Live Demos",
  },
  {
    aspect: "Problems",
    others: "Hypothetical Scenarios",
    typhoonhacks: "Real Industry Challenges",
  },
];

export default function ComparisonSection() {
  return (
    <SectionWrapper dark>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white"
        >
          Not Your{" "}
          <span className="relative">
            <span className="relative z-10">Typical</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute left-0 top-1/2 w-full h-0.5 bg-electric-cyan origin-left"
            />
          </span>{" "}
          Competition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-subtle-gray mt-4 max-w-2xl mx-auto"
        >
          We&apos;re redefining what a student tech competition looks like in Hong Kong.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-subtle-gray font-semibold">Aspect</div>
          <div className="text-center text-subtle-gray/60 font-semibold">Others</div>
          <div className="text-center text-electric-cyan font-semibold">TyphoonHacks</div>
        </div>

        {/* Comparison rows */}
        {comparisons.map((row, index) => (
          <motion.div
            key={row.aspect}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-3 gap-4 py-4 border-t border-ocean-depth"
          >
            <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white">
              {row.aspect}
            </div>
            <div className="text-center text-subtle-gray/60 flex items-center justify-center gap-2">
              <X className="w-4 h-4 text-red-400/60" />
              <span className="text-sm">{row.others}</span>
            </div>
            <div className="text-center text-storm-white flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-success-teal" />
              <span className="text-sm font-medium">{row.typhoonhacks}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
