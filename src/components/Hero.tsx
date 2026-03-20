import { motion } from 'framer-motion'
import RubiksCube from './RubiksCube'

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between relative">
      <div className="lg:w-1/2 z-10 flex flex-col gap-6">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-4 text-white">
            Hello, I'm <br />
            <span className="text-gradient">Cristiano</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-8">
            A creative developer blending code and design to build immersive high-performance web experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow text-black font-semibold hover:opacity-90 transition-opacity">
              View Projects
            </a>
            <a href="https://github.com/PmwMaster" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all font-medium text-white">
              My GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <div className="lg:w-1/2 w-full h-[50vh] lg:h-[80vh] flex items-center justify-center relative mt-12 lg:mt-0 cursor-grab active:cursor-grabbing">
        <div className="w-full h-full absolute inset-0">
           <RubiksCube />
        </div>
      </div>
    </section>
  )
}
