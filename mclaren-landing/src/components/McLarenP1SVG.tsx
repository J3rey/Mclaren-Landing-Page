export function McLarenP1SVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 320"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="McLaren P1"
    >
      <defs>
        <linearGradient id="p1Body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="p1Orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#FFD000" />
        </linearGradient>
        <linearGradient id="p1Shine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.03)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
        </linearGradient>
        <linearGradient id="p1Wing" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.7" />
        </linearGradient>
        <filter id="p1Glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="p1HeadlightGlow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="p1Wheel" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="70%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <radialGradient id="headlightGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD000" stopOpacity="1" />
          <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="450" cy="295" rx="380" ry="15" fill="rgba(0,0,0,0.5)" />

      {/* Rear wing */}
      <path d="M680 95 L750 75 L760 82 L695 105 Z" fill="url(#p1Wing)" />
      <rect x="690" y="95" width="4" height="65" fill="#FF6A00" opacity="0.8" />
      <path d="M748 73 L768 68 L770 76 L752 80 Z" fill="#FF8C00" />

      {/* Main body */}
      <path
        d="M120 240
           L100 230 L95 210
           L110 185 L140 165
           L200 148 L260 138
           L320 132 L380 128
           L450 126 L510 127
           L570 130 L620 136
           L660 145 L690 158
           L710 172 L720 190
           L718 210 L710 225
           L700 240
           Z"
        fill="url(#p1Body)"
      />

      {/* Body shine */}
      <path
        d="M200 148 L260 138 L320 132 L450 126 L570 130 L620 136 L660 145
           L640 148 L580 143 L450 140 L320 145 L260 150 Z"
        fill="url(#p1Shine)"
        opacity="0.6"
      />

      {/* Lower body / side skirts */}
      <path
        d="M130 240 L680 240 L700 235 L710 225 L700 240
           L680 248 L180 248 L130 245 Z"
        fill="#0d0d0d"
      />

      {/* Front splitter */}
      <path d="M95 230 L130 235 L128 245 L88 240 Z" fill="#1a1a1a" />
      <path d="M88 240 L130 245 L129 250 L85 246 Z" fill="#FF6A00" opacity="0.8" />

      {/* Diffuser rear */}
      <path d="M680 235 L720 228 L722 238 L680 248 Z" fill="#1a1a1a" />

      {/* Orange accent stripe */}
      <path
        d="M150 200 L680 200 L685 205 L680 207 L150 207 L145 205 Z"
        fill="url(#p1Orange)"
        opacity="0.9"
      />

      {/* Windshield */}
      <path
        d="M360 130 L430 127 L480 128 L530 131
           L520 160 L490 170 L400 170 L370 162 Z"
        fill="rgba(100,160,220,0.15)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />

      {/* Windshield reflection */}
      <path
        d="M375 133 L420 130 L460 131 L450 145 L405 147 Z"
        fill="rgba(255,255,255,0.06)"
      />

      {/* Roof scoop */}
      <path
        d="M470 126 L530 128 L525 138 L475 136 Z"
        fill="#1a1a1a"
        stroke="rgba(255,106,0,0.3)"
        strokeWidth="1"
      />

      {/* Door panel line */}
      <path
        d="M220 170 Q340 165 460 165 Q520 165 570 170"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />

      {/* Front headlight cluster */}
      <g filter="url(#p1HeadlightGlow)">
        <ellipse cx="118" cy="198" rx="14" ry="7" fill="#FFD000" opacity="0.95" />
        <ellipse cx="118" cy="198" rx="10" ry="5" fill="white" opacity="0.9" />
      </g>
      {/* Headlight beam */}
      <path
        d="M104 191 L30 170 L20 178 L104 205 Z"
        fill="url(#headlightGlow1)"
        opacity="0.25"
      />

      {/* DRL strip */}
      <path
        d="M110 185 L145 175 L147 178 L112 188 Z"
        fill="#FFD000"
        opacity="0.8"
        filter="url(#p1Glow)"
      />

      {/* Rear light */}
      <rect x="695" y="185" width="22" height="6" rx="2" fill="#FF2200" opacity="0.9" filter="url(#p1Glow)" />
      <rect x="697" y="187" width="18" height="2" rx="1" fill="#FF6666" opacity="0.8" />

      {/* Front wheel */}
      <circle cx="210" cy="255" r="48" fill="#111" stroke="#333" strokeWidth="2" />
      <circle cx="210" cy="255" r="38" fill="url(#p1Wheel)" />
      <circle cx="210" cy="255" r="28" fill="#111" stroke="#FF6A00" strokeWidth="1.5" />
      {/* Wheel spokes */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <line
          key={i}
          x1={210 + 28 * Math.cos((angle * Math.PI) / 180)}
          y1={255 + 28 * Math.sin((angle * Math.PI) / 180)}
          x2={210 + 36 * Math.cos((angle * Math.PI) / 180)}
          y2={255 + 36 * Math.sin((angle * Math.PI) / 180)}
          stroke="#FF6A00"
          strokeWidth="2.5"
          opacity="0.7"
        />
      ))}
      <circle cx="210" cy="255" r="6" fill="#FF6A00" opacity="0.8" />

      {/* Rear wheel */}
      <circle cx="630" cy="255" r="52" fill="#111" stroke="#333" strokeWidth="2" />
      <circle cx="630" cy="255" r="42" fill="url(#p1Wheel)" />
      <circle cx="630" cy="255" r="31" fill="#111" stroke="#FF6A00" strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <line
          key={i}
          x1={630 + 31 * Math.cos((angle * Math.PI) / 180)}
          y1={255 + 31 * Math.sin((angle * Math.PI) / 180)}
          x2={630 + 40 * Math.cos((angle * Math.PI) / 180)}
          y2={255 + 40 * Math.sin((angle * Math.PI) / 180)}
          stroke="#FF6A00"
          strokeWidth="2.5"
          opacity="0.7"
        />
      ))}
      <circle cx="630" cy="255" r="7" fill="#FF6A00" opacity="0.8" />

      {/* Brake caliper */}
      <rect x="196" y="248" width="10" height="14" rx="2" fill="#FF6A00" opacity="0.7" />
      <rect x="618" y="245" width="11" height="14" rx="2" fill="#FF6A00" opacity="0.7" />

      {/* Ground line */}
      <line x1="140" y1="280" x2="700" y2="280" stroke="rgba(255,106,0,0.15)" strokeWidth="1" />
    </svg>
  )
}
