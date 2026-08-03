import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Trip</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Tokyo, 7 days, in planning</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Passport valid, visa not required.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Expert review ready.</CardContent>
          </Card>
        </div>
      </section>
    </Shell>
  )
}
