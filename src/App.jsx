import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects' // 1. Import it

function App() {
  return (
    <main className="min-h-screen bg-midnight text-softText selection:bg-electric/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      <Hero />
      <Projects /> {/* 2. Add it here */}
      
      {/* Spacer for footer */}
      <footer className="py-10 text-center text-gray-600 text-xs font-mono">
        © 2026 KAVINDU AVISHKA // BUILT WITH VITE & TAILWIND
      </footer>
    </main>
  )
}

export default App