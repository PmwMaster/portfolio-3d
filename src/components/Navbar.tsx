import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 glass px-6 py-4 flex justify-between items-center"
    >
      <div className="text-xl font-bold tracking-tighter">
        CRIS<span className="text-brand-orange">TIANO</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#about" className="hover:text-brand-yellow transition-colors">About</a>
        <a href="#projects" className="hover:text-brand-orange transition-colors">Projects</a>
        <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
      </div>
    </motion.nav>
  )
}
