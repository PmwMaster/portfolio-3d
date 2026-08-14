import { motion } from 'framer-motion'
import { Code2, Layout, Server, Cpu } from 'lucide-react'

const highlights = [
  { icon: <Layout className="w-6 h-6" />, label: 'Frontend', desc: 'React, Next.js, Tailwind' },
  { icon: <Server className="w-6 h-6" />, label: 'Backend', desc: 'Node.js, Python, SQL' },
  { icon: <Code2 className="w-6 h-6" />, label: 'Código Limpo', desc: 'SOLID, Design Patterns' },
  { icon: <Cpu className="w-6 h-6" />, label: '3D & Gráficos', desc: 'Three.js, WebGL' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-2 text-center">
            Sobre Mim
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold mb-8 text-white text-center">
            Construindo a web,{' '}
            <span className="text-gradient">um pixel por vez.</span>
          </h3>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="w-56 h-64 lg:w-72 lg:h-80 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/40">
                <img
                  src="/cristiano.jpg"
                  alt="Cristiano - Desenvolvedor Full-Stack"
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-bg shadow-lg shadow-green-500/30" />
            </div>

            <div className="space-y-4 text-center">
              <p className="text-slate-300 text-lg leading-relaxed">
                Sou um desenvolvedor full-stack apaixonado por criar experiências
                ricas e interativas na web. Combino frameworks modernos de frontend
                com arquitetura sólida de backend para entregar aplicações rápidas,
                bonitas e escaláveis.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                Quando não estou programando, pode me encontrando explorando gráficos 3D,
                contribuindo com open source ou experimentando novas tecnologias.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-5 rounded-2xl flex flex-col items-center text-center gap-2 transition-transform hover:-translate-y-2"
            >
              <div className="p-2.5 rounded-lg bg-brand-orange/10 text-brand-orange">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-white">{item.label}</h4>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
