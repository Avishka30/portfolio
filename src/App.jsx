import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' // 1. Import
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <main className="min-h-screen bg-midnight text-softText selection:bg-electric/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      <Hero />
      <About /> {/* 2. Place it here */}
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-10 text-center border-t border-white/5 opacity-50 text-[10px] font-mono tracking-[0.5em]">
        DESIGNED & CODED BY KAVINDU AVISHKA // 2026
      </footer>
    </main>
  )
}

export default App;