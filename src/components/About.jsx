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

          <div className="relative pl-8 border-l border-white/10 space-y-8">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-midnight border-2 border-electric"></div>
              <h4 className="text-softText font-bold">Institute of Software Engineering (IJSE)</h4>
              <p className="text-electric font-mono text-xs mb-2">Galle, Sri Lanka // 2024 - Present</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently pursuing a comprehensive Computer Science curriculum focused on 
                Enterprise Application Development, Software Architecture, and Full-Stack Engineering.
              </p>
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
              <h4 className="text-softText font-bold">Full Stack Developer (Academic Projects)</h4>
              <p className="text-electric font-mono text-xs mb-2">2025 - Present</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Developing high-performance systems like <span className="text-white">MarineX</span> 
                and <span className="text-white">SupportFlow</span>. Focused on implementing 
                layered architectures, secure JWT authentication, and AI-driven features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;