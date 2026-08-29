import logo from "@/assets/img/jovia.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0F9AC5]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00E57B]/10 rounded-full blur-[120px]" />
      </div>

      {/* Large Background Watermark */}
      <div
        className="
          absolute
          bottom-[-40px]
          left-1/2
          -translate-x-1/2
          select-none
          pointer-events-none
          whitespace-nowrap
          font-black
          tracking-[0.08em]
          text-[100px]
          sm:text-[220px]
          md:text-[320px]
          lg:text-[420px]
          xl:text-[520px]
          text-white/[0.04]
          leading-none
          z-0
        "
      >
        JOVIA
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="lg:col-span-5">
              <img
                src={logo}
                alt="JOVIA"
                className="h-14 w-auto object-contain"
              />

              <p className="mt-5 text-white/70 leading-relaxed text-sm max-w-md">
                An intelligent networking platform connecting you to the digital
                world. Build your skills, earn for your time, and thrive with
                JOVIA.
              </p>
            </div>

            {/* General */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-base">General</h4>

              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Jovia
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Features
                  </a>
                </li>

                <li>
                  <a href="#plans" className="hover:text-white transition">
                    Our Plans
                  </a>
                </li>

                <li>
                  <a href="#faq" className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Jovia Family */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-base">Jovia Family</h4>

              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Become a Partner
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Brand Assets
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-base">Legal</h4>

              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Bottom */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-xs md:text-sm">
              &copy; 2026 JOVIA. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
