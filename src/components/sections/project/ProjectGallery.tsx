import { useEffect, useState, useRef } from "react";
import type { Project } from "../../../data/projects";

interface ProjectGalleryProps {
  project: Project;
}

/**
 * Assigns column spans based on image index for visual variety.
 * Pattern repeats: 4+8, 8+4, 6+6, 12 (full), ...
 */
function getColSpan(index: number, total: number): string {
  // Single image → full width
  if (total === 1) return "md:col-span-12";

  // Two images → 4+8
  if (total === 2) {
    return index === 0
      ? "md:col-span-6 xl:col-span-4"
      : "md:col-span-6 xl:col-span-8";
  }

  // 3+ images → alternating pattern
  const pattern = index % 4;
  switch (pattern) {
    case 0:
      return "md:col-span-6 xl:col-span-4";
    case 1:
      return "md:col-span-6 xl:col-span-8";
    case 2:
      return "md:col-span-6 xl:col-span-8";
    case 3:
      return "md:col-span-6 xl:col-span-4";
    default:
      return "md:col-span-6";
  }
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (project.gallery.length === 0) return null;

  return (
    <section
      ref={ref}
      className={`px-3 py-8 transition-all duration-[1.2s] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {project.gallery.map((image, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-sm ${getColSpan(i, project.gallery.length)}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
