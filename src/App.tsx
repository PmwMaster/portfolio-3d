import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ParticlesBackground from './components/ParticlesBackground'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

function App() {
  return (
    <main className="bg-dark-bg/0 min-h-screen text-slate-100 selection:bg-brand-orange selection:text-white antialiased">
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />

      <footer className="w-full py-10 px-6 border-t border-slate-800 bg-dark-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Cristiano. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PmwMaster"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@cristiano.dev"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors text-sm"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
