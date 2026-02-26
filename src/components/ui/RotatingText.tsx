// Animation used in About.tsx section
// reference: https://www.fancycomponents.dev/docs/components/text/text-rotate
// ANIMATION:
// - spring: Può avere un leggero overshoot/rimbalzo (damping: quanto frena, stiffness: quanto è rigida)
// - ease options: "linear", "easeIn", "easeOut", "easeInOut"
// - cubic-bezier: ease: [0.4, 0, 0.2, 1]
// - inertia: usato più per gesture/drag, meno per animazioni di entrata

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

interface RotatingTextProps {
  words: string[];
  interval?: number;
}

export default function RotatingText({
  words,
  interval = 2500,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLSpanElement>(null);

  const updateWidth = useCallback(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.scrollWidth);
    }
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(updateWidth);
    return () => cancelAnimationFrame(raf);
  }, [index, updateWidth]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className="inline-flex relative overflow-hidden h-[1.15em] align-baseline"
      style={{
        width: width ? `${width}px` : "auto",
        transition: "width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          ref={measureRef}
          className="inline-flex"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-120%", opacity: 0, position: "absolute" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {words[index].split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.03,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
