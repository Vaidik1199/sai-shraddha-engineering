import { company } from "@/data/company";

const siteUrl = "https://sai-shradha-engineering.vercel.app";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: company.name,
        url: siteUrl,
        logo: `${siteUrl}/images/logo/sai-shradha-logo.png`,
        image: `${siteUrl}/images/hero/sai-shradha-engineering-facility-exterior.jpeg`,
        description: company.description,
        telephone: `+91-${company.contact.phone}`,
        email: company.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${company.address.line1}, ${company.address.line2}`,
          addressLocality: company.address.city,
          addressRegion: company.address.state,
          postalCode: company.address.postalCode,
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: "Pune",
        },
        knowsAbout: company.services,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: company.name,
        description: company.description,
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}