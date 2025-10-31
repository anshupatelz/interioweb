// Calculator input components

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Ruler, Home, Maximize, Circle } from "lucide-react"
import { RoomShape, MeasurementUnit } from "./types"
import { ROOM_SHAPES, ROOM_TYPE_PRESETS } from "./constants"

interface RoomShapeSelectorProps {
    roomShape: RoomShape
    setRoomShape: (shape: RoomShape) => void
}

export function RoomShapeSelector({ roomShape, setRoomShape }: RoomShapeSelectorProps) {
    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-secondary" />
                    Room Shape
                </CardTitle>
                <CardDescription>Select your room shape for accurate calculations</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {ROOM_SHAPES.map((shape) => (
                        <button
                            key={shape.value}
                            onClick={() => setRoomShape(shape.value as RoomShape)}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${roomShape === shape.value
                                    ? "border-secondary bg-secondary/10"
                                    : "border-border hover:border-secondary/50"
                                }`}
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    {shape.value === "rectangle" && <Maximize className="h-5 w-5" />}
                                    {shape.value === "square" && <Maximize className="h-5 w-5" />}
                                    {shape.value === "l-shape" && <Maximize className="h-5 w-5" />}
                                    {shape.value === "circular" && <Circle className="h-5 w-5" />}
                                    <span className="font-semibold text-sm">{shape.label}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{shape.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

interface RoomDimensionsInputProps {
    measurementUnit: MeasurementUnit
    setMeasurementUnit: (unit: MeasurementUnit) => void
    roomShape: RoomShape
    length: string
    setLength: (value: string) => void
    width: string
    setWidth: (value: string) => void
    height: string
    setHeight: (value: string) => void
    // For L-shape
    length2?: string
    setLength2?: (value: string) => void
    width2?: string
    setWidth2?: (value: string) => void
    // For circular
    diameter?: string
    setDiameter?: (value: string) => void
    // Room preset
    roomPreset?: string
    setRoomPreset?: (value: string) => void
}

export function RoomDimensionsInput({
    measurementUnit,
    setMeasurementUnit,
    roomShape,
    length,
    setLength,
    width,
    setWidth,
    height,
    setHeight,
    length2,
    setLength2,
    width2,
    setWidth2,
    diameter,
    setDiameter,
    roomPreset,
    setRoomPreset,
}: RoomDimensionsInputProps) {
    const handlePresetChange = (preset: string) => {
        if (setRoomPreset) setRoomPreset(preset)
        if (preset && preset !== "custom" && ROOM_TYPE_PRESETS[preset]) {
            const { length: l, width: w, height: h } = ROOM_TYPE_PRESETS[preset]
            setLength(l.toString())
            setWidth(w.toString())
            setHeight(h.toString())
        }
    }

    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-secondary" />
                    Room Dimensions
                </CardTitle>
                <CardDescription>
                    {roomShape === "circular"
                        ? "Enter the diameter and height of your circular room"
                        : roomShape === "l-shape"
                            ? "Enter dimensions for both sections of the L-shaped room"
                            : "Enter the length, width, and height of your room"}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Room Type Preset Selector */}
                {roomShape === "rectangle" && setRoomPreset && (
                    <div className="space-y-2">
                        <Label htmlFor="roomPreset">Quick Presets (Optional)</Label>
                        <Select value={roomPreset || "custom"} onValueChange={handlePresetChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a room type..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="custom">Custom dimensions</SelectItem>
                                {Object.entries(ROOM_TYPE_PRESETS).map(([key, preset]) => (
                                    <SelectItem key={key} value={key}>
                                        {preset.description}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}

                {/* Measurement Unit Toggle */}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">Measurement Unit</span>
                    <Tabs value={measurementUnit} onValueChange={(val: string) => setMeasurementUnit(val as MeasurementUnit)}>
                        <TabsList>
                            <TabsTrigger value="feet">Feet</TabsTrigger>
                            <TabsTrigger value="meters">Meters</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {/* Circular Room Inputs */}
                {roomShape === "circular" && diameter && setDiameter ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="diameter">Diameter</Label>
                            <Input
                                id="diameter"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "15" : "4.5"}
                                value={diameter}
                                onChange={(e) => setDiameter(e.target.value)}
                                min="0"
                                step="0.1"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="height">Height</Label>
                            <Input
                                id="height"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "8" : "2.4"}
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                min="0"
                                step="0.1"
                            />
                        </div>
                    </div>
                ) : roomShape === "l-shape" && length2 && setLength2 && width2 && setWidth2 ? (
                    /* L-Shape Room Inputs */
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label className="flex items-center gap-2">
                                Section 1 Dimensions
                                <Badge variant="secondary">Main</Badge>
                            </Label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="length1">Length</Label>
                                    <Input
                                        id="length1"
                                        type="number"
                                        placeholder={measurementUnit === "feet" ? "20" : "6"}
                                        value={length}
                                        onChange={(e) => setLength(e.target.value)}
                                        min="0"
                                        step="0.1"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="width1">Width</Label>
                                    <Input
                                        id="width1"
                                        type="number"
                                        placeholder={measurementUnit === "feet" ? "15" : "4.5"}
                                        value={width}
                                        onChange={(e) => setWidth(e.target.value)}
                                        min="0"
                                        step="0.1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="flex items-center gap-2">
                                Section 2 Dimensions
                                <Badge variant="outline">Extended</Badge>
                            </Label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="length2">Length</Label>
                                    <Input
                                        id="length2"
                                        type="number"
                                        placeholder={measurementUnit === "feet" ? "10" : "3"}
                                        value={length2}
                                        onChange={(e) => setLength2(e.target.value)}
                                        min="0"
                                        step="0.1"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="width2">Width</Label>
                                    <Input
                                        id="width2"
                                        type="number"
                                        placeholder={measurementUnit === "feet" ? "8" : "2.4"}
                                        value={width2}
                                        onChange={(e) => setWidth2(e.target.value)}
                                        min="0"
                                        step="0.1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="height-lshape">Ceiling Height</Label>
                            <Input
                                id="height-lshape"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "8" : "2.4"}
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                min="0"
                                step="0.1"
                            />
                        </div>
                    </div>
                ) : (
                    /* Rectangle/Square Room Inputs */
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="length">Length</Label>
                            <Input
                                id="length"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "20" : "6"}
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                min="0"
                                step="0.1"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="width">Width</Label>
                            <Input
                                id="width"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "15" : "4.5"}
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                min="0"
                                step="0.1"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="height">Height</Label>
                            <Input
                                id="height"
                                type="number"
                                placeholder={measurementUnit === "feet" ? "8" : "2.4"}
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                min="0"
                                step="0.1"
                            />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
