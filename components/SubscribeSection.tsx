export default function SubscribeSection() {
  return (
    <section className="py-20 px-4 bg-hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase mb-4">The Sharp Ticket Premium</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Stop Guessing.<br />
          <span className="text-sharp-green glow-green">Start Winning.</span>
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
          Daily MLB game winners, 5–10 props, full analysis, and a verified track record. One subscription. Every edge.
        </p>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Monthly */}
          <div className="bg-sharp-card border border-sharp-border rounded-xl p-8 text-left">
            <p className="text-sharp-muted text-sm font-medium uppercase tracking-wider mb-2">Monthly</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-5xl font-black text-white">$29</span>
              <span className="text-sharp-muted mb-2">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Daily game winners card',
                '5–10 prop picks per day',
                'Full written analysis',
                'Weekly W/L track record',
                'Podcast access',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-sharp-green font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-sharp-card border border-sharp-green/50 text-sharp-green font-bold rounded-lg hover:bg-sharp-green hover:text-black transition-all text-sm">
              Subscribe Monthly
            </button>
          </div>

          {/* Annual — featured */}
          <div className="relative bg-sharp-card border-glow rounded-xl p-8 text-left glow-box">
            <div className="h-1 bg-gradient-to-r from-sharp-green to-sharp-gold rounded-t-xl absolute top-0 left-0 right-0" />
            <div className="flex items-center justify-between mb-2">
              <p className="text-sharp-muted text-sm font-medium uppercase tracking-wider">Annual</p>
              <span className="bg-sharp-green text-black text-xs font-bold px-2 py-0.5 rounded">SAVE 28%</span>
            </div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-5xl font-black text-sharp-green">$249</span>
              <span className="text-sharp-muted mb-2">/year</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Everything in monthly',
                'First month free vs monthly',
                'Priority pick alerts',
                'Season-long stat archive',
                'Early access to new features',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-sharp-gold font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-sharp-green text-black font-bold rounded-lg hover:bg-sharp-gold transition-colors text-sm">
              Subscribe Annual — Best Value
            </button>
          </div>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-sharp-muted">
          <span>✓ Cancel anytime</span>
          <span>✓ Track record published weekly</span>
          <span>✓ New picks every morning</span>
          <span>✓ Secure checkout</span>
        </div>
      </div>
    </section>
  )
}
