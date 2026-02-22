import { useState, useEffect, useRef } from "react";
import SectionNav from "../common/SectionNav";

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
    <section id="about" className="bg-black min-h-screen py-8">
      {/* Web Design interstitial */}
      <SectionNav active="about" />

      <div className="flex items-center justify-center min-h-[50vh] px-6">
        <h2
          className="text-5xl md:text-7xl lg:text-9xl font-light text-white tracking-[0.15em]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          <span className="inline-block mr-4 md:mr-8">Web</span>
          <span className="inline-block">Design</span>
        </h2>
      </div>

      {/* About text */}
      <SectionNav active="about" />

      <div ref={ref} className="px-6 md:px-10 lg:px-16 pt-16 pb-12 max-w-5xl">
        <p
          className={`text-2xl md:text-3xl lg:text-[2.75rem] text-white font-medium leading-[1.35] tracking-tight transition-all duration-[1.2s] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
          <span className="text-white/50">Get in touch at:</span>
          <a
            href="mailto:sbmickle@outlook.com"
            className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
          >
            sbmickle@outlook.com
          </a>
          <span className="text-white/30 text-xs uppercase tracking-wider">
            Scarica CV + Portfolio
          </span>
        </div>
      </div>
    </section>
  );
}
