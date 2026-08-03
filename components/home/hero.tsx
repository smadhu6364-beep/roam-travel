"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  const [q, setQ] = useState("")
  return (
    <section className="border-b bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Plan. Explore. Experience.</h1>
          <p className="mt-4 text-pretty text-muted-foreground">
            Turn inspiration into stress-free itineraries with real-time costs, expert tips, and secure bookings.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <Link href="/planner">Start Planning</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#demo">Watch Demo</Link>
            </Button>
          </div>

          <form
            className="mt-8 flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = `/destinations?query=${encodeURIComponent(q)}`
            }}
            aria-label="Quick trip search"
          >
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search a destination (e.g., Tokyo)"
              aria-label="Destination"
            />
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600">
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
