import { Metadata } from "next"

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
        title: "Free Paint Calculator - Calculate Paint Needed for Any Project",
        description: "Professional paint calculator with coverage rates, multiple finishes, primer calculation, and cost estimation for accurate project planning.",
        type: "website",
        images: [
            {
                url: "/og-paint-calculator.png",
                width: 1200,
                height: 630,
                alt: "Paint Calculator Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Professional Paint Calculator",
        description: "Calculate paint needed for your interior or exterior painting project. Includes primer and cost estimation."
    },
    alternates: {
        canonical: "/tools/paint-calculator"
    }
}
