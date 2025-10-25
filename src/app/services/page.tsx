import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { services } from "@/lib/data"
import { ArrowRight, CheckCircle2, MonitorSmartphone, TrendingUp, Palette } from "lucide-react"
import { Metadata } from "next"

import type { ComponentType, SVGProps } from "react"

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>
const serviceIconMap: Record<string, LucideIcon> = {
    MonitorSmartphone,
    TrendingUp,
    Palette,
}

export const metadata: Metadata = {
    title: "Services for Interior Designers | InterioWeb",
    description: "Professional website design, SEO, and branding services tailored for interior designers. Build your digital presence and attract more clients.",
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Services for <span className="text-secondary">Interior Designers</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Comprehensive digital solutions to help you build a stunning online presence,
                            attract more clients, and grow your interior design business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {services.map((service) => (
                            <Card key={service.id} className="rounded-xl border hover:border-secondary/40 transition-transform hover:-translate-y-0.5 hover:shadow-md">
                                <CardHeader>
                                    <div className="mb-4 text-secondary">
                                        {(() => {
                                            const Icon = serviceIconMap[service.icon as keyof typeof serviceIconMap]
                                            return Icon ? <Icon className="h-10 w-10" aria-hidden /> : null
                                        })()}
                                    </div>
                                    <CardTitle className="text-3xl mb-4 tracking-tight">{service.title}</CardTitle>
                                    <CardDescription className="text-lg leading-relaxed">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/services/${service.slug}`}>
                                        <Button size="lg" className="w-full group rounded-full">
                                            Learn More
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg mb-10 opacity-90">
                            Let's discuss how we can help transform your interior design business online.
                        </p>
                        <Link href="/get-started">
                            <Button size="lg" variant="secondary" className="min-w-[200px] h-14 text-base font-semibold shadow-xl rounded-full">
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
