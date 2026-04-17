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
  result: 'WIN' | 'LOSS' | 'PUSH'
  notes: string
  is_free_pick?: boolean
  final_score?: string
}

const allPicks: Pick[] = [
  // April 16 — Game Winners
  { date: 'Apr 16', type: 'game_winner', game: 'LAA @ NYY', pick: 'NY Yankees ML', line: -260, units: 1, result: 'LOSS', final_score: 'Angels 11, Yankees 4', notes: 'Fried tagged for 5 ER in 5.1 IP. Trout went deep twice.' },
  { date: 'Apr 16', type: 'game_winner', game: 'COL @ HOU', pick: 'Houston Astros ML', line: -198, units: 1, result: 'WIN', final_score: 'Astros 7, Rockies 4', notes: 'Fade Rockies on road. Rockies now 6-12.' },
  { date: 'Apr 16', type: 'game_winner', game: 'TB @ CHW', pick: 'Tampa Bay Rays ML', line: -126, units: 1, result: 'WIN', final_score: 'Rays 5, White Sox 3', notes: 'Rays win 5th straight. Caminero, Fraley, DeLuca all homer.' },
  { date: 'Apr 16', type: 'game_winner', game: 'WSH @ PIT', pick: 'Pittsburgh Pirates ML', line: -166, units: 1, result: 'LOSS', final_score: 'Nationals 8, Pirates 7 (10)', notes: 'James Wood walks it off in extras. Heartbreaker.' },
  { date: 'Apr 16', type: 'game_winner', game: 'BAL @ CLE', pick: 'Baltimore Orioles ML', line: 112, units: 1, result: 'LOSS', final_score: 'Guardians 10, Orioles 9', notes: 'Plus-money value play did not convert. Guardians rallied late.' },
  // April 16 — Props
  { date: 'Apr 16', type: 'prop', game: 'SF @ CIN', pick: 'Chase Burns OVER 5.5 K', line: -140, units: 1, result: 'LOSS', notes: 'FREE PICK. Burns held to 4 Ks in 6 IP. Giants shutout Reds 3-0.', is_free_pick: true },
  { date: 'Apr 16', type: 'prop', game: 'SF @ CIN', pick: 'Elly De La Cruz OVER 1.5 Total Bases', line: 115, units: 1, result: 'LOSS', notes: 'Reds shut out 3-0. De La Cruz went under the TB threshold.' },
  { date: 'Apr 16', type: 'prop', game: 'LAA @ NYY', pick: 'Max Fried OVER 5.5 K', line: -110, units: 1, result: 'LOSS', notes: 'Fried struck out just 3 in 5.1 IP before being pulled.' },
  { date: 'Apr 16', type: 'prop', game: 'SEA @ SD', pick: 'Luis Castillo OVER 5.5 K', line: -118, units: 1, result: 'LOSS', notes: 'Castillo struggled vs. San Diego. Mariners fell 4-1.' },
  // April 15 — Game Winners
  { date: 'Apr 15', type: 'game_winner', game: 'NYM @ LAD', pick: 'LA Dodgers ML', line: -220, units: 1, result: 'WIN', final_score: 'Dodgers 4, Mets 1', notes: 'Ohtani pitching, Mets 7-11, Soto on IL' },
  { date: 'Apr 15', type: 'game_winner', game: 'LAA @ NYY', pick: 'NY Yankees ML', line: -190, units: 1, result: 'WIN', final_score: 'Yankees 5, Angels 4', notes: 'Luis Gil, 84°F, wind out at Yankee Stadium' },
  { date: 'Apr 15', type: 'game_winner', game: 'TOR @ MIL', pick: 'Toronto Blue Jays ML', line: -122, units: 1, result: 'LOSS', final_score: 'Brewers 2, Blue Jays 1', notes: 'Cease dealt (6K, 0ER) but Brewers bullpen held on' },
  { date: 'Apr 15', type: 'game_winner', game: 'COL @ HOU', pick: 'Houston Astros ML', line: -184, units: 1, result: 'WIN', final_score: 'Astros 3, Rockies 1', notes: 'Fade Rockies on road. Yordan Alvarez HR, 2 RBI.' },
  { date: 'Apr 15', type: 'game_winner', game: 'WSH @ PIT', pick: 'Pittsburgh Pirates ML', line: -178, units: 1, result: 'WIN', final_score: 'Pirates 2, Nationals 0', notes: 'Pirates shut out the Nationals' },
  // April 15 — Props
  { date: 'Apr 15', type: 'prop', game: 'NYM @ LAD', pick: 'Ohtani OVER 6.5 K', line: -135, units: 1, result: 'WIN', notes: 'FREE PICK. Ohtani struck out 9 Mets.', is_free_pick: true },
  { date: 'Apr 15', type: 'prop', game: 'TOR @ MIL', pick: 'Dylan Cease OVER 6.5 K', line: -116, units: 1, result: 'LOSS', notes: 'Cease had exactly 6 Ks in 6 IP. Just missed.' },
  { date: 'Apr 15', type: 'prop', game: 'TOR @ MIL', pick: 'Dylan Cease UNDER 1.5 ER', line: 110, units: 1, result: 'WIN', notes: 'Cease allowed 0 ER in 6 IP. Plus money winner.' },
  { date: 'Apr 15', type: 'prop', game: 'SEA @ SD', pick: 'Randy Vasquez UNDER 4.5 K', line: -131, units: 1, result: 'LOSS', notes: 'Vasquez exceeded 4.5 K line.' },
  { date: 'Apr 15', type: 'prop', game: 'LAA @ NYY', pick: 'Game Total OVER 10.0', line: -123, units: 1, result: 'LOSS', notes: 'Final was 9 runs total. Just missed the over.' },
]

function formatLine(line: number) {
  return line > 0 ? `+${line}` : `${line}`
}

export default function PicksPage() {
  const wins = allPicks.filter(p => p.result === 'WIN').length
  const losses = allPicks.filter(p => p.result === 'LOSS').length

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
                <p className="text-sharp-muted text-sm mt-1">Tracking from April 15, 2026 · Updated Apr 17</p>
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
                  <p className="text-2xl font-black text-red-400">-5.3</p>
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
                <div key={i} className={`bg-sharp-card border rounded-lg px-4 py-3 ${pick.result === 'WIN' ? 'border-sharp-green/20' : pick.result === 'LOSS' ? 'border-red-500/20' : 'border-sharp-border'}`}>
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
                    <span className={`text-xs font-black px-2 py-1 rounded w-fit ${pick.result === 'WIN' ? 'bg-sharp-green/20 text-sharp-green' : pick.result === 'LOSS' ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white/60'}`}>
                      {pick.result}
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
