import Header from '@/components/Header'
import Ticker from '@/components/Ticker'
import FreePick from '@/components/FreePick'
import TodayCard from '@/components/TodayCard'
import SubscribeSection from '@/components/SubscribeSection'
import TrackRecord from '@/components/TrackRecord'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-sharp-dark">
      <Header />

      {/* Hero */}
      <section className="pt-16 bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Logo mark */}
          <div className="mb-6 inline-block">
            <span className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase block mb-1">The</span>
            <h1
              className="text-7xl md:text-9xl font-black text-sharp-green glow-green leading-none"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              SHARP<br />TICKET
            </h1>
            <span className="text-sm font-bold tracking-[0.4em] text-sharp-gold uppercase block mt-2">
              Where Smart Money Talks
            </span>
          </div>

          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Daily MLB game winners, prop picks, and analysis. One free pick every morning. Full card for subscribers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/subscribe"
              className="px-8 py-4 bg-sharp-green text-black font-black text-lg rounded-lg hover:bg-sharp-gold transition-colors"
            >
              Subscribe — $29/mo
            </a>
            <a
              href="#free-pick"
              className="px-8 py-4 border border-sharp-border text-white/70 font-semibold text-lg rounded-lg hover:border-sharp-green hover:text-sharp-green transition-colors"
            >
              Today's Free Pick ↓
            </a>
          </div>
        </div>

        {/* Ticker */}
        <Ticker />
      </section>

      {/* Free Pick */}
      <div id="free-pick">
        <FreePick />
      </div>

      {/* Today's Full Card */}
      <TodayCard />

      {/* Subscribe */}
      <SubscribeSection />

      {/* Track Record */}
      <TrackRecord />

      {/* Footer */}
      <Footer />
    </main>
  )
}
