const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-4">
          <span className="text-electric font-mono text-xl">03.</span> CONTACT
        </h2>
        
        <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase">
          LETS BUILD <br /> SOMETHING <span className="text-electric">GREAT.</span>
        </h3>
        
        <p className="max-w-lg text-gray-400 leading-relaxed text-lg">
          Currently seeking software engineering internship opportunities. 
          Reach out through any of the channels below.
        </p>

        {/* Minimalist Link List */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 pt-4 font-mono text-sm uppercase tracking-widest">
          <a 
            href="mailto:kavindua627@gmail.com" 
            className="text-softText hover:text-electric transition-colors"
          >
            Email
          </a>
          
          <span className="hidden md:block text-white/10">/</span>
          
          <a 
            href="https://github.com/Avishka30" 
            target="_blank" 
            rel="noreferrer" 
            className="text-softText hover:text-electric transition-colors"
          >
            GitHub
          </a>
          
          <span className="hidden md:block text-white/10">/</span>
          
          <a 
            href="https://www.linkedin.com/in/kavindu-avishka-393512346" 
            target="_blank" 
            rel="noreferrer" 
            className="text-softText hover:text-electric transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;