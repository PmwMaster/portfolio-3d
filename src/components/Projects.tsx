import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import TiltCard from './TiltCard'

const projects = [
  {
    title: 'Portfolio 3D',
    desc: 'Portfolio pessoal interativo com cubo mágico 3D, iluminação dinâmica em tempo real e efeitos de partículas.',
    tags: ['React', 'Three.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/PmwMaster/portfolio-3d',
    gradient: 'from-brand-orange/40 to-brand-yellow/20',
  },
  {
    title: 'E-Commerce API',
    desc: 'API RESTful para e-commerce com autenticação, integração de pagamentos e gestão de pedidos.',
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'Stripe'],
    github: '#',
    gradient: 'from-brand-blue/40 to-purple-600/20',
  },
  {
    title: 'Dashboard Analytics',
    desc: 'Dashboard de análises em tempo real com gráficos interativos, filtros de dados e exportação.',
    tags: ['React', 'TypeScript', 'Tailwind', 'WebSocket'],
    github: '#',
    gradient: 'from-green-500/30 to-brand-blue/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">
            Portfólio
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white">
            Projetos em Destaque
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="h-full"
            >
              <TiltCard className="bg-dark-card rounded-2xl overflow-hidden border border-slate-800 group h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center`}>
                  <span className="text-4xl font-black text-white/10 tracking-widest select-none">
                    {p.title.charAt(0)}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-dark-bg text-white border border-slate-700 rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transition-all"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transition-all"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-2xl font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-slate-400 mb-6 flex-grow">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
