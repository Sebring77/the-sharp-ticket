const gameWinners = [
  { sport: '⚾ MLB', game: 'ATL @ PHI — SNB', pick: 'Atlanta Braves ML', line: '+100', confidence: 3, note: 'Braves 14-7 (best record) · Phillies 8-12 · Grant Holmes xERA 3.16 · Rubber game' },
  { sport: '⚾ MLB', game: 'LAD @ COL', pick: 'LA Dodgers ML', line: '-205', confidence: 2, note: 'Lorenzen 8.10 ERA · Fade the worst arm on today\'s board · 1 unit only at this juice' },
  { sport: '⚾ MLB', game: 'TEX @ SEA', pick: 'Seattle Mariners ML', line: '-138', confidence: 2, note: 'Bryan Woo at home · Mariners won Sat 7-3 · Closing the series' },
  { sport: '⚾ MLB', game: 'KC @ NYY', pick: 'NY Yankees ML', line: '-156', confidence: 2, note: 'Weathers vs Ragans · Yankees close at home · Royals won 2 straight but home edge wins' },
]

const props = [
  { player: 'Atlanta Braves ML', prop: '+100 · FREE PICK', line: '+100', tag: 'FREE PICK', sport: '⚾' },
  { player: 'Roki Sasaki', prop: "OVER 5.5 K's", line: '-115', tag: 'PREMIUM', sport: '⚾' },
  { player: 'Bryan Woo', prop: "OVER 5.5 K's", line: '-118', tag: 'PREMIUM', sport: '⚾' },
  { player: 'Garrett Crochet', prop: "OVER 7.5 K's", line: '-110', tag: 'PREMIUM', sport: '⚾' },
]

const freePick = props.find((p) => p.tag === 'FREE PICK')!
const premiumProps = props.filter((p) => p.tag === 'PREMIUM')

export default function TodayCard() {
  return (
    <section className="py-16 px-4 bg-sharp-dark">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px flex-1 bg-sharp-border" />
          <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Today's Card — Sun April 19 · MLB · 15 Games</span>
          <span className="h-px flex-1 bg-sharp-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Game Winners — locked */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-sharp-green">🎰</span> Game Winners
              <span className="text-xs font-normal text-sharp-muted ml-1">({gameWinners.length} picks today)</span>
            </h3>
            <div className="space-y-3">
              {/* First pick shown as teaser — matchup visible, pick locked */}
              <div className="bg-sharp-card border border-sharp-border rounded-lg p-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sharp-muted text-xs font-medium mb-0.5">{gameWinners[0].sport} · {gameWinners[0].game}</p>
                  <p className="text-white/30 font-bold blur-sm select-none">██████ ML</p>
                  <p className="text-sharp-muted text-xs mt-0.5">{gameWinners[0].note}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-white/20 font-bold text-lg blur-sm select-none">-000</p>
                  <span className="text-xs text-sharp-muted">🔒 Subscribers</span>
                </div>
              </div>
              {/* Remaining picks fully locked */}
              {gameWinners.slice(1).map((g) => (
                <div key={g.game} className="bg-sharp-card border border-sharp-border rounded-lg p-4 flex items-center justify-between gap-4 opacity-50">
                  <div className="min-w-0">
                    <p className="text-sharp-muted text-xs font-medium mb-0.5">{g.sport} · {g.game}</p>
                    <p className="text-white/20 font-bold blur-sm select-none">██████ ML</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sharp-muted text-xs">🔒</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Props — free pick shown, rest locked */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-sharp-green">🎯</span> Prop Card
              <span className="text-xs font-normal text-sharp-muted ml-1">({props.length} props today)</span>
            </h3>
            <div className="space-y-3">
              {/* Free pick — fully visible */}
              <div className="relative bg-sharp-card border border-sharp-green/40 glow-box rounded-lg p-4 flex items-center justify-between gap-4">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sharp-green to-sharp-gold rounded-t-lg" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-sharp-green/20 text-sharp-green">FREE PICK</span>
                  </div>
                  <p className="text-white font-bold">{freePick.player}</p>
                  <p className="text-sharp-muted text-sm">{freePick.prop}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-lg text-sharp-green">{freePick.line}</p>
                </div>
              </div>
              {/* Premium props — locked */}
              {premiumProps.map((p, i) => (
                <div key={i} className="bg-sharp-card border border-sharp-border rounded-lg p-4 flex items-center justify-between gap-4 opacity-50">
                  <div className="min-w-0">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-white/5 text-sharp-muted">PREMIUM</span>
                    <p className="text-white/20 font-bold blur-sm select-none mt-1">██████████</p>
                    <p className="text-sharp-muted/30 text-sm blur-sm select-none">████████████</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sharp-muted text-xs">🔒</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/subscribe"
              className="mt-4 block w-full text-center py-3 bg-sharp-green text-black font-bold rounded-lg hover:bg-sharp-gold transition-colors text-sm"
            >
              Unlock Full Card — $29/mo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
