"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2 } from "lucide-react"

interface LeadFormProps {
    source?: string
    title?: string
    description?: string
    showProjectDetails?: boolean
}

export default function LeadForm({
    source = "general",
    title = "Get Started with InterioWeb",
    description = "Let's discuss how we can help elevate your interior design business.",
    showProjectDetails = true
}: LeadFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        projectDetails: "",
        source: source
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus("success")
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    businessName: "",
                    projectDetails: "",
                    source: source
                })
            } else {
                setSubmitStatus("error")
            }
        } catch (error) {
            console.error("Form submission error:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {submitStatus === "success" && (
                    <Alert className="mb-6 border-secondary bg-secondary/10">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <AlertDescription className="text-secondary-foreground">
                            Thank you! We'll be in touch within 24 hours.
                        </AlertDescription>
                    </Alert>
                )}

                {submitStatus === "error" && (
                    <Alert className="mb-6 border-destructive bg-destructive/10">
                        <AlertDescription className="text-destructive">
                            Something went wrong. Please try again or email us directly.
                        </AlertDescription>
                    </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="businessName">Business Name</Label>
                            <Input
                                id="businessName"
                                name="businessName"
                                type="text"
                                value={formData.businessName}
                                onChange={handleChange}
                                placeholder="Your Design Studio"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    {showProjectDetails && (
                        <div className="space-y-2">
                            <Label htmlFor="projectDetails">Tell us about your project</Label>
                            <Textarea
                                id="projectDetails"
                                name="projectDetails"
                                rows={4}
                                value={formData.projectDetails}
                                onChange={handleChange}
                                placeholder="What services are you interested in? Any specific goals or challenges?"
                                disabled={isSubmitting}
                            />
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                        size="lg"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
