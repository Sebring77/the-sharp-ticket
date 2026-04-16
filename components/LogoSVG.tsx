export default function LogoSVG({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 132"
      className={className}
      aria-label="The Sharp Ticket — Where Smart Money Talks"
    >
      <defs>
        <linearGradient id="logoGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9ff50" />
          <stop offset="100%" stopColor="#c8f135" />
        </linearGradient>
        <linearGradient id="boltGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8f135" />
          <stop offset="100%" stopColor="#a8d020" />
        </linearGradient>
      </defs>

      {/* ── Ticket Icon ─────────────────────────────── */}
      <g transform="translate(160, 22)">
        {/* Ticket body — skewed for perspective feel */}
        <g transform="skewX(-7)">
          {/* Outer rectangle */}
          <rect x="-40" y="-15" width="80" height="30" rx="4" ry="4"
                fill="none" stroke="#f5c518" strokeWidth="2.2" />
          {/* Left notch cutout */}
          <circle cx="-40" cy="0" r="7" fill="#0a0a0a" stroke="#f5c518" strokeWidth="2.2" />
          {/* Right notch cutout */}
          <circle cx="40" cy="0" r="7" fill="#0a0a0a" stroke="#f5c518" strokeWidth="2.2" />
          {/* Dashed perforation lines */}
          <line x1="-31" y1="0" x2="-9" y2="0"
                stroke="#f5c518" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.55" />
          <line x1="9" y1="0" x2="31" y2="0"
                stroke="#f5c518" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.55" />
        </g>

        {/* Lightning bolt — centered in ticket */}
        <polygon
          points="5,-11 -5,1 3,1 -4,12 8,0 0,0 7,-11"
          fill="url(#boltGrad)"
        />
      </g>

      {/* ── "THE" ─────────────────────────────────── */}
      <text
        x="160" y="49"
        textAnchor="middle"
        fontFamily="'Arial Black', Impact, 'Helvetica Neue', sans-serif"
        fontSize="10.5" fontWeight="900"
        fill="rgba(255,255,255,0.65)"
        letterSpacing="9"
      >THE</text>

      {/* ── "SHARP" ───────────────────────────────── */}
      <text
        x="160" y="91"
        textAnchor="middle"
        fontFamily="'Arial Black', Impact, 'Helvetica Neue', sans-serif"
        fontSize="50" fontWeight="900"
        fill="url(#logoGreen)"
        letterSpacing="2"
      >SHARP</text>

      {/* ── Decorative rules flanking TICKET ─────── */}
      <line x1="16" y1="97" x2="108" y2="97" stroke="#f5c518" strokeWidth="1.5" opacity="0.65" />
      <line x1="212" y1="97" x2="304" y2="97" stroke="#f5c518" strokeWidth="1.5" opacity="0.65" />

      {/* ── "TICKET" ──────────────────────────────── */}
      <text
        x="160" y="114"
        textAnchor="middle"
        fontFamily="'Arial Black', Impact, 'Helvetica Neue', sans-serif"
        fontSize="24" fontWeight="900"
        fill="url(#logoGreen)"
        letterSpacing="14"
      >TICKET</text>

      {/* ── Tagline ───────────────────────────────── */}
      <text
        x="160" y="130"
        textAnchor="middle"
        fontFamily="'Arial', Helvetica, sans-serif"
        fontSize="7.5" fontWeight="500"
        fill="#f5c518"
        letterSpacing="4.5"
      >WHERE SMART MONEY TALKS</text>
    </svg>
  )
}
