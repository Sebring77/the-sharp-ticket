'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sharp-dark/95 backdrop-blur-sm border-b border-sharp-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_official.jpg"
            alt="The Sharp Ticket — Where Smart Money Talks"
            height={44}
            width={180}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white/70 hover:text-sharp-green transition-colors">
            Today's Card
          </Link>
          <Link href="/picks" className="text-sm font-medium text-white/70 hover:text-sharp-green transition-colors">
            All Picks
          </Link>
          <Link href="/podcast" className="text-sm font-medium text-white/70 hover:text-sharp-green transition-colors">
            Podcast
          </Link>
          <Link href="/record" className="text-sm font-medium text-white/70 hover:text-sharp-green transition-colors">
            Track Record
          </Link>
          <Link
            href="/subscribe"
            className="px-4 py-2 bg-sharp-green text-black text-sm font-bold rounded hover:bg-sharp-gold transition-colors"
          >
            Subscribe
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-sharp-card border-t border-sharp-border px-4 py-4 space-y-3">
          <Link href="/" className="block text-sm font-medium text-white/70 hover:text-sharp-green py-2" onClick={() => setMenuOpen(false)}>Today's Card</Link>
          <Link href="/picks" className="block text-sm font-medium text-white/70 hover:text-sharp-green py-2" onClick={() => setMenuOpen(false)}>All Picks</Link>
          <Link href="/podcast" className="block text-sm font-medium text-white/70 hover:text-sharp-green py-2" onClick={() => setMenuOpen(false)}>Podcast</Link>
          <Link href="/record" className="block text-sm font-medium text-white/70 hover:text-sharp-green py-2" onClick={() => setMenuOpen(false)}>Track Record</Link>
          <Link
            href="/subscribe"
            className="block w-full text-center px-4 py-2 bg-sharp-green text-black text-sm font-bold rounded hover:bg-sharp-gold transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Subscribe — $29/mo
          </Link>
        </div>
      )}
    </header>
  )
}
