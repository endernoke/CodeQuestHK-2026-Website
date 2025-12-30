"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const testimonials = [
  {
    quote: "This was my first hackathon and I was nervous about my skill level. But the mentors were incredibly supportive, and I learned more in 12 hours than I did in months of self-study. Can't wait for TyphoonHacks 2026!",
    name: "Sarah L.",
    school: "St. Paul's Co-educational College",
    role: "Participant",
  },
  {
    quote: "The energy was electric! Everyone was so focused and creative. Our team came up with an idea we never would have thought of individually. The collaboration made it special.",
    name: "Michael C.",
    school: "King's College",
    role: "1st Place Winner",
  },
  {
    quote: "What impressed me most was the organization. Everything ran smoothly, and the organizers genuinely cared about our experience. They're setting a new standard for student events in HK.",
    name: "Emily W.",
    school: "Diocesan Girls' School",
    role: "Participant",
  },
  {
    quote: "As someone who loves games, being able to create one with a team of new friends was amazing. The skills I learned here gave me confidence to pursue game development further.",
    name: "Jason T.",
    school: "La Salle College",
    role: "3rd Place Winner",
  },
  {
    quote: "The judges' feedback was so valuable. They didn't just score us - they gave us real advice on how to improve our projects and skills. That mentorship aspect really stood out.",
    name: "Victoria H.",
    school: "Chinese International School",
    role: "Participant",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          In Their Words
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Participant Testimonials
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Quote mark */}
          <Quote className="absolute -top-4 -left-4 w-16 h-16 text-electric-cyan/20" />

          {/* Carousel */}
          <div className="glass rounded-2xl p-8 md:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-storm-white text-lg md:text-xl leading-relaxed italic mb-8">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ocean-depth flex items-center justify-center">
                    <User className="w-6 h-6 text-subtle-gray" />
                  </div>
                  <div className="text-left">
                    <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-subtle-gray text-sm">
                      {testimonials[currentIndex].school}
                    </p>
                    <p className="text-electric-cyan text-xs">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full glass hover:bg-electric-cyan/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-storm-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-electric-cyan"
                      : "bg-subtle-gray hover:bg-storm-white"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full glass hover:bg-electric-cyan/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-storm-white" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
