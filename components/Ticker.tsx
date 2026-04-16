export default function Ticker() {
  const items = [
    '⚡ FREE PICK: Chase Burns OVER 5.5 K\'s (-140)',
    '🔥 VALUE PLAY: Orioles ML (+112) — Plus money at home',
    '📊 PROP: Elly De La Cruz OVER 1.5 Total Bases (+115)',
    '💰 SHARP ACTION: Rays ML (-126) vs White Sox',
    '⚾ TODAY\'S CARD: 5 Game Winners + 4 Props',
    '📈 TRACK RECORD: 4-1 Game Winners since launch',
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
