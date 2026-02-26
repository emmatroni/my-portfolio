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
  {
  slug: "atelier-vento",
  name: "Atelier Vento",
  field: "Branding",
  attrs: ["Visual Identity", "Packaging", "Art Direction"],
  year: "2023",
  location: "Florence, Italy",
  color: "#2F5D50",
  heroImage: "/projects/atelier-vento/hero.jpg",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  challenges:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  features: "",
  links: [
    { label: "Brand", url: "#" },
    { label: "Website", url: "#" },
  ],
  gallery: [
    { src: "/projects/atelier-vento/gallery-1.jpg", alt: "Atelier Vento packaging", size: "half" },
    { src: "/projects/atelier-vento/gallery-2.jpg", alt: "Atelier Vento identity", size: "half" },
  ],
},
{
  slug: "nord-form",
  name: "Nord Form",
  field: "Product Design",
  attrs: ["Industrial Design", "Branding", "3D"],
  year: "2024",
  location: "Copenhagen, Denmark",
  color: "#3A4653",
  heroImage: "/projects/nord-form/hero.jpg",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  challenges:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  features: "",
  links: [
    { label: "Brand", url: "#" },
    { label: "Website", url: "#" },
  ],
  gallery: [
    { src: "/projects/nord-form/gallery-1.jpg", alt: "Nord Form product", size: "half" },
    { src: "/projects/nord-form/gallery-2.jpg", alt: "Nord Form details", size: "half" },
  ],
},
{
  slug: "studio-lumen",
  name: "Studio Lumen",
  field: "Web Design",
  attrs: ["UI Design", "UX Design", "Development"],
  year: "2025",
  location: "Berlin, Germany",
  color: "#111111",
  heroImage: "/projects/studio-lumen/hero.jpg",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.",
  challenges:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  features: "",
  links: [
    { label: "Brand", url: "#" },
    { label: "Website", url: "#" },
  ],
  gallery: [
    { src: "/projects/studio-lumen/gallery-1.jpg", alt: "Studio Lumen interface", size: "half" },
    { src: "/projects/studio-lumen/gallery-2.jpg", alt: "Studio Lumen layout", size: "half" },
  ],
},
{
  slug: "oro-cafe",
  name: "Oro Café",
  field: "Branding",
  attrs: ["Visual Identity", "Packaging", "Print"],
  year: "2022",
  location: "Barcelona, Spain",
  color: "#C6A15B",
  heroImage: "/projects/oro-cafe/hero.jpg",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  challenges:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  features: "",
  links: [
    { label: "Brand", url: "#" },
    { label: "Website", url: "#" },
  ],
  gallery: [
    { src: "/projects/oro-cafe/gallery-1.jpg", alt: "Oro Café packaging", size: "half" },
    { src: "/projects/oro-cafe/gallery-2.jpg", alt: "Oro Café cups", size: "half" },
  ],
},
{
  slug: "altura-tech",
  name: "Altura Tech",
  field: "Digital Product",
  attrs: ["UI Design", "UX Design", "Design System"],
  year: "2025",
  location: "Amsterdam, Netherlands",
  color: "#4A6CFA",
  heroImage: "/projects/altura-tech/hero.jpg",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
  challenges:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  features: "",
  links: [
    { label: "Brand", url: "#" },
    { label: "Website", url: "#" },
  ],
  gallery: [
    { src: "/projects/altura-tech/gallery-1.jpg", alt: "Altura dashboard", size: "half" },
    { src: "/projects/altura-tech/gallery-2.jpg", alt: "Altura mobile UI", size: "half" },
  ],
},
];

export default projects;