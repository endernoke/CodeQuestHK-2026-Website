"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const faqs = [
  {
    question: "What is the expected reach of TyphoonHacks 2026?",
    answer: "We anticipate 200+ participants from high schools across Hong Kong, with additional reach through social media (5,000+ followers), school networks, and media coverage. Our 2025 event reached over 10,000 people through various channels.",
  },
  {
    question: "When and where is the event?",
    answer: "TyphoonHacks 2026 will take place March 14-16, 2026 (48 hours). The venue will be in Central Hong Kong—exact location to be announced in early 2026. As a sponsor, you'll receive venue details as soon as they're confirmed.",
  },
  {
    question: "What deliverables do sponsors receive?",
    answer: "Deliverables vary by tier but include: logo placement (website, venue, swag), social media mentions and dedicated posts, photo/video content from the event, participant demographics report, and access to project submissions. Higher tiers include additional benefits like speaking opportunities and recruitment access.",
  },
  {
    question: "Can we send representatives to the event?",
    answer: "Absolutely! We encourage sponsor representatives to attend. Depending on your tier, you may have opportunities to: serve as judges, host workshops, staff a recruitment booth, or simply observe and network. We'll coordinate logistics closer to the event.",
  },
  {
    question: "How are sponsorship funds used?",
    answer: "Funds directly support: venue rental, meals and refreshments for participants, prizes and awards, swag and materials, technology and equipment, marketing and outreach, and safety/logistics. We're committed to transparency and can provide detailed budget breakdowns upon request.",
  },
  {
    question: "What makes TyphoonHacks different from other student events?",
    answer: "Unlike case competitions or pitch events, TyphoonHacks focuses on building working prototypes. Students must start from scratch during the 48 hours—no pre-prepared projects. This means sponsors see genuine innovation and problem-solving skills, not rehearsed presentations.",
  },
  {
    question: "Can we provide in-kind sponsorship?",
    answer: "Yes! We welcome in-kind contributions such as: venue space, food/beverage, technology (laptops, cloud credits, software licenses), prizes, swag items, and professional services. Contact us to discuss how your contribution might fit.",
  },
  {
    question: "Is there a deadline to become a sponsor?",
    answer: "While we accept sponsors on a rolling basis, early commitment (before January 2026) ensures maximum visibility and benefit. Certain opportunities like problem statement partnerships and keynote slots are limited and filled on a first-come basis.",
  },
];

export default function PartnerFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <SectionWrapper dark>
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          Common Questions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Partner FAQ
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`glass rounded-xl overflow-hidden transition-all ${
              openItems.includes(faq.question) ? "border-l-4 border-electric-cyan" : ""
            }`}
          >
            <button
              onClick={() => toggleItem(faq.question)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openItems.includes(faq.question) ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                {openItems.includes(faq.question) ? (
                  <Minus className="w-5 h-5 text-electric-cyan" />
                ) : (
                  <Plus className="w-5 h-5 text-subtle-gray" />
                )}
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openItems.includes(faq.question) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="px-6 pb-4 text-subtle-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
