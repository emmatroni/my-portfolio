import { useState, useEffect } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-black flex items-center hero-section"
    >
      {/* Contained image box — fluid styles defined in index.css */}
      <div className="relative w-full overflow-hidden hero-image-box">
        <div
          className={`absolute inset-0 transition-all duration-[1.8s] ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=1600&q=80"
            alt="Lush green botanical leaves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p
            className={`italic text-white/80 text-lg md:text-xl mb-2 transition-all duration-[var(--transition-slow)] delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Emma Troni
          </p>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Web and graphic designer
          </h1>
          <p
            className={`mt-6 text-sm md:text-base max-w-lg leading-relaxed transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ color: "var(--color-text-muted)" }}
          >
            Crafting digital experiences with verygood aesthetics.
            <br />
            Specializing in clean, impactful web design.
          </p>
        </div>
      </div>
    </section>
  );
}
