"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type Item = { id: string; title: string }

export default function ItineraryBuilder() {
  const [items, setItems] = useState<Item[]>([
    { id: "d1", title: "Arrival & Check-in" },
    { id: "d2", title: "City Walking Tour" },
  ])
  const [newTitle, setNewTitle] = useState("")

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Itinerary</CardTitle>
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            if (!newTitle.trim()) return
            setItems((prev) => [...prev, { id: crypto.randomUUID(), title: newTitle.trim() }])
            setNewTitle("")
          }}
        >
          <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Add item..." />
          <Button type="submit" className="bg-sky-600 hover:bg-sky-700">
            Add
          </Button>
        </form>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((i, idx) => (
          <div key={i.id} className="flex items-center justify-between rounded-md border p-3">
            <div className="text-sm">
              <span className="mr-2 rounded bg-muted px-2 py-0.5 text-xs">Day {idx + 1}</span>
              {i.title}
            </div>
            <Button variant="ghost" size="sm" onClick={() => setItems((prev) => prev.filter((x) => x.id !== i.id))}>
              Remove
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
