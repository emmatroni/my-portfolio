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
    <nav
      className="sticky z-40 flex items-center justify-between px-6 py-4 backdrop-blur-md -mt-12"
      style={{
        top: "var(--header-height)",
        backgroundColor: "var(--surface-blur)",
        borderBottom: "var(--border-width) solid var(--border-color)",
        borderTop: "var(--border-width) solid var(--border-color)",
      }}
    >
      {links.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="relative flex items-center gap-0 text-[11px] uppercase group"
          >
            {/* Animated dot */}
            <span
              className="inline-block overflow-hidden"
              style={{
                width: isActive ? "18px" : "0px",
                opacity: isActive ? 1 : 0,
                transition: `all var(--transition-normal) ease-in-out`,
              }}
            >
              <span className="text-white text-[8px]">●</span>
            </span>

            {/* Label */}
            {isActive ? (
              <span style={{ color: "var(--color-text)" }}>{link.label}</span>
            ) : (
              <span className="link-muted">{link.label}</span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
