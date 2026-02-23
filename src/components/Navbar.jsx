import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "/about", href: "#about" },
    { name: "/projects", href: "#projects" },
    { name: "/skills", href: "#skills" },
    { name: "/contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-midnight/80 backdrop-blur-md px-6">
      <div className="max-w-6xl mx-auto h-20 flex justify-between items-center">
        
        {/* Logo - Stays clean on all screens */}
        <div className="text-xl font-bold tracking-tighter z-[110]">
          <span className="text-hellfire uppercase italic hidden sm:inline">Kavindu Avishka</span>
          <span className="text-hellfire uppercase italic sm:hidden">K. Avishka</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-mono">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-400 hover:text-hellfire transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button - Increased Z-Index to stay above overlay */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-hellfire z-[110] focus:outline-none transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay - Now using AnimatePresence for smooth sliding */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 w-full h-screen bg-midnight flex flex-col items-center justify-center gap-8 font-mono z-[100]"
          >
            {/* Background Decorative Text - Subtle "Full Stack" in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none">
              KAVINDU
            </div>

            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-3xl text-gray-300 hover:text-hellfire transition-all duration-300 tracking-[0.2em] font-bold"
              >
                {link.name}
              </motion.a>
            ))}

            {/* Status Indicator inside menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-3 text-xs text-hellfire uppercase tracking-[0.5em]"
            >
               <span className="w-2 h-2 bg-hellfire rounded-full animate-pulse shadow-[0_0_10px_#FF3131]"></span>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;