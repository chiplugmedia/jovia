import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import SignupForm from "@/components/SignupForm";
import PaymentDetails from "@/components/PaymentDetails";
import logo from "@/assets/img/jovia.png"; // Assuming logo asset

export default function Register() {
  // In-memory mock "database" — resets on page reload.
  const usersRef = useRef([]);
  const [currentUser, setCurrentUser] = useState(null);

  function handleSuccess(user) {
    usersRef.current.push(user);
    setCurrentUser(user);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Define subtle fade-in animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className="relative overflow-hidden bg-[#05010d] text-white min-h-screen">
      {/* Brand Ambient Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute right-1/4 top-[40%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[170px]" />
        <div className="absolute bottom-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-xl flex-1 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        {/* Simple Top Navigation or Logo placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 text-center"
        >
          <img
            src={logo}
            alt="Jovia Network"
            className="h-14 mx-auto object-contain mt-2"
          />
        </motion.div>

        {/* AnimatePresence enables exit animations */}
        <AnimatePresence mode="wait">
          {!currentUser ? (
            <motion.section
              key="signup"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Added consistent visual card wrapping for the forms */}
              <div className="relative overflow-hidden rounded-[40px] p-8 transition duration-300">
                {/* Internal top-glow accent */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-40 to-transparent opacity-80" />

                <div className="relative z-10">
                  <SignupForm
                    existingUsers={usersRef.current}
                    onSuccess={handleSuccess}
                  />
                </div>
              </div>

              {/* <div className="mt-8 flex items-center justify-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-purple-300 max-w-sm mx-auto">
                <FaDatabase className="h-3.5 w-3.5 text-purple-400" />
                <span>DEMO: Memory-only storage (reset on reload)</span>
              </div> */}
            </motion.section>
          ) : (
            <motion.section
              key="payment"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0a0518]/90 p-8 transition duration-300">
                {/* Internal top-glow accent (gold/amber for payment) */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-40 to-transparent opacity-80" />

                <div className="relative z-10">
                  {/* Assuming PaymentDetails will inherit the parent styles or be redesigned similarly */}
                  <PaymentDetails user={currentUser} />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
