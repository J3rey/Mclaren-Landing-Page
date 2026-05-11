import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatCardProps {
  label: string
  value: number
  unit: string
  suffix?: string
  description: string
  color: string
  delay: number
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatCard({ label, value, unit, suffix = '', description, color, delay }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useCountUp(value, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover carbon-texture relative p-6 lg:p-8 cursor-default group"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Corner decoration */}
      <div className="absolute top-4 right-4 w-6 h-6 opacity-20 group-hover:opacity-60 transition-opacity">
        <div className="absolute top-0 right-0 w-full h-[1px]" style={{ background: color }} />
        <div className="absolute top-0 right-0 h-full w-[1px]" style={{ background: color }} />
      </div>

      {/* Label */}
      <div className="section-label mb-3 opacity-70" style={{ color }}>
        {label}
      </div>

      {/* Value */}
      <div className="flex items-end gap-2 mb-2">
        <span
          className="stat-number text-5xl lg:text-6xl font-black text-soft-white group-hover:text-shadow-glow"
          style={{ textShadow: inView ? `0 0 30px ${color}40` : 'none' }}
        >
          {count.toLocaleString()}
        </span>
        <span className="font-heading text-xl font-bold mb-2 opacity-70" style={{ color }}>
          {unit}{suffix}
        </span>
      </div>

      {/* Description */}
      <p className="font-body text-soft-white/40 text-sm leading-relaxed font-light">
        {description}
      </p>

      {/* Bottom glow on hover */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-full"
        style={{ background: color }}
      />
    </motion.div>
  )
}

const p1Stats = [
  {
    label: 'Top Speed',
    value: 350,
    unit: 'km/h',
    description: 'Electronically limited. Aerodynamically capable of significantly more.',
    color: '#FF6A00',
  },
  {
    label: 'Combined Power',
    value: 916,
    unit: 'bhp',
    description: 'M838TQ twin-turbo V8 paired with a 176bhp electric motor.',
    color: '#FF6A00',
  },
  {
    label: '0–100 km/h',
    value: 2,
    unit: 's',
    suffix: '.8',
    description: 'Blistering acceleration through IPAS electric boost system.',
    color: '#FFD000',
  },
  {
    label: 'Dry Weight',
    value: 1395,
    unit: 'kg',
    description: 'Carbon MonoCell II chassis with carbon fibre body panels throughout.',
    color: '#FFD000',
  },
]

const lt600Stats = [
  {
    label: 'Top Speed',
    value: 328,
    unit: 'km/h',
    description: 'Pure track focus with longtail aerodynamic efficiency at work.',
    color: '#FFD000',
  },
  {
    label: 'Engine Output',
    value: 592,
    unit: 'bhp',
    description: '3.8L twin-turbo V8, tuned for raw, unfiltered performance.',
    color: '#FFD000',
  },
  {
    label: '0–100 km/h',
    value: 2,
    unit: 's',
    suffix: '.9',
    description: 'Track-derived launch control for maximum off-the-line thrust.',
    color: '#FF6A00',
  },
  {
    label: 'Dry Weight',
    value: 1247,
    unit: 'kg',
    description: '96kg lighter than the 570S with extensive carbon fibre reduction.',
    color: '#FF6A00',
  },
]

export function PerformanceSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true })

  return (
    <section id="performance" className="relative py-24 lg:py-36 bg-carbon overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mclaren-orange/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hyper-yellow/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-mclaren-orange/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-mclaren-orange/50" />
            <span className="section-label">Performance Data</span>
            <div className="h-px w-12 bg-mclaren-orange/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-4xl lg:text-6xl font-black text-soft-white uppercase tracking-tight"
          >
            Numbers That{' '}
            <span className="text-gradient-orange">Defy Reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 font-body text-soft-white/40 text-base tracking-wider"
          >
            Engineering benchmarks. Not marketing figures.
          </motion.p>
        </div>

        {/* P1 Stats */}
        <div id="p1" className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-1 h-8 bg-mclaren-orange" />
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-soft-white tracking-widest uppercase">
              McLaren P1
            </h3>
            <div className="h-px flex-1 bg-mclaren-orange/10" />
            <span className="font-mono-custom text-xs text-mclaren-orange/50">HYBRID HYPERCAR</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p1Stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                {...stat}
                suffix={stat.suffix}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Animated divider */}
        <div className="relative h-px my-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-mclaren-orange/50 to-transparent"
          />
        </div>

        {/* 600LT Stats */}
        <div id="600lt" className="mt-16 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-1 h-8 bg-hyper-yellow" />
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-soft-white tracking-widest uppercase">
              McLaren 600LT
            </h3>
            <div className="h-px flex-1 bg-hyper-yellow/10" />
            <span className="font-mono-custom text-xs text-hyper-yellow/50">LONGTAIL SERIES</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lt600Stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                {...stat}
                suffix={stat.suffix}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
