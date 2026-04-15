export default function Ticker() {
  const items = [
    '⚡ FREE PICK: Ohtani OVER 6.5 K\'s (-135)',
    '🔥 SHARP ACTION: Dodgers ML (-220)',
    '📊 PROP: Cease UNDER 1.5 ER (+110)',
    '💰 VALUE PLAY: Blue Jays ML (-122)',
    '⚾ TODAY\'S CARD: 5 Game Winners + 5 Props',
    '📈 TRACK RECORD: Published every Sunday',
    '🎯 WHERE SMART MONEY TALKS',
  ]

  const doubled = [...items, ...items]

  return (
    <div className="bg-sharp-green overflow-hidden py-2">
      <div className="flex ticker-content whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="text-black font-bold text-sm px-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
