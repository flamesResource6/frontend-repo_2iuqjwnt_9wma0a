import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/80">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 shadow-[0_0_40px_8px_rgba(168,85,247,0.35)] grid place-items-center">
            <Sparkles className="text-white" size={20} />
          </div>
          <div className="text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300/90">The Zero Group</p>
            <h1 className="leading-none font-extrabold text-xl sm:text-2xl">Toshiba Launch</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#specs" className="text-white/80 hover:text-white transition">Specifications</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <a href="#cta" className="px-4 py-2 rounded-full bg-fuchsia-600/80 hover:bg-fuchsia-500 text-white shadow-[0_0_30px_6px_rgba(232,121,249,0.25)] transition">Preorder</a>
        </div>

        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden relative bg-black/80 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-white/90">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#specs" onClick={() => setOpen(false)}>Specifications</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="#cta" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-fuchsia-600/80 text-white text-center">Preorder</a>
          </div>
        </div>
      )}
    </header>
  );
}
