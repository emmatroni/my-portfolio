import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const isLink = target.closest("a, button, [role='button']");
      setHovering(!!isLink);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  const size = hovering ? 48 : 24;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999]"
      style={{
        transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "white",
        mixBlendMode: "difference",
        opacity: visible ? 1 : 0,
        transition:
          "width 300ms ease, height 300ms ease, transform 100ms linear, opacity 150ms ease",
      }}
    />
  );
}
