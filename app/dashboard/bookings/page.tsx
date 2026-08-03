import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookingHistoryPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Bookings</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bookings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded border p-3">
                <span>Tokyo Hotel — Check-in Oct 3</span>
                <a href="#" className="text-sky-600">
                  View
                </a>
              </div>
              <div className="flex items-center justify-between rounded border p-3">
                <span>Flight — Oct 2</span>
                <a href="#" className="text-sky-600">
                  Details
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Past Bookings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded border p-3">
                <span>Paris — May 2025</span>
                <a href="#" className="text-sky-600">
                  Receipt
                </a>
              </div>
              <div className="flex items-center justify-between rounded border p-3">
                <span>New York — Jan 2025</span>
                <a href="#" className="text-sky-600">
                  Invoice
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Shell>
  )
}
