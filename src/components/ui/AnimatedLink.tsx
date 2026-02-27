// // Su sfondo nero (default)
// <AnimatedLink href="#work" className="text-[11px] uppercase">
//   Work
// </AnimatedLink>

// // Su sfondo colorato (es. project page)
// <AnimatedLink href="#" bgColor="#0051DC" className="text-[11px] uppercase">
//   Brand
// </AnimatedLink>

// // Come button
// <AnimatedLink onClick={onBack} bgColor={project.color} className="text-[10px] uppercase">
//   ← Back
// </AnimatedLink>
import { useState } from "react";

interface AnimatedLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  /** Background color of the page — text becomes this color on hover */
  bgColor?: string;
  /** Text color when not hovered */
  textColor?: string;
  /** Color of the sweep rectangle (default: white) */
  sweepColor?: string;
  /** Force hover state from parent */
  forceHover?: boolean;
  target?: string;
  rel?: string;
}

export default function AnimatedLink({
  href,
  onClick,
  children,
  className = "",
  bgColor = "#000000",
  textColor = "rgba(255,255,255)",
  sweepColor = "#ffffff",
  forceHover,
  target,
  rel,
}: AnimatedLinkProps) {
  const [selfHovered, setSelfHovered] = useState(false);
  const hovered = forceHover !== undefined ? forceHover : selfHovered;

  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href || undefined}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`relative inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setSelfHovered(true)}
      onMouseLeave={() => setSelfHovered(false)}
      style={{
        color: hovered ? bgColor : textColor,
        transition: "color 400ms ease-out",
      }}
    >
      {/* Background sweep */}
      <span
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: sweepColor,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 400ms ease-out",
        }}
      />
      {/* Text */}
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
