import Navbar from './components/Navbar'

function App() {
  return (
    <main className="min-h-screen bg-midnight text-softText">
      <Navbar />
      <div className="pt-32 px-6 flex flex-col items-center">
        <p className="text-electric font-mono">
          &gt; System Online: Navbar Configured.
        </p>
      </div>
    </main>
  )
}

export default App