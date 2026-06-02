import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const cards = [
  {
    type: 'video',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    label: 'Your creative canvas.',
  },
  {
    type: 'feature',
    number: '01',
    title: 'Project Storyboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Visual timeline with drag-and-drop scenes',
      'Auto-generated shot lists from scripts',
      'Collaborative annotation layers',
      'Export to PDF or final cut packages',
    ],
  },
  {
    type: 'feature',
    number: '02',
    title: 'Smart Critiques.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI-powered composition and colour analysis',
      'Timestamped creative notes from mentors',
      'Tool integrations with Premiere and DaVinci',
    ],
  },
  {
    type: 'feature',
    number: '03',
    title: 'Immersion Capsule.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Notification silencing during deep work blocks',
      'Curated ambient soundscapes for focus',
      'Schedule syncing with your creative calendar',
    ],
  },
]

const cardEase = [0.22, 1, 0.36, 1] as const

function FeatureCard({
  card,
  index,
}: {
  card: (typeof cards)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (card.type === 'video') {
    return (
      <motion.div
        ref={ref}
        className="relative rounded-2xl overflow-hidden lg:h-[480px] min-h-[260px]"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: cardEase }}
      >
        <video
          src={card.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <p
          className="absolute bottom-5 left-5 text-base md:text-lg font-medium"
          style={{ color: '#E1E0CC' }}
        >
          {card.label}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl p-5 md:p-6 flex flex-col justify-between lg:h-[480px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: cardEase }}
    >
      <div>
        {/* Icon */}
        <img
          src={card.icon}
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover mb-5"
        />

        {/* Title + number */}
        <div className="flex items-start justify-between mb-5">
          <h3 className="text-primary font-medium text-base md:text-lg leading-tight">{card.title}</h3>
          <span className="text-gray-500 text-xs ml-2 mt-1">{card.number}</span>
        </div>

        {/* Checklist */}
        <ul className="flex flex-col gap-3">
          {card.items!.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check size={14} className="text-primary mt-0.5 shrink-0" />
              <span className="text-gray-400 text-xs sm:text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn more */}
      <a
        href="#"
        className="inline-flex items-center gap-1 text-primary text-xs sm:text-sm mt-6 hover:opacity-70 transition-opacity"
      >
        Learn more
        <ArrowRight size={12} style={{ transform: 'rotate(-45deg)' }} />
      </a>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="min-h-screen bg-black py-20 md:py-32 px-4 md:px-8 relative">
      {/* Noise bg */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center"
            segments={[
              {
                text: 'Studio-grade workflows for visionary creators.',
                className: 'text-primary block w-full',
              },
              {
                text: 'Built for pure vision. Powered by art.',
                className: 'text-gray-500 block w-full',
              },
            ]}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          {cards.map((card, i) => (
            <FeatureCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
