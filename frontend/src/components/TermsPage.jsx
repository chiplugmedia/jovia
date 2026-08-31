import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  UserCheck,
  ShieldCheck,
  AlertOctagon,
  AlertTriangle,
  Scale,
  Sparkles,
} from "lucide-react";
import PageHero from "./PageHero"; // Ensure path matches your project structure

const termsSections = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    icon: CheckCircle2,
    content: (
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        By accessing or using our websites, applications, APIs, or services, you
        agree to be bound by these Terms & Conditions and our Privacy Policy. If
        you do not agree with any part of these terms, you are prohibited from
        using or accessing our platforms.
      </p>
    ),
  },
  {
    id: "user-accounts",
    title: "2. User Accounts & Registration",
    icon: UserCheck,
    content: (
      <div className="space-y-3">
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          When creating an account, you must provide accurate, complete, and
          updated information. You are responsible for safeguarding the
          credentials you use to access the service.
        </p>
        <ul className="space-y-2.5 pt-1">
          {[
            "You must notify us immediately upon becoming aware of any breach of security or unauthorized account access.",
            "You may not use as a username the name of another person or entity that is not lawfully available for use.",
            "We reserve the right to suspend or terminate accounts that violate our security or operational guidelines.",
          ].map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-400 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property Rights",
    icon: ShieldCheck,
    content: (
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        The Service and its original content, features, software code, design
        systems, and functionality are and will remain the exclusive property of
        HarryTechDigitals and its licensors. Our trademarks and brand elements
        may not be used in connection with any product or service without prior
        written consent.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use & Conduct",
    icon: AlertOctagon,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          You agree not to use our applications or web platform for any unlawful
          purpose or to conduct activities that harm our systems or user
          community:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          <div className="p-4 rounded-2xl bg-[#05010d]/80 border border-white/10 backdrop-blur-md">
            <h4 className="font-bold text-white text-sm sm:text-base">
              System Integrity
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              No automated scraping, reverse engineering, or probing of system
              vulnerabilities.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-[#05010d]/80 border border-white/10 backdrop-blur-md">
            <h4 className="font-bold text-white text-sm sm:text-base">
              Service Availability
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              No overloading server infrastructures, performing
              denial-of-service (DoS) attacks, or distributing malware.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "5. Limitation of Liability",
    icon: AlertTriangle,
    content: (
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        In no event shall HarryTechDigitals, its directors, employees, or
        partners be liable for any indirect, incidental, special, consequential,
        or punitive damages—including loss of profits, data, or
        goodwill—resulting from your access to or inability to access our
        services.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "6. Governing Law & Modifications",
    icon: Scale,
    content: (
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        These Terms shall be governed and construed in accordance with
        applicable laws. We reserve the right to modify or replace these terms
        at any time. Continued usage of the platform following any posted
        revisions constitutes acceptance of those changes.
      </p>
    ),
  },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(termsSections[0].id);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Account for fixed navigation header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#05010d] text-white relative overflow-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute right-1/4 top-[40%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[170px]" />
        <div className="absolute bottom-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services, applications, and web platforms."
        category="Legal & Terms"
        showBadge={true}
      />

      {/* Main Content Body */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 h-fit sticky top-24 hidden lg:block">
            <div className="p-5 bg-[#0a0518]/90 rounded-3xl border border-white/10 backdrop-blur-2xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4 px-2">
                Table of Contents
              </h3>
              <nav className="space-y-1.5">
                {termsSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                      activeSection === sec.id
                        ? "bg-purple-500/15 text-[#E2C876] border border-purple-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="truncate pr-2">{sec.title}</span>
                    {activeSection === sec.id && (
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E2C876] to-[#C726D4] shrink-0" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Terms Content Details */}
          <main className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="text-xs sm:text-sm text-slate-400 font-medium pb-4 border-b border-white/10 flex items-center justify-between">
              <span>
                Effective Date:{" "}
                <span className="text-[#E2C876] font-semibold">
                  August 2026
                </span>
              </span>
              <div className="inline-flex items-center gap-1.5 text-xs text-purple-300">
                <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                <span>Legal Framework</span>
              </div>
            </div>

            {termsSections.map((sec) => {
              const SectionIcon = sec.icon;

              return (
                <motion.article
                  key={sec.id}
                  id={sec.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0a0518]/90 border border-white/10 backdrop-blur-2xl transition duration-300 hover:border-purple-500/30 shadow-2xl"
                >
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <SectionIcon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg sm:text-2xl font-black bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                      {sec.title}
                    </h2>
                  </div>
                  <div className="text-slate-300">{sec.content}</div>
                </motion.article>
              );
            })}
          </main>
        </div>
      </section>
    </div>
  );
}
