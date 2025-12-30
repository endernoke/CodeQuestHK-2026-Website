"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const tiers = [
  { value: "platinum", label: "Platinum (HK$50,000+)" },
  { value: "gold", label: "Gold (HK$30,000)" },
  { value: "silver", label: "Silver (HK$15,000)" },
  { value: "bronze", label: "Bronze (HK$5,000)" },
  { value: "custom", label: "Custom / In-Kind" },
  { value: "undecided", label: "Not sure yet" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    tier: "",
    message: "",
    problemStatement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-electric-cyan text-sm uppercase tracking-wider"
        >
          Get in Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-storm-white mt-4"
        >
          Partner Inquiry
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form - 3 columns */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          {isSubmitted ? (
            <div className="glass rounded-2xl p-12 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-success-teal/20 flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-success-teal" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-storm-white mb-4">
                Thank You!
              </h3>
              <p className="text-subtle-gray">
                We&apos;ve received your inquiry and will get back to you within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-storm-white mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 bg-ocean-depth border border-subtle-gray/30 rounded-lg text-storm-white placeholder:text-subtle-gray focus:outline-none focus:border-electric-cyan transition-colors"
                    placeholder="Your company"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label className="block text-sm font-medium text-storm-white mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 bg-ocean-depth border border-subtle-gray/30 rounded-lg text-storm-white placeholder:text-subtle-gray focus:outline-none focus:border-electric-cyan transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-storm-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-ocean-depth border border-subtle-gray/30 rounded-lg text-storm-white placeholder:text-subtle-gray focus:outline-none focus:border-electric-cyan transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-storm-white mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-ocean-depth border border-subtle-gray/30 rounded-lg text-storm-white placeholder:text-subtle-gray focus:outline-none focus:border-electric-cyan transition-colors"
                    placeholder="+852 XXXX XXXX"
                  />
                </div>
              </div>

              {/* Tier Selection */}
              <div>
                <label className="block text-sm font-medium text-storm-white mb-2">
                  Interested Tier *
                </label>
                <select
                  required
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="w-full px-4 py-3 bg-ocean-depth border border-subtle-gray/30 rounded-lg text-storm-white focus:outline-none focus:border-electric-cyan transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a tier</option>
                  {tiers.map((tier) => (
                    <option key={tier.value} value={tier.value}>
                      {tier.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-storm-white mb-2">
                  Message / Questions
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-ocean-depth border border-subtle-gray/30 rounded-lg text-storm-white placeholder:text-subtle-gray focus:outline-none focus:border-electric-cyan transition-colors resize-none"
                  placeholder="Tell us about your goals or any questions you have..."
                />
              </div>

              {/* Problem Statement Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="problemStatement"
                  checked={formData.problemStatement}
                  onChange={(e) => setFormData({ ...formData, problemStatement: e.target.checked })}
                  className="mt-1 w-5 h-5 rounded border-subtle-gray/30 bg-ocean-depth text-electric-cyan focus:ring-electric-cyan"
                />
                <label htmlFor="problemStatement" className="text-sm text-subtle-gray">
                  I&apos;m interested in submitting a problem statement for teams to solve
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-electric-cyan text-deep-space font-bold rounded-lg hover:bg-electric-cyan/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-deep-space/30 border-t-deep-space rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact info - 2 columns */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white mb-4">
              Direct Contact
            </h3>
            
            <div className="space-y-4">
              <a
                href="mailto:partners@typhoonhacks.com"
                className="flex items-center gap-3 text-subtle-gray hover:text-electric-cyan transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>partners@typhoonhacks.com</span>
              </a>
              
              <a
                href="tel:+85212345678"
                className="flex items-center gap-3 text-subtle-gray hover:text-electric-cyan transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+852 1234 5678</span>
              </a>
              
              <div className="flex items-start gap-3 text-subtle-gray">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Central, Hong Kong<br />
                  (Event venue TBA)
                </span>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white mb-4">
              Response Time
            </h3>
            
            <div className="flex items-center gap-3 text-subtle-gray">
              <Clock className="w-5 h-5 text-success-teal" />
              <span>We typically respond within 2 business days</span>
            </div>
          </div>

          <div className="glass rounded-xl p-6 border-l-4 border-warning-amber">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-storm-white mb-2">
              Limited Spots Available
            </h3>
            <p className="text-subtle-gray text-sm">
              We have limited sponsorship slots to ensure each partner receives meaningful 
              engagement. Early partners get priority placement and benefits.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
