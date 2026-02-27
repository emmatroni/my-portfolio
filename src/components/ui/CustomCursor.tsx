import { useState, useEffect, useRef } from "react";

// ─── Change these to adjust cursor ───
const SIZE_DEFAULT = 16;
const SIZE_HOVER = 40;
const LERP_SPEED = 0.15; // 0 = no movement, 1 = instant (0.1–0.2 feels smooth)

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const loop = () => {
      // Lerp: smoothly interpolate current position toward target
      current.current.x += (target.current.x - current.current.x) * LERP_SPEED;
      current.current.y += (target.current.y - current.current.y) * LERP_SPEED;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const el = e.target as HTMLElement;
      const isLink = el.closest("a, button, [role='button']");
      setHovering(!!isLink);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  const size = hovering ? SIZE_HOVER : SIZE_DEFAULT;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[999]"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        borderRadius: "50%",
        backgroundColor: "white",
        mixBlendMode: "difference",
        opacity: visible ? 1 : 0,
        willChange: "transform",
        transition:
          "width 300ms ease-out, height 300ms ease-out, margin 300ms ease-out, opacity 150ms ease",
      }}
    />
  );
}
