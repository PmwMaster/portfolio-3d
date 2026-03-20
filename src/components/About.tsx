import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="text-brand-yellow font-semibold tracking-wide uppercase text-sm mb-2">About Me</h2>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Designing code that <br /><span className="text-gradient">makes a difference.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            I'm a full-stack engineer who loves creating rich, interactive environments online. Combining my passion for beautiful aesthetics with solid engineering principles, I build scalable web experiences.
          </p>
        </motion.div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-8 rounded-3xl flex flex-col items-center justify-center transition-transform hover:-translate-y-2"
          >
             <h3 className="text-5xl font-bold text-white mb-2">
               10+
             </h3>
             <p className="text-slate-400 font-medium tracking-wide uppercase text-xs text-center">Projects Completed</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-3xl flex flex-col items-center justify-center transition-transform hover:-translate-y-2"
          >
             <h3 className="text-5xl font-bold text-white mb-2">
               3+
             </h3>
             <p className="text-slate-400 font-medium tracking-wide uppercase text-xs text-center">Years Experience</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-8 rounded-3xl flex flex-col items-center justify-center transition-transform hover:-translate-y-2"
          >
             <h3 className="text-5xl font-bold text-brand-orange mb-2">
               100%
             </h3>
             <p className="text-slate-400 font-medium tracking-wide uppercase text-xs text-center">Commitment</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-8 rounded-3xl flex flex-col items-center justify-center transition-transform hover:-translate-y-2"
          >
             <h3 className="text-5xl font-bold text-brand-blue mb-2">
               50+
             </h3>
             <p className="text-slate-400 font-medium tracking-wide uppercase text-xs text-center">Happy Clients</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
