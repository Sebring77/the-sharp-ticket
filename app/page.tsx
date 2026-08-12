import LogoSVG from '@/components/LogoSVG'

// COMING SOON — Joey's instruction 2026-08-12 (TG 2820): "take the sharpticket website
// to a coming soon page ... I don't think we will be able to launch it."
//
// This page deliberately makes NO performance claim. The version it replaced was publishing
// "83.3% V2 Win Rate / 5-1 / +1.88u" — a frozen six-pick snapshot against a real premium
// record of 124-58. Do not reintroduce a headline number here without wiring it to
// lib/record.json via scripts/sync_website_record.py, and do not relaunch marketing copy
// without Joey's explicit go-ahead.
//
// The "notify me" control is a mailto, not a form. The previous EmailCapture component
// looked like a signup box but called preventDefault() with no handler — it silently
// discarded every address. A mailto actually reaches an inbox. Do not swap a decorative
// form back in.

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-hero-gradient flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl text-center">

        <LogoSVG className="w-64 md:w-80 mx-auto mb-10" />

        <p className="text-sharp-green text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase mb-6">
          Coming Soon
        </p>

        <h1
          className="text-3xl md:text-5xl font-black text-white leading-tight mb-6"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          We&rsquo;re building
          <br />
          something better.
        </h1>

        <p className="text-sharp-muted text-base md:text-lg leading-relaxed mb-10">
          The Sharp Ticket is off the air while we get it right.
          No picks, no subscriptions, nothing to buy today.
        </p>

        <div className="h-px w-16 bg-sharp-border mx-auto mb-10" />

        <p className="text-white/70 text-sm mb-4">
          Want to know when it&rsquo;s back?
        </p>

        <a
          href="mailto:Jlang@j38group.com?subject=The%20Sharp%20Ticket%20%E2%80%94%20let%20me%20know%20when%20you%20launch&body=Hi%20Joey%2C%20please%20add%20me%20to%20the%20list."
          className="inline-block px-7 py-3 bg-sharp-green text-black font-black rounded-lg hover:bg-sharp-gold transition-colors text-sm"
        >
          Email us
        </a>

      </div>

      <footer className="mt-20 text-center">
        <p className="text-sharp-muted text-xs">
          &copy; {new Date().getFullYear()}{' '}The Sharp Ticket &middot; J38 Group
        </p>
      </footer>
    </main>
  )
}
