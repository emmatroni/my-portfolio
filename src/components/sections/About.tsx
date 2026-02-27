import { useState, useEffect, useRef } from "react";
import RotatingText from "../ui/RotatingText";
import ImageTrail from "../ui/ImageTrail";

const designWords = [
  "Web",
  "Graphic",
  "UI",
  "UX",
  "Editorial",
  "Information",
  "Speculative",
];

// ─── Trail images (replace with your own) ───
const trailImages = [
  "/projects/erberto-carboni/gallery-1.jpg",
  "/projects/erberto-carboni/gallery-2.jpg",
  "/projects/seres-srl/gallery-1.jpg",
  "/projects/seres-srl/gallery-2.jpg",
];

// ─── Scroll reveal settings ───
const REVEAL_START = 0.85; // viewport % where reveal begins (0 = top, 1 = bottom)
const REVEAL_END = 0.2; // viewport % where reveal completes
const MIN_OPACITY = 0.15; // opacity of words not yet revealed
const SPREAD = 0.8; // how spread out the reveal is (0.5 = tight, 1 = very spread)
const FADE_RANGE = 0.2; // how quickly each word transitions (smaller = snappier)

const aboutText =
  "I am a Communication Design student at the Politecnico di Milano, with a strong specialization in the development of visual identities, branding, typography, publishing and web design. My passion for design extends to UI/UX design and game design, with an active interest in experimenting with programming languages such as HTML, CSS, JavaScript and TypeScript.";

export default function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [linksVisible, setLinksVisible] = useState(false);

  const words = aboutText.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * REVEAL_START;
      const end = windowHeight * REVEAL_END;

      const rawProgress = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, rawProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLinksVisible(true);
      },
      { threshold: 0.5 },
    );
    if (linksRef.current) observer.observe(linksRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-black min-h-screen">
      {/* Word Design interstitial with image trail */}
      <ImageTrail
        images={trailImages}
        className="flex items-center justify-center min-h-[100vh] px-6"
      >
        <h2
          className="text-5xl md:text-7xl lg:text-6xl font-light text-white tracking-[0.15em] flex items-baseline relative z-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RotatingText words={designWords} interval={2500} />
          <span className="inline-block ml-4 md:ml-8">Design</span>
        </h2>
      </ImageTrail>

      {/* About text — scroll-driven reveal */}
      <div ref={textRef} className="px-6 pt-16 pb-8 max-w-screen-2xl">
        <p
          className="font-medium tracking-tight leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 4vw, 7rem)",
          }}
        >
          {words.map((word, i) => {
            // Each word reveals based on its position in the text
            const wordProgress = i / words.length;
            const opacity = Math.max(
              MIN_OPACITY,
              Math.min(1, (progress - wordProgress * SPREAD) / FADE_RANGE),
            );

            return (
              <span
                key={i}
                style={{
                  color: `rgba(255, 255, 255, ${opacity})`,
                  transition: "color 100ms ease-out",
                }}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>

      {/* Links */}
      <div
        ref={linksRef}
        className={`px-6 pb-20 flex flex-wrap items-center gap-4 text-sm transition-all duration-1000 ${
          linksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span style={{ color: "var(--color-text-muted)" }}>
          Learn more about me:
        </span>
        <a
          href="/pdf/cv_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary"
        >
          CV
        </a>
        <a
          href="/pdf/portfolio_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary"
        >
          Portfolio
        </a>
      </div>
    </section>
  );
}
