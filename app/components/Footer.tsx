"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Instagram, Linkedin, ExternalLink } from "lucide-react";
import TyphoonLogo from "./TyphoonLogo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/2025", label: "2025 Showcase" },
  { href: "/partners", label: "Partners" },
  { href: "/#faq", label: "FAQ" },
];

const socialLinks = [
  { href: "https://github.com/typhoonhacks", icon: Github, label: "GitHub" },
  { href: "https://instagram.com/typhoonhacks", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com/company/typhoonhacks", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@typhoonhacks.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative bg-deep-space border-t border-ocean-depth overflow-hidden">
      {/* Background typhoon watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <TyphoonLogo size={600} className="animate-spin-slow" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <TyphoonLogo size={36} />
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg text-storm-white">
                TyphoonHacks
              </span>
            </Link>
            <p className="text-subtle-gray text-sm leading-relaxed">
              Hong Kong&apos;s first true 48-hour high school hackathon. Building the next generation of innovators, one prototype at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-subtle-gray hover:text-electric-cyan transition-colors text-sm flex items-center gap-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white mb-4">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-electric-cyan/30 flex items-center justify-center text-storm-white hover:bg-electric-cyan hover:text-deep-space transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-storm-white mb-4">
              Stay Updated
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-ocean-depth border border-subtle-gray/30 rounded-lg text-storm-white placeholder:text-subtle-gray focus:outline-none focus:border-electric-cyan transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-electric-cyan text-deep-space font-semibold rounded-lg hover:bg-opacity-90 transition-all text-sm flex items-center justify-center gap-2"
              >
                Subscribe <ExternalLink size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-ocean-depth">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-subtle-gray text-xs">
              © 2026 TyphoonHacks. All rights reserved.
              <span className="animate-pulse ml-1">_</span>
            </p>
            <div className="flex items-center gap-6 text-xs text-subtle-gray">
              <Link href="/privacy" className="hover:text-electric-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-electric-cyan transition-colors">
                Terms of Service
              </Link>
              <Link href="/code-of-conduct" className="hover:text-electric-cyan transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
