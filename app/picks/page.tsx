import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Today's free pick — updated daily
const todayFreePick = {
  pick: 'New York Yankees ML',
  game: 'NYY @ BAL',
  time: '1:05 PM ET',
  line: '+115',
  reasoning: 'Baltimore\'s pitching staff has been gutted across this series. NYY has the deeper roster top to bottom. At plus money, buy the depth advantage. The Sharp Army bets the roster, not the name on the jersey.',
  episode: 23,
  date: 'May 14, 2026',
}

// Public record summary
const record = {
  total: { W: 49, L: 28 },
  winPct: 63.6,
  unitsNet: 6.15,
  dollarNet: 615,
  freePick: { W: 12, L: 0 },
  freePickROI: 91,
}

// Recent picks preview (subscriber-only — shown blurred)
const recentPicksPreview = [
  { date: 'May 13', pick: 'LAD Dodgers ML', result: 'WIN', type: 'ML' },
  { date: 'May 13', pick: 'COL Avalanche ML (OT comeback)', result: 'WIN', type: 'ML' },
  { date: 'May 13', pick: 'CJ Abrams to get a hit', result: 'WIN', type: 'PROP' },
  { date: 'May 13', pick: 'Julio Rodriguez to get a hit', result: 'WIN', type: 'PROP' },
  { date: 'May 12', pick: 'VGK Golden Knights ML', result: 'WIN', type: 'ML' },
  { date: 'May 12', pick: 'SAS Spurs -spread (won by 25)', result: 'WIN', type: 'ATS' },
]

export default function PicksPage() {
  return (
    <main className="min-h-screen bg-sharp-dark">
      <Header />
      <div className="pt-16">
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px flex-1 bg-sharp-border" />
              <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Today's Picks</span>
              <span className="h-px flex-1 bg-sharp-border" />
            </div>

            {/* Season record bar */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-sharp-card border border-sharp-border rounded-lg p-4 text-center">
                <p className="text-2xl font-black text-sharp-green">{record.total.W}-{record.total.L}</p>
                <p className="text-sharp-muted text-xs mt-1">{record.winPct}% win rate</p>
              </div>
              <div className="bg-sharp-card border border-sharp-border rounded-lg p-4 text-center">
                <p className="text-2xl font-black text-sharp-green">+{record.unitsNet}u</p>
                <p className="text-sharp-muted text-xs mt-1">+${record.dollarNet} net</p>
              </div>
              <div className="bg-sharp-card border border-sharp-border rounded-lg p-4 text-center">
                <p className="text-2xl font-black text-sharp-gold">{record.freePick.W}-{record.freePick.L}</p>
                <p className="text-sharp-muted text-xs mt-1">Free pick record</p>
              </div>
            </div>

            {/* FREE PICK — public */}
            <div className="bg-sharp-green/5 border-2 border-sharp-green rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-sharp-green text-black text-xs font-black px-2 py-1 rounded">FREE PICK</span>
                <span className="text-sharp-muted text-xs">Episode {todayFreePick.episode} · {todayFreePick.date}</span>
              </div>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div>
                  <p className="text-white font-black text-2xl mb-1">{todayFreePick.pick}</p>
                  <p className="text-sharp-muted text-sm">{todayFreePick.game} · {todayFreePick.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sharp-gold font-black text-2xl">{todayFreePick.line}</p>
                  <p className="text-sharp-muted text-xs">Line</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed border-t border-sharp-border/40 pt-4">
                {todayFreePick.reasoning}
              </p>
            </div>

            {/* Free pick streak */}
            <div className="bg-sharp-card border border-sharp-border rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-base">Free Pick: {record.freePick.W}-{record.freePick.L} all time · 100% win rate</p>
                <p className="text-sharp-muted text-sm mt-1">+{record.freePickROI}% ROI since launch. Published daily. Free forever.</p>
              </div>
              <Link href="/record" className="text-sharp-green text-sm font-bold hover:text-sharp-gold transition-colors shrink-0">
                Full Record →
              </Link>
            </div>

            {/* SUBSCRIBER GATE */}
            <div className="relative">

              {/* Blurred preview of recent picks */}
              <div className="space-y-2 mb-0 select-none pointer-events-none blur-sm opacity-60">
                {recentPicksPreview.map((pick, i) => (
                  <div key={i} className="bg-sharp-card border border-sharp-border rounded-lg px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sharp-muted text-xs w-14">{pick.date}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded font-bold ${pick.type === 'ML' ? 'bg-sharp-green/10 text-sharp-green' : pick.type === 'PROP' ? 'bg-sharp-gold/10 text-sharp-gold' : 'bg-blue-500/10 text-blue-400'}`}>
                        {pick.type}
                      </span>
                      <span className="text-white text-sm font-semibold">{pick.pick}</span>
                    </div>
                    <span className={`text-xs font-black px-2 py-1 rounded ${pick.result === 'WIN' ? 'bg-sharp-green/20 text-sharp-green' : 'bg-red-500/20 text-red-400'}`}>
                      {pick.result}
                    </span>
                  </div>
                ))}
              </div>

              {/* Paywall overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-sharp-dark/95 border border-sharp-green/30 rounded-xl p-8 text-center max-w-sm mx-4 shadow-2xl">
                  <div className="text-sharp-green text-3xl mb-3">🔒</div>
                  <p className="text-white font-black text-xl mb-2">Full Card — Subscribers Only</p>
                  <p className="text-white/60 text-sm mb-2">
                    All ML picks · All ATS picks · All props · Full analysis
                  </p>
                  <p className="text-sharp-gold font-bold text-sm mb-6">
                    Last 6 picks: 4W-2L · +$145
                  </p>
                  <Link
                    href="/subscribe"
                    className="block w-full bg-sharp-green text-black font-black py-3 px-6 rounded-lg hover:bg-sharp-gold transition-colors text-sm mb-3"
                  >
                    Subscribe — $29/mo
                  </Link>
                  <Link
                    href="/subscribe"
                    className="block text-sharp-muted text-xs hover:text-white transition-colors"
                  >
                    Or $249/yr — save $99
                  </Link>
                </div>
              </div>

            </div>

            {/* spacer for the blurred content height */}
            <div className="h-16" />

          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
