import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tile Calculator - Free Flooring & Wall Tile Estimator | InterioWeb",
    description: "Professional tile calculator for floors and walls. Calculate tiles needed, estimate costs, account for waste, and plan your project. Supports all tile sizes with grout spacing calculator. Free tool with expert tips.",
    keywords: [
        "tile calculator",
        "tile estimator",
        "floor tile calculator",
        "wall tile calculator",
        "tile square footage calculator",
        "how many tiles do I need",
        "tile cost calculator",
        "grout calculator",
        "tile waste calculator",
        "flooring calculator",
        "tile measurement calculator",
    ],
    openGraph: {
        title: "Free Tile Calculator - Calculate Tiles Needed for Any Project",
        description: "Professional tile calculator with advanced features. Calculate floor and wall tiles, estimate costs, add waste allowance, and get expert installation tips.",
        type: "website",
        images: [
            {
                url: "/og-tile-calculator.png",
                width: 1200,
                height: 630,
                alt: "Tile Calculator Tool",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Professional Tile Calculator",
        description: "Calculate tiles needed for your floor or wall project. Includes cost estimation and waste allowance.",
    },
    alternates: {
        canonical: "/tools/tile-calculator",
    },
}
