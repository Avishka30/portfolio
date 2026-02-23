const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-midnight/80 backdrop-blur-md px-6">
      <div className="max-w-6xl mx-auto h-20 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-electric uppercase">Portfolio</span>
        </div>
        <div className="flex gap-8 text-sm font-mono">
          <a href="#projects" className="hover:text-electric transition-colors">/projects</a>
          <a href="#skills" className="hover:text-electric transition-colors">/skills</a>
          <a href="#" className="text-electric font-bold">/contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;