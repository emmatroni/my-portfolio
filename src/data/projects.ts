export interface ProjectImage {
  src: string;
  alt: string;
  /** "full" = full width, "half" = 50% side by side */
  size: "full" | "half";
}

export interface Project {
  /** URL slug: /projects/erberto-carboni */
  slug: string;
  name: string;
  field: string;
  attrs: string[];
  year: string;
  location: string;
  /** Theme color for the project page background */
  color: string;
  /** Hero image displayed at the top */
  heroImage: string;
  /** Sections of text content */
  about: string;
  challenges: string;
  features: string;
  /** External links */
  links: {
    label: string;
    url: string;
  }[];
  /** Gallery images at the bottom */
  gallery: ProjectImage[];
}

const projects: Project[] = [
  {
    slug: "erberto-carboni",
    name: "Erberto Carboni",
    field: "Branding",
    attrs: ["Editorial", "Visual Identity", "Typography"],
    year: "2024",
    location: "Milan, Italy",
    color: "#0051DC",
    heroImage: "/projects/erberto-carboni/hero.jpg",
    about:
      "Petra has captured imaginations for centuries, but few can witness its beauty in person. In collaboration with Google, we created a virtual experience that gives people everywhere a chance to explore the UNESCO World Heritage site in extraordinary detail, unlocking new ways to discover one of the world's most iconic places.\n\nPetra has captured imaginations for centuries, but few can witness its beauty in person. In collaboration with Google, we created a virtual experience that gives people everywhere a chance to explore the UNESCO World Heritage site in extraordinary detail, unlocking new ways to discover one of the world's most iconic.",
    challenges:
      "The challenge entrusted was to put pep and coherence back into the ageing and frozen visual identity of the family business. How to translate the taste emotions felt by the consumer when he discovers the benefits of aromatic herbs in the mouth? It was a matter of designing a visual universe that values both the freshness of the products and their ability to awaken sensations full of colours and surprises.",
    features: "",
    links: [
      { label: "Brand", url: "#" },
      { label: "Website", url: "#" },
    ],
    gallery: [
      { src: "/projects/erberto-carboni/gallery-1.jpg", alt: "Erberto Carboni stickers", size: "half" },
      { src: "/projects/erberto-carboni/gallery-2.jpg", alt: "Erberto Carboni book", size: "half" },
    ],
  },
  {
    slug: "seres-srl",
    name: "Seres Srl",
    field: "Branding",
    attrs: ["Visual Identity", "Web Design", "Print"],
    year: "2024",
    location: "Venice, Italy",
    color: "#8B3A3A",
    heroImage: "/projects/seres-srl/hero.jpg",
    about:
      "Petra has captured imaginations for centuries, but few can witness its beauty in person. In collaboration with Google, we created a virtual experience that gives people everywhere a chance to explore the UNESCO World Heritage site in extraordinary detail, unlocking new ways to discover one of the world's most iconic places.\n\nPetra has captured imaginations for centuries, but few can witness its beauty in person. In collaboration with Google, we created a virtual experience that gives people everywhere a chance to explore the UNESCO World Heritage site in extraordinary detail, unlocking new ways to discover one of the world's most iconic.",
    challenges:
      "The challenge entrusted was to put pep and coherence back into the ageing and frozen visual identity of the family business. How to translate the taste emotions felt by the consumer when he discovers the benefits of aromatic herbs in the mouth? It was a matter of designing a visual universe that values both the freshness of the products and their ability to awaken sensations full of colours and surprises.",
    features: "",
    links: [
      { label: "Brand", url: "#" },
      { label: "Website", url: "#" },
    ],
    gallery: [
      { src: "/projects/seres-srl/gallery-1.jpg", alt: "Seres tote bag", size: "half" },
      { src: "/projects/seres-srl/gallery-2.jpg", alt: "Seres brand collateral", size: "half" },
    ],
  },
];

export default projects;