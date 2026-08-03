"use client"

import Shell from "@/components/site/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function PaymentPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Payment</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Cardholder Name</Label>
                <Input id="name" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Card Number</Label>
                <Input id="number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="exp">Expiry</Label>
                  <Input id="exp" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />{" "}
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link className="text-sky-600" href="/legal/terms">
                    Terms & Conditions
                  </Link>
                </Label>
              </div>
              <Link
                href="/booking/confirmation"
                className="inline-block rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
              >
                Pay and Confirm
              </Link>
            </div>
            <div className="rounded-md border p-4 text-sm">
              <h3 className="font-semibold">Order Summary</h3>
              <div className="mt-2 flex items-center justify-between">
                <span>Flights</span>
                <span>$900</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Hotels</span>
                <span>$1,100</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Activities</span>
                <span>$500</span>
              </div>
              <div className="mt-2 border-t pt-2 flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>$2,500</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Shell>
  )
}
