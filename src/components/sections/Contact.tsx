import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-black min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] opacity-40  overflow-hidden hero-image-box ">
        <video
          src="/prova.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 flex flex-col justify-end min-h-screen px-6 md:px-3 pb-16"
      >
        <div className="flex flex-col md:flex-row items-end justify-between gap-10">
          <h2
            className={`text-7xl md:text-[10rem] lg:text-[14rem] font-light leading-[0.85] text-white tracking-tight transition-all duration-[1.5s] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's
            <br />
            talk
          </h2>

          <div
            className={`flex flex-col items-start md:items-end gap-3 transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {["Instagram", "LinkedIn", "Github"].map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center gap-2 text-sm link-muted"
              >
                <span className="text-xs">↗</span> {link}
              </a>
            ))}

            <div
              className="mt-6 text-[14px]"
              style={{ color: "var(--color-text-subtle)" }}
            >
              Get in touch at:{" "}
              <a href="mailto:emma@troni.it" className="link-primary">
                emma@troni.it
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
