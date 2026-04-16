import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const weeklyRecord = [
  {
    week: 'Apr 13–19, 2026',
    gameWinners: { W: 4, L: 1 },
    props: { W: 2, L: 3 },
    unitsNet: +0.4,
    freePick: { pick: 'Ohtani OVER 6.5 K (-135)', result: 'WIN', notes: '9 Ks' },
  },
]

const lifetime = {
  gameWinners: { W: 4, L: 1 },
  props: { W: 2, L: 3 },
  total: { W: 6, L: 4 },
  unitsNet: +0.4,
  trackingSince: 'April 15, 2026',
}

export default function RecordPage() {
  const winPct = Math.round((lifetime.total.W / (lifetime.total.W + lifetime.total.L)) * 100)

  return (
    <main className="min-h-screen bg-sharp-dark">
      <Header />
      <div className="pt-16">
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px flex-1 bg-sharp-border" />
              <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Verified Track Record</span>
              <span className="h-px flex-1 bg-sharp-border" />
            </div>

            {/* Lifetime Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Game Winners', value: `${lifetime.gameWinners.W}-${lifetime.gameWinners.L}`, sub: `${Math.round(lifetime.gameWinners.W / (lifetime.gameWinners.W + lifetime.gameWinners.L) * 100)}% win rate` },
                { label: 'Props', value: `${lifetime.props.W}-${lifetime.props.L}`, sub: `${Math.round(lifetime.props.W / (lifetime.props.W + lifetime.props.L) * 100)}% win rate` },
                { label: 'Units Net', value: `+${lifetime.unitsNet}`, sub: 'Since launch' },
                { label: 'Free Pick', value: '1-0', sub: 'Ohtani 9 K ✅' },
              ].map((stat) => (
                <div key={stat.label} className="bg-sharp-card border border-sharp-border rounded-lg p-5 text-center">
                  <p className="text-3xl font-black text-sharp-green mb-1">{stat.value}</p>
                  <p className="text-white text-sm font-semibold mb-1">{stat.label}</p>
                  <p className="text-sharp-muted text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Transparency statement */}
            <div className="bg-sharp-card border border-sharp-border rounded-xl p-8 mb-10">
              <p className="text-sharp-green font-bold text-lg mb-3">Transparency Is the Product</p>
              <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-3">
                Every pick is published before game time. Every result is logged. No cherry-picking. No revisionist history. Tracking since <span className="text-white font-semibold">{lifetime.trackingSince}</span>.
              </p>
              <p className="text-sharp-muted text-xs">Full pick-by-pick history available to subscribers below.</p>
            </div>

            {/* Weekly breakdown */}
            <h2 className="text-white font-bold text-xl mb-6">Weekly Breakdown</h2>

            {weeklyRecord.map((week) => (
              <div key={week.week} className="bg-sharp-card border border-sharp-border rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <p className="text-sharp-green font-bold text-lg">{week.week}</p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div className="text-center">
                      <p className="text-white font-bold">{week.gameWinners.W}-{week.gameWinners.L}</p>
                      <p className="text-sharp-muted text-xs">Game Winners</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold">{week.props.W}-{week.props.L}</p>
                      <p className="text-sharp-muted text-xs">Props</p>
                    </div>
                    <div className="text-center">
                      <p className={`font-bold ${week.unitsNet >= 0 ? 'text-sharp-green' : 'text-red-400'}`}>
                        {week.unitsNet >= 0 ? '+' : ''}{week.unitsNet}
                      </p>
                      <p className="text-sharp-muted text-xs">Units</p>
                    </div>
                  </div>
                </div>

                {/* Free pick highlight */}
                <div className="bg-black/30 rounded-lg p-4 border border-sharp-green/20">
                  <p className="text-sharp-green text-xs font-bold uppercase tracking-wider mb-1">Free Pick of the Week</p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-semibold text-sm">{week.freePick.pick}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sharp-muted text-xs">{week.freePick.notes}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${week.freePick.result === 'WIN' ? 'bg-sharp-green/20 text-sharp-green' : 'bg-red-500/20 text-red-400'}`}>
                        {week.freePick.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Subscriber CTA */}
            <div className="bg-sharp-card border border-sharp-green/20 rounded-xl p-8 text-center">
              <p className="text-sharp-green font-bold text-lg mb-2">Full Pick-by-Pick History</p>
              <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                Every game winner, every prop, every result — with full analysis notes. Available to subscribers.
              </p>
              <Link
                href="/subscribe"
                className="inline-block bg-sharp-green text-black font-bold py-3 px-8 rounded-lg hover:bg-sharp-gold transition-colors text-sm"
              >
                Unlock Full History — $29/mo
              </Link>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
