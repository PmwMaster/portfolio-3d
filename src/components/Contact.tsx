import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-[100%] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">
            Entre em Contato
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Vamos trabalhar{' '}
            <span className="text-gradient">juntos.</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Tem um projeto em mente ou quer trocar uma ideia? Me envie uma
            mensagem que responderei o mais rápido possível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            action="https://api.web3forms.com/submit"
            method="POST"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY'} />
            <input type="hidden" name="subject" value="Novo contato do portfólio" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <input
              type="text"
              name="name"
              required
              placeholder="Seu Nome"
              className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-all"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Seu Email"
              className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-all"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Sua Mensagem..."
              className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-brand-orange to-brand-yellow hover:scale-[1.02] transition-transform"
            >
              Enviar Mensagem
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6 justify-center"
          >
            <a
              href="mailto:xaviernitrov@gmail.com"
              className="glass p-5 rounded-2xl border border-slate-800 hover:border-brand-orange/50 transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white font-medium">xaviernitrov@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/PmwMaster"
              target="_blank"
              rel="noreferrer"
              className="glass p-5 rounded-2xl border border-slate-800 hover:border-brand-orange/50 transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-slate-800 text-white group-hover:scale-110 transition-transform">
                <Github size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">GitHub</p>
                <p className="text-white font-medium">@PmwMaster</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/cristiano-xavier-426471342/"
              target="_blank"
              rel="noreferrer"
              className="glass p-5 rounded-2xl border border-slate-800 hover:border-brand-orange/50 transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue group-hover:scale-110 transition-transform">
                <Linkedin size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">LinkedIn</p>
                <p className="text-white font-medium">Conecte-se comigo</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
