interface NavLabel {
  id: string;
  text: string;
}

interface SectionNavProps {
  active: string;
}

const labels: NavLabel[] = [
  { id: "work", text: "Work" },
  { id: "about", text: "About" },
  { id: "contact", text: "Let's Talk" },
];

export default function SectionNav({ active }: SectionNavProps) {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-3 border-b border-white/5 text-[10px] uppercase tracking-[0.25em]">
      {labels.map((label) => (
        <a
          key={label.id}
          href={`#${label.id}`}
          className={`transition-colors duration-300 ${
            active === label.id
              ? "text-white"
              : "text-white/30 hover:text-white/60"
          }`}
        >
          {active === label.id && <span className="mr-1">●</span>}
          {label.text}
        </a>
      ))}
    </div>
  );
}
