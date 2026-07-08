import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secretKey || !webhookSecret) {
    // Env not wired yet — refuse loudly so Stripe retries instead of marking delivered.
    return NextResponse.json({ error: 'Stripe env not configured' }, { status: 503 })
  }
  const stripe = new Stripe(secretKey)

  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      // customer_details.email is the reliable field on Payment Link checkouts;
      // customer_email is often null there.
      const email = session.customer_details?.email ?? session.customer_email
      console.log(`[Stripe] New subscriber: ${email} | Session: ${session.id} | Customer: ${session.customer}`)
      // Membership roster of record = Stripe itself (active subscriptions).
      // Ops-side sync: agents/sharp-ticket/tools/members_sync.py
      break
    }

    case 'customer.subscription.created': {
      const sub = event.data.object as Stripe.Subscription
      console.log(`[Stripe] Subscription created: ${sub.id} | Customer: ${sub.customer} | Status: ${sub.status}`)
      break
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription
      console.log(`[Stripe] Subscription updated: ${sub.id} | Status: ${sub.status}`)
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      console.log(`[Stripe] Subscription cancelled: ${sub.id} | Customer: ${sub.customer}`)
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice
      console.log(`[Stripe] Payment succeeded: ${invoice.id} | Customer: ${invoice.customer}`)
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      console.error(`[Stripe] Payment failed: ${invoice.id} | Customer: ${invoice.customer}`)
      break
    }

    default:
      console.log(`[Stripe] Unhandled event: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
