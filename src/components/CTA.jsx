export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{background:"radial-gradient(1000px 500px at 30% 10%, rgba(147,51,234,0.35) 0%, transparent 60%), radial-gradient(900px 500px at 90% 60%, rgba(99,102,241,0.25) 0%, transparent 60%)"}} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-[2px] bg-gradient-to-br from-fuchsia-600 via-purple-700 to-indigo-600 shadow-[0_0_80px_rgba(147,51,234,0.35)]">
          <div className="rounded-3xl bg-black/70 border border-white/10 px-8 py-12 md:px-12 md:py-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300">
                Be first to experience NeoPrint X
              </h3>
              <p className="mt-4 text-white/80">Preorders open now for The Zero Group partners. Limited launch incentives available.</p>
              <ul className="mt-6 space-y-2 text-white/70 text-sm list-disc list-inside">
                <li>Priority delivery</li>
                <li>On-site installation</li>
                <li>3-year advanced support</li>
              </ul>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Company Email</label>
                <input type="email" required placeholder="you@company.com" className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-fuchsia-400/70" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Name</label>
                  <input type="text" required placeholder="Jane" className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-fuchsia-400/70" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Company</label>
                  <input type="text" required placeholder="The Zero Group" className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-fuchsia-400/70" />
                </div>
              </div>
              <button className="w-full rounded-xl px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-[0_0_50px_12px_rgba(232,121,249,0.35)] transition">
                Join Preorder List
              </button>
              <p className="text-xs text-white/50">
                By joining, you agree to receive launch updates from The Zero Group.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
