import { useEffect, useRef } from "react";

// ─── Settings ───
const IMAGE_WIDTH = 200;
const IMAGE_HEIGHT = 280;
const MOVE_THRESHOLD = 100;
const DELAY_BETWEEN = 80;
const FADE_DURATION = 1500;
const MAX_IMAGES = 20;

export interface TrailImage {
  src: string;
  slug: string;
}

interface ImageTrailProps {
  images: TrailImage[];
  className?: string;
  children?: React.ReactNode;
  onImageClick?: (slug: string) => void;
}

export default function ImageTrail({
  images,
  className = "",
  children,
  onImageClick,
}: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastImgRef = useRef<HTMLImageElement | null>(null);
  const lastSlugRef = useRef<string>("");
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

      const dx = e.clientX - state.lastPos.x;
      const dy = e.clientY - state.lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOVE_THRESHOLD || now - state.lastTime < DELAY_BETWEEN)
        return;
      if (state.activeImages >= MAX_IMAGES) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const imageData = images[state.currentIndex % images.length];

      // remove pointer-events from previous last image
      if (lastImgRef.current) {
        lastImgRef.current.style.pointerEvents = "none";
        lastImgRef.current.style.cursor = "default";
      }

      const img = document.createElement("img");
      img.src = imageData.src;
      img.dataset.slug = imageData.slug;
      img.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${IMAGE_WIDTH}px;
        height: ${IMAGE_HEIGHT}px;
        object-fit: cover;
        border-radius: 4px;
        pointer-events: auto;
        cursor: pointer;
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 0;
        transition: transform 400ms ease-out, opacity 300ms ease-out;
        z-index: ${state.currentIndex};
      `;

      // Click handler on this image
      img.addEventListener("click", () => {
        if (onImageClick) onImageClick(imageData.slug);
      });

      container.appendChild(img);
      state.activeImages++;

      // Track as last image
      lastImgRef.current = img;
      lastSlugRef.current = imageData.slug;

      // Entrance animation
      requestAnimationFrame(() => {
        img.style.transform = "translate(-50%, -50%) scale(1)";
        img.style.opacity = "1";
      });

      // Fade out and remove
      setTimeout(() => {
        img.style.opacity = "0";
        img.style.transform = "translate(-50%, -50%) scale(0.8)";
        img.style.pointerEvents = "none";

        // If this was the last image, clear ref
        if (lastImgRef.current === img) {
          lastImgRef.current = null;
        }

        setTimeout(() => {
          img.remove();
          state.activeImages--;
        }, 400);
      }, FADE_DURATION);

      state.currentIndex++;
      state.lastPos = { x: e.clientX, y: e.clientY };
      state.lastTime = now;
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [images, onImageClick]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
