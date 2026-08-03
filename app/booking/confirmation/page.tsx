import Shell from "@/components/site/shell"

export default function ConfirmationPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Booking Confirmed</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Reference #: ROAM-{Math.floor(Math.random() * 900000 + 100000)}
        </p>
        <div className="mt-6 rounded-md border bg-muted/30 p-6 text-left">
          <h2 className="font-semibold">Next Steps</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>Check your email for confirmation and receipts</li>
            <li>Add to your calendar</li>
            <li>Download the mobile app for offline access</li>
          </ul>
        </div>
      </section>
    </Shell>
  )
}
