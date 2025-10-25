import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LeadForm from "@/components/LeadForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Get Started | InterioWeb - Transform Your Interior Design Business",
    description: "Start your journey to a stunning online presence. Get a custom proposal for your interior design business within 24 hours.",
}

export default function GetStartedPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Let's Build Something <span className="text-secondary">Beautiful</span> Together
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Tell us about your interior design business and we'll create a custom proposal
                            tailored to your goals and budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left Column - Benefits */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">What Happens Next?</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-secondary/10 rounded-lg p-2 mr-4">
                                            <div className="text-2xl font-bold text-secondary">1</div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                                            <p className="text-muted-foreground">
                                                We'll schedule a call to discuss your business, goals, and vision.
                                                This is completely free with no obligation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-secondary/10 rounded-lg p-2 mr-4">
                                            <div className="text-2xl font-bold text-secondary">2</div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Custom Proposal</h3>
                                            <p className="text-muted-foreground">
                                                Based on our conversation, we'll create a detailed proposal with
                                                pricing, timeline, and deliverables.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-secondary/10 rounded-lg p-2 mr-4">
                                            <div className="text-2xl font-bold text-secondary">3</div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Project Kickoff</h3>
                                            <p className="text-muted-foreground">
                                                Once you approve, we'll start bringing your vision to life.
                                                You'll have a dedicated project manager throughout.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Card className="rounded-xl border border-secondary/30 bg-accent/20">
                                <CardHeader>
                                    <CardTitle>Why Work With InterioWeb?</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>24-hour response time guaranteed</span>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Specialized in interior design industry</span>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Transparent pricing, no hidden fees</span>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Ongoing support and maintenance available</span>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>100% satisfaction guarantee</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Form */}
                        <div>
                            <LeadForm
                                source="get-started"
                                title="Start Your Project"
                                description="Fill out this form and we'll get back to you within 24 hours."
                                showProjectDetails={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Frequently Asked <span className="text-secondary">Questions</span>
                        </h2>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>How much do your services cost?</CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    <p>
                                        Every project is unique, so we create custom proposals based on your specific needs.
                                        Website projects typically start around $2,500, SEO packages from $500/month, and branding
                                        projects from $1,500. We'll provide detailed pricing during your consultation.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>How long does it take to build a website?</CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    <p>
                                        Most website projects are completed within 4-6 weeks from kickoff. Complex projects with
                                        extensive portfolios may take 8-10 weeks. We'll provide a detailed timeline in your proposal.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Do you offer ongoing maintenance and support?</CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    <p>
                                        Yes! We offer monthly maintenance packages that include updates, backups, security monitoring,
                                        and content changes. We also provide training so you can make simple updates yourself if you prefer.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Can you help if I already have a website?</CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    <p>
                                        Absolutely! We can redesign existing websites, add new features, improve SEO, or provide
                                        ongoing maintenance. We'll evaluate your current site and recommend the best path forward.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
