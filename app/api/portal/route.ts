import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const { sessionId } = await req.json()

  if (!sessionId || typeof sessionId !== 'string' || !sessionId.startsWith('cs_')) {
    return NextResponse.json({ error: 'Valid Stripe checkout sessionId required' }, { status: 400 })
  }

  try {
    // Look up the customer from the checkout session — avoids IDOR from raw customerId input.
    // The checkout session ID (cs_...) is issued by Stripe and tied to one specific customer.
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId)
    if (!checkoutSession.customer) {
      return NextResponse.json({ error: 'No customer on session' }, { status: 400 })
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer as string,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://thesharpticket.com'}/`,
    })
    return NextResponse.json({ url: portalSession.url })
  } catch (err) {
    console.error('[Stripe Portal]', err)
    return NextResponse.json({ error: 'Failed to create portal session' }, { status: 500 })
  }
}
