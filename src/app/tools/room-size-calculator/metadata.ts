import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Room Size Calculator - Free Room Measurement Tool | Calculate Square Footage & Paint Needs",
    description: "Professional room size calculator for accurate measurements. Calculate floor area, wall area, perimeter, volume, paint needs, and carpet requirements. Supports rectangular, square, L-shaped, and circular rooms. Get furniture recommendations and project estimates instantly.",
    keywords: [
        "room size calculator",
        "room measurement calculator",
        "floor area calculator",
        "room dimensions calculator",
        "square footage calculator",
        "room volume calculator",
        "how to measure a room",
        "room calculator",
        "calculate room size",
        "room area calculator",
        "wall area calculator",
        "L-shaped room calculator",
        "paint calculator by room size",
        "flooring calculator",
        "carpet calculator",
    ],
    openGraph: {
        title: "Free Room Size Calculator - Calculate Room Measurements & Material Needs",
        description: "Professional room measurement tool. Calculate floor area, wall area, and volume for rectangular, square, L-shaped, and circular rooms. Get instant paint, carpet, and furniture recommendations.",
        type: "website",
        url: "https://interioweb.com/tools/room-size-calculator",
        siteName: "InterioWeb",
        images: [
            {
                url: "/og-room-calculator.png",
                width: 1200,
                height: 630,
                alt: "Room Size Calculator - Measure Any Room Shape",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Professional Room Size Calculator | InterioWeb",
        description: "Calculate room measurements for any shape. Get floor area, wall area, volume, and project estimates instantly.",
        images: ["/og-room-calculator.png"],
    },
    alternates: {
        canonical: "https://interioweb.com/tools/room-size-calculator",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "Home Improvement Tools",
}
