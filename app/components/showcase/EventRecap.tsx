"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Clock, Code, Trophy, Camera } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const stats = [
  { value: 72, label: "Participants", icon: Users },
  { value: 18, label: "Teams", icon: Trophy },
  { value: 12, label: "Hours", icon: Clock },
  { value: 8, label: "Projects Completed", icon: Code },
];

const photos = [
  { id: 1, caption: "Opening ceremony kick-off" },
  { id: 2, caption: "Teams collaborating" },
  { id: 3, caption: "Late night coding session" },
  { id: 4, caption: "Mentor guidance" },
  { id: 5, caption: "Final presentations" },
  { id: 6, caption: "Award ceremony" },
];

function Counter({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay }}
      className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-electric-cyan"
    >
      {isInView ? value : 0}
    </motion.span>
  );
}

export default function EventRecap() {
  return (
    <SectionWrapper>
      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-8 mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 text-subtle-gray" />
              </div>
              <Counter value={stat.value} delay={index * 0.1} />
              <p className="text-subtle-gray mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Photo Gallery */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-storm-white"
        >
          Event Highlights
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`relative group cursor-pointer overflow-hidden rounded-xl ${
              index === 0 || index === 5 ? "md:col-span-2 aspect-video" : "aspect-square"
            }`}
          >
            {/* Placeholder for photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-depth to-deep-space flex items-center justify-center">
              <Camera className="w-12 h-12 text-subtle-gray/50" />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-storm-white text-sm font-medium">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
