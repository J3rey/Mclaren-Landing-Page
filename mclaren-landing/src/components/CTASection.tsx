import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import p1Front from '../assets/Mclaren P1 Front.png'
import lt600Front from '../assets/Mclaren LT600 Front.png'

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const inView = useInView(contentRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9])

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden bg-matte"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hyper-yellow/20 to-transparent" />

      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Main orange glow */}
        <motion.div
          style={{ scale: glowScale }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[700px] h-[400px] rounded-full bg-mclaren-orange/15 blur-[120px] animate-pulse-glow"
        />
        {/* Secondary yellow glow */}
        <motion.div
          style={{ scale: glowScale }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[400px] h-[200px] rounded-full bg-hyper-yellow/8 blur-[80px] animate-pulse-glow"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
        {/* Dark vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center bottom, transparent 20%, #0A0A0A 65%)' }}
        />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-matte to-transparent" />
      </div>

      {/* Carbon texture */}
      <div className="absolute inset-0 carbon-texture opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full" ref={contentRef}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-12 bg-mclaren-orange/50" />
          <span className="section-label">Own the Experience</span>
          <div className="h-px w-12 bg-mclaren-orange/50" />
        </motion.div>

        {/* Main headline */}
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-soft-white uppercase tracking-tight leading-none"
          >
            Your Machine.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none text-gradient-orange"
          >
            Your Extreme.
          </motion.h2>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center font-body text-soft-white/40 text-base lg:text-lg tracking-wider max-w-2xl mx-auto mb-16"
        >
          Two machines. Zero compromises. One decision. Configure your McLaren today and join the ranks of those who refuse to settle.
        </motion.p>

        {/* Car cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* P1 card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card carbon-texture p-8 relative overflow-hidden group cursor-pointer"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-mclaren-orange to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-mclaren-orange/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="section-label mb-2">Hybrid Hypercar</div>
            <h3 className="font-heading text-2xl lg:text-3xl font-black text-soft-white tracking-widest uppercase mb-2">
              McLaren P1
            </h3>
            <p className="font-mono-custom text-xs text-mclaren-orange/60 mb-6">
              916 bhp — 350 km/h — 375 produced
            </p>

            <img src={p1Front} alt="McLaren P1" className="w-full max-w-sm mx-auto mb-6 object-contain" />

            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono-custom text-xs text-white/30 tracking-[2px] uppercase mb-1">
                  From
                </div>
                <div className="font-heading text-2xl font-bold text-soft-white">
                  £1,150,000
                </div>
              </div>
              <a href="#" className="btn-primary">
                <span>Configure P1</span>
              </a>
            </div>
          </motion.div>

          {/* 600LT card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card carbon-texture p-8 relative overflow-hidden group cursor-pointer"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, transparent, #FFD000, transparent)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-hyper-yellow/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="section-label mb-2" style={{ color: '#FFD000' }}>LongTail Series</div>
            <h3 className="font-heading text-2xl lg:text-3xl font-black text-soft-white tracking-widest uppercase mb-2">
              McLaren 600LT
            </h3>
            <p className="font-mono-custom text-xs text-hyper-yellow/60 mb-6">
              592 bhp — 328 km/h — Limited Series
            </p>

            <img src={lt600Front} alt="McLaren 600LT" className="w-full max-w-sm mx-auto mb-6 object-contain" />

            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono-custom text-xs text-white/30 tracking-[2px] uppercase mb-1">
                  From
                </div>
                <div className="font-heading text-2xl font-bold text-soft-white">
                  £185,500
                </div>
              </div>
              <a href="#" className="btn-secondary" style={{ borderColor: 'rgba(255,208,0,0.3)', color: '#FFD000' }}>
                <span>Configure 600LT</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="glass-card carbon-texture p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="font-mono-custom text-xs text-mclaren-orange/50 tracking-[3px] uppercase mb-2">
              McLaren Automotive
            </div>
            <p className="font-body text-soft-white/60 text-sm">
              Speak to a McLaren specialist for a bespoke configuration consultation.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href="#" className="btn-secondary">
              <span>Find a Retailer</span>
            </a>
            <a href="#" className="btn-primary">
              <span>Contact Us</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer micro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="relative z-10 mt-16 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 bg-white/10" />
          <div className="w-5 h-5 border border-mclaren-orange/40 rotate-45" />
          <div className="h-px w-16 bg-white/10" />
        </div>
        <p className="font-mono-custom text-[10px] text-white/20 tracking-[3px] uppercase">
          McLaren Automotive Ltd — Woking, Surrey
        </p>
        <p className="font-mono-custom text-[9px] text-white/10 tracking-[2px] mt-1">
          © 2024 McLaren Automotive. All rights reserved.
        </p>
      </motion.div>
    </section>
  )
}
