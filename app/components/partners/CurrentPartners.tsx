"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

interface Partner {
  name: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  description?: string;
  testimonial?: string;
  person?: string;
  role?: string;
}

const partners: Partner[] = [
  {
    name: "TechCorp HK",
    tier: "platinum",
    description: "Hong Kong's leading technology solutions provider, powering digital transformation across industries.",
    testimonial: "Partnering with TyphoonHacks connects us directly with the next generation of tech talent. The innovation we've seen from these students is remarkable.",
    person: "David Chen",
    role: "CTO, TechCorp HK",
  },
  {
    name: "Innovation Labs",
    tier: "gold",
    description: "An accelerator and incubator supporting early-stage startups in Hong Kong and Greater Bay Area.",
  },
  {
    name: "Digital Solutions Ltd",
    tier: "gold",
    description: "Full-stack digital agency specializing in enterprise software and mobile applications.",
  },
  {
    name: "Future Fund HK",
    tier: "silver",
  },
  {
    name: "Code Academy Asia",
    tier: "silver",
  },
  {
    name: "StartUp Hub",
    tier: "silver",
  },
  {
    name: "DevTools Inc",
    tier: "bronze",
  },
  {
    name: "Cloud Services HK",
    tier: "bronze",
  },
];

const tierStyles = {
  platinum: "text-2xl border-electric-cyan/30",
  gold: "text-xl border-warning-amber/20",
  silver: "text-lg border-gray-400/20",
  bronze: "text-base border-amber-700/20",
};

export default function CurrentPartners() {
  const platinumPartners = partners.filter((p) => p.tier === "platinum");
  const goldPartners = partners.filter((p) => p.tier === "gold");
  const silverPartners = partners.filter((p) => p.tier === "silver");
  const bronzePartners = partners.filter((p) => p.tier === "bronze");

  return (
    <SectionWrapper>
      <div className="text-center mb-16">
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
          Current Partners
        </motion.h2>
      </div>

      {/* Platinum Partners */}
      {platinumPartners.length > 0 && (
        <div className="mb-16">
          <h3 className="text-electric-cyan text-sm uppercase tracking-wider text-center mb-8">
            Platinum Partners
          </h3>
          {platinumPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-2xl p-8 border ${tierStyles[partner.tier]}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold gradient-text mb-4">
                    {partner.name}
                  </h4>
                  <p className="text-subtle-gray leading-relaxed">
                    {partner.description}
                  </p>
                </div>
                {partner.testimonial && (
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-electric-cyan/20" />
                    <p className="text-storm-white/90 italic pl-6 mb-4">
                      &quot;{partner.testimonial}&quot;
                    </p>
                    <p className="text-electric-cyan text-sm pl-6">
                      — {partner.person}, {partner.role}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Gold Partners */}
      {goldPartners.length > 0 && (
        <div className="mb-12">
          <h3 className="text-warning-amber text-sm uppercase tracking-wider text-center mb-8">
            Gold Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goldPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass rounded-xl p-6 border ${tierStyles[partner.tier]}`}
              >
                <h4 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-storm-white mb-2">
                  {partner.name}
                </h4>
                <p className="text-subtle-gray text-sm">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Silver & Bronze Partners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Silver */}
        {silverPartners.length > 0 && (
          <div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wider text-center mb-6">
              Silver Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {silverPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-lg px-6 py-3 hover:border-gray-400/30 transition-colors"
                >
                  <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white/80">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bronze */}
        {bronzePartners.length > 0 && (
          <div>
            <h3 className="text-amber-700 text-sm uppercase tracking-wider text-center mb-6">
              Bronze Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {bronzePartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-lg px-4 py-2 hover:border-amber-700/30 transition-colors"
                >
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-storm-white/60">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
