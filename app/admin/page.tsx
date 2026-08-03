import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Expert Dashboard</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Review Queue</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center justify-between rounded border p-2">
                <span>Tokyo itinerary (7 days)</span>
                <a href="#" className="text-sky-600">
                  Open
                </a>
              </div>
              <div className="flex items-center justify-between rounded border p-2">
                <span>Paris weekend (3 days)</span>
                <a href="#" className="text-sky-600">
                  Open
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Add/edit destinations, upload media, update pricing, and manage expert profiles.
            </CardContent>
          </Card>
        </div>
      </section>
    </Shell>
  )
}
