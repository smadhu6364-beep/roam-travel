import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BookingReviewPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Review your trip</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Itinerary</span>
              <span>7 days</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Destination</span>
              <span>Tokyo, Japan</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total Cost</span>
              <span>$2,500</span>
            </div>
            <Link
              href="/booking/payment"
              className="mt-4 inline-block rounded bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
            >
              Continue to Payment
            </Link>
          </CardContent>
        </Card>
      </section>
    </Shell>
  )
}
