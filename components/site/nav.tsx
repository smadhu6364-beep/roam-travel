"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/mobile", label: "Mobile" },
]

export function SiteNav() {
  const pathname = usePathname()
  const isAuthed = false // replace with real auth later

  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-xl tracking-tight">
          <span className="text-sky-600">Roam</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm text-muted-foreground hover:text-foreground transition-colors",
                pathname === l.href && "text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
          {isAuthed && (
            <Link
              href="/dashboard"
              className={cn(
                "text-sm text-muted-foreground hover:text-foreground transition-colors",
                pathname.startsWith("/dashboard") && "text-foreground",
              )}
            >
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {!isAuthed ? (
            <>
              <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">
                Login
              </Link>
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <Button asChild variant="outline">
              <Link href="/logout">Logout</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
