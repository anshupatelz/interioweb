import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, CheckCircle2, Target, Sparkles, Handshake } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About InterioWeb | Digital Solutions for Interior Designers",
    description: "Learn how InterioWeb helps interior designers build stunning online presences, attract more clients, and grow their businesses through websites, SEO, and branding.",
}

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Empowering <span className="text-secondary">Interior Designers</span> Online
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            We believe every talented interior designer deserves a stunning digital presence
                            that attracts their dream clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                InterioWeb was born from a simple observation: many incredibly talented interior designers
                                struggle to showcase their work online. They create beautiful spaces but lack the time,
                                technical skills, or resources to build an effective digital presence.
                            </p>
                            <p>
                                We set out to change that. Our team combines expertise in web design, SEO, and digital
                                marketing with a deep appreciation for interior design. We speak your language and understand
                                your unique needs.
                            </p>
                            <p>
                                Today, we've helped hundreds of interior designers launch stunning websites, rank higher in
                                Google search results, and attract their ideal clients online.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Our <span className="text-secondary">Mission & Values</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="rounded-xl border">
                                <CardHeader>
                                    <div className="mb-4 text-secondary"><Target className="h-8 w-8" /></div>
                                    <CardTitle>Designer-First Approach</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Every solution we create is tailored specifically for interior designers.
                                        We understand your industry, your clients, and your challenges.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="rounded-xl border">
                                <CardHeader>
                                    <div className="mb-4 text-secondary"><Sparkles className="h-8 w-8" /></div>
                                    <CardTitle>Quality & Beauty</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Just like your design work, our websites and branding materials are crafted
                                        with attention to detail and aesthetic excellence.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="rounded-xl border">
                                <CardHeader>
                                    <div className="mb-4 text-secondary"><Handshake className="h-8 w-8" /></div>
                                    <CardTitle>Partnership & Support</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        We're not just a vendor—we're your digital partner. From initial consultation
                                        to ongoing support, we're here for you.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Makes Us Different</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Interior Design Expertise</h3>
                                    <p className="text-muted-foreground">
                                        We understand portfolio presentation, client psychology, and the unique needs
                                        of design businesses.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Free Professional Tools</h3>
                                    <p className="text-muted-foreground">
                                        Our collection of calculators and design tools helps you save time and serve
                                        your clients better—completely free.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Results-Driven SEO</h3>
                                    <p className="text-muted-foreground">
                                        We focus on local search optimization that actually brings qualified leads to
                                        your business, not just vanity metrics.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                                    <p className="text-muted-foreground">
                                        No hidden fees, no surprises. We provide clear, upfront pricing and custom
                                        proposals for every project.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="text-lg mb-10 opacity-90">
                            Join hundreds of interior designers who trust InterioWeb to help them grow online.
                        </p>
                        <Link href="/get-started">
                            <Button size="lg" variant="secondary" className="min-w-[250px] h-14 text-base font-semibold shadow-xl rounded-full">
                                Get Started Today
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
