interface FooterProps {
  loaded?: boolean;
}

export default function Footer({ loaded = true }: FooterProps) {
  return (
    <footer
      className="py-4 flex items-center justify-center text-[9px] uppercase text-white/80 px-3"
      style={{
        borderTop: "var(--border-width) solid var(--border-color)",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 800ms ease-out 200ms, transform 800ms ease-out 200ms",
      }}
    >
      <p>Developed by Emma Troni</p>
    </footer>
  );
}
