import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-sharp-dark flex flex-col">
      <Header />

      {/* Hero */}
      <section className="flex-1 bg-hero-gradient pt-16">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">

          <span className="inline-block text-xs font-bold tracking-[0.3em] text-sharp-green uppercase mb-6 border border-sharp-green/30 rounded-full px-4 py-1">
            Engine V2 — 9-Layer Analysis System
          </span>

          <h1
            className="text-6xl md:text-8xl font-black text-white leading-none mb-2"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            THE SHARP
            <br />
            <span className="text-sharp-green glow-green">TICKET</span>
          </h1>

          <p className="text-sharp-gold text-sm font-bold tracking-[0.4em] uppercase mb-8">
            Where Smart Money Talks
          </p>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Professional sports betting analysis. Not a lottery — a system. Every pick clears nine layers of analysis before it touches the card.
          </p>

          <p className="text-white/40 text-sm max-w-xl mx-auto mb-12">
            MLB · NFL · NBA · NHL — Props, game winners, and our exclusive side programs. Verified lines. Transparent records. Long-term capital growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://buy.stripe.com/14A6oJ1q79NL5dDa3y1wY01"
              className="inline-block bg-sharp-green text-sharp-dark font-black text-lg px-10 py-4 rounded-lg hover:bg-sharp-green/90 transition-colors"
            >
              Join the Sharp Army — $29/mo
            </a>
            <Link
              href="/picks"
              className="inline-block border border-sharp-green text-sharp-green font-bold text-lg px-10 py-4 rounded-lg hover:bg-sharp-green/10 transition-colors"
            >
              Today&apos;s Free Pick
            </Link>
          </div>

          {/* V2 Record Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16">
            {[
              { value: '83.3%', label: 'V2 Win Rate' },
              { value: '5-1', label: 'V2 Record' },
              { value: '+1.88u', label: 'V2 Units Net' },
              { value: '9', label: 'Engine Layers' },
            ].map((s) => (
              <div key={s.label} className="bg-sharp-card border border-sharp-border rounded-lg p-5 text-center">
                <p className="text-sharp-green font-black text-2xl mb-1">{s.value}</p>
                <p className="text-sharp-muted text-xs uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-sharp-card border-t border-sharp-border py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            NOT A PICKS SERVICE. A <span className="text-sharp-green">SYSTEM</span>.
          </h2>
          <p className="text-white/50 text-center max-w-2xl mx-auto mb-14">
            The sharpest bettors in history don&apos;t measure themselves by last night. They measure Closing Line Value — whether their published line was better than the market&apos;s closing price. That&apos;s how we build this.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: 'The Main Card',
                desc: 'Daily picks across MLB, NFL, NBA, and NHL. Every pick clears 9 layers: opportunity, H2H splits, situational data, simulation, line value, sharp money, correlation audit, and verification gate.',
              },
              {
                icon: '⚡',
                title: 'Side Programs',
                desc: 'MLB Hit Parade — one verified hit prop per game. NHL Lamp Lighter — one goal or point prop per game. NBA Bucket List and Wingman coming next season. Each has its own record.',
              },
              {
                icon: '📚',
                title: 'Betting Management Course',
                desc: 'Five modules: How to Read a Line, Bankroll Management, Sharp vs Square Money, H2H Splits Mastery, Reading Injury Reports. The engine taught, not just the output.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-sharp-dark border border-sharp-border rounded-xl p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-black text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sport Coverage */}
      <section className="py-16 bg-sharp-dark border-t border-sharp-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-black text-white text-center mb-10 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Full Coverage. Four Sports.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { sport: 'MLB', detail: 'H2H career splits · ERA gaps · Coors factor · IL return rules' },
              { sport: 'NFL', detail: 'Sharp line picks · Red zone targets · Injury intel' },
              { sport: 'NBA', detail: 'Usage rate · Matchup grades · Blowout filters' },
              { sport: 'NHL', detail: 'PP units · Goalie form · Shot rate trends' },
            ].map((s) => (
              <div key={s.sport} className="bg-sharp-card border border-sharp-border rounded-xl p-5 text-center">
                <p className="text-sharp-green font-black text-2xl mb-2">{s.sport}</p>
                <p className="text-white/40 text-xs leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient border-t border-sharp-border text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            JOIN THE <span className="text-sharp-green">SHARP ARMY</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            $29 a month. The card, the record, the edge. Variance resolves over volume — that&apos;s how professionals build capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buy.stripe.com/14A6oJ1q79NL5dDa3y1wY01"
              className="inline-block bg-sharp-green text-sharp-dark font-black text-xl px-12 py-5 rounded-lg hover:bg-sharp-green/90 transition-colors"
            >
              Start for $29/month
            </a>
            <a
              href="https://buy.stripe.com/bJe28t5Gn2ljaxXejO1wY00"
              className="inline-block border border-sharp-gold text-sharp-gold font-bold text-xl px-12 py-5 rounded-lg hover:bg-sharp-gold/10 transition-colors"
            >
              Annual — Best Value
            </a>
          </div>
          <p className="text-white/30 text-xs mt-6">
            Entertainment service only. Please gamble responsibly. 1-800-GAMBLER.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
