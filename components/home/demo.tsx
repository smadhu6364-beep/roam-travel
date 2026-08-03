"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Demo() {
  const [days, setDays] = useState(7)
  const [style, setStyle] = useState<"budget" | "mid" | "luxury">("mid")

  const cost = useMemo(() => {
    const base = style === "budget" ? 90 : style === "mid" ? 180 : 420
    return base * days
  }, [days, style])

  return (
    <section id="demo" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Build an itinerary and see costs live</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Live Cost Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="text-sm text-muted-foreground">Trip length: {days} days</p>
                <Slider value={[days]} min={3} max={21} step={1} onValueChange={(v) => setDays(v[0])} />
              </div>
              <Tabs value={style} onValueChange={(v) => setStyle(v as any)}>
                <TabsList>
                  <TabsTrigger value="budget">Budget</TabsTrigger>
                  <TabsTrigger value="mid">Mid-range</TabsTrigger>
                  <TabsTrigger value="luxury">Luxury</TabsTrigger>
                </TabsList>
                <TabsContent value="budget" />
                <TabsContent value="mid" />
                <TabsContent value="luxury" />
              </Tabs>
              <div className="rounded-md border p-4">
                <p className="text-sm">Estimated total</p>
                <p className="text-2xl font-semibold">${cost.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sample Itinerary Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Day 1: Arrival & Old Town Walk", "Day 2: Food Tour & Museum", "Day 3: Day Trip to National Park"].map(
                (d) => (
                  <div key={d} className="flex items-center justify-between rounded-md border p-3">
                    <span className="text-sm">{d}</span>
                    <span className="text-xs text-muted-foreground">$ • •</span>
                  </div>
                ),
              )}
              <div className="rounded-md border p-3 text-sm text-muted-foreground">
                Map route planning:
                <img
                  src="/map-route-planning-preview.png"
                  alt="Map route planning preview"
                  className="mt-2 w-full rounded"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
