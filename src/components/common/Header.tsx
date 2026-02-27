import AnimatedLink from "../ui/AnimatedLink";

interface HeaderProps {
  bgColor?: string;
  onLogoClick?: () => void;
}

export default function Header({ bgColor, onLogoClick }: HeaderProps) {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
      style={{
        height: "var(--header-height)",
        backgroundColor: bgColor || "var(--surface-blur)",
        borderBottom: "var(--border-width) solid var(--border-color)",
      }}
    >
      {/*------------- logo --------------*/}
      <a href="/" onClick={handleLogoClick} className="flex items-center">
        <img
          src="/icons/head-cat-white-light.svg"
          alt="Logo"
          className="w-10 h-10"
        />
      </a>
      <span className="hidden md:block text-[11px] uppercase text-center leading-tight text-white">
        Web and Graphic Designer
        <br />
        Currently based in Milan (IT)
      </span>
      <AnimatedLink
        href="https://emmatroni.webflow.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] uppercase text-white"
      >
        PLAYGROUND
      </AnimatedLink>
    </nav>
  );
}
