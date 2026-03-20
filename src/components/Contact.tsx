import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-24 bg-dark-card md:bg-transparent relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-[100%] pointer-events-none -z-10" />
      
      <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl border border-slate-800 flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Let's build something <span className="text-gradient">amazing.</span>
          </h2>
          <p className="text-slate-400">Reach out today and let's get started on your next project.</p>
        </motion.div>

        <motion.form 
          action="https://api.web3forms.com/submit"
          method="POST"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-5 w-full"
        >
          {/* ATENÇÃO: Substituir pela chave recebida no email via Web3Forms (gratuito) */}
          <input type="hidden" name="access_key" value="SUA_CHAVE_AQUI" />
          
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Name" 
              className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue transition-all"
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email" 
              className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
          <textarea 
            name="message"
            required
            rows={5} 
            placeholder="Your Message..." 
            className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue transition-all"
          />
          <button 
            type="submit" 
            className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue to-purple-600 hover:opacity-90 transition-opacity mt-2"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
