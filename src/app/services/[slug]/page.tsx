import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LeadForm from "@/components/LeadForm"
import { services } from "@/lib/data"
import { CheckCircle2, ArrowLeft, MonitorSmartphone, TrendingUp, Palette } from "lucide-react"
import { Metadata } from "next"
import type { ComponentType, SVGProps } from "react"

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>
const serviceIconMap: Record<string, LucideIcon> = {
    MonitorSmartphone,
    TrendingUp,
    Palette,
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        return {
            title: "Service Not Found | InterioWeb",
        }
    }

    return {
        title: `${service.title} for Interior Designers | InterioWeb`,
        description: service.description,
    }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors bg-secondary/10 rounded-lg px-3 py-1">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Services
                        </Link>

                        <div className="mb-4 text-secondary flex justify-center">
                            {(() => {
                                const Icon = serviceIconMap[service.icon as keyof typeof serviceIconMap]
                                return Icon ? <Icon className="h-10 w-10" aria-hidden /> : null
                            })()}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            {service.title}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">
                            What's <span className="text-secondary">Included</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            {service.features.map((feature, idx) => (
                                <Card key={idx} className="rounded-xl border">
                                    <CardHeader>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                                            <CardTitle className="text-lg">{feature}</CardTitle>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>

                        <Card className="rounded-xl border border-secondary/30 bg-accent/30">
                            <CardHeader>
                                <CardTitle className="text-2xl">Why This Matters for Interior Designers</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                {service.slug === "website-design" && (
                                    <>
                                        <p>Your website is often the first impression potential clients have of your interior design business. A professionally designed, mobile-responsive website showcases your portfolio beautifully and makes it easy for clients to contact you.</p>
                                        <p>With InterioWeb, you get a custom website that reflects your unique design aesthetic and converts visitors into paying clients.</p>
                                    </>
                                )}
                                {service.slug === "seo-marketing" && (
                                    <>
                                        <p>The best interior design portfolio means nothing if potential clients can't find you online. Strategic SEO helps you appear in Google search results when people in your area search for interior designers.</p>
                                        <p>Our SEO services are specifically tailored for interior designers, focusing on local search, portfolio optimization, and content that attracts your ideal clients.</p>
                                    </>
                                )}
                                {service.slug === "branding" && (
                                    <>
                                        <p>A cohesive brand identity sets you apart in a competitive market and helps clients remember you. From your logo to your business cards, every touchpoint should reflect your design philosophy and professionalism.</p>
                                        <p>We create brand identities that resonate with your target audience and position you as the go-to interior designer in your market.</p>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Lead Form Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to <span className="text-secondary">Get Started?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Fill out the form below and we'll get back to you within 24 hours with a custom proposal.
                        </p>
                    </div>

                    <LeadForm
                        source={`service-${service.slug}`}
                        title={`Get Started with ${service.title}`}
                        description="Tell us about your project and we'll create a custom proposal for you."
                    />
                </div>
            </section>

            <Footer />
        </div>
    )
}
