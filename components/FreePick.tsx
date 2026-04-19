export default function FreePick() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 bg-sharp-border" />
          <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Free Pick — Sunday April 19 · Sunday Night Baseball</span>
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
                <p className="text-white font-semibold">Atlanta Braves @ Philadelphia Phillies</p>
                <p className="text-sharp-muted text-sm">7:20 PM ET · Citizens Bank Park · Peacock</p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-sharp-green/10 border border-sharp-green/30 text-sharp-green text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                  GAME WINNER
                </span>
              </div>
            </div>

            {/* The Pick */}
            <div className="bg-black/40 rounded-lg p-6 mb-6">
              <p className="text-sharp-muted text-xs font-bold tracking-widest uppercase mb-2">The Pick</p>
              <p className="text-3xl font-black text-sharp-green glow-green mb-1">
                ATLANTA BRAVES ML
              </p>
              <p className="text-xl font-bold text-sharp-gold">+100</p>
            </div>

            {/* Analysis */}
            <div className="space-y-3 mb-6">
              <p className="text-white/80 text-sm leading-relaxed">
                Atlanta is <span className="text-white font-semibold">14-7 — the best record in baseball</span>. Playing even money tonight as the road team against a Philadelphia squad sitting at 8-12. The public is on the Phillies at home. The sharp money is on the Braves at plus-100.
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Grant Holmes starts for Atlanta with a <span className="text-sharp-green font-semibold">3.16 xERA (71st percentile)</span> — his advanced metrics are elite. This is a rubber game. The better team covers rubber games. <span className="text-sharp-gold font-bold">Best record in baseball. Even money. Back the Braves.</span>
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
