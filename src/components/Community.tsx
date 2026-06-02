import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const voices = [
  {
    quote:
      'Prisma gave me the language to talk about what I was already doing intuitively. The feedback from the collective changed how I see light entirely.',
    name: 'Yuna Takahashi',
    role: 'Documentary filmmaker, Tokyo',
    initials: 'YT',
  },
  {
    quote:
      'I spent three years making work alone. Within six months of joining Prisma I had collaborated on two projects that screened at festivals I had only dreamed of.',
    name: 'Emeka Osei',
    role: 'Visual artist, Lagos',
    initials: 'EO',
  },
  {
    quote:
      'The workshops are unlike anything I have found elsewhere. No posturing, no gatekeeping. Just people who care deeply about the craft and want to push each other forward.',
    name: 'Lena Brandt',
    role: 'Cinematographer, Berlin',
    initials: 'LB',
  },
]

export default function Community() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary/40 text-[10px] tracking-widest uppercase mb-3">Community voices</p>
        <h2 className="text-primary text-2xl md:text-3xl font-medium mb-12 max-w-md">
          From the people inside the collective.
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {voices.map((v, i) => (
            <motion.div
              key={i}
              className="bg-[#101010] rounded-2xl p-6 md:p-8 flex flex-col justify-between"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">"{v.quote}"</p>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-primary text-xs font-medium shrink-0">
                  {v.initials}
                </div>
                <div>
                  <p className="text-primary text-sm font-medium">{v.name}</p>
                  <p className="text-gray-500 text-xs">{v.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
