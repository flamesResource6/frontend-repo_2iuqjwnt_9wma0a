import { Shield, Zap, Palette, Cpu, Cloud, Wifi } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra-fast Duplex",
    desc: "Print and copy at up to 45 pages per minute with intelligent queue optimization.",
  },
  {
    icon: Palette,
    title: "AI Color Mastery",
    desc: "Automatic color calibration for vivid, accurate output every time.",
  },
  {
    icon: Shield,
    title: "ZeroTrust Security",
    desc: "Secure boot, encrypted storage, and role-based access by default.",
  },
  {
    icon: Cpu,
    title: "Smart Workflow",
    desc: "OCR, scan-to-cloud, and auto-staple finishing powered by on-device AI.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    desc: "Direct integrations with Google Drive, OneDrive, and Dropbox.",
  },
  {
    icon: Wifi,
    title: "Seamless Connectivity",
    desc: "Wi‑Fi 6, Bluetooth LE, and NFC tap-to-print supported out of the box.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{background:"radial-gradient(800px 400px at 20% 20%, rgba(168,85,247,0.25) 0%, transparent 60%), radial-gradient(700px 350px at 80% 50%, rgba(99,102,241,0.25) 0%, transparent 60%)"}} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300">
            Neon‑bright performance. Zero compromise.
          </h3>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Designed by The Zero Group to power up your workspace with speed, style, and security.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-600/50 via-purple-700/30 to-indigo-600/50 shadow-[0_0_50px_rgba(147,51,234,0.2)]">
              <div className="relative rounded-2xl h-full bg-gradient-to-b from-black/70 to-black/40 p-6 border border-white/10">
                <div className="h-12 w-12 rounded-xl bg-black/60 border border-white/10 grid place-items-center text-fuchsia-300 shadow-[0_0_40px_rgba(232,121,249,0.25)]">
                  <Icon />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-white">{title}</h4>
                <p className="mt-2 text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
