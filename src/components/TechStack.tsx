import { motion } from 'framer-motion'
import { FileCode2, TerminalSquare, Compass, Braces, Database, Palette } from 'lucide-react'
import TiltCard from './TiltCard'

const skills = [
  { name: 'Frontend', icon: <Palette className="w-8 h-8 text-brand-orange" />, desc: 'React, Tailwind, Three.js' },
  { name: 'Backend', icon: <Database className="w-8 h-8 text-brand-blue" />, desc: 'Node.js, Python, SQL' },
  { name: 'Architecture', icon: <Braces className="w-8 h-8 text-brand-yellow" />, desc: 'System Design, APIs' },
  { name: 'Clean Code', icon: <FileCode2 className="w-8 h-8 text-green-400" />, desc: 'SOLID, Design Patterns' },
  { name: 'DevOps', icon: <TerminalSquare className="w-8 h-8 text-slate-300" />, desc: 'Docker, CI/CD' },
  { name: 'Exploration', icon: <Compass className="w-8 h-8 text-purple-400" />, desc: 'Constantly learning' },
]

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-24 bg-dark-card md:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-2">My Arsenal</h2>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {skills.map((skill, i) => (
             <motion.div
               key={skill.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -5 }}
               className="h-full"
             >
               <TiltCard className="glass p-8 rounded-2xl border border-slate-800 hover:border-slate-500 transition-colors h-full flex flex-col">
                 <div className="mb-6 p-4 bg-dark-bg inline-block rounded-xl border border-slate-800">
                    {skill.icon}
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                 <p className="text-slate-400">{skill.desc}</p>
               </TiltCard>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
