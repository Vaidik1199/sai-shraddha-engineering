export type Product = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  image?: string;
};

export const products: Product[] = [
  {
    id: "ms-fabrication",
    number: "01",
    title: "MS Fabrication",
    shortTitle: "Mild Steel",
    description:
      "Reliable mild steel fabrication work developed around required dimensions, drawings, and application requirements.",
    details:
      "From customized components to structural and industrial fabrication, we focus on accurate fabrication, strong joints, and dependable finishing.",
    image: "/images/products/rectangular-fabricated-steel-assemblies.jpeg",
  },

  {
    id: "ss-fabrication",
    number: "02",
    title: "SS Fabrication",
    shortTitle: "Stainless Steel",
    description:
      "Precision stainless steel fabrication for applications where durability, finish, and corrosion resistance matter.",
    details:
      "We undertake customized stainless steel fabrication according to customer specifications, dimensions, and drawings.",
    image: "/images/products/stainless-steel-mixing-tank.jpeg",
  },

  {
    id: "structural-fabrication",
    number: "03",
    title: "Structural Fabrication",
    shortTitle: "Structures",
    description:
      "Fabrication of structural components designed to meet project-specific dimensions and requirements.",
    details:
      "Our work covers customized structural fabrication with attention to strength, alignment, workmanship, and practical installation requirements.",
    image: "/images/work/large-structural-fabrication-frame.jpeg",
  },

  {
    id: "industrial-fabrication",
    number: "04",
    title: "Industrial Fabrication",
    shortTitle: "Industrial",
    description:
      "Fabrication solutions for industrial and engineering applications requiring dependable workmanship and precision.",
    details:
      "We work according to customer requirements, drawings, specifications, and site or application needs.",
    image: "/images/products/fabricated-process-vessel.jpeg",
  },

  {
    id: "custom-fabrication",
    number: "05",
    title: "Custom Fabrication",
    shortTitle: "Customized",
    description:
      "Made-to-requirement fabrication for components and solutions that need a specific design, dimension, or application.",
    details:
      "Customers can share their drawings, dimensions, specifications, or requirements and we develop the fabrication accordingly.",
    image: "/images/work/custom-curved-fabrication.jpeg",
  },

  {
    id: "machine-equipment",
    number: "06",
    title: "Machine & Equipment",
    shortTitle: "Equipment",
    description:
      "Customized fabrication of machine and equipment components for specific industrial and engineering requirements.",
    details:
      "Solutions are developed around the intended application, dimensions, material requirements, and customer specifications.",
    image: "/images/products/large-custom-industrial-machine-assembly.jpeg",
  },

  {
    id: "welding-assembly",
    number: "07",
    title: "Welding & Assembly",
    shortTitle: "Assembly",
    description:
      "Welding and assembly work focused on strong, accurate, and reliable fabrication.",
    details:
      "Suitable welding and assembly techniques are used according to the material, component, and project requirements.",
    image: "/images/products/fabricated-impeller-assembly.jpeg",
  },
];