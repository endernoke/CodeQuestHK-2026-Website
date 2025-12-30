"use client";

import { motion } from "framer-motion";
import { Trophy, Gift, Award, Medal } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const mainPrizes = [
  {
    place: "2nd Place",
    amount: "HK$8,000",
    color: "from-gray-300 to-gray-400",
    icon: Medal,
    items: ["Cash Prize", "Mentorship Session", "Swag Pack"],
  },
  {
    place: "1st Place",
    amount: "HK$15,000",
    color: "from-yellow-400 to-amber-500",
    icon: Trophy,
    items: ["Grand Cash Prize", "Industry Mentorship", "Premium Swag Pack", "Media Feature"],
    featured: true,
  },
  {
    place: "3rd Place",
    amount: "HK$5,000",
    color: "from-amber-600 to-amber-700",
    icon: Award,
    items: ["Cash Prize", "Swag Pack"],
  },
];

const categoryPrizes = [
  { name: "Best Technical Implementation", prize: "HK$2,000" },
  { name: "Most Innovative Solution", prize: "HK$2,000" },
  { name: "Best UI/UX Design", prize: "HK$2,000" },
  { name: "People's Choice Award", prize: "HK$1,500" },
];

export default function PrizesSection() {
  return (
    <SectionWrapper id="prizes">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          What&apos;s at Stake
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Prizes & Recognition
        </motion.h2>
      </div>

      {/* Main prizes - podium style */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-16">
        {mainPrizes.map((prize, index) => (
          <motion.div
            key={prize.place}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`relative w-full md:w-72 ${
              prize.featured ? "md:-order-0" : index === 0 ? "md:order-first" : "md:order-last"
            }`}
          >
            <div
              className={`glass rounded-2xl p-8 text-center ${
                prize.featured ? "md:pb-12 border-2 border-warning-amber/30" : ""
              }`}
            >
              {prize.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-warning-amber text-deep-space text-xs font-bold rounded-full">
                  GRAND PRIZE
                </div>
              )}
              
              <div className="mb-4">
                <prize.icon
                  className={`w-12 h-12 mx-auto ${
                    prize.featured ? "text-warning-amber" : "text-subtle-gray"
                  }`}
                />
              </div>
              
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-storm-white mb-2">
                {prize.place}
              </h3>
              
              <div
                className={`text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}
              >
                {prize.amount}
              </div>
              
              <ul className="space-y-2">
                {prize.items.map((item) => (
                  <li key={item} className="text-subtle-gray text-sm flex items-center justify-center gap-2">
                    <Gift className="w-4 h-4 text-electric-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Category prizes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {categoryPrizes.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="glass rounded-xl p-4 text-center hover:border-electric-cyan/30 transition-colors"
          >
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white text-sm mb-2">
              {category.name}
            </h4>
            <p className="text-electric-cyan font-bold">{category.prize}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
