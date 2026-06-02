import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const works = [
  {
    type: 'video',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    title: 'Chromatic Drift',
    category: 'Short film',
    year: '2025',
  },
  {
    type: 'video',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4',
    title: 'Fade to Grain',
    category: 'Documentary',
    year: '2024',
  },
  {
    type: 'image',
    src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    title: 'Still Life in Motion',
    category: 'Photography',
    year: '2025',
  },
  {
    type: 'image',
    src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    title: 'Noir Sequence',
    category: 'Visual series',
    year: '2024',
  },
]

function WorkCard({ work, index }: { work: typeof works[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  const tall = index === 0 || index === 3

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${tall ? 'row-span-2' : 'row-span-1'}`}
      style={{ minHeight: tall ? '480px' : '220px' }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {work.type === 'video' ? (
        <video
          src={work.src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img src={work.src} alt={work.title} className="absolute inset-0 w-full h-full object-cover" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <div>
          <p className="text-primary font-medium text-sm md:text-base">{work.title}</p>
          <p className="text-gray-400 text-xs mt-0.5">{work.category}</p>
        </div>
        <span className="text-gray-500 text-xs">{work.year}</span>
      </div>
    </motion.div>
  )
}

export default function Works() {
  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-medium">Selected works</h2>
          <a href="#" className="text-gray-500 text-xs md:text-sm hover:text-primary transition-colors">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[220px]">
          {works.map((work, i) => (
            <WorkCard key={i} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
