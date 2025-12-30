"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

interface Tier {
  name: string;
  price: string;
  color: string;
  featured?: boolean;
  benefits: { name: string; included: boolean }[];
}

const tiers: Tier[] = [
  {
    name: "Bronze",
    price: "HK$5,000",
    color: "from-amber-600 to-amber-700",
    benefits: [
      { name: "Logo on website", included: true },
      { name: "Logo at venue", included: true },
      { name: "Social media mention", included: true },
      { name: "Judging panel seat", included: false },
      { name: "Workshop hosting", included: false },
      { name: "Challenge sponsorship", included: false },
      { name: "Recruitment booth", included: false },
      { name: "Keynote opportunity", included: false },
    ],
  },
  {
    name: "Silver",
    price: "HK$15,000",
    color: "from-gray-300 to-gray-400",
    benefits: [
      { name: "Logo on website", included: true },
      { name: "Logo at venue", included: true },
      { name: "Social media mentions (3x)", included: true },
      { name: "Judging panel seat", included: true },
      { name: "Workshop hosting", included: false },
      { name: "Challenge sponsorship", included: false },
      { name: "Recruitment booth", included: true },
      { name: "Keynote opportunity", included: false },
    ],
  },
  {
    name: "Gold",
    price: "HK$30,000",
    color: "from-yellow-400 to-amber-500",
    benefits: [
      { name: "Logo on website (featured)", included: true },
      { name: "Logo at venue (premium)", included: true },
      { name: "Social media mentions (5x)", included: true },
      { name: "Judging panel seats (2)", included: true },
      { name: "Workshop hosting", included: true },
      { name: "Challenge sponsorship", included: true },
      { name: "Recruitment booth", included: true },
      { name: "Keynote opportunity", included: false },
    ],
  },
  {
    name: "Platinum",
    price: "HK$50,000+",
    color: "from-electric-cyan to-blue-400",
    featured: true,
    benefits: [
      { name: "Premier logo placement", included: true },
      { name: "Venue naming rights", included: true },
      { name: "Dedicated social campaign", included: true },
      { name: "Judging panel seats (3)", included: true },
      { name: "Workshop hosting (2)", included: true },
      { name: "Exclusive challenge", included: true },
      { name: "Premium recruitment booth", included: true },
      { name: "Opening keynote", included: true },
    ],
  },
];

export default function SponsorshipTiers() {
  return (
    <SectionWrapper dark>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          Partnership Options
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Sponsorship Tiers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-subtle-gray mt-4 max-w-2xl mx-auto"
        >
          Choose the partnership level that fits your goals. All tiers include recognition and our gratitude for supporting student innovation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative glass rounded-2xl p-6 ${
              tier.featured ? "border-2 border-electric-cyan/50 lg:-mt-4 lg:mb-4" : ""
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-electric-cyan text-deep-space text-xs font-bold rounded-full">
                <Star className="w-3 h-3" /> PREMIER
              </div>
            )}

            <div className="text-center mb-6 mt-2">
              <h3 className={`font-[family-name:var(--font-space-grotesk)] text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                {tier.name}
              </h3>
              <p className="text-storm-white text-3xl font-bold mt-2">
                {tier.price}
              </p>
            </div>

            <ul className="space-y-3 mb-6">
              {tier.benefits.map((benefit) => (
                <li
                  key={benefit.name}
                  className={`flex items-start gap-2 text-sm ${
                    benefit.included ? "text-storm-white" : "text-subtle-gray/50"
                  }`}
                >
                  <Check
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      benefit.included ? "text-success-teal" : "text-subtle-gray/30"
                    }`}
                  />
                  <span className={benefit.included ? "" : "line-through"}>
                    {benefit.name}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                tier.featured
                  ? "bg-electric-cyan text-deep-space hover:bg-electric-cyan/90"
                  : "border border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10"
              }`}
            >
              Contact Us
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
