import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

const pills = ['Color grading', 'Visual effects', 'Narrative design', 'Cinematography']

const awards = [
  { fest: 'Sundance', year: '2024' },
  { fest: 'TIFF', year: '2023' },
  { fest: 'Cannes', year: '2024' },
]

export default function About() {
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BODY_TEXT.split('')
  const total = chars.length

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-3xl px-6 py-12 md:px-12 md:py-16 text-center">
        {/* Label */}
        <p className="text-primary text-[10px] sm:text-xs mb-6 tracking-widest uppercase">
          Visual arts
        </p>

        {/* Multi-style heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Marcus Chen,', className: 'font-normal text-primary' },
              { text: 'a self-taught director.', className: 'italic font-serif text-primary' },
              {
                text: 'I have skills in color grading, visual effects, and narrative design.',
                className: 'font-normal text-primary',
              },
            ]}
          />
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {pills.map((p) => (
            <span
              key={p}
              className="px-4 py-1.5 rounded-full border border-white/10 text-gray-400 text-xs"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Scroll-linked character opacity paragraph */}
        <p
          ref={bodyRef}
          className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-10"
          style={{ color: '#DEDBC8', lineHeight: 1.6 }}
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

        {/* Awards */}
        <div className="flex flex-wrap justify-center gap-4">
          {awards.map((a) => (
            <div
              key={a.fest}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <span className="text-gray-400 text-xs">{a.fest}</span>
              <span className="text-gray-600 text-xs">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
