export default function TrackRecord() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px flex-1 bg-sharp-border" />
          <span className="text-sharp-green text-xs font-bold tracking-[0.3em] uppercase">Verified Track Record</span>
          <span className="h-px flex-1 bg-sharp-border" />
        </div>

        {/* Season stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Season Record', value: '—', sub: 'Tracking from launch' },
            { label: 'Props Record', value: '—', sub: 'Tracking from launch' },
            { label: 'Units This Week', value: '—', sub: 'Updated Sunday' },
            { label: 'Free Picks', value: '—', sub: 'One per day, public' },
          ].map((stat) => (
            <div key={stat.label} className="bg-sharp-card border border-sharp-border rounded-lg p-4 text-center">
              <p className="text-3xl font-black text-sharp-green mb-1">{stat.value}</p>
              <p className="text-white text-sm font-semibold mb-1">{stat.label}</p>
              <p className="text-sharp-muted text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="bg-sharp-card border border-sharp-border rounded-xl p-8 text-center">
          <p className="text-sharp-green font-bold text-lg mb-3">Transparency Is the Product</p>
          <p className="text-white/70 text-sm leading-relaxed max-w-xl mx-auto mb-4">
            Every pick is published before game time. Every result is tracked. Every Sunday, Joey reviews the full week — wins, losses, and the reasoning behind every call. No cherry-picking. No revisionist history. Just the record.
          </p>
          <p className="text-sharp-muted text-xs">Track record updated weekly. Season archive available to subscribers.</p>
        </div>
      </div>
    </section>
  )
}
