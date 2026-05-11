import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const speedLines = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  top: `${(i / 18) * 100}%`,
  duration: 0.8 + Math.random() * 1.2,
  delay: Math.random() * 2,
  width: `${15 + Math.random() * 30}%`,
  opacity: 0.1 + Math.random() * 0.3,
}))

const experiencePoints = [
  {
    number: '01',
    title: 'Active Aerodynamics',
    body: 'The P1\'s carbon fibre rear wing deploys in under 0.5 seconds, generating up to 600kg of downforce at 257 km/h. The 600LT\'s fixed rear wing maintains consistent grip through every corner.',
    color: '#FF6A00',
  },
  {
    number: '02',
    title: 'Race-Derived Suspension',
    body: 'Formula 1-inspired Proactive Chassis Control II. Hydraulically interconnected suspension reads the road 1,000 times per second, adjusting in real time for any surface.',
    color: '#FFD000',
  },
  {
    number: '03',
    title: 'Carbon MonoCell II',
    body: 'The carbon fibre monocoque is the heart of every McLaren. Weighing just 75kg, it provides a safety cell stronger than steel at a fraction of the weight.',
    color: '#FF6A00',
  },
  {
    number: '04',
    title: 'Twin-Turbo V8',
    body: 'The M838TQ engine sits mid-rear, delivering power with brutal efficiency. Zero turbo lag. Instantaneous throttle response. A soundtrack that rewires the nervous system.',
    color: '#FFD000',
  },
]

export function DrivingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])
  const lineOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      id="driving"
      className="relative py-24 lg:py-36 bg-matte overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mclaren-orange/30 to-transparent" />

      {/* Animated speed lines background */}
      <motion.div
        style={{ opacity: lineOpacity, x: bgX }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {speedLines.map((line) => (
          <motion.div
            key={line.id}
            className="speed-line absolute"
            style={{
              top: line.top,
              width: line.width,
              opacity: line.opacity,
            }}
            animate={{
              x: ['-100%', '120vw'],
              opacity: [0, line.opacity, line.opacity, 0],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </motion.div>

      {/* Large ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-mclaren-orange/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24" ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-mclaren-orange/50" />
            <span className="section-label">Experience</span>
            <div className="h-px w-12 bg-mclaren-orange/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-4xl lg:text-6xl font-black text-soft-white uppercase tracking-tight"
          >
            The Art of{' '}
            <span className="text-gradient-orange">Speed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 font-body text-soft-white/40 text-base tracking-wider max-w-xl mx-auto"
          >
            Every system. Every component. Every material choice. Serving a single purpose.
          </motion.p>
        </div>

        {/* HUD-style telemetry display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-card carbon-texture p-8 lg:p-12 mb-16 overflow-hidden"
        >
          {/* HUD corner brackets */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8 opacity-30`}>
              <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-full h-[1px] bg-mclaren-orange`} />
              <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} h-full w-[1px] bg-mclaren-orange`} />
            </div>
          ))}

          {/* Telemetry bars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Engine Load', value: 94, unit: '%', color: '#FF6A00' },
              { label: 'Downforce', value: 600, unit: 'kg', color: '#FFD000' },
              { label: 'G-Force', value: 2, unit: '.1g', color: '#FF6A00' },
              { label: 'Temp', value: 98, unit: '°C', color: '#FFD000' },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="section-label mb-2 opacity-60" style={{ color: metric.color }}>
                  {metric.label}
                </div>
                <div className="font-heading text-3xl lg:text-4xl font-black text-soft-white mb-3">
                  {metric.value}
                  <span className="text-lg font-normal opacity-60" style={{ color: metric.color }}>
                    {metric.unit}
                  </span>
                </div>
                {/* Bar */}
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min((metric.value / (metric.value * 1.1)) * 100, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${metric.color}80, ${metric.color})` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scan line animation */}
          <motion.div
            animate={{ y: ['-100%', '100%'], opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-mclaren-orange/10 to-transparent pointer-events-none"
          />
        </motion.div>

        {/* Experience points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiencePoints.map((point, i) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card glass-card-hover carbon-texture p-6 lg:p-8 flex gap-6 cursor-default group relative overflow-hidden"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span
                  className="font-heading text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-400"
                  style={{ color: point.color }}
                >
                  {point.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-[2px]" style={{ background: point.color }} />
                  <h4 className="font-heading text-base font-bold text-soft-white tracking-wider uppercase">
                    {point.title}
                  </h4>
                </div>
                <p className="font-body text-soft-white/50 text-sm leading-relaxed font-light">
                  {point.body}
                </p>
              </div>

              {/* Side glow */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-80 transition-opacity duration-400"
                style={{ background: point.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
