"use client"

import { useState } from "react"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ResponsiveContainer, XAxis, YAxis, ReferenceLine, Pie, PieChart, Area, AreaChart } from "recharts"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AttendancePercentagePage() {
    const [totalClasses, setTotalClasses] = useState("")
    const [attendedClasses, setAttendedClasses] = useState("")
    const [requiredPercentage, setRequiredPercentage] = useState("")
    const [currentPercentage, setCurrentPercentage] = useState("")
    const [classesNeeded, setClassesNeeded] = useState("")
    const [canSkip, setCanSkip] = useState("")

    const calculateAttendance = () => {
        const total = parseFloat(totalClasses)
        const attended = parseFloat(attendedClasses)
        const required = parseFloat(requiredPercentage)

        if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0 || attended > total) {
            setCurrentPercentage("Invalid input")
            setClassesNeeded("")
            setCanSkip("")
            return
        }

        // Calculate current percentage
        const current = (attended / total) * 100
        setCurrentPercentage(current.toFixed(2))

        // Calculate classes needed to meet requirement (if specified)
        if (!isNaN(required) && required > 0 && required <= 100) {
            if (current >= required) {
                // Calculate how many classes can be skipped
                const maxSkippable = Math.floor(attended / (required / 100) - total)
                setCanSkip(maxSkippable.toString())
                setClassesNeeded("0")
            } else {
                // Calculate classes needed to reach requirement
                const needed = Math.ceil((required * total - attended * 100) / (100 - required))
                setClassesNeeded(needed > 0 ? needed.toString() : "0")
                setCanSkip("0")
            }
        } else {
            setClassesNeeded("")
            setCanSkip("")
        }
    }

    const clearFields = () => {
        setTotalClasses("")
        setAttendedClasses("")
        setRequiredPercentage("")
        setCurrentPercentage("")
        setClassesNeeded("")
        setCanSkip("")
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Attendance Percentage Calculator",
        "description": "Calculate your attendance percentage and plan for meeting attendance requirements",
        "url": "https://aimpurtools.com/attendance-percentage",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Any",
        "permissions": "No registration required",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "creator": {
            "@type": "Organization",
            "name": "Aimpur Tools"
        }
    }

    const faqData = [
        {
            question: "How is attendance percentage calculated?",
            answer: "Attendance percentage is calculated using the formula: (Classes Attended ÷ Total Classes Held) × 100. For example, if you attended 45 out of 50 classes, your attendance is (45 ÷ 50) × 100 = 90%."
        },
        {
            question: "What is the minimum attendance requirement in most institutions?",
            answer: "Most universities and colleges require a minimum attendance of 75%. However, this can vary from 70% to 85% depending on the institution's policies and specific courses."
        },
        {
            question: "What happens if I don't meet the minimum attendance requirement?",
            answer: "Consequences may include being barred from exams, receiving reduced grades, having to repeat the course, or in severe cases, academic probation. Some institutions offer medical or genuine excuse considerations."
        },
        {
            question: "How many classes can I skip while maintaining required attendance?",
            answer: "This depends on your current attendance and total classes. Our calculator shows exactly how many classes you can afford to skip while staying above the minimum requirement."
        },
        {
            question: "Can I improve my attendance percentage if it's below requirement?",
            answer: "Yes, by attending all future classes, your percentage will gradually improve. Our calculator shows how many consecutive classes you need to attend to reach your target percentage."
        }
    ]

    const exampleScenarios = [
        {
            scenario: "Good Standing",
            total: 50,
            attended: 45,
            percentage: 90,
            status: "Above Requirement",
            color: "#16a34a"
        },
        {
            scenario: "Meeting Minimum",
            total: 40,
            attended: 30,
            percentage: 75,
            status: "Exactly at Requirement",
            color: "#eab308"
        },
        {
            scenario: "Below Requirement",
            total: 60,
            attended: 40,
            percentage: 66.67,
            status: "Needs Improvement",
            color: "#dc2626"
        },
        {
            scenario: "Critical Level",
            total: 30,
            attended: 18,
            percentage: 60,
            status: "Urgent Attention",
            color: "#dc2626"
        }
    ]

    // Get attendance status color
    const getAttendanceStatus = (percentage: number) => {
        if (percentage >= 90) return { status: "Excellent", color: "#16a34a", message: "Outstanding attendance!" }
        if (percentage >= 80) return { status: "Good", color: "#22c55e", message: "Good attendance record" }
        if (percentage >= 75) return { status: "Satisfactory", color: "#eab308", message: "Meeting requirements" }
        if (percentage >= 70) return { status: "Warning", color: "#f97316", message: "Close to minimum" }
        if (percentage >= 60) return { status: "Critical", color: "#f59e0b", message: "Below requirements" }
        return { status: "Failing", color: "#dc2626", message: "Immediate action needed" }
    }

    // Generate attendance projection data
    const getProjectionData = () => {
        if (!totalClasses || !attendedClasses || currentPercentage === "Invalid input") return []

        const total = parseFloat(totalClasses)
        const attended = parseFloat(attendedClasses)
        const current = parseFloat(currentPercentage)

        const projectionData = []
        for (let i = 0; i <= 20; i++) {
            const newTotal = total + i
            const newAttended = attended + i // assuming all future classes are attended
            const newPercentage = (newAttended / newTotal) * 100
            projectionData.push({
                futureClasses: i,
                percentage: parseFloat(newPercentage.toFixed(2)),
                total: newTotal
            })
        }
        return projectionData
    }

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <div className="min-h-screen bg-background">
                {/* Header */}
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-12 md:pb-16 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <Badge variant="secondary" className="mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-secondary bg-secondary/10 border-secondary/20">
                                Academic Tracker
                            </Badge>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
                                Attendance Percentage Calculator
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-primary-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                                Track your class attendance, calculate your percentage, and plan how many classes you need to attend
                                to meet your institution's requirements.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-8 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
                            {/* Calculator Card */}
                            <div className="w-full">
                                <Card className="border-2 shadow-lg h-fit">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-xl md:text-2xl text-center">Calculate Attendance</CardTitle>
                                        <p className="text-sm text-muted-foreground text-center">
                                            Enter your attendance details to get insights and planning recommendations
                                        </p>
                                    </CardHeader>
                                    <CardContent className="space-y-4 md:space-y-6">
                                        {/* Total Classes Input */}
                                        <div>
                                            <Label htmlFor="totalClasses" className="text-sm font-medium">
                                                Total Classes Held
                                            </Label>
                                            <Input
                                                id="totalClasses"
                                                type="number"
                                                placeholder="Enter total number of classes"
                                                value={totalClasses}
                                                onChange={(e) => setTotalClasses(e.target.value)}
                                                min="1"
                                                step="1"
                                                className="mt-2 text-base"
                                            />
                                            {totalClasses && parseFloat(totalClasses) <= 0 && (
                                                <p className="text-xs md:text-sm text-destructive mt-1">Please enter a valid number of classes</p>
                                            )}
                                        </div>

                                        {/* Attended Classes Input */}
                                        <div>
                                            <Label htmlFor="attendedClasses" className="text-sm font-medium">
                                                Classes Attended
                                            </Label>
                                            <Input
                                                id="attendedClasses"
                                                type="number"
                                                placeholder="Enter classes you attended"
                                                value={attendedClasses}
                                                onChange={(e) => setAttendedClasses(e.target.value)}
                                                min="0"
                                                step="1"
                                                className="mt-2 text-base"
                                            />
                                            {attendedClasses && totalClasses && parseFloat(attendedClasses) > parseFloat(totalClasses) && (
                                                <p className="text-xs md:text-sm text-destructive mt-1">Attended classes cannot exceed total classes</p>
                                            )}
                                        </div>

                                        {/* Required Percentage Input */}
                                        <div>
                                            <Label htmlFor="requiredPercentage" className="text-sm font-medium">
                                                Required Percentage (Optional)
                                            </Label>
                                            <Input
                                                id="requiredPercentage"
                                                type="number"
                                                placeholder="Enter minimum required percentage (e.g., 75)"
                                                value={requiredPercentage}
                                                onChange={(e) => setRequiredPercentage(e.target.value)}
                                                min="1"
                                                max="100"
                                                step="0.1"
                                                className="mt-2 text-base"
                                            />
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Enter your institution's minimum attendance requirement
                                            </p>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button
                                                onClick={calculateAttendance}
                                                className="flex-1 bg-primary hover:bg-primary/90 h-11"
                                                disabled={!totalClasses || !attendedClasses || parseFloat(totalClasses) <= 0 || parseFloat(attendedClasses) < 0}
                                            >
                                                Calculate Attendance
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={clearFields}
                                                className="sm:px-6 h-11"
                                            >
                                                Clear
                                            </Button>
                                        </div>

                                        {/* Results */}
                                        {currentPercentage && currentPercentage !== "Invalid input" && (
                                            <div className="mt-4 md:mt-6 space-y-4">
                                                {/* Main Result Display */}
                                                <div className="p-3 md:p-4 bg-muted/50 rounded-lg border">
                                                    <div className="text-center">
                                                        <div className="text-xs md:text-sm text-muted-foreground mb-1">Your Attendance Percentage</div>
                                                        <div className="text-2xl md:text-3xl font-bold text-primary">{currentPercentage}%</div>
                                                        {(() => {
                                                            const status = getAttendanceStatus(parseFloat(currentPercentage))
                                                            return (
                                                                <div className="text-xs md:text-sm mt-1" style={{ color: status.color }}>
                                                                    {status.status}: {status.message}
                                                                </div>
                                                            )
                                                        })()}
                                                        <div className="mt-3 text-xs text-muted-foreground">
                                                            <div className="flex justify-between">
                                                                <span>Classes Attended:</span>
                                                                <span className="font-medium">{attendedClasses}/{totalClasses}</span>
                                                            </div>
                                                            {requiredPercentage && (
                                                                <div className="flex justify-between">
                                                                    <span>Required:</span>
                                                                    <span className="font-medium">{requiredPercentage}%</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Planning Insights */}
                                                {requiredPercentage && classesNeeded !== "" && (
                                                    <div className="p-3 md:p-4 bg-card rounded-lg border">
                                                        <h4 className="text-sm font-semibold mb-3 text-center">Planning Insights</h4>

                                                        {parseFloat(currentPercentage) >= parseFloat(requiredPercentage) ? (
                                                            <div className="space-y-3">
                                                                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                                                    <div className="text-green-700 dark:text-green-300 font-medium text-sm">
                                                                        ✅ You're meeting the requirement!
                                                                    </div>
                                                                    {canSkip && parseFloat(canSkip) > 0 && (
                                                                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                                                                            You can skip up to {canSkip} more classes and still meet the {requiredPercentage}% requirement
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="space-y-3">
                                                                <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                                                                    <div className="text-red-700 dark:text-red-300 font-medium text-sm">
                                                                        ⚠️ Below minimum requirement
                                                                    </div>
                                                                    {classesNeeded && parseFloat(classesNeeded) > 0 && (
                                                                        <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                                                                            You need to attend {classesNeeded} consecutive classes to reach {requiredPercentage}%
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Attendance Pie Chart */}
                                                <div className="p-3 md:p-4 bg-card rounded-lg border">
                                                    <h4 className="text-sm font-semibold mb-3 text-center">Attendance Visualization</h4>
                                                    <div className="flex items-center justify-center">
                                                        <ChartContainer config={{
                                                            attended: { label: "Attended", color: "#22c55e" },
                                                            missed: { label: "Missed", color: "#ef4444" }
                                                        }} className="h-[150px] w-[150px] md:h-[200px] md:w-[200px]">
                                                            <PieChart>
                                                                <Pie
                                                                    data={[
                                                                        {
                                                                            name: "Attended",
                                                                            value: parseFloat(attendedClasses),
                                                                            fill: getAttendanceStatus(parseFloat(currentPercentage)).color
                                                                        },
                                                                        {
                                                                            name: "Missed",
                                                                            value: parseFloat(totalClasses) - parseFloat(attendedClasses),
                                                                            fill: "#e5e7eb"
                                                                        }
                                                                    ]}
                                                                    cx="50%"
                                                                    cy="50%"
                                                                    innerRadius={30}
                                                                    outerRadius={60}
                                                                    paddingAngle={2}
                                                                    dataKey="value"
                                                                />
                                                                <ChartTooltip content={<ChartTooltipContent />} />
                                                            </PieChart>
                                                        </ChartContainer>
                                                    </div>

                                                    {/* Attendance Stats */}
                                                    <div className="mt-4 grid grid-cols-2 gap-3 md:gap-4 text-center">
                                                        <div className="p-2 bg-muted/30 rounded">
                                                            <div className="text-xs text-muted-foreground">Classes Attended</div>
                                                            <div className="text-sm font-semibold text-green-600">
                                                                {attendedClasses}
                                                            </div>
                                                        </div>
                                                        <div className="p-2 bg-muted/30 rounded">
                                                            <div className="text-xs text-muted-foreground">Classes Missed</div>
                                                            <div className="text-sm font-semibold text-red-600">
                                                                {parseFloat(totalClasses) - parseFloat(attendedClasses)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Error Message */}
                                        {currentPercentage === "Invalid input" && (
                                            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                                                <div className="text-center text-destructive text-sm">
                                                    Please enter valid attendance data
                                                </div>
                                            </div>
                                        )}

                                        {/* Formula Display */}
                                        <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded border">
                                            <strong>Formula Used:</strong><br />
                                            Attendance % = (Classes Attended ÷ Total Classes) × 100
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Side - Charts and Analytics */}
                            <div className="w-full space-y-4 md:space-y-6 lg:sticky lg:top-4">

                                {/* Attendance Projection */}
                                {currentPercentage && currentPercentage !== "Invalid input" && (
                                    <Card className="shadow-lg">
                                        <CardHeader className="pb-3 md:pb-4">
                                            <CardTitle className="text-base md:text-lg lg:text-xl">Future Projection</CardTitle>
                                            <p className="text-xs md:text-sm text-muted-foreground">
                                                How your attendance will improve if you attend all future classes
                                            </p>
                                        </CardHeader>
                                        <CardContent className="px-2 md:px-6">
                                            <ChartContainer config={{ percentage: { label: "Percentage", color: "#3b82f6" } }} className="h-[200px] sm:h-[250px] w-full">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <AreaChart data={getProjectionData()}>
                                                        <XAxis
                                                            dataKey="futureClasses"
                                                            tick={{ fontSize: 8 }}
                                                            tickLine={false}
                                                            axisLine={false}
                                                        />
                                                        <YAxis
                                                            domain={[0, 100]}
                                                            tick={{ fontSize: 8 }}
                                                            tickLine={false}
                                                            axisLine={false}
                                                        />
                                                        <ChartTooltip content={<ChartTooltipContent />} />
                                                        {requiredPercentage && (
                                                            <ReferenceLine
                                                                y={parseFloat(requiredPercentage)}
                                                                stroke="#eab308"
                                                                strokeDasharray="2 2"
                                                                label="Required"
                                                            />
                                                        )}
                                                        <Area
                                                            type="monotone"
                                                            dataKey="percentage"
                                                            stroke="#3b82f6"
                                                            fill="#3b82f6"
                                                            fillOpacity={0.3}
                                                        />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </ChartContainer>
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Example Scenarios */}
                                <Card className="shadow-lg">
                                    <CardHeader className="pb-3 md:pb-4">
                                        <CardTitle className="text-base md:text-lg lg:text-xl">Example Scenarios</CardTitle>
                                        <p className="text-xs text-muted-foreground md:hidden">
                                            Common attendance situations
                                        </p>
                                    </CardHeader>
                                    <CardContent className="px-3 md:px-6">
                                        <div className="space-y-3">
                                            {exampleScenarios.map((scenario, index) => (
                                                <div
                                                    key={index}
                                                    className="p-3 rounded-lg border bg-muted/20"
                                                >
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-sm font-medium">{scenario.scenario}</span>
                                                        <span className="text-sm font-bold" style={{ color: scenario.color }}>
                                                            {scenario.percentage}%
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mb-1">
                                                        {scenario.attended}/{scenario.total} classes attended
                                                    </div>
                                                    <div className="text-xs" style={{ color: scenario.color }}>
                                                        {scenario.status}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections for SEO */}
                <section className="py-12 md:py-16 bg-muted/20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <div className="space-y-8 md:space-y-12">
                            {/* What is Attendance Percentage Calculator */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">What Is Attendance Percentage Calculator?</h2>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                                    An Attendance Percentage Calculator is a digital tool that helps students track their class attendance and calculate their attendance percentage.
                                    This calculator is essential for students who need to maintain minimum attendance requirements set by their educational institutions,
                                    plan their class schedules, and ensure they meet academic attendance criteria.
                                </p>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    The calculator provides instant calculations, future projections, and actionable insights to help students make informed decisions
                                    about their attendance while staying compliant with institutional requirements.
                                </p>
                            </div>

                            {/* Understanding Attendance Requirements */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">Understanding Attendance Requirements</h2>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                                    Most educational institutions have mandatory attendance policies to ensure student engagement and academic success.
                                    Understanding these requirements is crucial for academic planning and avoiding penalties.
                                </p>
                                <div className="bg-card p-3 md:p-4 rounded-lg border mb-3 md:mb-4">
                                    <h3 className="font-semibold mb-2 text-sm md:text-base">Attendance Calculation Formula:</h3>
                                    <p className="text-xs md:text-sm font-mono bg-muted/50 p-2 rounded">
                                        Attendance % = (Classes Attended ÷ Total Classes Held) × 100
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-4 mb-4">
                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 text-sm md:text-base text-green-600">Excellent (90%+)</h4>
                                        <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                            <li>• Academic excellence recognition</li>
                                            <li>• Scholarship eligibility</li>
                                            <li>• Professor recommendations</li>
                                        </ul>
                                    </Card>

                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 text-sm md:text-base text-yellow-600">Required (75%)</h4>
                                        <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                            <li>• Minimum for exam eligibility</li>
                                            <li>• Standard institutional requirement</li>
                                            <li>• Graduation prerequisite</li>
                                        </ul>
                                    </Card>

                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 text-sm md:text-base text-red-600">Critical (&lt;70%)</h4>
                                        <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                            <li>• Academic probation risk</li>
                                            <li>• Exam debarment possible</li>
                                            <li>• Course repetition required</li>
                                        </ul>
                                    </Card>
                                </div>
                            </div>

                            {/* Consequences of Poor Attendance */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">Consequences of Poor Attendance</h2>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                                    Poor attendance can have serious academic and financial consequences. Understanding these impacts helps students
                                    prioritize regular class attendance and seek help when needed.
                                </p>

                                <div className="space-y-4">
                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 text-red-600 text-sm md:text-base">Academic Consequences:</h4>
                                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                                            <li><strong>Exam Debarment:</strong> Students may be barred from semester or final exams</li>
                                            <li><strong>Grade Reduction:</strong> Some institutions reduce grades based on attendance</li>
                                            <li><strong>Course Failure:</strong> Automatic failure regardless of academic performance</li>
                                            <li><strong>Academic Probation:</strong> Formal warning with conditions for continuation</li>
                                            <li><strong>Suspension:</strong> Temporary removal from academic programs</li>
                                        </ul>
                                    </Card>

                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 text-orange-600 text-sm md:text-base">Financial Impact:</h4>
                                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                                            <li><strong>Course Repetition Fees:</strong> Additional costs for retaking courses</li>
                                            <li><strong>Extended Duration:</strong> Longer degree completion increases total expenses</li>
                                            <li><strong>Scholarship Loss:</strong> Merit-based scholarships may be revoked</li>
                                            <li><strong>Loan Complications:</strong> Education loan terms may be affected</li>
                                        </ul>
                                    </Card>
                                </div>
                            </div>

                            {/* Strategies for Maintaining Good Attendance */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">Strategies for Maintaining Good Attendance</h2>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                                    Developing effective strategies for consistent attendance helps students succeed academically while building
                                    professional habits that benefit their future careers.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 md:mb-3 text-primary text-sm md:text-base">Time Management Tips</h4>
                                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                                            <li>• Create a consistent daily routine</li>
                                            <li>• Set multiple alarms for early classes</li>
                                            <li>• Plan your route and transportation</li>
                                            <li>• Prepare materials the night before</li>
                                            <li>• Allow buffer time for unexpected delays</li>
                                        </ul>
                                    </Card>

                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 md:mb-3 text-primary text-sm md:text-base">Health & Wellness</h4>
                                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                                            <li>• Maintain regular sleep schedule</li>
                                            <li>• Eat nutritious breakfast daily</li>
                                            <li>• Stay hydrated throughout the day</li>
                                            <li>• Exercise regularly for energy</li>
                                            <li>• Manage stress through healthy habits</li>
                                        </ul>
                                    </Card>

                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 md:mb-3 text-primary text-sm md:text-base">Academic Motivation</h4>
                                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                                            <li>• Set clear academic goals</li>
                                            <li>• Track your attendance progress</li>
                                            <li>• Join study groups for accountability</li>
                                            <li>• Communicate with professors</li>
                                            <li>• Reward yourself for good attendance</li>
                                        </ul>
                                    </Card>

                                    <Card className="p-3 md:p-4">
                                        <h4 className="font-semibold mb-2 md:mb-3 text-primary text-sm md:text-base">Technology Tools</h4>
                                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                                            <li>• Use attendance tracking apps</li>
                                            <li>• Set calendar reminders</li>
                                            <li>• Share location with family/friends</li>
                                            <li>• Use transportation apps</li>
                                            <li>• Monitor weather forecasts</li>
                                        </ul>
                                    </Card>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground">Frequently Asked Questions</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {faqData.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index}`}>
                                            <AccordionTrigger className="text-left hover:no-underline text-sm md:text-base">
                                                <span className="font-semibold text-primary">{faq.question}</span>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}
