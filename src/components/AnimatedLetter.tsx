import { motion, useTransform, MotionValue } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  scrollProgress: MotionValue<number>
  charProgress: number
}

export default function AnimatedLetter({ char, scrollProgress, charProgress }: AnimatedLetterProps) {
  const opacity = useTransform(
    scrollProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  )

  if (char === ' ') return <span>&nbsp;</span>

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  )
}
