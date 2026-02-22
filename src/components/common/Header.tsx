interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
      <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-light">
        Emma Troni
      </span>
      <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-white/40 text-center leading-tight">
        Web and Graphic Designer
        <br />
        Currently based in Milan (IT)
      </span>
      <div className="flex gap-6 text-xs uppercase tracking-[0.2em]">
        {[
          { id: "work", label: "Work" },
          { id: "about", label: "About" },
          { id: "contact", label: "Let's Talk" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition-colors duration-300 ${
              activeSection === item.id
                ? "text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
