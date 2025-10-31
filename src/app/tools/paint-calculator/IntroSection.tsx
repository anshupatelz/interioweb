// Introduction section component with keyword-rich content

import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Droplet, DollarSign, Layers } from "lucide-react"

export function IntroSection() {
    const features = [
        {
            icon: Calculator,
            title: "Accurate Calculations",
            description: "Calculate exact paint quantities for walls and ceilings with multiple coats",
        },
        {
            icon: Droplet,
            title: "Multiple Finishes",
            description: "Support for flat, eggshell, satin, semi-gloss, and high-gloss paints",
        },
        {
            icon: DollarSign,
            title: "Cost Estimation",
            description: "Estimate total project cost including paint and primer requirements",
        },
        {
            icon: Layers,
            title: "Smart Features",
            description: "Automatic door/window deduction and primer calculation included",
        },
    ]

    return (
        <div className="my-12 space-y-6">
            {/* Keyword-rich intro text */}
            <Card className="rounded-xl border bg-secondary/5">
                <CardContent className="pt-6">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Our <strong>free paint calculator</strong> helps you determine exactly how much paint you need for your
                            interior or exterior painting project. Whether you're planning a single room refresh, complete home
                            makeover, or commercial painting project, this <strong>paint estimator</strong> provides accurate
                            calculations including primer requirements, multiple coats, and cost estimation.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Calculate paint for any finish type including flat, eggshell, satin, semi-gloss, or high-gloss paints.
                            Simply enter your room dimensions, select paint finish, specify number of coats (1-3), and get instant
                            results with professional recommendations. Supports both feet and meters with international currency options.
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
