"use client"

import Shell from "@/components/site/shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSupportPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Contact Support</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Start a real-time conversation with our team.
              <div className="mt-3">
                <Button className="bg-sky-600 hover:bg-sky-700">Open Chat</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Request a Callback</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Schedule a call with a travel specialist.
              <div className="mt-3">
                <Button variant="outline">Schedule Call</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="msg">Message</Label>
              <Textarea id="msg" rows={5} />
            </div>
            <Button className="w-fit bg-amber-500 hover:bg-amber-600">Send</Button>
          </CardContent>
        </Card>
      </section>
    </Shell>
  )
}
