export type Product = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
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
  },
  {
    id: "repair-modification",
    number: "08",
    title: "Repair & Modification",
    shortTitle: "Repair",
    description:
      "Repair, modification, and improvement work for existing fabricated structures, components, and equipment.",
    details:
      "We assess the required modification or repair and provide a practical fabrication solution based on the existing setup.",
  },
];