const gameWinners = [
  { game: 'NYM @ LAD', pick: 'Dodgers ML', line: '-220', confidence: 3, note: 'Ohtani pitching · Mets 7-11 · Soto on IL' },
  { game: 'LAA @ NYY', pick: 'Yankees ML', line: '-190', confidence: 3, note: '84°F · Wind out to center · Luis Gil' },
  { game: 'TOR @ MIL', pick: 'Blue Jays ML', line: '-122', confidence: 3, note: 'Dylan Cease · Brewers without Yelich' },
  { game: 'COL @ HOU', pick: 'Astros ML', line: '-184', confidence: 2, note: 'Fade Rockies on road · Rockies 6-11' },
  { game: 'WSH @ PIT', pick: 'Pirates ML', line: '-178', confidence: 2, note: 'Pirates 10-7 at home' },
]

const props = [
  { player: 'Shohei Ohtani', prop: 'OVER 6.5 K\'s', line: '-135', tag: 'FREE PICK' },
  { player: 'Dylan Cease', prop: 'OVER 6.5 K\'s', line: '-116', tag: 'PREMIUM' },
  { player: 'Dylan Cease', prop: 'UNDER 1.5 ER', line: '+110', tag: 'PREMIUM' },
  { player: 'Randy Vasquez', prop: 'UNDER 4.5 K\'s', line: '-131', tag: 'PREMIUM' },
  { player: 'NYY-LAA Total', prop: 'OVER 10.0', line: '-123', tag: 'PREMIUM' },
]

export default function TodayCard() {
  return (
    <section className="py-16 px-4 bg-sharp-dark">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px flex-1 bg-sharp-border" />
          <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Today's Full Card — Wed April 15</span>
          <span className="h-px flex-1 bg-sharp-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Game Winners */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-sharp-green">⚾</span> Game Winners
            </h3>
            <div className="space-y-3">
              {gameWinners.map((g) => (
                <div key={g.game} className="bg-sharp-card border border-sharp-border rounded-lg p-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sharp-muted text-xs font-medium mb-0.5">{g.game}</p>
                    <p className="text-white font-bold truncate">{g.pick}</p>
                    <p className="text-sharp-muted text-xs mt-0.5">{g.note}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sharp-gold font-bold text-lg">{g.line}</p>
                    <div className="flex gap-0.5 justify-end mt-1">
                      {[1, 2, 3].map((star) => (
                        <span key={star} className={`text-xs ${star <= g.confidence ? 'text-sharp-green' : 'text-sharp-border'}`}>●</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Props */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-sharp-green">🎯</span> Prop Card
            </h3>
            <div className="space-y-3">
              {props.map((p, i) => (
                <div key={i} className={`relative bg-sharp-card border rounded-lg p-4 flex items-center justify-between gap-4 ${p.tag === 'FREE PICK' ? 'border-sharp-green/40 glow-box' : 'border-sharp-border'}`}>
                  {p.tag === 'FREE PICK' && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sharp-green to-sharp-gold rounded-t-lg" />
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${p.tag === 'FREE PICK' ? 'bg-sharp-green/20 text-sharp-green' : 'bg-white/5 text-sharp-muted'}`}>
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-white font-bold">{p.player}</p>
                    <p className="text-sharp-muted text-sm">{p.prop}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`font-bold text-lg ${p.tag === 'FREE PICK' ? 'text-sharp-green' : 'text-sharp-gold'}`}>{p.line}</p>
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
