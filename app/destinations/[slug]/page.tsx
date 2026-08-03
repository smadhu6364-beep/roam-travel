import Shell from "@/components/site/shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DestinationDetail({ params }: { params: { slug: string } }) {
  const name = params.slug
    .split("-")
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join(" ")
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-sm text-muted-foreground">Best time, budget ranges, and trip duration at a glance.</p>
          <div className="rounded-md border">
            <img src="/destination-hero-video-preview.png" alt={`${name} destination preview`} className="w-full rounded" />
          </div>
        </div>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="things">Things to do</TabsTrigger>
            <TabsTrigger value="stay">Where to stay</TabsTrigger>
            <TabsTrigger value="info">Travel info</TabsTrigger>
            <TabsTrigger value="community">User content</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4 grid gap-4 md:grid-cols-3">
            {["Old Town Walk", "Museum District", "River Cruise", "Street Food Night"].map((h) => (
              <Card key={h}>
                <CardHeader>
                  <CardTitle className="text-base">{h}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/highlight-image.png" alt={`${h} highlight`} className="w-full rounded" />
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="things" className="mt-4 grid gap-4 md:grid-cols-3">
            {["Adventure", "Culture", "Food", "Nightlife", "Nature"].map((c) => (
              <Card key={c}>
                <CardHeader>
                  <CardTitle className="text-base">{c}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Browse curated activities with pricing and reviews.
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="stay" className="mt-4 grid gap-4 md:grid-cols-3">
            {["Budget", "Mid-range", "Luxury"].map((t) => (
              <Card key={t}>
                <CardHeader>
                  <CardTitle className="text-base">{t} Hotels</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/hotel-card-image.png" alt={`${t} hotels`} className="w-full rounded" />
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="info" className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Visa requirements and timelines",
              "Health & safety advisories",
              "Money & tipping guide",
              "Weather by season",
              "Cultural etiquette & language",
            ].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{i}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Up-to-date details to help you prepare.
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="community" className="mt-4 grid gap-4 md:grid-cols-2">
            {["Trip report: 5 days in town", "Photo gallery: Markets & Food", "Tips & tricks", "Q&A"].map((u) => (
              <Card key={u}>
                <CardHeader>
                  <CardTitle className="text-base">{u}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Community-driven insights and media.
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </Shell>
  )
}
