import React, { useState } from "react";
import PageHero from "./PageHero"; // Ensure the path matches your PageHero component file

const privacySections = [
  {
    id: "information-collection",
    title: "Information We Collect",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on our platform, express an interest in obtaining
          information about us or our products and services, or otherwise
          contact us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-[#2C044F] ">
            <h4 className="font-semibold text-[#fff]">Personal Identifiers</h4>
            <p className="text-sm text-[#fff] mt-1">
              Full name, email address, phone number, and billing/mailing
              details.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#2C044F] ">
            <h4 className="font-semibold text-[#fff]">
              Technical & Usage Data
            </h4>
            <p className="text-sm text-[#fff] mt-1">
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          We process your personal information for purposes based on legitimate
          business interests, performance of contracts, and compliance with our
          legal obligations:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#fff] pl-2">
          <li>To facilitate account creation and logon process.</li>
          <li>
            To deliver and improve customer service and technical support.
          </li>
          <li>
            To send administrative information, updates, and promotional
            communications.
          </li>
          <li>
            To protect our application from fraud, security breaches, and
            illegal activity.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "sharing-data",
    title: "Data Sharing & Third Parties",
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
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    content: (
      <p>
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    content: (
      <p>
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    content: (
      <p>
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
      const yOffset = -100; // Account for fixed header height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-[#0E2258]">
      {/* Reusable Hero Section imported from another file */}
      <PageHero
        title="Privacy Policy"
        subtitle="Transparency is core to our mission. Here is how we collect, safeguard, and respect your personal data."
        category="Legal & Trust"
        showBadge={true}
      />

      {/* Main Content Body */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 lg:py-20 text-white">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Quick Navigation Sidebar */}
          <aside className="lg:col-span-4 h-fit sticky top-28 hidden lg:block">
            <div className="p-6 bg-[#3A0768]/40 rounded-3xl border border-[#D4AF37]/25">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FCF6BA]/60 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1.5">
                {privacySections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                      activeSection === sec.id
                        ? "bg-gradient-to-r from-[#BF953F]/20 via-[#FCF6BA]/10 to-transparent text-[#FCF6BA] border border-[#D4AF37]/40"
                        : "text-white"
                    }`}
                  >
                    <span>{sec.title}</span>
                    {activeSection === sec.id && (
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BF953F] to-[#FCF6BA]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Privacy Content Area Container */}
          <main className="lg:col-span-8 space-y-8">
            <div className="text-sm text-white font-medium pb-3 border-b border-[#D4AF37]/20 flex items-center justify-between">
              <span>
                Last updated:{" "}
                <span className="text-[#FCF6BA] font-semibold">
                  August 2026
                </span>
              </span>
            </div>

            {privacySections.map((sec) => (
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
                <div className="text-white leading-relaxed text-base font-normal space-y-4">
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
