import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "@/assets/img/jovia.png";

export default function SignupForm() {
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    plan: "Trial",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const plan = searchParams.get("plan");

    if (plan === "Trial" || plan === "Premium") {
      setForm((prev) => ({
        ...prev,
        plan,
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
      !form.fullname ||
      !form.phone ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      return setError("Please fill in all fields.");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://api.evermorenetwork.com/api/create-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (data.link) {
        window.location.href = data.link;
      } else {
        setError(data.message || "Unable to initialize payment.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submit} className="rounded-[32px] overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <img
            src={logo}
            alt="Evermore"
            className="h-12 mx-auto object-contain"
          />

          <h2 className="mt-5 text-3xl font-black text-[#0E2258]">
            Create Account
          </h2>

          <p className="mt-2 text-slate-500">
            Join Evermore and unlock AI opportunities.
          </p>
        </div>

        <div className="px-8 pb-8 space-y-5">
          {/* Error Message */}
          {error && (
            <div className="rounded-2xl bg-red-50 border border-red-200 p-4 text-red-600 text-sm text-center font-medium">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#0E2258]">
              Full Name
            </label>

            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:border-[#0F9AC5] focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#0E2258]">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="08012345678"
              className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:border-[#0F9AC5] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#0E2258]">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:border-[#0F9AC5] focus:outline-none"
            />
          </div>

          {/* Plans */}
          <div>
            <label className="block mb-3 text-sm font-semibold text-[#0E2258]">
              Choose Plan
            </label>

            <div className="grid gap-3">
              {/* Trial */}
              <label
                className={`
                  cursor-pointer
                  rounded-2xl
                  border-2
                  p-4
                  transition-all
                  ${
                    form.plan === "Trial"
                      ? "border-[#0F9AC5] bg-[#0F9AC5]/5"
                      : "border-slate-200"
                  }
                `}
              >
                <input
                  type="radio"
                  name="plan"
                  value="Trial"
                  checked={form.plan === "Trial"}
                  onChange={handleChange}
                  className="hidden"
                />

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-[#0E2258]">Ever AI Trial</h3>

                    <p className="text-sm text-slate-500">
                      Perfect for getting started
                    </p>
                  </div>

                  <span className="font-black text-[#0F9AC5]">₦7,000</span>
                </div>
              </label>

              {/* Premium */}
              <label
                className={`
                  cursor-pointer
                  rounded-2xl
                  border-2
                  p-4
                  transition-all
                  relative
                  ${
                    form.plan === "Premium"
                      ? "border-[#00E57B] bg-[#00E57B]/5"
                      : "border-slate-200"
                  }
                `}
              >
                <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full bg-[#00E57B] text-[#0E2258]">
                  MOST POPULAR
                </span>

                <input
                  type="radio"
                  name="plan"
                  value="Premium"
                  checked={form.plan === "Premium"}
                  onChange={handleChange}
                  className="hidden"
                />

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-[#0E2258]">
                      Ever AI Premium
                    </h3>

                    <p className="text-sm text-slate-500">
                      Higher rewards and priority access
                    </p>
                  </div>

                  <span className="font-black text-[#00B56A]">₦14,000</span>
                </div>
              </label>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#0E2258]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-3 pr-12 rounded-2xl border border-slate-300 focus:border-[#0F9AC5] focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black fill-black hover:text-[#0F9AC5] hover:fill-[#0F9AC5]"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-[#0E2258]">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full px-4 py-3 pr-12 rounded-2xl border border-slate-300 focus:border-[#0F9AC5] focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black fill-black hover:text-[#0F9AC5] hover:fill-[#0F9AC5]"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-[#0E2258]
              via-[#15347A]
              to-[#0F9AC5]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-xl
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Processing..." : "Create Account"}
          </button>
        </div>
      </form>
    </div>
  );
}
