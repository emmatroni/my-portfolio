export default function Header() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-3 py-4 backdrop-blur-md"
      style={{
        height: "var(--header-height)",
        backgroundColor: "var(--surface-blur)",
        borderBottom: "var(--border-width) solid var(--border-color)",
      }}
    >
      <div className="flex items-center gap-4">
        <img src="/head-cat-white-light.svg" alt="Logo" className="w-10 h-10" />
        <span className="text-[10px] uppercase tracking-[0.2em] leading-tight text-white not-italic">
          Emma Troni
        </span>
      </div>
      <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-center leading-tight text-white">
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
