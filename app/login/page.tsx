"use client"

import Shell from "@/components/site/shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-md px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Login to continue planning.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Link href="/reset-password" className="text-sm text-sky-600">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full bg-sky-600 hover:bg-sky-700">Login</Button>
            <div className="text-center text-sm text-muted-foreground">or</div>
            <div className="grid gap-2 sm:grid-cols-2">
              <Button variant="outline">Continue with Google</Button>
              <Button variant="outline">Continue with Facebook</Button>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              No account?{" "}
              <Link href="/signup" className="text-sky-600">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </Shell>
  )
}
