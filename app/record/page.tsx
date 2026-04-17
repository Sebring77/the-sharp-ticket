import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const weeklyRecord = [
  {
    week: 'Apr 13–19, 2026',
    gameWinners: { W: 6, L: 4 },
    props: { W: 2, L: 7 },
    unitsNet: -5.3,
    freePicks: [
      { pick: 'Ohtani OVER 6.5 K (-135)', result: 'WIN' as const, notes: '9 Ks' },
      { pick: 'Chase Burns OVER 5.5 K (-140)', result: 'LOSS' as const, notes: '4 Ks' },
    ],
  },
]

const lifetime = {
  gameWinners: { W: 6, L: 4 },
  props: { W: 2, L: 7 },
  total: { W: 8, L: 11 },
  unitsNet: -5.3,
  trackingSince: 'April 15, 2026',
}

function formatUnits(u: number) {
  return u >= 0 ? `+${u}` : `${u}`
}

export default function RecordPage() {
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
                { label: 'Game Winners', value: `${lifetime.gameWinners.W}-${lifetime.gameWinners.L}`, sub: `${Math.round(lifetime.gameWinners.W / (lifetime.gameWinners.W + lifetime.gameWinners.L) * 100)}% win rate`, color: 'text-sharp-green' },
                { label: 'Props', value: `${lifetime.props.W}-${lifetime.props.L}`, sub: `${Math.round(lifetime.props.W / (lifetime.props.W + lifetime.props.L) * 100)}% win rate`, color: 'text-sharp-green' },
                { label: 'Units Net', value: formatUnits(lifetime.unitsNet), sub: 'Since launch', color: lifetime.unitsNet >= 0 ? 'text-sharp-green' : 'text-red-400' },
                { label: 'Free Pick', value: '1-1', sub: 'Ohtani ✅ · Burns ❌', color: 'text-sharp-green' },
              ].map((stat) => (
                <div key={stat.label} className="bg-sharp-card border border-sharp-border rounded-lg p-5 text-center">
                  <p className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</p>
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
                        {formatUnits(week.unitsNet)}
                      </p>
                      <p className="text-sharp-muted text-xs">Units</p>
                    </div>
                  </div>
                </div>

                {/* Free picks highlight */}
                <div className="bg-black/30 rounded-lg p-4 border border-sharp-green/20 space-y-2">
                  <p className="text-sharp-green text-xs font-bold uppercase tracking-wider mb-2">Free Picks This Week</p>
                  {week.freePicks.map((fp, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <p className="text-white font-semibold text-sm">{fp.pick}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sharp-muted text-xs">{fp.notes}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${fp.result === 'WIN' ? 'bg-sharp-green/20 text-sharp-green' : 'bg-red-500/20 text-red-400'}`}>
                          {fp.result}
                        </span>
                      </div>
                    </div>
                  ))}
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
