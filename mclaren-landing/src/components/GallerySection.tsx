import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import p1Apex from '../assets/P1 Apex.png'
import lt600Apex from '../assets/600LT Apex.png'
import p1Prototype from '../assets/P1 Prototype.png'
import lt600Precision from '../assets/600LT Percision.png'
import p1Stealth from '../assets/P1 Stealth.png'
import lt600Carbon from '../assets/600LT Carbon.png'

const galleryCards = [
  {
    title: 'P1 — Apex',
    subtitle: 'Race Suspension. Active Aerodynamics.',
    accentColor: '#FF6A00',
    imageSrc: p1Apex,
    bg: 'from-mclaren-orange/10 to-transparent',
    tag: 'HYBRID POWER',
  },
  {
    title: '600LT — Apex',
    subtitle: 'Longtail DNA. Unfiltered Response.',
    accentColor: '#FFD000',
    imageSrc: lt600Apex,
    bg: 'from-hyper-yellow/8 to-transparent',
    tag: 'LONGTAIL SERIES',
  },
  {
    title: 'P1 — Prototype',
    subtitle: '916bhp. Born from Formula 1.',
    accentColor: '#FF8C00',
    imageSrc: p1Prototype,
    bg: 'from-orange-700/10 to-transparent',
    tag: 'HYPERCAR',
  },
  {
    title: '600LT — Precision',
    subtitle: 'Engineered for the Perfect Lap.',
    accentColor: '#FFD000',
    imageSrc: lt600Precision,
    bg: 'from-yellow-500/8 to-transparent',
    tag: 'TRACK FOCUSED',
  },
  {
    title: 'P1 — Stealth',
    subtitle: 'Carbon Fibre. Titanium. Pure Intent.',
    accentColor: '#FF6A00',
    imageSrc: p1Stealth,
    bg: 'from-mclaren-orange/8 to-transparent',
    tag: 'LIMITED 375',
  },
  {
    title: '600LT — Carbon',
    subtitle: '96kg Lighter. Infinitely More Alive.',
    accentColor: '#FFD000',
    imageSrc: lt600Carbon,
    bg: 'from-hyper-yellow/6 to-transparent',
    tag: 'PURE DRIVER',
  },
]

function GalleryCard({ card, index }: { card: typeof galleryCards[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-shrink-0 w-80 lg:w-96 glass-card carbon-texture overflow-hidden cursor-pointer group"
      style={{ background: 'rgba(255,255,255,0.02)' }}
      whileHover={{ y: -6 }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${card.accentColor}, transparent)` }}
      />

      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${card.bg} opacity-60 pointer-events-none`} />

      {/* Glow on hover */}
      <motion.div
        initial={false}
        className="absolute bottom-0 left-0 right-0 h-32 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ background: card.accentColor }}
      />

      {/* Tag */}
      <div className="absolute top-5 right-5 z-10">
        <span
          className="font-mono-custom text-[9px] tracking-[3px] uppercase px-2 py-1 border rounded-sm"
          style={{
            color: card.accentColor,
            borderColor: `${card.accentColor}40`,
            background: `${card.accentColor}10`,
          }}
        >
          {card.tag}
        </span>
      </div>

      {/* Car image */}
      <div className="relative pt-8 px-4 pb-2">
        <img src={card.imageSrc} alt={card.title} className="w-full object-contain" />
      </div>

      {/* Info */}
      <div className="px-6 pb-6 pt-2 relative z-10">
        <h4 className="font-heading text-lg font-bold text-soft-white tracking-wider mb-1">
          {card.title}
        </h4>
        <p className="font-body text-soft-white/40 text-sm tracking-wide">
          {card.subtitle}
        </p>

        {/* Action line */}
        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-px flex-1" style={{ background: card.accentColor, opacity: 0.4 }} />
          <span className="font-mono-custom text-[10px] tracking-[2px]" style={{ color: card.accentColor }}>
            VIEW DETAILS
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M7 3l3 3-3 3" stroke={card.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-4 left-5 w-4 h-4 opacity-20 group-hover:opacity-60 transition-opacity">
        <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: card.accentColor }} />
        <div className="absolute bottom-0 left-0 h-full w-[1px]" style={{ background: card.accentColor }} />
      </div>
    </motion.div>
  )
}

export function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true })

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -420, behavior: 'smooth' })
  }
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 420, behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="relative py-24 lg:py-36 bg-carbon overflow-hidden">
      {/* Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hyper-yellow/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={titleRef}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-10 bg-hyper-yellow/50" />
              <span className="section-label" style={{ color: '#FFD000' }}>Visual Stories</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white uppercase tracking-tight"
            >
              Cinematic <span className="text-gradient-orange">Gallery</span>
            </motion.h2>
          </div>

          {/* Navigation buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-3"
          >
            <button
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center glass-card border border-white/10 hover:border-mclaren-orange/40 hover:bg-mclaren-orange/5 transition-all duration-300 cursor-pointer"
              aria-label="Scroll gallery left"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M11 4l-5 5 5 5" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center glass-card border border-white/10 hover:border-mclaren-orange/40 hover:bg-mclaren-orange/5 transition-all duration-300 cursor-pointer"
              aria-label="Scroll gallery right"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M7 4l5 5-5 5" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 px-6 lg:px-12 hide-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 48px))',
          paddingRight: 'max(24px, calc((100vw - 1280px) / 2 + 48px))',
        }}
      >
        {galleryCards.map((card, i) => (
          <GalleryCard key={i} card={card} index={i} />
        ))}
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-carbon to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-carbon to-transparent pointer-events-none" />
    </section>
  )
}
