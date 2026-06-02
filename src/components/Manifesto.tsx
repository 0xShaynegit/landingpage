import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedLetter from './AnimatedLetter'

const TEXT =
  'We do not make content. We do not optimise for algorithms. We do not chase trends or manufacture moments. We make work that lasts. Work that is felt before it is understood. Work that earns its place in the world.'

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.3'] })
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  const chars = TEXT.split('')
  const total = chars.length

  return (
    <section className="bg-black py-24 md:py-40 px-4 md:px-8">
      <motion.div ref={ref} style={{ scale, opacity }} className="max-w-5xl mx-auto text-center">
        <p className="text-primary/30 text-[10px] tracking-widest uppercase mb-10">Manifesto</p>
        <p
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight"
          style={{ color: '#E1E0CC' }}
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              scrollProgress={scrollYProgress}
              charProgress={i / total}
            />
          ))}
        </p>
      </motion.div>
    </section>
  )
}
