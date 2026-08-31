import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Settings,
  Share2,
  ShieldCheck,
  UserCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import PageHero from "./PageHero"; // Ensure path matches your project structure

const privacySections = [
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          We collect personal information that you voluntarily provide to us
          when you register on our platform, express an interest in obtaining
          information about us or our products and services, or otherwise
          contact us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          <div className="p-4 rounded-2xl bg-[#05010d]/80 border border-white/10 backdrop-blur-md">
            <h4 className="font-bold text-white text-sm sm:text-base">
              Personal Identifiers
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              Full name, email address, phone number, and billing/mailing
              details.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-[#05010d]/80 border border-white/10 backdrop-blur-md">
            <h4 className="font-bold text-white text-sm sm:text-base">
              Technical & Usage Data
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              IP addresses, browser type, device specifications, operating
              system, and page interaction metrics.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: Settings,
    content: (
      <div className="space-y-3">
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          We process your personal information for purposes based on legitimate
          business interests, performance of contracts, and compliance with our
          legal obligations:
        </p>
        <ul className="space-y-2.5 pt-1">
          {[
            "To facilitate account creation and logon process.",
            "To deliver and improve customer service and technical support.",
            "To send administrative information, updates, and promotional communications.",
            "To protect our application from fraud, security breaches, and illegal activity.",
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
    id: "sharing-data",
    title: "Data Sharing & Third Parties",
    icon: Share2,
    content: (
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        We only share information with your consent, to comply with laws, to
        provide you with services, to protect your rights, or to fulfill
        business obligations. We do not sell or rent your personal information
        to third parties for marketing purposes.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security & Retention",
    icon: ShieldCheck,
    content: (
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        We implement organizational and technical security measures designed to
        protect your personal data. However, despite our safeguards, no
        electronic transmission over the Internet or storage technology can be
        guaranteed to be 100% secure.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    icon: UserCheck,
    content: (
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        Depending on your geographical location, you may have rights to access,
        rectify, port, or erase your personal data, or object to or restrict
        processing. You can exercise these rights by contacting us directly.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(privacySections[0].id);

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
        title="Privacy Policy"
        subtitle="Transparency is core to our mission. Here is how we collect, safeguard, and respect your personal data."
        category="Legal & Trust"
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
                {privacySections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                      activeSection === sec.id
                        ? "bg-purple-500/15 text-[#E2C876] border border-purple-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{sec.title}</span>
                    {activeSection === sec.id && (
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E2C876] to-[#C726D4]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Privacy Content Details */}
          <main className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="text-xs sm:text-sm text-slate-400 font-medium pb-4 border-b border-white/10 flex items-center justify-between">
              <span>
                Last updated:{" "}
                <span className="text-[#E2C876] font-semibold">
                  August 2026
                </span>
              </span>
              <div className="inline-flex items-center gap-1.5 text-xs text-purple-300">
                <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                <span>JOVIA Trust Charter</span>
              </div>
            </div>

            {privacySections.map((sec) => {
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
