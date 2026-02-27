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
    field: "Editorial Design",
    attrs: ["Graphic Design", "Magazine", "Print"],
    year: "2024",
    location: "Milan, Italy",
    color: "#0051DC",
    heroImage: "/projects/erberto-carboni/hero.jpg",
    about: `This project was developed within the university workshop DesignVerso at the Politecnico di Milano. 
DesignVerso is an editorial series that collects monographic magazine prototypes created by first-year students in the Foundations of Design studio of the Communication Design program. Since 2014, the project has explored contemporary editorial design through digitally printed publications enriched with audiovisual content and animated covers.\n\nOur task was to design a monographic issue dedicated to Erberto Carboni. The magazine explores his contribution to visual communication, architecture, and advertising through a combination of research, typography, and image-driven layouts. The project merges archival material with contemporary editorial approaches to present Carboni’s work in a clear and engaging way, translating his design language into a modern publication format.`,
    challenges: `The main challenge was translating the work of Erberto Carboni into a contemporary editorial language. Rather than replicating his style, the goal was to interpret the principles behind his work and adapt them to a modern magazine format.\n\nAnother key aspect was organizing historical references, images, and research into a clear narrative structure. The project required developing a strong typographic hierarchy and a flexible grid system capable of accommodating different types of content, including archival posters, photographs, articles on art and design, and interviews.\n\nFinally, the design of the digital experience had to align with the DesignVerso series while giving the issue its own distinct character.`,
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
    year: "2023",
    location: "Venice, Italy",
    color: "#8B3A3A",
    heroImage: "/projects/seres-srl/hero.jpg",
    about:
      "Petra has captured imaginations for centuries, but few can witness its beauty in person. In collaboration with Google, we created a virtual experience that gives people everywhere a chance to explore the UNESCO World Heritage site in extraordinary detail, unlocking new ways to discover one of the world's most iconic places.\n\nPetra has captured imaginations for centuries, but few can witness its beauty in person. In collaboration with Google, we created a virtual experience that gives people everywhere a chance to explore the UNESCO World Heritage site in extraordinary detail, unlocking new ways to discover one of the world's most iconic.",
    challenges:
      "The challenge entrusted was to put pep and coherence back into the ageing and frozen visual identity of the family business. How to translate the taste emotions felt by the consumer when he discovers the benefits of aromatic herbs in the mouth? It was a matter of designing a visual universe that values both the freshness of the products and their ability to awaken sensations full of colours and surprises.",
    links: [
      { label: "Brand", url: "#" },
      { label: "Website", url: "#" },
    ],
    gallery: [
      { src: "/projects/seres-srl/gallery-2.png", alt: "Seres tote bag", size: "half" },
      { src: "/projects/seres-srl/gallery-1.jpg", alt: "Seres brand collateral", size: "half" },
    ],
  },
  {
    slug: "vaglio-and-partners",
    name: "Vaglio And Partners",
    field: "Branding",
    attrs: ["Brand Identity", "Web Design"],
    year: "2024",
    location: "Milan, Italy",
    color: "#10273C",
    heroImage: "/projects/vaglio-and-partners/hero.png",
    about:
      "Creation of a unique brand image for a consulting firm based in Milan, specialized in organizational and managerial development for businesses across Italy. The color palette reflects the company’s core values of security, building positive relationships with clients, and trust. The design aims to communicate these principles while positioning the company as a reliable partner for business growth and success.",
    challenges:
      "The challenge entrusted was to create a practical and evocative visual identity of the business. ",
    links: [
      { label: "Brand", url: "#" },
      { label: "Website", url: "#" },
    ],
    gallery: [
      { src: "/projects/vaglio-and-partners/gallery-1.jpg", alt: "Buisness cards", size: "half" },
      { src: "/projects/vaglio-and-partners/gallery-2.jpg", alt: "Logo", size: "half" },
    ],
  },
];

export default projects;