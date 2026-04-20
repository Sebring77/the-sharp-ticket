export default function Ticker() {
  const items = [
    'THE SHARP TICKET  ·  WHERE SMART MONEY TALKS',
    'FREE PICK EVERY MORNING  ·  NO CREDIT CARD REQUIRED',
    'TRACK RECORD PUBLISHED DAILY  ·  EVERY PICK LOGGED BEFORE GAME TIME',
    'FULL CARD FOR SUBSCRIBERS  ·  $29/MO  ·  CANCEL ANYTIME',
    'MLB · NBA PLAYOFFS · NHL PLAYOFFS  ·  BEST 5 PICKS DAILY  ·  MULTI-SPORT SHARP ACTION',
    'JOIN THE SHARPEST CARD IN SPORTS BETTING  ·  THESHARPTICKET.COM',
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
