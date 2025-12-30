"use client";

import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Code, Users, Presentation } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const steps = [
  {
    icon: Lightbulb,
    title: "Share Your Challenge",
    description: "Present a real problem your company faces that could benefit from fresh perspectives.",
  },
  {
    icon: Users,
    title: "Teams Compete",
    description: "Student teams choose your challenge and develop innovative solutions over 48 hours.",
  },
  {
    icon: Code,
    title: "Working Prototypes",
    description: "Teams build functional prototypes—not just slides—demonstrating their solutions.",
  },
  {
    icon: Presentation,
    title: "See the Results",
    description: "Review prototypes, provide feedback, and potentially take ideas forward.",
  },
];

export default function ProblemStatementPartnership() {
  return (
    <SectionWrapper dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
          >
            Special Opportunity
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-storm-white mt-4 mb-6"
          >
            Problem Statement Partnership
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-subtle-gray leading-relaxed mb-6"
          >
            Go beyond traditional sponsorship. Submit a real challenge your company faces and let 
            Hong Kong&apos;s brightest young minds tackle it. You&apos;ll see fresh perspectives and 
            potentially discover solutions you never considered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6 border-l-4 border-electric-cyan"
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white mb-2">
              Your Challenge, Their Innovation
            </h3>
            <p className="text-subtle-gray text-sm leading-relaxed">
              Past problem statements have included: optimizing delivery routes, creating 
              customer engagement tools, automating report generation, and designing 
              accessibility features. What challenge will you bring?
            </p>
          </motion.div>
        </div>

        {/* Right - process steps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-electric-cyan/10 flex items-center justify-center border border-electric-cyan/30">
                <step.icon className="w-5 h-5 text-electric-cyan" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-xs">
                    0{index + 1}
                  </span>
                  <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white">
                    {step.title}
                  </h4>
                </div>
                <p className="text-subtle-gray text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-subtle-gray/30 mt-4 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
