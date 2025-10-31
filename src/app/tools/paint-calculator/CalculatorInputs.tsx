// Calculator input components

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Paintbrush, Ruler, DollarSign, Droplet, Layers } from "lucide-react"
import { SurfaceType, PaintType, PaintFinish, MeasurementUnit } from "./types"
import { PAINT_FINISHES, COATS_OPTIONS } from "./constants"
import { useCurrency } from "@/hooks/useCurrency"

interface PaintTypeSelectorProps {
    paintType: PaintType
    setPaintType: (type: PaintType) => void
}

export function PaintTypeSelector({ paintType, setPaintType }: PaintTypeSelectorProps) {
    return (
        <div className="flex items-center gap-4 px-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Paintbrush className="h-4 w-4" />
                <span className="font-medium">Paint Type:</span>
            </div>
            <div className="flex gap-2">
                <Button
                    size="sm"
                    variant={paintType === "interior" ? "default" : "outline"}
                    className="rounded-full h-8 px-4"
                    onClick={() => setPaintType("interior")}
                >
                    Interior
                </Button>
                <Button
                    size="sm"
                    variant={paintType === "exterior" ? "default" : "outline"}
                    className="rounded-full h-8 px-4"
                    onClick={() => setPaintType("exterior")}
                >
                    Exterior
                </Button>
            </div>
        </div>
    )
}

interface RoomDimensionsInputProps {
    measurementUnit: MeasurementUnit
    setMeasurementUnit: (unit: MeasurementUnit) => void
    length: string
    setLength: (value: string) => void
    width: string
    setWidth: (value: string) => void
    height: string
    setHeight: (value: string) => void
}

export function RoomDimensionsInput({
    measurementUnit,
    setMeasurementUnit,
    length,
    setLength,
    width,
    setWidth,
    height,
    setHeight,
}: RoomDimensionsInputProps) {
    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-secondary" />
                    Room Dimensions
                </CardTitle>
                <CardDescription>Enter the length, width, and height of your room</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="length">Length</Label>
                        <div className="flex gap-2">
                            <Input
                                id="length"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "20" : "6"}
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                min="0"
                                step="0.1"
                                className="flex-1"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="width">Width</Label>
                        <div className="flex gap-2">
                            <Input
                                id="width"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "15" : "4.5"}
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                min="0"
                                step="0.1"
                                className="flex-1"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="height">Height</Label>
                        <div className="flex gap-2">
                            <Input
                                id="height"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "8" : "2.4"}
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                min="0"
                                step="0.1"
                                className="flex-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">Measurement Unit</span>
                    <Select value={measurementUnit} onValueChange={(val: MeasurementUnit) => setMeasurementUnit(val)}>
                        <SelectTrigger className="w-32">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="feet">Feet</SelectItem>
                            <SelectItem value="meters">Meters</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
}

interface SurfaceOptionsProps {
    paintCeiling: boolean
    setPaintCeiling: (value: boolean) => void
    numberOfDoors: string
    setNumberOfDoors: (value: string) => void
    numberOfWindows: string
    setNumberOfWindows: (value: string) => void
}

export function SurfaceOptions({
    paintCeiling,
    setPaintCeiling,
    numberOfDoors,
    setNumberOfDoors,
    numberOfWindows,
    setNumberOfWindows,
}: SurfaceOptionsProps) {
    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <CardTitle>Surface Options</CardTitle>
                <CardDescription>Select surfaces to paint and openings to exclude</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2 px-3 bg-secondary/5 rounded-lg">
                    <div className="space-y-0.5">
                        <Label htmlFor="paintCeiling" className="text-base font-medium">
                            Paint Ceiling
                        </Label>
                        <p className="text-xs text-muted-foreground">Include ceiling in calculation</p>
                    </div>
                    <Switch
                        id="paintCeiling"
                        checked={paintCeiling}
                        onCheckedChange={setPaintCeiling}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="doors">Number of Doors</Label>
                        <Input
                            id="doors"
                            type="number"
                            placeholder="2"
                            value={numberOfDoors}
                            onChange={(e) => setNumberOfDoors(e.target.value)}
                            min="0"
                        />
                        <p className="text-xs text-muted-foreground">Standard door: ~20 sq ft</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="windows">Number of Windows</Label>
                        <Input
                            id="windows"
                            type="number"
                            placeholder="2"
                            value={numberOfWindows}
                            onChange={(e) => setNumberOfWindows(e.target.value)}
                            min="0"
                        />
                        <p className="text-xs text-muted-foreground">Standard window: ~15 sq ft</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

interface PaintSpecificationsProps {
    paintFinish: PaintFinish
    setPaintFinish: (finish: PaintFinish) => void
    coats: string
    setCoats: (value: string) => void
    needsPrimer: boolean
    setNeedsPrimer: (value: boolean) => void
}

export function PaintSpecifications({
    paintFinish,
    setPaintFinish,
    coats,
    setCoats,
    needsPrimer,
    setNeedsPrimer,
}: PaintSpecificationsProps) {
    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-secondary" />
                    Paint Specifications
                </CardTitle>
                <CardDescription>Select paint finish and number of coats</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="finish">Paint Finish</Label>
                    <Select value={paintFinish} onValueChange={(val: PaintFinish) => setPaintFinish(val)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {PAINT_FINISHES.map((finish) => (
                                <SelectItem key={finish.value} value={finish.value}>
                                    <div className="flex flex-col">
                                        <span className="font-medium">{finish.label}</span>
                                        <span className="text-xs text-muted-foreground">{finish.description}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="coats">Number of Coats</Label>
                    <Select value={coats} onValueChange={setCoats}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {COATS_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center justify-between py-2 px-3 bg-secondary/5 rounded-lg">
                    <div className="space-y-0.5">
                        <Label htmlFor="primer" className="text-base font-medium">
                            Needs Primer
                        </Label>
                        <p className="text-xs text-muted-foreground">For new drywall or dramatic color change</p>
                    </div>
                    <Switch
                        id="primer"
                        checked={needsPrimer}
                        onCheckedChange={setNeedsPrimer}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

interface CostCalculationProps {
    pricePerGallon: string
    setPricePerGallon: (value: string) => void
}

export function CostCalculation({
    pricePerGallon,
    setPricePerGallon,
}: CostCalculationProps) {
    const { currencySymbol } = useCurrency()

    return (
        <Card className="rounded-xl border border-secondary/30 bg-secondary/5">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-secondary" />
                            Cost Estimation
                        </CardTitle>
                        <CardDescription>Optional - estimate your project cost</CardDescription>
                    </div>
                    <Badge variant="secondary">Optional</Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="pricePerGallon">
                        <div className="flex items-center gap-2">
                            <Droplet className="h-4 w-4" />
                            Price per Gallon/Liter
                        </div>
                    </Label>
                    <div className="flex gap-2">
                        <div className="w-10 flex items-center justify-center text-sm text-muted-foreground bg-muted rounded-md border border-r-0 rounded-r-none">
                            {currencySymbol}
                        </div>
                        <Input
                            id="pricePerGallon"
                            type="number"
                            placeholder="35.00"
                            value={pricePerGallon}
                            onChange={(e) => setPricePerGallon(e.target.value)}
                            min="0"
                            step="0.01"
                            className="flex-1 rounded-l-none"
                        />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Average paint cost: {currencySymbol}25-50 per gallon
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
