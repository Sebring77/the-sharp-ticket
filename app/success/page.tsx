import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-sharp-dark">
      <Header />
      <div className="pt-16">
        <section className="py-32 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-5xl mb-6">🎯</p>
            <h1 className="text-4xl font-black text-white mb-4">
              You're In.
            </h1>
            <p className="text-sharp-green font-bold text-xl mb-6">Welcome to The Sharp Ticket.</p>
            <p className="text-white/60 mb-10 leading-relaxed">
              Your full card — game winners, props, and analysis — hits your inbox every morning before the games start. Check <a href="mailto:cash@thesharpticket.com" className="text-sharp-green hover:underline">cash@thesharpticket.com</a> for your welcome email.
            </p>
            <Link
              href="/"
              className="inline-block bg-sharp-green text-black font-bold py-3 px-8 rounded-lg hover:bg-sharp-gold transition-colors"
            >
              See Today's Card
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
