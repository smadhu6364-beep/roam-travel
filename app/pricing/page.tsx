import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const tiers = [
    { name: "Free", price: "$0", features: ["Basic planner", "Community tips"] },
    { name: "Plus", price: "$8/mo", features: ["Advanced builder", "Cost calculator", "Email support"] },
    { name: "Pro", price: "$19/mo", features: ["Expert review", "Export to PDF", "Priority support"] },
  ]
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Pricing</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name}>
              <CardHeader>
                <CardTitle>{t.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="text-3xl font-bold">{t.price}</div>
                <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Shell>
  )
}
