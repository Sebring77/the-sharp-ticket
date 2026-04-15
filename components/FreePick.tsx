export default function FreePick() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 bg-sharp-border" />
          <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Free Pick — Wednesday April 15</span>
          <span className="h-px flex-1 bg-sharp-border" />
        </div>

        {/* Card */}
        <div className="relative bg-sharp-card border-glow rounded-xl overflow-hidden glow-box">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-sharp-green via-sharp-gold to-sharp-green" />

          <div className="p-8">
            {/* Game info */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <p className="text-sharp-muted text-xs font-medium tracking-widest uppercase mb-1">Tonight's Play</p>
                <p className="text-white font-semibold">NY Mets @ LA Dodgers</p>
                <p className="text-sharp-muted text-sm">10:10 PM ET · Dodger Stadium</p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-sharp-green/10 border border-sharp-green/30 text-sharp-green text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                  PITCHER PROP
                </span>
              </div>
            </div>

            {/* The Pick */}
            <div className="bg-black/40 rounded-lg p-6 mb-6">
              <p className="text-sharp-muted text-xs font-bold tracking-widest uppercase mb-2">The Pick</p>
              <p className="text-3xl font-black text-sharp-green glow-green mb-1">
                OHTANI OVER 6.5 K's
              </p>
              <p className="text-xl font-bold text-sharp-gold">-135</p>
            </div>

            {/* Analysis */}
            <div className="space-y-3 mb-6">
              <p className="text-white/80 text-sm leading-relaxed">
                The Mets come in at <span className="text-white font-semibold">7-11</span> and are missing Juan Soto — their best bat — on the injured list with a calf strain. Ohtani is at home at Dodger Stadium, where he dominates. <span className="text-sharp-green font-semibold">59°F, zero rain, wind blowing out.</span>
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                ESPN's model projects a <span className="text-sharp-gold font-bold">72% win probability</span> on this prop. Against a depleted lineup, Ohtani's splitter generates elite swing-and-miss rates. This is the sharpest play on the board tonight.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/subscribe"
                className="flex-1 text-center bg-sharp-green text-black font-bold py-3 px-6 rounded-lg hover:bg-sharp-gold transition-colors text-sm"
              >
                Get the Full Card — $29/mo
              </a>
              <a
                href="/picks"
                className="flex-1 text-center bg-transparent border border-sharp-border text-white/70 font-semibold py-3 px-6 rounded-lg hover:border-sharp-green hover:text-sharp-green transition-colors text-sm"
              >
                See Full Analysis
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sharp-muted text-xs mt-4">
          Free pick updated daily. One public pick per day — full card available to subscribers.
        </p>
      </div>
    </section>
  )
}
