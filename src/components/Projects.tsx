import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import TiltCard from './TiltCard'

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce solution with next-gen performance.',
    tags: ['React', 'Tailwind', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'AI Dashboard',
    desc: 'Analytics dashboard featuring complex data visualizations.',
    tags: ['React', 'Three.js', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Social App',
    desc: 'Real-time communication app utilizing WebSockets.',
    tags: ['Node.js', 'Socket.io', 'React'],
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
  }
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
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Featured Work
          </h2>
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
                 <div className="h-48 overflow-hidden relative">
                   <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href="#" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><ExternalLink size={20}/></a>
                      <a href="#" className="p-3 bg-dark-bg text-white border border-slate-700 rounded-full hover:scale-110 transition-transform"><Github size={20}/></a>
                   </div>
                 </div>
                 <div className="p-6 flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                   <p className="text-slate-400 mb-6 flex-grow">{p.desc}</p>
                   <div className="flex gap-2 flex-wrap">
                     {p.tags.map(t => (
                       <span key={t} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full">{t}</span>
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
