export default function FreePick() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 bg-sharp-border" />
          <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Free Pick — Thursday April 16</span>
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
                <p className="text-sharp-muted text-xs font-medium tracking-widest uppercase mb-1">Today's Play</p>
                <p className="text-white font-semibold">SF Giants @ Cincinnati Reds</p>
                <p className="text-sharp-muted text-sm">12:40 PM ET · Great American Ball Park</p>
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
                BURNS OVER 5.5 K's
              </p>
              <p className="text-xl font-bold text-sharp-gold">-140</p>
            </div>

            {/* Analysis */}
            <div className="space-y-3 mb-6">
              <p className="text-white/80 text-sm leading-relaxed">
                Chase Burns carries a <span className="text-white font-semibold">20%+ swinging-strike rate against BOTH lefties and righties</span> — that's elite, two-way miss-bat ability that ranks among the best in the sport. The Giants come in at <span className="text-sharp-green font-semibold">6-11</span>, one of the worst offenses in baseball.
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                At home in Cincinnati, Burns has the command and the arsenal to pile up strikeouts. Weak lineup, ace on the mound, near-even juice. <span className="text-sharp-gold font-bold">This is where sharp money goes.</span>
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
