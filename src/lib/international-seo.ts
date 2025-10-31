// International SEO utilities and metadata

export interface HreflangTag {
    hreflang: string
    href: string
}

export function generateHreflangTags(pathname: string): HreflangTag[] {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://interioweb.com"

    return [
        { hreflang: "x-default", href: `${baseUrl}${pathname}` },
        { hreflang: "en", href: `${baseUrl}${pathname}` },
        { hreflang: "en-US", href: `${baseUrl}/en-us${pathname}` },
        { hreflang: "en-GB", href: `${baseUrl}/en-gb${pathname}` },
        { hreflang: "en-CA", href: `${baseUrl}/en-ca${pathname}` },
        { hreflang: "en-AU", href: `${baseUrl}/en-au${pathname}` },
        { hreflang: "en-IN", href: `${baseUrl}/en-in${pathname}` },
    ]
}

export function generateCanonicalUrl(pathname: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://interioweb.com"
    return `${baseUrl}${pathname}`
}

// Geo-targeting metadata for different regions
export const GEO_METADATA = {
    "US": {
        title: "Interior Design Website Design & SEO Services | InterioWeb",
        description: "Professional website design, SEO, and branding for interior designers in the USA. Custom websites starting at $2,499 with free design calculators.",
        currency: "USD",
        phone: "+1 (555) 123-4567",
    },
    "GB": {
        title: "Interior Design Website Design & SEO Services | InterioWeb UK",
        description: "Professional website design, SEO, and branding for interior designers in the UK. Custom websites starting at £1,999 with free design calculators.",
        currency: "GBP",
        phone: "+44 20 1234 5678",
    },
    "CA": {
        title: "Interior Design Website Design & SEO Services | InterioWeb Canada",
        description: "Professional website design, SEO, and branding for interior designers in Canada. Custom websites starting at C$3,399 with free design calculators.",
        currency: "CAD",
        phone: "+1 (555) 123-4567",
    },
    "AU": {
        title: "Interior Design Website Design & SEO Services | InterioWeb Australia",
        description: "Professional website design, SEO, and branding for interior designers in Australia. Custom websites starting at A$3,799 with free design calculators.",
        currency: "AUD",
        phone: "+61 2 1234 5678",
    },
    "IN": {
        title: "Interior Design Website Design & SEO Services | InterioWeb India",
        description: "Professional website design, SEO, and branding for interior designers in India. Custom websites starting at ₹1,99,999 with free design calculators.",
        currency: "INR",
        phone: "+91 12345 67890",
    },
    "AE": {
        title: "Interior Design Website Design & SEO Services | InterioWeb UAE",
        description: "Professional website design, SEO, and branding for interior designers in UAE. Custom websites starting at د.إ9,199 with free design calculators.",
        currency: "AED",
        phone: "+971 4 123 4567",
    },
}

// Structured data for organization with international presence
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "InterioWeb",
        "url": process.env.NEXT_PUBLIC_SITE_URL || "https://interioweb.com",
        "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://interioweb.com"}/logo.png`,
        "description": "Professional website design, SEO, and branding services for interior designers worldwide.",
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Australia" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "United Arab Emirates" },
        ],
        "knowsLanguage": ["en", "es", "fr", "de", "it", "pt", "ja"],
    }
}
