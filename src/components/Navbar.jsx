import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "/about", href: "#about" },
    { name: "/projects", href: "#projects" },
    { name: "/skills", href: "#skills" },
    { name: "/contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-midnight/80 backdrop-blur-md px-6">
      <div className="max-w-6xl mx-auto h-20 flex justify-between items-center">
        {/* Logo - Updated to Hellfire Red */}
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-hellfire uppercase italic hidden sm:inline">Kavindu Avishka</span>
          <span className="text-hellfire uppercase italic sm:hidden">K. Avishka</span>
        </div>

        {/* Desktop Links - Subtle Crimson Hover */}
        <div className="hidden md:flex gap-8 text-sm font-mono">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-400 hover:text-hellfire hover:glow-sm transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-hellfire focus:outline-none transition-colors"
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

      {/* Mobile Menu Overlay - Hellfire Variant */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-midnight/95 backdrop-blur-2xl border-b border-hellfire/10 py-10 flex flex-col items-center gap-8 font-mono animate-in fade-in slide-in-from-top-4 duration-500">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-xl text-gray-300 hover:text-hellfire transition-all duration-300 tracking-widest"
            >
              {link.name}
            </a>
          ))}
          {/* Status Indicator for Mobile Menu */}
          <div className="mt-4 flex items-center gap-2 text-[10px] text-hellfire/50 uppercase tracking-[0.3em]">
             <span className="w-1.5 h-1.5 bg-hellfire rounded-full animate-pulse"></span>
             System_Online
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;