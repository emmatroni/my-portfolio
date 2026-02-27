import { useState, useEffect } from "react";

const HOLD_DURATION = 2000;
const EXIT_DURATION = 800;
const TEXT_FADE_IN = 400;
const TEXT_FADE_OUT = 300;
const TEXT_SHOW_DELAY = 200;
const TEXT_HIDE_BEFORE = 100;

interface PageLoaderProps {
  onComplete?: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [phase, setPhase] = useState<"hold" | "exit" | "done">("hold");
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const textShowTimer = setTimeout(() => {
      setTextVisible(true);
    }, TEXT_SHOW_DELAY);

    const textHideTimer = setTimeout(
      () => {
        setTextVisible(false);
      },
      HOLD_DURATION - TEXT_HIDE_BEFORE - TEXT_FADE_OUT,
    );

    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, HOLD_DURATION);

    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, HOLD_DURATION + EXIT_DURATION);

    return () => {
      clearTimeout(textShowTimer);
      clearTimeout(textHideTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    const id = "page-loader-keyframes";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @keyframes pl-slide-up {
        from { transform: translateY(0%); }
        to { transform: translateY(-100%); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        animation:
          phase === "exit"
            ? `pl-slide-up ${EXIT_DURATION}ms ease-in-out forwards`
            : "none",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 2vw, 3.5rem)",
          fontWeight: 300,
          color: "white",
          letterSpacing: "0.15em",
          textTransform: "lowercase",
          opacity: textVisible ? 1 : 0,
          transition: textVisible
            ? `opacity ${TEXT_FADE_IN}ms ease-in`
            : `opacity ${TEXT_FADE_OUT}ms ease-out`,
        }}
      >
        Emma Troni
      </h3>
    </div>
  );
}
