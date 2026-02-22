interface FooterProps {
  activeSection: string;
}

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Let's Talk" },
];

export default function Footer({ activeSection }: FooterProps) {
  return (
    <nav className="sticky top-14 z-40 flex items-center justify-between px-6 md:px-10 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.20]">
      {links.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="relative flex items-center gap-0 text-[10px] uppercase tracking-[0.25em] group"
          >
            {/* Animated dot */}
            <span
              className="inline-block transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                width: isActive ? "18px" : "0px",
                opacity: isActive ? 1 : 0,
              }}
            >
              <span className="text-white text-[8px]">●</span>
            </span>

            {/* Label */}
            <span
              className="transition-colors duration-500 ease-in-out"
              style={{
                color: isActive
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,0.25)",
              }}
            >
              {link.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
