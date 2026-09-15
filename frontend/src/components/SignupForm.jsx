import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Sparkles, Check, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import logo from "@/assets/img/jovia.png";

const PLANS = [
  {
    id: "Sliver",
    name: "Jovia Silver",
    price: "₦9,000",
    description: "Standard earning activation",
    popular: false,
  },
  {
    id: "Gold",
    name: "Jovia Gold",
    price: "₦15,000",
    description: "Maximized rewards & instant perks",
    popular: true,
  },
];

export default function SignupFlow() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    plan: "Sliver",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam === "Sliver" || planParam === "Gold") {
      setForm((prev) => ({
        ...prev,
        plan: planParam,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.fullname.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.password ||
      !form.confirmPassword
    ) {
      return setError("Please fill in all required fields.");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);

      const payload = {
        fullname: form.fullname.trim(),
        phone: form.phone.trim(),
        email: form.email.trim().toLowerCase(),
        plan: form.plan,
        password: form.password,
        confirmPassword: form.confirmPassword,
      };

      const res = await fetch(
        "https://api.jovianetwork.ng/api/create-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to initialize payment.");
      }

      if (data.link || data.payment_url || data.checkout_url) {
        window.location.href =
          data.link || data.payment_url || data.checkout_url;
      } else {
        setError("Unable to initialize payment link.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const progressPercentage = step === 1 ? 33.33 : step === 2 ? 66.66 : 100;

  return (
    <main className="relative min-h-screen text-white flex flex-col justify-center py-10 px-4 sm:px-6">
     
      <div className="relative z-10 mx-auto w-full max-w-xl flex-1">
        {/* Step Progress Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`flex size-2.5 items-center justify-center rounded-full transition-colors duration-300 ${
                  i <= step ? "bg-[#E2C876]" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Overview Landing */}
        {step === 1 && (
          <div className="mx-auto max-w-md text-center py-4 sm:py-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-300">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              Jovia Network Membership
            </div>

            <h1 className="text-3xl font-black text-white sm:text-4xl leading-tight">
              Every second{" "}
              <span className="bg-gradient-to-r from-[#E2C876] via-[#E2C876] to-[#C726D4] bg-clip-text text-transparent">
                creates value.
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              Join Jovia Network with activation and start earning through
              networking, digital skills, entertainment, and engaging
              activities.
            </p>

            <div className="mt-7 space-y-3 rounded-3xl border border-white/10 bg-[#0a0518]/90 p-5 text-left sm:p-6">
              <p className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E2C876]/20 text-[#E2C876]">
                  <Check className="size-3" />
                </span>
                <span>
                  <strong>Skill Verse</strong> — build in-demand high-income
                  digital skills
                </span>
              </p>
              <p className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E2C876]/20 text-[#E2C876]">
                  <Check className="size-3" />
                </span>
                <span>
                  <strong>Watch & Play</strong> — earn daily through videos,
                  music, and games
                </span>
              </p>
              <p className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E2C876]/20 text-[#E2C876]">
                  <Check className="size-3" />
                </span>
                <span>
                  <strong>Missions & Meta</strong> — complete tasks and claim
                  instant rewards
                </span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] text-base font-bold text-[#05010d] transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-purple-900/30 active:scale-[0.99] sm:h-[3.25rem]"
            >
              Continue
              <ArrowRight className="h-5 w-5" />
            </button>

            
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              Payments processed securely by our certified partner. Encrypted in
              transit (TLS).
            </p>
          </div>
        )}

        {/* STEP 2: Plan Selection */}
        {step === 2 && (
          <div className="rounded-3xl p-6 sm:p-8">
            <div className="text-center mb-6">
              
              <h2 className="text-2xl font-black text-white">
                Select Membership Tier
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Choose the plan that fits your earning potential.
              </p>
            </div>

            <div className="grid gap-4 mb-6">
              {PLANS.map((plan) => {
                const isSelected = form.plan === plan.id;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setForm({ ...form, plan: plan.id })}
                    className={`cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 relative ${
                      isSelected
                        ? "border-[#E2C876] bg-[#E2C876]/10 shadow-lg shadow-[#E2C876]/10"
                        : "border-white/10 bg-[#05010d]/60 hover:border-purple-500/30"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#E2C876] to-[#C726D4] px-2.5 py-0.5 text-[10px] font-black tracking-wide text-[#05010d]">
                        <Zap className="h-3 w-3 fill-current" />
                        RECOMMENDED
                      </span>
                    )}

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-white">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {plan.description}
                        </p>
                      </div>
                      <span className="font-black text-xl text-[#E2C876]">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3.5 rounded-2xl border border-white/10 font-bold text-slate-300 hover:bg-white/5 transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-2/3 py-3.5 rounded-2xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] font-black text-[#05010d] hover:opacity-95 transition"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Complete Account Details Form */}
        {step === 3 && (
          <form
            onSubmit={submit}
            className="rounded-3xl p-6 sm:p-8"
          >
            <div className="text-center mb-6">
              
              <h2 className="text-2xl font-black text-white">Create Account</h2>
              <p className="text-xs text-slate-400 mt-1">
                Selected Plan:{" "}
                <span className="text-[#E2C876] font-bold">
                  Jovia {form.plan}
                </span>
              </p>
            </div>

            {error && (
              <div className="mb-5 flex items-center gap-2.5 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-xs font-semibold text-red-300">
                <FaExclamationTriangle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-sm" />
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-[#05010d] py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:border-[#E2C876] focus:outline-none focus:ring-1 focus:ring-[#E2C876]"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-sm" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (e.g. 08012345678)"
                  className="w-full rounded-2xl border border-white/10 bg-[#05010d] py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:border-[#E2C876] focus:outline-none focus:ring-1 focus:ring-[#E2C876]"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-sm" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-[#05010d] py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:border-[#E2C876] focus:outline-none focus:ring-1 focus:ring-[#E2C876]"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-sm" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full rounded-2xl border border-white/10 bg-[#05010d] py-3.5 pl-11 pr-11 text-sm text-white placeholder-slate-500 focus:border-[#E2C876] focus:outline-none focus:ring-1 focus:ring-[#E2C876]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <FaCheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-sm" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full rounded-2xl border border-white/10 bg-[#05010d] py-3.5 pl-11 pr-11 text-sm text-white placeholder-slate-500 focus:border-[#E2C876] focus:outline-none focus:ring-1 focus:ring-[#E2C876]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 py-3.5 rounded-2xl border border-white/10 font-bold text-slate-300 hover:bg-white/5 transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-2/3 py-3.5 rounded-2xl bg-gradient-to-r from-[#E2C876] to-[#C726D4] font-black text-[#05010d] hover:opacity-95 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Processing..." : "Complete & Pay"}
                <ShieldCheck className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
