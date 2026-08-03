import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function ProfileSettingsPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Profile Settings</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 555 123 4567" />
              </div>
              <Button className="w-fit bg-sky-600 hover:bg-sky-700">Save</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Travel Preferences</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="space-y-2">
                <Label>Budget</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget</SelectItem>
                    <SelectItem value="mid">Mid-range</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Style</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="culture">Culture</SelectItem>
                    <SelectItem value="food">Food & Wine</SelectItem>
                    <SelectItem value="relax">Relaxation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Allergies, accessibility, etc." rows={4} />
              </div>
              <Button variant="outline">Update Preferences</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <div className="rounded border p-3">Passport: Upload or update</div>
              <div className="rounded border p-3">Visas: Upload or update</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <div className="rounded border p-3">Email notifications: On</div>
              <div className="rounded border p-3">Privacy controls: Manage data</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Shell>
  )
}
