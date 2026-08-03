import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MobileDownloadPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-balance">Roam Mobile</h1>
            <p className="text-muted-foreground">
              Plan anywhere with offline itineraries, one-tap actions, and instant updates.
            </p>
            <div className="flex gap-3">
              <Button className="bg-sky-600 hover:bg-sky-700">Download on App Store</Button>
              <Button variant="outline">Get it on Google Play</Button>
            </div>
            <div className="rounded-md border p-4">
              <p className="text-sm font-medium">Scan to download</p>
              <img
                src="/qr-code-for-roam-app.png"
                alt="QR code to download Roam app"
                className="mt-2 h-40 w-40 rounded"
              />
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              <li>Touch-friendly design</li>
              <li>Quick actions: booking, sharing</li>
              <li>Offline access to itineraries</li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/mobile-app-screenshots-preview.png" alt="Roam app interface preview" className="w-full rounded" />
            </CardContent>
          </Card>
        </div>
      </section>
    </Shell>
  )
}
