import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ParticlesBackground from './components/ParticlesBackground'

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
      <footer className="w-full py-8 text-center text-slate-500 text-sm border-t border-slate-800 bg-dark-bg">
        <p>&copy; {new Date().getFullYear()} Cristiano. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
