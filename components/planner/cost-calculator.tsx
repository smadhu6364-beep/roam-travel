"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Style = "budget" | "mid" | "luxury"

const rates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 145,
}

export default function CostCalculator() {
  const [days, setDays] = useState(7)
  const [style, setStyle] = useState<Style>("mid")
  const [currency, setCurrency] = useState<keyof typeof rates>("USD")

  const usdTotal = useMemo(() => {
    const perDay = style === "budget" ? 90 : style === "mid" ? 180 : 420
    return days * perDay
  }, [days, style])

  const converted = useMemo(() => usdTotal * rates[currency], [usdTotal, currency])

  const breakdown = useMemo(() => {
    const flights = usdTotal * 0.35
    const hotels = usdTotal * 0.4
    const activities = usdTotal * 0.25
    return { flights, hotels, activities }
  }, [usdTotal])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <Label className="text-sm">Trip length: {days} days</Label>
          <Slider value={[days]} min={3} max={21} step={1} onValueChange={(v) => setDays(v[0])} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Style</Label>
            <Select value={style} onValueChange={(v) => setStyle(v as Style)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">Budget</SelectItem>
                <SelectItem value="mid">Mid-range</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Currency</Label>
            <Select value={currency} onValueChange={(v) => setCurrency(v as any)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(rates).map((k) => (
                  <SelectItem key={k} value={k}>
                    {k}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="rounded-md border p-3 text-sm">
          <div className="flex items-center justify-between">
            <span>Flights</span>
            <span>${breakdown.flights.toFixed(0)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Hotels</span>
            <span>${breakdown.hotels.toFixed(0)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Activities</span>
            <span>${breakdown.activities.toFixed(0)}</span>
          </div>
        </div>
        <div className="rounded-md border bg-muted/50 p-4">
          <p className="text-sm">Estimated Total</p>
          <p className="text-2xl font-semibold">
            {currency} {converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
