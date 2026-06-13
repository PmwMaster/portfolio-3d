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
          <h2 className="text-brand-yellow font-semibold tracking-wide uppercase text-sm mb-2">
            Sobre Mim
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Construindo a web,{' '}
            <span className="text-gradient">um pixel por vez.</span>
          </h3>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            Sou um desenvolvedor full-stack apaixonado por criar experiências
            ricas e interativas na web. Combino frameworks modernos de frontend
            com arquitetura sólida de backend para entregar aplicações rápidas,
            bonitas e escaláveis.
          </p>
          <p className="text-slate-500 text-base leading-relaxed">
            Quando não estou programando, pode me encontrar explorando gráficos 3D,
            contribuindo com open source ou experimentando novas tecnologias.
          </p>
        </motion.div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-2"
            >
              <div className="p-3 rounded-xl bg-brand-orange/10 text-brand-orange">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{item.label}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
