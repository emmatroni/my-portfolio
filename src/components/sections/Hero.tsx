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
      {/* Contained video box — fluid styles defined in index.css */}
      <div className="relative w-full overflow-hidden hero-image-box grain-overlay">
        <div
          className={`absolute inset-0 transition-all duration-[1.8s] ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <video
            src="/prova.webm"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
          <h1
            className={`text-4xl md:text-6xl lg:text-8xl font-thin text-white transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Emma Troni
          </h1>
          {/* <p
            className={` text-white/80 text-lg md:text-sm uppercase my-2 transition-all duration-[var(--transition-slow)] delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            Crafting digital experiences with verygood verygood aesthetics.{" "}
          </p> */}
        </div>
      </div>
    </section>
  );
}
