import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <main className="min-h-screen bg-midnight text-softText selection:bg-electric/30">
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      <Hero />
      
      {/* Placeholder for the next section */}
      <div id="projects" className="h-20"></div>
    </main>
  )
}

export default App