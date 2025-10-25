"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { tools } from "@/lib/data"
import { Search, LayoutGrid, Paintbrush, Ruler, Layers, ScrollText, Scissors } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>
const toolIconMap: Record<string, LucideIcon> = {
    LayoutGrid,
    Paintbrush,
    Ruler,
    Layers,
    ScrollText,
    Scissors,
}

export default function ToolsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const categories = Array.from(new Set(tools.map(tool => tool.category)))

    const filteredTools = tools.filter(tool => {
        const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = !selectedCategory || tool.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Free <span className="text-secondary">Design Calculators</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Professional tools for interior designers and homeowners.
                            Calculate materials, estimate costs, and plan projects with confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-12 bg-background border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search tools..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-12"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Button
                                variant={selectedCategory === null ? "default" : "outline"}
                                size="sm"
                                className="rounded-full"
                                onClick={() => setSelectedCategory(null)}
                            >
                                All
                            </Button>
                            {categories.map(category => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    size="sm"
                                    className="rounded-full"
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {filteredTools.map((tool) => (
                            <Link key={tool.id} href={`/tools/${tool.slug}`}>
                                <Card className="cursor-pointer h-full rounded-xl border hover:border-secondary/40 hover:shadow-md transition-transform hover:-translate-y-0.5">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="mb-2 text-secondary">
                                                {(() => {
                                                    const Icon = toolIconMap[tool.icon as keyof typeof toolIconMap]
                                                    return Icon ? <Icon className="h-8 w-8" aria-hidden /> : null
                                                })()}
                                            </div>
                                            <Badge variant="outline" className="text-xs bg-background/60">{tool.category}</Badge>
                                        </div>
                                        <CardTitle className="text-xl tracking-tight mb-2">{tool.title}</CardTitle>
                                        <CardDescription>{tool.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {filteredTools.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">No tools found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Need Help with Your <span className="text-secondary">Interior Design Project?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10">
                            Our team can help you with professional website design, SEO, and branding services.
                        </p>
                        <Link href="/get-started">
                            <Button size="lg" className="rounded-full">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
