const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Core",
      skills: ["Java", "Spring Boot", "Node.js", "Express", "Python", "Hibernate", "Maven"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["React Native", "React", "TypeScript", "JavaScript", "Tailwind CSS", "JavaFX", "Bootstrap"]
    },
    {
      title: "Data & Cloud",
      skills: ["MySQL", "MongoDB", "Firebase", "Stripe API", "Google Gemini AI", "JWT", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5 bg-midnight">
      {/* Updated Numbering and Hellfire Header */}
      <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 text-white uppercase italic tracking-tighter">
        <span className="text-hellfire font-mono text-xl not-italic">03.</span> TECHNICAL_STACK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-6 group">
            {/* Category Header with Hellfire Underline */}
            <h3 className="text-hellfire font-mono text-sm uppercase tracking-[0.3em] border-b border-hellfire/20 pb-2 group-hover:border-hellfire transition-colors duration-500">
              {category.title}
            </h3>
            
            <ul className="space-y-4">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3 group/item">
                  {/* Glowing "Ember" Bullet Points */}
                  <span className="w-1.5 h-1.5 bg-hellfire rounded-full group-hover/item:shadow-[0_0_10px_#FF3131] group-hover/item:scale-125 transition-all duration-300"></span>
                  
                  {/* Skill Text - High Contrast */}
                  <span className="text-gray-400 font-light tracking-wide group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Industrial Status Line */}
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
          <span className="text-hellfire italic">Architecture:</span> Microservices & Layered
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
          
        </div>
      </div>
    </section>
  );
};

export default Skills;