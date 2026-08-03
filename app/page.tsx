import Shell from "@/components/site/shell"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { SocialProof } from "@/components/home/social-proof"
import { Demo } from "@/components/home/demo"

export default function HomePage() {
  return (
    <Shell>
      <Hero />
      <Features />
      <SocialProof />
      <Demo />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-md border bg-muted/30 p-6">
          <h2 className="text-xl font-semibold">Try the full planner</h2>
          <p className="mt-2 text-sm text-muted-foreground">Build, budget, and book your next adventure seamlessly.</p>
          <a href="/planner" className="mt-4 inline-block rounded bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
            Open Trip Planner
          </a>
        </div>
      </section>
    </Shell>
  )
}
