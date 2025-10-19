import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Attendance Percentage Calculator - Track Your Academic Attendance | Aimpur Tools",
    description: "Free online attendance calculator to calculate your attendance percentage instantly and find out how many classes you need to attend to meet requirements.",
    keywords: [
        "attendance percentage calculator",
        "class attendance tracker",
        "attendance calculator online",
        "student attendance planner",
        "academic attendance tool",
        "college attendance calculator",
        "university attendance tracker",
        "attendance percentage formula",
        "minimum attendance calculator",
        "attendance requirement calculator",
        "student calculator tools",
        "academic planning tools"
    ],
    authors: [{ name: "Aimpur Tools" }],
    creator: "Aimpur Tools",
    publisher: "Aimpur Tools",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://aimpur.com/tools"),
    alternates: {
        canonical: "/attendance-percentage-calculator",
    },
    openGraph: {
        title: "Attendance Percentage Calculator - Track Your Academic Attendance",
        description: "Calculate your attendance percentage instantly and find out how many classes you need to attend to meet requirements. Free online calculator with planning tools.",
        url: "/attendance-percentage-calculator",
        siteName: "Aimpur Tools",
        images: [
            {
                url: "/aimpur-tools-og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Attendance Percentage Calculator - Aimpur Tools",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Attendance Percentage Calculator - Track Your Academic Attendance",
        description: "Calculate your attendance percentage instantly and find out how many classes you need to attend to meet requirements. Free online calculator.",
        images: ["/aimpur-tools-og-image.jpg"],
        creator: "@aimpurtools",
    },
}

export default function AttendancePercentageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
