// Calculator input components

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Info, DollarSign, Package, LayoutGrid } from "lucide-react"
import { TileType, MeasurementUnit, TileSizeUnit } from "./types"
import { TILE_PRESETS, WASTE_OPTIONS } from "./constants"
import { useCurrency } from "@/hooks/useCurrency"

interface TileTypeSelectorProps {
    tileType: TileType
    setTileType: (type: TileType) => void
}

export function TileTypeSelector({ tileType, setTileType }: TileTypeSelectorProps) {
    return (
        <div className="flex items-center gap-4 px-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <LayoutGrid className="h-4 w-4" />
                <span className="font-medium">Application Type:</span>
            </div>
            <div className="flex gap-2">
                <Button
                    size="sm"
                    variant={tileType === "floor" ? "default" : "outline"}
                    className="rounded-full h-8 px-4"
                    onClick={() => setTileType("floor")}
                >
                    Floor
                </Button>
                <Button
                    size="sm"
                    variant={tileType === "wall" ? "default" : "outline"}
                    className="rounded-full h-8 px-4"
                    onClick={() => setTileType("wall")}
                >
                    Wall
                </Button>
            </div>
        </div>
    )
}

interface AreaInputProps {
    measurementUnit: MeasurementUnit
    setMeasurementUnit: (unit: MeasurementUnit) => void
    roomLength: string
    setRoomLength: (value: string) => void
    roomWidth: string
    setRoomWidth: (value: string) => void
    totalArea: string
    setTotalArea: (value: string) => void
}

export function AreaInput({
    measurementUnit,
    setMeasurementUnit,
    roomLength,
    setRoomLength,
    roomWidth,
    setRoomWidth,
    totalArea,
    setTotalArea,
}: AreaInputProps) {
    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <CardTitle>Area to Cover</CardTitle>
                <CardDescription>Enter dimensions or total area</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Tabs defaultValue="dimensions" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="dimensions">By Dimensions</TabsTrigger>
                        <TabsTrigger value="total">Total Area</TabsTrigger>
                    </TabsList>
                    <TabsContent value="dimensions" className="space-y-4 mt-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="roomLength">Length</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="roomLength"
                                            type="number"
                                            placeholder={measurementUnit === "feet" ? "20" : "6"}
                                            value={roomLength}
                                            onChange={(e) => {
                                                setRoomLength(e.target.value)
                                                setTotalArea("")
                                            }}
                                            min="0"
                                            step="0.1"
                                            className="flex-1"
                                        />
                                        <Select value={measurementUnit} onValueChange={(val: MeasurementUnit) => setMeasurementUnit(val)}>
                                            <SelectTrigger className="w-24">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="feet">Feet</SelectItem>
                                                <SelectItem value="meters">Meters</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="roomWidth">Width</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="roomWidth"
                                            type="number"
                                            placeholder={measurementUnit === "feet" ? "15" : "4.5"}
                                            value={roomWidth}
                                            onChange={(e) => {
                                                setRoomWidth(e.target.value)
                                                setTotalArea("")
                                            }}
                                            min="0"
                                            step="0.1"
                                            className="flex-1"
                                        />
                                        <div className="w-24 flex items-center justify-center text-sm text-muted-foreground bg-muted rounded-md px-3">
                                            {measurementUnit === "feet" ? "Feet" : "Meters"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="total" className="mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="totalArea">Total Area</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="totalArea"
                                    type="number"
                                    placeholder={measurementUnit === "feet" ? "300" : "28"}
                                    value={totalArea}
                                    onChange={(e) => {
                                        setTotalArea(e.target.value)
                                        setRoomLength("")
                                        setRoomWidth("")
                                    }}
                                    min="0"
                                    step="0.1"
                                    className="flex-1"
                                />
                                <Select value={measurementUnit} onValueChange={(val: MeasurementUnit) => setMeasurementUnit(val)}>
                                    <SelectTrigger className="w-28">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="feet">sq ft</SelectItem>
                                        <SelectItem value="meters">sq m</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

interface TileSizeInputProps {
    tileSizeUnit: TileSizeUnit
    setTileSizeUnit: (unit: TileSizeUnit) => void
    tilePreset: string
    setTilePreset: (preset: string) => void
    tileLength: string
    setTileLength: (value: string) => void
    tileWidth: string
    setTileWidth: (value: string) => void
    onPresetChange: (preset: string) => void
}

export function TileSizeInput({
    tileSizeUnit,
    setTileSizeUnit,
    tilePreset,
    tileLength,
    setTileLength,
    tileWidth,
    setTileWidth,
    onPresetChange,
}: TileSizeInputProps) {
    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <CardTitle>Tile Size</CardTitle>
                <CardDescription>Quick select or enter custom dimensions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {tileSizeUnit === "inches" && (
                    <div className="space-y-3">
                        <Label className="text-sm font-medium">Standard Sizes (Quick Select)</Label>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(TILE_PRESETS).map(([key, preset]) => (
                                <Button
                                    key={key}
                                    variant={tilePreset === key ? "default" : "outline"}
                                    className="h-auto py-2.5 rounded-lg text-xs font-medium"
                                    onClick={() => onPresetChange(key)}
                                >
                                    {preset.label}
                                </Button>
                            ))}
                        </div>
                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Custom Size</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="tileLength">Length</Label>
                        <div className="flex gap-2">
                            <Input
                                id="tileLength"
                                type="number"
                                placeholder={tileSizeUnit === "inches" ? "12" : tileSizeUnit === "cm" ? "30" : "300"}
                                value={tileLength}
                                onChange={(e) => {
                                    setTileLength(e.target.value)
                                }}
                                min="0"
                                step="0.1"
                                className="flex-1"
                            />
                            <Select value={tileSizeUnit} onValueChange={(val: TileSizeUnit) => setTileSizeUnit(val)}>
                                <SelectTrigger className="w-24">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="inches">Inches</SelectItem>
                                    <SelectItem value="cm">CM</SelectItem>
                                    <SelectItem value="mm">MM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tileWidth">Width</Label>
                        <div className="flex gap-2">
                            <Input
                                id="tileWidth"
                                type="number"
                                placeholder={tileSizeUnit === "inches" ? "12" : tileSizeUnit === "cm" ? "30" : "300"}
                                value={tileWidth}
                                onChange={(e) => {
                                    setTileWidth(e.target.value)
                                }}
                                min="0"
                                step="0.1"
                                className="flex-1"
                            />
                            <div className="w-24 flex items-center justify-center text-sm text-muted-foreground bg-muted rounded-md px-3">
                                {tileSizeUnit === "inches" ? "Inches" : tileSizeUnit === "cm" ? "CM" : "MM"}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

interface AdvancedOptionsProps {
    gapSize: string
    setGapSize: (value: string) => void
    wastePercentage: string
    setWastePercentage: (value: string) => void
}

export function AdvancedOptions({ gapSize, setGapSize, wastePercentage, setWastePercentage }: AdvancedOptionsProps) {
    return (
        <Card className="rounded-xl border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-secondary" />
                    Advanced Options
                </CardTitle>
                <CardDescription>Grout spacing and waste allowance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="gapSize">Gap Size</Label>
                    <div className="flex gap-2">
                        <Input
                            id="gapSize"
                            type="number"
                            placeholder="0.25"
                            value={gapSize}
                            onChange={(e) => setGapSize(e.target.value)}
                            step="0.05"
                            className="flex-1"
                        />
                        <div className="w-24 flex items-center justify-center text-sm text-muted-foreground bg-muted rounded-md px-3">
                            Inches
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Grout line spacing between tiles</p>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="waste">Waste Allowance</Label>
                    <Select value={wastePercentage} onValueChange={setWastePercentage}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {WASTE_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
}

interface CostCalculationProps {
    tilesPerBox: string
    setTilesPerBox: (value: string) => void
    pricePerBox: string
    setPricePerBox: (value: string) => void
    pricePerTile: string
    setPricePerTile: (value: string) => void
}

export function CostCalculation({
    tilesPerBox,
    setTilesPerBox,
    pricePerBox,
    setPricePerBox,
    pricePerTile,
    setPricePerTile,
}: CostCalculationProps) {
    const { currencySymbol } = useCurrency()

    return (
        <Card className="rounded-xl border border-secondary/30 bg-secondary/5">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-secondary" />
                            Cost Calculation
                        </CardTitle>
                        <CardDescription>Optional - for budget estimation</CardDescription>
                    </div>
                    <Badge variant="secondary">Optional</Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="tilesPerBox">
                        <div className="flex items-center gap-2">
                            <Package className="h-4 w-4" />
                            Tiles per Box
                        </div>
                    </Label>
                    <div className="flex gap-2">
                        <Input
                            id="tilesPerBox"
                            type="number"
                            placeholder="10"
                            value={tilesPerBox}
                            onChange={(e) => setTilesPerBox(e.target.value)}
                            min="0"
                            className="flex-1"
                        />
                        <div className="w-20 flex items-center justify-center text-sm text-muted-foreground bg-muted rounded-md px-3">
                            tiles
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pricePerBox">Price per Box</Label>
                    <div className="flex gap-2">
                        <div className="w-10 flex items-center justify-center text-sm text-muted-foreground bg-muted rounded-md border border-r-0 rounded-r-none">
                            {currencySymbol}
                        </div>
                        <Input
                            id="pricePerBox"
                            type="number"
                            placeholder="50.00"
                            value={pricePerBox}
                            onChange={(e) => {
                                setPricePerBox(e.target.value)
                                setPricePerTile("")
                            }}
                            min="0"
                            step="0.01"
                            className="flex-1 rounded-l-none"
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-secondary/5 px-2 text-muted-foreground">OR</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pricePerTile">Price per Tile</Label>
                    <div className="flex gap-2">
                        <div className="w-10 flex items-center justify-center text-sm text-muted-foreground bg-muted rounded-md border border-r-0 rounded-r-none">
                            {currencySymbol}
                        </div>
                        <Input
                            id="pricePerTile"
                            type="number"
                            placeholder="5.00"
                            value={pricePerTile}
                            onChange={(e) => {
                                setPricePerTile(e.target.value)
                                setPricePerBox("")
                            }}
                            min="0"
                            step="0.01"
                            className="flex-1 rounded-l-none"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
