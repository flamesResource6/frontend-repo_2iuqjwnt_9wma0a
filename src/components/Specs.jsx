export default function Specs() {
  const specItems = [
    { label: 'Engine', value: '45 ppm mono/color, 1200 x 1200 dpi' },
    { label: 'Paper', value: 'A6 - A3, 52 – 300 gsm, 2,300-sheet capacity' },
    { label: 'Connectivity', value: 'USB, Ethernet, Wi‑Fi 6, Bluetooth LE, NFC' },
    { label: 'Processor', value: 'Octa‑core print SoC with AI acceleration' },
    { label: 'Security', value: 'Secure boot, TPM 2.0, AES‑256 encryption' },
    { label: 'Workflows', value: 'Scan-to-email, cloud, OCR, auto-finishers' },
  ];

  return (
    <section id="specs" className="relative py-24 bg-gradient-to-b from-black to-[#0a0410]">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{background:"radial-gradient(900px 450px at 70% 20%, rgba(168,85,247,0.25) 0%, transparent 60%)"}} />

      <div className="relative max-w-6xl mx-auto px-6">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300 text-center">
          Technical Specifications
        </h3>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {specItems.map((s) => (
            <div key={s.label} className="rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-600/40 via-purple-700/20 to-indigo-600/40">
              <div className="rounded-2xl bg-black/60 border border-white/10 p-6">
                <p className="text-sm uppercase tracking-wider text-white/60">{s.label}</p>
                <p className="mt-1 text-white font-semibold">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
