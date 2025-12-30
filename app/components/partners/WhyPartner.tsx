"use client";

import { motion } from "framer-motion";
import { Users, Eye, Lightbulb, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const benefits = [
  {
    icon: Users,
    title: "Access to Talent",
    description: "Network with Hong Kong's brightest student developers and identify potential interns or future hires.",
  },
  {
    icon: Eye,
    title: "Brand Visibility",
    description: "Logo placement on our website, venue, swag, and social media reaching thousands of students and parents.",
  },
  {
    icon: Lightbulb,
    title: "Real Solutions",
    description: "Get fresh perspectives on your industry challenges. See working prototypes built in just 48 hours.",
  },
  {
    icon: GraduationCap,
    title: "Community Impact",
    description: "Support STEM education in Hong Kong and help shape the next generation of tech innovators.",
  },
  {
    icon: Briefcase,
    title: "Recruitment Pipeline",
    description: "Early access to top student talent. Identify and connect with future employees before anyone else.",
  },
  {
    icon: Sparkles,
    title: "Innovation Catalyst",
    description: "See what's possible when creative minds tackle your challenges without constraints.",
  },
];

export default function WhyPartner() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          The Opportunity
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Why Partner With TyphoonHacks?
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl p-6 text-center hover:border-electric-cyan/30 transition-all"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-electric-cyan/10 flex items-center justify-center mb-4">
              <benefit.icon className="w-7 h-7 text-electric-cyan" />
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-storm-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-subtle-gray text-sm leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
