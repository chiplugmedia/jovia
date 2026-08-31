import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "@/assets/img/jovia.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#how", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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
    logo: logo,
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

      <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-500/10 bg-[#0A0615]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" aria-label="JOVIA Network Home" className="flex items-center">
              <img
                src={logo}
                alt="JOVIA Logo"
                className="h-6 w-auto sm:h-8"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-purple-400"
                >
                  {link.label}
                </a>
              ))}

              {/* CTA */}
              <Link
                to="/register"
                className="ml-4 inline-flex items-center rounded-3xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] px-5 py-2.5 text-sm font-semibold text-[#270041]"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Toggle Navigation Menu"
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-200 hover:bg-purple-500/10 md:hidden"
            >
              {menuOpen ? (
                /* Close (X) Icon when open */
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Icon when closed */
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } border-t border-purple-500/10 bg-[#0A0615]/95 backdrop-blur-xl md:hidden`}
        >
          <div className="space-y-1 p-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-slate-300 hover:bg-purple-500/10 hover:text-purple-400"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block rounded-3xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] px-4 py-3 text-center font-semibold text-[#270041]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}