import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/company/about">About Us</Link>
              </li>
              <li>
                <Link href="/company/team">Team</Link>
              </li>
              <li>
                <Link href="/company/careers">Careers</Link>
              </li>
              <li>
                <Link href="/company/press">Press</Link>
              </li>
              <li>
                <Link href="/company/investors">Investors</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help">Help Center</Link>
              </li>
              <li>
                <Link href="/support/contact">Contact Support</Link>
              </li>
              <li>
                <Link href="/resources/travel-guides">Travel Guides</Link>
              </li>
              <li>
                <Link href="/resources/packing-lists">Packing Lists</Link>
              </li>
              <li>
                <Link href="/resources/news">Travel News</Link>
              </li>
              <li>
                <Link href="/mobile">Mobile App</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/legal/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/legal/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/legal/cookies">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/legal/cancellation">Cancellation Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Follow</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" aria-label="Twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} Roam. All rights reserved.</p>
      </div>
    </footer>
  )
}
