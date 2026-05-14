import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const publicRecord = {
  gameWinners: { W: 24, L: 16 },
  props: { W: 21, L: 10 },
  total: { W: 45, L: 26 },
  winPct: 63.4,
  unitsNet: 4.70,
  dollarNet: 470,
  trackingSince: 'May 1, 2026',
  engineVersion: '5-Phase Edge Engine',
}

const freePick = {
  record: { W: 11, L: 0 },
  roi: 91,
  note: '11 straight. 100% win rate. 91% ROI.',
}

const weeklyBreakdown = [
  {
    label: 'May 10 — Game 10',
    gameWinners: { W: 3, L: 3 },
    props: { W: 1, L: 2 },
    unitsNet: -2.85,
    highlight: 'PHI Phillies ML (6-0) ✓ · LAA Angels ML (6-1) ✓ · MTL Canadiens ML (5-2) ✓',
  },
  {
    label: 'May 11 — Game 11 (Episode 21)',
    gameWinners: { W: 2, L: 0 },
    props: { W: 2, L: 2 },
    unitsNet: 2.48,
    highlight: 'VGK Golden Knights ML (3-2) ✓ · SAS Spurs -spread (126-97, covered by 25) ✓',
  },
  {
    label: 'May 12 — Game 12 (Episode 22)',
    gameWinners: { W: 2, L: 1 },
    props: { W: 2, L: 2 },
    unitsNet: 1.22,
    highlight: 'COL Avalanche ML (OT comeback from 3-0) ✓ · CJ Abrams 2 hits ✓ · Julio Rodriguez double ✓',
  },
  {
    label: 'May 1–9 — Games 1–9',
    gameWinners: { W: 17, L: 12 },
    props: { W: 16, L: 4 },
    unitsNet: 3.85,
    highlight: 'Engine went live May 1. First 9 games: 33W-16L. Props 16-4 (80%).',
  },
]

function formatUnits(u: number) {
  return u >= 0 ? `+${u.toFixed(2)}u` : `${u.toFixed(2)}u`
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

            {/* Headline stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                {
                  label: 'Public Record',
                  value: `${publicRecord.total.W}-${publicRecord.total.L}`,
                  sub: `${publicRecord.winPct}% win rate`,
                  color: 'text-sharp-green',
                },
                {
                  label: 'Units Net',
                  value: `+${publicRecord.unitsNet}u`,
                  sub: `+$${publicRecord.dollarNet} at $100/unit`,
                  color: 'text-sharp-green',
                },
                {
                  label: 'Game Winners',
                  value: `${publicRecord.gameWinners.W}-${publicRecord.gameWinners.L}`,
                  sub: 'ML + ATS picks',
                  color: 'text-sharp-green',
                },
                {
                  label: 'Props',
                  value: `${publicRecord.props.W}-${publicRecord.props.L}`,
                  sub: 'Player + team props',
                  color: 'text-sharp-green',
                },
              ].map((stat) => (
                <div key={stat.label} className="bg-sharp-card border border-sharp-border rounded-lg p-5 text-center">
                  <p className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</p>
                  <p className="text-white text-sm font-semibold mb-1">{stat.label}</p>
                  <p className="text-sharp-muted text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Free Pick Record — marketing banner */}
            <div className="bg-sharp-green/5 border border-sharp-green/30 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sharp-green font-black text-2xl mb-1">
                  Free Pick: {freePick.record.W}W-{freePick.record.L}L — 100%
                </p>
                <p className="text-white/70 text-sm">
                  {freePick.note} Published daily on social. Free to follow. Imagine what the full card looks like.
                </p>
              </div>
              <div className="text-center shrink-0">
                <p className="text-sharp-gold font-black text-3xl">+{freePick.roi}%</p>
                <p className="text-sharp-muted text-xs mt-1">Free Pick ROI</p>
              </div>
            </div>

            {/* Transparency statement */}
            <div className="bg-sharp-card border border-sharp-border rounded-xl p-6 mb-10">
              <p className="text-sharp-green font-bold text-base mb-2">Transparency Is the Product</p>
              <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                Every pick is published before game time. Every result is logged. No cherry-picking. No revisionist history.
                Public record tracking since <span className="text-white font-semibold">{publicRecord.trackingSince}</span>.
                Built on a proprietary multi-layer edge engine covering MLB, NFL, NBA, and NHL.
              </p>
            </div>

            {/* Recent game breakdown */}
            <h2 className="text-white font-bold text-lg mb-4">Recent Performance</h2>
            <div className="space-y-4 mb-10">
              {weeklyBreakdown.map((week) => (
                <div key={week.label} className="bg-sharp-card border border-sharp-border rounded-xl p-5">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                    <p className="text-white font-bold text-sm">{week.label}</p>
                    <div className="flex gap-5 text-sm">
                      <div className="text-center">
                        <p className="text-white font-bold text-sm">{week.gameWinners.W}-{week.gameWinners.L}</p>
                        <p className="text-sharp-muted text-xs">ML/ATS</p>
                      </div>
                      <div className="text-center">
                        <p className="text-white font-bold text-sm">{week.props.W}-{week.props.L}</p>
                        <p className="text-sharp-muted text-xs">Props</p>
                      </div>
                      <div className="text-center">
                        <p className={`font-bold text-sm ${week.unitsNet >= 0 ? 'text-sharp-green' : 'text-red-400'}`}>
                          {formatUnits(week.unitsNet)}
                        </p>
                        <p className="text-sharp-muted text-xs">Units</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sharp-muted text-xs">{week.highlight}</p>
                </div>
              ))}
            </div>

            {/* Subscriber CTA */}
            <div className="bg-sharp-card border border-sharp-green/20 rounded-xl p-8 text-center">
              <p className="text-sharp-green font-bold text-lg mb-2">Full Pick-by-Pick History</p>
              <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                Every game winner, every prop, every result — with full pre-game analysis. Published before tip-off. Logged after. Available to subscribers.
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
