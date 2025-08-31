# Project Structure

src/
├── components/
│ ├── common/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ ├── sections/
│ │ ├── Hero.tsx
│ │ ├── Work.tsx
│ │ ├── About.tsx
│ │ └── Contact.tsx
│ └── ui/
│ ├── CustomCursor.tsx
├── pages/
│ ├── Home.tsx
│ └── projects/
│ ├── ProjectOne.tsx
│ ├── ProjectTwo.tsx
│ └── ProjectThree.tsx
├── types/
│ └── index.ts
├── data/
│ └── projects.ts
├── assets/
│ └── images/
├── styles/
│ └── index.css
├── App.tsx
└── main.tsx

- types/ = "What shape should this data have?" (the blueprint)
- data/ = "Here's the actual data" (the content)

## types/ folder

contains TypeScript interfaces and type definitions that are used across multiple components. Keep it focused on reusable types that define data structures and component contracts.

```js
// types/index.ts
export interface Project {
  id: string
  name: string
  field: string
  attributes: string[]
  year: number
  route: string
  description?: string
  client?: string
}
```

## data/ folder

data/ folder Contains actual data - the real values, content, and information your app uses:

```js
// data/projects.ts
import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ecommerce-redesign",
    name: "E-commerce Platform Redesign",
    field: "UI/UX DESIGN",
    attributes: ["REACT", "TYPESCRIPT", "FIGMA"],
    year: 2024,
    route: "/project/ecommerce-redesign",
    description: "Complete redesign of checkout flow...",
    client: "TechCorp Inc.",
  },
  {
    id: "mobile-app",
    name: "Mobile Banking App",
    field: "MOBILE DEV",
    attributes: ["REACT NATIVE", "API", "SECURITY"],
    year: 2023,
    route: "/project/mobile-app",
  },
  // More actual project data...
];

export const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const contactInfo = {
  email: "hello@yoursite.com",
  phone: "+1 234 567 8900",
  location: "Milan, Italy",
};
```
