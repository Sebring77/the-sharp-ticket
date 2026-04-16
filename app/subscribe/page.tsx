'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

const MONTHLY_PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID!
const ANNUAL_PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID!

async function startCheckout(priceId: string, setLoading: (v: string | null) => void) {
  setLoading(priceId)
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId }),
  })
  const { url } = await res.json()
  if (url) window.location.href = url
  else setLoading(null)
}

export default function SubscribePage() {
  const [loading, setLoading] = useState<string | null>(null)
  return (
    <main className="min-h-screen bg-sharp-dark">
      <Header />
      <div className="pt-16">
        <section className="py-20 px-4 bg-hero-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase mb-4">Subscribe</p>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Sharp Picks.<br />
              <span className="text-sharp-green glow-green">Every Morning.</span>
            </h1>
            <p className="text-white/60 text-lg mb-16 max-w-xl mx-auto">
              Daily game winners, 5–10 props, full written analysis, and a verified weekly track record. The full card, every day.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Monthly */}
              <div className="bg-sharp-card border border-sharp-border rounded-xl p-8 text-left">
                <p className="text-sharp-muted text-sm font-medium uppercase tracking-wider mb-2">Monthly</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-black text-white">$29</span>
                  <span className="text-sharp-muted mb-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Daily game winners (5 picks)',
                    '5–10 props per day',
                    'Full written analysis',
                    'Weekly W/L wrap-up',
                    'Podcast episodes',
                    'Cancel anytime',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-sharp-green font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => startCheckout(MONTHLY_PRICE_ID, setLoading)}
                  disabled={!!loading}
                  className="w-full py-3 border border-sharp-green/50 text-sharp-green font-bold rounded-lg hover:bg-sharp-green hover:text-black transition-all text-sm disabled:opacity-60 disabled:cursor-wait"
                >
                  {loading === MONTHLY_PRICE_ID ? 'Redirecting...' : 'Start Monthly — $29/mo'}
                </button>
              </div>

              {/* Annual */}
              <div className="relative bg-sharp-card border-glow rounded-xl p-8 text-left glow-box">
                <div className="h-1 bg-gradient-to-r from-sharp-green to-sharp-gold rounded-t-xl absolute top-0 left-0 right-0" />
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sharp-muted text-sm font-medium uppercase tracking-wider">Annual</p>
                  <span className="bg-sharp-green text-black text-xs font-bold px-2 py-0.5 rounded">BEST VALUE</span>
                </div>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-black text-sharp-green">$249</span>
                  <span className="text-sharp-muted mb-2">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything in monthly',
                    'Save $99 vs monthly',
                    'First month free',
                    'Priority pick alerts',
                    'Full season archive',
                    'Early access to new features',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-sharp-gold font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => startCheckout(ANNUAL_PRICE_ID, setLoading)}
                  disabled={!!loading}
                  className="w-full py-3 bg-sharp-green text-black font-bold rounded-lg hover:bg-sharp-gold transition-colors text-sm disabled:opacity-60 disabled:cursor-wait"
                >
                  {loading === ANNUAL_PRICE_ID ? 'Redirecting...' : 'Start Annual — $249/yr'}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-sharp-muted">
              <span>✓ Cancel anytime</span>
              <span>✓ Secure checkout via Stripe</span>
              <span>✓ New picks every morning</span>
              <span>✓ Record published every Sunday</span>
            </div>

            <p className="text-sharp-muted text-xs mt-8">
              Questions? Call <a href="tel:+17018902274" className="text-sharp-green hover:underline">701-890-CASH</a> or email <a href="mailto:cash@thesharpticket.com" className="text-sharp-green hover:underline">cash@thesharpticket.com</a>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
