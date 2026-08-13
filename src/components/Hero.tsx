import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
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
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">
            Desenvolvedor Full-Stack
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-white">
            Olá, eu sou o{' '}
            <span className="text-gradient">Cristiano</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-8">
            Crio aplicações web de alta performance com tecnologias modernas,
            unindo código limpo a experiências 3D imersivas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow text-black font-semibold hover:scale-105 transition-transform"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-slate-700 hover:border-brand-orange hover:text-brand-orange transition-all font-medium text-white"
            >
              Entrar em Contato
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/PmwMaster"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/cristiano-xavier-426471342/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:xaviernitrov@gmail.com"
              className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="lg:w-1/2 w-full h-[50vh] lg:h-[80vh] flex items-center justify-center relative mt-12 lg:mt-0 cursor-grab active:cursor-grabbing">
        <div className="w-full h-full absolute inset-0">
          <RubiksCube />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
