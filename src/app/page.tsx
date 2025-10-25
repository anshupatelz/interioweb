import Link from "next/link"
import Image from "next/image"
import type { ComponentType, SVGProps } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { services, tools, testimonials } from "@/lib/data"
import { ArrowRight, CheckCircle2, Star, MonitorSmartphone, TrendingUp, Palette, LayoutGrid, Paintbrush, Ruler, Layers, ScrollText, Scissors, BadgeCheck } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>

const serviceIconMap: Record<string, LucideIcon> = {
    MonitorSmartphone,
    TrendingUp,
    Palette,
}

const toolIconMap: Record<string, LucideIcon> = {
    LayoutGrid,
    Paintbrush,
    Ruler,
    Layers,
    ScrollText,
    Scissors,
}

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background image */}
                <Image
                    src="/how-to-run-a-profitable-interior-design-business.jpg"
                    alt="Interior design workspace inspiration background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-80"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/75 to-background" />
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium/normal bg-secondary/15 text-primary border-secondary/30">
                            For Interior Designers
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Build Your Dream
                            <span className="block text-secondary mt-2">Design Business Online</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                            From stunning websites to powerful SEO and free design calculators — everything you need
                            to attract more clients and grow your interior design business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link href="/get-started">
                                <Button size="lg" className="min-w-[200px] h-14 text-base font-semibold rounded-full px-6 shadow-sm hover:shadow-md">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/tools">
                                <Button size="lg" variant="outline" className="min-w-[200px] h-14 text-base font-semibold rounded-full px-6">
                                    Explore Free Tools
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Services Built for <span className="text-secondary">Interior Designers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Everything you need to establish and grow your online presence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service) => (
                            <Card key={service.id} className="rounded-xl border hover:border-secondary/40 transition-transform hover:-translate-y-0.5 hover:shadow-md">
                                <CardHeader>
                                    <div className="mb-4 text-secondary">
                                        {(() => {
                                            const Icon = serviceIconMap[service.icon as keyof typeof serviceIconMap]
                                            return Icon ? <Icon className="h-10 w-10" aria-hidden /> : null
                                        })()}
                                    </div>
                                    <CardTitle className="text-2xl mb-2 tracking-tight">{service.title}</CardTitle>
                                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/services/${service.slug}`}>
                                        <Button variant="outline" className="w-full group rounded-full">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/services">
                            <Button size="lg" variant="secondary">
                                View All Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section id="tools" className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Free <span className="text-secondary">Design Calculators</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Save time with our collection of professional interior design tools
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {tools.map((tool) => (
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
                                        <CardTitle className="text-xl tracking-tight">{tool.title}</CardTitle>
                                        <CardDescription>{tool.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/tools">
                            <Button size="lg">
                                View All Tools
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section with carousel */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Loved by <span className="text-secondary">Interior Designers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            See what our clients have to say about their experience
                        </p>
                    </div>

                    <Carousel className="max-w-6xl mx-auto" opts={{ align: "start", slidesToScroll: 1, loop: true }}>
                        <CarouselContent>
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="rounded-xl border h-full">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex gap-1">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Image src="/google-g.svg" alt="Google Reviews" width={18} height={18} />
                                                    <span className="text-xs text-muted-foreground">Google Reviews</span>
                                                </div>
                                            </div>
                                            <CardDescription className="text-base italic leading-relaxed">
                                                &quot;{testimonial.text}&quot;
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="font-semibold flex items-center gap-1">
                                                <BadgeCheck className="h-4 w-4 text-emerald-500" /> {testimonial.name}
                                            </div>
                                            <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                                            <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-6" />
                        <CarouselNext className="-right-6" />
                    </Carousel>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Grow Your Design Business?
                        </h2>
                        <p className="text-lg mb-12 opacity-90">
                            Join hundreds of interior designers who have transformed their online presence with InterioWeb.
                        </p>
                        <Link href="/get-started">
                            <Button size="lg" variant="secondary" className="min-w-[250px] h-14 text-base font-semibold shadow-xl">
                                Get Started Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <p className="text-sm mt-6 opacity-75">
                            No credit card required • Free consultation • 24hr response time
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
