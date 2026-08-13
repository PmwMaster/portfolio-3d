import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    year: '2025',
    title: 'Desenvolvedor Full-Stack Freelancer',
    desc: 'Desenvolvimento de aplicações web completas para clientes, desde landing pages até dashboards interativos com React, Node.js e Three.js.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: '2024',
    title: 'Desenvolvedor Frontend',
    desc: 'Criação de interfaces modernas com React, TypeScript e Tailwind. Foco em performance, acessibilidade e experiências 3D imersivas.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: '2023',
    title: 'Início na Programação',
    desc: 'Comecei a jornada no desenvolvimento web, aprendendo HTML, CSS, JavaScript e construindo projetos pessoais para consolidar conhecimento.',
    icon: <GraduationCap className="w-5 h-5" />,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-24 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-2">
            Experiência
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white">
            Minha{' '}
            <span className="text-gradient">Trajetória</span>
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 md:mb-16 pl-2 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-dark-card border-2 border-brand-orange flex items-center justify-center text-brand-orange mt-1">
                {exp.icon}
              </div>

              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <span className="inline-block text-brand-orange text-sm font-bold mb-1 px-3 py-0.5 rounded-full bg-brand-orange/10">
                  {exp.year}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                <p className="text-slate-400 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
