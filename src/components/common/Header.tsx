export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-black/80 backdrop-blur-md border-b border-white/20 h-14">
      <div className="flex items-center gap-4">
        <img src="/cat-white-light.svg" alt="Logo" className="w-10 h-10" />
        <span className="text-xs uppercase tracking-[0.25em] text-white leading-tight">
          Emma Troni
        </span>
      </div>
      <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-white text-center leading-tight">
        Web and Graphic Designer
        <br />
        Currently based in Milan (IT)
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-white">
        @2026
      </span>
    </nav>
  );
}
