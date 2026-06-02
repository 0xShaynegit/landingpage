import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '2,400+', label: 'Artists worldwide' },
  { value: '61', label: 'Countries represented' },
  { value: '140+', label: 'Festival selections' },
  { value: '7', label: 'Years running' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-black border-t border-b border-white/5 py-12 md:py-16">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
              {stat.value}
            </span>
            <span className="text-gray-500 text-xs md:text-sm mt-2">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
