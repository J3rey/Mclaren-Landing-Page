import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import p1Car from '../assets/Mclaren P1 Back.png'
import lt600Car from '../assets/Mclaren LT600 back.png'

const specs = [
  { label: 'Engine', p1: '3.8L Twin-Turbo V8 + Electric', lt: '3.8L Twin-Turbo V8' },
  { label: 'Powertrain', p1: 'Hybrid PHEV', lt: 'Pure Combustion' },
  { label: 'Max Power', p1: '916 bhp', lt: '592 bhp' },
  { label: 'Max Torque', p1: '900 Nm', lt: '620 Nm' },
  { label: '0–100 km/h', p1: '2.8 seconds', lt: '2.9 seconds' },
  { label: 'Top Speed', p1: '350 km/h', lt: '328 km/h' },
  { label: 'Dry Weight', p1: '1,395 kg', lt: '1,247 kg' },
  { label: 'Gearbox', p1: '7-Speed SSG', lt: '7-Speed SSG' },
  { label: 'Production', p1: '375 units', lt: '600 units' },
  { label: 'Price', p1: '£1,150,000+', lt: '£185,500+' },
]

export function ComparisonSection() {
  const [hovered, setHovered] = useState<'p1' | '600lt' | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="compare" className="relative py-24 lg:py-36 bg-matte overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mclaren-orange/20 to-transparent" />

      {/* Background elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-mclaren-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-hyper-yellow/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-mclaren-orange/50" />
            <span className="section-label">Head to Head</span>
            <div className="h-px w-12 bg-mclaren-orange/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-4xl lg:text-6xl font-black text-soft-white uppercase tracking-tight"
          >
            P1 <span className="text-gradient-orange">vs</span> 600LT
          </motion.h2>
        </div>

        {/* Split screen car display */}
        <div className="relative flex flex-col lg:flex-row gap-0 mb-16 overflow-hidden rounded-sm">
          {/* P1 side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-1 glass-card carbon-texture p-8 lg:p-12 flex flex-col items-center cursor-pointer group transition-all duration-500"
            style={{
              background: hovered === 'p1'
                ? 'rgba(255, 106, 0, 0.06)'
                : 'rgba(255,255,255,0.02)',
              borderColor: hovered === 'p1' ? 'rgba(255,106,0,0.3)' : 'rgba(255,255,255,0.04)',
            }}
            onMouseEnter={() => setHovered('p1')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* P1 glow */}
            <motion.div
              animate={{ opacity: hovered === 'p1' ? 0.6 : 0.15 }}
              className="absolute bottom-0 left-0 right-0 h-40 bg-mclaren-orange/20 blur-3xl pointer-events-none rounded-full"
            />

            <div className="section-label mb-2">Hybrid Hypercar</div>
            <h3 className="font-heading text-2xl lg:text-4xl font-black text-soft-white tracking-widest uppercase mb-8">
              McLaren P1
            </h3>

            <img src={p1Car} alt="McLaren P1" className="w-full max-w-lg relative z-10 object-contain" />

            <motion.div
              animate={{ opacity: hovered === 'p1' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 font-body text-soft-white/60 text-sm text-center max-w-xs"
            >
              The pinnacle of McLaren road car engineering. Hybrid hypercar technology derived directly from Formula 1.
            </motion.div>

            {/* Corner bracket top-left */}
            <div className="absolute top-4 left-4 w-6 h-6 opacity-40">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-mclaren-orange" />
              <div className="absolute top-0 left-0 h-full w-[1px] bg-mclaren-orange" />
            </div>
          </motion.div>

          {/* Center divider */}
          <div className="hidden lg:flex flex-col items-center justify-center w-12 relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-mclaren-orange/5 via-white/5 to-hyper-yellow/5" />
            <div className="font-heading text-xs text-white/20 tracking-[4px] writing-mode-vertical select-none transform rotate-90">
              VERSUS
            </div>
          </div>

          {/* 600LT side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-1 glass-card carbon-texture p-8 lg:p-12 flex flex-col items-center cursor-pointer group transition-all duration-500"
            style={{
              background: hovered === '600lt'
                ? 'rgba(255, 208, 0, 0.04)'
                : 'rgba(255,255,255,0.02)',
              borderColor: hovered === '600lt' ? 'rgba(255,208,0,0.25)' : 'rgba(255,255,255,0.04)',
            }}
            onMouseEnter={() => setHovered('600lt')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* 600LT glow */}
            <motion.div
              animate={{ opacity: hovered === '600lt' ? 0.5 : 0.12 }}
              className="absolute bottom-0 left-0 right-0 h-40 bg-hyper-yellow/15 blur-3xl pointer-events-none rounded-full"
            />

            <div className="section-label mb-2" style={{ color: '#FFD000' }}>LongTail Series</div>
            <h3 className="font-heading text-2xl lg:text-4xl font-black text-soft-white tracking-widest uppercase mb-8">
              McLaren 600LT
            </h3>

            <img src={lt600Car} alt="McLaren 600LT" className="w-full max-w-lg relative z-10 object-contain" />

            <motion.div
              animate={{ opacity: hovered === '600lt' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 font-body text-soft-white/60 text-sm text-center max-w-xs"
            >
              The purist's McLaren. Longtail heritage meets modern hypercar DNA with an unmatched power-to-weight ratio.
            </motion.div>

            {/* Corner bracket top-right */}
            <div className="absolute top-4 right-4 w-6 h-6 opacity-40">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-hyper-yellow" />
              <div className="absolute top-0 right-0 h-full w-[1px] bg-hyper-yellow" />
            </div>
          </motion.div>
        </div>

        {/* Spec comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card carbon-texture overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-white/5 bg-white/2">
            <div className="p-4 lg:p-5 font-mono-custom text-xs text-white/30 tracking-[3px] uppercase">
              Specification
            </div>
            <div className="p-4 lg:p-5 font-heading text-sm text-mclaren-orange font-bold tracking-[3px] uppercase text-center border-x border-white/5">
              P1
            </div>
            <div className="p-4 lg:p-5 font-heading text-sm text-hyper-yellow font-bold tracking-[3px] uppercase text-center">
              600LT
            </div>
          </div>

          {/* Rows */}
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
              className="grid grid-cols-3 border-b border-white/[0.03] hover:bg-white/[0.015] transition-colors duration-200 group"
            >
              <div className="p-4 lg:p-5 font-body text-soft-white/40 text-sm uppercase tracking-wider">
                {spec.label}
              </div>
              <div className="p-4 lg:p-5 font-body text-soft-white text-sm text-center border-x border-white/[0.03] group-hover:text-mclaren-orange transition-colors">
                {spec.p1}
              </div>
              <div className="p-4 lg:p-5 font-body text-soft-white text-sm text-center group-hover:text-hyper-yellow transition-colors">
                {spec.lt}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
