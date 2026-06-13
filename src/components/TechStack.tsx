import { motion } from 'framer-motion'
import {
  SiReact, SiTypescript, SiNodedotjs, SiThreedotjs,
  SiTailwindcss, SiDocker, SiGit, SiPostgresql,
} from '@icons-pack/react-simple-icons'
import TiltCard from './TiltCard'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
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
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-2">
            Tech Stack
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white">
            Tecnologias que Utilizo
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <TiltCard className="glass p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-colors h-full flex flex-col items-center gap-3">
                  <Icon size={40} color={skill.color} />
                  <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
