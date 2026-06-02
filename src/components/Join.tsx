import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const socials = ['Instagram', 'Vimeo', 'X', 'Letterboxd']

export default function Join() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [email, setEmail] = useState('')

  return (
    <section className="bg-black min-h-screen flex flex-col justify-between py-20 md:py-32 px-4 md:px-8">
      <div ref={ref} className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <motion.p
          className="text-primary/40 text-[10px] tracking-widest uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Join the lab
        </motion.p>

        <motion.h2
          className="text-primary font-medium leading-[0.9] tracking-[-0.04em] text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] max-w-4xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Make work that matters.
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm md:text-base max-w-md mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Applications open twice a year. Drop your email and we will reach out when the next cohort opens.
        </motion.p>

        <motion.div
          className="flex items-center gap-3 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex-1 bg-[#111] border border-white/10 rounded-full px-5 py-3 flex items-center">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-primary text-sm w-full outline-none placeholder:text-gray-600"
            />
          </div>
          <button className="group flex items-center gap-2 bg-primary rounded-full pl-5 pr-1 py-1 font-medium text-sm text-black whitespace-nowrap transition-all hover:gap-3">
            Apply
            <span className="bg-black rounded-full w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight size={14} color="#DEDBC8" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Footer bar */}
      <motion.div
        className="max-w-7xl mx-auto w-full flex items-center justify-between mt-20 pt-8 border-t border-white/5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="text-primary font-medium text-sm">Prisma</span>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a key={s} href="#" className="text-gray-500 text-xs hover:text-primary transition-colors">
              {s}
            </a>
          ))}
        </div>
        <span className="text-gray-600 text-xs">2026</span>
      </motion.div>
    </section>
  )
}
