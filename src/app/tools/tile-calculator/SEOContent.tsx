// SEO Content Display Components

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SEO_FAQS, CONTENT_SECTIONS } from "./seo-content"
import { HelpCircle, BookOpen } from "lucide-react"

export function FAQSection() {
    return (
        <Card className="mt-8 rounded-xl border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                    <HelpCircle className="h-6 w-6 text-secondary" />
                    Frequently Asked Questions
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {SEO_FAQS.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-semibold hover:text-secondary">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}

export function DetailedContentSection() {
    return (
        <div className="mt-8 space-y-6">
            <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl md:text-3xl font-bold">Complete Tile Calculator Guide</h2>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                {CONTENT_SECTIONS.map((section, index) => (
                    <Card key={index} className="rounded-xl border overflow-hidden">
                        <CardHeader className="bg-secondary/5">
                            <CardTitle className="text-xl">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground leading-relaxed text-justify">
                                {section.content}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export function TileCalculatorSchema() {
    // JSON-LD Schema for SEO
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Advanced Tile Calculator",
        "applicationCategory": "UtilityApplication",
        "description": "Professional tile calculator with advanced options for accurate material estimation, cost calculation, and project planning. Calculate tiles needed for floor and wall installations with waste allowance.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": [
            "Calculate tiles needed by dimensions or total area",
            "Support for multiple measurement units (feet, meters, inches, cm, mm)",
            "Built-in tile size presets (12×12, 18×18, 24×24, and more)",
            "Adjustable waste percentage (5-20%)",
            "Grout line spacing calculator",
            "Cost estimation with box or per-tile pricing",
            "Professional installation tips",
        ],
        "browserRequirements": "Requires JavaScript",
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function BreadcrumbSchema() {
    // Breadcrumb schema for search results
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://interioweb.com",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": "https://interioweb.com/tools",
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Tile Calculator",
                "item": "https://interioweb.com/tools/tile-calculator",
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
    )
}

export function FAQSchema() {
    // JSON-LD FAQ Schema for rich snippets in search results
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": SEO_FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    )
}
