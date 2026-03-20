import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      // Verify if the cursor is hovering any interactive element like A or BUTTON
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('cursor-interactive')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-orange rounded-full pointer-events-none mix-blend-screen z-[9999]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', mass: 0.1, stiffness: 400, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-orange rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 0.6
        }}
        transition={{ type: 'spring', mass: 0.3, stiffness: 100, damping: 15 }}
      />
      <style>{`
        a, button, input, textarea {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
