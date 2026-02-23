const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
        <span className="text-electric font-mono text-xl">01.</span> ABOUT_ME
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Education</h3>
          </div>

          <div className="relative pl-8 border-l border-white/10 space-y-12">
            {/* IJSE */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-midnight border-2 border-electric shadow-[0_0_10px_#38BDF8]"></div>
              <h4 className="text-softText font-bold">Institute of Software Engineering (IJSE)</h4>
              <p className="text-electric font-mono text-[10px] mb-2 uppercase tracking-widest">Galle // 2024-2026  Present</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                GDSE - Comprehensive curriculum focused on Enterprise Java, 
                Software Architecture, and Full-Stack Engineering.
              </p>
            </div>

            {/* A/L */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-midnight border-2 border-white/20"></div>
              <h4 className="text-softText font-bold">G.C.E. Advanced Level (A/L)</h4>
              <p className="text-gray-500 font-mono text-[10px] mb-2 uppercase tracking-widest">[G/P.De.S.Kularathna College] // Completed</p>
            </div>

            {/* O/L */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-midnight border-2 border-white/20"></div>
              <h4 className="text-softText font-bold">G.C.E. Ordinary Level (O/L)</h4>
              <p className="text-gray-500 font-mono text-[10px] mb-2 uppercase tracking-widest">[Gramani Maha Vidyalaya] // Completed</p>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Experience</h3>
          </div>

          <div className="relative pl-8 border-l border-white/10 space-y-8">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-midnight border-2 border-electric shadow-[0_0_10px_#38BDF8]"></div>
              <h4 className="text-softText font-bold">Full Stack Developer (Academic)</h4>
              <p className="text-electric font-mono text-[10px] mb-2 uppercase tracking-widest">2025 - Present</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Engineering high-performance systems like <span className="text-white">MarineX</span>, 
                <span className="text-white">SupportFlow</span>, and specialized desktop apps 
                for healthcare using <span className="text-white">JavaFX</span> and <span className="text-white">Spring Boot</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;