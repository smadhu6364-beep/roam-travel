import type React from "react"
import { SiteNav } from "./nav"
import { SiteFooter } from "./footer"

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
