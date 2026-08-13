import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, CheckCircle, Loader2 } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

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
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-2">
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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <input type="hidden" name="access_key" value="e7e2d4a5-3665-4a08-84e0-cd3cc623ec79" />
            <input type="hidden" name="subject" value="Novo contato do portfólio" />
            <input type="hidden" name="from_name" value="Portfólio Cristiano" />
            <input type="hidden" name="replyto" value="email" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <input
              type="text"
              name="Nome"
              required
              placeholder="Seu Nome"
              disabled={status === 'loading'}
              className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 transition-all disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Seu Email"
              disabled={status === 'loading'}
              className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 transition-all disabled:opacity-50"
            />
            <textarea
              name="Mensagem"
              required
              rows={5}
              placeholder="Sua Mensagem..."
              disabled={status === 'loading'}
              className="w-full bg-dark-bg/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 transition-all resize-none disabled:opacity-50"
            />

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2 text-green-400 text-sm"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} />
                  Mensagem enviada com sucesso!
                </div>
                <p className="text-slate-500 text-xs">
                  Não recebeu? Envie diretamente para{' '}
                  <a href="mailto:xaviernitrov@gmail.com" className="text-brand-orange hover:underline">
                    xaviernitrov@gmail.com
                  </a>
                </p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                Erro ao enviar. Tente novamente ou me envie um email direto.
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-brand-orange to-brand-yellow hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
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
