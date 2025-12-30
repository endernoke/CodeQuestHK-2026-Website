"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gamepad2, Zap } from "lucide-react";

export default function BridgeTo2026() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {/* Past - 2025 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            }}
          >
            {/* Sepia overlay */}
            <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Gamepad2 className="w-8 h-8 text-amber-200/60" />
                <span className="text-amber-200/60 text-sm uppercase tracking-wider">2025</span>
              </div>
              
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-amber-100/80 mb-4">
                Game Jam
              </h3>
              
              <ul className="space-y-2 text-amber-200/50 mb-6">
                <li>• 12-hour event</li>
                <li>• 72 participants</li>
                <li>• Game development focus</li>
                <li>• Our first event</li>
              </ul>
              
              <p className="text-amber-200/40 text-sm italic">
                Where the journey began...
              </p>
            </div>
          </motion.div>

          {/* Center arrow */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex"
          >
            <div className="w-16 h-16 rounded-full bg-electric-cyan flex items-center justify-center shadow-lg shadow-electric-cyan/30">
              <ArrowRight className="w-8 h-8 text-deep-space" />
            </div>
          </motion.div>

          {/* Future - 2026 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16"
            style={{
              background: "linear-gradient(135deg, #0d2847 0%, #1a3a5c 100%)",
            }}
          >
            {/* Glow overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: "radial-gradient(circle at top right, rgba(0, 212, 255, 0.3), transparent 60%)",
              }}
            />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-electric-cyan" />
                <span className="text-electric-cyan text-sm uppercase tracking-wider">2026</span>
              </div>
              
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold gradient-text mb-4">
                TyphoonHacks
              </h3>
              
              <ul className="space-y-2 text-storm-white/80 mb-6">
                <li>• 48-hour hackathon</li>
                <li>• 200+ participants</li>
                <li>• Real industry problems</li>
                <li>• Working prototypes</li>
              </ul>
              
              <p className="text-electric-cyan text-sm font-medium">
                The next evolution →
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-subtle-gray mb-6">
            Experience the evolution. Be part of Hong Kong&apos;s most ambitious student hackathon.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric-cyan text-deep-space font-bold rounded-full text-lg hover:shadow-lg hover:shadow-electric-cyan/30 transition-all"
          >
            Register for 2026
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
