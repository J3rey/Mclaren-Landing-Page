export function McLaren600LTSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 320"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="McLaren 600LT"
    >
      <defs>
        <linearGradient id="lt600Body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="50%" stopColor="#2d2d2d" />
          <stop offset="100%" stopColor="#0c0c0c" />
        </linearGradient>
        <linearGradient id="lt600Orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD000" />
          <stop offset="100%" stopColor="#FF6A00" />
        </linearGradient>
        <linearGradient id="lt600Shine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0.03)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
        </linearGradient>
        <filter id="lt600Glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="lt600HeadlightGlow">
          <feGaussianBlur stdDeviation="7" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="lt600Wheel" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3d3d3d" />
          <stop offset="65%" stopColor="#1d1d1d" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <radialGradient id="headlightGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD000" stopOpacity="1" />
          <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="450" cy="292" rx="370" ry="12" fill="rgba(0,0,0,0.45)" />

      {/* LongTail rear fin/wing (subtle) */}
      <path d="M695 148 L730 138 L738 145 L700 158 Z" fill="#FFD000" opacity="0.7" />
      <rect x="698" y="148" width="3" height="60" fill="#FFD000" opacity="0.5" />

      {/* Top exhaust (600LT signature) */}
      <rect x="500" y="118" width="40" height="10" rx="3" fill="#1a1a1a" stroke="rgba(255,208,0,0.4)" strokeWidth="1" />
      <rect x="505" y="120" width="30" height="5" rx="2" fill="#0a0a0a" />
      {/* Exhaust glow */}
      <ellipse cx="520" cy="118" rx="15" ry="4" fill="#FF6A00" opacity="0.15" filter="url(#lt600Glow)" />

      {/* Main body - LongTail has longer, lower nose */}
      <path
        d="M90 238
           L72 226 L68 205
           L82 180 L112 160
           L175 145 L240 136
           L305 130 L380 126
           L460 124 L530 125
           L590 128 L640 133
           L680 140 L710 152
           L728 165 L734 180
           L730 200 L720 220
           L708 238
           Z"
        fill="url(#lt600Body)"
      />

      {/* Body shine */}
      <path
        d="M175 145 L305 130 L460 124 L590 128 L680 140
           L660 143 L590 138 L460 135 L305 142 L175 150 Z"
        fill="url(#lt600Shine)"
        opacity="0.55"
      />

      {/* Side sill / lower body */}
      <path
        d="M100 238 L700 238 L720 233 L730 220 L720 238
           L700 246 L160 246 L100 242 Z"
        fill="#0c0c0c"
      />

      {/* LongTail front splitter (bigger) */}
      <path d="M68 226 L110 233 L108 244 L60 238 Z" fill="#161616" />
      <path d="M60 238 L108 244 L107 250 L55 245 Z" fill="#FFD000" opacity="0.75" />

      {/* Longtail rear diffuser */}
      <path d="M700 234 L740 226 L742 238 L700 246 Z" fill="#161616" />
      <path d="M700 238 L742 238 L742 242 L700 246 Z" fill="#FFD000" opacity="0.4" />

      {/* Yellow accent stripe */}
      <path
        d="M140 198 L700 198 L706 203 L700 205 L140 205 L134 203 Z"
        fill="url(#lt600Orange)"
        opacity="0.85"
      />

      {/* Windshield */}
      <path
        d="M348 127 L420 124 L490 125 L545 128
           L535 158 L508 168 L390 168 L362 160 Z"
        fill="rgba(90,150,210,0.14)"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />

      {/* Windshield tint/reflection */}
      <path
        d="M360 130 L410 127 L455 128 L445 144 L398 146 Z"
        fill="rgba(255,255,255,0.05)"
      />

      {/* Roof air intake */}
      <path
        d="M455 124 L540 126 L536 135 L458 133 Z"
        fill="#131313"
        stroke="rgba(255,208,0,0.25)"
        strokeWidth="1"
      />

      {/* Door panel crease */}
      <path
        d="M210 168 Q340 163 470 163 Q530 163 580 168"
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />

      {/* Front headlight (slimmer, sharper for 600LT) */}
      <g filter="url(#lt600HeadlightGlow)">
        <path d="M90 192 L120 185 L124 193 L92 200 Z" fill="#FFD000" opacity="0.95" />
        <path d="M93 194 L118 188 L121 193 L95 199 Z" fill="white" opacity="0.85" />
      </g>
      {/* Headlight beam */}
      <path
        d="M75 188 L22 170 L15 178 L90 205 Z"
        fill="url(#headlightGlow2)"
        opacity="0.22"
      />

      {/* DRL strip */}
      <path
        d="M82 182 L130 170 L132 174 L85 186 Z"
        fill="#FFD000"
        opacity="0.75"
        filter="url(#lt600Glow)"
      />

      {/* Rear light (slim strip - 600LT style) */}
      <rect x="710" y="178" width="20" height="4" rx="1" fill="#FF2200" opacity="0.9" filter="url(#lt600Glow)" />
      <rect x="711" y="179" width="18" height="1" rx="1" fill="#FF8080" opacity="0.7" />

      {/* Front wheel */}
      <circle cx="185" cy="253" r="46" fill="#111" stroke="#2a2a2a" strokeWidth="2" />
      <circle cx="185" cy="253" r="37" fill="url(#lt600Wheel)" />
      <circle cx="185" cy="253" r="27" fill="#111" stroke="#FFD000" strokeWidth="1.5" />
      {[0, 51, 102, 153, 204, 255, 306].map((angle, i) => (
        <line
          key={i}
          x1={185 + 27 * Math.cos((angle * Math.PI) / 180)}
          y1={253 + 27 * Math.sin((angle * Math.PI) / 180)}
          x2={185 + 35 * Math.cos((angle * Math.PI) / 180)}
          y2={253 + 35 * Math.sin((angle * Math.PI) / 180)}
          stroke="#FFD000"
          strokeWidth="2"
          opacity="0.65"
        />
      ))}
      <circle cx="185" cy="253" r="5" fill="#FFD000" opacity="0.75" />

      {/* Rear wheel */}
      <circle cx="620" cy="253" r="50" fill="#111" stroke="#2a2a2a" strokeWidth="2" />
      <circle cx="620" cy="253" r="40" fill="url(#lt600Wheel)" />
      <circle cx="620" cy="253" r="30" fill="#111" stroke="#FFD000" strokeWidth="1.5" />
      {[0, 51, 102, 153, 204, 255, 306].map((angle, i) => (
        <line
          key={i}
          x1={620 + 30 * Math.cos((angle * Math.PI) / 180)}
          y1={253 + 30 * Math.sin((angle * Math.PI) / 180)}
          x2={620 + 38 * Math.cos((angle * Math.PI) / 180)}
          y2={253 + 38 * Math.sin((angle * Math.PI) / 180)}
          stroke="#FFD000"
          strokeWidth="2"
          opacity="0.65"
        />
      ))}
      <circle cx="620" cy="253" r="6" fill="#FFD000" opacity="0.75" />

      {/* Brake calipers */}
      <rect x="172" y="246" width="9" height="13" rx="2" fill="#FFD000" opacity="0.65" />
      <rect x="608" y="243" width="10" height="14" rx="2" fill="#FFD000" opacity="0.65" />

      {/* Ground line */}
      <line x1="115" y1="278" x2="695" y2="278" stroke="rgba(255,208,0,0.12)" strokeWidth="1" />
    </svg>
  )
}
