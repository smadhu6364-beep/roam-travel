import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function SocialProof() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold">Trusted by travelers</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">500k+</strong> trips planned
              </li>
              <li>
                <strong className="text-foreground">190+</strong> countries covered
              </li>
              <li>
                <strong className="text-foreground">97%</strong> satisfaction rate
              </li>
            </ul>
          </div>
          <Card className="md:col-span-2">
            <CardContent className="grid gap-4 p-4 md:grid-cols-2">
              {[
                { name: "Lena", quote: "Roam made budgeting and planning for Japan effortless." },
                { name: "Mateo", quote: "Expert tips saved us hours and kept our costs on track." },
              ].map((t) => (
                <figure key={t.name} className="flex items-start gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <blockquote className="text-sm text-muted-foreground">
                    “{t.quote}”<figcaption className="mt-1 text-xs text-foreground">{t.name}</figcaption>
                  </blockquote>
                </figure>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
