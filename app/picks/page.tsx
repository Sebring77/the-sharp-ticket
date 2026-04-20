import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

type Pick = {
  date: string
  type: 'game_winner' | 'prop'
  game: string
  pick: string
  line: number
  units: number
  result: 'WIN' | 'LOSS' | 'PUSH' | 'PENDING'
  notes: string
  is_free_pick?: boolean
  final_score?: string
}

const allPicks: Pick[] = [
  // April 19 — DAY 1 (Sim-Validated Card)
  { date: 'Apr 19', type: 'game_winner', game: 'ATL @ PHI', pick: 'Atlanta Braves ML', line: 100, units: 3, result: 'PENDING', notes: 'FREE PICK. Sim: ATL 54% win vs 50% implied. Braves 14-7, best record in MLB. Holmes xERA 3.16. Rubber game Sunday Night Baseball.', is_free_pick: true },
  { date: 'Apr 19', type: 'game_winner', game: 'LAD @ COL', pick: 'LA Dodgers ML', line: -205, units: 1, result: 'PENDING', notes: 'Sim: LAD 73.1% win vs 67.2% implied. Lorenzen 8.10 ERA.' },
  { date: 'Apr 19', type: 'game_winner', game: 'KC @ NYY', pick: 'NY Yankees ML', line: -156, units: 1, result: 'PENDING', notes: 'Yankees close at home. Weathers vs Ragans.' },
  { date: 'Apr 19', type: 'prop', game: 'LAD @ COL', pick: 'Roki Sasaki OVER 5.5 K', line: -115, units: 2, result: 'PENDING', notes: 'Sim: Sasaki avg 8.1 Ks. Rockies K rate bottom 5 in NL.' },
  { date: 'Apr 19', type: 'prop', game: 'TEX @ SEA', pick: 'Bryan Woo OVER 5.5 K', line: -118, units: 2, result: 'PENDING', notes: 'Sim: Woo avg 7.9 Ks at T-Mobile Park.' },
  { date: 'Apr 19', type: 'prop', game: 'DET @ BOS', pick: 'Garrett Crochet OVER 7.5 K', line: -110, units: 2, result: 'PENDING', notes: 'Sim: 73.8% hit rate in 10,000 simulations. Best prop on the board.' },
]

function formatLine(line: number) {
  return line > 0 ? `+${line}` : `${line}`
}

export default function PicksPage() {
  const wins = allPicks.filter(p => p.result === 'WIN').length
  const losses = allPicks.filter(p => p.result === 'LOSS').length
  const pending = allPicks.filter(p => p.result === 'PENDING').length

  return (
    <main className="min-h-screen bg-sharp-dark">
      <Header />
      <div className="pt-16">
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px flex-1 bg-sharp-border" />
              <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Full Picks History — Subscribers</span>
              <span className="h-px flex-1 bg-sharp-border" />
            </div>

            {/* Summary bar */}
            <div className="bg-sharp-card border border-sharp-border rounded-xl p-6 mb-8 flex flex-wrap gap-8 items-center justify-between">
              <div>
                <p className="text-sharp-muted text-xs uppercase tracking-wider mb-1">All Picks Since Launch</p>
                <p className="text-4xl font-black text-sharp-green">{wins}-{losses}</p>
                <p className="text-sharp-muted text-sm mt-1">Tracking from April 19, 2026 · Day 1 — Sim Validated{pending > 0 ? ` · ${pending} live today` : ''}</p>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{allPicks.filter(p => p.type === 'game_winner' && p.result === 'WIN').length}-{allPicks.filter(p => p.type === 'game_winner' && p.result === 'LOSS').length}</p>
                  <p className="text-sharp-muted text-xs mt-1">Game Winners</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{allPicks.filter(p => p.type === 'prop' && p.result === 'WIN').length}-{allPicks.filter(p => p.type === 'prop' && p.result === 'LOSS').length}</p>
                  <p className="text-sharp-muted text-xs mt-1">Props</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">0.0</p>
                  <p className="text-sharp-muted text-xs mt-1">Units Net</p>
                </div>
              </div>
            </div>

            {/* Subscriber gate notice */}
            <div className="bg-sharp-green/5 border border-sharp-green/20 rounded-lg px-5 py-3 mb-8 flex items-center gap-3">
              <span className="text-sharp-green text-sm">🔒</span>
              <p className="text-sharp-muted text-sm">Full history is a subscriber benefit. Every pick, every result, every note — published before game time, logged after.</p>
            </div>

            {/* Picks table */}
            <div className="space-y-2">
              {/* Column headers */}
              <div className="hidden md:grid grid-cols-[80px_140px_1fr_80px_60px_70px] gap-3 px-4 pb-2 border-b border-sharp-border">
                <p className="text-sharp-muted text-xs uppercase tracking-wider">Date</p>
                <p className="text-sharp-muted text-xs uppercase tracking-wider">Game</p>
                <p className="text-sharp-muted text-xs uppercase tracking-wider">Pick</p>
                <p className="text-sharp-muted text-xs uppercase tracking-wider">Line</p>
                <p className="text-sharp-muted text-xs uppercase tracking-wider">Units</p>
                <p className="text-sharp-muted text-xs uppercase tracking-wider">Result</p>
              </div>

              {allPicks.map((pick, i) => (
                <div key={i} className={`bg-sharp-card border rounded-lg px-4 py-3 ${pick.result === 'WIN' ? 'border-sharp-green/20' : pick.result === 'LOSS' ? 'border-red-500/20' : pick.result === 'PENDING' ? 'border-sharp-gold/30' : 'border-sharp-border'}`}>
                  <div className="md:grid grid-cols-[80px_140px_1fr_80px_60px_70px] gap-3 items-center">
                    <p className="text-sharp-muted text-xs">{pick.date}</p>
                    <div>
                      <p className="text-sharp-muted text-xs">{pick.game}</p>
                      {pick.final_score && <p className="text-white/40 text-xs mt-0.5">{pick.final_score}</p>}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-white font-semibold text-sm">{pick.pick}</p>
                        {pick.is_free_pick && (
                          <span className="text-xs bg-sharp-green/20 text-sharp-green px-1.5 py-0.5 rounded font-bold">FREE</span>
                        )}
                        <span className={`text-xs px-1.5 py-0.5 rounded ${pick.type === 'game_winner' ? 'bg-white/5 text-sharp-muted' : 'bg-sharp-gold/10 text-sharp-gold'}`}>
                          {pick.type === 'game_winner' ? 'ML' : 'PROP'}
                        </span>
                      </div>
                      <p className="text-sharp-muted text-xs mt-0.5">{pick.notes}</p>
                    </div>
                    <p className="text-sharp-gold font-bold text-sm">{formatLine(pick.line)}</p>
                    <p className="text-white text-sm">{pick.units}u</p>
                    <span className={`text-xs font-black px-2 py-1 rounded w-fit ${pick.result === 'WIN' ? 'bg-sharp-green/20 text-sharp-green' : pick.result === 'LOSS' ? 'bg-red-500/20 text-red-400' : pick.result === 'PENDING' ? 'bg-sharp-gold/20 text-sharp-gold' : 'bg-white/10 text-white/60'}`}>
                      {pick.result === 'PENDING' ? 'LIVE' : pick.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-10 text-center">
              <p className="text-sharp-muted text-sm mb-4">New picks added every morning before games start.</p>
              <Link href="/subscribe" className="inline-block bg-sharp-green text-black font-bold py-3 px-8 rounded-lg hover:bg-sharp-gold transition-colors text-sm">
                Subscribe for Tomorrow's Full Card — $29/mo
              </Link>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
