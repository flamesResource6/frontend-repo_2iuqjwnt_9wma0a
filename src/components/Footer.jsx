export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative bg-black py-12 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{background:"radial-gradient(900px 500px at 10% 40%, rgba(168,85,247,0.25) 0%, transparent 60%)"}} />
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {year} The Zero Group. All rights reserved.</p>
        <div className="flex items-center gap-6 text-white/70 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="mailto:hello@zerogroup.com" className="hover:text-white">hello@zerogroup.com</a>
        </div>
      </div>
    </footer>
  );
}
