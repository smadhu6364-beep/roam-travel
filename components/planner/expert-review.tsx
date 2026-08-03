"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type Status = "idle" | "submitted" | "in_review" | "completed"

export default function ExpertReview() {
  const [status, setStatus] = useState<Status>("idle")
  const [notes, setNotes] = useState("")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expert Review</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {status === "idle" && (
          <>
            <p className="text-muted-foreground">Submit your itinerary for an expert to validate and optimize.</p>
            <Textarea
              placeholder="Share goals or constraints (dietary needs, pace, accessibility)..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
            <Button className="bg-sky-600 hover:bg-sky-700" onClick={() => setStatus("submitted")}>
              Submit for Review
            </Button>
          </>
        )}

        {status === "submitted" && (
          <div className="rounded-md border p-3">
            <p className="font-medium">Status: Submitted</p>
            <p className="text-muted-foreground">Estimated response in 24 hours.</p>
            <div className="mt-2">
              <Button variant="outline" onClick={() => setStatus("in_review")}>
                Mark as In Review
              </Button>
            </div>
          </div>
        )}

        {status === "in_review" && (
          <div className="rounded-md border p-3">
            <p className="font-medium">Status: In Review</p>
            <p className="text-muted-foreground">An expert is analyzing your itinerary.</p>
            <div className="mt-2">
              <Button variant="outline" onClick={() => setStatus("completed")}>
                Complete Review
              </Button>
            </div>
          </div>
        )}

        {status === "completed" && (
          <div className="space-y-2">
            <div className="rounded-md border p-3">
              <p className="font-medium">Expert Feedback</p>
              <ul className="mt-1 list-disc pl-5 text-muted-foreground">
                <li>Shift museum visit to morning to avoid queues.</li>
                <li>Swap Day 3 activity for a food tour within budget.</li>
                <li>Book rail pass to save ~15% on transit.</li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Request Revisions</Button>
              <Button className="bg-amber-500 hover:bg-amber-600">Apply Suggestions</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
