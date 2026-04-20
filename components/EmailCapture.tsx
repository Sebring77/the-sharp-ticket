'use client'

export default function EmailCapture() {
  return (
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
  )
}
