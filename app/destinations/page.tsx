"use client"

import Shell from "@/components/site/shell"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useMemo, useState } from "react"
import { DestinationFilters, type Filters } from "@/components/destinations/filters"

const DATA = [
  { slug: "tokyo", name: "Tokyo, Japan", budget: "mid", season: "spring", activity: "food" },
  { slug: "paris", name: "Paris, France", budget: "luxury", season: "autumn", activity: "culture" },
  { slug: "bali", name: "Bali, Indonesia", budget: "budget", season: "summer", activity: "nature" },
  { slug: "new-york", name: "New York, USA", budget: "luxury", season: "winter", activity: "nightlife" },
  { slug: "rome", name: "Rome, Italy", budget: "mid", season: "spring", activity: "culture" },
  { slug: "cape-town", name: "Cape Town, South Africa", budget: "mid", season: "summer", activity: "adventure" },
] as const

export default function DestinationsPage() {
  const [q, setQ] = useState("")
  const [filters, setFilters] = useState<Filters>({})

  const filtered = useMemo(() => {
    return DATA.filter((d) => {
      const matchesText = d.name.toLowerCase().includes(q.toLowerCase())
      const matchesBudget = filters.budget ? d.budget === filters.budget : true
      const matchesSeason = filters.season ? d.season === filters.season : true
      const matchesActivity = filters.activity ? d.activity === filters.activity : true
      return matchesText && matchesBudget && matchesSeason && matchesActivity
    })
  }, [q, filters])

  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-semibold">Destinations</h1>
            <div className="md:w-80">
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search destination..." />
            </div>
          </div>

          <DestinationFilters value={filters} onChange={setFilters} />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((d) => (
            <Card key={d.slug} asChild>
              <Link href={`/destinations/${d.slug}`}>
                <CardHeader>
                  <CardTitle className="text-base">{d.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={`/abstract-geometric-shapes.png?height=140&width=360&query=${encodeURIComponent(d.name)}%20city%20image`}
                    alt={`${d.name} city`}
                    className="w-full rounded"
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    {d.budget[0]?.toUpperCase() + d.budget.slice(1)} • {d.season} • {d.activity}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </Shell>
  )
}
