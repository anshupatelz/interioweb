// Layout for Paint Calculator page

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Paint Calculator - Calculate How Much Paint You Need | Free Tool",
    description: "Free paint calculator to accurately calculate how much paint you need for any room. Calculate paint coverage, coats, primer requirements, and project costs. Supports all paint finishes and provides instant results.",
    keywords: [
        "paint calculator",
        "how much paint do i need",
        "paint coverage calculator",
        "room paint calculator",
        "interior paint calculator",
        "paint estimate calculator",
        "gallons of paint needed",
        "paint cost calculator",
        "wall paint calculator",
        "primer calculator",
        "paint finish calculator",
        "painting project calculator",
        "paint quantity calculator",
        "how many gallons of paint",
        "calculate paint for room"
    ],
    openGraph: {
        title: "Paint Calculator - Calculate How Much Paint You Need",
        description: "Free online paint calculator. Calculate paint coverage, number of coats, primer requirements, and total project costs for any room size.",
        type: "website",
        url: "https://interioweb.com/tools/paint-calculator",
        siteName: "InterioWeb",
        images: [
            {
                url: "/og-paint-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Paint Calculator Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Paint Calculator - Calculate How Much Paint You Need",
        description: "Free paint calculator for accurate paint quantity estimation. Calculate coverage, coats, and costs instantly.",
        images: ["/og-paint-calculator.jpg"]
    },
    alternates: {
        canonical: "https://interioweb.com/tools/paint-calculator"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
}

export default function PaintCalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
