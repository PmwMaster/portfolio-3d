import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import TiltCard from './TiltCard'

const projects = [
  {
    title: 'SGI-ATI',
    desc: 'Sistema corporativo de gestão de inventário e controle de ativos com autenticação, CRUD completo, dashboard e rastreabilidade de equipamentos.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    github: 'https://github.com/JoaoPOPaulino/SGI_ATI',
    live: 'https://sgi-ati.vercel.app',
    image: '/projects/sgi.png',
    gradient: 'from-brand-orange/40 to-brand-yellow/20',
  },
  {
    title: 'Marins Advocacia',
    desc: 'Landing page premium para escritório de advocacia criminal com funil direto para WhatsApp, animações cinematográficas e SEO otimizado. Em produção.',
    tags: ['HTML', 'CSS', 'JavaScript', 'AOS'],
    github: 'https://github.com/PmwMaster/MarinsAdvocacia',
    live: 'http://drsandromarins.com.br',
    image: '/projects/marins.png',
    gradient: 'from-brand-blue/40 to-purple-600/20',
  },
  {
    title: 'Vortex Audio Labs',
    desc: 'Plataforma de e-commerce para periféricos de áudio com carrinho, checkout Stripe, autenticação via Supabase e catálogo interativo.',
    tags: ['React', 'TypeScript', 'Supabase', 'Stripe'],
    github: 'https://github.com/PmwMaster/Vortex',
    live: 'https://office-x-jet.vercel.app',
    image: '/projects/vortex.png',
    gradient: 'from-green-500/30 to-brand-blue/20',
  },
  {
    title: 'HeroBurguer',
    desc: 'Landing page premium para hamburgueria com hero cinematográfico via Canvas API, cardápio interativo com scroll snap e simulação de pedidos.',
    tags: ['HTML', 'SCSS', 'JavaScript', 'Canvas API'],
    github: 'https://github.com/PmwMaster/HeroBurguer',
    live: 'https://pmwmaster.github.io/HeroBurguer/',
    image: '/projects/heroburguer.png',
    gradient: 'from-red-500/30 to-brand-yellow/20',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <div className={`h-48 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden`}>
                  <img
                    src={p.image}
                    alt={`Screenshot do projeto ${p.title}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-dark-bg text-white border border-slate-700 rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transition-all z-10"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transition-all z-10"
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
