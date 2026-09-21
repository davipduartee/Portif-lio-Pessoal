import { site } from "@/lib/site";

/**
 * Dados estruturados que alimentam o resultado local do Google.
 *
 * TODO(cliente): quando houver endereço comercial e perfil no Google Business,
 * acrescentar streetAddress, postalCode, geo (GeoCoordinates) e openingHours —
 * é o que mais pesa no pacote local. Deixamos de fora por ora em vez de
 * declarar um endereço que não existe.
 */
export function dadosEstruturados() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organizacao`,
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phoneE164,
    inLanguage: "pt-BR",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "State", name: site.stateName },
    ],
    knowsAbout: [
      "Marketing para concessionárias",
      "Gestão de tráfego pago para venda de veículos",
      "CRM para o funil automotivo",
      "Automação de atendimento com inteligência artificial",
    ],
    sameAs: [site.social.instagram, site.social.linkedin].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soluções DL Company",
      itemListElement: [
        "Criação Identitária no Digital",
        "CRM de Leads próprio para concessionárias",
        "Automação com Inteligência Artificial",
        "Gestão de Tráfego Pago",
      ].map((nome) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: nome, areaServed: site.city },
      })),
    },
  };
}
