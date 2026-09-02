import type { MetadataRoute } from "next";

const baseUrl = "https://sai-shradha-engineering.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/products`,
    },
    {
      url: `${baseUrl}/products/ms-fabrication`,
    },
    {
      url: `${baseUrl}/products/ss-fabrication`,
    },
    {
      url: `${baseUrl}/products/structural-fabrication`,
    },
    {
      url: `${baseUrl}/products/industrial-fabrication`,
    },
    {
      url: `${baseUrl}/products/custom-fabrication`,
    },
    {
      url: `${baseUrl}/products/machine-equipment`,
    },
    {
      url: `${baseUrl}/products/welding-assembly`,
    },
  ];
}