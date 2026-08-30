import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "@/assets/img/jovia.png";

const NAV_LINKS = [
  { href: "about", label: "About Us" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Optimized SEO Metadata aligned with JOVIA branding
  const pageTitle =
    "JOVIA Network | Earn Rewards Through Networking & Digital Skills";
  const pageDescription =
    "JOVIA is a multinational intelligent networking platform designed to help users earn for the time they spend through networking, digital skills, entertainment, and engaging activities.";
  const siteUrl = "https://jovianetwork.ng";

  // Structured Data (JSON-LD) for Search Engine Crawlers
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JOVIA Network",
    url: siteUrl,
    logo: `${siteUrl}/src/assets/img/joviafiton.png`,
    description: pageDescription,
    slogan: "Earn for your time, skills, and engagement.",
  };

  return (
    <>
      {/* Dynamic SEO Meta Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="JOVIA, JOVIA Network, jovianetwork.ng, earn online, digital skills, intelligent networking platform, networking rewards, learn and earn"
        />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#220D34] pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px]" />
      </div>

      {/* Semantic Header Component */}
      <header className="fixed top-0 left-0 right-0 z-50" role="banner">
        <div className="relative w-full bg-[#220D34]/90 backdrop-blur-2xl border-b border-[#D4AF37]/20">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between h-20">
              {/* Brand Logo with Optimized SEO Alt Text */}
              <a
                href="/"
                className="flex items-center gap-3"
                aria-label="JOVIA Network Homepage"
              >
                <img
                  src={logo}
                  alt="JOVIA Network Logo - Intelligent Networking Platform"
                  width="140"
                  height="44"
                  className="h-11 w-auto object-contain"
                />
              </a>

              {/* Clean Desktop Navigation (No Background / No Border) */}
              <nav
                aria-label="Main Navigation"
                className="hidden lg:flex items-center gap-6"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-[#E3D81A] transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="hidden lg:flex items-center gap-6">
                <Link
                  to="/login"
                  className="text-[#E3D81A] font-semibold hover:text-white transition-colors"
                >
                  Log In
                </Link>

                {/* Gold Button */}
                <Link
                  to="/register"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-7 py-3 text-sm font-bold text-[#220D34] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] transition-all duration-300"
                >
                  <span className="relative z-10">Get Started</span>
                </Link>
              </div>

              {/* Mobile Accessible Navigation Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden h-11 w-11 rounded-2xl border border-[#D4AF37]/40 bg-[#220D34] text-[#E3D81A] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#BF953F] hover:to-[#B38728] hover:text-[#220D34] transition-all"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mt-3 rounded-3xl bg-[#220D34] border border-[#D4AF37]/30 p-5 shadow-2xl">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 rounded-2xl font-medium text-[#E3D81A] transition-all hover:bg-[#D4AF37]/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-5 pt-5 border-t border-[#D4AF37]/20 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-center py-3 rounded-2xl border border-[#D4AF37]/40 text-[#E3D81A] font-semibold hover:bg-[#D4AF37]/10 transition"
              >
                Log In
              </Link>

              {/* Mobile Gold Button */}
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="text-center py-3 rounded-2xl text-[#220D34] font-bold bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
