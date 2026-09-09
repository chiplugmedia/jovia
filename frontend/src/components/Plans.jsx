import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { PLANS } from "@/lib/constants";

export default function Plans() {
  return (
    <div className="relative overflow-hidden bg-[#05010d] text-white py-20 lg:py-28">
      {/* Shared Ambient Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute right-1/4 top-[40%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[170px]" />
        <div className="absolute bottom-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#a855f71f,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-purple-300">
            <Sparkles className="h-4 w-4 text-purple-400" />
            Jovia Network Plans
          </div>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            The Earnings{" "}
            <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
              Graph
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Choose your access plan to unlock video tasks, games, meta
            activities, music streaming rewards, and exclusive benefits.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan) => {
            const isGold = plan.id === "Gold";

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 ${
                  isGold
                    ? "border-[#E2C876]/40 bg-[#0a0518]/90 shadow-2xl shadow-purple-900/30 hover:border-[#E2C876]"
                    : "border-white/10 bg-[#0a0518]/70 hover:border-purple-500/30"
                }`}
              >
                {/* Top Glow Accent Layer */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${
                    isGold
                      ? "from-amber-500/20 via-purple-500/10 to-transparent"
                      : "from-slate-400/10 via-purple-500/5 to-transparent"
                  } opacity-80`}
                />

                {/* Popular / Tier Badge */}
                {isGold && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#E2C876] to-[#C726D4] text-[#05010d] text-xs font-black tracking-wide shadow-md">
                      <Zap className="h-3.5 w-3.5 fill-current" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="relative z-10 flex-grow">
                  {/* Plan Name & Tag */}
                  <div className="mb-2 inline-flex items-center gap-2">
                    <ShieldCheck
                      className={`h-5 w-5 ${
                        isGold ? "text-[#E2C876]" : "text-slate-400"
                      }`}
                    />
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-4 pb-6 border-b border-white/10">
                    <p className="text-xs uppercase tracking-widest text-purple-300 font-bold">
                      {plan.subscriptionFee}
                    </p>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span
                        className={`text-4xl sm:text-5xl font-black ${
                          isGold
                            ? "bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-[#05010d]/60 p-3.5 backdrop-blur-md transition-colors hover:border-purple-500/20"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2
                              className={`h-4 w-4 shrink-0 ${
                                isGold ? "text-[#E2C876]" : "text-purple-400"
                              }`}
                            />
                            <div>
                              <h4 className="font-bold text-xs sm:text-sm text-slate-100">
                                {feature.title}
                              </h4>
                              {feature.status && (
                                <span
                                  className={`inline-flex mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                    feature.status === "PRIORITY"
                                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                      : "bg-slate-800 text-slate-400 border border-slate-700"
                                  }`}
                                >
                                  {feature.status}
                                </span>
                              )}
                            </div>
                          </div>

                          <span
                            className={`font-extrabold text-xs sm:text-sm ${
                              isGold ? "text-[#E2C876]" : "text-purple-200"
                            }`}
                          >
                            {feature.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call-to-Action Button */}
                <div className="relative z-10 mt-8">
                  <a
                    href={`/register?plan=${encodeURIComponent(plan.id)}`}
                    className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-sm font-black tracking-wider uppercase transition-all duration-300 shadow-lg ${
                      isGold
                        ? "bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] text-[#05010d] hover:opacity-95 shadow-purple-900/40"
                        : "bg-purple-500/10 border border-purple-500/30 text-white hover:bg-purple-500/20"
                    }`}
                  >
                    Press Start To Activate
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
