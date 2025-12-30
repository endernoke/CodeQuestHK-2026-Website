"use client";

import { motion } from "framer-motion";
import { Check, Lightbulb, Users, Building } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const features = [
  "Tackle real-world business challenges",
  "Work with cutting-edge technologies",
  "Mentorship from industry experts",
  "Showcase your solutions to company leaders",
];

export default function ThemeSection() {
  return (
    <SectionWrapper dark>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left content - 3 columns */}
        <div className="lg:col-span-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
          >
            2026 Theme
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-storm-white mt-4 mb-6"
          >
            Technology Consulting for the Future
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-subtle-gray text-lg leading-relaxed mb-8"
          >
            This year, we&apos;re bridging the gap between student innovation and industry needs. 
            Partner companies will present real challenges they face, and you&apos;ll have 48 hours 
            to develop technological solutions. Think of it as being a tech consultant—but with 
            the freedom to build whatever you envision.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 text-storm-white"
              >
                <Check className="w-5 h-5 text-electric-cyan flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right visual - 2 columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/4 glass rounded-xl p-4"
            >
              <Lightbulb className="w-8 h-8 text-warning-amber" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 right-0 glass rounded-xl p-4"
            >
              <Users className="w-8 h-8 text-electric-cyan" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 left-0 glass rounded-xl p-4"
            >
              <Building className="w-8 h-8 text-success-teal" />
            </motion.div>

            {/* Central illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <motion.path
                    d="M100,50 L150,100 L100,150 L50,100 Z"
                    stroke="rgba(0, 212, 255, 0.3)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="50"
                    r="6"
                    fill="#00d4ff"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  />
                  <motion.circle
                    cx="150"
                    cy="100"
                    r="6"
                    fill="#00d4ff"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="150"
                    r="6"
                    fill="#00d4ff"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  />
                  <motion.circle
                    cx="50"
                    cy="100"
                    r="6"
                    fill="#00d4ff"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                  />
                </svg>
                
                {/* Central hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-cyan/20 to-electric-cyan/5 border border-electric-cyan/30 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-electric-cyan font-bold text-2xl">
                      TH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
