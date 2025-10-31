// Professional tips section component

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PROFESSIONAL_TIPS } from "./constants"

export function ProfessionalTips() {
    return (
        <Card className="mt-8 rounded-xl border">
            <CardHeader>
                <CardTitle>Professional Tips</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                {PROFESSIONAL_TIPS.map((tip) => (
                    <div key={tip.number} className="space-y-2">
                        <h4 className="font-semibold text-sm flex items-center gap-2">
                            <span className="h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs">
                                {tip.number}
                            </span>
                            {tip.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
