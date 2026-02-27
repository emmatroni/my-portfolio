// reference: https://codepen.io/Hyperplexed/full/BaxROox

import { useEffect, useRef } from "react";

// ─── Settings ───
const IMAGE_WIDTH = 200; // px
const IMAGE_HEIGHT = 280; // px
const MOVE_THRESHOLD = 100; // min px mouse must move before spawning
const DELAY_BETWEEN = 80; // min ms between spawns
const FADE_DURATION = 1500; // ms before image fades out
const MAX_IMAGES = 20; // max simultaneous images on screen

interface ImageTrailProps {
  /** Array of image URLs to cycle through */
  images: string[];
  className?: string;
  children?: React.ReactNode;
}

export default function ImageTrail({
  images,
  className = "",
  children,
}: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    currentIndex: 0,
    lastPos: { x: 0, y: 0 },
    lastTime: 0,
    activeImages: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || images.length === 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      const state = stateRef.current;
      const now = Date.now();

      // Calculate distance from last spawn
      const dx = e.clientX - state.lastPos.x;
      const dy = e.clientY - state.lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only spawn if moved enough and enough time passed
      if (distance < MOVE_THRESHOLD || now - state.lastTime < DELAY_BETWEEN)
        return;
      if (state.activeImages >= MAX_IMAGES) return;

      // Get position relative to container
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create image element
      const img = document.createElement("img");
      img.src = images[state.currentIndex % images.length];
      img.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${IMAGE_WIDTH}px;
        height: ${IMAGE_HEIGHT}px;
        object-fit: cover;
        border-radius: 4px;
        pointer-events: none;
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 0;
        transition: transform 400ms ease-out, opacity 300ms ease-out;
        z-index: ${state.currentIndex};
      `;

      container.appendChild(img);
      state.activeImages++;

      // Trigger entrance animation
      requestAnimationFrame(() => {
        img.style.transform = "translate(-50%, -50%) scale(1)";
        img.style.opacity = "1";
      });

      // Fade out and remove
      setTimeout(() => {
        img.style.opacity = "0";
        img.style.transform = "translate(-50%, -50%) scale(0.8)";
        setTimeout(() => {
          img.remove();
          state.activeImages--;
        }, 400);
      }, FADE_DURATION);

      // Update state
      state.currentIndex++;
      state.lastPos = { x: e.clientX, y: e.clientY };
      state.lastTime = now;
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [images]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
