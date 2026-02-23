import { motion } from 'framer-motion';

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const tagVars = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 } 
    }
  };

  const roles = ["FULL STACK", "MERN STACK", "MOBILE"];

  return (
    /* FIX 1: Change min-h-[90vh] to min-h-fit on mobile. 
       FIX 2: Use pt-32 to clear the h-20 navbar with extra breathing room.
    */
    <section className="min-h-fit md:min-h-[90vh] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 max-w-6xl mx-auto gap-12 pt-32 pb-16 md:pt-0 bg-midnight">
      
      {/* Photo - Now order-1 so it's on top for mobile */}
      <div className="flex-1 flex justify-center order-1 md:order-2">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-hellfire to-embers rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
          
          {/* FIX 3: Responsive width (w-56 on mobile, w-80 on desktop) */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-2xl border-2 border-hellfire/30 overflow-hidden bg-surface shadow-[0_0_50px_rgba(255,49,49,0.1)]">
             <img 
               src="/your-photo.jpeg" 
               alt="Kavindu Avishka" 
               className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
             />
          </div>

          <div className="absolute -bottom-4 -right-4 bg-midnight border border-hellfire/20 px-3 py-1.5 rounded-lg backdrop-blur-md">
            <p className="text-[10px] font-mono text-hellfire animate-pulse">● STATUS: AVAILABLE</p>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 order-2 md:order-1">
        
        {/* FIX 4: text-4xl on mobile to keep it on one or two lines */}
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight text-white">
          HELLO, I'M <br /> 
          <span className="text-hellfire uppercase italic">Kavindu Avishka</span>
        </h1>

        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="flex flex-wrap justify-center md:justify-start gap-3 text-[10px] md:text-xs font-mono"
        >
          {roles.map((role, idx) => (
            <motion.span 
              key={idx}
              variants={tagVars}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
        
        <p className="max-w-md md:max-w-xl text-base md:text-lg text-gray-400 leading-relaxed font-light">
          I am a passionate software engineer focused on building 
          <span className="text-white"> mobile apps</span> and 
          <span className="text-white"> scalable systems</span>. 
          Specializing in <span className="text-hellfire/80 font-mono">Spring Boot</span> and React Native.
        </p>

        <div className="flex gap-4 pt-2">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-hellfire text-midnight font-black rounded-sm hover:shadow-[0_0_40px_rgba(255,94,0,0.5)] uppercase tracking-widest text-xs md:text-sm transition-all"
          >
            Explore Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;