// SEO components for Paint Calculator

"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { PAINT_CALCULATOR_FAQS, PAINT_CALCULATOR_CONTENT } from "./seo-content"

export function FAQSection() {
    return (
        <section className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                    Get answers to common questions about paint calculations, coverage, and application
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {PAINT_CALCULATOR_FAQS.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-semibold">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
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
        <section className="space-y-12">
            <div>
                <h2 className="text-3xl font-bold mb-2">Complete Guide to Paint Calculation</h2>
                <p className="text-muted-foreground">
                    Everything you need to know about calculating paint requirements, choosing finishes, and achieving professional results
                </p>
            </div>
            <div className="space-y-10">
                {PAINT_CALCULATOR_CONTENT.map((section) => (
                    <Card key={section.id} className="rounded-xl border">
                        <CardContent className="p-6 md:p-8 space-y-4">
                            <h3 className="text-2xl font-bold">{section.title}</h3>
                            <div className="prose prose-gray max-w-none">
                                {section.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

// JSON-LD Schema for Paint Calculator
export function PaintCalculatorSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Paint Calculator",
        "description": "Free online paint calculator to accurately calculate how much paint you need for your room painting project. Calculate paint coverage, number of coats, primer requirements, and project costs.",
        "url": "https://interioweb.com/tools/paint-calculator",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": [
            "Calculate paint needed for any room size",
            "Support for multiple paint finishes",
            "Primer calculation",
            "Multiple coats calculation",
            "Door and window deduction",
            "Cost estimation",
            "Metric and imperial units",
            "International currency support"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

// FAQ Schema for search engines
export function FAQSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": PAINT_CALCULATOR_FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

// Breadcrumb Schema
export function BreadcrumbSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://interioweb.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": "https://interioweb.com/tools"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Paint Calculator",
                "item": "https://interioweb.com/tools/paint-calculator"
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
