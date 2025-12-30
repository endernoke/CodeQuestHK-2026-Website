"use client";

import { motion } from "framer-motion";
import { Clock, Handshake, Code2, MapPin } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const pillars = [
  {
    icon: Clock,
    title: "48 Hours of Innovation",
    description: "A true hackathon experience. Build something amazing from scratch in just two days.",
  },
  {
    icon: Handshake,
    title: "Industry Partnerships",
    description: "Work on real problems from leading Hong Kong companies and startups.",
  },
  {
    icon: Code2,
    title: "Real Prototypes",
    description: "No slide decks here. Create working prototypes that demonstrate your solution.",
  },
  {
    icon: MapPin,
    title: "Hong Kong's Best",
    description: "Connect with the brightest high school minds from across the city.",
  },
];

export default function EventOverview() {
  return (
    <SectionWrapper id="overview">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          What We Offer
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          The TyphoonHacks Experience
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group glass rounded-2xl p-8 border-l-4 border-electric-cyan hover:shadow-lg hover:shadow-electric-cyan/10 transition-all"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-electric-cyan/10 flex items-center justify-center group-hover:bg-electric-cyan/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-electric-cyan" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-storm-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-subtle-gray leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
