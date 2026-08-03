import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, PlaySquare, ShieldCheck, Globe2, Smartphone, BadgeCheck } from "lucide-react"

const features = [
  { title: "Instant Cost Calculator", Icon: Calculator, desc: "Live budget breakdown as you plan." },
  { title: "Epic Visual Previews", Icon: PlaySquare, desc: "Short clips and galleries to explore." },
  { title: "Expert Validation", Icon: BadgeCheck, desc: "Trusted advice from verified experts." },
  { title: "Secure Booking", Icon: ShieldCheck, desc: "Protected payments and policies." },
  { title: "Global Network", Icon: Globe2, desc: "Destinations and partners worldwide." },
  { title: "Mobile Experience", Icon: Smartphone, desc: "Plan anywhere with offline access." },
]

export function Features() {
  return (
    <section className="border-b bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Everything you need to roam smarter</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {features.map(({ title, Icon, desc }) => (
            <Card key={title} className="h-full">
              <CardHeader className="flex flex-row items-center gap-3">
                <Icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
