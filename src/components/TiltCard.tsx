import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

export default function TiltCard({ children, className }: { children: ReactNode, className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for smooth tracking
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  // Transform constraints: +/- 10 degrees based on normalized bounds (-0.5 to 0.5)
  const rotateX = useTransform(springY, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-10deg', '10deg'])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const currentX = (e.clientX - rect.left) / rect.width - 0.5
    const currentY = (e.clientY - rect.top) / rect.height - 0.5
    
    x.set(currentX)
    y.set(currentY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={className}
    >
      <div style={{ transform: 'translateZ(40px)', width: '100%', height: '100%' }}>
        {children}
      </div>
    </motion.div>
  )
}
