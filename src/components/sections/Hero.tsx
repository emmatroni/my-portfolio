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
      <style>{`
        .hero-section {
          /* Fluid padding: 0px at 375px viewport → 40px at 1024px */
          padding-left: clamp(0px, calc((100vw - 375px) * 40 / 649), 40px);
          padding-right: clamp(0px, calc((100vw - 375px) * 40 / 649), 40px);
          padding-top: clamp(56px, calc(56px + (100vw - 375px) * 24 / 649), 80px);
          padding-bottom: clamp(0px, calc((100vw - 375px) * 24 / 649), 24px);
        }
        .hero-image-box {
         
          /* Fluid height: full viewport on mobile → 80vh on desktop */
          height: clamp(calc(100vh - 240px), calc(100vh - 56px - (100vw - 375px) * 0.15), 100vh);
        }
      `}</style>
      {/* Contained image box — smoothly scales from fullscreen to contained */}
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
            className={`font-serif italic text-white/80 text-lg md:text-xl mb-2 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Emma Troni
          </p>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Web and graphic designer
          </h1>
          <p
            className={`mt-6 text-white/60 text-sm md:text-base max-w-lg leading-relaxed transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
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
