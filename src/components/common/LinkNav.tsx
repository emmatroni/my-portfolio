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
            <span
              className="inline-block overflow-hidden"
              style={{
                width: isActive ? "18px" : "0px",
                opacity: isActive ? 1 : 0,
                transition: "all var(--transition-normal) ease-in-out",
              }}
            >
              <span className="text-white text-[8px] flex justify-center">
                ●
              </span>
            </span>

            <AnimatedLink
              href={`#${link.id}`}
              className="text-[11px] uppercase px-1 py-0.5"
              textColor={
                isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)"
              }
              bgColor="#000000"
              sweepColor="#ffffff"
            >
              {link.label}
            </AnimatedLink>
          </div>
        );
      })}
    </nav>
  );
}
