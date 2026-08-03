import Shell from "@/components/site/shell"

export default function HowItWorksPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-semibold">How Roam Works</h1>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Choose a destination and customize your itinerary.</li>
          <li>Track your budget with live cost updates.</li>
          <li>Book securely and get expert review if you like.</li>
        </ol>
      </section>
    </Shell>
  )
}
