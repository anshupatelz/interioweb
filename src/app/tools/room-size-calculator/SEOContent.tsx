import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SEO_FAQS, CONTENT_SECTIONS } from "./seo-content"

export function FAQSection() {
    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                    Everything you need to know about room measurements, calculations, and space planning.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {SEO_FAQS.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export function DetailedContentSection() {
    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Complete Guide to Room Measurements</h2>
                <p className="text-muted-foreground">
                    Professional insights on measuring rooms, calculating materials, and planning your space effectively.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {CONTENT_SECTIONS.map((section, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="text-xl">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm leading-relaxed">
                                {section.content}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

// Structured Data for SEO
export function generateStructuredData() {
    const baseUrl = "https://interioweb.com" // Update with your actual domain

    const webApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Room Size Calculator",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any",
        "description": "Free online room size calculator for accurate measurements. Calculate square footage, wall area, paint needs, and flooring materials. Supports rectangular, square, L-shaped, and circular rooms.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": [
            "Multiple room shapes (rectangular, square, L-shaped, circular)",
            "Room type presets for quick calculations",
            "Real-time measurement calculations",
            "Paint and flooring material estimates",
            "Square footage and volume calculations",
            "Metric and imperial units support",
            "Room size categorization",
            "Furniture placement recommendations"
        ]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": SEO_FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": `${baseUrl}/tools`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Room Size Calculator",
                "item": `${baseUrl}/tools/room-size-calculator`
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webApplicationSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
        </>
    )
}
