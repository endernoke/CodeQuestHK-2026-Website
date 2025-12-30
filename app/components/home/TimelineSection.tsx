"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/app/components/SectionWrapper";

const events = [
  { date: "Jan 15, 2026", title: "Registration Opens", description: "Sign up begins for all HK high school students", status: "upcoming" },
  { date: "Feb 28, 2026", title: "Registration Closes", description: "Last day to register your team", status: "upcoming" },
  { date: "Mar 7, 2026", title: "Team Formation Deadline", description: "Finalize your team of 2-4 members", status: "upcoming" },
  { date: "Mar 14, 2026", title: "Opening Ceremony", description: "Kick-off event and problem statement reveal", status: "upcoming" },
  { date: "Mar 14, 2026", title: "Hacking Begins", description: "48 hours on the clock - let's build!", status: "upcoming" },
  { date: "Mar 15, 2026", title: "Midpoint Check-in", description: "Progress updates and mentor sessions", status: "upcoming" },
  { date: "Mar 16, 2026", title: "Final Submissions", description: "Submit your prototype before the deadline", status: "upcoming" },
  { date: "Mar 16, 2026", title: "Demos & Judging", description: "Present your solution to the judges", status: "upcoming" },
  { date: "Mar 16, 2026", title: "Awards Ceremony", description: "Celebrate the winners!", status: "upcoming" },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="timeline">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          Mark Your Calendar
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Event Timeline
        </motion.h2>
      </div>

      <div ref={ref} className="relative">
        {/* Central line - desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-cyan via-electric-cyan/50 to-electric-cyan/20" />
        
        {/* Central line - mobile */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-electric-cyan via-electric-cyan/50 to-electric-cyan/20" />

        <div className="space-y-8 md:space-y-0">
          {events.map((event, index) => (
            <motion.div
              key={`${event.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start md:items-center gap-4 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-electric-cyan z-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute inset-0 rounded-full bg-electric-cyan/30"
                />
              </motion.div>

              {/* Mobile: Content */}
              <div className="md:hidden pl-12 flex-1">
                <div className="glass rounded-xl p-4">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-xs">
                    {event.date}
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white mt-1">
                    {event.title}
                  </h3>
                  <p className="text-subtle-gray text-sm mt-1">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Desktop: Left side content */}
              <div className="hidden md:block w-5/12 pr-8 text-right">
                {index % 2 === 0 && (
                  <motion.div
                    whileHover={{ x: -4 }}
                    className="glass rounded-xl p-5 inline-block max-w-sm ml-auto"
                  >
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-xs">
                      {event.date}
                    </span>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white mt-1">
                      {event.title}
                    </h3>
                    <p className="text-subtle-gray text-sm mt-1">
                      {event.description}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Desktop: Spacer for center line */}
              <div className="hidden md:block w-2/12" />

              {/* Desktop: Right side content */}
              <div className="hidden md:block w-5/12 pl-8">
                {index % 2 !== 0 && (
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="glass rounded-xl p-5 inline-block max-w-sm"
                  >
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-xs">
                      {event.date}
                    </span>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white mt-1">
                      {event.title}
                    </h3>
                    <p className="text-subtle-gray text-sm mt-1">
                      {event.description}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
