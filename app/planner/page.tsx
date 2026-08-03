import Shell from "@/components/site/shell"
import CostCalculator from "@/components/planner/cost-calculator"
import ItineraryBuilder from "@/components/planner/itinerary-builder"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ExpertReview from "@/components/planner/expert-review"

export default function PlannerPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
          <Card>
            <CardHeader>
              <CardTitle>Destination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Weather: 22°C, sunny</p>
              <p>Tips: Buy transit pass, reserve popular spots.</p>
              <div className="rounded border p-2">
                <img src="/detailed-city-map.png" alt="Map preview" className="w-full rounded" />
              </div>
            </CardContent>
          </Card>

          <ItineraryBuilder />

          <div className="space-y-6">
            <CostCalculator />
            <ExpertReview />
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Flights</span>
                  <span>$—</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hotels</span>
                  <span>$—</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Activities</span>
                  <span>$—</span>
                </div>
                <a
                  href="/booking/review"
                  className="mt-3 inline-block rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
                >
                  Review & Book
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Shell>
  )
}
