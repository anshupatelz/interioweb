// Professional room measurement tips component

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb } from "lucide-react"
import { PROFESSIONAL_TIPS } from "./constants"

export function ProfessionalTips() {
    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-secondary" />
                        Professional Measurement Tips
                    </CardTitle>
                    <Badge variant="secondary">Expert Advice</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                    {PROFESSIONAL_TIPS.map((tip, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-lg border bg-card hover:bg-secondary/5 transition-colors"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-xs font-bold flex-shrink-0 mt-0.5">
                                    {index + 1}
                                </div>
                                <div className="space-y-1 flex-1">
                                    <h4 className="font-semibold text-sm">{tip.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {tip.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
