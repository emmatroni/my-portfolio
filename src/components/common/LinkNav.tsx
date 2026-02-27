import AnimatedLink from "../ui/AnimatedLink";

interface FooterProps {
  activeSection: string;
}

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Let's Talk" },
];

export default function LinkNav({ activeSection }: FooterProps) {
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
          <div key={link.id} className="relative flex items-center gap-0">
            {/* Animated dot */}
            <span
              className="inline-block overflow-hidden"
              style={{
                width: isActive ? "18px" : "0px",
                opacity: isActive ? 1 : 0,
                transition: "all var(--transition-normal) ease-in-out",
              }}
            >
              <span className="text-white text-[8px]">●</span>
            </span>

            {/* Label */}
            {isActive ? (
              <a
                href={`#${link.id}`}
                className="text-[11px] uppercase"
                style={{ color: "var(--color-text)" }}
              >
                {link.label}
              </a>
            ) : (
              <AnimatedLink
                href={`#${link.id}`}
                className="text-[11px] uppercase px-1 py-0.5"
                textColor="var(--color-text-muted)"
                bgColor="#000000"
              >
                {link.label}
              </AnimatedLink>
            )}
          </div>
        );
      })}
    </nav>
  );
}
