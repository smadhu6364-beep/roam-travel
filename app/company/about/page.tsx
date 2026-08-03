import Shell from "@/components/site/shell"

export default function AboutPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-semibold">About Roam</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Our mission is to make travel planning simple, transparent, and fun.
        </p>
      </section>
    </Shell>
  )
}
