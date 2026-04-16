import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-sharp-border bg-sharp-dark py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase block">The</span>
              <span className="text-2xl font-black text-sharp-green glow-green" style={{ fontFamily: 'Oswald, sans-serif' }}>SHARP TICKET</span>
              <span className="text-[9px] font-medium tracking-[0.25em] text-sharp-gold uppercase block">Where Smart Money Talks</span>
            </div>
            <p className="text-sharp-muted text-xs leading-relaxed">
              Daily MLB picks, props, and analysis. One free pick every day. Full card for subscribers.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Navigate</p>
            <ul className="space-y-2">
              {[
                { label: "Today's Card", href: "/" },
                { label: "All Picks", href: "/picks" },
                { label: "Podcast", href: "/podcast" },
                { label: "Track Record", href: "/record" },
                { label: "Subscribe", href: "/subscribe" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sharp-muted text-sm hover:text-sharp-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Contact</p>
            <ul className="space-y-2">
              <li>
                <a href="tel:+17018902274" className="text-sharp-muted text-sm hover:text-sharp-green transition-colors">
                  701-890-CASH
                </a>
              </li>
              <li>
                <a href="mailto:cash@thesharpticket.com" className="text-sharp-muted text-sm hover:text-sharp-green transition-colors">
                  cash@thesharpticket.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://x.com/thesharpticket" target="_blank" rel="noopener noreferrer" className="text-sharp-muted hover:text-sharp-green transition-colors text-sm">X / Twitter</a>
              <a href="#" className="text-sharp-muted hover:text-sharp-green transition-colors text-sm">TikTok</a>
              <a href="#" className="text-sharp-muted hover:text-sharp-green transition-colors text-sm">Instagram</a>
              <a href="#" className="text-sharp-muted hover:text-sharp-green transition-colors text-sm">Spotify</a>
            </div>
          </div>
        </div>

        <div className="border-t border-sharp-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sharp-muted text-xs">
            © 2026 The Sharp Ticket. All rights reserved.
          </p>
          <p className="text-sharp-muted text-xs text-center md:text-right max-w-md">
            For entertainment purposes only. Must be 21+ to bet. Please gamble responsibly.
            Problem gambling helpline: 1-800-GAMBLER (1-800-426-2537)
          </p>
        </div>
      </div>
    </footer>
  )
}
