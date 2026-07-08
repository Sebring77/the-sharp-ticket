'use client'

import { useState } from 'react'

export default function ManageSubscriptionButton({ sessionId }: { sessionId: string }) {
  const [loading, setLoading] = useState(false)

  async function openPortal() {
    setLoading(true)
    try {
      const res = await fetch('/api/portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
        return
      }
    } catch {
      // fall through to reset
    }
    setLoading(false)
  }

  return (
    <button
      onClick={openPortal}
      disabled={loading}
      className="text-sharp-muted hover:text-white text-sm underline underline-offset-4 transition-colors disabled:opacity-50"
    >
      {loading ? 'Opening…' : 'Manage subscription'}
    </button>
  )
}
