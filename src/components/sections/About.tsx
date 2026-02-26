import { useState, useEffect, useRef } from "react";
import RotatingText from "../ui/RotatingText";

const designWords = [
  "Web",
  "Graphic",
  "UI",
  "UX",
  "Editorial",
  "Information",
  "Speculative",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-black min-h-screen">
      {/* Word Design interstitial */}
      <div className="flex items-center justify-center min-h-[100vh] px-6">
        <h2
          className="text-5xl md:text-7xl lg:text-6xl font-light text-white tracking-[0.15em] flex items-baseline"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <RotatingText words={designWords} interval={2500} />
          <span className="inline-block ml-4 md:ml-8">Design</span>
        </h2>
      </div>

      {/* About text */}
      <div ref={ref} className="px-6 md:px-3 lg:px-16 pt-16 pb-20 max-w-5xl">
        <p
          className={`text-2xl md:text-4xl  text-white font-medium tracking-tight transition-all duration-[1.2s] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          I am a Communication Design student at the Politecnico di Milano, with
          a strong specialization in the development of visual identities,
          branding, typography, publishing and web design. My passion for design
          extends to UI/UX design and game design, with an active interest in
          experimenting with programming languages such as HTML, CSS, JavaScript
          and TypeScript.
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center gap-4 text-sm transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span style={{ color: "var(--color-text-muted)" }}>
            Learn more about me:
          </span>

          <a
            href="/cv_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            CV
          </a>
          <a
            href="/portfolio_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
