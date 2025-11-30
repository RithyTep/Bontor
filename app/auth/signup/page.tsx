import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-indigo-600 shadow-[0_0_20px_rgba(123,97,255,0.4)] flex items-center justify-center">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">Bontor</span>
        </div>

        {/* Card */}
        <div className="bg-brand-card border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Create account
          </h1>
          <p className="text-slate-400 text-center mb-8">
            Start your musical journey with Bontor
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-purple text-white font-semibold py-3 px-4 rounded-xl hover:bg-brand-purple/90 transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-brand-purple hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
