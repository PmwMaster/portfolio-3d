import { motion } from 'framer-motion'
import { Code2, Layout, Server, Cpu } from 'lucide-react'

const highlights = [
  { icon: <Layout className="w-6 h-6" />, label: 'Frontend', desc: 'React, Next.js, Tailwind' },
  { icon: <Server className="w-6 h-6" />, label: 'Backend', desc: 'Node.js, Python, SQL' },
  { icon: <Code2 className="w-6 h-6" />, label: 'Clean Code', desc: 'SOLID, Design Patterns' },
  { icon: <Cpu className="w-6 h-6" />, label: '3D & Graphics', desc: 'Three.js, WebGL' },
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
            About Me
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Building the web,{' '}
            <span className="text-gradient">one pixel at a time.</span>
          </h3>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            I&apos;m a full-stack developer passionate about creating rich,
            interactive experiences on the web. I combine modern frontend
            frameworks with solid backend architecture to deliver applications
            that are fast, beautiful, and scalable.
          </p>
          <p className="text-slate-500 text-base leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring 3D graphics,
            contributing to open source, or experimenting with new technologies.
          </p>
        </motion.div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
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
