export default function Header() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md"
      style={{
        height: "var(--header-height)",
        backgroundColor: "var(--surface-blur)",
        borderBottom: "var(--border-width) solid var(--border-color)",
      }}
    >
      <div className="flex items-center gap-4">
        <img src="/cat-white-light.svg" alt="Logo" className="w-10 h-10" />
        <span className="text-xs uppercase tracking-[0.25em] text-white leading-tight">
          Emma Troni
        </span>
      </div>
      <span
        className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-center leading-tight"
        style={{ color: "var(--color-text-muted)" }}
      >
        Web and Graphic Designer
        <br />
        Currently based in Milan (IT)
      </span>
      <span
        className="text-[10px] uppercase tracking-[0.2em]"
        style={{ color: "var(--color-text-muted)" }}
      >
        @2026
      </span>
    </nav>
  );
}
