// Introduction section component with keyword-rich content

import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Ruler, Home, CheckCircle2 } from "lucide-react"

export function IntroSection() {
    const features = [
        {
            icon: Calculator,
            title: "Accurate Measurements",
            description: "Calculate floor area, wall area, perimeter, and volume for any room shape",
        },
        {
            icon: Ruler,
            title: "Multiple Shapes",
            description: "Support for rectangular, square, L-shaped, and circular rooms",
        },
        {
            icon: Home,
            title: "Room Presets",
            description: "Quick calculations with standard bedroom, kitchen, and living room sizes",
        },
        {
            icon: CheckCircle2,
            title: "Project Estimates",
            description: "Get paint, carpet, and furniture recommendations based on room size",
        },
    ]

    return (
        <div className="my-12 space-y-6">
            {/* Keyword-rich intro text */}
            <Card className="rounded-xl border bg-secondary/5">
                <CardContent className="pt-6">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Our <strong>free room size calculator</strong> helps you accurately measure any room in your home
                            or office. Whether you're planning a renovation, buying furniture, calculating paint needs, or
                            estimating flooring materials, this <strong>room measurement calculator</strong> provides precise
                            calculations for floor area, wall area, perimeter, and room volume. Perfect for homeowners,
                            interior designers, contractors, and DIY enthusiasts.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Calculate dimensions for rectangular rooms, square rooms, L-shaped spaces, and even circular rooms.
                            Simply enter your measurements in feet or meters, and get instant <strong>square footage calculations</strong>,
                            paint estimates, carpet requirements, and HVAC sizing recommendations. This professional{" "}
                            <strong>floor area calculator</strong> includes preset dimensions for common rooms like bedrooms,
                            living rooms, kitchens, and bathrooms, making it the most comprehensive{" "}
                            <strong>room dimensions calculator</strong> available online.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                        <Card key={index} className="rounded-xl border hover:border-secondary/50 transition-colors">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <Icon className="h-6 w-6 text-secondary" />
                                    </div>
                                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
