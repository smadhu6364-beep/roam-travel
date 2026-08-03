import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HelpPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold">Help Center</h1>
          <p className="mt-2 text-muted-foreground">Find answers about planning, booking, travel, and your account.</p>
          <div className="mt-4">
            <Input placeholder="Search the Help Center..." aria-label="Search help center" />
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Planning", "Booking", "Travel", "Account", "Payments", "Troubleshooting"].map((c) => (
            <Card key={c}>
              <CardHeader>
                <CardTitle>{c}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Popular articles and FAQs</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Shell>
  )
}
