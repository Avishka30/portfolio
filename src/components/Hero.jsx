import { motion } from 'framer-motion';

const Hero = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each tag
        delayChildren: 0.5    // Delay before the first tag starts
      }
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

  const roles = ["FULL STACK DEVELOPER", "MERN STACK DEVELOPER", "MOBILE DEVELOPER"];

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto gap-12 pt-20">
      {/* Left Side: Text Content */}
      <div className="flex-1 space-y-6 order-2 md:order-1">
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
          HELLO, I'M <br /> 
          <span className="text-electric uppercase">Kavindu Avishka</span>
        </h1>

        {/* Animated Tags Container */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="flex flex-wrap gap-3 text-xs font-mono"
        >
          {roles.map((role, idx) => (
            <motion.span 
              key={idx}
              variants={tagVars}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-electric/50 transition-colors"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
        
        <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
          I am a passionate software engineer focused on building high-performance 
          <span className="text-white"> Mobile applications</span> and 
          <span className="text-white"> Scalable web systems</span>. 
          Currently specializing in <span className="text-white">Spring Boot</span>, the MERN stack, and React Native.
        </p>

        <div className="flex gap-4 pt-4">
          <a href="#projects" className="px-8 py-3 bg-electric text-midnight font-bold rounded-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            Explore Work
          </a>
        </div>
      </div>

      {/* Right Side: Photo with Electric Border */}
      <div className="flex-1 flex justify-center order-1 md:order-2">
        <div className="relative group">
          <div className="absolute -inset-1 bg-electric rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-electric overflow-hidden bg-surface shadow-[0_0_40px_rgba(56,189,248,0.15)]">
             <img 
               src="/your-photo.jpeg" 
               alt="Professional Portrait" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;