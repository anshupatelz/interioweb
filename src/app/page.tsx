import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LandingPage() {
    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-5xl mx-auto">
                        <Badge variant="secondary" className="mb-6 px-4 py-2 text-secondary bg-secondary/10 border-secondary/20">
                            Essential Tools for Students
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Your All-in-One
                            <span className="text-secondary block"> Academic Toolkit</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                            Access a comprehensive collection of calculators and tools designed specifically for students. From CGPA converters to salary calculators - everything you need in one place.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link href="#tools">
                                <Button size="lg" variant="secondary" className="min-w-60 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                                    Explore Tools
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary mb-1">7+</div>
                                <div className="text-xs text-primary-muted-foreground">Tools Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary mb-1">1k+</div>
                                <div className="text-xs text-primary-muted-foreground">Calculations Done</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                                <div className="text-xs text-primary-muted-foreground">Accurate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                                <div className="text-xs text-primary-muted-foreground">Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section id="tools" className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Essential Tools & Calculators</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Access a comprehensive collection of free tools designed to simplify calculations
                            and boost productivity for students.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Academic Tools */}
                        <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer">
                            <Link href="/percentage-to-cgpa-calculator">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-lg">Percentage to CGPA</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Convert your percentage marks to CGPA using standard conversion formulas for different educational boards.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer">
                            <Link href="/cgpa-to-percentage-calculator">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-lg">CGPA to Percentage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Convert your CGPA to percentage marks for job applications, higher studies, and academic requirements.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer">
                            <Link href="/attendance-percentage-calculator">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-lg">Attendance Calculator</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Track your attendance percentage and calculate how many classes you need to maintain required attendance.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer">
                            <Link href="/age-calculator">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-lg">Age Calculator</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Calculate your exact age in years, months, and days for college applications, competitive exams, and academic requirements.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer">
                            <Link href="/marks-to-percentage-calculator">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-lg">Marks to Percentage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Convert your exam marks to percentage instantly. Calculate individual subject and overall percentages with detailed breakdowns.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer">
                            <Link href="/negative-marking-calculator">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-lg">Negative Marking Calculator</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Calculate your competitive exam score with negative marking for JEE, NEET, UPSC, SSC, and other exams.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer">
                            <Link href="/grade-calculator">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-lg">Grade Calculator</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Calculate weighted course grades with assignments, tests, and exams. Get letter grades, GPA, and final exam predictions.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        {/* Professional Tools */}
                        {/* <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer relative">
                            <div className="pointer-events-none">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-lg">Hourly to Salary Calculator</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Convert hourly wages to annual salary and vice versa. Calculate take-home pay after taxes and deductions.
                                    </p>
                                </CardContent>
                            </div>
                            <Badge className="absolute top-4 right-4 bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-100">
                                Coming Soon
                            </Badge>
                        </Card> */}
                    </div>
                </div >
            </section >

            {/* Features Section */}
            < section id="features" className="py-24 bg-muted/30" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Aimpur Tools?</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Our platform provides accurate, fast, and reliable calculators designed specifically
                            for students to simplify their academic calculations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        <Card className="border-2 hover:border-primary/20 transition-colors">
                            <CardHeader className="pb-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl text-center">100% Free Forever</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground leading-relaxed">
                                    All our tools are completely free to use. No hidden charges, no subscription fees,
                                    and no registration required. Just calculate and go!
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:border-primary/20 transition-colors">
                            <CardHeader className="pb-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl text-center">Lightning Fast Results</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground leading-relaxed">
                                    Get instant results with our optimized calculators. No waiting time,
                                    no complex processes - just enter your data and get accurate results immediately.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:border-primary/20 transition-colors">
                            <CardHeader className="pb-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl text-center">Accurate & Reliable</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground leading-relaxed">
                                    All calculations are based on standard formulas and are thoroughly tested
                                    to ensure 100% accuracy for your academic and professional needs.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section >

            {/* About Section */}
            < section id="about" className="py-24 bg-background" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Aimpur Tools</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Aimpur Tools is designed to be your go-to platform for essential academic calculations.
                            We understand the challenges students face with complex calculations, and we're here to simplify them.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                To provide free, accurate, and user-friendly tools that help students to
                                make quick calculations without the hassle of complex formulas or expensive software.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Student-Focused</h4>
                                        <p className="text-sm text-muted-foreground">Built specifically for academic needs and requirements</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Professional Ready</h4>
                                        <p className="text-sm text-muted-foreground">Career-focused tools for salary calculations and planning</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Always Free</h4>
                                        <p className="text-sm text-muted-foreground">No charges, no subscriptions, no hidden fees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Card className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Academic Excellence</h4>
                                        <p className="text-sm text-muted-foreground">CGPA, GPA, and grade calculations made simple</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Career Planning</h4>
                                        <p className="text-sm text-muted-foreground">Salary and financial planning tools for students</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="py-24 bg-primary text-primary-foreground" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Start Using Our Free Tools Today
                        </h2>
                        <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
                            Join thousands of students who trust Aimpur Tools for their
                            academic and career calculations. No registration required - just click and calculate!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#tools">
                                <Button size="lg" variant="secondary" className="min-w-52 h-12 font-semibold">
                                    Explore All Tools
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

            {/* Footer */}
            <Footer />

        </div >
    )
}