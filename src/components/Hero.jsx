import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0215] via-[#0b0215] to-[#0a0516]" />

      <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{background:"radial-gradient(1200px 600px at 20% 10%, rgba(168,85,247,0.25) 0%, transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(99,102,241,0.3) 0%, transparent 60%), radial-gradient(800px 400px at 50% 100%, rgba(147,51,234,0.25) 0%, transparent 60%)"}} />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 text-white">
          <p className="uppercase tracking-[0.3em] text-fuchsia-300/80 text-xs sm:text-sm mb-4">The Zero Group presents</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Toshiba Photocopier <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-300 to-indigo-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">NeoPrint X</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl">
            Futuristic productivity with neon precision. Ultra-fast duplex printing, AI-powered color calibration, and enterprise-grade security — all wrapped in a bold, glowy design.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#cta" className="px-6 py-3 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-[0_0_40px_10px_rgba(232,121,249,0.35)] transition">Preorder Now</a>
            <a href="#features" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition">See Features</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <div>
              <p className="font-semibold text-white">45 ppm</p>
              <p className="text-white/60">Print speed</p>
            </div>
            <div>
              <p className="font-semibold text-white">1200 dpi</p>
              <p className="text-white/60">Resolution</p>
            </div>
            <div>
              <p className="font-semibold text-white">AI Color</p>
              <p className="text-white/60">Calibration</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6" />
      </div>
    </section>
  );
}
