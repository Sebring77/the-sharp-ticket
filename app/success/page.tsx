import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Stripe from 'stripe'
import ManageSubscriptionButton from '@/components/ManageSubscriptionButton'

// Must render per-request: verifies the Stripe checkout session from ?session_id.
export const dynamic = 'force-dynamic'

// Verified member state, looked up server-side from the Stripe checkout session.
// Page renders gracefully in three tiers: verified session → generic paid landing
// (no/invalid session_id) → same generic landing when STRIPE_SECRET_KEY not yet set.
type Verified = {
  email: string | null
  plan: string
  sessionId: string
}

async function verifySession(sessionId?: string): Promise<Verified | null> {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key || !sessionId || !sessionId.startsWith('cs_')) return null
  try {
    const stripe = new Stripe(key)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    })
    if (session.payment_status !== 'paid') return null
    return {
      email: session.customer_details?.email ?? null,
      plan: session.line_items?.data?.[0]?.description ?? 'Sharp Ticket Membership',
      sessionId,
    }
  } catch {
    return null
  }
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const verified = await verifySession(searchParams?.session_id)
  const tgInvite = process.env.MEMBERS_TG_INVITE_URL

  return (
    <main className="min-h-screen bg-sharp-dark">
      <Header />
      <div className="pt-16">
        <section className="py-32 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-5xl mb-6">🎯</p>
            <h1 className="text-4xl font-black text-white mb-4">You&apos;re In.</h1>
            <p className="text-sharp-green font-bold text-xl mb-6">
              Welcome to The Sharp Ticket.
            </p>

            {verified ? (
              <div className="bg-sharp-card border border-sharp-border rounded-xl p-6 mb-8 text-left">
                <p className="text-white/80 mb-2">
                  <span className="text-sharp-muted">Membership:</span> {verified.plan}
                </p>
                {verified.email && (
                  <p className="text-white/80 mb-2">
                    <span className="text-sharp-muted">Receipt sent to:</span> {verified.email}
                  </p>
                )}
                <p className="text-white/60 text-sm mt-4">
                  Your full card — The Call, premium props, and the Hit Parade — drops
                  every morning before first pitch.
                </p>
              </div>
            ) : (
              <p className="text-white/60 mb-10 leading-relaxed">
                Your payment is confirmed with Stripe. Your full card — game winners,
                props, and analysis — drops every morning before the games start. Your
                Stripe receipt email has your access details.
              </p>
            )}

            {verified && tgInvite && (
              <a
                href={tgInvite}
                className="inline-block bg-sharp-green text-black font-bold py-3 px-8 rounded-lg hover:bg-sharp-gold transition-colors mb-4"
              >
                Join the Members Group →
              </a>
            )}

            <div className="flex flex-col items-center gap-3 mt-4">
              {verified && <ManageSubscriptionButton sessionId={verified.sessionId} />}
              <Link
                href="/"
                className="inline-block text-white/60 hover:text-sharp-green transition-colors"
              >
                See Today&apos;s Free Pick
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
