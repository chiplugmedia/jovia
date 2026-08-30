import React, { useState } from "react";
import PageHero from "./PageHero"; // Ensure the path matches your PageHero component file

const termsSections = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    icon: (
      <svg
        className="w-5 h-5 text-[#BF953F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    content: (
      <p>
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
    icon: (
      <svg
        className="w-5 h-5 text-[#BF953F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          When creating an account, you must provide accurate, complete, and
          updated information. You are responsible for safeguarding the
          credentials you use to access the service.
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#FFF] pl-2">
          <li>
            You must notify us immediately upon becoming aware of any breach of
            security or unauthorized account access.
          </li>
          <li>
            You may not use as a username the name of another person or entity
            that is not lawfully available for use.
          </li>
          <li>
            We reserve the right to suspend or terminate accounts that violate
            our security or operational guidelines.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property Rights",
    icon: (
      <svg
        className="w-5 h-5 text-[#BF953F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    content: (
      <p>
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
    icon: (
      <svg
        className="w-5 h-5 text-[#BF953F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <p>
          You agree not to use our applications or web platform for any unlawful
          purpose or to conduct activities that harm our systems or user
          community:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-[#2C044F] ">
            <h4 className="font-semibold text-[#FFF]">System Integrity</h4>
            <p className="text-sm text-[#FFF] mt-1">
              No automated scraping, reverse engineering, or probing of system
              vulnerabilities.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#2C044F] ">
            <h4 className="font-semibold text-[#FFF]">
              Service Availability
            </h4>
            <p className="text-sm text-[#FFF] mt-1">
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
    icon: (
      <svg
        className="w-5 h-5 text-[#BF953F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    content: (
      <p>
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
    icon: (
      <svg
        className="w-5 h-5 text-[#BF953F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    content: (
      <p>
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
      const yOffset = -100; // Offset for sticky navigation/header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#2C044F] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] bg-[#BF953F]/10 rounded-full blur-[150px]" />
      </div>

      {/* Dynamic Reusable Page Hero */}
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services, applications, and web platforms."
        category="Legal & Terms"
        showBadge={true}
      />

      {/* Main Content Body */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Quick Navigation Sidebar */}
          <aside className="lg:col-span-4 h-fit sticky top-28 hidden lg:block">
            <div className="p-6 bg-[#3A0768]/40 rounded-3xl border border-[#D4AF37]/25">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFF] mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1.5">
                {termsSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                      activeSection === sec.id
                        ? "bg-gradient-to-r from-[#BF953F]/20 via-[#FCF6BA]/10 to-transparent text-[#FCF6BA] border border-[#D4AF37]/40"
                        : "text-white"
                    }`}
                  >
                    <span className="truncate pr-2">{sec.title}</span>
                    {activeSection === sec.id && (
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] shrink-0" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Terms Content Area Container */}
          <main className="lg:col-span-8 space-y-8">
            <div className="text-sm text-white/60 font-medium pb-3 border-b border-[#D4AF37]/20 flex items-center justify-between">
              <span>
                Effective Date:{" "}
                <span className="text-[#FCF6BA] font-semibold">
                  August 2026
                </span>
              </span>
            </div>

            {termsSections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="scroll-mt-32 p-8 rounded-3xl bg-[#3A0768]/30 border border-[#D4AF37]/20 transition-all duration-300 "
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-3 rounded-2xl bg-[#2C044F] border border-[#D4AF37]/30 text-[#FCF6BA] shadow-inner">
                    {sec.icon}
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                    {sec.title}
                  </h2>
                </div>
                <div className="text-white/80 leading-relaxed text-base font-normal space-y-4">
                  {sec.content}
                </div>
              </article>
            ))}
          </main>
        </div>
      </section>
    </div>
  );
}
