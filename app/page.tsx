import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-sharp-dark flex flex-col">
      <Header />

      {/* Coming Soon Hero */}
      <section className="flex-1 flex items-center justify-center bg-hero-gradient pt-16">
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">

          {/* Logo */}
          <div className="mb-10 inline-block">
            <span className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase block mb-1">The</span>
            <h1
              className="text-7xl md:text-9xl font-black text-sharp-green glow-green leading-none"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              SHARP<br />TICKET
            </h1>
            <span className="text-sm font-bold tracking-[0.4em] text-sharp-gold uppercase block mt-3">
              Where Smart Money Talks
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-xs mx-auto mb-10">
            <span className="h-px flex-1 bg-sharp-border" />
            <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Coming Soon</span>
            <span className="h-px flex-1 bg-sharp-border" />
          </div>

          {/* Headline */}
          <p className="text-white text-2xl md:text-4xl font-black mb-4 leading-tight">
            The Baddest Sports Betting<br />
            Information Site on the Planet.
          </p>

          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Daily picks powered by Monte Carlo simulation. MLB, NBA, NHL. Real edge. Real transparency. Launching soon.
          </p>

          {/* Email capture */}
          <div className="max-w-sm mx-auto">
            <p className="text-sharp-gold text-xs font-bold tracking-widest uppercase mb-4">Get notified at launch</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-sharp-card border border-sharp-border rounded-lg px-4 py-3 text-white placeholder-sharp-muted text-sm focus:outline-none focus:border-sharp-green transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-sharp-green text-black font-black rounded-lg hover:bg-sharp-gold transition-colors text-sm whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Teaser stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[
              { value: 'MLB', label: 'Baseball' },
              { value: 'NBA', label: 'Basketball' },
              { value: 'NHL', label: 'Hockey' },
            ].map((s) => (
              <div key={s.label} className="bg-sharp-card border border-sharp-border rounded-lg p-4 text-center">
                <p className="text-sharp-green font-black text-lg mb-0.5">{s.value}</p>
                <p className="text-sharp-muted text-xs">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
