// Introduction section component with keyword-rich content

import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Ruler, DollarSign, CheckCircle2 } from "lucide-react"

export function IntroSection() {
    const features = [
        {
            icon: Calculator,
            title: "Accurate Calculations",
            description: "Calculate exact tile quantities for floors and walls with grout spacing",
        },
        {
            icon: Ruler,
            title: "Multiple Units",
            description: "Support for feet, meters, inches, cm, and mm measurements",
        },
        {
            icon: DollarSign,
            title: "Cost Estimation",
            description: "Estimate total project cost with box or per-tile pricing",
        },
        {
            icon: CheckCircle2,
            title: "Waste Allowance",
            description: "Automatically add 10-20% waste for cuts and future repairs",
        },
    ]

    return (
        <div className="my-12 space-y-6">
            {/* Keyword-rich intro text */}
            <Card className="rounded-xl border bg-secondary/5">
                <CardContent className="pt-6">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Our <strong>free tile calculator</strong> helps you determine exactly how many tiles you need for your
                            flooring or wall project. Whether you're planning a bathroom renovation, kitchen backsplash, or entire
                            home flooring project, this <strong>tile estimator</strong> provides accurate calculations including
                            waste allowance, grout spacing, and cost estimation.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Calculate tiles for ceramic, porcelain, natural stone, or luxury vinyl tile (LVT) installations.
                            Simply enter your room dimensions or total area, select your tile size from our presets
                            (12×12, 18×18, 24×24, and more), and get instant results with professional recommendations.
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
