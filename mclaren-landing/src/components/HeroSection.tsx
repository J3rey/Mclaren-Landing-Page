import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ParticleField } from './ParticleField'
import p1Car from '../assets/Mclaren P1 Front.png'
import lt600Car from '../assets/Mclaren LT600 Front.png'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [activeCard, setActiveCard] = useState<'p1' | '600lt' | null>(null)

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 30 })

  const p1RotateY = useTransform(smoothX, [-0.5, 0.5], [4, -4])
  const p1TranslateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12])
  const ltRotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4])
  const ltTranslateX = useTransform(smoothX, [-0.5, 0.5], [12, -12])
  const bgY = useTransform(smoothY, [-0.5, 0.5], [-20, 20])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5)
      const ny = (e.clientY / window.innerHeight - 0.5)
      mouseX.set(nx)
      mouseY.set(ny)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-matte"
    >
      {/* Animated background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Deep ambient glow left (P1 orange) */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-mclaren-orange/10 rounded-full blur-[120px] animate-pulse-glow" />
        {/* Deep ambient glow right (600LT yellow) */}
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-hyper-yellow/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        {/* Center dark vignette */}
        <div className="absolute inset-0 bg-radial-gradient" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #0A0A0A 80%)' }} />
      </motion.div>

      {/* Carbon fiber texture overlay */}
      <div className="absolute inset-0 carbon-texture opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline-overlay pointer-events-none" aria-hidden="true" />

      {/* Particles */}
      <ParticleField />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.03]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24">
        {/* Label */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-mclaren-orange/60" />
          <span className="section-label">McLaren Automotive — 2024</span>
          <div className="h-px w-16 bg-mclaren-orange/60" />
        </motion.div>

        {/* Headline */}
        <div className="text-center mb-4">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-soft-white leading-none tracking-tight uppercase"
          >
            Engineered
          </motion.h1>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight uppercase text-gradient-orange"
          >
            For The Extreme
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          className="font-body text-base sm:text-lg text-soft-white/40 text-center mb-12 tracking-widest uppercase font-light"
        >
          Two machines. One obsession. Zero compromises.
        </motion.p>

        {/* Car showcase */}
        <div className="relative flex flex-col lg:flex-row items-end justify-center gap-0 lg:gap-16 mb-12">
          {/* McLaren P1 */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{ rotateY: p1RotateY, x: p1TranslateX }}
            className="relative w-full lg:w-1/2 max-w-xl cursor-pointer group"
            onHoverStart={() => setActiveCard('p1')}
            onHoverEnd={() => setActiveCard(null)}
          >
            {/* P1 glow */}
            <motion.div
              animate={{ opacity: activeCard === 'p1' ? 1 : 0.4 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-mclaren-orange/30 blur-3xl rounded-full pointer-events-none"
            />
            <img src={p1Car} alt="McLaren P1" className="w-full object-contain drop-shadow-2xl" />
            {/* P1 label */}
            <motion.div
              animate={{ opacity: activeCard === 'p1' ? 1 : 0.6 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center"
            >
              <div className="section-label mb-1">Hybrid Hypercar</div>
              <div className="font-heading text-xl font-bold text-soft-white tracking-widest">
                McLaren P1
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:flex flex-col items-center gap-2 pb-16 opacity-30">
            <div className="w-px h-24 bg-mclaren-orange" />
            <span className="font-mono-custom text-xs text-mclaren-orange rotate-0">VS</span>
            <div className="w-px h-24 bg-mclaren-orange" />
          </div>

          {/* McLaren 600LT */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={5}
            style={{ rotateY: ltRotateY, x: ltTranslateX }}
            className="relative w-full lg:w-1/2 max-w-xl cursor-pointer group"
            onHoverStart={() => setActiveCard('600lt')}
            onHoverEnd={() => setActiveCard(null)}
          >
            {/* 600LT glow */}
            <motion.div
              animate={{ opacity: activeCard === '600lt' ? 1 : 0.4 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-hyper-yellow/25 blur-3xl rounded-full pointer-events-none"
            />
            <img src={lt600Car} alt="McLaren 600LT" className="w-full object-contain drop-shadow-2xl" />
            {/* 600LT label */}
            <motion.div
              animate={{ opacity: activeCard === '600lt' ? 1 : 0.6 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center"
            >
              <div className="section-label mb-1" style={{ color: '#FFD000' }}>LongTail Series</div>
              <div className="font-heading text-xl font-bold text-soft-white tracking-widest">
                McLaren 600LT
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={6}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <a href="#p1" className="btn-primary">
            <span>Explore the P1</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#600lt" className="btn-secondary">
            <span>Discover the 600LT</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono-custom text-[10px] text-white/30 tracking-[3px] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-mclaren-orange/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
