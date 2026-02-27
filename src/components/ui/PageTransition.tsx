import { useState, useEffect } from "react";

const SLIDE_DURATION = 800;
const COLOR_DELAY = 600;
const COLOR_DURATION = 800;
const HOLD_DURATION = 800;
const EXIT_DURATION = 600;
const TEXT_FADE_IN = 300;
const TEXT_FADE_OUT = 300;
const TEXT_SHOW_DELAY = 100;
const TEXT_HIDE_BEFORE = 100;

interface PageTransitionProps {
  active: boolean;
  /** Color the overlay starts as (current page background) */
  startColor?: string;
  /** Color the overlay transitions to (destination page background) */
  targetColor?: string;
  onMidpoint?: () => void;
  onComplete?: () => void;
  onStart?: () => void;
}

export default function PageTransition({
  active,
  startColor = "#000000",
  targetColor = "#000000",
  onMidpoint,
  onComplete,
  onStart,
}: PageTransitionProps) {
  const [phase, setPhase] = useState<
    "idle" | "enter" | "color" | "hold" | "exit"
  >("idle");
  const [bgColor, setBgColor] = useState(startColor);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (!active) return;

    onStart?.();
    setBgColor(startColor);
    setPhase("enter");
    setTextVisible(false);

    const textShowTimer = setTimeout(() => {
      setTextVisible(true);
    }, SLIDE_DURATION + TEXT_SHOW_DELAY);

    const colorTimer = setTimeout(() => {
      setPhase("color");
      setBgColor(targetColor);
    }, COLOR_DELAY);

    const holdTimer = setTimeout(() => {
      setPhase("hold");
      onMidpoint?.();
    }, SLIDE_DURATION + COLOR_DURATION);

    const textHideTimer = setTimeout(
      () => {
        setTextVisible(false);
      },
      SLIDE_DURATION +
        COLOR_DURATION +
        HOLD_DURATION -
        TEXT_HIDE_BEFORE -
        TEXT_FADE_OUT,
    );

    const exitTimer = setTimeout(
      () => {
        setPhase("exit");
      },
      SLIDE_DURATION + COLOR_DURATION + HOLD_DURATION,
    );

    const doneTimer = setTimeout(
      () => {
        setPhase("idle");
        onComplete?.();
      },
      SLIDE_DURATION + COLOR_DURATION + HOLD_DURATION + EXIT_DURATION,
    );

    return () => {
      clearTimeout(textShowTimer);
      clearTimeout(colorTimer);
      clearTimeout(holdTimer);
      clearTimeout(textHideTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [active, startColor, targetColor, onMidpoint, onComplete, onStart]);

  useEffect(() => {
    const id = "page-transition-keyframes";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @keyframes pt-slide-down {
        from { transform: translateY(-100%); }
        to { transform: translateY(0%); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  if (phase === "idle") return null;

  const getTransform = () => {
    if (phase === "exit") return "translateY(-100%)";
    return "translateY(0%)";
  };

  const getTransition = () => {
    if (phase === "color") {
      return `background-color ${COLOR_DURATION}ms ease-in-out`;
    }
    if (phase === "hold") {
      return `background-color ${COLOR_DURATION}ms ease-in-out`;
    }
    if (phase === "exit") {
      return `transform ${EXIT_DURATION}ms ease-in-out, background-color ${COLOR_DURATION}ms ease-in-out`;
    }
    return "none";
  };

  const getAnimation = () => {
    if (phase === "enter") {
      return `pt-slide-down ${SLIDE_DURATION}ms ease-in-out forwards`;
    }
    return "none";
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor,
        transform: getTransform(),
        transition: getTransition(),
        animation: getAnimation(),
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
